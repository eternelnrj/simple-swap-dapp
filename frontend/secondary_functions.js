import {simpleSwapInfo} from "./contracts_and_abi.js";
import {changeLinkInput, changeUsdcInput, changeMinAmountReceived} from "./autocompletion_functions.js";
const BigNumber = require('bignumber.js');


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

    x = parseFloat(x).toFixed(numberDecimals);
    let xAsBigNumber = new BigNumber(x.toString());
    let yAsBigNumberWithDecimals = new BigNumber("1".concat("0".repeat(numberDecimals) ));
    return xAsBigNumber.multipliedBy(yAsBigNumberWithDecimals);
  }    
  
async function getTotalAvailableLinkBigNumberWithDecimals() {
  
    const readOptionsTotalAvailableLink = {
      contractAddress: simpleSwapInfo["contractAddress"],
      functionName: "totalAvailableLink",
      abi: simpleSwapInfo["abi"]
    };
  
    const totalAvailableLink = await Moralis.executeFunction(readOptionsTotalAvailableLink);
    const totalAvailableLinkBigNumber = new BigNumber(totalAvailableLink.toString());
  
    return totalAvailableLinkBigNumber;
  }
  
async function getTotalAvailableUsdcBigNumberWithDecimals() {
  const readOptionsTotalAvailableUSDC = {
    contractAddress: simpleSwapInfo["contractAddress"],
    functionName: "totalAvailableUSDC",
    abi: simpleSwapInfo["abi"]
  };

  const totalAvailableUSDC = await Moralis.executeFunction(readOptionsTotalAvailableUSDC);

  const totalAvailableUSDCBigNumber = new BigNumber(totalAvailableUSDC.toString());
  return totalAvailableUSDCBigNumber;
}
  
async function getTotalAmountLpTokensBigNumberWithDecimals() {
    const readOptionsTotalLpTokens = {
      contractAddress: simpleSwapInfo["contractAddress"],
      functionName: "totalLpTokens",
      abi: simpleSwapInfo["abi"]
    };
    
    const totalAmountLpTokens = await Moralis.executeFunction(readOptionsTotalLpTokens);
    const totalAmountLpTokensBigNumber = new BigNumber(totalAmountLpTokens.toString());

    return totalAmountLpTokensBigNumber;
}

function reverseButtons(tokenForSale) {
    const linkInput = document.getElementById("link-input");
    const usdcInput = document.getElementById("usdc-input");
  
    linkInput.name = "usdc";
    linkInput.id = "usdc-input";
    linkInput.value = 0;
    linkInput.onchange = async () => {await changeLinkInput(tokenForSale); changeMinAmountReceived(tokenForSale);};
  
    usdcInput.name = "link";
    usdcInput.id = "link-input";
    usdcInput.onchange = async () => {await changeUsdcInput(tokenForSale); changeMinAmountReceived(tokenForSale);};
    usdcInput.value = 0;

    const linkLabel = document.getElementById("link-swap-label-id");
    const usdcLabel = document.getElementById("usdc-swap-label-id");
  
    linkLabel.for = "usdc";
    linkLabel.id = "usdc-swap-label-id";
    linkLabel.innerHTML = "USDC";
  
    usdcLabel.for = "link";
    usdcLabel.id = "link-swap-label-id";
    usdcLabel.innerHTML = "LINK";
   
  }


  export {approve, reverseButtons, getBigNumberWithDecimals, getTotalAvailableLinkBigNumberWithDecimals, getTotalAvailableUsdcBigNumberWithDecimals,
     getTotalAmountLpTokensBigNumberWithDecimals};