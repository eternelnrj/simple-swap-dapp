const simpleSwapInfo = {
    "contractAddress" : "0xa2AEf78BD851D65cdBD3F14d3Bf814C211a50630",
    "abi" : require("../build/deployments/42/0xa2AEf78BD851D65cdBD3F14d3Bf814C211a50630.json")["abi"]
}


const usdcInfo = { contractAddress : "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede",
                    abi : require("../build/contracts/IERC20.json")["abi"]};


const linkInfo = { contractAddress : "0xa36085F69e2889c224210F603D836748e7dC0088",
                    abi : require("../build/contracts/IERC20.json")["abi"]};


export {simpleSwapInfo,  usdcInfo, linkInfo};