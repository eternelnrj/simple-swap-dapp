const info = require("../build/deployments/42/0x83A40490dA7D23Bc9E67E0eA9ddEc7D173515fa4.json"); //change name
const BigNumber = require('bignumber.js');

const serverUrl = "https://rjfi3tltmxvh.usemoralis.com:2053/server";
const appId = "97wagl7iRrfE4SiHD8Y0aR77PrX5Btie0sisKP26";
Moralis.start({ serverUrl, appId});

const simpleSwapContractAddress = info["deployment"]["address"];
const simpleSwapAbi = require('../build/contracts/SimpleSwap.json')["abi"];//info["abi"];

linkContractAddress = "0xa36085F69e2889c224210F603D836748e7dC0088";
linkAbi = require("../build/contracts/IERC20.json")["abi"];

usdcContractAddress = "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede";
usdcAbi = require("../build/contracts/IERC20.json")["abi"];

let tokenForSale = 0;


async function connect() { 
    if (!Moralis.User.current()) {
      await Moralis.authenticate({
        signingMessage: "Log in using Moralis",
      });
    }
    
  }


async function disconnect() { 
    let user = Moralis.User.current();

    if (user)
    { 
      Moralis.User.logOut();
    }

  }
  

  function reverseButtons() {
    const linkInput = document.getElementById("link-input");
    const usdcInput = document.getElementById("usdc-input");

    linkInput.name = "usdc";
    linkInput.id = "usdc-input";

    usdcInput.name = "link";
    usdcInput.id = "link-input";

    const linkLabel = document.getElementById("link-swap-label-id");
    const usdcLabel = document.getElementById("usdc-swap-label-id");

    linkLabel.for = "usdc";
    linkLabel.id = "usdc-swap-label-id";
    linkLabel.innerHTML = "USDC";

    usdcLabel.for = "link";
    usdcLabel.id = "link-swap-label-id";
    usdcLabel.innerHTML = "link";
   
    tokenForSale = (tokenForSale + 1) % 2;
  }
  // initiatePool(uint256 amountLinkToSupply, uint256 amountUsdcToSupply)
  async function initiatePool() {
    const amountLink = parseFloat(document.getElementById("supply-link-input").value);
    const amountUsdc = parseFloat(document.getElementById("supply-usdc-input").value);

    console.log(amountLink);
    console.log(amountUsdc);

    const amountLinkWithDecimalsStr = getBigNumberWithDecimals(amountLink, 18).toString();
    const amountUsdcWithDecimalsStr = getBigNumberWithDecimals(amountUsdc, 6).toString();

    console.log(amountLinkWithDecimalsStr);
    console.log(amountUsdcWithDecimalsStr);


    const txLink = await approve(amountLinkWithDecimalsStr, simpleSwapContractAddress, linkContractAddress, linkAbi);
    txLink.wait(1);
    const txUsdc = await approve(amountUsdcWithDecimalsStr, simpleSwapContractAddress, usdcContractAddress, usdcAbi);
    txUsdc.wait(1);

    const writeOptionsInitiatePool = {
      contractAddress: simpleSwapContractAddress,
      functionName: "initiatePool",
      abi: simpleSwapAbi,
      params: {amountLinkToSupply : amountLinkWithDecimalsStr,
              amountUsdcToSupply : amountUsdcWithDecimalsStr
            }
    };

    await Moralis.executeFunction(writeOptionsInitiatePool);
  }


  async function swap() {
  
    let quantitySoldToken = getQuantitySoldToken();
    let quantityPurchasedToken = getQuantityPurchasedToken();
    let maxSlippage = parseFloat(document.getElementById("slippage").value);

    let totalLinkAvaialbe = await getTotalAvailableLink();
    let totalUsdcAvailable = await getTotalAvailableUsdc();
    
    let initialPrice = await calculateInitialPrice(totalLinkAvaialbe, totalUsdcAvailable);
    let exchangePrice = await calculateExchangePrice(quantitySoldToken, totalLinkAvaialbe, totalUsdcAvailable);
    
    console.log("initialPrice: " + initialPrice);
    console.log("exchangePrice: " + exchangePrice);


    let priceImpact = (exchangePrice / initialPrice  - 1) * 100;
    console.log("Price imact:");
    console.log(priceImpact);

    const minAmountPurchasedToken = quantityPurchasedToken  * (1 - maxSlippage);

    const numberDecimalsSoldToken = tokenForSale == 0 ? 18 : 6;
    const numberDecimalsPurchasedToken = tokenForSale == 0 ? 18 : 6;

    const quantitySoldTokenStr = getBigNumberWithDecimals(quantitySoldToken, numberDecimalsSoldToken).toString();
    const minAmountPurchasedTokenStr = getBigNumberWithDecimals(minAmountPurchasedToken, numberDecimalsPurchasedToken).toString();
    
    const soldTokenContractAdress = tokenForSale == 0 ? linkContractAddress : usdcContractAddress;
    const soldTokenAbi = tokenForSale == 0 ? linkAbi : usdcAbi;

    const tx = await approve(quantitySoldTokenStr, simpleSwapContractAddress, soldTokenContractAdress, soldTokenAbi);
    tx.wait(1);

    const writeOptionsSwap = {
      contractAddress: simpleSwapContractAddress,
      functionName: "swap",
      abi: simpleSwapAbi,
      params: {quantitySoldToken : quantitySoldTokenStr,
              minAmountPurchasedToken : minAmountPurchasedTokenStr, 
              tokenForSale : tokenForSale
              }
    };

    await Moralis.executeFunction(writeOptionsSwap);

  }




