import {simpleSwapInfo, usdcInfo, linkInfo} from "./contracts_and_abi.js";
import {approve, reverseButtons, getBigNumberWithDecimals} from "./secondary_functions.js";
import {getLpTokenPriceBigNumberWithDecimals} from "./price_functions.js";
import {changeUsdcInput, changeLinkInput, changeMinAmountReceived, changeAmountUsdcToSupply,  changeAmountLinkToSupply} from "./autocompletion_functions.js";


const config = require("./.config.json");
const serverUrl = config["serverUrl"];
const appId = config["appId"];

Moralis.start({serverUrl, appId});

let tokenForSale = 0;

if (Moralis.User.current()){ Moralis.User.logOut(); };

async function connect() { 
    if (!Moralis.User.current()) {
      await Moralis.authenticate({
        signingMessage: "Log in using Moralis",
      });
    }
  }

async function swap() {
  const amountSoldToken = (tokenForSale == 0) ? parseFloat(document.getElementById("link-input").value) : parseFloat(document.getElementById("usdc-input").value);

  if (amountSoldToken <= 0) {
      console.log("The amount of token sold should be > 0!");
    }
    
  else {
    const minAmountPurchasedToken = parseFloat(document.getElementById("min_amount_purchased_token").getAttribute('data-value'));

    const numberDecimalsSoldToken = (tokenForSale == 0) ? 18 : 6;
    const numberDecimalsPurchasedToken = (tokenForSale == 0) ? 6 : 18;

    const amountSoldTokenStr = getBigNumberWithDecimals(amountSoldToken, numberDecimalsSoldToken).toString();
    const minAmountPurchasedTokenStr = getBigNumberWithDecimals(minAmountPurchasedToken, numberDecimalsPurchasedToken).toString();
      
    const soldTokenContractAdress = (tokenForSale == 0) ? linkInfo["contractAddress"] : usdcInfo["contractAddress"];
    const soldTokenAbi = (tokenForSale == 0) ? linkInfo["abi"] : usdcInfo["abi"];

    const tx = await approve(amountSoldTokenStr, simpleSwapInfo["contractAddress"], soldTokenContractAdress, soldTokenAbi);
    await tx.wait();

    const writeOptionsSwap = {
      contractAddress: simpleSwapInfo["contractAddress"],
      functionName: "swap",
      abi: simpleSwapInfo["abi"],
      params: {quantitySoldToken : amountSoldTokenStr,
              minAmountPurchasedToken : minAmountPurchasedTokenStr, 
              tokenForSale : tokenForSale
              }
    };

    await Moralis.executeFunction(writeOptionsSwap);
    }

  }


async function supply() {
  const amountUsdc = parseFloat(document.getElementById("supply-usdc-input").value);
  const amountLink = parseFloat(document.getElementById("supply-link-input").value);
  
  const [priceLinkLpToken, priceUsdcLpToken] = await getLpTokenPriceBigNumberWithDecimals();
  const amountLpTokens = Math.min(amountLink / priceLinkLpToken.shiftedBy(-18).toNumber(),
                                   amountUsdc / priceUsdcLpToken.shiftedBy(-6).toNumber());

  const allowedAmountUsdcStr = priceUsdcLpToken.multipliedBy(amountLpTokens).multipliedBy(1.1).toFixed(0).toString();
  const allowedAmountLinkStr = priceLinkLpToken.multipliedBy(amountLpTokens).multipliedBy(1.1).toFixed(0).toString();

  const txUsdc = await approve(allowedAmountUsdcStr, simpleSwapInfo["contractAddress"], usdcInfo["contractAddress"], usdcInfo["abi"]);
  await txUsdc.wait();

  const txLink = await approve(allowedAmountLinkStr, simpleSwapInfo["contractAddress"], linkInfo["contractAddress"], linkInfo["abi"]);
  await txLink.wait();

  const amountLpTokensWithDecimalsStr = getBigNumberWithDecimals(amountLpTokens, 6).toString();

  const writeOptionsSupply = {
    contractAddress: simpleSwapInfo["contractAddress"],
    functionName: "supply",
    abi: simpleSwapInfo["abi"],
    params: {amountLpTokens:amountLpTokensWithDecimalsStr}
  };

  await Moralis.executeFunction(writeOptionsSupply);
}


async function withdraw() {
  const amountLpTokens = parseFloat(document.getElementById("withdraw-liquidity-input").value);
  const amountLpTokensWithDecimalsStr = getBigNumberWithDecimals(amountLpTokens, 6).toString();

  const writeOptionsWithdraw = {
    contractAddress: simpleSwapInfo["contractAddress"],
    functionName: "withdraw",
    abi: simpleSwapInfo["abi"],
    params : {amountLpTokens:amountLpTokensWithDecimalsStr}
  };
  
  await Moralis.executeFunction(writeOptionsWithdraw);
}


document.getElementById("connect-btn").onclick = connect;

document.getElementById("swap-btn").onclick = swap;
document.getElementById("supply-btn").onclick = supply;
document.getElementById("withdraw-btn").onclick = withdraw;

document.getElementById("switch-btn").onclick = () => {tokenForSale = (tokenForSale + 1) % 2; reverseButtons(tokenForSale);};

document.getElementById("link-input").onchange = async () => {await changeUsdcInput(tokenForSale); changeMinAmountReceived(tokenForSale);};
document.getElementById("usdc-input").onchange = async () => {await changeLinkInput(tokenForSale); changeMinAmountReceived(tokenForSale);};

document.getElementById("supply-usdc-input").onchange = async () => {await changeAmountLinkToSupply();};
document.getElementById("supply-link-input").onchange = async () => {await changeAmountUsdcToSupply();};
document.getElementById("slippage").onchange = () => {changeMinAmountReceived(tokenForSale);};
