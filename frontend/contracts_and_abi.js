const simpleSwapInfo = {
    "contractAddress" : "0xec0429a31d86da174AC7246004A465B90DF47225",
    "abi" : require("../build/deployments/42/0xec0429a31d86da174AC7246004A465B90DF47225.json")["abi"]
}


const usdcInfo = { contractAddress : "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede",
                    abi : require("../build/contracts/IERC20.json")["abi"]};


const linkInfo = { contractAddress : "0xa36085F69e2889c224210F603D836748e7dC0088",
                    abi : require("../build/contracts/IERC20.json")["abi"]};


export {simpleSwapInfo,  usdcInfo, linkInfo};