async function supply() {
  let amountUsdc = parseFloat(document.getElementById("supply-usdc-input").value);
  let amountLink = parseFloat(document.getElementById("supply-link-input").value);
  //let am = await getTotalAmountLpTokens();


  //let xAsBigNumber = new BigNumber(10);
  //console.log(xAsBigNumber);
  //console.log(xAsBigNumber.multipliedBy(10).toNumber());
  //console.log(xAsBigNumber.shiftedBy(2).toNumber());


  //console.log(am);
  //console.log(am.toNumber());
  //console.log("amount lp tokens: " + am.shiftedBy(-6).toNumber());



  //console.log("before getLp..");
  
  let [priceLinkLpToken, priceUsdcLpToken] = await getLpTokenPrice();
  let amountLpTokens = Math.min(amountLink / priceLinkLpToken.shiftedBy(-18).toNumber(), amountUsdc / priceUsdcLpToken.shiftedBy(-6).toNumber());
  //console.log("allowedAm...");


  const allowedAmountUsdcStr = priceUsdcLpToken.multipliedBy(amountUsdc).multipliedBy(1.1).toString();
  const allowedAmountUsdcStrWithDecimals = getBigNumberWithDecimals(allowedAmountUsdcStr, 6).toString();
  const allowedAmountLinkStr = priceLinkLpToken.multipliedBy(amountLink).multipliedBy(1.1).toString();
  const allowedAmountLinkStrWithDecimals = getBigNumberWithDecimals(allowedAmountLinkStr, 18).toString();
  
  console.log(priceUsdcLpToken.toString());
  console.log(amountUsdc);
  console.log("allowedAmountUsdcStr: ", allowedAmountUsdcStr),
  console.log("before approve0");

  const txUsdc = await approve(allowedAmountUsdcStr, simpleSwapContractAddress, usdcContractAddress, usdcAbi);
  txUsdc.wait(1);
  console.log("before approve1");

  const txLink = await approve(allowedAmountLinkStr, simpleSwapContractAddress, linkContractAddress, linkAbi);
  txLink.wait(1);

  const amountLpTokensWithDecimalsStr = getBigNumberWithDecimals(amountLpTokens, 6).toString();

  console.log("before execute function");
  const writeOptionsSupply = {
    contractAddress: simpleSwapContractAddress,
    functionName: "supply",
    abi: simpleSwapAbi,
    params: {amountLpTokens : amountLpTokensWithDecimalsStr}
    
  };

  await Moralis.executeFunction(writeOptionsSupply);
}



