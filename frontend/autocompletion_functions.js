import {calculateAmountPurchasedToken, calculateAmountSoldToken, getLpTokenPriceBigNumberWithDecimals} from "./price_functions.js"

const NUMBER_DECIMALS = 6;

async function changeUsdcInput(tokenForSale) {
    if (tokenForSale == 0) {
      const amountUsdc = await calculateAmountPurchasedToken(parseFloat(document.getElementById("link-input").value), tokenForSale);
      document.getElementById("usdc-input").value = amountUsdc.toFixed(NUMBER_DECIMALS);
    }
    else {
      const amountUsdc = await calculateAmountSoldToken(parseFloat(document.getElementById("link-input").value), tokenForSale);
      document.getElementById("usdc-input").value  = amountUsdc.toFixed(NUMBER_DECIMALS);
    }
  
  }
  
async function changeLinkInput(tokenForSale) {
    if (tokenForSale == 0) {
      const amountLink = await calculateAmountSoldToken(parseFloat(document.getElementById("usdc-input").value), tokenForSale);
      document.getElementById("link-input").value = amountLink.toFixed(NUMBER_DECIMALS);
    }
    else {
      const amountLink = await calculateAmountPurchasedToken(parseFloat(document.getElementById("usdc-input").value), tokenForSale);
      document.getElementById("link-input").value  = amountLink.toFixed(NUMBER_DECIMALS);
    }
}
  
function changeMinAmountReceived(tokenForSale) {
    const amountOfPurchasedToken = (tokenForSale == 0) ? parseFloat(document.getElementById("usdc-input").value) : parseFloat(document.getElementById("link-input").value);
    const maxSlippage = parseFloat(document.getElementById("slippage").value);
    const minAmountPurchasedToken = amountOfPurchasedToken * (1 - maxSlippage/100);
  
    const tokenPurchasedStr = (tokenForSale == 0) ? "USDC" : "Link";
  
    document.getElementById("min-amount-purchased-token").innerHTML = "Minimum amount of " +  tokenPurchasedStr + " to receive: " + 
                                                                      minAmountPurchasedToken.toFixed(NUMBER_DECIMALS).toString();
    document.getElementById("min-amount-purchased-token").setAttribute("data-value", minAmountPurchasedToken);
  }
  
async function changeAmountUsdcToSupply() {
    const amountLink = parseFloat(document.getElementById("supply-link-input").value);
    const [lpTokenPriceLink, lpTokenPriceUsdc] = await getLpTokenPriceBigNumberWithDecimals();
  
    document.getElementById("supply-usdc-input").value = (amountLink / lpTokenPriceLink.shiftedBy(-18).toNumber()) * lpTokenPriceUsdc.shiftedBy(-6).toNumber();
  }
  

async function changeAmountLinkToSupply() {
   
    const amountUsdc = parseFloat(document.getElementById("supply-usdc-input").value);
    const [lpTokenPriceLink, lpTokenPriceUsdc] = await getLpTokenPriceBigNumberWithDecimals();
  
    document.getElementById("supply-link-input").value = (amountUsdc / lpTokenPriceUsdc.shiftedBy(-6).toNumber()) * lpTokenPriceLink.shiftedBy(-18).toNumber();
  
  }
  
  

  export {changeUsdcInput, changeLinkInput, changeMinAmountReceived, changeAmountUsdcToSupply,  changeAmountLinkToSupply};