async function withdraw() {

  const amountLpTokens = parseFloat(document.getElementById("withdraw-liquidity-input").value);
  const amountLpTokensWithDecimalsStr = getBigNumberWithDecimals(amountLpTokens, 6).toString();
  const writeOptionsWithdraw = {
    contractAddress: simpleSwapContractAddress,
    functionName: "withdraw",
    abi: simpleSwapAbi,
    params : {
      amountLpTokens : amountLpTokensWithDecimalsStr
    }
  };
  
  await Moralis.executeFunction(writeOptionsWithdraw);

}


/////////////////////////////////////////////////////////////////////////////////////////////// 
// Secondary functions


async function approve(amountBigNumberWithDecimalsStr, spenderAddress, contractAddress, abi) {

  const writeOptionsApproval = {
      contractAddress: contractAddress,
      functionName: "approve",
      abi: abi,
      params: {spender: spenderAddress, amount: amountBigNumberWithDecimalsStr}
  };

  return await Moralis.executeFunction(writeOptionsApproval);
}

function getBigNumberWithDecimals(x, numberDecimals) {
  let xAsBigNumber = new BigNumber(x);
  let yAsBigNumberWithDecimals = new BigNumber("1".concat("0".repeat(numberDecimals) ));
  
  return xAsBigNumber.multipliedBy(yAsBigNumberWithDecimals);
}    


//  price of the purchased token in terms of sold token
async function calculateExchangePrice()
{
//if(sellLink)...;

// x : sold token 
// y : purchased token

  let quantitySoldToken = await getQuantitySoldToken();
  let totalLinkAvaialbe = await getTotalAvailableLink();
  let totalUsdcAvailable = await getTotalAvailableUsdc();

  console.log("quantitySoldToken: " + quantitySoldToken);
  console.log("totalLinkAvaialbe: " + totalLinkAvaialbe);
  console.log("totalUsdcAvailable: " + totalUsdcAvailable);



  const numberDecimalsSoldToken = (tokenForSale == 0) ? 18 : 6;
  let x = (tokenForSale == 0) ? totalLinkAvaialbe : totalUsdcAvailable;
  let y = (tokenForSale == 0) ? totalUsdcAvailable : totalLinkAvaialbe;
  //disc y / disc x in (x + disc x) (y - disc y) = tot link * tot usdc

  let d_x = getBigNumberWithDecimals(quantitySoldToken, numberDecimalsSoldToken);
  let d_y = y.minus(totalLinkAvaialbe.multipliedBy(totalUsdcAvailable) / (x.plus(d_x)));
  console.log("d_x: " + d_x.toString() );
  console.log("d_y: " + d_y.toString() );

  return d_y.dividedBy(d_x).toNumber();

}

// purchased token in terms of sold token     
async function calculateInitialPrice()
{
  let totalLinkAvaialbe = await getTotalAvailableLink();
  let totalUsdcAvailable = await getTotalAvailableUsdc();

  if (tokenForSale == 0) {
    return totalLinkAvaialbe.dividedBy(totalUsdcAvailable).dividedBy(10 ** 6).toNumber();
  }
  else {
    return totalUsdcAvailable.shiftetdBy(12).dividedBy(totalLinkAvaialbe).toNumber();
  }
}


// returns BigNumber
async function getLpTokenPrice() {
  const readOptionsGetLpTokenPrice = {
    contractAddress: simpleSwapContractAddress,
    functionName: "getLpTokenPrice",
    abi: simpleSwapAbi,
    
  };
  console.log("before calling getLpTokenPrice on EVM");
  const [lpTokenPriceLink, lpTokenPriceUsdc] = await Moralis.executeFunction(readOptionsGetLpTokenPrice);
  return [new BigNumber(lpTokenPriceLink.toString()), new BigNumber(lpTokenPriceUsdc.toString())];
}


// returns  BigNumber
async function getTotalAvailableLink() {

  const readOptionsTotalAvailableLink = {
    contractAddress: simpleSwapContractAddress,
    functionName: "totalAvailableLink",
    abi: simpleSwapAbi
  };

  const totalAvailableLink = await Moralis.executeFunction(readOptionsTotalAvailableLink);
  const totalAvailableLinkBigNumber = new BigNumber(totalAvailableLink.toString());
  //console.log(totalAvailableLink.toNumber());
  console.log(totalAvailableLinkBigNumber.shiftedBy(-18).toNumber());

  return totalAvailableLinkBigNumber;
}

// returns BigNumber
async function getTotalAvailableUsdc() {
// call function totalAvailableUsdc of the contract

const readOptionsTotalAvailableUsdc = {
  contractAddress: simpleSwapContractAddress,
  functionName: "totalAvailableUSDC",
  abi: simpleSwapAbi
};

const totalAvailableUSDC = await Moralis.executeFunction(readOptionsTotalAvailableUsdc);
const totalAvailableUSDCBigNumber = new BigNumber(totalAvailableUSDC.toString());
//console.log(totalAvailableUSDC);
//console.log(totalAvailableUSDC.toNumber());
console.log(totalAvailableUSDCBigNumber.shiftedBy(-6).toNumber());
return totalAvailableUSDCBigNumber;
}

async function getTotalAmountLpTokens() {
  const readA = {
    contractAddress: simpleSwapContractAddress,
    functionName: "totalLpTokens",
    abi: simpleSwapAbi
  };
  
  const totalAmountLpTokens = await Moralis.executeFunction(readA );
  const totalAmountLpTokensBigNumber = new BigNumber(totalAmountLpTokens.toString());
  console.log(totalAmountLpTokensBigNumber.shiftedBy(-6).toString());
  //return totalAmountLpTokens;
  return totalAmountLpTokensBigNumber;
}

// javascript float
function getQuantitySoldToken() {
  console.log("1: " + parseFloat(document.getElementById("link-input").value));
  console.log("2: " + parseFloat(document.getElementById("usdc-input").value));

  let quantitySoldToken = tokenForSale == 0 ? parseFloat(document.getElementById("link-input").value) : parseFloat(document.getElementById("usdc-input").value);
  return quantitySoldToken;
}

function getQuantityPurchasedToken() {
  let quantityPurchasedToken = tokenForSale == 0 ? parseFloat(document.getElementById("usdc-input").value) : parseFloat(document.getElementById("link-input").value);
  return quantityPurchasedToken;
}







document.getElementById("connect-btn").onclick = connect;
document.getElementById("disconnect-btn").onclick = disconnect;
document.getElementById("swap-btn").onclick = swap;
document.getElementById("switch-btn").onclick = reverseButtons;
document.getElementById("supply-btn").onclick = supply;
document.getElementById("withdraw-btn").onclick = withdraw;
document.getElementById("initiate-pool-btn").onclick = initiatePool;

document.getElementById("total-link-btn").onclick = getTotalAvailableLink;

document.getElementById("total-usdc-btn").onclick = getTotalAvailableUsdc;
document.getElementById("total-lp-btn").onclick = getTotalAmountLpTokens;
//document.getElementById("initiate-pool-btn").onclick = initiatePool;
//document.getElementById("issue-btc-up-btn").onclick = issueBtcUp;
//document.getElementById("issue-btc-down-btn").onclick = issueBtcDown;
//document.getElementById("redeem-btc-up-btn").onclick = redeemBtcUp;
//document.getElementById("redeem-btc-down-btn").onclick = redeemBtcDown;