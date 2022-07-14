(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "allSourcePaths": {
    "3": "contracts/SimpleSwap.sol"
  },
  "ast": {
    "absolutePath": "contracts/SimpleSwap.sol",
    "exportedSymbols": {
      "Context": [
        1073
      ],
      "IERC20": [
        33
      ],
      "Ownable": [
        740
      ],
      "SafeMath": [
        1052
      ],
      "SimpleSwap": [
        636
      ]
    },
    "id": 637,
    "license": "UNLICENSED",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "39:23:3"
      },
      {
        "absolutePath": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/utils/math/SafeMath.sol",
        "file": "@openzeppelin/contracts/utils/math/SafeMath.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 637,
        "sourceUnit": 1053,
        "src": "64:57:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 637,
        "sourceUnit": 741,
        "src": "122:52:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 33,
        "linearizedBaseContracts": [
          33
        ],
        "name": "IERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "a9059cbb",
            "id": 12,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nodeType": "VariableDeclaration",
                  "scope": 12,
                  "src": "217:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "217:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 12,
                  "src": "236:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "236:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "216:35:3"
            },
            "returnParameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 12,
                  "src": "270:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "270:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "269:6:3"
            },
            "scope": 33,
            "src": "199:77:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "23b872dd",
            "id": 23,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14,
                  "mutability": "mutable",
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 23,
                  "src": "303:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "303:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nodeType": "VariableDeclaration",
                  "scope": 23,
                  "src": "319:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "319:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 18,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 23,
                  "src": "338:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "338:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "302:51:3"
            },
            "returnParameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 23,
                  "src": "372:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "372:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "371:6:3"
            },
            "scope": 33,
            "src": "281:97:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "095ea7b3",
            "id": 32,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 28,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25,
                  "mutability": "mutable",
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 32,
                  "src": "400:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "400:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 32,
                  "src": "417:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "417:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "399:33:3"
            },
            "returnParameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 32,
                  "src": "451:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "451:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "450:6:3"
            },
            "scope": 33,
            "src": "383:74:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 637,
        "src": "176:283:3"
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 34,
              "name": "Ownable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 740,
              "src": "485:7:3"
            },
            "id": 35,
            "nodeType": "InheritanceSpecifier",
            "src": "485:7:3"
          }
        ],
        "contractDependencies": [
          740,
          1073
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 636,
        "linearizedBaseContracts": [
          636,
          740,
          1073
        ],
        "name": "SimpleSwap",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 38,
            "libraryName": {
              "id": 36,
              "name": "SafeMath",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1052,
              "src": "505:8:3"
            },
            "nodeType": "UsingForDirective",
            "src": "499:27:3",
            "typeName": {
              "id": 37,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "518:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "SimpleSwap.Token",
            "id": 41,
            "members": [
              {
                "id": 39,
                "name": "Link",
                "nodeType": "EnumValue",
                "src": "543:4:3"
              },
              {
                "id": 40,
                "name": "USDC",
                "nodeType": "EnumValue",
                "src": "549:4:3"
              }
            ],
            "name": "Token",
            "nodeType": "EnumDefinition",
            "src": "532:22:3"
          },
          {
            "constant": false,
            "id": 44,
            "mutability": "mutable",
            "name": "addressLink",
            "nodeType": "VariableDeclaration",
            "scope": 636,
            "src": "560:64:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 42,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "560:7:3",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "hexValue": "307861333630383546363965323838396332323432313046363033443833363734386537644330303838",
              "id": 43,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "582:42:3",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "value": "0xa36085F69e2889c224210F603D836748e7dC0088"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 47,
            "mutability": "mutable",
            "name": "addressUSDC",
            "nodeType": "VariableDeclaration",
            "scope": 636,
            "src": "707:64:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 45,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "707:7:3",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "hexValue": "307862376134463345393039374330386441303935313762356142383737463761393137323234656465",
              "id": 46,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "729:42:3",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "value": "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "functionSelector": "618e552c",
            "id": 50,
            "mutability": "mutable",
            "name": "totalAvailableLink",
            "nodeType": "VariableDeclaration",
            "scope": 636,
            "src": "862:37:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 48,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "862:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 49,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "898:1:3",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "b2e411c2",
            "id": 53,
            "mutability": "mutable",
            "name": "totalAvailableUSDC",
            "nodeType": "VariableDeclaration",
            "scope": 636,
            "src": "924:37:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 51,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "924:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 52,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "960:1:3",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "868c844f",
            "id": 56,
            "mutability": "mutable",
            "name": "totalLpTokens",
            "nodeType": "VariableDeclaration",
            "scope": 636,
            "src": "986:33:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "986:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 55,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1018:1:3",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "c57981b5",
            "id": 63,
            "mutability": "mutable",
            "name": "FEE",
            "nodeType": "VariableDeclaration",
            "scope": 636,
            "src": "1049:32:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 57,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1049:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_3000_by_1",
                "typeString": "int_const 3000"
              },
              "id": 62,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "33",
                "id": 58,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "1070:1:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_3_by_1",
                  "typeString": "int_const 3"
                },
                "value": "3"
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "commonType": {
                  "typeIdentifier": "t_rational_1000_by_1",
                  "typeString": "int_const 1000"
                },
                "id": 61,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "hexValue": "3130",
                  "id": 59,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1074:2:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_10_by_1",
                    "typeString": "int_const 10"
                  },
                  "value": "10"
                },
                "nodeType": "BinaryOperation",
                "operator": "**",
                "rightExpression": {
                  "hexValue": "33",
                  "id": 60,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1080:1:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_3_by_1",
                    "typeString": "int_const 3"
                  },
                  "value": "3"
                },
                "src": "1074:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1000_by_1",
                  "typeString": "int_const 1000"
                }
              },
              "src": "1070:11:3",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_3000_by_1",
                "typeString": "int_const 3000"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 66,
            "mutability": "mutable",
            "name": "isPoolInitialized",
            "nodeType": "VariableDeclaration",
            "scope": 636,
            "src": "1109:30:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 64,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "1109:4:3",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "hexValue": "66616c7365",
              "id": 65,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1134:5:3",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 70,
            "mutability": "mutable",
            "name": "userToAmountLpTokens",
            "nodeType": "VariableDeclaration",
            "scope": 636,
            "src": "1146:48:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 69,
              "keyType": {
                "id": 67,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1154:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1146:27:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 68,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1165:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 162,
              "nodeType": "Block",
              "src": "1296:708:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 81,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1314:18:3",
                        "subExpression": {
                          "id": 80,
                          "name": "isPoolInitialized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66,
                          "src": "1315:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520706f6f6c2077617320616c726561647920696e697469616c697a65642e",
                        "id": 82,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1334:35:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_bc0cbdd852a361dc2085b6876378a83c79cecb9ee35d2f2932c6aa66b51f030d",
                          "typeString": "literal_string \"The pool was already initialized.\""
                        },
                        "value": "The pool was already initialized."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_bc0cbdd852a361dc2085b6876378a83c79cecb9ee35d2f2932c6aa66b51f030d",
                          "typeString": "literal_string \"The pool was already initialized.\""
                        }
                      ],
                      "id": 79,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1306:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1306:64:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "1306:64:3"
                },
                {
                  "expression": {
                    "id": 87,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 85,
                      "name": "isPoolInitialized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66,
                      "src": "1380:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 86,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1400:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1380:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 88,
                  "nodeType": "ExpressionStatement",
                  "src": "1380:24:3"
                },
                {
                  "assignments": [
                    91
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 91,
                      "mutability": "mutable",
                      "name": "Link",
                      "nodeType": "VariableDeclaration",
                      "scope": 162,
                      "src": "1415:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 90,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 89,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "1415:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "1415:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 95,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 93,
                        "name": "addressLink",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "1436:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 92,
                      "name": "IERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "1429:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                        "typeString": "type(contract IERC20)"
                      }
                    },
                    "id": 94,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1429:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1415:33:3"
                },
                {
                  "assignments": [
                    98
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 98,
                      "mutability": "mutable",
                      "name": "USDC",
                      "nodeType": "VariableDeclaration",
                      "scope": 162,
                      "src": "1458:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 97,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 96,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "1458:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "1458:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 102,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 100,
                        "name": "addressUSDC",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47,
                        "src": "1479:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 99,
                      "name": "IERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "1472:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                        "typeString": "type(contract IERC20)"
                      }
                    },
                    "id": 101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1472:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1458:33:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 106,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1528:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 107,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1528:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 110,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "1548:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$636",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$636",
                                  "typeString": "contract SimpleSwap"
                                }
                              ],
                              "id": 109,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1540:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 108,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1540:7:3",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 111,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1540:13:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 112,
                            "name": "amountLinkToSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 72,
                            "src": "1555:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 104,
                            "name": "Link",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 91,
                            "src": "1510:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23,
                          "src": "1510:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 113,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1510:64:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4c696e6b207472616e73666572206661696c65642e",
                        "id": 114,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1576:23:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f158e05b19296bc36d920dea915801ce00a59a6190411b5bf1f3a506eff701dd",
                          "typeString": "literal_string \"Link transfer failed.\""
                        },
                        "value": "Link transfer failed."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f158e05b19296bc36d920dea915801ce00a59a6190411b5bf1f3a506eff701dd",
                          "typeString": "literal_string \"Link transfer failed.\""
                        }
                      ],
                      "id": 103,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1502:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1502:98:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 116,
                  "nodeType": "ExpressionStatement",
                  "src": "1502:98:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 120,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1636:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 121,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1636:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 124,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "1656:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$636",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$636",
                                  "typeString": "contract SimpleSwap"
                                }
                              ],
                              "id": 123,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1648:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 122,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1648:7:3",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 125,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1648:13:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 126,
                            "name": "amountUsdcToSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "1663:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 118,
                            "name": "USDC",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 98,
                            "src": "1618:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 119,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23,
                          "src": "1618:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1618:64:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "55534443207472616e73666572206661696c65642e",
                        "id": 128,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1684:23:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4423603f23b62bc938c76ebee4735d5f883a335a9c94590879f4de27de08569c",
                          "typeString": "literal_string \"USDC transfer failed.\""
                        },
                        "value": "USDC transfer failed."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4423603f23b62bc938c76ebee4735d5f883a335a9c94590879f4de27de08569c",
                          "typeString": "literal_string \"USDC transfer failed.\""
                        }
                      ],
                      "id": 117,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1610:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1610:98:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 130,
                  "nodeType": "ExpressionStatement",
                  "src": "1610:98:3"
                },
                {
                  "expression": {
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 131,
                      "name": "totalAvailableLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "1719:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 134,
                          "name": "amountLinkToSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "1763:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 132,
                          "name": "totalAvailableLink",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50,
                          "src": "1740:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 133,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 916,
                        "src": "1740:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 135,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1740:42:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1719:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "1719:63:3"
                },
                {
                  "expression": {
                    "id": 143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 138,
                      "name": "totalAvailableUSDC",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53,
                      "src": "1792:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 141,
                          "name": "amountUsdcToSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "1836:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 139,
                          "name": "totalAvailableUSDC",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53,
                          "src": "1813:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 916,
                        "src": "1813:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 142,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1813:42:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1792:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 144,
                  "nodeType": "ExpressionStatement",
                  "src": "1792:63:3"
                },
                {
                  "expression": {
                    "id": 147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 145,
                      "name": "totalLpTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "1866:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 146,
                      "name": "amountUsdcToSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 74,
                      "src": "1882:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1866:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 148,
                  "nodeType": "ExpressionStatement",
                  "src": "1866:34:3"
                },
                {
                  "expression": {
                    "id": 160,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 149,
                        "name": "userToAmountLpTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "1911:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 152,
                      "indexExpression": {
                        "expression": {
                          "id": 150,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1932:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 151,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1932:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1911:32:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 158,
                          "name": "totalLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56,
                          "src": "1983:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "baseExpression": {
                            "id": 153,
                            "name": "userToAmountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70,
                            "src": "1946:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 156,
                          "indexExpression": {
                            "expression": {
                              "id": 154,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1967:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 155,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1967:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1946:32:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 157,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 916,
                        "src": "1946:36:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1946:51:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1911:86:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 161,
                  "nodeType": "ExpressionStatement",
                  "src": "1911:86:3"
                }
              ]
            },
            "functionSelector": "ce49ea9a",
            "id": 163,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 77,
                "modifierName": {
                  "id": 76,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 683,
                  "src": "1286:9:3"
                },
                "nodeType": "ModifierInvocation",
                "src": "1286:9:3"
              }
            ],
            "name": "initiatePool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 75,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 72,
                  "mutability": "mutable",
                  "name": "amountLinkToSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 163,
                  "src": "1223:26:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1223:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 74,
                  "mutability": "mutable",
                  "name": "amountUsdcToSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 163,
                  "src": "1251:26:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 73,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1251:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1222:56:3"
            },
            "returnParameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1296:0:3"
            },
            "scope": 636,
            "src": "1201:803:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 289,
              "nodeType": "Block",
              "src": "2111:1260:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 174,
                        "name": "isPoolInitialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66,
                        "src": "2129:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520706f6f6c2073686f756c6420626520696e697469616c697a65642066697273742e",
                        "id": 175,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2148:39:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580",
                          "typeString": "literal_string \"The pool should be initialized first.\""
                        },
                        "value": "The pool should be initialized first."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580",
                          "typeString": "literal_string \"The pool should be initialized first.\""
                        }
                      ],
                      "id": 173,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2121:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2121:67:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 177,
                  "nodeType": "ExpressionStatement",
                  "src": "2121:67:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 181,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 179,
                          "name": "quantitySoldToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 165,
                          "src": "2206:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 180,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2226:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2206:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520616d6f756e7420746f2073656c6c2073686f756c64206265207374726963746c7920626967676572207468616e20302e",
                        "id": 182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2229:54:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_229315b7c9587d505a36a119e5a30260cb9a9d236b8c7ce6a99c313fbc52d461",
                          "typeString": "literal_string \"The amount to sell should be strictly bigger than 0.\""
                        },
                        "value": "The amount to sell should be strictly bigger than 0."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_229315b7c9587d505a36a119e5a30260cb9a9d236b8c7ce6a99c313fbc52d461",
                          "typeString": "literal_string \"The amount to sell should be strictly bigger than 0.\""
                        }
                      ],
                      "id": 178,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2198:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2198:86:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 184,
                  "nodeType": "ExpressionStatement",
                  "src": "2198:86:3"
                },
                {
                  "assignments": [
                    186
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 186,
                      "mutability": "mutable",
                      "name": "amountPurchasedToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 289,
                      "src": "2294:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 185,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2294:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 191,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 188,
                        "name": "quantitySoldToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 165,
                        "src": "2349:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 189,
                        "name": "tokenForSale",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 170,
                        "src": "2368:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_Token_$41",
                          "typeString": "enum SimpleSwap.Token"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_enum$_Token_$41",
                          "typeString": "enum SimpleSwap.Token"
                        }
                      ],
                      "id": 187,
                      "name": "getAmountPurchasedToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 607,
                      "src": "2325:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_enum$_Token_$41_$returns$_t_uint256_$",
                        "typeString": "function (uint256,enum SimpleSwap.Token) view returns (uint256)"
                      }
                    },
                    "id": 190,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2325:56:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2294:87:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 193,
                          "name": "amountPurchasedToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 186,
                          "src": "2399:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 194,
                          "name": "minAmountPurchasedToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 167,
                          "src": "2423:23:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2399:47:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520616d6f756e74206f662070757263686173656420746f6b656e206973206c6f776572207468616e2072657175697265642e",
                        "id": 196,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2448:55:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_bbba2a48efd6b000ef46699fd497e00f081b29099d44fa3a135476e5eb8f25b6",
                          "typeString": "literal_string \"The amount of purchased token is lower than required.\""
                        },
                        "value": "The amount of purchased token is lower than required."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_bbba2a48efd6b000ef46699fd497e00f081b29099d44fa3a135476e5eb8f25b6",
                          "typeString": "literal_string \"The amount of purchased token is lower than required.\""
                        }
                      ],
                      "id": 192,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2391:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 197,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2391:113:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 198,
                  "nodeType": "ExpressionStatement",
                  "src": "2391:113:3"
                },
                {
                  "assignments": [
                    201
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 201,
                      "mutability": "mutable",
                      "name": "soldToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 289,
                      "src": "2515:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 200,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 199,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "2515:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "2515:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 202,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2515:16:3"
                },
                {
                  "assignments": [
                    205
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 205,
                      "mutability": "mutable",
                      "name": "boughtToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 289,
                      "src": "2541:18:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 204,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 203,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "2541:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "2541:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 206,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2541:18:3"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_enum$_Token_$41",
                      "typeString": "enum SimpleSwap.Token"
                    },
                    "id": 210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 207,
                      "name": "tokenForSale",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 170,
                      "src": "2574:12:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_Token_$41",
                        "typeString": "enum SimpleSwap.Token"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "id": 208,
                        "name": "Token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "2590:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_Token_$41_$",
                          "typeString": "type(enum SimpleSwap.Token)"
                        }
                      },
                      "id": 209,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "Link",
                      "nodeType": "MemberAccess",
                      "src": "2590:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_Token_$41",
                        "typeString": "enum SimpleSwap.Token"
                      }
                    },
                    "src": "2574:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 264,
                    "nodeType": "Block",
                    "src": "2877:260:3",
                    "statements": [
                      {
                        "expression": {
                          "id": 243,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 238,
                            "name": "totalAvailableLink",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50,
                            "src": "2891:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 241,
                                "name": "amountPurchasedToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 186,
                                "src": "2935:20:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 239,
                                "name": "totalAvailableLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50,
                                "src": "2912:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 240,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 931,
                              "src": "2912:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 242,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2912:44:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2891:65:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 244,
                        "nodeType": "ExpressionStatement",
                        "src": "2891:65:3"
                      },
                      {
                        "expression": {
                          "id": 250,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 245,
                            "name": "totalAvailableUSDC",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53,
                            "src": "2970:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 248,
                                "name": "quantitySoldToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 165,
                                "src": "3014:17:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 246,
                                "name": "totalAvailableUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53,
                                "src": "2991:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 247,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 916,
                              "src": "2991:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 249,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2991:41:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2970:62:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 251,
                        "nodeType": "ExpressionStatement",
                        "src": "2970:62:3"
                      },
                      {
                        "expression": {
                          "id": 256,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 252,
                            "name": "soldToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 201,
                            "src": "3047:9:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 254,
                                "name": "addressUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47,
                                "src": "3066:11:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 253,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33,
                              "src": "3059:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 255,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3059:19:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "src": "3047:31:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$33",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 257,
                        "nodeType": "ExpressionStatement",
                        "src": "3047:31:3"
                      },
                      {
                        "expression": {
                          "id": 262,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 258,
                            "name": "boughtToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 205,
                            "src": "3093:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 260,
                                "name": "addressLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 44,
                                "src": "3114:11:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 259,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33,
                              "src": "3107:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 261,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3107:19:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "src": "3093:33:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$33",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 263,
                        "nodeType": "ExpressionStatement",
                        "src": "3093:33:3"
                      }
                    ]
                  },
                  "id": 265,
                  "nodeType": "IfStatement",
                  "src": "2570:567:3",
                  "trueBody": {
                    "id": 237,
                    "nodeType": "Block",
                    "src": "2602:260:3",
                    "statements": [
                      {
                        "expression": {
                          "id": 216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 211,
                            "name": "totalAvailableLink",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50,
                            "src": "2616:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 214,
                                "name": "quantitySoldToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 165,
                                "src": "2661:17:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 212,
                                "name": "totalAvailableLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50,
                                "src": "2638:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 213,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 916,
                              "src": "2638:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 215,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2638:41:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2616:63:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 217,
                        "nodeType": "ExpressionStatement",
                        "src": "2616:63:3"
                      },
                      {
                        "expression": {
                          "id": 223,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 218,
                            "name": "totalAvailableUSDC",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53,
                            "src": "2693:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 221,
                                "name": "amountPurchasedToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 186,
                                "src": "2737:20:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 219,
                                "name": "totalAvailableUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53,
                                "src": "2714:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 220,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 931,
                              "src": "2714:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 222,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2714:44:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2693:65:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 224,
                        "nodeType": "ExpressionStatement",
                        "src": "2693:65:3"
                      },
                      {
                        "expression": {
                          "id": 229,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 225,
                            "name": "soldToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 201,
                            "src": "2773:9:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 227,
                                "name": "addressLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 44,
                                "src": "2792:11:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 226,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33,
                              "src": "2785:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 228,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2785:19:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "src": "2773:31:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$33",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 230,
                        "nodeType": "ExpressionStatement",
                        "src": "2773:31:3"
                      },
                      {
                        "expression": {
                          "id": 235,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 231,
                            "name": "boughtToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 205,
                            "src": "2818:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 233,
                                "name": "addressUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47,
                                "src": "2839:11:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 232,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33,
                              "src": "2832:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 234,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2832:19:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "src": "2818:33:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$33",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 236,
                        "nodeType": "ExpressionStatement",
                        "src": "2818:33:3"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 269,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3183:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 270,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "3183:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 271,
                            "name": "amountPurchasedToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 186,
                            "src": "3195:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 267,
                            "name": "boughtToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 205,
                            "src": "3162:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 268,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 12,
                          "src": "3162:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 272,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3162:54:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 266,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -3,
                      "src": "3155:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3155:62:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 274,
                  "nodeType": "ExpressionStatement",
                  "src": "3155:62:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 278,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3258:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 279,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "3258:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 282,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "3278:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$636",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$636",
                                  "typeString": "contract SimpleSwap"
                                }
                              ],
                              "id": 281,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3270:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 280,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3270:7:3",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 283,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3270:13:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 284,
                            "name": "quantitySoldToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 165,
                            "src": "3285:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 276,
                            "name": "soldToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 201,
                            "src": "3235:9:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 277,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23,
                          "src": "3235:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 285,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3235:68:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5472616e73666572206f662074686520616d6f756e74206f6620746f6b656e20796f752077616e7420746f2073656c6c206661696c65642e",
                        "id": 286,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3305:58:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_895e7d251133ad7c46606a147d2321601428e92dcd0a50a69507b30c13cb22fa",
                          "typeString": "literal_string \"Transfer of the amount of token you want to sell failed.\""
                        },
                        "value": "Transfer of the amount of token you want to sell failed."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_895e7d251133ad7c46606a147d2321601428e92dcd0a50a69507b30c13cb22fa",
                          "typeString": "literal_string \"Transfer of the amount of token you want to sell failed.\""
                        }
                      ],
                      "id": 275,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3227:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3227:137:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 288,
                  "nodeType": "ExpressionStatement",
                  "src": "3227:137:3"
                }
              ]
            },
            "functionSelector": "5c36d25e",
            "id": 290,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "swap",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 165,
                  "mutability": "mutable",
                  "name": "quantitySoldToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 290,
                  "src": "2024:25:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 164,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2024:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 167,
                  "mutability": "mutable",
                  "name": "minAmountPurchasedToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 290,
                  "src": "2051:31:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 166,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2051:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 170,
                  "mutability": "mutable",
                  "name": "tokenForSale",
                  "nodeType": "VariableDeclaration",
                  "scope": 290,
                  "src": "2084:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Token_$41",
                    "typeString": "enum SimpleSwap.Token"
                  },
                  "typeName": {
                    "id": 169,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 168,
                      "name": "Token",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41,
                      "src": "2084:5:3"
                    },
                    "referencedDeclaration": 41,
                    "src": "2084:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Token_$41",
                      "typeString": "enum SimpleSwap.Token"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2023:80:3"
            },
            "returnParameters": {
              "id": 172,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2111:0:3"
            },
            "scope": 636,
            "src": "2010:1361:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 414,
              "nodeType": "Block",
              "src": "3424:1091:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 296,
                        "name": "isPoolInitialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66,
                        "src": "3442:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520706f6f6c2073686f756c6420626520696e697469616c697a65642066697273742e",
                        "id": 297,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3461:39:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580",
                          "typeString": "literal_string \"The pool should be initialized first.\""
                        },
                        "value": "The pool should be initialized first."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580",
                          "typeString": "literal_string \"The pool should be initialized first.\""
                        }
                      ],
                      "id": 295,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3434:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 298,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3434:67:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 299,
                  "nodeType": "ExpressionStatement",
                  "src": "3434:67:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 303,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 301,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 292,
                          "src": "3519:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 302,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3536:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3519:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520616d6f756e74206f6620737570706c696564206c7020746f6b656e732073686f756c64206265203e20302e",
                        "id": 304,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3539:49:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4d3edc197d99dc2fb86176939dfb63767cb4b4d2628cec7bef006b1c5d9ab844",
                          "typeString": "literal_string \"The amount of supplied lp tokens should be > 0.\""
                        },
                        "value": "The amount of supplied lp tokens should be > 0."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4d3edc197d99dc2fb86176939dfb63767cb4b4d2628cec7bef006b1c5d9ab844",
                          "typeString": "literal_string \"The amount of supplied lp tokens should be > 0.\""
                        }
                      ],
                      "id": 300,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3511:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 305,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3511:78:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 306,
                  "nodeType": "ExpressionStatement",
                  "src": "3511:78:3"
                },
                {
                  "assignments": [
                    308,
                    310
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 308,
                      "mutability": "mutable",
                      "name": "amountLinkPerLpToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 414,
                      "src": "3600:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 307,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3600:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 310,
                      "mutability": "mutable",
                      "name": "amountUsdcPerLpToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 414,
                      "src": "3630:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 309,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3630:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 313,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 311,
                      "name": "getLpTokenPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 635,
                      "src": "3662:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function () view returns (uint256,uint256)"
                      }
                    },
                    "id": 312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3662:17:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3599:80:3"
                },
                {
                  "assignments": [
                    316
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 316,
                      "mutability": "mutable",
                      "name": "Link",
                      "nodeType": "VariableDeclaration",
                      "scope": 414,
                      "src": "3690:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 315,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 314,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "3690:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "3690:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 320,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 318,
                        "name": "addressLink",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "3711:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 317,
                      "name": "IERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "3704:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                        "typeString": "type(contract IERC20)"
                      }
                    },
                    "id": 319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3704:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3690:33:3"
                },
                {
                  "assignments": [
                    323
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 323,
                      "mutability": "mutable",
                      "name": "USDC",
                      "nodeType": "VariableDeclaration",
                      "scope": 414,
                      "src": "3733:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 322,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 321,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "3733:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "3733:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 327,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 325,
                        "name": "addressUSDC",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47,
                        "src": "3754:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 324,
                      "name": "IERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "3747:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                        "typeString": "type(contract IERC20)"
                      }
                    },
                    "id": 326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3747:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3733:33:3"
                },
                {
                  "assignments": [
                    329
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 329,
                      "mutability": "mutable",
                      "name": "amountLinkToSupply",
                      "nodeType": "VariableDeclaration",
                      "scope": 414,
                      "src": "3777:26:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 328,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3777:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 339,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        },
                        "id": 337,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 335,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3851:2:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "**",
                        "rightExpression": {
                          "hexValue": "36",
                          "id": 336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3857:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "3851:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 332,
                            "name": "amountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 292,
                            "src": "3831:14:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 330,
                            "name": "amountLinkPerLpToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 308,
                            "src": "3806:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 331,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 946,
                          "src": "3806:24:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 333,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3806:40:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 334,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 961,
                      "src": "3806:44:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 338,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3806:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3777:82:3"
                },
                {
                  "assignments": [
                    341
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 341,
                      "mutability": "mutable",
                      "name": "amountUSDCToSupply",
                      "nodeType": "VariableDeclaration",
                      "scope": 414,
                      "src": "3884:26:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 340,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3884:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 351,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        },
                        "id": 349,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 347,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3958:2:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "**",
                        "rightExpression": {
                          "hexValue": "36",
                          "id": 348,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3964:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "3958:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 344,
                            "name": "amountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 292,
                            "src": "3938:14:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 342,
                            "name": "amountUsdcPerLpToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 310,
                            "src": "3913:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 343,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 946,
                          "src": "3913:24:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 345,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3913:40:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 346,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 961,
                      "src": "3913:44:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 350,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3913:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3884:82:3"
                },
                {
                  "expression": {
                    "id": 357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 352,
                      "name": "totalAvailableLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "3991:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 355,
                          "name": "amountLinkToSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 329,
                          "src": "4035:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 353,
                          "name": "totalAvailableLink",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50,
                          "src": "4012:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 354,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 916,
                        "src": "4012:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 356,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4012:42:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3991:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 358,
                  "nodeType": "ExpressionStatement",
                  "src": "3991:63:3"
                },
                {
                  "expression": {
                    "id": 364,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 359,
                      "name": "totalAvailableUSDC",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53,
                      "src": "4064:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 362,
                          "name": "amountUSDCToSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 341,
                          "src": "4108:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 360,
                          "name": "totalAvailableUSDC",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53,
                          "src": "4085:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 361,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 916,
                        "src": "4085:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 363,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4085:42:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4064:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 365,
                  "nodeType": "ExpressionStatement",
                  "src": "4064:63:3"
                },
                {
                  "expression": {
                    "id": 371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 366,
                      "name": "totalLpTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "4138:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 369,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 292,
                          "src": "4172:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 367,
                          "name": "totalLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56,
                          "src": "4154:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 368,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 916,
                        "src": "4154:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 370,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4154:33:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4138:49:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 372,
                  "nodeType": "ExpressionStatement",
                  "src": "4138:49:3"
                },
                {
                  "expression": {
                    "id": 384,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 373,
                        "name": "userToAmountLpTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "4198:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 376,
                      "indexExpression": {
                        "expression": {
                          "id": 374,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "4219:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4219:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4198:32:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 382,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 292,
                          "src": "4270:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "baseExpression": {
                            "id": 377,
                            "name": "userToAmountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70,
                            "src": "4233:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 380,
                          "indexExpression": {
                            "expression": {
                              "id": 378,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4254:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 379,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4254:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4233:32:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 381,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 916,
                        "src": "4233:36:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 383,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4233:52:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4198:87:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 385,
                  "nodeType": "ExpressionStatement",
                  "src": "4198:87:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 389,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4322:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 390,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4322:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 393,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "4342:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$636",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$636",
                                  "typeString": "contract SimpleSwap"
                                }
                              ],
                              "id": 392,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4334:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 391,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4334:7:3",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 394,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4334:13:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 395,
                            "name": "amountLinkToSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 329,
                            "src": "4349:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 387,
                            "name": "Link",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 316,
                            "src": "4304:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 388,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23,
                          "src": "4304:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 396,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4304:64:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5472616e73666572206f66204c696e6b206661696c65642e",
                        "id": 397,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4370:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_952b35031a21ec8dacf217f508bafe291bc12b5ae2be70b520e0196d84dc1c59",
                          "typeString": "literal_string \"Transfer of Link failed.\""
                        },
                        "value": "Transfer of Link failed."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_952b35031a21ec8dacf217f508bafe291bc12b5ae2be70b520e0196d84dc1c59",
                          "typeString": "literal_string \"Transfer of Link failed.\""
                        }
                      ],
                      "id": 386,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4296:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4296:101:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 399,
                  "nodeType": "ExpressionStatement",
                  "src": "4296:101:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 403,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4433:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 404,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4433:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 407,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "4453:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$636",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$636",
                                  "typeString": "contract SimpleSwap"
                                }
                              ],
                              "id": 406,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4445:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 405,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4445:7:3",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 408,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4445:13:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 409,
                            "name": "amountUSDCToSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 341,
                            "src": "4460:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 401,
                            "name": "USDC",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 323,
                            "src": "4415:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 402,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23,
                          "src": "4415:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 410,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4415:64:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5472616e73666572206f662055534443206661696c65642e",
                        "id": 411,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4481:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b88d0eb8f0af78c81945b09dc751296b154ec68f01cf17783752bece81ce2959",
                          "typeString": "literal_string \"Transfer of USDC failed.\""
                        },
                        "value": "Transfer of USDC failed."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b88d0eb8f0af78c81945b09dc751296b154ec68f01cf17783752bece81ce2959",
                          "typeString": "literal_string \"Transfer of USDC failed.\""
                        }
                      ],
                      "id": 400,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4407:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 412,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4407:101:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 413,
                  "nodeType": "ExpressionStatement",
                  "src": "4407:101:3"
                }
              ]
            },
            "functionSelector": "35403023",
            "id": 415,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 292,
                  "mutability": "mutable",
                  "name": "amountLpTokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 415,
                  "src": "3393:22:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 291,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3393:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3392:24:3"
            },
            "returnParameters": {
              "id": 294,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3424:0:3"
            },
            "scope": 636,
            "src": "3377:1138:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 539,
              "nodeType": "Block",
              "src": "4570:1085:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 421,
                        "name": "isPoolInitialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66,
                        "src": "4588:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520706f6f6c2073686f756c6420626520696e697469616c697a65642066697273742e",
                        "id": 422,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4607:39:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580",
                          "typeString": "literal_string \"The pool should be initialized first.\""
                        },
                        "value": "The pool should be initialized first."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580",
                          "typeString": "literal_string \"The pool should be initialized first.\""
                        }
                      ],
                      "id": 420,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4580:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 423,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4580:67:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 424,
                  "nodeType": "ExpressionStatement",
                  "src": "4580:67:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 428,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 426,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 417,
                          "src": "4665:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 427,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4682:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4665:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520616d6f756e74206f6620726571756573746564206c7020746f6b656e732073686f756c64206265203e20302e",
                        "id": 429,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4685:50:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_981c433ebc0dc24005b61ab2540ad670d4eac08e3e379c43f678b7803187e1b2",
                          "typeString": "literal_string \"The amount of requested lp tokens should be > 0.\""
                        },
                        "value": "The amount of requested lp tokens should be > 0."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_981c433ebc0dc24005b61ab2540ad670d4eac08e3e379c43f678b7803187e1b2",
                          "typeString": "literal_string \"The amount of requested lp tokens should be > 0.\""
                        }
                      ],
                      "id": 425,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4657:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 430,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4657:79:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 431,
                  "nodeType": "ExpressionStatement",
                  "src": "4657:79:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 438,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 433,
                            "name": "userToAmountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70,
                            "src": "4754:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 436,
                          "indexExpression": {
                            "expression": {
                              "id": 434,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4775:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 435,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4775:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4754:32:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 437,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 417,
                          "src": "4790:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4754:50:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f7520646f6e2774206861766520656e6f756768206c7020746f6b656e732e",
                        "id": 439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4806:34:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_31d8bce085bd2a0bfa7166c5738d1078495ea5bd89df31a2a4e71335b5b85246",
                          "typeString": "literal_string \"You don't have enough lp tokens.\""
                        },
                        "value": "You don't have enough lp tokens."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_31d8bce085bd2a0bfa7166c5738d1078495ea5bd89df31a2a4e71335b5b85246",
                          "typeString": "literal_string \"You don't have enough lp tokens.\""
                        }
                      ],
                      "id": 432,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4746:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 440,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4746:95:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 441,
                  "nodeType": "ExpressionStatement",
                  "src": "4746:95:3"
                },
                {
                  "assignments": [
                    443,
                    445
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 443,
                      "mutability": "mutable",
                      "name": "amountLinkPerLpToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 539,
                      "src": "4852:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 442,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4852:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 445,
                      "mutability": "mutable",
                      "name": "amountUSDCPerLpToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 539,
                      "src": "4882:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 444,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4882:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 448,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 446,
                      "name": "getLpTokenPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 635,
                      "src": "4915:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function () view returns (uint256,uint256)"
                      }
                    },
                    "id": 447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4915:17:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4851:81:3"
                },
                {
                  "assignments": [
                    450
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 450,
                      "mutability": "mutable",
                      "name": "amountLinkToWithdraw",
                      "nodeType": "VariableDeclaration",
                      "scope": 539,
                      "src": "4943:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 449,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4943:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 460,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        },
                        "id": 458,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 456,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5019:2:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "**",
                        "rightExpression": {
                          "hexValue": "36",
                          "id": 457,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5025:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "5019:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 453,
                            "name": "amountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 417,
                            "src": "4999:14:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 451,
                            "name": "amountLinkPerLpToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 443,
                            "src": "4974:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 452,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 946,
                          "src": "4974:24:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4974:40:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 455,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 961,
                      "src": "4974:44:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4974:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4943:84:3"
                },
                {
                  "assignments": [
                    462
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 462,
                      "mutability": "mutable",
                      "name": "amountUSDCToWithdraw",
                      "nodeType": "VariableDeclaration",
                      "scope": 539,
                      "src": "5037:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 461,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5037:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 472,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        },
                        "id": 470,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 468,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5113:2:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "**",
                        "rightExpression": {
                          "hexValue": "36",
                          "id": 469,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5119:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "5113:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 465,
                            "name": "amountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 417,
                            "src": "5093:14:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 463,
                            "name": "amountUSDCPerLpToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 445,
                            "src": "5068:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 464,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 946,
                          "src": "5068:24:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 466,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5068:40:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 467,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 961,
                      "src": "5068:44:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5068:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5037:84:3"
                },
                {
                  "expression": {
                    "id": 478,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 473,
                      "name": "totalAvailableLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "5132:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 476,
                          "name": "amountLinkToWithdraw",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 450,
                          "src": "5176:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 474,
                          "name": "totalAvailableLink",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50,
                          "src": "5153:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 475,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 931,
                        "src": "5153:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 477,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5153:44:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5132:65:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 479,
                  "nodeType": "ExpressionStatement",
                  "src": "5132:65:3"
                },
                {
                  "expression": {
                    "id": 485,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 480,
                      "name": "totalAvailableUSDC",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53,
                      "src": "5207:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 483,
                          "name": "amountUSDCToWithdraw",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 462,
                          "src": "5251:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 481,
                          "name": "totalAvailableUSDC",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53,
                          "src": "5228:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 482,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 931,
                        "src": "5228:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 484,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5228:44:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5207:65:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 486,
                  "nodeType": "ExpressionStatement",
                  "src": "5207:65:3"
                },
                {
                  "expression": {
                    "id": 492,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 487,
                      "name": "totalLpTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "5283:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 490,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 417,
                          "src": "5317:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 488,
                          "name": "totalLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56,
                          "src": "5299:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 489,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 931,
                        "src": "5299:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 491,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5299:33:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5283:49:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 493,
                  "nodeType": "ExpressionStatement",
                  "src": "5283:49:3"
                },
                {
                  "expression": {
                    "id": 505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 494,
                        "name": "userToAmountLpTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "5343:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 497,
                      "indexExpression": {
                        "expression": {
                          "id": 495,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "5364:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 496,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5364:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5343:32:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 503,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 417,
                          "src": "5415:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "baseExpression": {
                            "id": 498,
                            "name": "userToAmountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70,
                            "src": "5378:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 501,
                          "indexExpression": {
                            "expression": {
                              "id": 499,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "5399:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 500,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "5399:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5378:32:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 502,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 931,
                        "src": "5378:36:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 504,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5378:52:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5343:87:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 506,
                  "nodeType": "ExpressionStatement",
                  "src": "5343:87:3"
                },
                {
                  "assignments": [
                    509
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 509,
                      "mutability": "mutable",
                      "name": "Link",
                      "nodeType": "VariableDeclaration",
                      "scope": 539,
                      "src": "5441:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 508,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 507,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "5441:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "5441:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 513,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 511,
                        "name": "addressLink",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "5462:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 510,
                      "name": "IERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "5455:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                        "typeString": "type(contract IERC20)"
                      }
                    },
                    "id": 512,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5455:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5441:33:3"
                },
                {
                  "assignments": [
                    516
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 516,
                      "mutability": "mutable",
                      "name": "USDC",
                      "nodeType": "VariableDeclaration",
                      "scope": 539,
                      "src": "5484:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 515,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 514,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "5484:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "5484:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 520,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 518,
                        "name": "addressUSDC",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47,
                        "src": "5505:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 517,
                      "name": "IERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "5498:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                        "typeString": "type(contract IERC20)"
                      }
                    },
                    "id": 519,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5498:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5484:33:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 524,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "5549:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 525,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "5549:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 526,
                            "name": "amountLinkToWithdraw",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 450,
                            "src": "5561:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 522,
                            "name": "Link",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 509,
                            "src": "5535:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 523,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 12,
                          "src": "5535:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 527,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5535:47:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 521,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -3,
                      "src": "5528:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5528:55:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 529,
                  "nodeType": "ExpressionStatement",
                  "src": "5528:55:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 533,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "5614:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 534,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "5614:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 535,
                            "name": "amountUSDCToWithdraw",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 462,
                            "src": "5626:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 531,
                            "name": "USDC",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 516,
                            "src": "5600:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 532,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 12,
                          "src": "5600:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 536,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5600:47:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 530,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -3,
                      "src": "5593:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 537,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5593:55:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 538,
                  "nodeType": "ExpressionStatement",
                  "src": "5593:55:3"
                }
              ]
            },
            "functionSelector": "2e1a7d4d",
            "id": 540,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 417,
                  "mutability": "mutable",
                  "name": "amountLpTokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "4539:22:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 416,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4539:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4538:24:3"
            },
            "returnParameters": {
              "id": 419,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4570:0:3"
            },
            "scope": 636,
            "src": "4521:1134:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 606,
              "nodeType": "Block",
              "src": "5976:449:3",
              "statements": [
                {
                  "assignments": [
                    551
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 551,
                      "mutability": "mutable",
                      "name": "y",
                      "nodeType": "VariableDeclaration",
                      "scope": 606,
                      "src": "5986:9:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 550,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5986:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 560,
                  "initialValue": {
                    "condition": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_enum$_Token_$41",
                            "typeString": "enum SimpleSwap.Token"
                          },
                          "id": 555,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 552,
                            "name": "tokenForSale",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 545,
                            "src": "5999:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_Token_$41",
                              "typeString": "enum SimpleSwap.Token"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 553,
                              "name": "Token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41,
                              "src": "6015:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_Token_$41_$",
                                "typeString": "type(enum SimpleSwap.Token)"
                              }
                            },
                            "id": 554,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "Link",
                            "nodeType": "MemberAccess",
                            "src": "6015:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_Token_$41",
                              "typeString": "enum SimpleSwap.Token"
                            }
                          },
                          "src": "5999:26:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 556,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "5998:28:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 558,
                      "name": "totalAvailableLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "6050:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 559,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "5998:70:3",
                    "trueExpression": {
                      "id": 557,
                      "name": "totalAvailableUSDC",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53,
                      "src": "6029:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5986:82:3"
                },
                {
                  "assignments": [
                    562
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 562,
                      "mutability": "mutable",
                      "name": "x",
                      "nodeType": "VariableDeclaration",
                      "scope": 606,
                      "src": "6078:9:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 561,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6078:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 571,
                  "initialValue": {
                    "condition": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_enum$_Token_$41",
                            "typeString": "enum SimpleSwap.Token"
                          },
                          "id": 566,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 563,
                            "name": "tokenForSale",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 545,
                            "src": "6091:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_Token_$41",
                              "typeString": "enum SimpleSwap.Token"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 564,
                              "name": "Token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41,
                              "src": "6107:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_Token_$41_$",
                                "typeString": "type(enum SimpleSwap.Token)"
                              }
                            },
                            "id": 565,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "Link",
                            "nodeType": "MemberAccess",
                            "src": "6107:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_Token_$41",
                              "typeString": "enum SimpleSwap.Token"
                            }
                          },
                          "src": "6091:26:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 567,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "6090:28:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 569,
                      "name": "totalAvailableUSDC",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53,
                      "src": "6142:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 570,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "6090:70:3",
                    "trueExpression": {
                      "id": 568,
                      "name": "totalAvailableLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "6121:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6078:82:3"
                },
                {
                  "assignments": [
                    573
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 573,
                      "mutability": "mutable",
                      "name": "C",
                      "nodeType": "VariableDeclaration",
                      "scope": 606,
                      "src": "6171:9:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 572,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6171:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 578,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 576,
                        "name": "totalAvailableLink",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50,
                        "src": "6206:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 574,
                        "name": "totalAvailableUSDC",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53,
                        "src": "6183:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 575,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 946,
                      "src": "6183:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6183:42:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6171:54:3"
                },
                {
                  "assignments": [
                    580
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 580,
                      "mutability": "mutable",
                      "name": "amountPurchasedTokens",
                      "nodeType": "VariableDeclaration",
                      "scope": 606,
                      "src": "6258:29:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 579,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6258:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 591,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 587,
                                "name": "amountSoldTokens",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 542,
                                "src": "6308:16:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 585,
                                "name": "x",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 562,
                                "src": "6302:1:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 586,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 916,
                              "src": "6302:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 588,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6302:23:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 583,
                            "name": "C",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 573,
                            "src": "6296:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 584,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "div",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 961,
                          "src": "6296:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 589,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6296:30:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 581,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 551,
                        "src": "6290:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 582,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 931,
                      "src": "6290:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6290:37:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6258:69:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        },
                        "id": 603,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 601,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6410:2:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "**",
                        "rightExpression": {
                          "hexValue": "36",
                          "id": 602,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6416:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "6410:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 598,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_rational_1000000_by_1",
                                "typeString": "int_const 1000000"
                              },
                              "id": 596,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "3130",
                                "id": 594,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6391:2:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10_by_1",
                                  "typeString": "int_const 10"
                                },
                                "value": "10"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "**",
                              "rightExpression": {
                                "hexValue": "36",
                                "id": 595,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6397:1:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_6_by_1",
                                  "typeString": "int_const 6"
                                },
                                "value": "6"
                              },
                              "src": "6391:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1000000_by_1",
                                "typeString": "int_const 1000000"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 597,
                              "name": "FEE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63,
                              "src": "6401:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "6391:13:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 592,
                            "name": "amountPurchasedTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 580,
                            "src": "6365:21:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 593,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 946,
                          "src": "6365:25:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 599,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6365:40:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 600,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 961,
                      "src": "6365:44:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6365:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 549,
                  "id": 605,
                  "nodeType": "Return",
                  "src": "6358:60:3"
                }
              ]
            },
            "id": 607,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAmountPurchasedToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 546,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 542,
                  "mutability": "mutable",
                  "name": "amountSoldTokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 607,
                  "src": "5895:24:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 541,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5895:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 545,
                  "mutability": "mutable",
                  "name": "tokenForSale",
                  "nodeType": "VariableDeclaration",
                  "scope": 607,
                  "src": "5921:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Token_$41",
                    "typeString": "enum SimpleSwap.Token"
                  },
                  "typeName": {
                    "id": 544,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 543,
                      "name": "Token",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41,
                      "src": "5921:5:3"
                    },
                    "referencedDeclaration": 41,
                    "src": "5921:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Token_$41",
                      "typeString": "enum SimpleSwap.Token"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5894:46:3"
            },
            "returnParameters": {
              "id": 549,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 548,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 607,
                  "src": "5963:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 547,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5963:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5962:9:3"
            },
            "scope": 636,
            "src": "5862:563:3",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 634,
              "nodeType": "Block",
              "src": "6501:128:3",
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 621,
                            "name": "totalLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "6555:13:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_rational_1000000_by_1",
                                  "typeString": "int_const 1000000"
                                },
                                "id": 618,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 616,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6542:2:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "36",
                                  "id": 617,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6548:1:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_6_by_1",
                                    "typeString": "int_const 6"
                                  },
                                  "value": "6"
                                },
                                "src": "6542:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1000000_by_1",
                                  "typeString": "int_const 1000000"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_1000000_by_1",
                                  "typeString": "int_const 1000000"
                                }
                              ],
                              "expression": {
                                "id": 614,
                                "name": "totalAvailableLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50,
                                "src": "6519:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 615,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "mul",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 946,
                              "src": "6519:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 619,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6519:31:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 620,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "div",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 961,
                          "src": "6519:35:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 622,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6519:50:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 630,
                            "name": "totalLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "6607:13:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_rational_1000000_by_1",
                                  "typeString": "int_const 1000000"
                                },
                                "id": 627,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 625,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6594:2:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "36",
                                  "id": 626,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6600:1:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_6_by_1",
                                    "typeString": "int_const 6"
                                  },
                                  "value": "6"
                                },
                                "src": "6594:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1000000_by_1",
                                  "typeString": "int_const 1000000"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_1000000_by_1",
                                  "typeString": "int_const 1000000"
                                }
                              ],
                              "expression": {
                                "id": 623,
                                "name": "totalAvailableUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53,
                                "src": "6571:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 624,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "mul",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 946,
                              "src": "6571:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 628,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6571:31:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 629,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "div",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 961,
                          "src": "6571:35:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 631,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6571:50:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 632,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "6518:104:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 613,
                  "id": 633,
                  "nodeType": "Return",
                  "src": "6511:111:3"
                }
              ]
            },
            "functionSelector": "6f5cdb6c",
            "id": 635,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getLpTokenPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 608,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6455:2:3"
            },
            "returnParameters": {
              "id": 613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 610,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 635,
                  "src": "6478:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 609,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6478:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 612,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 635,
                  "src": "6487:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 611,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6487:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6477:18:3"
            },
            "scope": 636,
            "src": "6431:198:3",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 637,
        "src": "462:6170:3"
      }
    ],
    "src": "39:6596:3"
  },
  "bytecode": "",
  "bytecodeSha1": "da39a3ee5e6b4b0d3255bfef95601890afd80709",
  "compiler": {
    "evm_version": "istanbul",
    "optimizer": {
      "enabled": true,
      "runs": 200
    },
    "version": "0.8.0+commit.c7dfd78e"
  },
  "contractName": "IERC20",
  "coverageMap": {
    "branches": {},
    "statements": {}
  },
  "dependencies": [],
  "deployedBytecode": "",
  "deployedSourceMap": "",
  "language": "Solidity",
  "natspec": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "offset": [
    176,
    459
  ],
  "opcodes": "",
  "pcMap": {},
  "sha1": "464e31d5c6bc750c287e9b04f20a72a25248fa12",
  "source": "// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/utils/math/SafeMath.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\ninterface IERC20 {\n    function transfer(address recipient, uint256 amount) external returns (bool);\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n    function approve(address spender, uint256 amount) external returns (bool);\n}\n\n\ncontract SimpleSwap is Ownable {\n    using SafeMath for uint256;\n\n    enum Token{Link, USDC}\n\n    address addressLink = 0xa36085F69e2889c224210F603D836748e7dC0088;   //Kovan address      //0x01BE23585060835E02B77ef475b0Cc51aA1e0709; rinkeby\n    address addressUSDC = 0xb7a4F3E9097C08dA09517b5aB877F7a917224ede;    //Kovan address            //0xeb8f08a975Ab53E34D8a0330E0D34de942C95926; rinkeby\n\n    uint256 public totalAvailableLink = 0;      //18 decimals\n    uint256 public totalAvailableUSDC = 0;      //6 decimals\n\n    uint256  public totalLpTokens = 0;           //6 decimals\n\n    uint256 public FEE = 3 * 10 ** 3;         //6 decimals\n\n    bool isPoolInitialized = false;\n\n    mapping(address => uint256) userToAmountLpTokens;\n\n    function initiatePool(uint256 amountLinkToSupply, uint256 amountUsdcToSupply) public onlyOwner {\n        require(!isPoolInitialized, \"The pool was already initialized.\");\n        isPoolInitialized = true;\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        require(Link.transferFrom(msg.sender, address(this), amountLinkToSupply), \"Link transfer failed.\");\n        require(USDC.transferFrom(msg.sender, address(this), amountUsdcToSupply), \"USDC transfer failed.\");\n\n        totalAvailableLink = totalAvailableLink.add(amountLinkToSupply);\n        totalAvailableUSDC = totalAvailableUSDC.add(amountUsdcToSupply);\n\n        totalLpTokens = amountUsdcToSupply;\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].add(totalLpTokens);\n    }\n\n    function swap(uint256 quantitySoldToken, uint256 minAmountPurchasedToken, Token tokenForSale) public {\n        require(isPoolInitialized, \"The pool should be initialized first.\");\n        require(quantitySoldToken > 0, \"The amount to sell should be strictly bigger than 0.\");\n        uint256 amountPurchasedToken = getAmountPurchasedToken(quantitySoldToken, tokenForSale);\n        require(amountPurchasedToken >= minAmountPurchasedToken, \"The amount of purchased token is lower than required.\");\n\n        IERC20 soldToken;\n        IERC20 boughtToken;\n\n        if (tokenForSale == Token.Link) {\n            totalAvailableLink  = totalAvailableLink.add(quantitySoldToken);\n            totalAvailableUSDC = totalAvailableUSDC.sub(amountPurchasedToken);\n\n            soldToken = IERC20(addressLink);\n            boughtToken = IERC20(addressUSDC);\n        }\n\n        else {\n            totalAvailableLink = totalAvailableLink.sub(amountPurchasedToken);\n            totalAvailableUSDC = totalAvailableUSDC.add(quantitySoldToken);\n\n            soldToken = IERC20(addressUSDC); \n            boughtToken = IERC20(addressLink);\n        }\n        \n        assert(boughtToken.transfer(msg.sender, amountPurchasedToken));\n        require(soldToken.transferFrom(msg.sender, address(this), quantitySoldToken), \"Transfer of the amount of token you want to sell failed.\");\n    }\n\n    function supply(uint256 amountLpTokens) public {\n        require(isPoolInitialized, \"The pool should be initialized first.\");\n        require(amountLpTokens > 0, \"The amount of supplied lp tokens should be > 0.\");\n        (uint256 amountLinkPerLpToken, uint256 amountUsdcPerLpToken) = getLpTokenPrice();\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        uint256 amountLinkToSupply = amountLinkPerLpToken.mul(amountLpTokens).div(10 ** 6); // 18 decimals\n        uint256 amountUSDCToSupply = amountUsdcPerLpToken.mul(amountLpTokens).div(10 ** 6); // 6 decimals\n\n        totalAvailableLink = totalAvailableLink.add(amountLinkToSupply);\n        totalAvailableUSDC = totalAvailableUSDC.add(amountUSDCToSupply);\n\n        totalLpTokens = totalLpTokens.add(amountLpTokens);\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].add(amountLpTokens);\n\n        require(Link.transferFrom(msg.sender, address(this), amountLinkToSupply), \"Transfer of Link failed.\");\n        require(USDC.transferFrom(msg.sender, address(this), amountUSDCToSupply), \"Transfer of USDC failed.\");\n    }\n\n    function withdraw(uint256 amountLpTokens) public {\n        require(isPoolInitialized, \"The pool should be initialized first.\");\n        require(amountLpTokens > 0, \"The amount of requested lp tokens should be > 0.\");\n        require(userToAmountLpTokens[msg.sender] >= amountLpTokens, \"You don't have enough lp tokens.\");\n        (uint256 amountLinkPerLpToken, uint256 amountUSDCPerLpToken)  = getLpTokenPrice();\n\n        uint256 amountLinkToWithdraw = amountLinkPerLpToken.mul(amountLpTokens).div(10 ** 6);\n        uint256 amountUSDCToWithdraw = amountUSDCPerLpToken.mul(amountLpTokens).div(10 ** 6);\n\n        totalAvailableLink = totalAvailableLink.sub(amountLinkToWithdraw);\n        totalAvailableUSDC = totalAvailableUSDC.sub(amountUSDCToWithdraw);\n\n        totalLpTokens = totalLpTokens.sub(amountLpTokens);\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].sub(amountLpTokens);\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        assert(Link.transfer(msg.sender, amountLinkToWithdraw));\n        assert(USDC.transfer(msg.sender, amountUSDCToWithdraw));\n    }\n\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n    // Link - USDC                      // 6 decimals\n    function getAmountPurchasedToken(uint256 amountSoldTokens, Token tokenForSale) internal view returns(uint256)\n    {\n        uint256 y = (tokenForSale == Token.Link) ? totalAvailableUSDC : totalAvailableLink;\n        uint256 x = (tokenForSale == Token.Link) ? totalAvailableLink : totalAvailableUSDC;\n\n        uint256 C = totalAvailableUSDC.mul(totalAvailableLink);         // 24 decimals\n        uint256 amountPurchasedTokens = y.sub(C.div(x.add(amountSoldTokens))); // 6 or 18 decimals\n\n        return amountPurchasedTokens.mul(10 ** 6 - FEE).div(10 ** 6);\n    }\n\n    function getLpTokenPrice() public view returns(uint256, uint256) \n    {\n        return (totalAvailableLink.mul(10 ** 6).div(totalLpTokens), totalAvailableUSDC.mul(10 ** 6).div(totalLpTokens));\n    }\n\n}\n\n\n",
  "sourceMap": "",
  "sourcePath": "contracts/SimpleSwap.sol",
  "type": "interface"
}
},{}],2:[function(require,module,exports){
module.exports={"abi": [{"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"}, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}], "name": "OwnershipTransferred", "type": "event"}, {"inputs": [], "name": "FEE", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getLpTokenPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}, {"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLinkToSupply", "type": "uint256"}, {"internalType": "uint256", "name": "amountUsdcToSupply", "type": "uint256"}], "name": "initiatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "owner", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLpTokens", "type": "uint256"}], "name": "supply", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "quantitySoldToken", "type": "uint256"}, {"internalType": "uint256", "name": "minAmountPurchasedToken", "type": "uint256"}, {"internalType": "enum SimpleSwap.Token", "name": "tokenForSale", "type": "uint8"}], "name": "swap", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "totalAvailableLink", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "totalAvailableUSDC", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "totalLpTokens", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLpTokens", "type": "uint256"}], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function"}], "allSourcePaths": {"0": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/access/Ownable.sol", "1": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/utils/Context.sol", "2": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/utils/math/SafeMath.sol", "3": "contracts/SimpleSwap.sol"}, "ast": {"absolutePath": "contracts/SimpleSwap.sol", "exportedSymbols": {"Context": [1073], "IERC20": [33], "Ownable": [740], "SafeMath": [1052], "SimpleSwap": [636]}, "id": 637, "license": "UNLICENSED", "nodeType": "SourceUnit", "nodes": [{"id": 1, "literals": ["solidity", "^", "0.8", ".0"], "nodeType": "PragmaDirective", "src": "39:23:3"}, {"absolutePath": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/utils/math/SafeMath.sol", "file": "@openzeppelin/contracts/utils/math/SafeMath.sol", "id": 2, "nodeType": "ImportDirective", "scope": 637, "sourceUnit": 1053, "src": "64:57:3", "symbolAliases": [], "unitAlias": ""}, {"absolutePath": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/access/Ownable.sol", "file": "@openzeppelin/contracts/access/Ownable.sol", "id": 3, "nodeType": "ImportDirective", "scope": 637, "sourceUnit": 741, "src": "122:52:3", "symbolAliases": [], "unitAlias": ""}, {"abstract": false, "baseContracts": [], "contractDependencies": [], "contractKind": "interface", "fullyImplemented": false, "id": 33, "linearizedBaseContracts": [33], "name": "IERC20", "nodeType": "ContractDefinition", "nodes": [{"functionSelector": "a9059cbb", "id": 12, "implemented": false, "kind": "function", "modifiers": [], "name": "transfer", "nodeType": "FunctionDefinition", "parameters": {"id": 8, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 5, "mutability": "mutable", "name": "recipient", "nodeType": "VariableDeclaration", "scope": 12, "src": "217:17:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 4, "name": "address", "nodeType": "ElementaryTypeName", "src": "217:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 7, "mutability": "mutable", "name": "amount", "nodeType": "VariableDeclaration", "scope": 12, "src": "236:14:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 6, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "236:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "216:35:3"}, "returnParameters": {"id": 11, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 10, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 12, "src": "270:4:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 9, "name": "bool", "nodeType": "ElementaryTypeName", "src": "270:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "visibility": "internal"}], "src": "269:6:3"}, "scope": 33, "src": "199:77:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "external"}, {"functionSelector": "23b872dd", "id": 23, "implemented": false, "kind": "function", "modifiers": [], "name": "transferFrom", "nodeType": "FunctionDefinition", "parameters": {"id": 19, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 14, "mutability": "mutable", "name": "sender", "nodeType": "VariableDeclaration", "scope": 23, "src": "303:14:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 13, "name": "address", "nodeType": "ElementaryTypeName", "src": "303:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 16, "mutability": "mutable", "name": "recipient", "nodeType": "VariableDeclaration", "scope": 23, "src": "319:17:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 15, "name": "address", "nodeType": "ElementaryTypeName", "src": "319:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 18, "mutability": "mutable", "name": "amount", "nodeType": "VariableDeclaration", "scope": 23, "src": "338:14:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 17, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "338:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "302:51:3"}, "returnParameters": {"id": 22, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 21, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 23, "src": "372:4:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 20, "name": "bool", "nodeType": "ElementaryTypeName", "src": "372:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "visibility": "internal"}], "src": "371:6:3"}, "scope": 33, "src": "281:97:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "external"}, {"functionSelector": "095ea7b3", "id": 32, "implemented": false, "kind": "function", "modifiers": [], "name": "approve", "nodeType": "FunctionDefinition", "parameters": {"id": 28, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 25, "mutability": "mutable", "name": "spender", "nodeType": "VariableDeclaration", "scope": 32, "src": "400:15:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 24, "name": "address", "nodeType": "ElementaryTypeName", "src": "400:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 27, "mutability": "mutable", "name": "amount", "nodeType": "VariableDeclaration", "scope": 32, "src": "417:14:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 26, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "417:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "399:33:3"}, "returnParameters": {"id": 31, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 30, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 32, "src": "451:4:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 29, "name": "bool", "nodeType": "ElementaryTypeName", "src": "451:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "visibility": "internal"}], "src": "450:6:3"}, "scope": 33, "src": "383:74:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "external"}], "scope": 637, "src": "176:283:3"}, {"abstract": false, "baseContracts": [{"baseName": {"id": 34, "name": "Ownable", "nodeType": "IdentifierPath", "referencedDeclaration": 740, "src": "485:7:3"}, "id": 35, "nodeType": "InheritanceSpecifier", "src": "485:7:3"}], "contractDependencies": [740, 1073], "contractKind": "contract", "fullyImplemented": true, "id": 636, "linearizedBaseContracts": [636, 740, 1073], "name": "SimpleSwap", "nodeType": "ContractDefinition", "nodes": [{"id": 38, "libraryName": {"id": 36, "name": "SafeMath", "nodeType": "IdentifierPath", "referencedDeclaration": 1052, "src": "505:8:3"}, "nodeType": "UsingForDirective", "src": "499:27:3", "typeName": {"id": 37, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "518:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}}, {"canonicalName": "SimpleSwap.Token", "id": 41, "members": [{"id": 39, "name": "Link", "nodeType": "EnumValue", "src": "543:4:3"}, {"id": 40, "name": "USDC", "nodeType": "EnumValue", "src": "549:4:3"}], "name": "Token", "nodeType": "EnumDefinition", "src": "532:22:3"}, {"constant": false, "id": 44, "mutability": "mutable", "name": "addressLink", "nodeType": "VariableDeclaration", "scope": 636, "src": "560:64:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 42, "name": "address", "nodeType": "ElementaryTypeName", "src": "560:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "value": {"hexValue": "307861333630383546363965323838396332323432313046363033443833363734386537644330303838", "id": 43, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "582:42:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "value": "0xa36085F69e2889c224210F603D836748e7dC0088"}, "visibility": "internal"}, {"constant": false, "id": 47, "mutability": "mutable", "name": "addressUSDC", "nodeType": "VariableDeclaration", "scope": 636, "src": "707:64:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 45, "name": "address", "nodeType": "ElementaryTypeName", "src": "707:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "value": {"hexValue": "307862376134463345393039374330386441303935313762356142383737463761393137323234656465", "id": 46, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "729:42:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "value": "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede"}, "visibility": "internal"}, {"constant": false, "functionSelector": "618e552c", "id": 50, "mutability": "mutable", "name": "totalAvailableLink", "nodeType": "VariableDeclaration", "scope": 636, "src": "862:37:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 48, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "862:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 49, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "898:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "functionSelector": "b2e411c2", "id": 53, "mutability": "mutable", "name": "totalAvailableUSDC", "nodeType": "VariableDeclaration", "scope": 636, "src": "924:37:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 51, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "924:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 52, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "960:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "functionSelector": "868c844f", "id": 56, "mutability": "mutable", "name": "totalLpTokens", "nodeType": "VariableDeclaration", "scope": 636, "src": "986:33:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 54, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "986:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 55, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1018:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "functionSelector": "c57981b5", "id": 63, "mutability": "mutable", "name": "FEE", "nodeType": "VariableDeclaration", "scope": 636, "src": "1049:32:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 57, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1049:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"commonType": {"typeIdentifier": "t_rational_3000_by_1", "typeString": "int_const 3000"}, "id": 62, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "33", "id": 58, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1070:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_3_by_1", "typeString": "int_const 3"}, "value": "3"}, "nodeType": "BinaryOperation", "operator": "*", "rightExpression": {"commonType": {"typeIdentifier": "t_rational_1000_by_1", "typeString": "int_const 1000"}, "id": 61, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 59, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1074:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "33", "id": 60, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1080:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_3_by_1", "typeString": "int_const 3"}, "value": "3"}, "src": "1074:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000_by_1", "typeString": "int_const 1000"}}, "src": "1070:11:3", "typeDescriptions": {"typeIdentifier": "t_rational_3000_by_1", "typeString": "int_const 3000"}}, "visibility": "public"}, {"constant": false, "id": 66, "mutability": "mutable", "name": "isPoolInitialized", "nodeType": "VariableDeclaration", "scope": 636, "src": "1109:30:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 64, "name": "bool", "nodeType": "ElementaryTypeName", "src": "1109:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "value": {"hexValue": "66616c7365", "id": 65, "isConstant": false, "isLValue": false, "isPure": true, "kind": "bool", "lValueRequested": false, "nodeType": "Literal", "src": "1134:5:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "value": "false"}, "visibility": "internal"}, {"constant": false, "id": 70, "mutability": "mutable", "name": "userToAmountLpTokens", "nodeType": "VariableDeclaration", "scope": 636, "src": "1146:48:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}, "typeName": {"id": 69, "keyType": {"id": 67, "name": "address", "nodeType": "ElementaryTypeName", "src": "1154:7:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "nodeType": "Mapping", "src": "1146:27:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}, "valueType": {"id": 68, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1165:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}}, "visibility": "internal"}, {"body": {"id": 162, "nodeType": "Block", "src": "1296:708:3", "statements": [{"expression": {"arguments": [{"id": 81, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "UnaryOperation", "operator": "!", "prefix": true, "src": "1314:18:3", "subExpression": {"id": 80, "name": "isPoolInitialized", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 66, "src": "1315:17:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520706f6f6c2077617320616c726561647920696e697469616c697a65642e", "id": 82, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "1334:35:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_bc0cbdd852a361dc2085b6876378a83c79cecb9ee35d2f2932c6aa66b51f030d", "typeString": "literal_string \"The pool was already initialized.\""}, "value": "The pool was already initialized."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_bc0cbdd852a361dc2085b6876378a83c79cecb9ee35d2f2932c6aa66b51f030d", "typeString": "literal_string \"The pool was already initialized.\""}], "id": 79, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "1306:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 83, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1306:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 84, "nodeType": "ExpressionStatement", "src": "1306:64:3"}, {"expression": {"id": 87, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 85, "name": "isPoolInitialized", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 66, "src": "1380:17:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"hexValue": "74727565", "id": 86, "isConstant": false, "isLValue": false, "isPure": true, "kind": "bool", "lValueRequested": false, "nodeType": "Literal", "src": "1400:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "value": "true"}, "src": "1380:24:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "id": 88, "nodeType": "ExpressionStatement", "src": "1380:24:3"}, {"assignments": [91], "declarations": [{"constant": false, "id": 91, "mutability": "mutable", "name": "Link", "nodeType": "VariableDeclaration", "scope": 162, "src": "1415:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 90, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 89, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "1415:6:3"}, "referencedDeclaration": 33, "src": "1415:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 95, "initialValue": {"arguments": [{"id": 93, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "1436:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 92, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "1429:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 94, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1429:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "1415:33:3"}, {"assignments": [98], "declarations": [{"constant": false, "id": 98, "mutability": "mutable", "name": "USDC", "nodeType": "VariableDeclaration", "scope": 162, "src": "1458:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 97, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 96, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "1458:6:3"}, "referencedDeclaration": 33, "src": "1458:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 102, "initialValue": {"arguments": [{"id": 100, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "1479:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 99, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "1472:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 101, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1472:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "1458:33:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 106, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "1528:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 107, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "1528:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 110, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "1548:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$636", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$636", "typeString": "contract SimpleSwap"}], "id": 109, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "1540:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 108, "name": "address", "nodeType": "ElementaryTypeName", "src": "1540:7:3", "typeDescriptions": {}}}, "id": 111, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1540:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 112, "name": "amountLinkToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72, "src": "1555:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 104, "name": "Link", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 91, "src": "1510:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 105, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "1510:17:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 113, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1510:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "4c696e6b207472616e73666572206661696c65642e", "id": 114, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "1576:23:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_f158e05b19296bc36d920dea915801ce00a59a6190411b5bf1f3a506eff701dd", "typeString": "literal_string \"Link transfer failed.\""}, "value": "Link transfer failed."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_f158e05b19296bc36d920dea915801ce00a59a6190411b5bf1f3a506eff701dd", "typeString": "literal_string \"Link transfer failed.\""}], "id": 103, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "1502:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 115, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1502:98:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 116, "nodeType": "ExpressionStatement", "src": "1502:98:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 120, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "1636:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 121, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "1636:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 124, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "1656:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$636", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$636", "typeString": "contract SimpleSwap"}], "id": 123, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "1648:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 122, "name": "address", "nodeType": "ElementaryTypeName", "src": "1648:7:3", "typeDescriptions": {}}}, "id": 125, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1648:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 126, "name": "amountUsdcToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 74, "src": "1663:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 118, "name": "USDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 98, "src": "1618:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 119, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "1618:17:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 127, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1618:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "55534443207472616e73666572206661696c65642e", "id": 128, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "1684:23:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_4423603f23b62bc938c76ebee4735d5f883a335a9c94590879f4de27de08569c", "typeString": "literal_string \"USDC transfer failed.\""}, "value": "USDC transfer failed."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_4423603f23b62bc938c76ebee4735d5f883a335a9c94590879f4de27de08569c", "typeString": "literal_string \"USDC transfer failed.\""}], "id": 117, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "1610:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 129, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1610:98:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 130, "nodeType": "ExpressionStatement", "src": "1610:98:3"}, {"expression": {"id": 136, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 131, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "1719:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 134, "name": "amountLinkToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72, "src": "1763:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 132, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "1740:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 133, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 916, "src": "1740:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 135, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1740:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "1719:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 137, "nodeType": "ExpressionStatement", "src": "1719:63:3"}, {"expression": {"id": 143, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 138, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "1792:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 141, "name": "amountUsdcToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 74, "src": "1836:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 139, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "1813:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 140, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 916, "src": "1813:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 142, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1813:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "1792:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 144, "nodeType": "ExpressionStatement", "src": "1792:63:3"}, {"expression": {"id": 147, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 145, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "1866:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"id": 146, "name": "amountUsdcToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 74, "src": "1882:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "1866:34:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 148, "nodeType": "ExpressionStatement", "src": "1866:34:3"}, {"expression": {"id": 160, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"baseExpression": {"id": 149, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "1911:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 152, "indexExpression": {"expression": {"id": 150, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "1932:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 151, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "1932:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": true, "nodeType": "IndexAccess", "src": "1911:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 158, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "1983:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"baseExpression": {"id": 153, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "1946:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 156, "indexExpression": {"expression": {"id": 154, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "1967:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 155, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "1967:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": false, "nodeType": "IndexAccess", "src": "1946:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 157, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 916, "src": "1946:36:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 159, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1946:51:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "1911:86:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 161, "nodeType": "ExpressionStatement", "src": "1911:86:3"}]}, "functionSelector": "ce49ea9a", "id": 163, "implemented": true, "kind": "function", "modifiers": [{"id": 77, "modifierName": {"id": 76, "name": "onlyOwner", "nodeType": "IdentifierPath", "referencedDeclaration": 683, "src": "1286:9:3"}, "nodeType": "ModifierInvocation", "src": "1286:9:3"}], "name": "initiatePool", "nodeType": "FunctionDefinition", "parameters": {"id": 75, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 72, "mutability": "mutable", "name": "amountLinkToSupply", "nodeType": "VariableDeclaration", "scope": 163, "src": "1223:26:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 71, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1223:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 74, "mutability": "mutable", "name": "amountUsdcToSupply", "nodeType": "VariableDeclaration", "scope": 163, "src": "1251:26:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 73, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1251:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "1222:56:3"}, "returnParameters": {"id": 78, "nodeType": "ParameterList", "parameters": [], "src": "1296:0:3"}, "scope": 636, "src": "1201:803:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 289, "nodeType": "Block", "src": "2111:1260:3", "statements": [{"expression": {"arguments": [{"id": 174, "name": "isPoolInitialized", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 66, "src": "2129:17:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520706f6f6c2073686f756c6420626520696e697469616c697a65642066697273742e", "id": 175, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "2148:39:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580", "typeString": "literal_string \"The pool should be initialized first.\""}, "value": "The pool should be initialized first."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580", "typeString": "literal_string \"The pool should be initialized first.\""}], "id": 173, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "2121:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 176, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2121:67:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 177, "nodeType": "ExpressionStatement", "src": "2121:67:3"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 181, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 179, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "2206:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">", "rightExpression": {"hexValue": "30", "id": 180, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "2226:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "src": "2206:21:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520616d6f756e7420746f2073656c6c2073686f756c64206265207374726963746c7920626967676572207468616e20302e", "id": 182, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "2229:54:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_229315b7c9587d505a36a119e5a30260cb9a9d236b8c7ce6a99c313fbc52d461", "typeString": "literal_string \"The amount to sell should be strictly bigger than 0.\""}, "value": "The amount to sell should be strictly bigger than 0."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_229315b7c9587d505a36a119e5a30260cb9a9d236b8c7ce6a99c313fbc52d461", "typeString": "literal_string \"The amount to sell should be strictly bigger than 0.\""}], "id": 178, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "2198:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 183, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2198:86:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 184, "nodeType": "ExpressionStatement", "src": "2198:86:3"}, {"assignments": [186], "declarations": [{"constant": false, "id": 186, "mutability": "mutable", "name": "amountPurchasedToken", "nodeType": "VariableDeclaration", "scope": 289, "src": "2294:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 185, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2294:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 191, "initialValue": {"arguments": [{"id": 188, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "2349:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, {"id": 189, "name": "tokenForSale", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 170, "src": "2368:12:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}, {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}], "id": 187, "name": "getAmountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 607, "src": "2325:23:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$_t_uint256_$_t_enum$_Token_$41_$returns$_t_uint256_$", "typeString": "function (uint256,enum SimpleSwap.Token) view returns (uint256)"}}, "id": 190, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2325:56:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "2294:87:3"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 195, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 193, "name": "amountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 186, "src": "2399:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">=", "rightExpression": {"id": 194, "name": "minAmountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 167, "src": "2423:23:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2399:47:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520616d6f756e74206f662070757263686173656420746f6b656e206973206c6f776572207468616e2072657175697265642e", "id": 196, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "2448:55:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_bbba2a48efd6b000ef46699fd497e00f081b29099d44fa3a135476e5eb8f25b6", "typeString": "literal_string \"The amount of purchased token is lower than required.\""}, "value": "The amount of purchased token is lower than required."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_bbba2a48efd6b000ef46699fd497e00f081b29099d44fa3a135476e5eb8f25b6", "typeString": "literal_string \"The amount of purchased token is lower than required.\""}], "id": 192, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "2391:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 197, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2391:113:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 198, "nodeType": "ExpressionStatement", "src": "2391:113:3"}, {"assignments": [201], "declarations": [{"constant": false, "id": 201, "mutability": "mutable", "name": "soldToken", "nodeType": "VariableDeclaration", "scope": 289, "src": "2515:16:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 200, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 199, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "2515:6:3"}, "referencedDeclaration": 33, "src": "2515:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 202, "nodeType": "VariableDeclarationStatement", "src": "2515:16:3"}, {"assignments": [205], "declarations": [{"constant": false, "id": 205, "mutability": "mutable", "name": "boughtToken", "nodeType": "VariableDeclaration", "scope": 289, "src": "2541:18:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 204, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 203, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "2541:6:3"}, "referencedDeclaration": 33, "src": "2541:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 206, "nodeType": "VariableDeclarationStatement", "src": "2541:18:3"}, {"condition": {"commonType": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}, "id": 210, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 207, "name": "tokenForSale", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 170, "src": "2574:12:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "nodeType": "BinaryOperation", "operator": "==", "rightExpression": {"expression": {"id": 208, "name": "Token", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 41, "src": "2590:5:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_enum$_Token_$41_$", "typeString": "type(enum SimpleSwap.Token)"}}, "id": 209, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "memberName": "Link", "nodeType": "MemberAccess", "src": "2590:10:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "src": "2574:26:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseBody": {"id": 264, "nodeType": "Block", "src": "2877:260:3", "statements": [{"expression": {"id": 243, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 238, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "2891:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 241, "name": "amountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 186, "src": "2935:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 239, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "2912:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 240, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 931, "src": "2912:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 242, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2912:44:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2891:65:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 244, "nodeType": "ExpressionStatement", "src": "2891:65:3"}, {"expression": {"id": 250, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 245, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "2970:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 248, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "3014:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 246, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "2991:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 247, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 916, "src": "2991:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 249, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2991:41:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2970:62:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 251, "nodeType": "ExpressionStatement", "src": "2970:62:3"}, {"expression": {"id": 256, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 252, "name": "soldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 201, "src": "3047:9:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 254, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "3066:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 253, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "3059:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 255, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3059:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "src": "3047:31:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 257, "nodeType": "ExpressionStatement", "src": "3047:31:3"}, {"expression": {"id": 262, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 258, "name": "boughtToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 205, "src": "3093:11:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 260, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "3114:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 259, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "3107:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 261, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3107:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "src": "3093:33:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 263, "nodeType": "ExpressionStatement", "src": "3093:33:3"}]}, "id": 265, "nodeType": "IfStatement", "src": "2570:567:3", "trueBody": {"id": 237, "nodeType": "Block", "src": "2602:260:3", "statements": [{"expression": {"id": 216, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 211, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "2616:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 214, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "2661:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 212, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "2638:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 213, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 916, "src": "2638:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 215, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2638:41:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2616:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 217, "nodeType": "ExpressionStatement", "src": "2616:63:3"}, {"expression": {"id": 223, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 218, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "2693:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 221, "name": "amountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 186, "src": "2737:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 219, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "2714:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 220, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 931, "src": "2714:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 222, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2714:44:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2693:65:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 224, "nodeType": "ExpressionStatement", "src": "2693:65:3"}, {"expression": {"id": 229, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 225, "name": "soldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 201, "src": "2773:9:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 227, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "2792:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 226, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "2785:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 228, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2785:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "src": "2773:31:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 230, "nodeType": "ExpressionStatement", "src": "2773:31:3"}, {"expression": {"id": 235, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 231, "name": "boughtToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 205, "src": "2818:11:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 233, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "2839:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 232, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "2832:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 234, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2832:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "src": "2818:33:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 236, "nodeType": "ExpressionStatement", "src": "2818:33:3"}]}}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 269, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "3183:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 270, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "3183:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 271, "name": "amountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 186, "src": "3195:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 267, "name": "boughtToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 205, "src": "3162:11:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 268, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transfer", "nodeType": "MemberAccess", "referencedDeclaration": 12, "src": "3162:20:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,uint256) external returns (bool)"}}, "id": 272, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3162:54:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}], "id": 266, "name": "assert", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -3, "src": "3155:6:3", "typeDescriptions": {"typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$", "typeString": "function (bool) pure"}}, "id": 273, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3155:62:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 274, "nodeType": "ExpressionStatement", "src": "3155:62:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 278, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "3258:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 279, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "3258:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 282, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "3278:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$636", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$636", "typeString": "contract SimpleSwap"}], "id": 281, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "3270:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 280, "name": "address", "nodeType": "ElementaryTypeName", "src": "3270:7:3", "typeDescriptions": {}}}, "id": 283, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3270:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 284, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "3285:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 276, "name": "soldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 201, "src": "3235:9:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 277, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "3235:22:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 285, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3235:68:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "5472616e73666572206f662074686520616d6f756e74206f6620746f6b656e20796f752077616e7420746f2073656c6c206661696c65642e", "id": 286, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "3305:58:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_895e7d251133ad7c46606a147d2321601428e92dcd0a50a69507b30c13cb22fa", "typeString": "literal_string \"Transfer of the amount of token you want to sell failed.\""}, "value": "Transfer of the amount of token you want to sell failed."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_895e7d251133ad7c46606a147d2321601428e92dcd0a50a69507b30c13cb22fa", "typeString": "literal_string \"Transfer of the amount of token you want to sell failed.\""}], "id": 275, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "3227:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 287, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3227:137:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 288, "nodeType": "ExpressionStatement", "src": "3227:137:3"}]}, "functionSelector": "5c36d25e", "id": 290, "implemented": true, "kind": "function", "modifiers": [], "name": "swap", "nodeType": "FunctionDefinition", "parameters": {"id": 171, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 165, "mutability": "mutable", "name": "quantitySoldToken", "nodeType": "VariableDeclaration", "scope": 290, "src": "2024:25:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 164, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2024:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 167, "mutability": "mutable", "name": "minAmountPurchasedToken", "nodeType": "VariableDeclaration", "scope": 290, "src": "2051:31:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 166, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2051:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 170, "mutability": "mutable", "name": "tokenForSale", "nodeType": "VariableDeclaration", "scope": 290, "src": "2084:18:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}, "typeName": {"id": 169, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 168, "name": "Token", "nodeType": "IdentifierPath", "referencedDeclaration": 41, "src": "2084:5:3"}, "referencedDeclaration": 41, "src": "2084:5:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "visibility": "internal"}], "src": "2023:80:3"}, "returnParameters": {"id": 172, "nodeType": "ParameterList", "parameters": [], "src": "2111:0:3"}, "scope": 636, "src": "2010:1361:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 414, "nodeType": "Block", "src": "3424:1091:3", "statements": [{"expression": {"arguments": [{"id": 296, "name": "isPoolInitialized", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 66, "src": "3442:17:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520706f6f6c2073686f756c6420626520696e697469616c697a65642066697273742e", "id": 297, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "3461:39:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580", "typeString": "literal_string \"The pool should be initialized first.\""}, "value": "The pool should be initialized first."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580", "typeString": "literal_string \"The pool should be initialized first.\""}], "id": 295, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "3434:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 298, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3434:67:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 299, "nodeType": "ExpressionStatement", "src": "3434:67:3"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 303, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 301, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 292, "src": "3519:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">", "rightExpression": {"hexValue": "30", "id": 302, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3536:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "src": "3519:18:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520616d6f756e74206f6620737570706c696564206c7020746f6b656e732073686f756c64206265203e20302e", "id": 304, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "3539:49:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_4d3edc197d99dc2fb86176939dfb63767cb4b4d2628cec7bef006b1c5d9ab844", "typeString": "literal_string \"The amount of supplied lp tokens should be > 0.\""}, "value": "The amount of supplied lp tokens should be > 0."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_4d3edc197d99dc2fb86176939dfb63767cb4b4d2628cec7bef006b1c5d9ab844", "typeString": "literal_string \"The amount of supplied lp tokens should be > 0.\""}], "id": 300, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "3511:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 305, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3511:78:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 306, "nodeType": "ExpressionStatement", "src": "3511:78:3"}, {"assignments": [308, 310], "declarations": [{"constant": false, "id": 308, "mutability": "mutable", "name": "amountLinkPerLpToken", "nodeType": "VariableDeclaration", "scope": 414, "src": "3600:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 307, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3600:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 310, "mutability": "mutable", "name": "amountUsdcPerLpToken", "nodeType": "VariableDeclaration", "scope": 414, "src": "3630:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 309, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3630:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 313, "initialValue": {"arguments": [], "expression": {"argumentTypes": [], "id": 311, "name": "getLpTokenPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 635, "src": "3662:15:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$", "typeString": "function () view returns (uint256,uint256)"}}, "id": 312, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3662:17:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$", "typeString": "tuple(uint256,uint256)"}}, "nodeType": "VariableDeclarationStatement", "src": "3599:80:3"}, {"assignments": [316], "declarations": [{"constant": false, "id": 316, "mutability": "mutable", "name": "Link", "nodeType": "VariableDeclaration", "scope": 414, "src": "3690:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 315, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 314, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "3690:6:3"}, "referencedDeclaration": 33, "src": "3690:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 320, "initialValue": {"arguments": [{"id": 318, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "3711:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 317, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "3704:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 319, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3704:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "3690:33:3"}, {"assignments": [323], "declarations": [{"constant": false, "id": 323, "mutability": "mutable", "name": "USDC", "nodeType": "VariableDeclaration", "scope": 414, "src": "3733:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 322, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 321, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "3733:6:3"}, "referencedDeclaration": 33, "src": "3733:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 327, "initialValue": {"arguments": [{"id": 325, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "3754:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 324, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "3747:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 326, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3747:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "3733:33:3"}, {"assignments": [329], "declarations": [{"constant": false, "id": 329, "mutability": "mutable", "name": "amountLinkToSupply", "nodeType": "VariableDeclaration", "scope": 414, "src": "3777:26:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 328, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3777:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 339, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 337, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 335, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3851:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 336, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3857:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "3851:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 332, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 292, "src": "3831:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 330, "name": "amountLinkPerLpToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 308, "src": "3806:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 331, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 946, "src": "3806:24:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 333, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3806:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 334, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 961, "src": "3806:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 338, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3806:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "3777:82:3"}, {"assignments": [341], "declarations": [{"constant": false, "id": 341, "mutability": "mutable", "name": "amountUSDCToSupply", "nodeType": "VariableDeclaration", "scope": 414, "src": "3884:26:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 340, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3884:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 351, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 349, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 347, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3958:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 348, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3964:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "3958:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 344, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 292, "src": "3938:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 342, "name": "amountUsdcPerLpToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 310, "src": "3913:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 343, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 946, "src": "3913:24:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 345, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3913:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 346, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 961, "src": "3913:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 350, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3913:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "3884:82:3"}, {"expression": {"id": 357, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 352, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "3991:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 355, "name": "amountLinkToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 329, "src": "4035:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 353, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "4012:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 354, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 916, "src": "4012:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 356, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4012:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "3991:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 358, "nodeType": "ExpressionStatement", "src": "3991:63:3"}, {"expression": {"id": 364, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 359, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "4064:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 362, "name": "amountUSDCToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 341, "src": "4108:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 360, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "4085:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 361, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 916, "src": "4085:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 363, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4085:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4064:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 365, "nodeType": "ExpressionStatement", "src": "4064:63:3"}, {"expression": {"id": 371, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 366, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "4138:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 369, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 292, "src": "4172:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 367, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "4154:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 368, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 916, "src": "4154:17:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 370, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4154:33:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4138:49:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 372, "nodeType": "ExpressionStatement", "src": "4138:49:3"}, {"expression": {"id": 384, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"baseExpression": {"id": 373, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "4198:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 376, "indexExpression": {"expression": {"id": 374, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4219:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 375, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4219:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": true, "nodeType": "IndexAccess", "src": "4198:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 382, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 292, "src": "4270:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"baseExpression": {"id": 377, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "4233:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 380, "indexExpression": {"expression": {"id": 378, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4254:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 379, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4254:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": false, "nodeType": "IndexAccess", "src": "4233:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 381, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 916, "src": "4233:36:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 383, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4233:52:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4198:87:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 385, "nodeType": "ExpressionStatement", "src": "4198:87:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 389, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4322:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 390, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4322:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 393, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "4342:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$636", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$636", "typeString": "contract SimpleSwap"}], "id": 392, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "4334:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 391, "name": "address", "nodeType": "ElementaryTypeName", "src": "4334:7:3", "typeDescriptions": {}}}, "id": 394, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4334:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 395, "name": "amountLinkToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 329, "src": "4349:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 387, "name": "Link", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 316, "src": "4304:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 388, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "4304:17:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 396, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4304:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "5472616e73666572206f66204c696e6b206661696c65642e", "id": 397, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4370:26:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_952b35031a21ec8dacf217f508bafe291bc12b5ae2be70b520e0196d84dc1c59", "typeString": "literal_string \"Transfer of Link failed.\""}, "value": "Transfer of Link failed."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_952b35031a21ec8dacf217f508bafe291bc12b5ae2be70b520e0196d84dc1c59", "typeString": "literal_string \"Transfer of Link failed.\""}], "id": 386, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4296:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 398, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4296:101:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 399, "nodeType": "ExpressionStatement", "src": "4296:101:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 403, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4433:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 404, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4433:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 407, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "4453:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$636", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$636", "typeString": "contract SimpleSwap"}], "id": 406, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "4445:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 405, "name": "address", "nodeType": "ElementaryTypeName", "src": "4445:7:3", "typeDescriptions": {}}}, "id": 408, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4445:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 409, "name": "amountUSDCToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 341, "src": "4460:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 401, "name": "USDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 323, "src": "4415:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 402, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "4415:17:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 410, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4415:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "5472616e73666572206f662055534443206661696c65642e", "id": 411, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4481:26:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_b88d0eb8f0af78c81945b09dc751296b154ec68f01cf17783752bece81ce2959", "typeString": "literal_string \"Transfer of USDC failed.\""}, "value": "Transfer of USDC failed."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_b88d0eb8f0af78c81945b09dc751296b154ec68f01cf17783752bece81ce2959", "typeString": "literal_string \"Transfer of USDC failed.\""}], "id": 400, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4407:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 412, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4407:101:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 413, "nodeType": "ExpressionStatement", "src": "4407:101:3"}]}, "functionSelector": "35403023", "id": 415, "implemented": true, "kind": "function", "modifiers": [], "name": "supply", "nodeType": "FunctionDefinition", "parameters": {"id": 293, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 292, "mutability": "mutable", "name": "amountLpTokens", "nodeType": "VariableDeclaration", "scope": 415, "src": "3393:22:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 291, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3393:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "3392:24:3"}, "returnParameters": {"id": 294, "nodeType": "ParameterList", "parameters": [], "src": "3424:0:3"}, "scope": 636, "src": "3377:1138:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 539, "nodeType": "Block", "src": "4570:1085:3", "statements": [{"expression": {"arguments": [{"id": 421, "name": "isPoolInitialized", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 66, "src": "4588:17:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520706f6f6c2073686f756c6420626520696e697469616c697a65642066697273742e", "id": 422, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4607:39:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580", "typeString": "literal_string \"The pool should be initialized first.\""}, "value": "The pool should be initialized first."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580", "typeString": "literal_string \"The pool should be initialized first.\""}], "id": 420, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4580:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 423, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4580:67:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 424, "nodeType": "ExpressionStatement", "src": "4580:67:3"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 428, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 426, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 417, "src": "4665:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">", "rightExpression": {"hexValue": "30", "id": 427, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "4682:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "src": "4665:18:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520616d6f756e74206f6620726571756573746564206c7020746f6b656e732073686f756c64206265203e20302e", "id": 429, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4685:50:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_981c433ebc0dc24005b61ab2540ad670d4eac08e3e379c43f678b7803187e1b2", "typeString": "literal_string \"The amount of requested lp tokens should be > 0.\""}, "value": "The amount of requested lp tokens should be > 0."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_981c433ebc0dc24005b61ab2540ad670d4eac08e3e379c43f678b7803187e1b2", "typeString": "literal_string \"The amount of requested lp tokens should be > 0.\""}], "id": 425, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4657:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 430, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4657:79:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 431, "nodeType": "ExpressionStatement", "src": "4657:79:3"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 438, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"baseExpression": {"id": 433, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "4754:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 436, "indexExpression": {"expression": {"id": 434, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4775:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 435, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4775:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": false, "nodeType": "IndexAccess", "src": "4754:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">=", "rightExpression": {"id": 437, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 417, "src": "4790:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4754:50:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "596f7520646f6e2774206861766520656e6f756768206c7020746f6b656e732e", "id": 439, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4806:34:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_31d8bce085bd2a0bfa7166c5738d1078495ea5bd89df31a2a4e71335b5b85246", "typeString": "literal_string \"You don't have enough lp tokens.\""}, "value": "You don't have enough lp tokens."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_31d8bce085bd2a0bfa7166c5738d1078495ea5bd89df31a2a4e71335b5b85246", "typeString": "literal_string \"You don't have enough lp tokens.\""}], "id": 432, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4746:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 440, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4746:95:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 441, "nodeType": "ExpressionStatement", "src": "4746:95:3"}, {"assignments": [443, 445], "declarations": [{"constant": false, "id": 443, "mutability": "mutable", "name": "amountLinkPerLpToken", "nodeType": "VariableDeclaration", "scope": 539, "src": "4852:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 442, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4852:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 445, "mutability": "mutable", "name": "amountUSDCPerLpToken", "nodeType": "VariableDeclaration", "scope": 539, "src": "4882:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 444, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4882:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 448, "initialValue": {"arguments": [], "expression": {"argumentTypes": [], "id": 446, "name": "getLpTokenPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 635, "src": "4915:15:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$", "typeString": "function () view returns (uint256,uint256)"}}, "id": 447, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4915:17:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$", "typeString": "tuple(uint256,uint256)"}}, "nodeType": "VariableDeclarationStatement", "src": "4851:81:3"}, {"assignments": [450], "declarations": [{"constant": false, "id": 450, "mutability": "mutable", "name": "amountLinkToWithdraw", "nodeType": "VariableDeclaration", "scope": 539, "src": "4943:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 449, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4943:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 460, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 458, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 456, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5019:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 457, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5025:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "5019:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 453, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 417, "src": "4999:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 451, "name": "amountLinkPerLpToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 443, "src": "4974:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 452, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 946, "src": "4974:24:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 454, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4974:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 455, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 961, "src": "4974:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 459, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4974:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "4943:84:3"}, {"assignments": [462], "declarations": [{"constant": false, "id": 462, "mutability": "mutable", "name": "amountUSDCToWithdraw", "nodeType": "VariableDeclaration", "scope": 539, "src": "5037:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 461, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5037:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 472, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 470, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 468, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5113:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 469, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5119:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "5113:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 465, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 417, "src": "5093:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 463, "name": "amountUSDCPerLpToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 445, "src": "5068:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 464, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 946, "src": "5068:24:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 466, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5068:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 467, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 961, "src": "5068:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 471, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5068:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "5037:84:3"}, {"expression": {"id": 478, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 473, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "5132:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 476, "name": "amountLinkToWithdraw", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 450, "src": "5176:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 474, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "5153:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 475, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 931, "src": "5153:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 477, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5153:44:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5132:65:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 479, "nodeType": "ExpressionStatement", "src": "5132:65:3"}, {"expression": {"id": 485, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 480, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "5207:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 483, "name": "amountUSDCToWithdraw", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 462, "src": "5251:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 481, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "5228:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 482, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 931, "src": "5228:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 484, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5228:44:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5207:65:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 486, "nodeType": "ExpressionStatement", "src": "5207:65:3"}, {"expression": {"id": 492, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 487, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "5283:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 490, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 417, "src": "5317:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 488, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "5299:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 489, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 931, "src": "5299:17:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 491, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5299:33:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5283:49:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 493, "nodeType": "ExpressionStatement", "src": "5283:49:3"}, {"expression": {"id": 505, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"baseExpression": {"id": 494, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "5343:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 497, "indexExpression": {"expression": {"id": 495, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "5364:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 496, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "5364:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": true, "nodeType": "IndexAccess", "src": "5343:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 503, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 417, "src": "5415:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"baseExpression": {"id": 498, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "5378:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 501, "indexExpression": {"expression": {"id": 499, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "5399:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 500, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "5399:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": false, "nodeType": "IndexAccess", "src": "5378:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 502, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 931, "src": "5378:36:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 504, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5378:52:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5343:87:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 506, "nodeType": "ExpressionStatement", "src": "5343:87:3"}, {"assignments": [509], "declarations": [{"constant": false, "id": 509, "mutability": "mutable", "name": "Link", "nodeType": "VariableDeclaration", "scope": 539, "src": "5441:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 508, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 507, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "5441:6:3"}, "referencedDeclaration": 33, "src": "5441:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 513, "initialValue": {"arguments": [{"id": 511, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "5462:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 510, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "5455:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 512, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5455:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "5441:33:3"}, {"assignments": [516], "declarations": [{"constant": false, "id": 516, "mutability": "mutable", "name": "USDC", "nodeType": "VariableDeclaration", "scope": 539, "src": "5484:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 515, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 514, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "5484:6:3"}, "referencedDeclaration": 33, "src": "5484:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 520, "initialValue": {"arguments": [{"id": 518, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "5505:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 517, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "5498:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 519, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5498:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "5484:33:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 524, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "5549:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 525, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "5549:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 526, "name": "amountLinkToWithdraw", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 450, "src": "5561:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 522, "name": "Link", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 509, "src": "5535:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 523, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transfer", "nodeType": "MemberAccess", "referencedDeclaration": 12, "src": "5535:13:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,uint256) external returns (bool)"}}, "id": 527, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5535:47:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}], "id": 521, "name": "assert", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -3, "src": "5528:6:3", "typeDescriptions": {"typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$", "typeString": "function (bool) pure"}}, "id": 528, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5528:55:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 529, "nodeType": "ExpressionStatement", "src": "5528:55:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 533, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "5614:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 534, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "5614:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 535, "name": "amountUSDCToWithdraw", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 462, "src": "5626:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 531, "name": "USDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 516, "src": "5600:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 532, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transfer", "nodeType": "MemberAccess", "referencedDeclaration": 12, "src": "5600:13:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,uint256) external returns (bool)"}}, "id": 536, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5600:47:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}], "id": 530, "name": "assert", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -3, "src": "5593:6:3", "typeDescriptions": {"typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$", "typeString": "function (bool) pure"}}, "id": 537, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5593:55:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 538, "nodeType": "ExpressionStatement", "src": "5593:55:3"}]}, "functionSelector": "2e1a7d4d", "id": 540, "implemented": true, "kind": "function", "modifiers": [], "name": "withdraw", "nodeType": "FunctionDefinition", "parameters": {"id": 418, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 417, "mutability": "mutable", "name": "amountLpTokens", "nodeType": "VariableDeclaration", "scope": 540, "src": "4539:22:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 416, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4539:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "4538:24:3"}, "returnParameters": {"id": 419, "nodeType": "ParameterList", "parameters": [], "src": "4570:0:3"}, "scope": 636, "src": "4521:1134:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 606, "nodeType": "Block", "src": "5976:449:3", "statements": [{"assignments": [551], "declarations": [{"constant": false, "id": 551, "mutability": "mutable", "name": "y", "nodeType": "VariableDeclaration", "scope": 606, "src": "5986:9:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 550, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5986:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 560, "initialValue": {"condition": {"components": [{"commonType": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}, "id": 555, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 552, "name": "tokenForSale", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 545, "src": "5999:12:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "nodeType": "BinaryOperation", "operator": "==", "rightExpression": {"expression": {"id": 553, "name": "Token", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 41, "src": "6015:5:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_enum$_Token_$41_$", "typeString": "type(enum SimpleSwap.Token)"}}, "id": 554, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "memberName": "Link", "nodeType": "MemberAccess", "src": "6015:10:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "src": "5999:26:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "id": 556, "isConstant": false, "isInlineArray": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "TupleExpression", "src": "5998:28:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseExpression": {"id": 558, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "6050:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 559, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "Conditional", "src": "5998:70:3", "trueExpression": {"id": 557, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "6029:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "5986:82:3"}, {"assignments": [562], "declarations": [{"constant": false, "id": 562, "mutability": "mutable", "name": "x", "nodeType": "VariableDeclaration", "scope": 606, "src": "6078:9:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 561, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6078:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 571, "initialValue": {"condition": {"components": [{"commonType": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}, "id": 566, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 563, "name": "tokenForSale", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 545, "src": "6091:12:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "nodeType": "BinaryOperation", "operator": "==", "rightExpression": {"expression": {"id": 564, "name": "Token", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 41, "src": "6107:5:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_enum$_Token_$41_$", "typeString": "type(enum SimpleSwap.Token)"}}, "id": 565, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "memberName": "Link", "nodeType": "MemberAccess", "src": "6107:10:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "src": "6091:26:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "id": 567, "isConstant": false, "isInlineArray": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "TupleExpression", "src": "6090:28:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseExpression": {"id": 569, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "6142:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 570, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "Conditional", "src": "6090:70:3", "trueExpression": {"id": 568, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "6121:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "6078:82:3"}, {"assignments": [573], "declarations": [{"constant": false, "id": 573, "mutability": "mutable", "name": "C", "nodeType": "VariableDeclaration", "scope": 606, "src": "6171:9:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 572, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6171:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 578, "initialValue": {"arguments": [{"id": 576, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "6206:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 574, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "6183:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 575, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 946, "src": "6183:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 577, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6183:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "6171:54:3"}, {"assignments": [580], "declarations": [{"constant": false, "id": 580, "mutability": "mutable", "name": "amountPurchasedTokens", "nodeType": "VariableDeclaration", "scope": 606, "src": "6258:29:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 579, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6258:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 591, "initialValue": {"arguments": [{"arguments": [{"arguments": [{"id": 587, "name": "amountSoldTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 542, "src": "6308:16:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 585, "name": "x", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 562, "src": "6302:1:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 586, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 916, "src": "6302:5:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 588, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6302:23:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 583, "name": "C", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 573, "src": "6296:1:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 584, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 961, "src": "6296:5:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 589, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6296:30:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 581, "name": "y", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 551, "src": "6290:1:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 582, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 931, "src": "6290:5:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 590, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6290:37:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "6258:69:3"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 603, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 601, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6410:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 602, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6416:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6410:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 598, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 596, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 594, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6391:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 595, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6397:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6391:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}, "nodeType": "BinaryOperation", "operator": "-", "rightExpression": {"id": 597, "name": "FEE", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 63, "src": "6401:3:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "6391:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 592, "name": "amountPurchasedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 580, "src": "6365:21:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 593, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 946, "src": "6365:25:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 599, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6365:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 600, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 961, "src": "6365:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 604, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6365:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "functionReturnParameters": 549, "id": 605, "nodeType": "Return", "src": "6358:60:3"}]}, "id": 607, "implemented": true, "kind": "function", "modifiers": [], "name": "getAmountPurchasedToken", "nodeType": "FunctionDefinition", "parameters": {"id": 546, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 542, "mutability": "mutable", "name": "amountSoldTokens", "nodeType": "VariableDeclaration", "scope": 607, "src": "5895:24:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 541, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5895:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 545, "mutability": "mutable", "name": "tokenForSale", "nodeType": "VariableDeclaration", "scope": 607, "src": "5921:18:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}, "typeName": {"id": 544, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 543, "name": "Token", "nodeType": "IdentifierPath", "referencedDeclaration": 41, "src": "5921:5:3"}, "referencedDeclaration": 41, "src": "5921:5:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "visibility": "internal"}], "src": "5894:46:3"}, "returnParameters": {"id": 549, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 548, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 607, "src": "5963:7:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 547, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5963:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "5962:9:3"}, "scope": 636, "src": "5862:563:3", "stateMutability": "view", "virtual": false, "visibility": "internal"}, {"body": {"id": 634, "nodeType": "Block", "src": "6501:128:3", "statements": [{"expression": {"components": [{"arguments": [{"id": 621, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "6555:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 618, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 616, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6542:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 617, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6548:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6542:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"id": 614, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "6519:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 615, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 946, "src": "6519:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 619, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6519:31:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 620, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 961, "src": "6519:35:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 622, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6519:50:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, {"arguments": [{"id": 630, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "6607:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 627, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 625, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6594:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 626, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6600:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6594:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"id": 623, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "6571:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 624, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 946, "src": "6571:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 628, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6571:31:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 629, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 961, "src": "6571:35:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 631, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6571:50:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "id": 632, "isConstant": false, "isInlineArray": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "TupleExpression", "src": "6518:104:3", "typeDescriptions": {"typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$", "typeString": "tuple(uint256,uint256)"}}, "functionReturnParameters": 613, "id": 633, "nodeType": "Return", "src": "6511:111:3"}]}, "functionSelector": "6f5cdb6c", "id": 635, "implemented": true, "kind": "function", "modifiers": [], "name": "getLpTokenPrice", "nodeType": "FunctionDefinition", "parameters": {"id": 608, "nodeType": "ParameterList", "parameters": [], "src": "6455:2:3"}, "returnParameters": {"id": 613, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 610, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 635, "src": "6478:7:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 609, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6478:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 612, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 635, "src": "6487:7:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 611, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6487:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "6477:18:3"}, "scope": 636, "src": "6431:198:3", "stateMutability": "view", "virtual": false, "visibility": "public"}], "scope": 637, "src": "462:6170:3"}], "src": "39:6596:3"}, "bytecode": "6080604052600180546001600160a01b031990811673a36085f69e2889c224210f603d836748e7dc0088179091556002805490911673b7a4f3e9097c08da09517b5ab877f7a917224ede179055600060038190556004819055600555610bb86006556007805460ff1916905534801561007757600080fd5b5061008861008361008d565b610091565b6100e1565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611277806100f06000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063868c844f11610071578063868c844f146101305780638da5cb5b14610138578063b2e411c21461014d578063c57981b514610155578063ce49ea9a1461015d578063f2fde38b14610170576100b4565b80632e1a7d4d146100b957806335403023146100ce5780635c36d25e146100e1578063618e552c146100f45780636f5cdb6c14610112578063715018a614610128575b600080fd5b6100cc6100c7366004610d3a565b610183565b005b6100cc6100dc366004610d3a565b6103e4565b6100cc6100ef366004610d73565b61060e565b6100fc610858565b60405161010991906111a6565b60405180910390f35b61011a61085e565b6040516101099291906111af565b6100cc6108a5565b6100fc6108f0565b6101406108f6565b6040516101099190610dae565b6100fc610905565b6100fc61090b565b6100cc61016b366004610d52565b610911565b6100cc61017e366004610cf3565b610b20565b60075460ff166101ae5760405162461bcd60e51b81526004016101a590610f4c565b60405180910390fd5b600081116101ce5760405162461bcd60e51b81526004016101a590611025565b336000908152600860205260409020548111156101fd5760405162461bcd60e51b81526004016101a590610e99565b60008061020861085e565b90925090506000610226620f42406102208587610b91565b90610ba4565b9050600061023b620f42406102208588610b91565b60035490915061024b9083610bb0565b60035560045461025b9082610bb0565b60045560055461026b9086610bb0565b600555336000908152600860205260409020546102889086610bb0565b336000818152600860205260409081902092909255600154600254925163a9059cbb60e01b81526001600160a01b039182169390911691839163a9059cbb916102d5918890600401610de6565b602060405180830381600087803b1580156102ef57600080fd5b505af1158015610303573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103279190610d1a565b61034157634e487b7160e01b600052600160045260246000fd5b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb9061036f9033908790600401610de6565b602060405180830381600087803b15801561038957600080fd5b505af115801561039d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c19190610d1a565b6103db57634e487b7160e01b600052600160045260246000fd5b50505050505050565b60075460ff166104065760405162461bcd60e51b81526004016101a590610f4c565b600081116104265760405162461bcd60e51b81526004016101a590610efd565b60008061043161085e565b6001546002549294509092506001600160a01b039081169116600061045d620f42406102208789610b91565b90506000610472620f4240610220878a610b91565b6003549091506104829083610bbc565b6003556004546104929082610bbc565b6004556005546104a29088610bbc565b600555336000908152600860205260409020546104bf9088610bbc565b33600081815260086020526040908190209290925590516323b872dd60e01b81526001600160a01b038616916323b872dd91610502919030908790600401610dc2565b602060405180830381600087803b15801561051c57600080fd5b505af1158015610530573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105549190610d1a565b6105705760405162461bcd60e51b81526004016101a590610fee565b6040516323b872dd60e01b81526001600160a01b038416906323b872dd906105a090339030908690600401610dc2565b602060405180830381600087803b1580156105ba57600080fd5b505af11580156105ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f29190610d1a565b6103db5760405162461bcd60e51b81526004016101a5906110aa565b60075460ff166106305760405162461bcd60e51b81526004016101a590610f4c565b600083116106505760405162461bcd60e51b81526004016101a590610dff565b600061065c8483610bc8565b90508281101561067e5760405162461bcd60e51b81526004016101a5906110e1565b600080808460018111156106a257634e487b7160e01b600052602160045260246000fd5b14156106e2576003546106b59087610bbc565b6003556004546106c59084610bb0565b60045550506001546002546001600160a01b039182169116610718565b6003546106ef9084610bb0565b6003556004546106ff9087610bbc565b60045550506002546001546001600160a01b0391821691165b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb906107469033908790600401610de6565b602060405180830381600087803b15801561076057600080fd5b505af1158015610774573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107989190610d1a565b6107b257634e487b7160e01b600052600160045260246000fd5b6040516323b872dd60e01b81526001600160a01b038316906323b872dd906107e290339030908b90600401610dc2565b602060405180830381600087803b1580156107fc57600080fd5b505af1158015610810573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108349190610d1a565b6108505760405162461bcd60e51b81526004016101a590610f91565b505050505050565b60035481565b60008061087f600554610220620f4240600354610b9190919063ffffffff16565b61089d600554610220620f4240600454610b9190919063ffffffff16565b915091509091565b6108ad610c9f565b6001600160a01b03166108be6108f6565b6001600160a01b0316146108e45760405162461bcd60e51b81526004016101a590611075565b6108ee6000610ca3565b565b60055481565b6000546001600160a01b031690565b60045481565b60065481565b610919610c9f565b6001600160a01b031661092a6108f6565b6001600160a01b0316146109505760405162461bcd60e51b81526004016101a590611075565b60075460ff16156109735760405162461bcd60e51b81526004016101a590611136565b6007805460ff19166001908117909155546002546040516323b872dd60e01b81526001600160a01b0392831692919091169082906323b872dd906109bf90339030908990600401610dc2565b602060405180830381600087803b1580156109d957600080fd5b505af11580156109ed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a119190610d1a565b610a2d5760405162461bcd60e51b81526004016101a590611177565b6040516323b872dd60e01b81526001600160a01b038216906323b872dd90610a5d90339030908890600401610dc2565b602060405180830381600087803b158015610a7757600080fd5b505af1158015610a8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aaf9190610d1a565b610acb5760405162461bcd60e51b81526004016101a590610ece565b600354610ad89085610bbc565b600355600454610ae89084610bbc565b600455600583905533600090815260086020526040902054610b0a9084610bbc565b3360009081526008602052604090205550505050565b610b28610c9f565b6001600160a01b0316610b396108f6565b6001600160a01b031614610b5f5760405162461bcd60e51b81526004016101a590611075565b6001600160a01b038116610b855760405162461bcd60e51b81526004016101a590610e53565b610b8e81610ca3565b50565b6000610b9d82846111f5565b9392505050565b6000610b9d82846111d5565b6000610b9d8284611214565b6000610b9d82846111bd565b60008080836001811115610bec57634e487b7160e01b600052602160045260246000fd5b14610bf957600354610bfd565b6004545b9050600080846001811115610c2257634e487b7160e01b600052602160045260246000fd5b14610c2f57600454610c33565b6003545b90506000610c4e600354600454610b9190919063ffffffff16565b90506000610c70610c69610c62858a610bbc565b8490610ba4565b8590610bb0565b9050610c94620f4240610220600654620f4240610c8d9190611214565b8490610b91565b979650505050505050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610d04578081fd5b81356001600160a01b0381168114610b9d578182fd5b600060208284031215610d2b578081fd5b81518015158114610b9d578182fd5b600060208284031215610d4b578081fd5b5035919050565b60008060408385031215610d64578081fd5b50508035926020909101359150565b600080600060608486031215610d87578081fd5b8335925060208401359150604084013560028110610da3578182fd5b809150509250925092565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60208082526034908201527f54686520616d6f756e7420746f2073656c6c2073686f756c642062652073747260408201527334b1ba363c903134b3b3b2b9103a3430b710181760611b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f596f7520646f6e2774206861766520656e6f756768206c7020746f6b656e732e604082015260600190565b6020808252601590820152742aa9a221903a3930b739b332b9103330b4b632b21760591b604082015260600190565b6020808252602f908201527f54686520616d6f756e74206f6620737570706c696564206c7020746f6b656e7360408201526e1039b437bab632103132901f10181760891b606082015260800190565b60208082526025908201527f54686520706f6f6c2073686f756c6420626520696e697469616c697a6564206660408201526434b939ba1760d91b606082015260800190565b60208082526038908201527f5472616e73666572206f662074686520616d6f756e74206f6620746f6b656e2060408201527f796f752077616e7420746f2073656c6c206661696c65642e0000000000000000606082015260800190565b60208082526018908201527f5472616e73666572206f66204c696e6b206661696c65642e0000000000000000604082015260600190565b60208082526030908201527f54686520616d6f756e74206f6620726571756573746564206c7020746f6b656e60408201526f399039b437bab632103132901f10181760811b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526018908201527f5472616e73666572206f662055534443206661696c65642e0000000000000000604082015260600190565b60208082526035908201527f54686520616d6f756e74206f662070757263686173656420746f6b656e206973604082015274103637bbb2b9103a3430b7103932b8bab4b932b21760591b606082015260800190565b60208082526021908201527f54686520706f6f6c2077617320616c726561647920696e697469616c697a65646040820152601760f91b606082015260800190565b6020808252601590820152742634b735903a3930b739b332b9103330b4b632b21760591b604082015260600190565b90815260200190565b918252602082015260400190565b600082198211156111d0576111d061122b565b500190565b6000826111f057634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561120f5761120f61122b565b500290565b6000828210156112265761122661122b565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220aa656e5cf16cb85ad94df9fd1a187a82c86909abcec886ede0e5f846f697b6fa64736f6c63430008000033", "bytecodeSha1": "76bccfc37f30f774a4a10037cee57c97d120372c", "compiler": {"evm_version": "istanbul", "optimizer": {"enabled": true, "runs": 200}, "version": "0.8.0+commit.c7dfd78e"}, "contractName": "SimpleSwap", "coverageMap": {"branches": {"0": {"Ownable.transferOwnership": {"66": [1185, 1208, true], "67": [1934, 1956, true]}}, "1": {}, "2": {}, "3": {"SimpleSwap.initiatePool": {"63": [1314, 1332, true], "64": [1510, 1574, true], "65": [1618, 1682, true]}, "SimpleSwap.supply": {"54": [3442, 3459, true], "55": [3519, 3537, true], "56": [4304, 4368, true], "57": [4415, 4479, true]}, "SimpleSwap.swap": {"58": [2129, 2146, true], "59": [2206, 2227, true], "60": [2399, 2446, true], "61": [2574, 2600, false], "62": [3235, 3303, true]}, "SimpleSwap.withdraw": {"51": [4588, 4605, true], "52": [4665, 4683, true], "53": [4754, 4804, true]}}}, "statements": {"0": {"Ownable._setOwner": {"49": [2131, 2148], "50": [2158, 2203]}, "Ownable.owner": {"32": [1038, 1051]}, "Ownable.renounceOwnership": {"31": [1669, 1690]}, "Ownable.transferOwnership": {"41": [1926, 1999], "42": [2009, 2028]}}, "1": {"Context._msgSender": {"48": [658, 675]}}, "2": {"SafeMath.add": {"46": [2749, 2761]}, "SafeMath.div": {"44": [3844, 3856]}, "SafeMath.mul": {"43": [3459, 3471]}, "SafeMath.sub": {"45": [3116, 3128]}}, "3": {"SimpleSwap.getAmountPurchasedToken": {"47": [6358, 6418]}, "SimpleSwap.getLpTokenPrice": {"30": [6511, 6622]}, "SimpleSwap.initiatePool": {"33": [1306, 1370], "34": [1380, 1404], "35": [1502, 1600], "36": [1610, 1708], "37": [1719, 1782], "38": [1792, 1855], "39": [1866, 1900], "40": [1911, 1997]}, "SimpleSwap.supply": {"9": [3434, 3501], "10": [3511, 3589], "11": [3991, 4054], "12": [4064, 4127], "13": [4138, 4187], "14": [4198, 4285], "15": [4296, 4397], "16": [4407, 4508]}, "SimpleSwap.swap": {"17": [2121, 2188], "18": [2198, 2284], "19": [2391, 2504], "20": [2616, 2679], "21": [2693, 2758], "22": [2773, 2804], "23": [2818, 2851], "24": [2891, 2956], "25": [2970, 3032], "26": [3047, 3078], "27": [3093, 3126], "28": [3155, 3217], "29": [3227, 3364]}, "SimpleSwap.withdraw": {"0": [4580, 4647], "1": [4657, 4736], "2": [4746, 4841], "3": [5132, 5197], "4": [5207, 5272], "5": [5283, 5332], "6": [5343, 5430], "7": [5528, 5583], "8": [5593, 5648]}}}}, "dependencies": ["OpenZeppelin/openzeppelin-contracts@4.2.0/Context", "IERC20", "OpenZeppelin/openzeppelin-contracts@4.2.0/Ownable", "OpenZeppelin/openzeppelin-contracts@4.2.0/SafeMath"], "deployedBytecode": "608060405234801561001057600080fd5b50600436106100b45760003560e01c8063868c844f11610071578063868c844f146101305780638da5cb5b14610138578063b2e411c21461014d578063c57981b514610155578063ce49ea9a1461015d578063f2fde38b14610170576100b4565b80632e1a7d4d146100b957806335403023146100ce5780635c36d25e146100e1578063618e552c146100f45780636f5cdb6c14610112578063715018a614610128575b600080fd5b6100cc6100c7366004610d3a565b610183565b005b6100cc6100dc366004610d3a565b6103e4565b6100cc6100ef366004610d73565b61060e565b6100fc610858565b60405161010991906111a6565b60405180910390f35b61011a61085e565b6040516101099291906111af565b6100cc6108a5565b6100fc6108f0565b6101406108f6565b6040516101099190610dae565b6100fc610905565b6100fc61090b565b6100cc61016b366004610d52565b610911565b6100cc61017e366004610cf3565b610b20565b60075460ff166101ae5760405162461bcd60e51b81526004016101a590610f4c565b60405180910390fd5b600081116101ce5760405162461bcd60e51b81526004016101a590611025565b336000908152600860205260409020548111156101fd5760405162461bcd60e51b81526004016101a590610e99565b60008061020861085e565b90925090506000610226620f42406102208587610b91565b90610ba4565b9050600061023b620f42406102208588610b91565b60035490915061024b9083610bb0565b60035560045461025b9082610bb0565b60045560055461026b9086610bb0565b600555336000908152600860205260409020546102889086610bb0565b336000818152600860205260409081902092909255600154600254925163a9059cbb60e01b81526001600160a01b039182169390911691839163a9059cbb916102d5918890600401610de6565b602060405180830381600087803b1580156102ef57600080fd5b505af1158015610303573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103279190610d1a565b61034157634e487b7160e01b600052600160045260246000fd5b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb9061036f9033908790600401610de6565b602060405180830381600087803b15801561038957600080fd5b505af115801561039d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c19190610d1a565b6103db57634e487b7160e01b600052600160045260246000fd5b50505050505050565b60075460ff166104065760405162461bcd60e51b81526004016101a590610f4c565b600081116104265760405162461bcd60e51b81526004016101a590610efd565b60008061043161085e565b6001546002549294509092506001600160a01b039081169116600061045d620f42406102208789610b91565b90506000610472620f4240610220878a610b91565b6003549091506104829083610bbc565b6003556004546104929082610bbc565b6004556005546104a29088610bbc565b600555336000908152600860205260409020546104bf9088610bbc565b33600081815260086020526040908190209290925590516323b872dd60e01b81526001600160a01b038616916323b872dd91610502919030908790600401610dc2565b602060405180830381600087803b15801561051c57600080fd5b505af1158015610530573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105549190610d1a565b6105705760405162461bcd60e51b81526004016101a590610fee565b6040516323b872dd60e01b81526001600160a01b038416906323b872dd906105a090339030908690600401610dc2565b602060405180830381600087803b1580156105ba57600080fd5b505af11580156105ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f29190610d1a565b6103db5760405162461bcd60e51b81526004016101a5906110aa565b60075460ff166106305760405162461bcd60e51b81526004016101a590610f4c565b600083116106505760405162461bcd60e51b81526004016101a590610dff565b600061065c8483610bc8565b90508281101561067e5760405162461bcd60e51b81526004016101a5906110e1565b600080808460018111156106a257634e487b7160e01b600052602160045260246000fd5b14156106e2576003546106b59087610bbc565b6003556004546106c59084610bb0565b60045550506001546002546001600160a01b039182169116610718565b6003546106ef9084610bb0565b6003556004546106ff9087610bbc565b60045550506002546001546001600160a01b0391821691165b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb906107469033908790600401610de6565b602060405180830381600087803b15801561076057600080fd5b505af1158015610774573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107989190610d1a565b6107b257634e487b7160e01b600052600160045260246000fd5b6040516323b872dd60e01b81526001600160a01b038316906323b872dd906107e290339030908b90600401610dc2565b602060405180830381600087803b1580156107fc57600080fd5b505af1158015610810573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108349190610d1a565b6108505760405162461bcd60e51b81526004016101a590610f91565b505050505050565b60035481565b60008061087f600554610220620f4240600354610b9190919063ffffffff16565b61089d600554610220620f4240600454610b9190919063ffffffff16565b915091509091565b6108ad610c9f565b6001600160a01b03166108be6108f6565b6001600160a01b0316146108e45760405162461bcd60e51b81526004016101a590611075565b6108ee6000610ca3565b565b60055481565b6000546001600160a01b031690565b60045481565b60065481565b610919610c9f565b6001600160a01b031661092a6108f6565b6001600160a01b0316146109505760405162461bcd60e51b81526004016101a590611075565b60075460ff16156109735760405162461bcd60e51b81526004016101a590611136565b6007805460ff19166001908117909155546002546040516323b872dd60e01b81526001600160a01b0392831692919091169082906323b872dd906109bf90339030908990600401610dc2565b602060405180830381600087803b1580156109d957600080fd5b505af11580156109ed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a119190610d1a565b610a2d5760405162461bcd60e51b81526004016101a590611177565b6040516323b872dd60e01b81526001600160a01b038216906323b872dd90610a5d90339030908890600401610dc2565b602060405180830381600087803b158015610a7757600080fd5b505af1158015610a8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aaf9190610d1a565b610acb5760405162461bcd60e51b81526004016101a590610ece565b600354610ad89085610bbc565b600355600454610ae89084610bbc565b600455600583905533600090815260086020526040902054610b0a9084610bbc565b3360009081526008602052604090205550505050565b610b28610c9f565b6001600160a01b0316610b396108f6565b6001600160a01b031614610b5f5760405162461bcd60e51b81526004016101a590611075565b6001600160a01b038116610b855760405162461bcd60e51b81526004016101a590610e53565b610b8e81610ca3565b50565b6000610b9d82846111f5565b9392505050565b6000610b9d82846111d5565b6000610b9d8284611214565b6000610b9d82846111bd565b60008080836001811115610bec57634e487b7160e01b600052602160045260246000fd5b14610bf957600354610bfd565b6004545b9050600080846001811115610c2257634e487b7160e01b600052602160045260246000fd5b14610c2f57600454610c33565b6003545b90506000610c4e600354600454610b9190919063ffffffff16565b90506000610c70610c69610c62858a610bbc565b8490610ba4565b8590610bb0565b9050610c94620f4240610220600654620f4240610c8d9190611214565b8490610b91565b979650505050505050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610d04578081fd5b81356001600160a01b0381168114610b9d578182fd5b600060208284031215610d2b578081fd5b81518015158114610b9d578182fd5b600060208284031215610d4b578081fd5b5035919050565b60008060408385031215610d64578081fd5b50508035926020909101359150565b600080600060608486031215610d87578081fd5b8335925060208401359150604084013560028110610da3578182fd5b809150509250925092565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60208082526034908201527f54686520616d6f756e7420746f2073656c6c2073686f756c642062652073747260408201527334b1ba363c903134b3b3b2b9103a3430b710181760611b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f596f7520646f6e2774206861766520656e6f756768206c7020746f6b656e732e604082015260600190565b6020808252601590820152742aa9a221903a3930b739b332b9103330b4b632b21760591b604082015260600190565b6020808252602f908201527f54686520616d6f756e74206f6620737570706c696564206c7020746f6b656e7360408201526e1039b437bab632103132901f10181760891b606082015260800190565b60208082526025908201527f54686520706f6f6c2073686f756c6420626520696e697469616c697a6564206660408201526434b939ba1760d91b606082015260800190565b60208082526038908201527f5472616e73666572206f662074686520616d6f756e74206f6620746f6b656e2060408201527f796f752077616e7420746f2073656c6c206661696c65642e0000000000000000606082015260800190565b60208082526018908201527f5472616e73666572206f66204c696e6b206661696c65642e0000000000000000604082015260600190565b60208082526030908201527f54686520616d6f756e74206f6620726571756573746564206c7020746f6b656e60408201526f399039b437bab632103132901f10181760811b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526018908201527f5472616e73666572206f662055534443206661696c65642e0000000000000000604082015260600190565b60208082526035908201527f54686520616d6f756e74206f662070757263686173656420746f6b656e206973604082015274103637bbb2b9103a3430b7103932b8bab4b932b21760591b606082015260800190565b60208082526021908201527f54686520706f6f6c2077617320616c726561647920696e697469616c697a65646040820152601760f91b606082015260800190565b6020808252601590820152742634b735903a3930b739b332b9103330b4b632b21760591b604082015260600190565b90815260200190565b918252602082015260400190565b600082198211156111d0576111d061122b565b500190565b6000826111f057634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561120f5761120f61122b565b500290565b6000828210156112265761122661122b565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220aa656e5cf16cb85ad94df9fd1a187a82c86909abcec886ede0e5f846f697b6fa64736f6c63430008000033", "deployedSourceMap": "462:6170:3:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4521:1134;;;;;;:::i;:::-;;:::i;:::-;;3377:1138;;;;;;:::i;:::-;;:::i;2010:1361::-;;;;;;:::i;:::-;;:::i;862:37::-;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6431:198;;;:::i;:::-;;;;;;;;:::i;1605:92:0:-;;;:::i;986:33:3:-;;;:::i;973:85:0:-;;;:::i;:::-;;;;;;;:::i;924:37:3:-;;;:::i;1049:32::-;;;:::i;1201:803::-;;;;;;:::i;:::-;;:::i;1846:189:0:-;;;;;;:::i;:::-;;:::i;4521:1134:3:-;4588:17;;;;4580:67;;;;-1:-1:-1;;;4580:67:3;;;;;;;:::i;:::-;;;;;;;;;4682:1;4665:14;:18;4657:79;;;;-1:-1:-1;;;4657:79:3;;;;;;;:::i;:::-;4775:10;4754:32;;;;:20;:32;;;;;;:50;-1:-1:-1;4754:50:3;4746:95;;;;-1:-1:-1;;;4746:95:3;;;;;;;:::i;:::-;4852:28;4882;4915:17;:15;:17::i;:::-;4851:81;;-1:-1:-1;4851:81:3;-1:-1:-1;4943:28:3;4974:53;5019:7;4974:40;4851:81;4999:14;4974:24;:40::i;:::-;:44;;:53::i;:::-;4943:84;-1:-1:-1;5037:28:3;5068:53;5113:7;5068:40;:20;5093:14;5068:24;:40::i;:53::-;5153:18;;5037:84;;-1:-1:-1;5153:44:3;;5176:20;5153:22;:44::i;:::-;5132:18;:65;5228:18;;:44;;5251:20;5228:22;:44::i;:::-;5207:18;:65;5299:13;;:33;;5317:14;5299:17;:33::i;:::-;5283:13;:49;5399:10;5378:32;;;;:20;:32;;;;;;:52;;5415:14;5378:36;:52::i;:::-;5364:10;5343:32;;;;:20;:32;;;;;;;:87;;;;5462:11;;5505;;5535:47;;-1:-1:-1;;;5535:47:3;;-1:-1:-1;;;;;5462:11:3;;;;5505;;;;5462;;5535:13;;:47;;5561:20;;5535:47;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5528:55;;-1:-1:-1;;;5528:55:3;;;;;;;;;5600:47;;-1:-1:-1;;;5600:47:3;;-1:-1:-1;;;;;5600:13:3;;;;;:47;;5614:10;;5626:20;;5600:47;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5593:55;;-1:-1:-1;;;5593:55:3;;;;;;;;;4521:1134;;;;;;;:::o;3377:1138::-;3442:17;;;;3434:67;;;;-1:-1:-1;;;3434:67:3;;;;;;;:::i;:::-;3536:1;3519:14;:18;3511:78;;;;-1:-1:-1;;;3511:78:3;;;;;;;:::i;:::-;3600:28;3630;3662:17;:15;:17::i;:::-;3711:11;;3754;;3599:80;;-1:-1:-1;3599:80:3;;-1:-1:-1;;;;;;3711:11:3;;;;3754;3690;3806:53;3851:7;3806:40;3599:80;3831:14;3806:24;:40::i;:53::-;3777:82;-1:-1:-1;3884:26:3;3913:53;3958:7;3913:40;:20;3938:14;3913:24;:40::i;:53::-;4012:18;;3884:82;;-1:-1:-1;4012:42:3;;4035:18;4012:22;:42::i;:::-;3991:18;:63;4085:18;;:42;;4108:18;4085:22;:42::i;:::-;4064:18;:63;4154:13;;:33;;4172:14;4154:17;:33::i;:::-;4138:13;:49;4254:10;4233:32;;;;:20;:32;;;;;;:52;;4270:14;4233:36;:52::i;:::-;4219:10;4198:32;;;;:20;:32;;;;;;;:87;;;;4304:64;;-1:-1:-1;;;4304:64:3;;-1:-1:-1;;;;;4304:17:3;;;;;:64;;4219:10;4342:4;;4349:18;;4304:64;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4296:101;;;;-1:-1:-1;;;4296:101:3;;;;;;;:::i;:::-;4415:64;;-1:-1:-1;;;4415:64:3;;-1:-1:-1;;;;;4415:17:3;;;;;:64;;4433:10;;4453:4;;4460:18;;4415:64;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4407:101;;;;-1:-1:-1;;;4407:101:3;;;;;;;:::i;2010:1361::-;2129:17;;;;2121:67;;;;-1:-1:-1;;;2121:67:3;;;;;;;:::i;:::-;2226:1;2206:17;:21;2198:86;;;;-1:-1:-1;;;2198:86:3;;;;;;;:::i;:::-;2294:28;2325:56;2349:17;2368:12;2325:23;:56::i;:::-;2294:87;;2423:23;2399:20;:47;;2391:113;;;;-1:-1:-1;;;2391:113:3;;;;;;;:::i;:::-;2515:16;;;2574:12;:26;;;;;;-1:-1:-1;;;2574:26:3;;;;;;;;;;2570:567;;;2638:18;;:41;;2661:17;2638:22;:41::i;:::-;2616:18;:63;2714:18;;:44;;2737:20;2714:22;:44::i;:::-;2693:18;:65;-1:-1:-1;;2792:11:3;;2839;;-1:-1:-1;;;;;2792:11:3;;;;2839;2570:567;;;2912:18;;:44;;2935:20;2912:22;:44::i;:::-;2891:18;:65;2991:18;;:41;;3014:17;2991:22;:41::i;:::-;2970:18;:62;-1:-1:-1;;3066:11:3;;;3114;-1:-1:-1;;;;;3066:11:3;;;;3114;2570:567;3162:54;;-1:-1:-1;;;3162:54:3;;-1:-1:-1;;;;;3162:20:3;;;;;:54;;3183:10;;3195:20;;3162:54;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3155:62;;-1:-1:-1;;;3155:62:3;;;;;;;;;3235:68;;-1:-1:-1;;;3235:68:3;;-1:-1:-1;;;;;3235:22:3;;;;;:68;;3258:10;;3278:4;;3285:17;;3235:68;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3227:137;;;;-1:-1:-1;;;3227:137:3;;;;;;;:::i;:::-;2010:1361;;;;;;:::o;862:37::-;;;;:::o;6431:198::-;6478:7;6487;6519:50;6555:13;;6519:31;6542:7;6519:18;;:22;;:31;;;;:::i;:50::-;6571;6607:13;;6571:31;6594:7;6571:18;;:22;;:31;;;;:::i;:50::-;6511:111;;;;6431:198;;:::o;1605:92:0:-;1196:12;:10;:12::i;:::-;-1:-1:-1;;;;;1185:23:0;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1185:23:0;;1177:68;;;;-1:-1:-1;;;1177:68:0;;;;;;;:::i;:::-;1669:21:::1;1687:1;1669:9;:21::i;:::-;1605:92::o:0;986:33:3:-;;;;:::o;973:85:0:-;1019:7;1045:6;-1:-1:-1;;;;;1045:6:0;973:85;:::o;924:37:3:-;;;;:::o;1049:32::-;;;;:::o;1201:803::-;1196:12:0;:10;:12::i;:::-;-1:-1:-1;;;;;1185:23:0;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1185:23:0;;1177:68;;;;-1:-1:-1;;;1177:68:0;;;;;;;:::i;:::-;1315:17:3::1;::::0;::::1;;1314:18;1306:64;;;;-1:-1:-1::0;;;1306:64:3::1;;;;;;;:::i;:::-;1380:17;:24:::0;;-1:-1:-1;;1380:24:3::1;1400:4;1380:24:::0;;::::1;::::0;;;1436:11;1479::::1;::::0;1510:64:::1;::::0;-1:-1:-1;;;1510:64:3;;-1:-1:-1;;;;;1436:11:3;;::::1;::::0;1479;;;::::1;::::0;1436;;1510:17:::1;::::0;:64:::1;::::0;1528:10:::1;::::0;1548:4:::1;::::0;1555:18;;1510:64:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1502:98;;;;-1:-1:-1::0;;;1502:98:3::1;;;;;;;:::i;:::-;1618:64;::::0;-1:-1:-1;;;1618:64:3;;-1:-1:-1;;;;;1618:17:3;::::1;::::0;::::1;::::0;:64:::1;::::0;1636:10:::1;::::0;1656:4:::1;::::0;1663:18;;1618:64:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1610:98;;;;-1:-1:-1::0;;;1610:98:3::1;;;;;;;:::i;:::-;1740:18;::::0;:42:::1;::::0;1763:18;1740:22:::1;:42::i;:::-;1719:18;:63:::0;1813:18:::1;::::0;:42:::1;::::0;1836:18;1813:22:::1;:42::i;:::-;1792:18;:63:::0;1866:13:::1;:34:::0;;;1967:10:::1;-1:-1:-1::0;1946:32:3;;;:20:::1;:32;::::0;;;;;:51:::1;::::0;1882:18;1946:36:::1;:51::i;:::-;1932:10;1911:32;::::0;;;:20:::1;:32;::::0;;;;:86;-1:-1:-1;;;;1201:803:3:o;1846:189:0:-;1196:12;:10;:12::i;:::-;-1:-1:-1;;;;;1185:23:0;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1185:23:0;;1177:68;;;;-1:-1:-1;;;1177:68:0;;;;;;;:::i;:::-;-1:-1:-1;;;;;1934:22:0;::::1;1926:73;;;;-1:-1:-1::0;;;1926:73:0::1;;;;;;;:::i;:::-;2009:19;2019:8;2009:9;:19::i;:::-;1846:189:::0;:::o;3382:96:2:-;3440:7;3466:5;3470:1;3466;:5;:::i;:::-;3459:12;3382:96;-1:-1:-1;;;3382:96:2:o;3767:::-;3825:7;3851:5;3855:1;3851;:5;:::i;3039:96::-;3097:7;3123:5;3127:1;3123;:5;:::i;2672:96::-;2730:7;2756:5;2760:1;2756;:5;:::i;5862:563:3:-;5963:7;;;5999:12;:26;;;;;;-1:-1:-1;;;5999:26:3;;;;;;;;;;5998:70;;6050:18;;5998:70;;;6029:18;;5998:70;5986:82;-1:-1:-1;6078:9:3;;6091:12;:26;;;;;;-1:-1:-1;;;6091:26:3;;;;;;;;;;6090:70;;6142:18;;6090:70;;;6121:18;;6090:70;6078:82;;6171:9;6183:42;6206:18;;6183;;:22;;:42;;;;:::i;:::-;6171:54;-1:-1:-1;6258:29:3;6290:37;6296:30;6302:23;:1;6308:16;6302:5;:23::i;:::-;6296:1;;:5;:30::i;:::-;6290:1;;:5;:37::i;:::-;6258:69;;6365:53;6410:7;6365:40;6401:3;;6391:7;:13;;;;:::i;:::-;6365:21;;:25;:40::i;:53::-;6358:60;5862:563;-1:-1:-1;;;;;;;5862:563:3:o;586:96:1:-;665:10;586:96;:::o;2041:169:0:-;2096:16;2115:6;;-1:-1:-1;;;;;2131:17:0;;;-1:-1:-1;;;;;;2131:17:0;;;;;;2163:40;;2115:6;;;;;;;2163:40;;2096:16;2163:40;2041:169;;:::o;14:306:4:-;;126:2;114:9;105:7;101:23;97:32;94:2;;;147:6;139;132:22;94:2;178:23;;-1:-1:-1;;;;;230:31:4;;220:42;;210:2;;281:6;273;266:22;325:297;;445:2;433:9;424:7;420:23;416:32;413:2;;;466:6;458;451:22;413:2;503:9;497:16;556:5;549:13;542:21;535:5;532:32;522:2;;583:6;575;568:22;627:190;;739:2;727:9;718:7;714:23;710:32;707:2;;;760:6;752;745:22;707:2;-1:-1:-1;788:23:4;;697:120;-1:-1:-1;697:120:4:o;822:258::-;;;951:2;939:9;930:7;926:23;922:32;919:2;;;972:6;964;957:22;919:2;-1:-1:-1;;1000:23:4;;;1070:2;1055:18;;;1042:32;;-1:-1:-1;909:171:4:o;1085:420::-;;;;1239:2;1227:9;1218:7;1214:23;1210:32;1207:2;;;1260:6;1252;1245:22;1207:2;1301:9;1288:23;1278:33;;1358:2;1347:9;1343:18;1330:32;1320:42;;1412:2;1401:9;1397:18;1384:32;1445:1;1438:5;1435:12;1425:2;;1466:6;1458;1451:22;1425:2;1494:5;1484:15;;;1197:308;;;;;:::o;1510:203::-;-1:-1:-1;;;;;1674:32:4;;;;1656:51;;1644:2;1629:18;;1611:102::o;1718:375::-;-1:-1:-1;;;;;1976:15:4;;;1958:34;;2028:15;;;;2023:2;2008:18;;2001:43;2075:2;2060:18;;2053:34;;;;1908:2;1893:18;;1875:218::o;2098:274::-;-1:-1:-1;;;;;2290:32:4;;;;2272:51;;2354:2;2339:18;;2332:34;2260:2;2245:18;;2227:145::o;2377:416::-;2579:2;2561:21;;;2618:2;2598:18;;;2591:30;2657:34;2652:2;2637:18;;2630:62;-1:-1:-1;;;2723:2:4;2708:18;;2701:50;2783:3;2768:19;;2551:242::o;2798:402::-;3000:2;2982:21;;;3039:2;3019:18;;;3012:30;3078:34;3073:2;3058:18;;3051:62;-1:-1:-1;;;3144:2:4;3129:18;;3122:36;3190:3;3175:19;;2972:228::o;3205:356::-;3407:2;3389:21;;;3426:18;;;3419:30;3485:34;3480:2;3465:18;;3458:62;3552:2;3537:18;;3379:182::o;3566:345::-;3768:2;3750:21;;;3807:2;3787:18;;;3780:30;-1:-1:-1;;;3841:2:4;3826:18;;3819:51;3902:2;3887:18;;3740:171::o;3916:411::-;4118:2;4100:21;;;4157:2;4137:18;;;4130:30;4196:34;4191:2;4176:18;;4169:62;-1:-1:-1;;;4262:2:4;4247:18;;4240:45;4317:3;4302:19;;4090:237::o;4332:401::-;4534:2;4516:21;;;4573:2;4553:18;;;4546:30;4612:34;4607:2;4592:18;;4585:62;-1:-1:-1;;;4678:2:4;4663:18;;4656:35;4723:3;4708:19;;4506:227::o;4738:420::-;4940:2;4922:21;;;4979:2;4959:18;;;4952:30;5018:34;5013:2;4998:18;;4991:62;5089:26;5084:2;5069:18;;5062:54;5148:3;5133:19;;4912:246::o;5163:348::-;5365:2;5347:21;;;5404:2;5384:18;;;5377:30;5443:26;5438:2;5423:18;;5416:54;5502:2;5487:18;;5337:174::o;5516:412::-;5718:2;5700:21;;;5757:2;5737:18;;;5730:30;5796:34;5791:2;5776:18;;5769:62;-1:-1:-1;;;5862:2:4;5847:18;;5840:46;5918:3;5903:19;;5690:238::o;5933:356::-;6135:2;6117:21;;;6154:18;;;6147:30;6213:34;6208:2;6193:18;;6186:62;6280:2;6265:18;;6107:182::o;6294:348::-;6496:2;6478:21;;;6535:2;6515:18;;;6508:30;6574:26;6569:2;6554:18;;6547:54;6633:2;6618:18;;6468:174::o;6647:417::-;6849:2;6831:21;;;6888:2;6868:18;;;6861:30;6927:34;6922:2;6907:18;;6900:62;-1:-1:-1;;;6993:2:4;6978:18;;6971:51;7054:3;7039:19;;6821:243::o;7069:397::-;7271:2;7253:21;;;7310:2;7290:18;;;7283:30;7349:34;7344:2;7329:18;;7322:62;-1:-1:-1;;;7415:2:4;7400:18;;7393:31;7456:3;7441:19;;7243:223::o;7471:345::-;7673:2;7655:21;;;7712:2;7692:18;;;7685:30;-1:-1:-1;;;7746:2:4;7731:18;;7724:51;7807:2;7792:18;;7645:171::o;7821:177::-;7967:25;;;7955:2;7940:18;;7922:76::o;8003:248::-;8177:25;;;8233:2;8218:18;;8211:34;8165:2;8150:18;;8132:119::o;8256:128::-;;8327:1;8323:6;8320:1;8317:13;8314:2;;;8333:18;;:::i;:::-;-1:-1:-1;8369:9:4;;8304:80::o;8389:217::-;;8455:1;8445:2;;-1:-1:-1;;;8480:31:4;;8534:4;8531:1;8524:15;8562:4;8487:1;8552:15;8445:2;-1:-1:-1;8591:9:4;;8435:171::o;8611:168::-;;8717:1;8713;8709:6;8705:14;8702:1;8699:21;8694:1;8687:9;8680:17;8676:45;8673:2;;;8724:18;;:::i;:::-;-1:-1:-1;8764:9:4;;8663:116::o;8784:125::-;;8852:1;8849;8846:8;8843:2;;;8857:18;;:::i;:::-;-1:-1:-1;8894:9:4;;8833:76::o;8914:127::-;8975:10;8970:3;8966:20;8963:1;8956:31;9006:4;9003:1;8996:15;9030:4;9027:1;9020:15", "language": "Solidity", "natspec": {"kind": "dev", "methods": {"owner()": {"details": "Returns the address of the current owner."}, "renounceOwnership()": {"details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."}, "transferOwnership(address)": {"details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."}}, "version": 1}, "offset": [462, 6632], "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xB4 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x868C844F GT PUSH2 0x71 JUMPI DUP1 PUSH4 0x868C844F EQ PUSH2 0x130 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x138 JUMPI DUP1 PUSH4 0xB2E411C2 EQ PUSH2 0x14D JUMPI DUP1 PUSH4 0xC57981B5 EQ PUSH2 0x155 JUMPI DUP1 PUSH4 0xCE49EA9A EQ PUSH2 0x15D JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x170 JUMPI PUSH2 0xB4 JUMP JUMPDEST DUP1 PUSH4 0x2E1A7D4D EQ PUSH2 0xB9 JUMPI DUP1 PUSH4 0x35403023 EQ PUSH2 0xCE JUMPI DUP1 PUSH4 0x5C36D25E EQ PUSH2 0xE1 JUMPI DUP1 PUSH4 0x618E552C EQ PUSH2 0xF4 JUMPI DUP1 PUSH4 0x6F5CDB6C EQ PUSH2 0x112 JUMPI DUP1 PUSH4 0x715018A6 EQ PUSH2 0x128 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xCC PUSH2 0xC7 CALLDATASIZE PUSH1 0x4 PUSH2 0xD3A JUMP JUMPDEST PUSH2 0x183 JUMP JUMPDEST STOP JUMPDEST PUSH2 0xCC PUSH2 0xDC CALLDATASIZE PUSH1 0x4 PUSH2 0xD3A JUMP JUMPDEST PUSH2 0x3E4 JUMP JUMPDEST PUSH2 0xCC PUSH2 0xEF CALLDATASIZE PUSH1 0x4 PUSH2 0xD73 JUMP JUMPDEST PUSH2 0x60E JUMP JUMPDEST PUSH2 0xFC PUSH2 0x858 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x109 SWAP2 SWAP1 PUSH2 0x11A6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x11A PUSH2 0x85E JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x109 SWAP3 SWAP2 SWAP1 PUSH2 0x11AF JUMP JUMPDEST PUSH2 0xCC PUSH2 0x8A5 JUMP JUMPDEST PUSH2 0xFC PUSH2 0x8F0 JUMP JUMPDEST PUSH2 0x140 PUSH2 0x8F6 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x109 SWAP2 SWAP1 PUSH2 0xDAE JUMP JUMPDEST PUSH2 0xFC PUSH2 0x905 JUMP JUMPDEST PUSH2 0xFC PUSH2 0x90B JUMP JUMPDEST PUSH2 0xCC PUSH2 0x16B CALLDATASIZE PUSH1 0x4 PUSH2 0xD52 JUMP JUMPDEST PUSH2 0x911 JUMP JUMPDEST PUSH2 0xCC PUSH2 0x17E CALLDATASIZE PUSH1 0x4 PUSH2 0xCF3 JUMP JUMPDEST PUSH2 0xB20 JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0xFF AND PUSH2 0x1AE JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xF4C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP2 GT PUSH2 0x1CE JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x1025 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 GT ISZERO PUSH2 0x1FD JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xE99 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x208 PUSH2 0x85E JUMP JUMPDEST SWAP1 SWAP3 POP SWAP1 POP PUSH1 0x0 PUSH2 0x226 PUSH3 0xF4240 PUSH2 0x220 DUP6 DUP8 PUSH2 0xB91 JUMP JUMPDEST SWAP1 PUSH2 0xBA4 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0x23B PUSH3 0xF4240 PUSH2 0x220 DUP6 DUP9 PUSH2 0xB91 JUMP JUMPDEST PUSH1 0x3 SLOAD SWAP1 SWAP2 POP PUSH2 0x24B SWAP1 DUP4 PUSH2 0xBB0 JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x25B SWAP1 DUP3 PUSH2 0xBB0 JUMP JUMPDEST PUSH1 0x4 SSTORE PUSH1 0x5 SLOAD PUSH2 0x26B SWAP1 DUP7 PUSH2 0xBB0 JUMP JUMPDEST PUSH1 0x5 SSTORE CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0x288 SWAP1 DUP7 PUSH2 0xBB0 JUMP JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 DUP2 SWAP1 KECCAK256 SWAP3 SWAP1 SWAP3 SSTORE PUSH1 0x1 SLOAD PUSH1 0x2 SLOAD SWAP3 MLOAD PUSH4 0xA9059CBB PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 DUP3 AND SWAP4 SWAP1 SWAP2 AND SWAP2 DUP4 SWAP2 PUSH4 0xA9059CBB SWAP2 PUSH2 0x2D5 SWAP2 DUP9 SWAP1 PUSH1 0x4 ADD PUSH2 0xDE6 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x2EF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x303 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x327 SWAP2 SWAP1 PUSH2 0xD1A JUMP JUMPDEST PUSH2 0x341 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x1 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH4 0xA9059CBB PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND SWAP1 PUSH4 0xA9059CBB SWAP1 PUSH2 0x36F SWAP1 CALLER SWAP1 DUP8 SWAP1 PUSH1 0x4 ADD PUSH2 0xDE6 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x389 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x39D JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x3C1 SWAP2 SWAP1 PUSH2 0xD1A JUMP JUMPDEST PUSH2 0x3DB JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x1 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST POP POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0xFF AND PUSH2 0x406 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xF4C JUMP JUMPDEST PUSH1 0x0 DUP2 GT PUSH2 0x426 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xEFD JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x431 PUSH2 0x85E JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x2 SLOAD SWAP3 SWAP5 POP SWAP1 SWAP3 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 DUP2 AND SWAP2 AND PUSH1 0x0 PUSH2 0x45D PUSH3 0xF4240 PUSH2 0x220 DUP8 DUP10 PUSH2 0xB91 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0x472 PUSH3 0xF4240 PUSH2 0x220 DUP8 DUP11 PUSH2 0xB91 JUMP JUMPDEST PUSH1 0x3 SLOAD SWAP1 SWAP2 POP PUSH2 0x482 SWAP1 DUP4 PUSH2 0xBBC JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x492 SWAP1 DUP3 PUSH2 0xBBC JUMP JUMPDEST PUSH1 0x4 SSTORE PUSH1 0x5 SLOAD PUSH2 0x4A2 SWAP1 DUP9 PUSH2 0xBBC JUMP JUMPDEST PUSH1 0x5 SSTORE CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0x4BF SWAP1 DUP9 PUSH2 0xBBC JUMP JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 DUP2 SWAP1 KECCAK256 SWAP3 SWAP1 SWAP3 SSTORE SWAP1 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP7 AND SWAP2 PUSH4 0x23B872DD SWAP2 PUSH2 0x502 SWAP2 SWAP1 ADDRESS SWAP1 DUP8 SWAP1 PUSH1 0x4 ADD PUSH2 0xDC2 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x51C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x530 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x554 SWAP2 SWAP1 PUSH2 0xD1A JUMP JUMPDEST PUSH2 0x570 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xFEE JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0x5A0 SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP7 SWAP1 PUSH1 0x4 ADD PUSH2 0xDC2 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x5BA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x5CE JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x5F2 SWAP2 SWAP1 PUSH2 0xD1A JUMP JUMPDEST PUSH2 0x3DB JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x10AA JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0xFF AND PUSH2 0x630 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xF4C JUMP JUMPDEST PUSH1 0x0 DUP4 GT PUSH2 0x650 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xDFF JUMP JUMPDEST PUSH1 0x0 PUSH2 0x65C DUP5 DUP4 PUSH2 0xBC8 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 LT ISZERO PUSH2 0x67E JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x10E1 JUMP JUMPDEST PUSH1 0x0 DUP1 DUP1 DUP5 PUSH1 0x1 DUP2 GT ISZERO PUSH2 0x6A2 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x21 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST EQ ISZERO PUSH2 0x6E2 JUMPI PUSH1 0x3 SLOAD PUSH2 0x6B5 SWAP1 DUP8 PUSH2 0xBBC JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x6C5 SWAP1 DUP5 PUSH2 0xBB0 JUMP JUMPDEST PUSH1 0x4 SSTORE POP POP PUSH1 0x1 SLOAD PUSH1 0x2 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 DUP3 AND SWAP2 AND PUSH2 0x718 JUMP JUMPDEST PUSH1 0x3 SLOAD PUSH2 0x6EF SWAP1 DUP5 PUSH2 0xBB0 JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x6FF SWAP1 DUP8 PUSH2 0xBBC JUMP JUMPDEST PUSH1 0x4 SSTORE POP POP PUSH1 0x2 SLOAD PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 DUP3 AND SWAP2 AND JUMPDEST PUSH1 0x40 MLOAD PUSH4 0xA9059CBB PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND SWAP1 PUSH4 0xA9059CBB SWAP1 PUSH2 0x746 SWAP1 CALLER SWAP1 DUP8 SWAP1 PUSH1 0x4 ADD PUSH2 0xDE6 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x760 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x774 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x798 SWAP2 SWAP1 PUSH2 0xD1A JUMP JUMPDEST PUSH2 0x7B2 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x1 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0x7E2 SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP12 SWAP1 PUSH1 0x4 ADD PUSH2 0xDC2 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x7FC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x810 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x834 SWAP2 SWAP1 PUSH2 0xD1A JUMP JUMPDEST PUSH2 0x850 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xF91 JUMP JUMPDEST POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x87F PUSH1 0x5 SLOAD PUSH2 0x220 PUSH3 0xF4240 PUSH1 0x3 SLOAD PUSH2 0xB91 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH2 0x89D PUSH1 0x5 SLOAD PUSH2 0x220 PUSH3 0xF4240 PUSH1 0x4 SLOAD PUSH2 0xB91 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP2 POP SWAP2 POP SWAP1 SWAP2 JUMP JUMPDEST PUSH2 0x8AD PUSH2 0xC9F JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x8BE PUSH2 0x8F6 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ PUSH2 0x8E4 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x1075 JUMP JUMPDEST PUSH2 0x8EE PUSH1 0x0 PUSH2 0xCA3 JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x5 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 JUMP JUMPDEST PUSH1 0x4 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x6 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x919 PUSH2 0xC9F JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x92A PUSH2 0x8F6 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ PUSH2 0x950 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x1075 JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0xFF AND ISZERO PUSH2 0x973 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x1136 JUMP JUMPDEST PUSH1 0x7 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE SLOAD PUSH1 0x2 SLOAD PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 DUP4 AND SWAP3 SWAP2 SWAP1 SWAP2 AND SWAP1 DUP3 SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0x9BF SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP10 SWAP1 PUSH1 0x4 ADD PUSH2 0xDC2 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x9D9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x9ED JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0xA11 SWAP2 SWAP1 PUSH2 0xD1A JUMP JUMPDEST PUSH2 0xA2D JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x1177 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0xA5D SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP9 SWAP1 PUSH1 0x4 ADD PUSH2 0xDC2 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0xA77 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0xA8B JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0xAAF SWAP2 SWAP1 PUSH2 0xD1A JUMP JUMPDEST PUSH2 0xACB JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xECE JUMP JUMPDEST PUSH1 0x3 SLOAD PUSH2 0xAD8 SWAP1 DUP6 PUSH2 0xBBC JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0xAE8 SWAP1 DUP5 PUSH2 0xBBC JUMP JUMPDEST PUSH1 0x4 SSTORE PUSH1 0x5 DUP4 SWAP1 SSTORE CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0xB0A SWAP1 DUP5 PUSH2 0xBBC JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SSTORE POP POP POP POP JUMP JUMPDEST PUSH2 0xB28 PUSH2 0xC9F JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0xB39 PUSH2 0x8F6 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ PUSH2 0xB5F JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x1075 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0xB85 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xE53 JUMP JUMPDEST PUSH2 0xB8E DUP2 PUSH2 0xCA3 JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB9D DUP3 DUP5 PUSH2 0x11F5 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB9D DUP3 DUP5 PUSH2 0x11D5 JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB9D DUP3 DUP5 PUSH2 0x1214 JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB9D DUP3 DUP5 PUSH2 0x11BD JUMP JUMPDEST PUSH1 0x0 DUP1 DUP1 DUP4 PUSH1 0x1 DUP2 GT ISZERO PUSH2 0xBEC JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x21 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST EQ PUSH2 0xBF9 JUMPI PUSH1 0x3 SLOAD PUSH2 0xBFD JUMP JUMPDEST PUSH1 0x4 SLOAD JUMPDEST SWAP1 POP PUSH1 0x0 DUP1 DUP5 PUSH1 0x1 DUP2 GT ISZERO PUSH2 0xC22 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x21 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST EQ PUSH2 0xC2F JUMPI PUSH1 0x4 SLOAD PUSH2 0xC33 JUMP JUMPDEST PUSH1 0x3 SLOAD JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0xC4E PUSH1 0x3 SLOAD PUSH1 0x4 SLOAD PUSH2 0xB91 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0xC70 PUSH2 0xC69 PUSH2 0xC62 DUP6 DUP11 PUSH2 0xBBC JUMP JUMPDEST DUP5 SWAP1 PUSH2 0xBA4 JUMP JUMPDEST DUP6 SWAP1 PUSH2 0xBB0 JUMP JUMPDEST SWAP1 POP PUSH2 0xC94 PUSH3 0xF4240 PUSH2 0x220 PUSH1 0x6 SLOAD PUSH3 0xF4240 PUSH2 0xC8D SWAP2 SWAP1 PUSH2 0x1214 JUMP JUMPDEST DUP5 SWAP1 PUSH2 0xB91 JUMP JUMPDEST SWAP8 SWAP7 POP POP POP POP POP POP POP JUMP JUMPDEST CALLER SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR DUP5 SSTORE PUSH1 0x40 MLOAD SWAP2 SWAP1 SWAP3 AND SWAP3 DUP4 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD04 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0xB9D JUMPI DUP2 DUP3 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD2B JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0xB9D JUMPI DUP2 DUP3 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD4B JUMPI DUP1 DUP2 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xD64 JUMPI DUP1 DUP2 REVERT JUMPDEST POP POP DUP1 CALLDATALOAD SWAP3 PUSH1 0x20 SWAP1 SWAP2 ADD CALLDATALOAD SWAP2 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0xD87 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP4 CALLDATALOAD SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD SWAP2 POP PUSH1 0x40 DUP5 ADD CALLDATALOAD PUSH1 0x2 DUP2 LT PUSH2 0xDA3 JUMPI DUP2 DUP3 REVERT JUMPDEST DUP1 SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP4 DUP5 AND DUP2 MSTORE SWAP2 SWAP1 SWAP3 AND PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND DUP3 MSTORE PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x34 SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520616D6F756E7420746F2073656C6C2073686F756C6420626520737472 PUSH1 0x40 DUP3 ADD MSTORE PUSH20 0x34B1BA363C903134B3B3B2B9103A3430B7101817 PUSH1 0x61 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x26 SWAP1 DUP3 ADD MSTORE PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x40 DUP3 ADD MSTORE PUSH6 0x646472657373 PUSH1 0xD0 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 DUP2 ADD MSTORE PUSH32 0x596F7520646F6E2774206861766520656E6F756768206C7020746F6B656E732E PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x15 SWAP1 DUP3 ADD MSTORE PUSH21 0x2AA9A221903A3930B739B332B9103330B4B632B217 PUSH1 0x59 SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x2F SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520616D6F756E74206F6620737570706C696564206C7020746F6B656E73 PUSH1 0x40 DUP3 ADD MSTORE PUSH15 0x1039B437BAB632103132901F101817 PUSH1 0x89 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x25 SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520706F6F6C2073686F756C6420626520696E697469616C697A65642066 PUSH1 0x40 DUP3 ADD MSTORE PUSH5 0x34B939BA17 PUSH1 0xD9 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x38 SWAP1 DUP3 ADD MSTORE PUSH32 0x5472616E73666572206F662074686520616D6F756E74206F6620746F6B656E20 PUSH1 0x40 DUP3 ADD MSTORE PUSH32 0x796F752077616E7420746F2073656C6C206661696C65642E0000000000000000 PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x18 SWAP1 DUP3 ADD MSTORE PUSH32 0x5472616E73666572206F66204C696E6B206661696C65642E0000000000000000 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x30 SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520616D6F756E74206F6620726571756573746564206C7020746F6B656E PUSH1 0x40 DUP3 ADD MSTORE PUSH16 0x399039B437BAB632103132901F101817 PUSH1 0x81 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 DUP2 ADD MSTORE PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x18 SWAP1 DUP3 ADD MSTORE PUSH32 0x5472616E73666572206F662055534443206661696C65642E0000000000000000 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x35 SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520616D6F756E74206F662070757263686173656420746F6B656E206973 PUSH1 0x40 DUP3 ADD MSTORE PUSH21 0x103637BBB2B9103A3430B7103932B8BAB4B932B217 PUSH1 0x59 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x21 SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520706F6F6C2077617320616C726561647920696E697469616C697A6564 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x17 PUSH1 0xF9 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x15 SWAP1 DUP3 ADD MSTORE PUSH21 0x2634B735903A3930B739B332B9103330B4B632B217 PUSH1 0x59 SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST SWAP2 DUP3 MSTORE PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0x11D0 JUMPI PUSH2 0x11D0 PUSH2 0x122B JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH2 0x11F0 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 DUP2 REVERT JUMPDEST POP DIV SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 NOT DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH2 0x120F JUMPI PUSH2 0x120F PUSH2 0x122B JUMP JUMPDEST POP MUL SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 LT ISZERO PUSH2 0x1226 JUMPI PUSH2 0x1226 PUSH2 0x122B JUMP JUMPDEST POP SUB SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xAA PUSH6 0x6E5CF16CB85A 0xD9 0x4D 0xF9 REVERT BYTE XOR PUSH27 0x82C86909ABCEC886EDE0E5F846F697B6FA64736F6C634300080000 CALLER ", "pcMap": {"0": {"offset": [462, 6632], "op": "PUSH1", "path": "3", "value": "0x80"}, "2": {"fn": null, "offset": [462, 6632], "op": "PUSH1", "path": "3", "value": "0x40"}, "4": {"fn": null, "offset": [462, 6632], "op": "MSTORE", "path": "3"}, "5": {"fn": null, "offset": [462, 6632], "op": "CALLVALUE", "path": "3"}, "6": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "7": {"fn": null, "offset": [462, 6632], "op": "ISZERO", "path": "3"}, "8": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0x10"}, "11": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "12": {"fn": null, "offset": [462, 6632], "op": "PUSH1", "path": "3", "value": "0x0"}, "14": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "15": {"dev": "Cannot send ether to nonpayable function", "fn": null, "offset": [462, 6632], "op": "REVERT", "path": "3"}, "16": {"fn": null, "offset": [462, 6632], "op": "JUMPDEST", "path": "3"}, "17": {"fn": null, "offset": [462, 6632], "op": "POP", "path": "3"}, "18": {"fn": null, "offset": [462, 6632], "op": "PUSH1", "path": "3", "value": "0x4"}, "20": {"fn": null, "offset": [462, 6632], "op": "CALLDATASIZE", "path": "3"}, "21": {"fn": null, "offset": [462, 6632], "op": "LT", "path": "3"}, "22": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0xB4"}, "25": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "26": {"fn": null, "offset": [462, 6632], "op": "PUSH1", "path": "3", "value": "0x0"}, "28": {"fn": null, "offset": [462, 6632], "op": "CALLDATALOAD", "path": "3"}, "29": {"fn": null, "offset": [462, 6632], "op": "PUSH1", "path": "3", "value": "0xE0"}, "31": {"fn": null, "offset": [462, 6632], "op": "SHR", "path": "3"}, "32": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "33": {"fn": null, "offset": [462, 6632], "op": "PUSH4", "path": "3", "value": "0x868C844F"}, "38": {"fn": null, "offset": [462, 6632], "op": "GT", "path": "3"}, "39": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0x71"}, "42": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "43": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "44": {"fn": null, "offset": [462, 6632], "op": "PUSH4", "path": "3", "value": "0x868C844F"}, "49": {"fn": null, "offset": [462, 6632], "op": "EQ", "path": "3"}, "50": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0x130"}, "53": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "54": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "55": {"fn": null, "offset": [462, 6632], "op": "PUSH4", "path": "3", "value": "0x8DA5CB5B"}, "60": {"fn": null, "offset": [462, 6632], "op": "EQ", "path": "3"}, "61": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0x138"}, "64": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "65": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "66": {"fn": null, "offset": [462, 6632], "op": "PUSH4", "path": "3", "value": "0xB2E411C2"}, "71": {"fn": null, "offset": [462, 6632], "op": "EQ", "path": "3"}, "72": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0x14D"}, "75": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "76": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "77": {"fn": null, "offset": [462, 6632], "op": "PUSH4", "path": "3", "value": "0xC57981B5"}, "82": {"fn": null, "offset": [462, 6632], "op": "EQ", "path": "3"}, "83": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0x155"}, "86": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "87": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "88": {"fn": null, "offset": [462, 6632], "op": "PUSH4", "path": "3", "value": "0xCE49EA9A"}, "93": {"fn": null, "offset": [462, 6632], "op": "EQ", "path": "3"}, "94": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0x15D"}, "97": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "98": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "99": {"fn": null, "offset": [462, 6632], "op": "PUSH4", "path": "3", "value": "0xF2FDE38B"}, "104": {"fn": null, "offset": [462, 6632], "op": "EQ", "path": "3"}, "105": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0x170"}, "108": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "109": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0xB4"}, "112": {"fn": null, "offset": [462, 6632], "op": "JUMP", "path": "3"}, "113": {"fn": null, "offset": [462, 6632], "op": "JUMPDEST", "path": "3"}, "114": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "115": {"fn": null, "offset": [462, 6632], "op": "PUSH4", "path": "3", "value": "0x2E1A7D4D"}, "120": {"fn": null, "offset": [462, 6632], "op": "EQ", "path": "3"}, "121": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0xB9"}, "124": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "125": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "126": {"fn": null, "offset": [462, 6632], "op": "PUSH4", "path": "3", "value": "0x35403023"}, "131": {"fn": null, "offset": [462, 6632], "op": "EQ", "path": "3"}, "132": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0xCE"}, "135": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "136": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "137": {"fn": null, "offset": [462, 6632], "op": "PUSH4", "path": "3", "value": "0x5C36D25E"}, "142": {"fn": null, "offset": [462, 6632], "op": "EQ", "path": "3"}, "143": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0xE1"}, "146": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "147": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "148": {"fn": null, "offset": [462, 6632], "op": "PUSH4", "path": "3", "value": "0x618E552C"}, "153": {"fn": null, "offset": [462, 6632], "op": "EQ", "path": "3"}, "154": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0xF4"}, "157": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "158": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "159": {"fn": null, "offset": [462, 6632], "op": "PUSH4", "path": "3", "value": "0x6F5CDB6C"}, "164": {"fn": null, "offset": [462, 6632], "op": "EQ", "path": "3"}, "165": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0x112"}, "168": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "169": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "170": {"fn": null, "offset": [462, 6632], "op": "PUSH4", "path": "3", "value": "0x715018A6"}, "175": {"fn": null, "offset": [462, 6632], "op": "EQ", "path": "3"}, "176": {"fn": null, "offset": [462, 6632], "op": "PUSH2", "path": "3", "value": "0x128"}, "179": {"fn": null, "offset": [462, 6632], "op": "JUMPI", "path": "3"}, "180": {"fn": null, "offset": [462, 6632], "op": "JUMPDEST", "path": "3"}, "181": {"fn": null, "offset": [462, 6632], "op": "PUSH1", "path": "3", "value": "0x0"}, "183": {"fn": null, "offset": [462, 6632], "op": "DUP1", "path": "3"}, "184": {"first_revert": true, "fn": null, "offset": [462, 6632], "op": "REVERT", "path": "3"}, "185": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "JUMPDEST", "path": "3"}, "186": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "PUSH2", "path": "3", "value": "0xCC"}, "189": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "PUSH2", "path": "3", "value": "0xC7"}, "192": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "CALLDATASIZE", "path": "3"}, "193": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "PUSH1", "path": "3", "value": "0x4"}, "195": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "PUSH2", "path": "3", "value": "0xD3A"}, "198": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4521, 5655], "op": "JUMP", "path": "3"}, "199": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "JUMPDEST", "path": "3"}, "200": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "PUSH2", "path": "3", "value": "0x183"}, "203": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4521, 5655], "op": "JUMP", "path": "3"}, "204": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "JUMPDEST", "path": "3"}, "205": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "STOP", "path": "3"}, "206": {"fn": "SimpleSwap.supply", "offset": [3377, 4515], "op": "JUMPDEST", "path": "3"}, "207": {"fn": "SimpleSwap.supply", "offset": [3377, 4515], "op": "PUSH2", "path": "3", "value": "0xCC"}, "210": {"fn": "SimpleSwap.supply", "offset": [3377, 4515], "op": "PUSH2", "path": "3", "value": "0xDC"}, "213": {"fn": "SimpleSwap.supply", "offset": [3377, 4515], "op": "CALLDATASIZE", "path": "3"}, "214": {"fn": "SimpleSwap.supply", "offset": [3377, 4515], "op": "PUSH1", "path": "3", "value": "0x4"}, "216": {"fn": "SimpleSwap.supply", "offset": [3377, 4515], "op": "PUSH2", "path": "3", "value": "0xD3A"}, "219": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3377, 4515], "op": "JUMP", "path": "3"}, "220": {"fn": "SimpleSwap.supply", "offset": [3377, 4515], "op": "JUMPDEST", "path": "3"}, "221": {"fn": "SimpleSwap.supply", "offset": [3377, 4515], "op": "PUSH2", "path": "3", "value": "0x3E4"}, "224": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3377, 4515], "op": "JUMP", "path": "3"}, "225": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "JUMPDEST", "path": "3"}, "226": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "PUSH2", "path": "3", "value": "0xCC"}, "229": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "PUSH2", "path": "3", "value": "0xEF"}, "232": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "CALLDATASIZE", "path": "3"}, "233": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "PUSH1", "path": "3", "value": "0x4"}, "235": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "PUSH2", "path": "3", "value": "0xD73"}, "238": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2010, 3371], "op": "JUMP", "path": "3"}, "239": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "JUMPDEST", "path": "3"}, "240": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "PUSH2", "path": "3", "value": "0x60E"}, "243": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2010, 3371], "op": "JUMP", "path": "3"}, "244": {"offset": [862, 899], "op": "JUMPDEST", "path": "3"}, "245": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH2", "path": "3", "value": "0xFC"}, "248": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH2", "path": "3", "value": "0x858"}, "251": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [862, 899], "op": "JUMP", "path": "3"}, "252": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "JUMPDEST", "path": "3"}, "253": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH1", "path": "3", "value": "0x40"}, "255": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "MLOAD", "path": "3"}, "256": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH2", "path": "3", "value": "0x109"}, "259": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SWAP2", "path": "3"}, "260": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SWAP1", "path": "3"}, "261": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH2", "path": "3", "value": "0x11A6"}, "264": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [862, 899], "op": "JUMP", "path": "3"}, "265": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "JUMPDEST", "path": "3"}, "266": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH1", "path": "3", "value": "0x40"}, "268": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "MLOAD", "path": "3"}, "269": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "DUP1", "path": "3"}, "270": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SWAP2", "path": "3"}, "271": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SUB", "path": "3"}, "272": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SWAP1", "path": "3"}, "273": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "RETURN", "path": "3"}, "274": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "JUMPDEST", "path": "3"}, "275": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "PUSH2", "path": "3", "value": "0x11A"}, "278": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "PUSH2", "path": "3", "value": "0x85E"}, "281": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "i", "offset": [6431, 6629], "op": "JUMP", "path": "3"}, "282": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "JUMPDEST", "path": "3"}, "283": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "PUSH1", "path": "3", "value": "0x40"}, "285": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "MLOAD", "path": "3"}, "286": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "PUSH2", "path": "3", "value": "0x109"}, "289": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "SWAP3", "path": "3"}, "290": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "SWAP2", "path": "3"}, "291": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "SWAP1", "path": "3"}, "292": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "PUSH2", "path": "3", "value": "0x11AF"}, "295": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "i", "offset": [6431, 6629], "op": "JUMP", "path": "3"}, "296": {"fn": "Ownable.renounceOwnership", "offset": [1605, 1697], "op": "JUMPDEST", "path": "0"}, "297": {"fn": "Ownable.renounceOwnership", "offset": [1605, 1697], "op": "PUSH2", "path": "0", "value": "0xCC"}, "300": {"fn": "Ownable.renounceOwnership", "offset": [1605, 1697], "op": "PUSH2", "path": "0", "value": "0x8A5"}, "303": {"fn": "Ownable.renounceOwnership", "jump": "i", "offset": [1605, 1697], "op": "JUMP", "path": "0"}, "304": {"offset": [986, 1019], "op": "JUMPDEST", "path": "3"}, "305": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "PUSH2", "path": "3", "value": "0xFC"}, "308": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "PUSH2", "path": "3", "value": "0x8F0"}, "311": {"fn": "Ownable.renounceOwnership", "jump": "i", "offset": [986, 1019], "op": "JUMP", "path": "3"}, "312": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "JUMPDEST", "path": "0"}, "313": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH2", "path": "0", "value": "0x140"}, "316": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH2", "path": "0", "value": "0x8F6"}, "319": {"fn": "Ownable.owner", "jump": "i", "offset": [973, 1058], "op": "JUMP", "path": "0"}, "320": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "JUMPDEST", "path": "0"}, "321": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH1", "path": "0", "value": "0x40"}, "323": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "MLOAD", "path": "0"}, "324": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH2", "path": "0", "value": "0x109"}, "327": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "SWAP2", "path": "0"}, "328": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "SWAP1", "path": "0"}, "329": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH2", "path": "0", "value": "0xDAE"}, "332": {"fn": "Ownable.owner", "jump": "i", "offset": [973, 1058], "op": "JUMP", "path": "0"}, "333": {"offset": [924, 961], "op": "JUMPDEST", "path": "3"}, "334": {"fn": "Ownable.owner", "offset": [924, 961], "op": "PUSH2", "path": "3", "value": "0xFC"}, "337": {"fn": "Ownable.owner", "offset": [924, 961], "op": "PUSH2", "path": "3", "value": "0x905"}, "340": {"fn": "Ownable.owner", "jump": "i", "offset": [924, 961], "op": "JUMP", "path": "3"}, "341": {"offset": [1049, 1081], "op": "JUMPDEST", "path": "3"}, "342": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "PUSH2", "path": "3", "value": "0xFC"}, "345": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "PUSH2", "path": "3", "value": "0x90B"}, "348": {"fn": "Ownable.owner", "jump": "i", "offset": [1049, 1081], "op": "JUMP", "path": "3"}, "349": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "JUMPDEST", "path": "3"}, "350": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "PUSH2", "path": "3", "value": "0xCC"}, "353": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "PUSH2", "path": "3", "value": "0x16B"}, "356": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "CALLDATASIZE", "path": "3"}, "357": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "PUSH1", "path": "3", "value": "0x4"}, "359": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "PUSH2", "path": "3", "value": "0xD52"}, "362": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1201, 2004], "op": "JUMP", "path": "3"}, "363": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "JUMPDEST", "path": "3"}, "364": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "PUSH2", "path": "3", "value": "0x911"}, "367": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1201, 2004], "op": "JUMP", "path": "3"}, "368": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "JUMPDEST", "path": "0"}, "369": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH2", "path": "0", "value": "0xCC"}, "372": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH2", "path": "0", "value": "0x17E"}, "375": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "CALLDATASIZE", "path": "0"}, "376": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH1", "path": "0", "value": "0x4"}, "378": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH2", "path": "0", "value": "0xCF3"}, "381": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [1846, 2035], "op": "JUMP", "path": "0"}, "382": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "JUMPDEST", "path": "0"}, "383": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH2", "path": "0", "value": "0xB20"}, "386": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [1846, 2035], "op": "JUMP", "path": "0"}, "387": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "JUMPDEST", "path": "3"}, "388": {"fn": "SimpleSwap.withdraw", "offset": [4588, 4605], "op": "PUSH1", "path": "3", "statement": 0, "value": "0x7"}, "390": {"fn": "SimpleSwap.withdraw", "offset": [4588, 4605], "op": "SLOAD", "path": "3"}, "391": {"fn": "SimpleSwap.withdraw", "offset": [4588, 4605], "op": "PUSH1", "path": "3", "value": "0xFF"}, "393": {"branch": 51, "fn": "SimpleSwap.withdraw", "offset": [4588, 4605], "op": "AND", "path": "3"}, "394": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "PUSH2", "path": "3", "value": "0x1AE"}, "397": {"branch": 51, "fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "JUMPI", "path": "3"}, "398": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "PUSH1", "path": "3", "value": "0x40"}, "400": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "MLOAD", "path": "3"}, "401": {"op": "PUSH3", "value": "0x461BCD"}, "405": {"op": "PUSH1", "value": "0xE5"}, "407": {"op": "SHL"}, "408": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "DUP2", "path": "3"}, "409": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "MSTORE", "path": "3"}, "410": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "PUSH1", "path": "3", "value": "0x4"}, "412": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "ADD", "path": "3"}, "413": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "416": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "SWAP1", "path": "3"}, "417": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "PUSH2", "path": "3", "value": "0xF4C"}, "420": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4580, 4647], "op": "JUMP", "path": "3"}, "421": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "JUMPDEST", "path": "3"}, "422": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "PUSH1", "path": "3", "value": "0x40"}, "424": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "MLOAD", "path": "3"}, "425": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "DUP1", "path": "3"}, "426": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "SWAP2", "path": "3"}, "427": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "SUB", "path": "3"}, "428": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "SWAP1", "path": "3"}, "429": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "REVERT", "optimizer_revert": true, "path": "3"}, "430": {"fn": "SimpleSwap.withdraw", "offset": [4580, 4647], "op": "JUMPDEST", "path": "3"}, "431": {"fn": "SimpleSwap.withdraw", "offset": [4682, 4683], "op": "PUSH1", "path": "3", "statement": 1, "value": "0x0"}, "433": {"fn": "SimpleSwap.withdraw", "offset": [4665, 4679], "op": "DUP2", "path": "3"}, "434": {"branch": 52, "fn": "SimpleSwap.withdraw", "offset": [4665, 4683], "op": "GT", "path": "3"}, "435": {"fn": "SimpleSwap.withdraw", "offset": [4657, 4736], "op": "PUSH2", "path": "3", "value": "0x1CE"}, "438": {"branch": 52, "fn": "SimpleSwap.withdraw", "offset": [4657, 4736], "op": "JUMPI", "path": "3"}, "439": {"fn": "SimpleSwap.withdraw", "offset": [4657, 4736], "op": "PUSH1", "path": "3", "value": "0x40"}, "441": {"fn": "SimpleSwap.withdraw", "offset": [4657, 4736], "op": "MLOAD", "path": "3"}, "442": {"op": "PUSH3", "value": "0x461BCD"}, "446": {"op": "PUSH1", "value": "0xE5"}, "448": {"op": "SHL"}, "449": {"fn": "SimpleSwap.withdraw", "offset": [4657, 4736], "op": "DUP2", "path": "3"}, "450": {"fn": "SimpleSwap.withdraw", "offset": [4657, 4736], "op": "MSTORE", "path": "3"}, "451": {"fn": "SimpleSwap.withdraw", "offset": [4657, 4736], "op": "PUSH1", "path": "3", "value": "0x4"}, "453": {"fn": "SimpleSwap.withdraw", "offset": [4657, 4736], "op": "ADD", "path": "3"}, "454": {"fn": "SimpleSwap.withdraw", "offset": [4657, 4736], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "457": {"fn": "SimpleSwap.withdraw", "offset": [4657, 4736], "op": "SWAP1", "path": "3"}, "458": {"fn": "SimpleSwap.withdraw", "offset": [4657, 4736], "op": "PUSH2", "path": "3", "value": "0x1025"}, "461": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4657, 4736], "op": "JUMP", "path": "3"}, "462": {"fn": "SimpleSwap.withdraw", "offset": [4657, 4736], "op": "JUMPDEST", "path": "3"}, "463": {"fn": "SimpleSwap.withdraw", "offset": [4775, 4785], "op": "CALLER", "path": "3", "statement": 2}, "464": {"fn": "SimpleSwap.withdraw", "offset": [4754, 4786], "op": "PUSH1", "path": "3", "value": "0x0"}, "466": {"fn": "SimpleSwap.withdraw", "offset": [4754, 4786], "op": "SWAP1", "path": "3"}, "467": {"fn": "SimpleSwap.withdraw", "offset": [4754, 4786], "op": "DUP2", "path": "3"}, "468": {"fn": "SimpleSwap.withdraw", "offset": [4754, 4786], "op": "MSTORE", "path": "3"}, "469": {"fn": "SimpleSwap.withdraw", "offset": [4754, 4774], "op": "PUSH1", "path": "3", "value": "0x8"}, "471": {"fn": "SimpleSwap.withdraw", "offset": [4754, 4786], "op": "PUSH1", "path": "3", "value": "0x20"}, "473": {"fn": "SimpleSwap.withdraw", "offset": [4754, 4786], "op": "MSTORE", "path": "3"}, "474": {"fn": "SimpleSwap.withdraw", "offset": [4754, 4786], "op": "PUSH1", "path": "3", "value": "0x40"}, "476": {"fn": "SimpleSwap.withdraw", "offset": [4754, 4786], "op": "SWAP1", "path": "3"}, "477": {"fn": "SimpleSwap.withdraw", "offset": [4754, 4786], "op": "KECCAK256", "path": "3"}, "478": {"fn": "SimpleSwap.withdraw", "offset": [4754, 4786], "op": "SLOAD", "path": "3"}, "479": {"fn": "SimpleSwap.withdraw", "offset": [4754, 4804], "op": "DUP2", "path": "3"}, "480": {"op": "GT"}, "481": {"branch": 53, "fn": "SimpleSwap.withdraw", "offset": [4754, 4804], "op": "ISZERO", "path": "3"}, "482": {"fn": "SimpleSwap.withdraw", "offset": [4746, 4841], "op": "PUSH2", "path": "3", "value": "0x1FD"}, "485": {"branch": 53, "fn": "SimpleSwap.withdraw", "offset": [4746, 4841], "op": "JUMPI", "path": "3"}, "486": {"fn": "SimpleSwap.withdraw", "offset": [4746, 4841], "op": "PUSH1", "path": "3", "value": "0x40"}, "488": {"fn": "SimpleSwap.withdraw", "offset": [4746, 4841], "op": "MLOAD", "path": "3"}, "489": {"op": "PUSH3", "value": "0x461BCD"}, "493": {"op": "PUSH1", "value": "0xE5"}, "495": {"op": "SHL"}, "496": {"fn": "SimpleSwap.withdraw", "offset": [4746, 4841], "op": "DUP2", "path": "3"}, "497": {"fn": "SimpleSwap.withdraw", "offset": [4746, 4841], "op": "MSTORE", "path": "3"}, "498": {"fn": "SimpleSwap.withdraw", "offset": [4746, 4841], "op": "PUSH1", "path": "3", "value": "0x4"}, "500": {"fn": "SimpleSwap.withdraw", "offset": [4746, 4841], "op": "ADD", "path": "3"}, "501": {"fn": "SimpleSwap.withdraw", "offset": [4746, 4841], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "504": {"fn": "SimpleSwap.withdraw", "offset": [4746, 4841], "op": "SWAP1", "path": "3"}, "505": {"fn": "SimpleSwap.withdraw", "offset": [4746, 4841], "op": "PUSH2", "path": "3", "value": "0xE99"}, "508": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4746, 4841], "op": "JUMP", "path": "3"}, "509": {"fn": "SimpleSwap.withdraw", "offset": [4746, 4841], "op": "JUMPDEST", "path": "3"}, "510": {"fn": "SimpleSwap.withdraw", "offset": [4852, 4880], "op": "PUSH1", "path": "3", "value": "0x0"}, "512": {"fn": "SimpleSwap.withdraw", "offset": [4882, 4910], "op": "DUP1", "path": "3"}, "513": {"fn": "SimpleSwap.withdraw", "offset": [4915, 4932], "op": "PUSH2", "path": "3", "value": "0x208"}, "516": {"fn": "SimpleSwap.withdraw", "offset": [4915, 4930], "op": "PUSH2", "path": "3", "value": "0x85E"}, "519": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4915, 4932], "op": "JUMP", "path": "3"}, "520": {"fn": "SimpleSwap.withdraw", "offset": [4915, 4932], "op": "JUMPDEST", "path": "3"}, "521": {"fn": "SimpleSwap.withdraw", "offset": [4851, 4932], "op": "SWAP1", "path": "3"}, "522": {"fn": "SimpleSwap.withdraw", "offset": [4851, 4932], "op": "SWAP3", "path": "3"}, "523": {"op": "POP"}, "524": {"fn": "SimpleSwap.withdraw", "offset": [4851, 4932], "op": "SWAP1", "path": "3"}, "525": {"op": "POP"}, "526": {"fn": "SimpleSwap.withdraw", "offset": [4943, 4971], "op": "PUSH1", "path": "3", "value": "0x0"}, "528": {"fn": "SimpleSwap.withdraw", "offset": [4974, 5027], "op": "PUSH2", "path": "3", "value": "0x226"}, "531": {"fn": "SimpleSwap.withdraw", "offset": [5019, 5026], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "535": {"fn": "SimpleSwap.withdraw", "offset": [4974, 5014], "op": "PUSH2", "path": "3", "value": "0x220"}, "538": {"fn": "SimpleSwap.withdraw", "offset": [4851, 4932], "op": "DUP6", "path": "3"}, "539": {"fn": "SimpleSwap.withdraw", "offset": [4999, 5013], "op": "DUP8", "path": "3"}, "540": {"fn": "SimpleSwap.withdraw", "offset": [4974, 4998], "op": "PUSH2", "path": "3", "value": "0xB91"}, "543": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4974, 5014], "op": "JUMP", "path": "3"}, "544": {"fn": "SimpleSwap.withdraw", "offset": [4974, 5014], "op": "JUMPDEST", "path": "3"}, "545": {"fn": "SimpleSwap.withdraw", "offset": [4974, 5018], "op": "SWAP1", "path": "3"}, "546": {"fn": "SimpleSwap.withdraw", "offset": [4974, 5018], "op": "PUSH2", "path": "3", "value": "0xBA4"}, "549": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4974, 5027], "op": "JUMP", "path": "3"}, "550": {"fn": "SimpleSwap.withdraw", "offset": [4974, 5027], "op": "JUMPDEST", "path": "3"}, "551": {"fn": "SimpleSwap.withdraw", "offset": [4943, 5027], "op": "SWAP1", "path": "3"}, "552": {"op": "POP"}, "553": {"fn": "SimpleSwap.withdraw", "offset": [5037, 5065], "op": "PUSH1", "path": "3", "value": "0x0"}, "555": {"fn": "SimpleSwap.withdraw", "offset": [5068, 5121], "op": "PUSH2", "path": "3", "value": "0x23B"}, "558": {"fn": "SimpleSwap.withdraw", "offset": [5113, 5120], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "562": {"fn": "SimpleSwap.withdraw", "offset": [5068, 5108], "op": "PUSH2", "path": "3", "value": "0x220"}, "565": {"fn": "SimpleSwap.withdraw", "offset": [5068, 5088], "op": "DUP6", "path": "3"}, "566": {"fn": "SimpleSwap.withdraw", "offset": [5093, 5107], "op": "DUP9", "path": "3"}, "567": {"fn": "SimpleSwap.withdraw", "offset": [5068, 5092], "op": "PUSH2", "path": "3", "value": "0xB91"}, "570": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5068, 5108], "op": "JUMP", "path": "3"}, "571": {"fn": "SimpleSwap.withdraw", "offset": [5068, 5121], "op": "JUMPDEST", "path": "3"}, "572": {"fn": "SimpleSwap.withdraw", "offset": [5153, 5171], "op": "PUSH1", "path": "3", "statement": 3, "value": "0x3"}, "574": {"fn": "SimpleSwap.withdraw", "offset": [5153, 5171], "op": "SLOAD", "path": "3"}, "575": {"fn": "SimpleSwap.withdraw", "offset": [5037, 5121], "op": "SWAP1", "path": "3"}, "576": {"fn": "SimpleSwap.withdraw", "offset": [5037, 5121], "op": "SWAP2", "path": "3"}, "577": {"op": "POP"}, "578": {"fn": "SimpleSwap.withdraw", "offset": [5153, 5197], "op": "PUSH2", "path": "3", "value": "0x24B"}, "581": {"fn": "SimpleSwap.withdraw", "offset": [5153, 5197], "op": "SWAP1", "path": "3"}, "582": {"fn": "SimpleSwap.withdraw", "offset": [5176, 5196], "op": "DUP4", "path": "3"}, "583": {"fn": "SimpleSwap.withdraw", "offset": [5153, 5175], "op": "PUSH2", "path": "3", "value": "0xBB0"}, "586": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5153, 5197], "op": "JUMP", "path": "3"}, "587": {"fn": "SimpleSwap.withdraw", "offset": [5153, 5197], "op": "JUMPDEST", "path": "3"}, "588": {"fn": "SimpleSwap.withdraw", "offset": [5132, 5150], "op": "PUSH1", "path": "3", "value": "0x3"}, "590": {"fn": "SimpleSwap.withdraw", "offset": [5132, 5197], "op": "SSTORE", "path": "3"}, "591": {"fn": "SimpleSwap.withdraw", "offset": [5228, 5246], "op": "PUSH1", "path": "3", "statement": 4, "value": "0x4"}, "593": {"fn": "SimpleSwap.withdraw", "offset": [5228, 5246], "op": "SLOAD", "path": "3"}, "594": {"fn": "SimpleSwap.withdraw", "offset": [5228, 5272], "op": "PUSH2", "path": "3", "value": "0x25B"}, "597": {"fn": "SimpleSwap.withdraw", "offset": [5228, 5272], "op": "SWAP1", "path": "3"}, "598": {"fn": "SimpleSwap.withdraw", "offset": [5251, 5271], "op": "DUP3", "path": "3"}, "599": {"fn": "SimpleSwap.withdraw", "offset": [5228, 5250], "op": "PUSH2", "path": "3", "value": "0xBB0"}, "602": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5228, 5272], "op": "JUMP", "path": "3"}, "603": {"fn": "SimpleSwap.withdraw", "offset": [5228, 5272], "op": "JUMPDEST", "path": "3"}, "604": {"fn": "SimpleSwap.withdraw", "offset": [5207, 5225], "op": "PUSH1", "path": "3", "value": "0x4"}, "606": {"fn": "SimpleSwap.withdraw", "offset": [5207, 5272], "op": "SSTORE", "path": "3"}, "607": {"fn": "SimpleSwap.withdraw", "offset": [5299, 5312], "op": "PUSH1", "path": "3", "statement": 5, "value": "0x5"}, "609": {"fn": "SimpleSwap.withdraw", "offset": [5299, 5312], "op": "SLOAD", "path": "3"}, "610": {"fn": "SimpleSwap.withdraw", "offset": [5299, 5332], "op": "PUSH2", "path": "3", "value": "0x26B"}, "613": {"fn": "SimpleSwap.withdraw", "offset": [5299, 5332], "op": "SWAP1", "path": "3"}, "614": {"fn": "SimpleSwap.withdraw", "offset": [5317, 5331], "op": "DUP7", "path": "3"}, "615": {"fn": "SimpleSwap.withdraw", "offset": [5299, 5316], "op": "PUSH2", "path": "3", "value": "0xBB0"}, "618": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5299, 5332], "op": "JUMP", "path": "3"}, "619": {"fn": "SimpleSwap.withdraw", "offset": [5299, 5332], "op": "JUMPDEST", "path": "3"}, "620": {"fn": "SimpleSwap.withdraw", "offset": [5283, 5296], "op": "PUSH1", "path": "3", "value": "0x5"}, "622": {"fn": "SimpleSwap.withdraw", "offset": [5283, 5332], "op": "SSTORE", "path": "3"}, "623": {"fn": "SimpleSwap.withdraw", "offset": [5399, 5409], "op": "CALLER", "path": "3", "statement": 6}, "624": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5410], "op": "PUSH1", "path": "3", "value": "0x0"}, "626": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5410], "op": "SWAP1", "path": "3"}, "627": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5410], "op": "DUP2", "path": "3"}, "628": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5410], "op": "MSTORE", "path": "3"}, "629": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5398], "op": "PUSH1", "path": "3", "value": "0x8"}, "631": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5410], "op": "PUSH1", "path": "3", "value": "0x20"}, "633": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5410], "op": "MSTORE", "path": "3"}, "634": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5410], "op": "PUSH1", "path": "3", "value": "0x40"}, "636": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5410], "op": "SWAP1", "path": "3"}, "637": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5410], "op": "KECCAK256", "path": "3"}, "638": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5410], "op": "SLOAD", "path": "3"}, "639": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5430], "op": "PUSH2", "path": "3", "value": "0x288"}, "642": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5430], "op": "SWAP1", "path": "3"}, "643": {"fn": "SimpleSwap.withdraw", "offset": [5415, 5429], "op": "DUP7", "path": "3"}, "644": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5414], "op": "PUSH2", "path": "3", "value": "0xBB0"}, "647": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5378, 5430], "op": "JUMP", "path": "3"}, "648": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5430], "op": "JUMPDEST", "path": "3"}, "649": {"fn": "SimpleSwap.withdraw", "offset": [5364, 5374], "op": "CALLER", "path": "3"}, "650": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5375], "op": "PUSH1", "path": "3", "value": "0x0"}, "652": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5375], "op": "DUP2", "path": "3"}, "653": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5375], "op": "DUP2", "path": "3"}, "654": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5375], "op": "MSTORE", "path": "3"}, "655": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5363], "op": "PUSH1", "path": "3", "value": "0x8"}, "657": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5375], "op": "PUSH1", "path": "3", "value": "0x20"}, "659": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5375], "op": "MSTORE", "path": "3"}, "660": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5375], "op": "PUSH1", "path": "3", "value": "0x40"}, "662": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5375], "op": "SWAP1", "path": "3"}, "663": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5375], "op": "DUP2", "path": "3"}, "664": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5375], "op": "SWAP1", "path": "3"}, "665": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5375], "op": "KECCAK256", "path": "3"}, "666": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5430], "op": "SWAP3", "path": "3"}, "667": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5430], "op": "SWAP1", "path": "3"}, "668": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5430], "op": "SWAP3", "path": "3"}, "669": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5430], "op": "SSTORE", "path": "3"}, "670": {"fn": "SimpleSwap.withdraw", "offset": [5462, 5473], "op": "PUSH1", "path": "3", "value": "0x1"}, "672": {"fn": "SimpleSwap.withdraw", "offset": [5462, 5473], "op": "SLOAD", "path": "3"}, "673": {"fn": "SimpleSwap.withdraw", "offset": [5505, 5516], "op": "PUSH1", "path": "3", "value": "0x2"}, "675": {"fn": "SimpleSwap.withdraw", "offset": [5505, 5516], "op": "SLOAD", "path": "3"}, "676": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "SWAP3", "path": "3", "statement": 7}, "677": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "MLOAD", "path": "3"}, "678": {"op": "PUSH4", "value": "0xA9059CBB"}, "683": {"op": "PUSH1", "value": "0xE0"}, "685": {"op": "SHL"}, "686": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP2", "path": "3"}, "687": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "MSTORE", "path": "3"}, "688": {"op": "PUSH1", "value": "0x1"}, "690": {"op": "PUSH1", "value": "0x1"}, "692": {"op": "PUSH1", "value": "0xA0"}, "694": {"op": "SHL"}, "695": {"op": "SUB"}, "696": {"fn": "SimpleSwap.withdraw", "offset": [5462, 5473], "op": "SWAP2", "path": "3"}, "697": {"fn": "SimpleSwap.withdraw", "offset": [5462, 5473], "op": "DUP3", "path": "3"}, "698": {"fn": "SimpleSwap.withdraw", "offset": [5462, 5473], "op": "AND", "path": "3"}, "699": {"fn": "SimpleSwap.withdraw", "offset": [5462, 5473], "op": "SWAP4", "path": "3"}, "700": {"fn": "SimpleSwap.withdraw", "offset": [5505, 5516], "op": "SWAP1", "path": "3"}, "701": {"fn": "SimpleSwap.withdraw", "offset": [5505, 5516], "op": "SWAP2", "path": "3"}, "702": {"fn": "SimpleSwap.withdraw", "offset": [5505, 5516], "op": "AND", "path": "3"}, "703": {"fn": "SimpleSwap.withdraw", "offset": [5505, 5516], "op": "SWAP2", "path": "3"}, "704": {"fn": "SimpleSwap.withdraw", "offset": [5462, 5473], "op": "DUP4", "path": "3"}, "705": {"fn": "SimpleSwap.withdraw", "offset": [5462, 5473], "op": "SWAP2", "path": "3"}, "706": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5548], "op": "PUSH4", "path": "3", "value": "0xA9059CBB"}, "711": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5548], "op": "SWAP2", "path": "3"}, "712": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH2", "path": "3", "value": "0x2D5"}, "715": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "SWAP2", "path": "3"}, "716": {"fn": "SimpleSwap.withdraw", "offset": [5561, 5581], "op": "DUP9", "path": "3"}, "717": {"fn": "SimpleSwap.withdraw", "offset": [5561, 5581], "op": "SWAP1", "path": "3"}, "718": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH1", "path": "3", "value": "0x4"}, "720": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "ADD", "path": "3"}, "721": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH2", "path": "3", "value": "0xDE6"}, "724": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5535, 5582], "op": "JUMP", "path": "3"}, "725": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "JUMPDEST", "path": "3"}, "726": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH1", "path": "3", "value": "0x20"}, "728": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH1", "path": "3", "value": "0x40"}, "730": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "MLOAD", "path": "3"}, "731": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP1", "path": "3"}, "732": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP4", "path": "3"}, "733": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "SUB", "path": "3"}, "734": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP2", "path": "3"}, "735": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH1", "path": "3", "value": "0x0"}, "737": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP8", "path": "3"}, "738": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP1", "path": "3"}, "739": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "EXTCODESIZE", "path": "3"}, "740": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "ISZERO", "path": "3"}, "741": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP1", "path": "3"}, "742": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "ISZERO", "path": "3"}, "743": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH2", "path": "3", "value": "0x2EF"}, "746": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "JUMPI", "path": "3"}, "747": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH1", "path": "3", "value": "0x0"}, "749": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP1", "path": "3"}, "750": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "REVERT", "path": "3"}, "751": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "JUMPDEST", "path": "3"}, "752": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "POP", "path": "3"}, "753": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "GAS", "path": "3"}, "754": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "CALL", "path": "3"}, "755": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "ISZERO", "path": "3"}, "756": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP1", "path": "3"}, "757": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "ISZERO", "path": "3"}, "758": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH2", "path": "3", "value": "0x303"}, "761": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "JUMPI", "path": "3"}, "762": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "RETURNDATASIZE", "path": "3"}, "763": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH1", "path": "3", "value": "0x0"}, "765": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP1", "path": "3"}, "766": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "RETURNDATACOPY", "path": "3"}, "767": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "RETURNDATASIZE", "path": "3"}, "768": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH1", "path": "3", "value": "0x0"}, "770": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "REVERT", "path": "3"}, "771": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "JUMPDEST", "path": "3"}, "772": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "POP", "path": "3"}, "773": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "POP", "path": "3"}, "774": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "POP", "path": "3"}, "775": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "POP", "path": "3"}, "776": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH1", "path": "3", "value": "0x40"}, "778": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "MLOAD", "path": "3"}, "779": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "RETURNDATASIZE", "path": "3"}, "780": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH1", "path": "3", "value": "0x1F"}, "782": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "NOT", "path": "3"}, "783": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH1", "path": "3", "value": "0x1F"}, "785": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP3", "path": "3"}, "786": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "ADD", "path": "3"}, "787": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "AND", "path": "3"}, "788": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP3", "path": "3"}, "789": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "ADD", "path": "3"}, "790": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP1", "path": "3"}, "791": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH1", "path": "3", "value": "0x40"}, "793": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "MSTORE", "path": "3"}, "794": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "POP", "path": "3"}, "795": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "DUP2", "path": "3"}, "796": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "ADD", "path": "3"}, "797": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "SWAP1", "path": "3"}, "798": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH2", "path": "3", "value": "0x327"}, "801": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "SWAP2", "path": "3"}, "802": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "SWAP1", "path": "3"}, "803": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "PUSH2", "path": "3", "value": "0xD1A"}, "806": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5535, 5582], "op": "JUMP", "path": "3"}, "807": {"fn": "SimpleSwap.withdraw", "offset": [5535, 5582], "op": "JUMPDEST", "path": "3"}, "808": {"fn": "SimpleSwap.withdraw", "offset": [5528, 5583], "op": "PUSH2", "path": "3", "value": "0x341"}, "811": {"fn": "SimpleSwap.withdraw", "offset": [5528, 5583], "op": "JUMPI", "path": "3"}, "812": {"op": "PUSH4", "value": "0x4E487B71"}, "817": {"op": "PUSH1", "value": "0xE0"}, "819": {"op": "SHL"}, "820": {"fn": "SimpleSwap.withdraw", "offset": [5528, 5583], "op": "PUSH1", "path": "3", "value": "0x0"}, "822": {"fn": "SimpleSwap.withdraw", "offset": [5528, 5583], "op": "MSTORE", "path": "3"}, "823": {"fn": "SimpleSwap.withdraw", "offset": [5528, 5583], "op": "PUSH1", "path": "3", "value": "0x1"}, "825": {"fn": "SimpleSwap.withdraw", "offset": [5528, 5583], "op": "PUSH1", "path": "3", "value": "0x4"}, "827": {"fn": "SimpleSwap.withdraw", "offset": [5528, 5583], "op": "MSTORE", "path": "3"}, "828": {"fn": "SimpleSwap.withdraw", "offset": [5528, 5583], "op": "PUSH1", "path": "3", "value": "0x24"}, "830": {"fn": "SimpleSwap.withdraw", "offset": [5528, 5583], "op": "PUSH1", "path": "3", "value": "0x0"}, "832": {"fn": "SimpleSwap.withdraw", "offset": [5528, 5583], "op": "REVERT", "path": "3"}, "833": {"fn": "SimpleSwap.withdraw", "offset": [5528, 5583], "op": "JUMPDEST", "path": "3"}, "834": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH1", "path": "3", "statement": 8, "value": "0x40"}, "836": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "MLOAD", "path": "3"}, "837": {"op": "PUSH4", "value": "0xA9059CBB"}, "842": {"op": "PUSH1", "value": "0xE0"}, "844": {"op": "SHL"}, "845": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP2", "path": "3"}, "846": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "MSTORE", "path": "3"}, "847": {"op": "PUSH1", "value": "0x1"}, "849": {"op": "PUSH1", "value": "0x1"}, "851": {"op": "PUSH1", "value": "0xA0"}, "853": {"op": "SHL"}, "854": {"op": "SUB"}, "855": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5613], "op": "DUP3", "path": "3"}, "856": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5613], "op": "AND", "path": "3"}, "857": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5613], "op": "SWAP1", "path": "3"}, "858": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5613], "op": "PUSH4", "path": "3", "value": "0xA9059CBB"}, "863": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5613], "op": "SWAP1", "path": "3"}, "864": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH2", "path": "3", "value": "0x36F"}, "867": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "SWAP1", "path": "3"}, "868": {"fn": "SimpleSwap.withdraw", "offset": [5614, 5624], "op": "CALLER", "path": "3"}, "869": {"fn": "SimpleSwap.withdraw", "offset": [5614, 5624], "op": "SWAP1", "path": "3"}, "870": {"fn": "SimpleSwap.withdraw", "offset": [5626, 5646], "op": "DUP8", "path": "3"}, "871": {"fn": "SimpleSwap.withdraw", "offset": [5626, 5646], "op": "SWAP1", "path": "3"}, "872": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH1", "path": "3", "value": "0x4"}, "874": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "ADD", "path": "3"}, "875": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH2", "path": "3", "value": "0xDE6"}, "878": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5600, 5647], "op": "JUMP", "path": "3"}, "879": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "JUMPDEST", "path": "3"}, "880": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH1", "path": "3", "value": "0x20"}, "882": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH1", "path": "3", "value": "0x40"}, "884": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "MLOAD", "path": "3"}, "885": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP1", "path": "3"}, "886": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP4", "path": "3"}, "887": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "SUB", "path": "3"}, "888": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP2", "path": "3"}, "889": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH1", "path": "3", "value": "0x0"}, "891": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP8", "path": "3"}, "892": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP1", "path": "3"}, "893": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "EXTCODESIZE", "path": "3"}, "894": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "ISZERO", "path": "3"}, "895": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP1", "path": "3"}, "896": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "ISZERO", "path": "3"}, "897": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH2", "path": "3", "value": "0x389"}, "900": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "JUMPI", "path": "3"}, "901": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH1", "path": "3", "value": "0x0"}, "903": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP1", "path": "3"}, "904": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "REVERT", "path": "3"}, "905": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "JUMPDEST", "path": "3"}, "906": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "POP", "path": "3"}, "907": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "GAS", "path": "3"}, "908": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "CALL", "path": "3"}, "909": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "ISZERO", "path": "3"}, "910": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP1", "path": "3"}, "911": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "ISZERO", "path": "3"}, "912": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH2", "path": "3", "value": "0x39D"}, "915": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "JUMPI", "path": "3"}, "916": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "RETURNDATASIZE", "path": "3"}, "917": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH1", "path": "3", "value": "0x0"}, "919": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP1", "path": "3"}, "920": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "RETURNDATACOPY", "path": "3"}, "921": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "RETURNDATASIZE", "path": "3"}, "922": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH1", "path": "3", "value": "0x0"}, "924": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "REVERT", "path": "3"}, "925": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "JUMPDEST", "path": "3"}, "926": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "POP", "path": "3"}, "927": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "POP", "path": "3"}, "928": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "POP", "path": "3"}, "929": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "POP", "path": "3"}, "930": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH1", "path": "3", "value": "0x40"}, "932": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "MLOAD", "path": "3"}, "933": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "RETURNDATASIZE", "path": "3"}, "934": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH1", "path": "3", "value": "0x1F"}, "936": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "NOT", "path": "3"}, "937": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH1", "path": "3", "value": "0x1F"}, "939": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP3", "path": "3"}, "940": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "ADD", "path": "3"}, "941": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "AND", "path": "3"}, "942": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP3", "path": "3"}, "943": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "ADD", "path": "3"}, "944": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP1", "path": "3"}, "945": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH1", "path": "3", "value": "0x40"}, "947": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "MSTORE", "path": "3"}, "948": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "POP", "path": "3"}, "949": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "DUP2", "path": "3"}, "950": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "ADD", "path": "3"}, "951": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "SWAP1", "path": "3"}, "952": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH2", "path": "3", "value": "0x3C1"}, "955": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "SWAP2", "path": "3"}, "956": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "SWAP1", "path": "3"}, "957": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "PUSH2", "path": "3", "value": "0xD1A"}, "960": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5600, 5647], "op": "JUMP", "path": "3"}, "961": {"fn": "SimpleSwap.withdraw", "offset": [5600, 5647], "op": "JUMPDEST", "path": "3"}, "962": {"fn": "SimpleSwap.withdraw", "offset": [5593, 5648], "op": "PUSH2", "path": "3", "value": "0x3DB"}, "965": {"fn": "SimpleSwap.withdraw", "offset": [5593, 5648], "op": "JUMPI", "path": "3"}, "966": {"op": "PUSH4", "value": "0x4E487B71"}, "971": {"op": "PUSH1", "value": "0xE0"}, "973": {"op": "SHL"}, "974": {"fn": "SimpleSwap.withdraw", "offset": [5593, 5648], "op": "PUSH1", "path": "3", "value": "0x0"}, "976": {"fn": "SimpleSwap.withdraw", "offset": [5593, 5648], "op": "MSTORE", "path": "3"}, "977": {"fn": "SimpleSwap.withdraw", "offset": [5593, 5648], "op": "PUSH1", "path": "3", "value": "0x1"}, "979": {"fn": "SimpleSwap.withdraw", "offset": [5593, 5648], "op": "PUSH1", "path": "3", "value": "0x4"}, "981": {"fn": "SimpleSwap.withdraw", "offset": [5593, 5648], "op": "MSTORE", "path": "3"}, "982": {"fn": "SimpleSwap.withdraw", "offset": [5593, 5648], "op": "PUSH1", "path": "3", "value": "0x24"}, "984": {"fn": "SimpleSwap.withdraw", "offset": [5593, 5648], "op": "PUSH1", "path": "3", "value": "0x0"}, "986": {"fn": "SimpleSwap.withdraw", "offset": [5593, 5648], "op": "REVERT", "path": "3"}, "987": {"fn": "SimpleSwap.withdraw", "offset": [5593, 5648], "op": "JUMPDEST", "path": "3"}, "988": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "POP", "path": "3"}, "989": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "POP", "path": "3"}, "990": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "POP", "path": "3"}, "991": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "POP", "path": "3"}, "992": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "POP", "path": "3"}, "993": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "POP", "path": "3"}, "994": {"fn": "SimpleSwap.withdraw", "offset": [4521, 5655], "op": "POP", "path": "3"}, "995": {"fn": "SimpleSwap.withdraw", "jump": "o", "offset": [4521, 5655], "op": "JUMP", "path": "3"}, "996": {"fn": "SimpleSwap.supply", "offset": [3377, 4515], "op": "JUMPDEST", "path": "3"}, "997": {"fn": "SimpleSwap.supply", "offset": [3442, 3459], "op": "PUSH1", "path": "3", "statement": 9, "value": "0x7"}, "999": {"fn": "SimpleSwap.supply", "offset": [3442, 3459], "op": "SLOAD", "path": "3"}, "1000": {"fn": "SimpleSwap.supply", "offset": [3442, 3459], "op": "PUSH1", "path": "3", "value": "0xFF"}, "1002": {"branch": 54, "fn": "SimpleSwap.supply", "offset": [3442, 3459], "op": "AND", "path": "3"}, "1003": {"fn": "SimpleSwap.supply", "offset": [3434, 3501], "op": "PUSH2", "path": "3", "value": "0x406"}, "1006": {"branch": 54, "fn": "SimpleSwap.supply", "offset": [3434, 3501], "op": "JUMPI", "path": "3"}, "1007": {"fn": "SimpleSwap.supply", "offset": [3434, 3501], "op": "PUSH1", "path": "3", "value": "0x40"}, "1009": {"fn": "SimpleSwap.supply", "offset": [3434, 3501], "op": "MLOAD", "path": "3"}, "1010": {"op": "PUSH3", "value": "0x461BCD"}, "1014": {"op": "PUSH1", "value": "0xE5"}, "1016": {"op": "SHL"}, "1017": {"fn": "SimpleSwap.supply", "offset": [3434, 3501], "op": "DUP2", "path": "3"}, "1018": {"fn": "SimpleSwap.supply", "offset": [3434, 3501], "op": "MSTORE", "path": "3"}, "1019": {"fn": "SimpleSwap.supply", "offset": [3434, 3501], "op": "PUSH1", "path": "3", "value": "0x4"}, "1021": {"fn": "SimpleSwap.supply", "offset": [3434, 3501], "op": "ADD", "path": "3"}, "1022": {"fn": "SimpleSwap.supply", "offset": [3434, 3501], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1025": {"fn": "SimpleSwap.supply", "offset": [3434, 3501], "op": "SWAP1", "path": "3"}, "1026": {"fn": "SimpleSwap.supply", "offset": [3434, 3501], "op": "PUSH2", "path": "3", "value": "0xF4C"}, "1029": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3434, 3501], "op": "JUMP", "path": "3"}, "1030": {"fn": "SimpleSwap.supply", "offset": [3434, 3501], "op": "JUMPDEST", "path": "3"}, "1031": {"fn": "SimpleSwap.supply", "offset": [3536, 3537], "op": "PUSH1", "path": "3", "statement": 10, "value": "0x0"}, "1033": {"fn": "SimpleSwap.supply", "offset": [3519, 3533], "op": "DUP2", "path": "3"}, "1034": {"branch": 55, "fn": "SimpleSwap.supply", "offset": [3519, 3537], "op": "GT", "path": "3"}, "1035": {"fn": "SimpleSwap.supply", "offset": [3511, 3589], "op": "PUSH2", "path": "3", "value": "0x426"}, "1038": {"branch": 55, "fn": "SimpleSwap.supply", "offset": [3511, 3589], "op": "JUMPI", "path": "3"}, "1039": {"fn": "SimpleSwap.supply", "offset": [3511, 3589], "op": "PUSH1", "path": "3", "value": "0x40"}, "1041": {"fn": "SimpleSwap.supply", "offset": [3511, 3589], "op": "MLOAD", "path": "3"}, "1042": {"op": "PUSH3", "value": "0x461BCD"}, "1046": {"op": "PUSH1", "value": "0xE5"}, "1048": {"op": "SHL"}, "1049": {"fn": "SimpleSwap.supply", "offset": [3511, 3589], "op": "DUP2", "path": "3"}, "1050": {"fn": "SimpleSwap.supply", "offset": [3511, 3589], "op": "MSTORE", "path": "3"}, "1051": {"fn": "SimpleSwap.supply", "offset": [3511, 3589], "op": "PUSH1", "path": "3", "value": "0x4"}, "1053": {"fn": "SimpleSwap.supply", "offset": [3511, 3589], "op": "ADD", "path": "3"}, "1054": {"fn": "SimpleSwap.supply", "offset": [3511, 3589], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1057": {"fn": "SimpleSwap.supply", "offset": [3511, 3589], "op": "SWAP1", "path": "3"}, "1058": {"fn": "SimpleSwap.supply", "offset": [3511, 3589], "op": "PUSH2", "path": "3", "value": "0xEFD"}, "1061": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3511, 3589], "op": "JUMP", "path": "3"}, "1062": {"fn": "SimpleSwap.supply", "offset": [3511, 3589], "op": "JUMPDEST", "path": "3"}, "1063": {"fn": "SimpleSwap.supply", "offset": [3600, 3628], "op": "PUSH1", "path": "3", "value": "0x0"}, "1065": {"fn": "SimpleSwap.supply", "offset": [3630, 3658], "op": "DUP1", "path": "3"}, "1066": {"fn": "SimpleSwap.supply", "offset": [3662, 3679], "op": "PUSH2", "path": "3", "value": "0x431"}, "1069": {"fn": "SimpleSwap.supply", "offset": [3662, 3677], "op": "PUSH2", "path": "3", "value": "0x85E"}, "1072": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3662, 3679], "op": "JUMP", "path": "3"}, "1073": {"fn": "SimpleSwap.supply", "offset": [3662, 3679], "op": "JUMPDEST", "path": "3"}, "1074": {"fn": "SimpleSwap.supply", "offset": [3711, 3722], "op": "PUSH1", "path": "3", "value": "0x1"}, "1076": {"fn": "SimpleSwap.supply", "offset": [3711, 3722], "op": "SLOAD", "path": "3"}, "1077": {"fn": "SimpleSwap.supply", "offset": [3754, 3765], "op": "PUSH1", "path": "3", "value": "0x2"}, "1079": {"fn": "SimpleSwap.supply", "offset": [3754, 3765], "op": "SLOAD", "path": "3"}, "1080": {"fn": "SimpleSwap.supply", "offset": [3599, 3679], "op": "SWAP3", "path": "3"}, "1081": {"fn": "SimpleSwap.supply", "offset": [3599, 3679], "op": "SWAP5", "path": "3"}, "1082": {"op": "POP"}, "1083": {"fn": "SimpleSwap.supply", "offset": [3599, 3679], "op": "SWAP1", "path": "3"}, "1084": {"fn": "SimpleSwap.supply", "offset": [3599, 3679], "op": "SWAP3", "path": "3"}, "1085": {"op": "POP"}, "1086": {"op": "PUSH1", "value": "0x1"}, "1088": {"op": "PUSH1", "value": "0x1"}, "1090": {"op": "PUSH1", "value": "0xA0"}, "1092": {"op": "SHL"}, "1093": {"op": "SUB"}, "1094": {"fn": "SimpleSwap.supply", "offset": [3711, 3722], "op": "SWAP1", "path": "3"}, "1095": {"fn": "SimpleSwap.supply", "offset": [3711, 3722], "op": "DUP2", "path": "3"}, "1096": {"fn": "SimpleSwap.supply", "offset": [3711, 3722], "op": "AND", "path": "3"}, "1097": {"fn": "SimpleSwap.supply", "offset": [3711, 3722], "op": "SWAP2", "path": "3"}, "1098": {"fn": "SimpleSwap.supply", "offset": [3754, 3765], "op": "AND", "path": "3"}, "1099": {"fn": "SimpleSwap.supply", "offset": [3690, 3701], "op": "PUSH1", "path": "3", "value": "0x0"}, "1101": {"fn": "SimpleSwap.supply", "offset": [3806, 3859], "op": "PUSH2", "path": "3", "value": "0x45D"}, "1104": {"fn": "SimpleSwap.supply", "offset": [3851, 3858], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "1108": {"fn": "SimpleSwap.supply", "offset": [3806, 3846], "op": "PUSH2", "path": "3", "value": "0x220"}, "1111": {"fn": "SimpleSwap.supply", "offset": [3599, 3679], "op": "DUP8", "path": "3"}, "1112": {"fn": "SimpleSwap.supply", "offset": [3831, 3845], "op": "DUP10", "path": "3"}, "1113": {"fn": "SimpleSwap.supply", "offset": [3806, 3830], "op": "PUSH2", "path": "3", "value": "0xB91"}, "1116": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3806, 3846], "op": "JUMP", "path": "3"}, "1117": {"fn": "SimpleSwap.supply", "offset": [3806, 3859], "op": "JUMPDEST", "path": "3"}, "1118": {"fn": "SimpleSwap.supply", "offset": [3777, 3859], "op": "SWAP1", "path": "3"}, "1119": {"op": "POP"}, "1120": {"fn": "SimpleSwap.supply", "offset": [3884, 3910], "op": "PUSH1", "path": "3", "value": "0x0"}, "1122": {"fn": "SimpleSwap.supply", "offset": [3913, 3966], "op": "PUSH2", "path": "3", "value": "0x472"}, "1125": {"fn": "SimpleSwap.supply", "offset": [3958, 3965], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "1129": {"fn": "SimpleSwap.supply", "offset": [3913, 3953], "op": "PUSH2", "path": "3", "value": "0x220"}, "1132": {"fn": "SimpleSwap.supply", "offset": [3913, 3933], "op": "DUP8", "path": "3"}, "1133": {"fn": "SimpleSwap.supply", "offset": [3938, 3952], "op": "DUP11", "path": "3"}, "1134": {"fn": "SimpleSwap.supply", "offset": [3913, 3937], "op": "PUSH2", "path": "3", "value": "0xB91"}, "1137": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3913, 3953], "op": "JUMP", "path": "3"}, "1138": {"fn": "SimpleSwap.supply", "offset": [3913, 3966], "op": "JUMPDEST", "path": "3"}, "1139": {"fn": "SimpleSwap.supply", "offset": [4012, 4030], "op": "PUSH1", "path": "3", "statement": 11, "value": "0x3"}, "1141": {"fn": "SimpleSwap.supply", "offset": [4012, 4030], "op": "SLOAD", "path": "3"}, "1142": {"fn": "SimpleSwap.supply", "offset": [3884, 3966], "op": "SWAP1", "path": "3"}, "1143": {"fn": "SimpleSwap.supply", "offset": [3884, 3966], "op": "SWAP2", "path": "3"}, "1144": {"op": "POP"}, "1145": {"fn": "SimpleSwap.supply", "offset": [4012, 4054], "op": "PUSH2", "path": "3", "value": "0x482"}, "1148": {"fn": "SimpleSwap.supply", "offset": [4012, 4054], "op": "SWAP1", "path": "3"}, "1149": {"fn": "SimpleSwap.supply", "offset": [4035, 4053], "op": "DUP4", "path": "3"}, "1150": {"fn": "SimpleSwap.supply", "offset": [4012, 4034], "op": "PUSH2", "path": "3", "value": "0xBBC"}, "1153": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4012, 4054], "op": "JUMP", "path": "3"}, "1154": {"fn": "SimpleSwap.supply", "offset": [4012, 4054], "op": "JUMPDEST", "path": "3"}, "1155": {"fn": "SimpleSwap.supply", "offset": [3991, 4009], "op": "PUSH1", "path": "3", "value": "0x3"}, "1157": {"fn": "SimpleSwap.supply", "offset": [3991, 4054], "op": "SSTORE", "path": "3"}, "1158": {"fn": "SimpleSwap.supply", "offset": [4085, 4103], "op": "PUSH1", "path": "3", "statement": 12, "value": "0x4"}, "1160": {"fn": "SimpleSwap.supply", "offset": [4085, 4103], "op": "SLOAD", "path": "3"}, "1161": {"fn": "SimpleSwap.supply", "offset": [4085, 4127], "op": "PUSH2", "path": "3", "value": "0x492"}, "1164": {"fn": "SimpleSwap.supply", "offset": [4085, 4127], "op": "SWAP1", "path": "3"}, "1165": {"fn": "SimpleSwap.supply", "offset": [4108, 4126], "op": "DUP3", "path": "3"}, "1166": {"fn": "SimpleSwap.supply", "offset": [4085, 4107], "op": "PUSH2", "path": "3", "value": "0xBBC"}, "1169": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4085, 4127], "op": "JUMP", "path": "3"}, "1170": {"fn": "SimpleSwap.supply", "offset": [4085, 4127], "op": "JUMPDEST", "path": "3"}, "1171": {"fn": "SimpleSwap.supply", "offset": [4064, 4082], "op": "PUSH1", "path": "3", "value": "0x4"}, "1173": {"fn": "SimpleSwap.supply", "offset": [4064, 4127], "op": "SSTORE", "path": "3"}, "1174": {"fn": "SimpleSwap.supply", "offset": [4154, 4167], "op": "PUSH1", "path": "3", "statement": 13, "value": "0x5"}, "1176": {"fn": "SimpleSwap.supply", "offset": [4154, 4167], "op": "SLOAD", "path": "3"}, "1177": {"fn": "SimpleSwap.supply", "offset": [4154, 4187], "op": "PUSH2", "path": "3", "value": "0x4A2"}, "1180": {"fn": "SimpleSwap.supply", "offset": [4154, 4187], "op": "SWAP1", "path": "3"}, "1181": {"fn": "SimpleSwap.supply", "offset": [4172, 4186], "op": "DUP9", "path": "3"}, "1182": {"fn": "SimpleSwap.supply", "offset": [4154, 4171], "op": "PUSH2", "path": "3", "value": "0xBBC"}, "1185": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4154, 4187], "op": "JUMP", "path": "3"}, "1186": {"fn": "SimpleSwap.supply", "offset": [4154, 4187], "op": "JUMPDEST", "path": "3"}, "1187": {"fn": "SimpleSwap.supply", "offset": [4138, 4151], "op": "PUSH1", "path": "3", "value": "0x5"}, "1189": {"fn": "SimpleSwap.supply", "offset": [4138, 4187], "op": "SSTORE", "path": "3"}, "1190": {"fn": "SimpleSwap.supply", "offset": [4254, 4264], "op": "CALLER", "path": "3", "statement": 14}, "1191": {"fn": "SimpleSwap.supply", "offset": [4233, 4265], "op": "PUSH1", "path": "3", "value": "0x0"}, "1193": {"fn": "SimpleSwap.supply", "offset": [4233, 4265], "op": "SWAP1", "path": "3"}, "1194": {"fn": "SimpleSwap.supply", "offset": [4233, 4265], "op": "DUP2", "path": "3"}, "1195": {"fn": "SimpleSwap.supply", "offset": [4233, 4265], "op": "MSTORE", "path": "3"}, "1196": {"fn": "SimpleSwap.supply", "offset": [4233, 4253], "op": "PUSH1", "path": "3", "value": "0x8"}, "1198": {"fn": "SimpleSwap.supply", "offset": [4233, 4265], "op": "PUSH1", "path": "3", "value": "0x20"}, "1200": {"fn": "SimpleSwap.supply", "offset": [4233, 4265], "op": "MSTORE", "path": "3"}, "1201": {"fn": "SimpleSwap.supply", "offset": [4233, 4265], "op": "PUSH1", "path": "3", "value": "0x40"}, "1203": {"fn": "SimpleSwap.supply", "offset": [4233, 4265], "op": "SWAP1", "path": "3"}, "1204": {"fn": "SimpleSwap.supply", "offset": [4233, 4265], "op": "KECCAK256", "path": "3"}, "1205": {"fn": "SimpleSwap.supply", "offset": [4233, 4265], "op": "SLOAD", "path": "3"}, "1206": {"fn": "SimpleSwap.supply", "offset": [4233, 4285], "op": "PUSH2", "path": "3", "value": "0x4BF"}, "1209": {"fn": "SimpleSwap.supply", "offset": [4233, 4285], "op": "SWAP1", "path": "3"}, "1210": {"fn": "SimpleSwap.supply", "offset": [4270, 4284], "op": "DUP9", "path": "3"}, "1211": {"fn": "SimpleSwap.supply", "offset": [4233, 4269], "op": "PUSH2", "path": "3", "value": "0xBBC"}, "1214": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4233, 4285], "op": "JUMP", "path": "3"}, "1215": {"fn": "SimpleSwap.supply", "offset": [4233, 4285], "op": "JUMPDEST", "path": "3"}, "1216": {"fn": "SimpleSwap.supply", "offset": [4219, 4229], "op": "CALLER", "path": "3"}, "1217": {"fn": "SimpleSwap.supply", "offset": [4198, 4230], "op": "PUSH1", "path": "3", "value": "0x0"}, "1219": {"fn": "SimpleSwap.supply", "offset": [4198, 4230], "op": "DUP2", "path": "3"}, "1220": {"fn": "SimpleSwap.supply", "offset": [4198, 4230], "op": "DUP2", "path": "3"}, "1221": {"fn": "SimpleSwap.supply", "offset": [4198, 4230], "op": "MSTORE", "path": "3"}, "1222": {"fn": "SimpleSwap.supply", "offset": [4198, 4218], "op": "PUSH1", "path": "3", "value": "0x8"}, "1224": {"fn": "SimpleSwap.supply", "offset": [4198, 4230], "op": "PUSH1", "path": "3", "value": "0x20"}, "1226": {"fn": "SimpleSwap.supply", "offset": [4198, 4230], "op": "MSTORE", "path": "3"}, "1227": {"fn": "SimpleSwap.supply", "offset": [4198, 4230], "op": "PUSH1", "path": "3", "value": "0x40"}, "1229": {"fn": "SimpleSwap.supply", "offset": [4198, 4230], "op": "SWAP1", "path": "3"}, "1230": {"fn": "SimpleSwap.supply", "offset": [4198, 4230], "op": "DUP2", "path": "3"}, "1231": {"fn": "SimpleSwap.supply", "offset": [4198, 4230], "op": "SWAP1", "path": "3"}, "1232": {"fn": "SimpleSwap.supply", "offset": [4198, 4230], "op": "KECCAK256", "path": "3"}, "1233": {"fn": "SimpleSwap.supply", "offset": [4198, 4285], "op": "SWAP3", "path": "3"}, "1234": {"fn": "SimpleSwap.supply", "offset": [4198, 4285], "op": "SWAP1", "path": "3"}, "1235": {"fn": "SimpleSwap.supply", "offset": [4198, 4285], "op": "SWAP3", "path": "3"}, "1236": {"fn": "SimpleSwap.supply", "offset": [4198, 4285], "op": "SSTORE", "path": "3"}, "1237": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "SWAP1", "path": "3", "statement": 15}, "1238": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "MLOAD", "path": "3"}, "1239": {"op": "PUSH4", "value": "0x23B872DD"}, "1244": {"op": "PUSH1", "value": "0xE0"}, "1246": {"op": "SHL"}, "1247": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP2", "path": "3"}, "1248": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "MSTORE", "path": "3"}, "1249": {"op": "PUSH1", "value": "0x1"}, "1251": {"op": "PUSH1", "value": "0x1"}, "1253": {"op": "PUSH1", "value": "0xA0"}, "1255": {"op": "SHL"}, "1256": {"op": "SUB"}, "1257": {"fn": "SimpleSwap.supply", "offset": [4304, 4321], "op": "DUP7", "path": "3"}, "1258": {"fn": "SimpleSwap.supply", "offset": [4304, 4321], "op": "AND", "path": "3"}, "1259": {"fn": "SimpleSwap.supply", "offset": [4304, 4321], "op": "SWAP2", "path": "3"}, "1260": {"fn": "SimpleSwap.supply", "offset": [4304, 4321], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "1265": {"fn": "SimpleSwap.supply", "offset": [4304, 4321], "op": "SWAP2", "path": "3"}, "1266": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH2", "path": "3", "value": "0x502"}, "1269": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "SWAP2", "path": "3"}, "1270": {"fn": "SimpleSwap.supply", "offset": [4219, 4229], "op": "SWAP1", "path": "3"}, "1271": {"fn": "SimpleSwap.supply", "offset": [4342, 4346], "op": "ADDRESS", "path": "3"}, "1272": {"fn": "SimpleSwap.supply", "offset": [4342, 4346], "op": "SWAP1", "path": "3"}, "1273": {"fn": "SimpleSwap.supply", "offset": [4349, 4367], "op": "DUP8", "path": "3"}, "1274": {"fn": "SimpleSwap.supply", "offset": [4349, 4367], "op": "SWAP1", "path": "3"}, "1275": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH1", "path": "3", "value": "0x4"}, "1277": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "ADD", "path": "3"}, "1278": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH2", "path": "3", "value": "0xDC2"}, "1281": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4304, 4368], "op": "JUMP", "path": "3"}, "1282": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "JUMPDEST", "path": "3"}, "1283": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH1", "path": "3", "value": "0x20"}, "1285": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH1", "path": "3", "value": "0x40"}, "1287": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "MLOAD", "path": "3"}, "1288": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP1", "path": "3"}, "1289": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP4", "path": "3"}, "1290": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "SUB", "path": "3"}, "1291": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP2", "path": "3"}, "1292": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH1", "path": "3", "value": "0x0"}, "1294": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP8", "path": "3"}, "1295": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP1", "path": "3"}, "1296": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "EXTCODESIZE", "path": "3"}, "1297": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "ISZERO", "path": "3"}, "1298": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP1", "path": "3"}, "1299": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "ISZERO", "path": "3"}, "1300": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH2", "path": "3", "value": "0x51C"}, "1303": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "JUMPI", "path": "3"}, "1304": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH1", "path": "3", "value": "0x0"}, "1306": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP1", "path": "3"}, "1307": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "REVERT", "path": "3"}, "1308": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "JUMPDEST", "path": "3"}, "1309": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "POP", "path": "3"}, "1310": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "GAS", "path": "3"}, "1311": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "CALL", "path": "3"}, "1312": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "ISZERO", "path": "3"}, "1313": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP1", "path": "3"}, "1314": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "ISZERO", "path": "3"}, "1315": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH2", "path": "3", "value": "0x530"}, "1318": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "JUMPI", "path": "3"}, "1319": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "RETURNDATASIZE", "path": "3"}, "1320": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH1", "path": "3", "value": "0x0"}, "1322": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP1", "path": "3"}, "1323": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "RETURNDATACOPY", "path": "3"}, "1324": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "RETURNDATASIZE", "path": "3"}, "1325": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH1", "path": "3", "value": "0x0"}, "1327": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "REVERT", "path": "3"}, "1328": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "JUMPDEST", "path": "3"}, "1329": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "POP", "path": "3"}, "1330": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "POP", "path": "3"}, "1331": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "POP", "path": "3"}, "1332": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "POP", "path": "3"}, "1333": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH1", "path": "3", "value": "0x40"}, "1335": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "MLOAD", "path": "3"}, "1336": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "RETURNDATASIZE", "path": "3"}, "1337": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1339": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "NOT", "path": "3"}, "1340": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1342": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP3", "path": "3"}, "1343": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "ADD", "path": "3"}, "1344": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "AND", "path": "3"}, "1345": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP3", "path": "3"}, "1346": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "ADD", "path": "3"}, "1347": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP1", "path": "3"}, "1348": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH1", "path": "3", "value": "0x40"}, "1350": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "MSTORE", "path": "3"}, "1351": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "POP", "path": "3"}, "1352": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "DUP2", "path": "3"}, "1353": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "ADD", "path": "3"}, "1354": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "SWAP1", "path": "3"}, "1355": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH2", "path": "3", "value": "0x554"}, "1358": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "SWAP2", "path": "3"}, "1359": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "SWAP1", "path": "3"}, "1360": {"fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "PUSH2", "path": "3", "value": "0xD1A"}, "1363": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4304, 4368], "op": "JUMP", "path": "3"}, "1364": {"branch": 56, "fn": "SimpleSwap.supply", "offset": [4304, 4368], "op": "JUMPDEST", "path": "3"}, "1365": {"fn": "SimpleSwap.supply", "offset": [4296, 4397], "op": "PUSH2", "path": "3", "value": "0x570"}, "1368": {"branch": 56, "fn": "SimpleSwap.supply", "offset": [4296, 4397], "op": "JUMPI", "path": "3"}, "1369": {"fn": "SimpleSwap.supply", "offset": [4296, 4397], "op": "PUSH1", "path": "3", "value": "0x40"}, "1371": {"fn": "SimpleSwap.supply", "offset": [4296, 4397], "op": "MLOAD", "path": "3"}, "1372": {"op": "PUSH3", "value": "0x461BCD"}, "1376": {"op": "PUSH1", "value": "0xE5"}, "1378": {"op": "SHL"}, "1379": {"fn": "SimpleSwap.supply", "offset": [4296, 4397], "op": "DUP2", "path": "3"}, "1380": {"fn": "SimpleSwap.supply", "offset": [4296, 4397], "op": "MSTORE", "path": "3"}, "1381": {"fn": "SimpleSwap.supply", "offset": [4296, 4397], "op": "PUSH1", "path": "3", "value": "0x4"}, "1383": {"fn": "SimpleSwap.supply", "offset": [4296, 4397], "op": "ADD", "path": "3"}, "1384": {"fn": "SimpleSwap.supply", "offset": [4296, 4397], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1387": {"fn": "SimpleSwap.supply", "offset": [4296, 4397], "op": "SWAP1", "path": "3"}, "1388": {"fn": "SimpleSwap.supply", "offset": [4296, 4397], "op": "PUSH2", "path": "3", "value": "0xFEE"}, "1391": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4296, 4397], "op": "JUMP", "path": "3"}, "1392": {"fn": "SimpleSwap.supply", "offset": [4296, 4397], "op": "JUMPDEST", "path": "3"}, "1393": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH1", "path": "3", "statement": 16, "value": "0x40"}, "1395": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "MLOAD", "path": "3"}, "1396": {"op": "PUSH4", "value": "0x23B872DD"}, "1401": {"op": "PUSH1", "value": "0xE0"}, "1403": {"op": "SHL"}, "1404": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP2", "path": "3"}, "1405": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "MSTORE", "path": "3"}, "1406": {"op": "PUSH1", "value": "0x1"}, "1408": {"op": "PUSH1", "value": "0x1"}, "1410": {"op": "PUSH1", "value": "0xA0"}, "1412": {"op": "SHL"}, "1413": {"op": "SUB"}, "1414": {"fn": "SimpleSwap.supply", "offset": [4415, 4432], "op": "DUP5", "path": "3"}, "1415": {"fn": "SimpleSwap.supply", "offset": [4415, 4432], "op": "AND", "path": "3"}, "1416": {"fn": "SimpleSwap.supply", "offset": [4415, 4432], "op": "SWAP1", "path": "3"}, "1417": {"fn": "SimpleSwap.supply", "offset": [4415, 4432], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "1422": {"fn": "SimpleSwap.supply", "offset": [4415, 4432], "op": "SWAP1", "path": "3"}, "1423": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH2", "path": "3", "value": "0x5A0"}, "1426": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "SWAP1", "path": "3"}, "1427": {"fn": "SimpleSwap.supply", "offset": [4433, 4443], "op": "CALLER", "path": "3"}, "1428": {"fn": "SimpleSwap.supply", "offset": [4433, 4443], "op": "SWAP1", "path": "3"}, "1429": {"fn": "SimpleSwap.supply", "offset": [4453, 4457], "op": "ADDRESS", "path": "3"}, "1430": {"fn": "SimpleSwap.supply", "offset": [4453, 4457], "op": "SWAP1", "path": "3"}, "1431": {"fn": "SimpleSwap.supply", "offset": [4460, 4478], "op": "DUP7", "path": "3"}, "1432": {"fn": "SimpleSwap.supply", "offset": [4460, 4478], "op": "SWAP1", "path": "3"}, "1433": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH1", "path": "3", "value": "0x4"}, "1435": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "ADD", "path": "3"}, "1436": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH2", "path": "3", "value": "0xDC2"}, "1439": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4415, 4479], "op": "JUMP", "path": "3"}, "1440": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "JUMPDEST", "path": "3"}, "1441": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH1", "path": "3", "value": "0x20"}, "1443": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH1", "path": "3", "value": "0x40"}, "1445": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "MLOAD", "path": "3"}, "1446": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP1", "path": "3"}, "1447": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP4", "path": "3"}, "1448": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "SUB", "path": "3"}, "1449": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP2", "path": "3"}, "1450": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH1", "path": "3", "value": "0x0"}, "1452": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP8", "path": "3"}, "1453": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP1", "path": "3"}, "1454": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "EXTCODESIZE", "path": "3"}, "1455": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "ISZERO", "path": "3"}, "1456": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP1", "path": "3"}, "1457": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "ISZERO", "path": "3"}, "1458": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH2", "path": "3", "value": "0x5BA"}, "1461": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "JUMPI", "path": "3"}, "1462": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH1", "path": "3", "value": "0x0"}, "1464": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP1", "path": "3"}, "1465": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "REVERT", "path": "3"}, "1466": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "JUMPDEST", "path": "3"}, "1467": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "POP", "path": "3"}, "1468": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "GAS", "path": "3"}, "1469": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "CALL", "path": "3"}, "1470": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "ISZERO", "path": "3"}, "1471": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP1", "path": "3"}, "1472": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "ISZERO", "path": "3"}, "1473": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH2", "path": "3", "value": "0x5CE"}, "1476": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "JUMPI", "path": "3"}, "1477": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "RETURNDATASIZE", "path": "3"}, "1478": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH1", "path": "3", "value": "0x0"}, "1480": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP1", "path": "3"}, "1481": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "RETURNDATACOPY", "path": "3"}, "1482": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "RETURNDATASIZE", "path": "3"}, "1483": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH1", "path": "3", "value": "0x0"}, "1485": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "REVERT", "path": "3"}, "1486": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "JUMPDEST", "path": "3"}, "1487": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "POP", "path": "3"}, "1488": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "POP", "path": "3"}, "1489": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "POP", "path": "3"}, "1490": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "POP", "path": "3"}, "1491": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH1", "path": "3", "value": "0x40"}, "1493": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "MLOAD", "path": "3"}, "1494": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "RETURNDATASIZE", "path": "3"}, "1495": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1497": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "NOT", "path": "3"}, "1498": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1500": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP3", "path": "3"}, "1501": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "ADD", "path": "3"}, "1502": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "AND", "path": "3"}, "1503": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP3", "path": "3"}, "1504": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "ADD", "path": "3"}, "1505": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP1", "path": "3"}, "1506": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH1", "path": "3", "value": "0x40"}, "1508": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "MSTORE", "path": "3"}, "1509": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "POP", "path": "3"}, "1510": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "DUP2", "path": "3"}, "1511": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "ADD", "path": "3"}, "1512": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "SWAP1", "path": "3"}, "1513": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH2", "path": "3", "value": "0x5F2"}, "1516": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "SWAP2", "path": "3"}, "1517": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "SWAP1", "path": "3"}, "1518": {"fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "PUSH2", "path": "3", "value": "0xD1A"}, "1521": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4415, 4479], "op": "JUMP", "path": "3"}, "1522": {"branch": 57, "fn": "SimpleSwap.supply", "offset": [4415, 4479], "op": "JUMPDEST", "path": "3"}, "1523": {"fn": "SimpleSwap.supply", "offset": [4407, 4508], "op": "PUSH2", "path": "3", "value": "0x3DB"}, "1526": {"branch": 57, "fn": "SimpleSwap.supply", "offset": [4407, 4508], "op": "JUMPI", "path": "3"}, "1527": {"fn": "SimpleSwap.supply", "offset": [4407, 4508], "op": "PUSH1", "path": "3", "value": "0x40"}, "1529": {"fn": "SimpleSwap.supply", "offset": [4407, 4508], "op": "MLOAD", "path": "3"}, "1530": {"op": "PUSH3", "value": "0x461BCD"}, "1534": {"op": "PUSH1", "value": "0xE5"}, "1536": {"op": "SHL"}, "1537": {"fn": "SimpleSwap.supply", "offset": [4407, 4508], "op": "DUP2", "path": "3"}, "1538": {"fn": "SimpleSwap.supply", "offset": [4407, 4508], "op": "MSTORE", "path": "3"}, "1539": {"fn": "SimpleSwap.supply", "offset": [4407, 4508], "op": "PUSH1", "path": "3", "value": "0x4"}, "1541": {"fn": "SimpleSwap.supply", "offset": [4407, 4508], "op": "ADD", "path": "3"}, "1542": {"fn": "SimpleSwap.supply", "offset": [4407, 4508], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1545": {"fn": "SimpleSwap.supply", "offset": [4407, 4508], "op": "SWAP1", "path": "3"}, "1546": {"fn": "SimpleSwap.supply", "offset": [4407, 4508], "op": "PUSH2", "path": "3", "value": "0x10AA"}, "1549": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4407, 4508], "op": "JUMP", "path": "3"}, "1550": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "JUMPDEST", "path": "3"}, "1551": {"fn": "SimpleSwap.swap", "offset": [2129, 2146], "op": "PUSH1", "path": "3", "statement": 17, "value": "0x7"}, "1553": {"fn": "SimpleSwap.swap", "offset": [2129, 2146], "op": "SLOAD", "path": "3"}, "1554": {"fn": "SimpleSwap.swap", "offset": [2129, 2146], "op": "PUSH1", "path": "3", "value": "0xFF"}, "1556": {"branch": 58, "fn": "SimpleSwap.swap", "offset": [2129, 2146], "op": "AND", "path": "3"}, "1557": {"fn": "SimpleSwap.swap", "offset": [2121, 2188], "op": "PUSH2", "path": "3", "value": "0x630"}, "1560": {"branch": 58, "fn": "SimpleSwap.swap", "offset": [2121, 2188], "op": "JUMPI", "path": "3"}, "1561": {"fn": "SimpleSwap.swap", "offset": [2121, 2188], "op": "PUSH1", "path": "3", "value": "0x40"}, "1563": {"fn": "SimpleSwap.swap", "offset": [2121, 2188], "op": "MLOAD", "path": "3"}, "1564": {"op": "PUSH3", "value": "0x461BCD"}, "1568": {"op": "PUSH1", "value": "0xE5"}, "1570": {"op": "SHL"}, "1571": {"fn": "SimpleSwap.swap", "offset": [2121, 2188], "op": "DUP2", "path": "3"}, "1572": {"fn": "SimpleSwap.swap", "offset": [2121, 2188], "op": "MSTORE", "path": "3"}, "1573": {"fn": "SimpleSwap.swap", "offset": [2121, 2188], "op": "PUSH1", "path": "3", "value": "0x4"}, "1575": {"fn": "SimpleSwap.swap", "offset": [2121, 2188], "op": "ADD", "path": "3"}, "1576": {"fn": "SimpleSwap.swap", "offset": [2121, 2188], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1579": {"fn": "SimpleSwap.swap", "offset": [2121, 2188], "op": "SWAP1", "path": "3"}, "1580": {"fn": "SimpleSwap.swap", "offset": [2121, 2188], "op": "PUSH2", "path": "3", "value": "0xF4C"}, "1583": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2121, 2188], "op": "JUMP", "path": "3"}, "1584": {"fn": "SimpleSwap.swap", "offset": [2121, 2188], "op": "JUMPDEST", "path": "3"}, "1585": {"fn": "SimpleSwap.swap", "offset": [2226, 2227], "op": "PUSH1", "path": "3", "statement": 18, "value": "0x0"}, "1587": {"fn": "SimpleSwap.swap", "offset": [2206, 2223], "op": "DUP4", "path": "3"}, "1588": {"branch": 59, "fn": "SimpleSwap.swap", "offset": [2206, 2227], "op": "GT", "path": "3"}, "1589": {"fn": "SimpleSwap.swap", "offset": [2198, 2284], "op": "PUSH2", "path": "3", "value": "0x650"}, "1592": {"branch": 59, "fn": "SimpleSwap.swap", "offset": [2198, 2284], "op": "JUMPI", "path": "3"}, "1593": {"fn": "SimpleSwap.swap", "offset": [2198, 2284], "op": "PUSH1", "path": "3", "value": "0x40"}, "1595": {"fn": "SimpleSwap.swap", "offset": [2198, 2284], "op": "MLOAD", "path": "3"}, "1596": {"op": "PUSH3", "value": "0x461BCD"}, "1600": {"op": "PUSH1", "value": "0xE5"}, "1602": {"op": "SHL"}, "1603": {"fn": "SimpleSwap.swap", "offset": [2198, 2284], "op": "DUP2", "path": "3"}, "1604": {"fn": "SimpleSwap.swap", "offset": [2198, 2284], "op": "MSTORE", "path": "3"}, "1605": {"fn": "SimpleSwap.swap", "offset": [2198, 2284], "op": "PUSH1", "path": "3", "value": "0x4"}, "1607": {"fn": "SimpleSwap.swap", "offset": [2198, 2284], "op": "ADD", "path": "3"}, "1608": {"fn": "SimpleSwap.swap", "offset": [2198, 2284], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1611": {"fn": "SimpleSwap.swap", "offset": [2198, 2284], "op": "SWAP1", "path": "3"}, "1612": {"fn": "SimpleSwap.swap", "offset": [2198, 2284], "op": "PUSH2", "path": "3", "value": "0xDFF"}, "1615": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2198, 2284], "op": "JUMP", "path": "3"}, "1616": {"fn": "SimpleSwap.swap", "offset": [2198, 2284], "op": "JUMPDEST", "path": "3"}, "1617": {"fn": "SimpleSwap.swap", "offset": [2294, 2322], "op": "PUSH1", "path": "3", "value": "0x0"}, "1619": {"fn": "SimpleSwap.swap", "offset": [2325, 2381], "op": "PUSH2", "path": "3", "value": "0x65C"}, "1622": {"fn": "SimpleSwap.swap", "offset": [2349, 2366], "op": "DUP5", "path": "3"}, "1623": {"fn": "SimpleSwap.swap", "offset": [2368, 2380], "op": "DUP4", "path": "3"}, "1624": {"fn": "SimpleSwap.swap", "offset": [2325, 2348], "op": "PUSH2", "path": "3", "value": "0xBC8"}, "1627": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2325, 2381], "op": "JUMP", "path": "3"}, "1628": {"fn": "SimpleSwap.swap", "offset": [2325, 2381], "op": "JUMPDEST", "path": "3"}, "1629": {"fn": "SimpleSwap.swap", "offset": [2294, 2381], "op": "SWAP1", "path": "3"}, "1630": {"fn": "SimpleSwap.swap", "offset": [2294, 2381], "op": "POP", "path": "3"}, "1631": {"fn": "SimpleSwap.swap", "offset": [2423, 2446], "op": "DUP3", "path": "3", "statement": 19}, "1632": {"fn": "SimpleSwap.swap", "offset": [2399, 2419], "op": "DUP2", "path": "3"}, "1633": {"fn": "SimpleSwap.swap", "offset": [2399, 2446], "op": "LT", "path": "3"}, "1634": {"branch": 60, "fn": "SimpleSwap.swap", "offset": [2399, 2446], "op": "ISZERO", "path": "3"}, "1635": {"fn": "SimpleSwap.swap", "offset": [2391, 2504], "op": "PUSH2", "path": "3", "value": "0x67E"}, "1638": {"branch": 60, "fn": "SimpleSwap.swap", "offset": [2391, 2504], "op": "JUMPI", "path": "3"}, "1639": {"fn": "SimpleSwap.swap", "offset": [2391, 2504], "op": "PUSH1", "path": "3", "value": "0x40"}, "1641": {"fn": "SimpleSwap.swap", "offset": [2391, 2504], "op": "MLOAD", "path": "3"}, "1642": {"op": "PUSH3", "value": "0x461BCD"}, "1646": {"op": "PUSH1", "value": "0xE5"}, "1648": {"op": "SHL"}, "1649": {"fn": "SimpleSwap.swap", "offset": [2391, 2504], "op": "DUP2", "path": "3"}, "1650": {"fn": "SimpleSwap.swap", "offset": [2391, 2504], "op": "MSTORE", "path": "3"}, "1651": {"fn": "SimpleSwap.swap", "offset": [2391, 2504], "op": "PUSH1", "path": "3", "value": "0x4"}, "1653": {"fn": "SimpleSwap.swap", "offset": [2391, 2504], "op": "ADD", "path": "3"}, "1654": {"fn": "SimpleSwap.swap", "offset": [2391, 2504], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1657": {"fn": "SimpleSwap.swap", "offset": [2391, 2504], "op": "SWAP1", "path": "3"}, "1658": {"fn": "SimpleSwap.swap", "offset": [2391, 2504], "op": "PUSH2", "path": "3", "value": "0x10E1"}, "1661": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2391, 2504], "op": "JUMP", "path": "3"}, "1662": {"fn": "SimpleSwap.swap", "offset": [2391, 2504], "op": "JUMPDEST", "path": "3"}, "1663": {"fn": "SimpleSwap.swap", "offset": [2515, 2531], "op": "PUSH1", "path": "3", "value": "0x0"}, "1665": {"fn": "SimpleSwap.swap", "offset": [2515, 2531], "op": "DUP1", "path": "3"}, "1666": {"fn": "SimpleSwap.swap", "offset": [2515, 2531], "op": "DUP1", "path": "3"}, "1667": {"fn": "SimpleSwap.swap", "offset": [2574, 2586], "op": "DUP5", "path": "3"}, "1668": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "PUSH1", "path": "3", "value": "0x1"}, "1670": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "DUP2", "path": "3"}, "1671": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "GT", "path": "3"}, "1672": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "ISZERO", "path": "3"}, "1673": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "PUSH2", "path": "3", "value": "0x6A2"}, "1676": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "JUMPI", "path": "3"}, "1677": {"op": "PUSH4", "value": "0x4E487B71"}, "1682": {"op": "PUSH1", "value": "0xE0"}, "1684": {"op": "SHL"}, "1685": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "PUSH1", "path": "3", "value": "0x0"}, "1687": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "MSTORE", "path": "3"}, "1688": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "PUSH1", "path": "3", "value": "0x21"}, "1690": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "PUSH1", "path": "3", "value": "0x4"}, "1692": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "MSTORE", "path": "3"}, "1693": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "PUSH1", "path": "3", "value": "0x24"}, "1695": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "PUSH1", "path": "3", "value": "0x0"}, "1697": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "REVERT", "path": "3"}, "1698": {"fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "JUMPDEST", "path": "3"}, "1699": {"branch": 61, "fn": "SimpleSwap.swap", "offset": [2574, 2600], "op": "EQ", "path": "3"}, "1700": {"fn": "SimpleSwap.swap", "offset": [2570, 3137], "op": "ISZERO", "path": "3"}, "1701": {"fn": "SimpleSwap.swap", "offset": [2570, 3137], "op": "PUSH2", "path": "3", "value": "0x6E2"}, "1704": {"branch": 61, "fn": "SimpleSwap.swap", "offset": [2570, 3137], "op": "JUMPI", "path": "3"}, "1705": {"fn": "SimpleSwap.swap", "offset": [2638, 2656], "op": "PUSH1", "path": "3", "statement": 20, "value": "0x3"}, "1707": {"fn": "SimpleSwap.swap", "offset": [2638, 2656], "op": "SLOAD", "path": "3"}, "1708": {"fn": "SimpleSwap.swap", "offset": [2638, 2679], "op": "PUSH2", "path": "3", "value": "0x6B5"}, "1711": {"fn": "SimpleSwap.swap", "offset": [2638, 2679], "op": "SWAP1", "path": "3"}, "1712": {"fn": "SimpleSwap.swap", "offset": [2661, 2678], "op": "DUP8", "path": "3"}, "1713": {"fn": "SimpleSwap.swap", "offset": [2638, 2660], "op": "PUSH2", "path": "3", "value": "0xBBC"}, "1716": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2638, 2679], "op": "JUMP", "path": "3"}, "1717": {"fn": "SimpleSwap.swap", "offset": [2638, 2679], "op": "JUMPDEST", "path": "3"}, "1718": {"fn": "SimpleSwap.swap", "offset": [2616, 2634], "op": "PUSH1", "path": "3", "value": "0x3"}, "1720": {"fn": "SimpleSwap.swap", "offset": [2616, 2679], "op": "SSTORE", "path": "3"}, "1721": {"fn": "SimpleSwap.swap", "offset": [2714, 2732], "op": "PUSH1", "path": "3", "statement": 21, "value": "0x4"}, "1723": {"fn": "SimpleSwap.swap", "offset": [2714, 2732], "op": "SLOAD", "path": "3"}, "1724": {"fn": "SimpleSwap.swap", "offset": [2714, 2758], "op": "PUSH2", "path": "3", "value": "0x6C5"}, "1727": {"fn": "SimpleSwap.swap", "offset": [2714, 2758], "op": "SWAP1", "path": "3"}, "1728": {"fn": "SimpleSwap.swap", "offset": [2737, 2757], "op": "DUP5", "path": "3"}, "1729": {"fn": "SimpleSwap.swap", "offset": [2714, 2736], "op": "PUSH2", "path": "3", "value": "0xBB0"}, "1732": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2714, 2758], "op": "JUMP", "path": "3"}, "1733": {"fn": "SimpleSwap.swap", "offset": [2714, 2758], "op": "JUMPDEST", "path": "3"}, "1734": {"fn": "SimpleSwap.swap", "offset": [2693, 2711], "op": "PUSH1", "path": "3", "value": "0x4"}, "1736": {"fn": "SimpleSwap.swap", "offset": [2693, 2758], "op": "SSTORE", "path": "3"}, "1737": {"op": "POP"}, "1738": {"op": "POP"}, "1739": {"fn": "SimpleSwap.swap", "offset": [2792, 2803], "op": "PUSH1", "path": "3", "statement": 22, "value": "0x1"}, "1741": {"fn": "SimpleSwap.swap", "offset": [2792, 2803], "op": "SLOAD", "path": "3"}, "1742": {"fn": "SimpleSwap.swap", "offset": [2839, 2850], "op": "PUSH1", "path": "3", "statement": 23, "value": "0x2"}, "1744": {"fn": "SimpleSwap.swap", "offset": [2839, 2850], "op": "SLOAD", "path": "3"}, "1745": {"op": "PUSH1", "value": "0x1"}, "1747": {"op": "PUSH1", "value": "0x1"}, "1749": {"op": "PUSH1", "value": "0xA0"}, "1751": {"op": "SHL"}, "1752": {"op": "SUB"}, "1753": {"fn": "SimpleSwap.swap", "offset": [2792, 2803], "op": "SWAP2", "path": "3"}, "1754": {"fn": "SimpleSwap.swap", "offset": [2792, 2803], "op": "DUP3", "path": "3"}, "1755": {"fn": "SimpleSwap.swap", "offset": [2792, 2803], "op": "AND", "path": "3"}, "1756": {"fn": "SimpleSwap.swap", "offset": [2792, 2803], "op": "SWAP2", "path": "3"}, "1757": {"fn": "SimpleSwap.swap", "offset": [2839, 2850], "op": "AND", "path": "3"}, "1758": {"fn": "SimpleSwap.swap", "offset": [2570, 3137], "op": "PUSH2", "path": "3", "value": "0x718"}, "1761": {"fn": "SimpleSwap.swap", "offset": [2570, 3137], "op": "JUMP", "path": "3"}, "1762": {"fn": "SimpleSwap.swap", "offset": [2570, 3137], "op": "JUMPDEST", "path": "3"}, "1763": {"fn": "SimpleSwap.swap", "offset": [2912, 2930], "op": "PUSH1", "path": "3", "statement": 24, "value": "0x3"}, "1765": {"fn": "SimpleSwap.swap", "offset": [2912, 2930], "op": "SLOAD", "path": "3"}, "1766": {"fn": "SimpleSwap.swap", "offset": [2912, 2956], "op": "PUSH2", "path": "3", "value": "0x6EF"}, "1769": {"fn": "SimpleSwap.swap", "offset": [2912, 2956], "op": "SWAP1", "path": "3"}, "1770": {"fn": "SimpleSwap.swap", "offset": [2935, 2955], "op": "DUP5", "path": "3"}, "1771": {"fn": "SimpleSwap.swap", "offset": [2912, 2934], "op": "PUSH2", "path": "3", "value": "0xBB0"}, "1774": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2912, 2956], "op": "JUMP", "path": "3"}, "1775": {"fn": "SimpleSwap.swap", "offset": [2912, 2956], "op": "JUMPDEST", "path": "3"}, "1776": {"fn": "SimpleSwap.swap", "offset": [2891, 2909], "op": "PUSH1", "path": "3", "value": "0x3"}, "1778": {"fn": "SimpleSwap.swap", "offset": [2891, 2956], "op": "SSTORE", "path": "3"}, "1779": {"fn": "SimpleSwap.swap", "offset": [2991, 3009], "op": "PUSH1", "path": "3", "statement": 25, "value": "0x4"}, "1781": {"fn": "SimpleSwap.swap", "offset": [2991, 3009], "op": "SLOAD", "path": "3"}, "1782": {"fn": "SimpleSwap.swap", "offset": [2991, 3032], "op": "PUSH2", "path": "3", "value": "0x6FF"}, "1785": {"fn": "SimpleSwap.swap", "offset": [2991, 3032], "op": "SWAP1", "path": "3"}, "1786": {"fn": "SimpleSwap.swap", "offset": [3014, 3031], "op": "DUP8", "path": "3"}, "1787": {"fn": "SimpleSwap.swap", "offset": [2991, 3013], "op": "PUSH2", "path": "3", "value": "0xBBC"}, "1790": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2991, 3032], "op": "JUMP", "path": "3"}, "1791": {"fn": "SimpleSwap.swap", "offset": [2991, 3032], "op": "JUMPDEST", "path": "3"}, "1792": {"fn": "SimpleSwap.swap", "offset": [2970, 2988], "op": "PUSH1", "path": "3", "value": "0x4"}, "1794": {"fn": "SimpleSwap.swap", "offset": [2970, 3032], "op": "SSTORE", "path": "3"}, "1795": {"op": "POP"}, "1796": {"op": "POP"}, "1797": {"fn": "SimpleSwap.swap", "offset": [3066, 3077], "op": "PUSH1", "path": "3", "statement": 26, "value": "0x2"}, "1799": {"fn": "SimpleSwap.swap", "offset": [3066, 3077], "op": "SLOAD", "path": "3"}, "1800": {"fn": "SimpleSwap.swap", "offset": [3066, 3077], "op": "PUSH1", "path": "3", "value": "0x1"}, "1802": {"fn": "SimpleSwap.swap", "offset": [3114, 3125], "op": "SLOAD", "path": "3", "statement": 27}, "1803": {"op": "PUSH1", "value": "0x1"}, "1805": {"op": "PUSH1", "value": "0x1"}, "1807": {"op": "PUSH1", "value": "0xA0"}, "1809": {"op": "SHL"}, "1810": {"op": "SUB"}, "1811": {"fn": "SimpleSwap.swap", "offset": [3066, 3077], "op": "SWAP2", "path": "3"}, "1812": {"fn": "SimpleSwap.swap", "offset": [3066, 3077], "op": "DUP3", "path": "3"}, "1813": {"fn": "SimpleSwap.swap", "offset": [3066, 3077], "op": "AND", "path": "3"}, "1814": {"fn": "SimpleSwap.swap", "offset": [3066, 3077], "op": "SWAP2", "path": "3"}, "1815": {"fn": "SimpleSwap.swap", "offset": [3114, 3125], "op": "AND", "path": "3"}, "1816": {"fn": "SimpleSwap.swap", "offset": [2570, 3137], "op": "JUMPDEST", "path": "3"}, "1817": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH1", "path": "3", "statement": 28, "value": "0x40"}, "1819": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "MLOAD", "path": "3"}, "1820": {"op": "PUSH4", "value": "0xA9059CBB"}, "1825": {"op": "PUSH1", "value": "0xE0"}, "1827": {"op": "SHL"}, "1828": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP2", "path": "3"}, "1829": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "MSTORE", "path": "3"}, "1830": {"op": "PUSH1", "value": "0x1"}, "1832": {"op": "PUSH1", "value": "0x1"}, "1834": {"op": "PUSH1", "value": "0xA0"}, "1836": {"op": "SHL"}, "1837": {"op": "SUB"}, "1838": {"fn": "SimpleSwap.swap", "offset": [3162, 3182], "op": "DUP3", "path": "3"}, "1839": {"fn": "SimpleSwap.swap", "offset": [3162, 3182], "op": "AND", "path": "3"}, "1840": {"fn": "SimpleSwap.swap", "offset": [3162, 3182], "op": "SWAP1", "path": "3"}, "1841": {"fn": "SimpleSwap.swap", "offset": [3162, 3182], "op": "PUSH4", "path": "3", "value": "0xA9059CBB"}, "1846": {"fn": "SimpleSwap.swap", "offset": [3162, 3182], "op": "SWAP1", "path": "3"}, "1847": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH2", "path": "3", "value": "0x746"}, "1850": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "SWAP1", "path": "3"}, "1851": {"fn": "SimpleSwap.swap", "offset": [3183, 3193], "op": "CALLER", "path": "3"}, "1852": {"fn": "SimpleSwap.swap", "offset": [3183, 3193], "op": "SWAP1", "path": "3"}, "1853": {"fn": "SimpleSwap.swap", "offset": [3195, 3215], "op": "DUP8", "path": "3"}, "1854": {"fn": "SimpleSwap.swap", "offset": [3195, 3215], "op": "SWAP1", "path": "3"}, "1855": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH1", "path": "3", "value": "0x4"}, "1857": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "ADD", "path": "3"}, "1858": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH2", "path": "3", "value": "0xDE6"}, "1861": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3162, 3216], "op": "JUMP", "path": "3"}, "1862": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "JUMPDEST", "path": "3"}, "1863": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH1", "path": "3", "value": "0x20"}, "1865": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH1", "path": "3", "value": "0x40"}, "1867": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "MLOAD", "path": "3"}, "1868": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP1", "path": "3"}, "1869": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP4", "path": "3"}, "1870": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "SUB", "path": "3"}, "1871": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP2", "path": "3"}, "1872": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH1", "path": "3", "value": "0x0"}, "1874": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP8", "path": "3"}, "1875": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP1", "path": "3"}, "1876": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "EXTCODESIZE", "path": "3"}, "1877": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "ISZERO", "path": "3"}, "1878": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP1", "path": "3"}, "1879": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "ISZERO", "path": "3"}, "1880": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH2", "path": "3", "value": "0x760"}, "1883": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "JUMPI", "path": "3"}, "1884": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH1", "path": "3", "value": "0x0"}, "1886": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP1", "path": "3"}, "1887": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "REVERT", "path": "3"}, "1888": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "JUMPDEST", "path": "3"}, "1889": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "POP", "path": "3"}, "1890": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "GAS", "path": "3"}, "1891": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "CALL", "path": "3"}, "1892": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "ISZERO", "path": "3"}, "1893": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP1", "path": "3"}, "1894": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "ISZERO", "path": "3"}, "1895": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH2", "path": "3", "value": "0x774"}, "1898": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "JUMPI", "path": "3"}, "1899": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "RETURNDATASIZE", "path": "3"}, "1900": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH1", "path": "3", "value": "0x0"}, "1902": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP1", "path": "3"}, "1903": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "RETURNDATACOPY", "path": "3"}, "1904": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "RETURNDATASIZE", "path": "3"}, "1905": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH1", "path": "3", "value": "0x0"}, "1907": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "REVERT", "path": "3"}, "1908": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "JUMPDEST", "path": "3"}, "1909": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "POP", "path": "3"}, "1910": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "POP", "path": "3"}, "1911": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "POP", "path": "3"}, "1912": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "POP", "path": "3"}, "1913": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH1", "path": "3", "value": "0x40"}, "1915": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "MLOAD", "path": "3"}, "1916": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "RETURNDATASIZE", "path": "3"}, "1917": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1919": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "NOT", "path": "3"}, "1920": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1922": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP3", "path": "3"}, "1923": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "ADD", "path": "3"}, "1924": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "AND", "path": "3"}, "1925": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP3", "path": "3"}, "1926": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "ADD", "path": "3"}, "1927": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP1", "path": "3"}, "1928": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH1", "path": "3", "value": "0x40"}, "1930": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "MSTORE", "path": "3"}, "1931": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "POP", "path": "3"}, "1932": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "DUP2", "path": "3"}, "1933": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "ADD", "path": "3"}, "1934": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "SWAP1", "path": "3"}, "1935": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH2", "path": "3", "value": "0x798"}, "1938": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "SWAP2", "path": "3"}, "1939": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "SWAP1", "path": "3"}, "1940": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "PUSH2", "path": "3", "value": "0xD1A"}, "1943": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3162, 3216], "op": "JUMP", "path": "3"}, "1944": {"fn": "SimpleSwap.swap", "offset": [3162, 3216], "op": "JUMPDEST", "path": "3"}, "1945": {"fn": "SimpleSwap.swap", "offset": [3155, 3217], "op": "PUSH2", "path": "3", "value": "0x7B2"}, "1948": {"fn": "SimpleSwap.swap", "offset": [3155, 3217], "op": "JUMPI", "path": "3"}, "1949": {"op": "PUSH4", "value": "0x4E487B71"}, "1954": {"op": "PUSH1", "value": "0xE0"}, "1956": {"op": "SHL"}, "1957": {"fn": "SimpleSwap.swap", "offset": [3155, 3217], "op": "PUSH1", "path": "3", "value": "0x0"}, "1959": {"fn": "SimpleSwap.swap", "offset": [3155, 3217], "op": "MSTORE", "path": "3"}, "1960": {"fn": "SimpleSwap.swap", "offset": [3155, 3217], "op": "PUSH1", "path": "3", "value": "0x1"}, "1962": {"fn": "SimpleSwap.swap", "offset": [3155, 3217], "op": "PUSH1", "path": "3", "value": "0x4"}, "1964": {"fn": "SimpleSwap.swap", "offset": [3155, 3217], "op": "MSTORE", "path": "3"}, "1965": {"fn": "SimpleSwap.swap", "offset": [3155, 3217], "op": "PUSH1", "path": "3", "value": "0x24"}, "1967": {"fn": "SimpleSwap.swap", "offset": [3155, 3217], "op": "PUSH1", "path": "3", "value": "0x0"}, "1969": {"fn": "SimpleSwap.swap", "offset": [3155, 3217], "op": "REVERT", "path": "3"}, "1970": {"fn": "SimpleSwap.swap", "offset": [3155, 3217], "op": "JUMPDEST", "path": "3"}, "1971": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH1", "path": "3", "statement": 29, "value": "0x40"}, "1973": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "MLOAD", "path": "3"}, "1974": {"op": "PUSH4", "value": "0x23B872DD"}, "1979": {"op": "PUSH1", "value": "0xE0"}, "1981": {"op": "SHL"}, "1982": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP2", "path": "3"}, "1983": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "MSTORE", "path": "3"}, "1984": {"op": "PUSH1", "value": "0x1"}, "1986": {"op": "PUSH1", "value": "0x1"}, "1988": {"op": "PUSH1", "value": "0xA0"}, "1990": {"op": "SHL"}, "1991": {"op": "SUB"}, "1992": {"fn": "SimpleSwap.swap", "offset": [3235, 3257], "op": "DUP4", "path": "3"}, "1993": {"fn": "SimpleSwap.swap", "offset": [3235, 3257], "op": "AND", "path": "3"}, "1994": {"fn": "SimpleSwap.swap", "offset": [3235, 3257], "op": "SWAP1", "path": "3"}, "1995": {"fn": "SimpleSwap.swap", "offset": [3235, 3257], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "2000": {"fn": "SimpleSwap.swap", "offset": [3235, 3257], "op": "SWAP1", "path": "3"}, "2001": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH2", "path": "3", "value": "0x7E2"}, "2004": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "SWAP1", "path": "3"}, "2005": {"fn": "SimpleSwap.swap", "offset": [3258, 3268], "op": "CALLER", "path": "3"}, "2006": {"fn": "SimpleSwap.swap", "offset": [3258, 3268], "op": "SWAP1", "path": "3"}, "2007": {"fn": "SimpleSwap.swap", "offset": [3278, 3282], "op": "ADDRESS", "path": "3"}, "2008": {"fn": "SimpleSwap.swap", "offset": [3278, 3282], "op": "SWAP1", "path": "3"}, "2009": {"fn": "SimpleSwap.swap", "offset": [3285, 3302], "op": "DUP12", "path": "3"}, "2010": {"fn": "SimpleSwap.swap", "offset": [3285, 3302], "op": "SWAP1", "path": "3"}, "2011": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH1", "path": "3", "value": "0x4"}, "2013": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "ADD", "path": "3"}, "2014": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH2", "path": "3", "value": "0xDC2"}, "2017": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3235, 3303], "op": "JUMP", "path": "3"}, "2018": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "JUMPDEST", "path": "3"}, "2019": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH1", "path": "3", "value": "0x20"}, "2021": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH1", "path": "3", "value": "0x40"}, "2023": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "MLOAD", "path": "3"}, "2024": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP1", "path": "3"}, "2025": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP4", "path": "3"}, "2026": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "SUB", "path": "3"}, "2027": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP2", "path": "3"}, "2028": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH1", "path": "3", "value": "0x0"}, "2030": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP8", "path": "3"}, "2031": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP1", "path": "3"}, "2032": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "EXTCODESIZE", "path": "3"}, "2033": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "ISZERO", "path": "3"}, "2034": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP1", "path": "3"}, "2035": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "ISZERO", "path": "3"}, "2036": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH2", "path": "3", "value": "0x7FC"}, "2039": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "JUMPI", "path": "3"}, "2040": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH1", "path": "3", "value": "0x0"}, "2042": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP1", "path": "3"}, "2043": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "REVERT", "path": "3"}, "2044": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "JUMPDEST", "path": "3"}, "2045": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "POP", "path": "3"}, "2046": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "GAS", "path": "3"}, "2047": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "CALL", "path": "3"}, "2048": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "ISZERO", "path": "3"}, "2049": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP1", "path": "3"}, "2050": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "ISZERO", "path": "3"}, "2051": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH2", "path": "3", "value": "0x810"}, "2054": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "JUMPI", "path": "3"}, "2055": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "RETURNDATASIZE", "path": "3"}, "2056": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH1", "path": "3", "value": "0x0"}, "2058": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP1", "path": "3"}, "2059": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "RETURNDATACOPY", "path": "3"}, "2060": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "RETURNDATASIZE", "path": "3"}, "2061": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH1", "path": "3", "value": "0x0"}, "2063": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "REVERT", "path": "3"}, "2064": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "JUMPDEST", "path": "3"}, "2065": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "POP", "path": "3"}, "2066": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "POP", "path": "3"}, "2067": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "POP", "path": "3"}, "2068": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "POP", "path": "3"}, "2069": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH1", "path": "3", "value": "0x40"}, "2071": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "MLOAD", "path": "3"}, "2072": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "RETURNDATASIZE", "path": "3"}, "2073": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2075": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "NOT", "path": "3"}, "2076": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2078": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP3", "path": "3"}, "2079": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "ADD", "path": "3"}, "2080": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "AND", "path": "3"}, "2081": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP3", "path": "3"}, "2082": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "ADD", "path": "3"}, "2083": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP1", "path": "3"}, "2084": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH1", "path": "3", "value": "0x40"}, "2086": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "MSTORE", "path": "3"}, "2087": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "POP", "path": "3"}, "2088": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "DUP2", "path": "3"}, "2089": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "ADD", "path": "3"}, "2090": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "SWAP1", "path": "3"}, "2091": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH2", "path": "3", "value": "0x834"}, "2094": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "SWAP2", "path": "3"}, "2095": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "SWAP1", "path": "3"}, "2096": {"fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "PUSH2", "path": "3", "value": "0xD1A"}, "2099": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3235, 3303], "op": "JUMP", "path": "3"}, "2100": {"branch": 62, "fn": "SimpleSwap.swap", "offset": [3235, 3303], "op": "JUMPDEST", "path": "3"}, "2101": {"fn": "SimpleSwap.swap", "offset": [3227, 3364], "op": "PUSH2", "path": "3", "value": "0x850"}, "2104": {"branch": 62, "fn": "SimpleSwap.swap", "offset": [3227, 3364], "op": "JUMPI", "path": "3"}, "2105": {"fn": "SimpleSwap.swap", "offset": [3227, 3364], "op": "PUSH1", "path": "3", "value": "0x40"}, "2107": {"fn": "SimpleSwap.swap", "offset": [3227, 3364], "op": "MLOAD", "path": "3"}, "2108": {"op": "PUSH3", "value": "0x461BCD"}, "2112": {"op": "PUSH1", "value": "0xE5"}, "2114": {"op": "SHL"}, "2115": {"fn": "SimpleSwap.swap", "offset": [3227, 3364], "op": "DUP2", "path": "3"}, "2116": {"fn": "SimpleSwap.swap", "offset": [3227, 3364], "op": "MSTORE", "path": "3"}, "2117": {"fn": "SimpleSwap.swap", "offset": [3227, 3364], "op": "PUSH1", "path": "3", "value": "0x4"}, "2119": {"fn": "SimpleSwap.swap", "offset": [3227, 3364], "op": "ADD", "path": "3"}, "2120": {"fn": "SimpleSwap.swap", "offset": [3227, 3364], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "2123": {"fn": "SimpleSwap.swap", "offset": [3227, 3364], "op": "SWAP1", "path": "3"}, "2124": {"fn": "SimpleSwap.swap", "offset": [3227, 3364], "op": "PUSH2", "path": "3", "value": "0xF91"}, "2127": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3227, 3364], "op": "JUMP", "path": "3"}, "2128": {"fn": "SimpleSwap.swap", "offset": [3227, 3364], "op": "JUMPDEST", "path": "3"}, "2129": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "POP", "path": "3"}, "2130": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "POP", "path": "3"}, "2131": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "POP", "path": "3"}, "2132": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "POP", "path": "3"}, "2133": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "POP", "path": "3"}, "2134": {"fn": "SimpleSwap.swap", "offset": [2010, 3371], "op": "POP", "path": "3"}, "2135": {"fn": "SimpleSwap.swap", "jump": "o", "offset": [2010, 3371], "op": "JUMP", "path": "3"}, "2136": {"offset": [862, 899], "op": "JUMPDEST", "path": "3"}, "2137": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH1", "path": "3", "value": "0x3"}, "2139": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SLOAD", "path": "3"}, "2140": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "DUP2", "path": "3"}, "2141": {"fn": "SimpleSwap.swap", "jump": "o", "offset": [862, 899], "op": "JUMP", "path": "3"}, "2142": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "JUMPDEST", "path": "3"}, "2143": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6478, 6485], "op": "PUSH1", "path": "3", "value": "0x0"}, "2145": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6487, 6494], "op": "DUP1", "path": "3"}, "2146": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6519, 6569], "op": "PUSH2", "path": "3", "statement": 30, "value": "0x87F"}, "2149": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6555, 6568], "op": "PUSH1", "path": "3", "value": "0x5"}, "2151": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6555, 6568], "op": "SLOAD", "path": "3"}, "2152": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6519, 6550], "op": "PUSH2", "path": "3", "value": "0x220"}, "2155": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6542, 6549], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "2159": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6519, 6537], "op": "PUSH1", "path": "3", "value": "0x3"}, "2161": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6519, 6537], "op": "SLOAD", "path": "3"}, "2162": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6519, 6541], "op": "PUSH2", "path": "3", "value": "0xB91"}, "2165": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6519, 6541], "op": "SWAP1", "path": "3"}, "2166": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6519, 6550], "op": "SWAP2", "path": "3"}, "2167": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6519, 6550], "op": "SWAP1", "path": "3"}, "2168": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6519, 6550], "op": "PUSH4", "path": "3", "value": "0xFFFFFFFF"}, "2173": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6519, 6550], "op": "AND", "path": "3"}, "2174": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "i", "offset": [6519, 6550], "op": "JUMP", "path": "3"}, "2175": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6519, 6569], "op": "JUMPDEST", "path": "3"}, "2176": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6571, 6621], "op": "PUSH2", "path": "3", "value": "0x89D"}, "2179": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6607, 6620], "op": "PUSH1", "path": "3", "value": "0x5"}, "2181": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6607, 6620], "op": "SLOAD", "path": "3"}, "2182": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6571, 6602], "op": "PUSH2", "path": "3", "value": "0x220"}, "2185": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6594, 6601], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "2189": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6571, 6589], "op": "PUSH1", "path": "3", "value": "0x4"}, "2191": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6571, 6589], "op": "SLOAD", "path": "3"}, "2192": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6571, 6593], "op": "PUSH2", "path": "3", "value": "0xB91"}, "2195": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6571, 6593], "op": "SWAP1", "path": "3"}, "2196": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6571, 6602], "op": "SWAP2", "path": "3"}, "2197": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6571, 6602], "op": "SWAP1", "path": "3"}, "2198": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6571, 6602], "op": "PUSH4", "path": "3", "value": "0xFFFFFFFF"}, "2203": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6571, 6602], "op": "AND", "path": "3"}, "2204": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "i", "offset": [6571, 6602], "op": "JUMP", "path": "3"}, "2205": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6571, 6621], "op": "JUMPDEST", "path": "3"}, "2206": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6511, 6622], "op": "SWAP2", "path": "3"}, "2207": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6511, 6622], "op": "POP", "path": "3"}, "2208": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6511, 6622], "op": "SWAP2", "path": "3"}, "2209": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6511, 6622], "op": "POP", "path": "3"}, "2210": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "SWAP1", "path": "3"}, "2211": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6431, 6629], "op": "SWAP2", "path": "3"}, "2212": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "o", "offset": [6431, 6629], "op": "JUMP", "path": "3"}, "2213": {"fn": "Ownable.renounceOwnership", "offset": [1605, 1697], "op": "JUMPDEST", "path": "0"}, "2214": {"offset": [1196, 1208], "op": "PUSH2", "path": "0", "value": "0x8AD"}, "2217": {"offset": [1196, 1206], "op": "PUSH2", "path": "0", "value": "0xC9F"}, "2220": {"jump": "i", "offset": [1196, 1208], "op": "JUMP", "path": "0"}, "2221": {"fn": "Ownable.renounceOwnership", "offset": [1196, 1208], "op": "JUMPDEST", "path": "0"}, "2222": {"op": "PUSH1", "value": "0x1"}, "2224": {"op": "PUSH1", "value": "0x1"}, "2226": {"op": "PUSH1", "value": "0xA0"}, "2228": {"op": "SHL"}, "2229": {"op": "SUB"}, "2230": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2231": {"offset": [1185, 1192], "op": "PUSH2", "path": "0", "value": "0x8BE"}, "2234": {"offset": [1185, 1190], "op": "PUSH2", "path": "0", "value": "0x8F6"}, "2237": {"jump": "i", "offset": [1185, 1192], "op": "JUMP", "path": "0"}, "2238": {"fn": "Ownable.renounceOwnership", "offset": [1185, 1192], "op": "JUMPDEST", "path": "0"}, "2239": {"op": "PUSH1", "value": "0x1"}, "2241": {"op": "PUSH1", "value": "0x1"}, "2243": {"op": "PUSH1", "value": "0xA0"}, "2245": {"op": "SHL"}, "2246": {"op": "SUB"}, "2247": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2248": {"fn": "Ownable.renounceOwnership", "offset": [1185, 1208], "op": "EQ", "path": "0"}, "2249": {"offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x8E4"}, "2252": {"offset": [1177, 1245], "op": "JUMPI", "path": "0"}, "2253": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x40"}, "2255": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "MLOAD", "path": "0"}, "2256": {"op": "PUSH3", "value": "0x461BCD"}, "2260": {"op": "PUSH1", "value": "0xE5"}, "2262": {"op": "SHL"}, "2263": {"offset": [1177, 1245], "op": "DUP2", "path": "0"}, "2264": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "MSTORE", "path": "0"}, "2265": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x4"}, "2267": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "ADD", "path": "0"}, "2268": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1A5"}, "2271": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "SWAP1", "path": "0"}, "2272": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1075"}, "2275": {"fn": "Ownable.renounceOwnership", "jump": "i", "offset": [1177, 1245], "op": "JUMP", "path": "0"}, "2276": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "JUMPDEST", "path": "0"}, "2277": {"fn": "Ownable.renounceOwnership", "offset": [1669, 1690], "op": "PUSH2", "path": "0", "statement": 31, "value": "0x8EE"}, "2280": {"fn": "Ownable.renounceOwnership", "offset": [1687, 1688], "op": "PUSH1", "path": "0", "value": "0x0"}, "2282": {"fn": "Ownable.renounceOwnership", "offset": [1669, 1678], "op": "PUSH2", "path": "0", "value": "0xCA3"}, "2285": {"fn": "Ownable.renounceOwnership", "jump": "i", "offset": [1669, 1690], "op": "JUMP", "path": "0"}, "2286": {"fn": "Ownable.renounceOwnership", "offset": [1669, 1690], "op": "JUMPDEST", "path": "0"}, "2287": {"fn": "Ownable.renounceOwnership", "jump": "o", "offset": [1605, 1697], "op": "JUMP", "path": "0"}, "2288": {"offset": [986, 1019], "op": "JUMPDEST", "path": "3"}, "2289": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "PUSH1", "path": "3", "value": "0x5"}, "2291": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "SLOAD", "path": "3"}, "2292": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "DUP2", "path": "3"}, "2293": {"fn": "Ownable.renounceOwnership", "jump": "o", "offset": [986, 1019], "op": "JUMP", "path": "3"}, "2294": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "JUMPDEST", "path": "0"}, "2295": {"fn": "Ownable.owner", "offset": [1019, 1026], "op": "PUSH1", "path": "0", "value": "0x0"}, "2297": {"fn": "Ownable.owner", "offset": [1045, 1051], "op": "SLOAD", "path": "0", "statement": 32}, "2298": {"op": "PUSH1", "value": "0x1"}, "2300": {"op": "PUSH1", "value": "0x1"}, "2302": {"op": "PUSH1", "value": "0xA0"}, "2304": {"op": "SHL"}, "2305": {"op": "SUB"}, "2306": {"fn": "Ownable.owner", "offset": [1045, 1051], "op": "AND", "path": "0"}, "2307": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "SWAP1", "path": "0"}, "2308": {"fn": "Ownable.owner", "jump": "o", "offset": [973, 1058], "op": "JUMP", "path": "0"}, "2309": {"offset": [924, 961], "op": "JUMPDEST", "path": "3"}, "2310": {"fn": "Ownable.owner", "offset": [924, 961], "op": "PUSH1", "path": "3", "value": "0x4"}, "2312": {"fn": "Ownable.owner", "offset": [924, 961], "op": "SLOAD", "path": "3"}, "2313": {"fn": "Ownable.owner", "offset": [924, 961], "op": "DUP2", "path": "3"}, "2314": {"fn": "Ownable.owner", "jump": "o", "offset": [924, 961], "op": "JUMP", "path": "3"}, "2315": {"offset": [1049, 1081], "op": "JUMPDEST", "path": "3"}, "2316": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "PUSH1", "path": "3", "value": "0x6"}, "2318": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "SLOAD", "path": "3"}, "2319": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "DUP2", "path": "3"}, "2320": {"fn": "Ownable.owner", "jump": "o", "offset": [1049, 1081], "op": "JUMP", "path": "3"}, "2321": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "JUMPDEST", "path": "3"}, "2322": {"offset": [1196, 1208], "op": "PUSH2", "path": "0", "value": "0x919"}, "2325": {"offset": [1196, 1206], "op": "PUSH2", "path": "0", "value": "0xC9F"}, "2328": {"jump": "i", "offset": [1196, 1208], "op": "JUMP", "path": "0"}, "2329": {"fn": "SimpleSwap.initiatePool", "offset": [1196, 1208], "op": "JUMPDEST", "path": "0"}, "2330": {"op": "PUSH1", "value": "0x1"}, "2332": {"op": "PUSH1", "value": "0x1"}, "2334": {"op": "PUSH1", "value": "0xA0"}, "2336": {"op": "SHL"}, "2337": {"op": "SUB"}, "2338": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2339": {"offset": [1185, 1192], "op": "PUSH2", "path": "0", "value": "0x92A"}, "2342": {"offset": [1185, 1190], "op": "PUSH2", "path": "0", "value": "0x8F6"}, "2345": {"jump": "i", "offset": [1185, 1192], "op": "JUMP", "path": "0"}, "2346": {"fn": "SimpleSwap.initiatePool", "offset": [1185, 1192], "op": "JUMPDEST", "path": "0"}, "2347": {"op": "PUSH1", "value": "0x1"}, "2349": {"op": "PUSH1", "value": "0x1"}, "2351": {"op": "PUSH1", "value": "0xA0"}, "2353": {"op": "SHL"}, "2354": {"op": "SUB"}, "2355": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2356": {"fn": "SimpleSwap.initiatePool", "offset": [1185, 1208], "op": "EQ", "path": "0"}, "2357": {"offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x950"}, "2360": {"offset": [1177, 1245], "op": "JUMPI", "path": "0"}, "2361": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x40"}, "2363": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "MLOAD", "path": "0"}, "2364": {"op": "PUSH3", "value": "0x461BCD"}, "2368": {"op": "PUSH1", "value": "0xE5"}, "2370": {"op": "SHL"}, "2371": {"offset": [1177, 1245], "op": "DUP2", "path": "0"}, "2372": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "MSTORE", "path": "0"}, "2373": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x4"}, "2375": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "ADD", "path": "0"}, "2376": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1A5"}, "2379": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "SWAP1", "path": "0"}, "2380": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1075"}, "2383": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1177, 1245], "op": "JUMP", "path": "0"}, "2384": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "JUMPDEST", "path": "0"}, "2385": {"fn": "SimpleSwap.initiatePool", "offset": [1315, 1332], "op": "PUSH1", "path": "3", "statement": 33, "value": "0x7"}, "2387": {"fn": "SimpleSwap.initiatePool", "offset": [1315, 1332], "op": "SLOAD", "path": "3"}, "2388": {"fn": "SimpleSwap.initiatePool", "offset": [1315, 1332], "op": "PUSH1", "path": "3", "value": "0xFF"}, "2390": {"fn": "SimpleSwap.initiatePool", "offset": [1315, 1332], "op": "AND", "path": "3"}, "2391": {"branch": 63, "fn": "SimpleSwap.initiatePool", "offset": [1314, 1332], "op": "ISZERO", "path": "3"}, "2392": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "PUSH2", "path": "3", "value": "0x973"}, "2395": {"branch": 63, "fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "JUMPI", "path": "3"}, "2396": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "PUSH1", "path": "3", "value": "0x40"}, "2398": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "MLOAD", "path": "3"}, "2399": {"op": "PUSH3", "value": "0x461BCD"}, "2403": {"op": "PUSH1", "value": "0xE5"}, "2405": {"op": "SHL"}, "2406": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "DUP2", "path": "3"}, "2407": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "MSTORE", "path": "3"}, "2408": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "PUSH1", "path": "3", "value": "0x4"}, "2410": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "ADD", "path": "3"}, "2411": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "2414": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "SWAP1", "path": "3"}, "2415": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "PUSH2", "path": "3", "value": "0x1136"}, "2418": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1306, 1370], "op": "JUMP", "path": "3"}, "2419": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "JUMPDEST", "path": "3"}, "2420": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1397], "op": "PUSH1", "path": "3", "statement": 34, "value": "0x7"}, "2422": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "DUP1", "path": "3"}, "2423": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "SLOAD", "path": "3"}, "2424": {"op": "PUSH1", "value": "0xFF"}, "2426": {"op": "NOT"}, "2427": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "AND", "path": "3"}, "2428": {"fn": "SimpleSwap.initiatePool", "offset": [1400, 1404], "op": "PUSH1", "path": "3", "value": "0x1"}, "2430": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "SWAP1", "path": "3"}, "2431": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "DUP2", "path": "3"}, "2432": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "OR", "path": "3"}, "2433": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "SWAP1", "path": "3"}, "2434": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "SWAP2", "path": "3"}, "2435": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "SSTORE", "path": "3"}, "2436": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "SLOAD", "path": "3"}, "2437": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "PUSH1", "path": "3", "value": "0x2"}, "2439": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "SLOAD", "path": "3"}, "2440": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "statement": 35, "value": "0x40"}, "2442": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "MLOAD", "path": "3"}, "2443": {"op": "PUSH4", "value": "0x23B872DD"}, "2448": {"op": "PUSH1", "value": "0xE0"}, "2450": {"op": "SHL"}, "2451": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP2", "path": "3"}, "2452": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "MSTORE", "path": "3"}, "2453": {"op": "PUSH1", "value": "0x1"}, "2455": {"op": "PUSH1", "value": "0x1"}, "2457": {"op": "PUSH1", "value": "0xA0"}, "2459": {"op": "SHL"}, "2460": {"op": "SUB"}, "2461": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "SWAP3", "path": "3"}, "2462": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "DUP4", "path": "3"}, "2463": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "AND", "path": "3"}, "2464": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "SWAP3", "path": "3"}, "2465": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "SWAP2", "path": "3"}, "2466": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "SWAP1", "path": "3"}, "2467": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "SWAP2", "path": "3"}, "2468": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "AND", "path": "3"}, "2469": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "SWAP1", "path": "3"}, "2470": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "DUP3", "path": "3"}, "2471": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "SWAP1", "path": "3"}, "2472": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1527], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "2477": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1527], "op": "SWAP1", "path": "3"}, "2478": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH2", "path": "3", "value": "0x9BF"}, "2481": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "SWAP1", "path": "3"}, "2482": {"fn": "SimpleSwap.initiatePool", "offset": [1528, 1538], "op": "CALLER", "path": "3"}, "2483": {"fn": "SimpleSwap.initiatePool", "offset": [1528, 1538], "op": "SWAP1", "path": "3"}, "2484": {"fn": "SimpleSwap.initiatePool", "offset": [1548, 1552], "op": "ADDRESS", "path": "3"}, "2485": {"fn": "SimpleSwap.initiatePool", "offset": [1548, 1552], "op": "SWAP1", "path": "3"}, "2486": {"fn": "SimpleSwap.initiatePool", "offset": [1555, 1573], "op": "DUP10", "path": "3"}, "2487": {"fn": "SimpleSwap.initiatePool", "offset": [1555, 1573], "op": "SWAP1", "path": "3"}, "2488": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x4"}, "2490": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ADD", "path": "3"}, "2491": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH2", "path": "3", "value": "0xDC2"}, "2494": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1510, 1574], "op": "JUMP", "path": "3"}, "2495": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "JUMPDEST", "path": "3"}, "2496": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x20"}, "2498": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x40"}, "2500": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "MLOAD", "path": "3"}, "2501": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2502": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP4", "path": "3"}, "2503": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "SUB", "path": "3"}, "2504": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP2", "path": "3"}, "2505": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x0"}, "2507": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP8", "path": "3"}, "2508": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2509": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "EXTCODESIZE", "path": "3"}, "2510": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ISZERO", "path": "3"}, "2511": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2512": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ISZERO", "path": "3"}, "2513": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH2", "path": "3", "value": "0x9D9"}, "2516": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "JUMPI", "path": "3"}, "2517": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x0"}, "2519": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2520": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "REVERT", "path": "3"}, "2521": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "JUMPDEST", "path": "3"}, "2522": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "POP", "path": "3"}, "2523": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "GAS", "path": "3"}, "2524": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "CALL", "path": "3"}, "2525": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ISZERO", "path": "3"}, "2526": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2527": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ISZERO", "path": "3"}, "2528": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH2", "path": "3", "value": "0x9ED"}, "2531": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "JUMPI", "path": "3"}, "2532": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "RETURNDATASIZE", "path": "3"}, "2533": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x0"}, "2535": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2536": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "RETURNDATACOPY", "path": "3"}, "2537": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "RETURNDATASIZE", "path": "3"}, "2538": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x0"}, "2540": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "REVERT", "path": "3"}, "2541": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "JUMPDEST", "path": "3"}, "2542": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "POP", "path": "3"}, "2543": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "POP", "path": "3"}, "2544": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "POP", "path": "3"}, "2545": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "POP", "path": "3"}, "2546": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x40"}, "2548": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "MLOAD", "path": "3"}, "2549": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "RETURNDATASIZE", "path": "3"}, "2550": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2552": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "NOT", "path": "3"}, "2553": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2555": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP3", "path": "3"}, "2556": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ADD", "path": "3"}, "2557": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "AND", "path": "3"}, "2558": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP3", "path": "3"}, "2559": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ADD", "path": "3"}, "2560": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2561": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x40"}, "2563": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "MSTORE", "path": "3"}, "2564": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "POP", "path": "3"}, "2565": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP2", "path": "3"}, "2566": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ADD", "path": "3"}, "2567": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "SWAP1", "path": "3"}, "2568": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH2", "path": "3", "value": "0xA11"}, "2571": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "SWAP2", "path": "3"}, "2572": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "SWAP1", "path": "3"}, "2573": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH2", "path": "3", "value": "0xD1A"}, "2576": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1510, 1574], "op": "JUMP", "path": "3"}, "2577": {"branch": 64, "fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "JUMPDEST", "path": "3"}, "2578": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "PUSH2", "path": "3", "value": "0xA2D"}, "2581": {"branch": 64, "fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "JUMPI", "path": "3"}, "2582": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "PUSH1", "path": "3", "value": "0x40"}, "2584": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "MLOAD", "path": "3"}, "2585": {"op": "PUSH3", "value": "0x461BCD"}, "2589": {"op": "PUSH1", "value": "0xE5"}, "2591": {"op": "SHL"}, "2592": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "DUP2", "path": "3"}, "2593": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "MSTORE", "path": "3"}, "2594": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "PUSH1", "path": "3", "value": "0x4"}, "2596": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "ADD", "path": "3"}, "2597": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "2600": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "SWAP1", "path": "3"}, "2601": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "PUSH2", "path": "3", "value": "0x1177"}, "2604": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1502, 1600], "op": "JUMP", "path": "3"}, "2605": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "JUMPDEST", "path": "3"}, "2606": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "statement": 36, "value": "0x40"}, "2608": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "MLOAD", "path": "3"}, "2609": {"op": "PUSH4", "value": "0x23B872DD"}, "2614": {"op": "PUSH1", "value": "0xE0"}, "2616": {"op": "SHL"}, "2617": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP2", "path": "3"}, "2618": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "MSTORE", "path": "3"}, "2619": {"op": "PUSH1", "value": "0x1"}, "2621": {"op": "PUSH1", "value": "0x1"}, "2623": {"op": "PUSH1", "value": "0xA0"}, "2625": {"op": "SHL"}, "2626": {"op": "SUB"}, "2627": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1635], "op": "DUP3", "path": "3"}, "2628": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1635], "op": "AND", "path": "3"}, "2629": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1635], "op": "SWAP1", "path": "3"}, "2630": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1635], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "2635": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1635], "op": "SWAP1", "path": "3"}, "2636": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH2", "path": "3", "value": "0xA5D"}, "2639": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "SWAP1", "path": "3"}, "2640": {"fn": "SimpleSwap.initiatePool", "offset": [1636, 1646], "op": "CALLER", "path": "3"}, "2641": {"fn": "SimpleSwap.initiatePool", "offset": [1636, 1646], "op": "SWAP1", "path": "3"}, "2642": {"fn": "SimpleSwap.initiatePool", "offset": [1656, 1660], "op": "ADDRESS", "path": "3"}, "2643": {"fn": "SimpleSwap.initiatePool", "offset": [1656, 1660], "op": "SWAP1", "path": "3"}, "2644": {"fn": "SimpleSwap.initiatePool", "offset": [1663, 1681], "op": "DUP9", "path": "3"}, "2645": {"fn": "SimpleSwap.initiatePool", "offset": [1663, 1681], "op": "SWAP1", "path": "3"}, "2646": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x4"}, "2648": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ADD", "path": "3"}, "2649": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH2", "path": "3", "value": "0xDC2"}, "2652": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1618, 1682], "op": "JUMP", "path": "3"}, "2653": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "JUMPDEST", "path": "3"}, "2654": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x20"}, "2656": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x40"}, "2658": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "MLOAD", "path": "3"}, "2659": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2660": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP4", "path": "3"}, "2661": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "SUB", "path": "3"}, "2662": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP2", "path": "3"}, "2663": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x0"}, "2665": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP8", "path": "3"}, "2666": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2667": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "EXTCODESIZE", "path": "3"}, "2668": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ISZERO", "path": "3"}, "2669": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2670": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ISZERO", "path": "3"}, "2671": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH2", "path": "3", "value": "0xA77"}, "2674": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "JUMPI", "path": "3"}, "2675": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x0"}, "2677": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2678": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "REVERT", "path": "3"}, "2679": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "JUMPDEST", "path": "3"}, "2680": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "POP", "path": "3"}, "2681": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "GAS", "path": "3"}, "2682": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "CALL", "path": "3"}, "2683": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ISZERO", "path": "3"}, "2684": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2685": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ISZERO", "path": "3"}, "2686": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH2", "path": "3", "value": "0xA8B"}, "2689": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "JUMPI", "path": "3"}, "2690": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "RETURNDATASIZE", "path": "3"}, "2691": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x0"}, "2693": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2694": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "RETURNDATACOPY", "path": "3"}, "2695": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "RETURNDATASIZE", "path": "3"}, "2696": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x0"}, "2698": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "REVERT", "path": "3"}, "2699": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "JUMPDEST", "path": "3"}, "2700": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "POP", "path": "3"}, "2701": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "POP", "path": "3"}, "2702": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "POP", "path": "3"}, "2703": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "POP", "path": "3"}, "2704": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x40"}, "2706": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "MLOAD", "path": "3"}, "2707": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "RETURNDATASIZE", "path": "3"}, "2708": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2710": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "NOT", "path": "3"}, "2711": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2713": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP3", "path": "3"}, "2714": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ADD", "path": "3"}, "2715": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "AND", "path": "3"}, "2716": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP3", "path": "3"}, "2717": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ADD", "path": "3"}, "2718": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2719": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x40"}, "2721": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "MSTORE", "path": "3"}, "2722": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "POP", "path": "3"}, "2723": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP2", "path": "3"}, "2724": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ADD", "path": "3"}, "2725": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "SWAP1", "path": "3"}, "2726": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH2", "path": "3", "value": "0xAAF"}, "2729": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "SWAP2", "path": "3"}, "2730": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "SWAP1", "path": "3"}, "2731": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH2", "path": "3", "value": "0xD1A"}, "2734": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1618, 1682], "op": "JUMP", "path": "3"}, "2735": {"branch": 65, "fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "JUMPDEST", "path": "3"}, "2736": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "PUSH2", "path": "3", "value": "0xACB"}, "2739": {"branch": 65, "fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "JUMPI", "path": "3"}, "2740": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "PUSH1", "path": "3", "value": "0x40"}, "2742": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "MLOAD", "path": "3"}, "2743": {"op": "PUSH3", "value": "0x461BCD"}, "2747": {"op": "PUSH1", "value": "0xE5"}, "2749": {"op": "SHL"}, "2750": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "DUP2", "path": "3"}, "2751": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "MSTORE", "path": "3"}, "2752": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "PUSH1", "path": "3", "value": "0x4"}, "2754": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "ADD", "path": "3"}, "2755": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "2758": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "SWAP1", "path": "3"}, "2759": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "PUSH2", "path": "3", "value": "0xECE"}, "2762": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1610, 1708], "op": "JUMP", "path": "3"}, "2763": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "JUMPDEST", "path": "3"}, "2764": {"fn": "SimpleSwap.initiatePool", "offset": [1740, 1758], "op": "PUSH1", "path": "3", "statement": 37, "value": "0x3"}, "2766": {"fn": "SimpleSwap.initiatePool", "offset": [1740, 1758], "op": "SLOAD", "path": "3"}, "2767": {"fn": "SimpleSwap.initiatePool", "offset": [1740, 1782], "op": "PUSH2", "path": "3", "value": "0xAD8"}, "2770": {"fn": "SimpleSwap.initiatePool", "offset": [1740, 1782], "op": "SWAP1", "path": "3"}, "2771": {"fn": "SimpleSwap.initiatePool", "offset": [1763, 1781], "op": "DUP6", "path": "3"}, "2772": {"fn": "SimpleSwap.initiatePool", "offset": [1740, 1762], "op": "PUSH2", "path": "3", "value": "0xBBC"}, "2775": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1740, 1782], "op": "JUMP", "path": "3"}, "2776": {"fn": "SimpleSwap.initiatePool", "offset": [1740, 1782], "op": "JUMPDEST", "path": "3"}, "2777": {"fn": "SimpleSwap.initiatePool", "offset": [1719, 1737], "op": "PUSH1", "path": "3", "value": "0x3"}, "2779": {"fn": "SimpleSwap.initiatePool", "offset": [1719, 1782], "op": "SSTORE", "path": "3"}, "2780": {"fn": "SimpleSwap.initiatePool", "offset": [1813, 1831], "op": "PUSH1", "path": "3", "statement": 38, "value": "0x4"}, "2782": {"fn": "SimpleSwap.initiatePool", "offset": [1813, 1831], "op": "SLOAD", "path": "3"}, "2783": {"fn": "SimpleSwap.initiatePool", "offset": [1813, 1855], "op": "PUSH2", "path": "3", "value": "0xAE8"}, "2786": {"fn": "SimpleSwap.initiatePool", "offset": [1813, 1855], "op": "SWAP1", "path": "3"}, "2787": {"fn": "SimpleSwap.initiatePool", "offset": [1836, 1854], "op": "DUP5", "path": "3"}, "2788": {"fn": "SimpleSwap.initiatePool", "offset": [1813, 1835], "op": "PUSH2", "path": "3", "value": "0xBBC"}, "2791": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1813, 1855], "op": "JUMP", "path": "3"}, "2792": {"fn": "SimpleSwap.initiatePool", "offset": [1813, 1855], "op": "JUMPDEST", "path": "3"}, "2793": {"fn": "SimpleSwap.initiatePool", "offset": [1792, 1810], "op": "PUSH1", "path": "3", "value": "0x4"}, "2795": {"fn": "SimpleSwap.initiatePool", "offset": [1792, 1855], "op": "SSTORE", "path": "3"}, "2796": {"fn": "SimpleSwap.initiatePool", "offset": [1866, 1879], "op": "PUSH1", "path": "3", "statement": 39, "value": "0x5"}, "2798": {"fn": "SimpleSwap.initiatePool", "offset": [1866, 1900], "op": "DUP4", "path": "3"}, "2799": {"fn": "SimpleSwap.initiatePool", "offset": [1866, 1900], "op": "SWAP1", "path": "3"}, "2800": {"fn": "SimpleSwap.initiatePool", "offset": [1866, 1900], "op": "SSTORE", "path": "3"}, "2801": {"fn": "SimpleSwap.initiatePool", "offset": [1967, 1977], "op": "CALLER", "path": "3", "statement": 40}, "2802": {"op": "PUSH1", "value": "0x0"}, "2804": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "SWAP1", "path": "3"}, "2805": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "DUP2", "path": "3"}, "2806": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "MSTORE", "path": "3"}, "2807": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1966], "op": "PUSH1", "path": "3", "value": "0x8"}, "2809": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "PUSH1", "path": "3", "value": "0x20"}, "2811": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "MSTORE", "path": "3"}, "2812": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "PUSH1", "path": "3", "value": "0x40"}, "2814": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "SWAP1", "path": "3"}, "2815": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "KECCAK256", "path": "3"}, "2816": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "SLOAD", "path": "3"}, "2817": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1997], "op": "PUSH2", "path": "3", "value": "0xB0A"}, "2820": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1997], "op": "SWAP1", "path": "3"}, "2821": {"fn": "SimpleSwap.initiatePool", "offset": [1882, 1900], "op": "DUP5", "path": "3"}, "2822": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1982], "op": "PUSH2", "path": "3", "value": "0xBBC"}, "2825": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1946, 1997], "op": "JUMP", "path": "3"}, "2826": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1997], "op": "JUMPDEST", "path": "3"}, "2827": {"fn": "SimpleSwap.initiatePool", "offset": [1932, 1942], "op": "CALLER", "path": "3"}, "2828": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "PUSH1", "path": "3", "value": "0x0"}, "2830": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "SWAP1", "path": "3"}, "2831": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "DUP2", "path": "3"}, "2832": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "MSTORE", "path": "3"}, "2833": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1931], "op": "PUSH1", "path": "3", "value": "0x8"}, "2835": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "PUSH1", "path": "3", "value": "0x20"}, "2837": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "MSTORE", "path": "3"}, "2838": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "PUSH1", "path": "3", "value": "0x40"}, "2840": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "SWAP1", "path": "3"}, "2841": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "KECCAK256", "path": "3"}, "2842": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1997], "op": "SSTORE", "path": "3"}, "2843": {"op": "POP"}, "2844": {"op": "POP"}, "2845": {"op": "POP"}, "2846": {"op": "POP"}, "2847": {"fn": "SimpleSwap.initiatePool", "jump": "o", "offset": [1201, 2004], "op": "JUMP", "path": "3"}, "2848": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "JUMPDEST", "path": "0"}, "2849": {"offset": [1196, 1208], "op": "PUSH2", "path": "0", "value": "0xB28"}, "2852": {"offset": [1196, 1206], "op": "PUSH2", "path": "0", "value": "0xC9F"}, "2855": {"jump": "i", "offset": [1196, 1208], "op": "JUMP", "path": "0"}, "2856": {"fn": "Ownable.transferOwnership", "offset": [1196, 1208], "op": "JUMPDEST", "path": "0"}, "2857": {"op": "PUSH1", "value": "0x1"}, "2859": {"op": "PUSH1", "value": "0x1"}, "2861": {"op": "PUSH1", "value": "0xA0"}, "2863": {"op": "SHL"}, "2864": {"op": "SUB"}, "2865": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2866": {"offset": [1185, 1192], "op": "PUSH2", "path": "0", "value": "0xB39"}, "2869": {"offset": [1185, 1190], "op": "PUSH2", "path": "0", "value": "0x8F6"}, "2872": {"jump": "i", "offset": [1185, 1192], "op": "JUMP", "path": "0"}, "2873": {"fn": "Ownable.transferOwnership", "offset": [1185, 1192], "op": "JUMPDEST", "path": "0"}, "2874": {"op": "PUSH1", "value": "0x1"}, "2876": {"op": "PUSH1", "value": "0x1"}, "2878": {"op": "PUSH1", "value": "0xA0"}, "2880": {"op": "SHL"}, "2881": {"op": "SUB"}, "2882": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2883": {"branch": 66, "fn": "Ownable.transferOwnership", "offset": [1185, 1208], "op": "EQ", "path": "0"}, "2884": {"offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0xB5F"}, "2887": {"branch": 66, "offset": [1177, 1245], "op": "JUMPI", "path": "0"}, "2888": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x40"}, "2890": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "MLOAD", "path": "0"}, "2891": {"op": "PUSH3", "value": "0x461BCD"}, "2895": {"op": "PUSH1", "value": "0xE5"}, "2897": {"op": "SHL"}, "2898": {"offset": [1177, 1245], "op": "DUP2", "path": "0"}, "2899": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "MSTORE", "path": "0"}, "2900": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x4"}, "2902": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "ADD", "path": "0"}, "2903": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1A5"}, "2906": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "SWAP1", "path": "0"}, "2907": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1075"}, "2910": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [1177, 1245], "op": "JUMP", "path": "0"}, "2911": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "JUMPDEST", "path": "0"}, "2912": {"op": "PUSH1", "value": "0x1"}, "2914": {"op": "PUSH1", "value": "0x1"}, "2916": {"op": "PUSH1", "value": "0xA0"}, "2918": {"op": "SHL"}, "2919": {"op": "SUB"}, "2920": {"fn": "Ownable.transferOwnership", "offset": [1934, 1956], "op": "DUP2", "path": "0", "statement": 41}, "2921": {"branch": 67, "fn": "Ownable.transferOwnership", "offset": [1934, 1956], "op": "AND", "path": "0"}, "2922": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH2", "path": "0", "value": "0xB85"}, "2925": {"branch": 67, "fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "JUMPI", "path": "0"}, "2926": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH1", "path": "0", "value": "0x40"}, "2928": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "MLOAD", "path": "0"}, "2929": {"op": "PUSH3", "value": "0x461BCD"}, "2933": {"op": "PUSH1", "value": "0xE5"}, "2935": {"op": "SHL"}, "2936": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "DUP2", "path": "0"}, "2937": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "MSTORE", "path": "0"}, "2938": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH1", "path": "0", "value": "0x4"}, "2940": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "ADD", "path": "0"}, "2941": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH2", "path": "0", "value": "0x1A5"}, "2944": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "SWAP1", "path": "0"}, "2945": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH2", "path": "0", "value": "0xE53"}, "2948": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [1926, 1999], "op": "JUMP", "path": "0"}, "2949": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "JUMPDEST", "path": "0"}, "2950": {"fn": "Ownable.transferOwnership", "offset": [2009, 2028], "op": "PUSH2", "path": "0", "statement": 42, "value": "0xB8E"}, "2953": {"fn": "Ownable.transferOwnership", "offset": [2019, 2027], "op": "DUP2", "path": "0"}, "2954": {"fn": "Ownable.transferOwnership", "offset": [2009, 2018], "op": "PUSH2", "path": "0", "value": "0xCA3"}, "2957": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [2009, 2028], "op": "JUMP", "path": "0"}, "2958": {"fn": "Ownable.transferOwnership", "offset": [2009, 2028], "op": "JUMPDEST", "path": "0"}, "2959": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "POP", "path": "0"}, "2960": {"fn": "Ownable.transferOwnership", "jump": "o", "offset": [1846, 2035], "op": "JUMP", "path": "0"}, "2961": {"fn": "SafeMath.mul", "offset": [3382, 3478], "op": "JUMPDEST", "path": "2"}, "2962": {"fn": "SafeMath.mul", "offset": [3440, 3447], "op": "PUSH1", "path": "2", "value": "0x0"}, "2964": {"fn": "SafeMath.mul", "offset": [3466, 3471], "op": "PUSH2", "path": "2", "statement": 43, "value": "0xB9D"}, "2967": {"fn": "SafeMath.mul", "offset": [3470, 3471], "op": "DUP3", "path": "2"}, "2968": {"fn": "SafeMath.mul", "offset": [3466, 3467], "op": "DUP5", "path": "2"}, "2969": {"fn": "SafeMath.mul", "offset": [3466, 3471], "op": "PUSH2", "path": "2", "value": "0x11F5"}, "2972": {"fn": "SafeMath.mul", "jump": "i", "offset": [3466, 3471], "op": "JUMP", "path": "2"}, "2973": {"fn": "SafeMath.mul", "offset": [3466, 3471], "op": "JUMPDEST", "path": "2"}, "2974": {"fn": "SafeMath.mul", "offset": [3459, 3471], "op": "SWAP4", "path": "2"}, "2975": {"fn": "SafeMath.mul", "offset": [3382, 3478], "op": "SWAP3", "path": "2"}, "2976": {"op": "POP"}, "2977": {"op": "POP"}, "2978": {"op": "POP"}, "2979": {"fn": "SafeMath.mul", "jump": "o", "offset": [3382, 3478], "op": "JUMP", "path": "2"}, "2980": {"fn": "SafeMath.div", "offset": [3767, 3863], "op": "JUMPDEST", "path": "2"}, "2981": {"fn": "SafeMath.div", "offset": [3825, 3832], "op": "PUSH1", "path": "2", "value": "0x0"}, "2983": {"fn": "SafeMath.div", "offset": [3851, 3856], "op": "PUSH2", "path": "2", "statement": 44, "value": "0xB9D"}, "2986": {"fn": "SafeMath.div", "offset": [3855, 3856], "op": "DUP3", "path": "2"}, "2987": {"fn": "SafeMath.div", "offset": [3851, 3852], "op": "DUP5", "path": "2"}, "2988": {"fn": "SafeMath.div", "offset": [3851, 3856], "op": "PUSH2", "path": "2", "value": "0x11D5"}, "2991": {"fn": "SafeMath.div", "jump": "i", "offset": [3851, 3856], "op": "JUMP", "path": "2"}, "2992": {"fn": "SafeMath.sub", "offset": [3039, 3135], "op": "JUMPDEST", "path": "2"}, "2993": {"fn": "SafeMath.sub", "offset": [3097, 3104], "op": "PUSH1", "path": "2", "value": "0x0"}, "2995": {"fn": "SafeMath.sub", "offset": [3123, 3128], "op": "PUSH2", "path": "2", "statement": 45, "value": "0xB9D"}, "2998": {"fn": "SafeMath.sub", "offset": [3127, 3128], "op": "DUP3", "path": "2"}, "2999": {"fn": "SafeMath.sub", "offset": [3123, 3124], "op": "DUP5", "path": "2"}, "3000": {"fn": "SafeMath.sub", "offset": [3123, 3128], "op": "PUSH2", "path": "2", "value": "0x1214"}, "3003": {"fn": "SafeMath.sub", "jump": "i", "offset": [3123, 3128], "op": "JUMP", "path": "2"}, "3004": {"fn": "SafeMath.add", "offset": [2672, 2768], "op": "JUMPDEST", "path": "2"}, "3005": {"fn": "SafeMath.add", "offset": [2730, 2737], "op": "PUSH1", "path": "2", "value": "0x0"}, "3007": {"fn": "SafeMath.add", "offset": [2756, 2761], "op": "PUSH2", "path": "2", "statement": 46, "value": "0xB9D"}, "3010": {"fn": "SafeMath.add", "offset": [2760, 2761], "op": "DUP3", "path": "2"}, "3011": {"fn": "SafeMath.add", "offset": [2756, 2757], "op": "DUP5", "path": "2"}, "3012": {"fn": "SafeMath.add", "offset": [2756, 2761], "op": "PUSH2", "path": "2", "value": "0x11BD"}, "3015": {"fn": "SafeMath.add", "jump": "i", "offset": [2756, 2761], "op": "JUMP", "path": "2"}, "3016": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5862, 6425], "op": "JUMPDEST", "path": "3"}, "3017": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5963, 5970], "op": "PUSH1", "path": "3", "value": "0x0"}, "3019": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5963, 5970], "op": "DUP1", "path": "3"}, "3020": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5963, 5970], "op": "DUP1", "path": "3"}, "3021": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6011], "op": "DUP4", "path": "3"}, "3022": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "PUSH1", "path": "3", "value": "0x1"}, "3024": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "DUP2", "path": "3"}, "3025": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "GT", "path": "3"}, "3026": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "ISZERO", "path": "3"}, "3027": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "PUSH2", "path": "3", "value": "0xBEC"}, "3030": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "JUMPI", "path": "3"}, "3031": {"op": "PUSH4", "value": "0x4E487B71"}, "3036": {"op": "PUSH1", "value": "0xE0"}, "3038": {"op": "SHL"}, "3039": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "PUSH1", "path": "3", "value": "0x0"}, "3041": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "MSTORE", "path": "3"}, "3042": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "PUSH1", "path": "3", "value": "0x21"}, "3044": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "PUSH1", "path": "3", "value": "0x4"}, "3046": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "MSTORE", "path": "3"}, "3047": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "PUSH1", "path": "3", "value": "0x24"}, "3049": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "PUSH1", "path": "3", "value": "0x0"}, "3051": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "REVERT", "path": "3"}, "3052": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "JUMPDEST", "path": "3"}, "3053": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5999, 6025], "op": "EQ", "path": "3"}, "3054": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5998, 6068], "op": "PUSH2", "path": "3", "value": "0xBF9"}, "3057": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5998, 6068], "op": "JUMPI", "path": "3"}, "3058": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6050, 6068], "op": "PUSH1", "path": "3", "value": "0x3"}, "3060": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6050, 6068], "op": "SLOAD", "path": "3"}, "3061": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5998, 6068], "op": "PUSH2", "path": "3", "value": "0xBFD"}, "3064": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5998, 6068], "op": "JUMP", "path": "3"}, "3065": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5998, 6068], "op": "JUMPDEST", "path": "3"}, "3066": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6029, 6047], "op": "PUSH1", "path": "3", "value": "0x4"}, "3068": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6029, 6047], "op": "SLOAD", "path": "3"}, "3069": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5998, 6068], "op": "JUMPDEST", "path": "3"}, "3070": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5986, 6068], "op": "SWAP1", "path": "3"}, "3071": {"op": "POP"}, "3072": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6078, 6087], "op": "PUSH1", "path": "3", "value": "0x0"}, "3074": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6078, 6087], "op": "DUP1", "path": "3"}, "3075": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6103], "op": "DUP5", "path": "3"}, "3076": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "PUSH1", "path": "3", "value": "0x1"}, "3078": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "DUP2", "path": "3"}, "3079": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "GT", "path": "3"}, "3080": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "ISZERO", "path": "3"}, "3081": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "PUSH2", "path": "3", "value": "0xC22"}, "3084": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "JUMPI", "path": "3"}, "3085": {"op": "PUSH4", "value": "0x4E487B71"}, "3090": {"op": "PUSH1", "value": "0xE0"}, "3092": {"op": "SHL"}, "3093": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "PUSH1", "path": "3", "value": "0x0"}, "3095": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "MSTORE", "path": "3"}, "3096": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "PUSH1", "path": "3", "value": "0x21"}, "3098": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "PUSH1", "path": "3", "value": "0x4"}, "3100": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "MSTORE", "path": "3"}, "3101": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "PUSH1", "path": "3", "value": "0x24"}, "3103": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "PUSH1", "path": "3", "value": "0x0"}, "3105": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "REVERT", "path": "3"}, "3106": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "JUMPDEST", "path": "3"}, "3107": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6091, 6117], "op": "EQ", "path": "3"}, "3108": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6090, 6160], "op": "PUSH2", "path": "3", "value": "0xC2F"}, "3111": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6090, 6160], "op": "JUMPI", "path": "3"}, "3112": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6142, 6160], "op": "PUSH1", "path": "3", "value": "0x4"}, "3114": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6142, 6160], "op": "SLOAD", "path": "3"}, "3115": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6090, 6160], "op": "PUSH2", "path": "3", "value": "0xC33"}, "3118": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6090, 6160], "op": "JUMP", "path": "3"}, "3119": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6090, 6160], "op": "JUMPDEST", "path": "3"}, "3120": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6121, 6139], "op": "PUSH1", "path": "3", "value": "0x3"}, "3122": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6121, 6139], "op": "SLOAD", "path": "3"}, "3123": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6090, 6160], "op": "JUMPDEST", "path": "3"}, "3124": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6078, 6160], "op": "SWAP1", "path": "3"}, "3125": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6078, 6160], "op": "POP", "path": "3"}, "3126": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6171, 6180], "op": "PUSH1", "path": "3", "value": "0x0"}, "3128": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6183, 6225], "op": "PUSH2", "path": "3", "value": "0xC4E"}, "3131": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6206, 6224], "op": "PUSH1", "path": "3", "value": "0x3"}, "3133": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6206, 6224], "op": "SLOAD", "path": "3"}, "3134": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6183, 6201], "op": "PUSH1", "path": "3", "value": "0x4"}, "3136": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6183, 6201], "op": "SLOAD", "path": "3"}, "3137": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6183, 6205], "op": "PUSH2", "path": "3", "value": "0xB91"}, "3140": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6183, 6205], "op": "SWAP1", "path": "3"}, "3141": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6183, 6225], "op": "SWAP2", "path": "3"}, "3142": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6183, 6225], "op": "SWAP1", "path": "3"}, "3143": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6183, 6225], "op": "PUSH4", "path": "3", "value": "0xFFFFFFFF"}, "3148": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6183, 6225], "op": "AND", "path": "3"}, "3149": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6183, 6225], "op": "JUMP", "path": "3"}, "3150": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6183, 6225], "op": "JUMPDEST", "path": "3"}, "3151": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6171, 6225], "op": "SWAP1", "path": "3"}, "3152": {"op": "POP"}, "3153": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6258, 6287], "op": "PUSH1", "path": "3", "value": "0x0"}, "3155": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6290, 6327], "op": "PUSH2", "path": "3", "value": "0xC70"}, "3158": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6296, 6326], "op": "PUSH2", "path": "3", "value": "0xC69"}, "3161": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6302, 6325], "op": "PUSH2", "path": "3", "value": "0xC62"}, "3164": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6302, 6303], "op": "DUP6", "path": "3"}, "3165": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6308, 6324], "op": "DUP11", "path": "3"}, "3166": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6302, 6307], "op": "PUSH2", "path": "3", "value": "0xBBC"}, "3169": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6302, 6325], "op": "JUMP", "path": "3"}, "3170": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6302, 6325], "op": "JUMPDEST", "path": "3"}, "3171": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6296, 6297], "op": "DUP5", "path": "3"}, "3172": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6296, 6297], "op": "SWAP1", "path": "3"}, "3173": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6296, 6301], "op": "PUSH2", "path": "3", "value": "0xBA4"}, "3176": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6296, 6326], "op": "JUMP", "path": "3"}, "3177": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6296, 6326], "op": "JUMPDEST", "path": "3"}, "3178": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6290, 6291], "op": "DUP6", "path": "3"}, "3179": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6290, 6291], "op": "SWAP1", "path": "3"}, "3180": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6290, 6295], "op": "PUSH2", "path": "3", "value": "0xBB0"}, "3183": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6290, 6327], "op": "JUMP", "path": "3"}, "3184": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6290, 6327], "op": "JUMPDEST", "path": "3"}, "3185": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6258, 6327], "op": "SWAP1", "path": "3"}, "3186": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6258, 6327], "op": "POP", "path": "3"}, "3187": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6365, 6418], "op": "PUSH2", "path": "3", "statement": 47, "value": "0xC94"}, "3190": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6410, 6417], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "3194": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6365, 6405], "op": "PUSH2", "path": "3", "value": "0x220"}, "3197": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6401, 6404], "op": "PUSH1", "path": "3", "value": "0x6"}, "3199": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6401, 6404], "op": "SLOAD", "path": "3"}, "3200": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6391, 6398], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "3204": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6391, 6404], "op": "PUSH2", "path": "3", "value": "0xC8D"}, "3207": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6391, 6404], "op": "SWAP2", "path": "3"}, "3208": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6391, 6404], "op": "SWAP1", "path": "3"}, "3209": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6391, 6404], "op": "PUSH2", "path": "3", "value": "0x1214"}, "3212": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6391, 6404], "op": "JUMP", "path": "3"}, "3213": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6391, 6404], "op": "JUMPDEST", "path": "3"}, "3214": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6365, 6386], "op": "DUP5", "path": "3"}, "3215": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6365, 6386], "op": "SWAP1", "path": "3"}, "3216": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6365, 6390], "op": "PUSH2", "path": "3", "value": "0xB91"}, "3219": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6365, 6405], "op": "JUMP", "path": "3"}, "3220": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6365, 6418], "op": "JUMPDEST", "path": "3"}, "3221": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6358, 6418], "op": "SWAP8", "path": "3"}, "3222": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5862, 6425], "op": "SWAP7", "path": "3"}, "3223": {"op": "POP"}, "3224": {"op": "POP"}, "3225": {"op": "POP"}, "3226": {"op": "POP"}, "3227": {"op": "POP"}, "3228": {"op": "POP"}, "3229": {"op": "POP"}, "3230": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "o", "offset": [5862, 6425], "op": "JUMP", "path": "3"}, "3231": {"fn": "Context._msgSender", "offset": [586, 682], "op": "JUMPDEST", "path": "1"}, "3232": {"fn": "Context._msgSender", "offset": [665, 675], "op": "CALLER", "path": "1", "statement": 48}, "3233": {"fn": "Context._msgSender", "offset": [586, 682], "op": "SWAP1", "path": "1"}, "3234": {"fn": "Context._msgSender", "jump": "o", "offset": [586, 682], "op": "JUMP", "path": "1"}, "3235": {"fn": "Ownable._setOwner", "offset": [2041, 2210], "op": "JUMPDEST", "path": "0"}, "3236": {"fn": "Ownable._setOwner", "offset": [2096, 2112], "op": "PUSH1", "path": "0", "value": "0x0"}, "3238": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "DUP1", "path": "0"}, "3239": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SLOAD", "path": "0"}, "3240": {"op": "PUSH1", "value": "0x1"}, "3242": {"op": "PUSH1", "value": "0x1"}, "3244": {"op": "PUSH1", "value": "0xA0"}, "3246": {"op": "SHL"}, "3247": {"op": "SUB"}, "3248": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP4", "path": "0", "statement": 49}, "3249": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP2", "path": "0"}, "3250": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "AND", "path": "0"}, "3251": {"op": "PUSH1", "value": "0x1"}, "3253": {"op": "PUSH1", "value": "0x1"}, "3255": {"op": "PUSH1", "value": "0xA0"}, "3257": {"op": "SHL"}, "3258": {"op": "SUB"}, "3259": {"op": "NOT"}, "3260": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP4", "path": "0"}, "3261": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "AND", "path": "0"}, "3262": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP2", "path": "0"}, "3263": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "OR", "path": "0"}, "3264": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP5", "path": "0"}, "3265": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "SSTORE", "path": "0"}, "3266": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "PUSH1", "path": "0", "statement": 50, "value": "0x40"}, "3268": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "MLOAD", "path": "0"}, "3269": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP2", "path": "0"}, "3270": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP1", "path": "0"}, "3271": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP3", "path": "0"}, "3272": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "AND", "path": "0"}, "3273": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP3", "path": "0"}, "3274": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "DUP4", "path": "0"}, "3275": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP2", "path": "0"}, "3276": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "PUSH32", "path": "0", "value": "0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0"}, "3309": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "SWAP2", "path": "0"}, "3310": {"fn": "Ownable._setOwner", "offset": [2096, 2112], "op": "SWAP1", "path": "0"}, "3311": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "LOG3", "path": "0"}, "3312": {"fn": "Ownable._setOwner", "offset": [2041, 2210], "op": "POP", "path": "0"}, "3313": {"fn": "Ownable._setOwner", "offset": [2041, 2210], "op": "POP", "path": "0"}, "3314": {"fn": "Ownable._setOwner", "jump": "o", "offset": [2041, 2210], "op": "JUMP", "path": "0"}, "3315": {"op": "JUMPDEST"}, "3316": {"op": "PUSH1", "value": "0x0"}, "3318": {"op": "PUSH1", "value": "0x20"}, "3320": {"op": "DUP3"}, "3321": {"op": "DUP5"}, "3322": {"op": "SUB"}, "3323": {"op": "SLT"}, "3324": {"op": "ISZERO"}, "3325": {"op": "PUSH2", "value": "0xD04"}, "3328": {"op": "JUMPI"}, "3329": {"op": "DUP1"}, "3330": {"op": "DUP2"}, "3331": {"op": "REVERT"}, "3332": {"op": "JUMPDEST"}, "3333": {"op": "DUP2"}, "3334": {"op": "CALLDATALOAD"}, "3335": {"op": "PUSH1", "value": "0x1"}, "3337": {"op": "PUSH1", "value": "0x1"}, "3339": {"op": "PUSH1", "value": "0xA0"}, "3341": {"op": "SHL"}, "3342": {"op": "SUB"}, "3343": {"op": "DUP2"}, "3344": {"op": "AND"}, "3345": {"op": "DUP2"}, "3346": {"op": "EQ"}, "3347": {"op": "PUSH2", "value": "0xB9D"}, "3350": {"op": "JUMPI"}, "3351": {"op": "DUP2"}, "3352": {"op": "DUP3"}, "3353": {"op": "REVERT"}, "3354": {"op": "JUMPDEST"}, "3355": {"op": "PUSH1", "value": "0x0"}, "3357": {"op": "PUSH1", "value": "0x20"}, "3359": {"op": "DUP3"}, "3360": {"op": "DUP5"}, "3361": {"op": "SUB"}, "3362": {"op": "SLT"}, "3363": {"op": "ISZERO"}, "3364": {"op": "PUSH2", "value": "0xD2B"}, "3367": {"op": "JUMPI"}, "3368": {"op": "DUP1"}, "3369": {"op": "DUP2"}, "3370": {"op": "REVERT"}, "3371": {"op": "JUMPDEST"}, "3372": {"op": "DUP2"}, "3373": {"op": "MLOAD"}, "3374": {"op": "DUP1"}, "3375": {"op": "ISZERO"}, "3376": {"op": "ISZERO"}, "3377": {"op": "DUP2"}, "3378": {"op": "EQ"}, "3379": {"op": "PUSH2", "value": "0xB9D"}, "3382": {"op": "JUMPI"}, "3383": {"op": "DUP2"}, "3384": {"op": "DUP3"}, "3385": {"op": "REVERT"}, "3386": {"op": "JUMPDEST"}, "3387": {"op": "PUSH1", "value": "0x0"}, "3389": {"op": "PUSH1", "value": "0x20"}, "3391": {"op": "DUP3"}, "3392": {"op": "DUP5"}, "3393": {"op": "SUB"}, "3394": {"op": "SLT"}, "3395": {"op": "ISZERO"}, "3396": {"op": "PUSH2", "value": "0xD4B"}, "3399": {"op": "JUMPI"}, "3400": {"op": "DUP1"}, "3401": {"op": "DUP2"}, "3402": {"op": "REVERT"}, "3403": {"op": "JUMPDEST"}, "3404": {"op": "POP"}, "3405": {"op": "CALLDATALOAD"}, "3406": {"op": "SWAP2"}, "3407": {"op": "SWAP1"}, "3408": {"op": "POP"}, "3409": {"jump": "o", "op": "JUMP"}, "3410": {"op": "JUMPDEST"}, "3411": {"op": "PUSH1", "value": "0x0"}, "3413": {"op": "DUP1"}, "3414": {"op": "PUSH1", "value": "0x40"}, "3416": {"op": "DUP4"}, "3417": {"op": "DUP6"}, "3418": {"op": "SUB"}, "3419": {"op": "SLT"}, "3420": {"op": "ISZERO"}, "3421": {"op": "PUSH2", "value": "0xD64"}, "3424": {"op": "JUMPI"}, "3425": {"op": "DUP1"}, "3426": {"op": "DUP2"}, "3427": {"op": "REVERT"}, "3428": {"op": "JUMPDEST"}, "3429": {"op": "POP"}, "3430": {"op": "POP"}, "3431": {"op": "DUP1"}, "3432": {"op": "CALLDATALOAD"}, "3433": {"op": "SWAP3"}, "3434": {"op": "PUSH1", "value": "0x20"}, "3436": {"op": "SWAP1"}, "3437": {"op": "SWAP2"}, "3438": {"op": "ADD"}, "3439": {"op": "CALLDATALOAD"}, "3440": {"op": "SWAP2"}, "3441": {"op": "POP"}, "3442": {"jump": "o", "op": "JUMP"}, "3443": {"op": "JUMPDEST"}, "3444": {"op": "PUSH1", "value": "0x0"}, "3446": {"op": "DUP1"}, "3447": {"op": "PUSH1", "value": "0x0"}, "3449": {"op": "PUSH1", "value": "0x60"}, "3451": {"op": "DUP5"}, "3452": {"op": "DUP7"}, "3453": {"op": "SUB"}, "3454": {"op": "SLT"}, "3455": {"op": "ISZERO"}, "3456": {"op": "PUSH2", "value": "0xD87"}, "3459": {"op": "JUMPI"}, "3460": {"op": "DUP1"}, "3461": {"op": "DUP2"}, "3462": {"op": "REVERT"}, "3463": {"op": "JUMPDEST"}, "3464": {"op": "DUP4"}, "3465": {"op": "CALLDATALOAD"}, "3466": {"op": "SWAP3"}, "3467": {"op": "POP"}, "3468": {"op": "PUSH1", "value": "0x20"}, "3470": {"op": "DUP5"}, "3471": {"op": "ADD"}, "3472": {"op": "CALLDATALOAD"}, "3473": {"op": "SWAP2"}, "3474": {"op": "POP"}, "3475": {"op": "PUSH1", "value": "0x40"}, "3477": {"op": "DUP5"}, "3478": {"op": "ADD"}, "3479": {"op": "CALLDATALOAD"}, "3480": {"op": "PUSH1", "value": "0x2"}, "3482": {"op": "DUP2"}, "3483": {"op": "LT"}, "3484": {"op": "PUSH2", "value": "0xDA3"}, "3487": {"op": "JUMPI"}, "3488": {"op": "DUP2"}, "3489": {"op": "DUP3"}, "3490": {"op": "REVERT"}, "3491": {"op": "JUMPDEST"}, "3492": {"op": "DUP1"}, "3493": {"op": "SWAP2"}, "3494": {"op": "POP"}, "3495": {"op": "POP"}, "3496": {"op": "SWAP3"}, "3497": {"op": "POP"}, "3498": {"op": "SWAP3"}, "3499": {"op": "POP"}, "3500": {"op": "SWAP3"}, "3501": {"jump": "o", "op": "JUMP"}, "3502": {"op": "JUMPDEST"}, "3503": {"op": "PUSH1", "value": "0x1"}, "3505": {"op": "PUSH1", "value": "0x1"}, "3507": {"op": "PUSH1", "value": "0xA0"}, "3509": {"op": "SHL"}, "3510": {"op": "SUB"}, "3511": {"op": "SWAP2"}, "3512": {"op": "SWAP1"}, "3513": {"op": "SWAP2"}, "3514": {"op": "AND"}, "3515": {"op": "DUP2"}, "3516": {"op": "MSTORE"}, "3517": {"op": "PUSH1", "value": "0x20"}, "3519": {"op": "ADD"}, "3520": {"op": "SWAP1"}, "3521": {"jump": "o", "op": "JUMP"}, "3522": {"op": "JUMPDEST"}, "3523": {"op": "PUSH1", "value": "0x1"}, "3525": {"op": "PUSH1", "value": "0x1"}, "3527": {"op": "PUSH1", "value": "0xA0"}, "3529": {"op": "SHL"}, "3530": {"op": "SUB"}, "3531": {"op": "SWAP4"}, "3532": {"op": "DUP5"}, "3533": {"op": "AND"}, "3534": {"op": "DUP2"}, "3535": {"op": "MSTORE"}, "3536": {"op": "SWAP2"}, "3537": {"op": "SWAP1"}, "3538": {"op": "SWAP3"}, "3539": {"op": "AND"}, "3540": {"op": "PUSH1", "value": "0x20"}, "3542": {"op": "DUP3"}, "3543": {"op": "ADD"}, "3544": {"op": "MSTORE"}, "3545": {"op": "PUSH1", "value": "0x40"}, "3547": {"op": "DUP2"}, "3548": {"op": "ADD"}, "3549": {"op": "SWAP2"}, "3550": {"op": "SWAP1"}, "3551": {"op": "SWAP2"}, "3552": {"op": "MSTORE"}, "3553": {"op": "PUSH1", "value": "0x60"}, "3555": {"op": "ADD"}, "3556": {"op": "SWAP1"}, "3557": {"jump": "o", "op": "JUMP"}, "3558": {"op": "JUMPDEST"}, "3559": {"op": "PUSH1", "value": "0x1"}, "3561": {"op": "PUSH1", "value": "0x1"}, "3563": {"op": "PUSH1", "value": "0xA0"}, "3565": {"op": "SHL"}, "3566": {"op": "SUB"}, "3567": {"op": "SWAP3"}, "3568": {"op": "SWAP1"}, "3569": {"op": "SWAP3"}, "3570": {"op": "AND"}, "3571": {"op": "DUP3"}, "3572": {"op": "MSTORE"}, "3573": {"op": "PUSH1", "value": "0x20"}, "3575": {"op": "DUP3"}, "3576": {"op": "ADD"}, "3577": {"op": "MSTORE"}, "3578": {"op": "PUSH1", "value": "0x40"}, "3580": {"op": "ADD"}, "3581": {"op": "SWAP1"}, "3582": {"jump": "o", "op": "JUMP"}, "3583": {"op": "JUMPDEST"}, "3584": {"op": "PUSH1", "value": "0x20"}, "3586": {"op": "DUP1"}, "3587": {"op": "DUP3"}, "3588": {"op": "MSTORE"}, "3589": {"op": "PUSH1", "value": "0x34"}, "3591": {"op": "SWAP1"}, "3592": {"op": "DUP3"}, "3593": {"op": "ADD"}, "3594": {"op": "MSTORE"}, "3595": {"op": "PUSH32", "value": "0x54686520616D6F756E7420746F2073656C6C2073686F756C6420626520737472"}, "3628": {"op": "PUSH1", "value": "0x40"}, "3630": {"op": "DUP3"}, "3631": {"op": "ADD"}, "3632": {"op": "MSTORE"}, "3633": {"op": "PUSH20", "value": "0x34B1BA363C903134B3B3B2B9103A3430B7101817"}, "3654": {"op": "PUSH1", "value": "0x61"}, "3656": {"op": "SHL"}, "3657": {"op": "PUSH1", "value": "0x60"}, "3659": {"op": "DUP3"}, "3660": {"op": "ADD"}, "3661": {"op": "MSTORE"}, "3662": {"op": "PUSH1", "value": "0x80"}, "3664": {"op": "ADD"}, "3665": {"op": "SWAP1"}, "3666": {"jump": "o", "op": "JUMP"}, "3667": {"op": "JUMPDEST"}, "3668": {"op": "PUSH1", "value": "0x20"}, "3670": {"op": "DUP1"}, "3671": {"op": "DUP3"}, "3672": {"op": "MSTORE"}, "3673": {"op": "PUSH1", "value": "0x26"}, "3675": {"op": "SWAP1"}, "3676": {"op": "DUP3"}, "3677": {"op": "ADD"}, "3678": {"op": "MSTORE"}, "3679": {"op": "PUSH32", "value": "0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061"}, "3712": {"op": "PUSH1", "value": "0x40"}, "3714": {"op": "DUP3"}, "3715": {"op": "ADD"}, "3716": {"op": "MSTORE"}, "3717": {"op": "PUSH6", "value": "0x646472657373"}, "3724": {"op": "PUSH1", "value": "0xD0"}, "3726": {"op": "SHL"}, "3727": {"op": "PUSH1", "value": "0x60"}, "3729": {"op": "DUP3"}, "3730": {"op": "ADD"}, "3731": {"op": "MSTORE"}, "3732": {"op": "PUSH1", "value": "0x80"}, "3734": {"op": "ADD"}, "3735": {"op": "SWAP1"}, "3736": {"jump": "o", "op": "JUMP"}, "3737": {"op": "JUMPDEST"}, "3738": {"op": "PUSH1", "value": "0x20"}, "3740": {"op": "DUP1"}, "3741": {"op": "DUP3"}, "3742": {"op": "MSTORE"}, "3743": {"op": "DUP2"}, "3744": {"op": "DUP2"}, "3745": {"op": "ADD"}, "3746": {"op": "MSTORE"}, "3747": {"op": "PUSH32", "value": "0x596F7520646F6E2774206861766520656E6F756768206C7020746F6B656E732E"}, "3780": {"op": "PUSH1", "value": "0x40"}, "3782": {"op": "DUP3"}, "3783": {"op": "ADD"}, "3784": {"op": "MSTORE"}, "3785": {"op": "PUSH1", "value": "0x60"}, "3787": {"op": "ADD"}, "3788": {"op": "SWAP1"}, "3789": {"jump": "o", "op": "JUMP"}, "3790": {"op": "JUMPDEST"}, "3791": {"op": "PUSH1", "value": "0x20"}, "3793": {"op": "DUP1"}, "3794": {"op": "DUP3"}, "3795": {"op": "MSTORE"}, "3796": {"op": "PUSH1", "value": "0x15"}, "3798": {"op": "SWAP1"}, "3799": {"op": "DUP3"}, "3800": {"op": "ADD"}, "3801": {"op": "MSTORE"}, "3802": {"op": "PUSH21", "value": "0x2AA9A221903A3930B739B332B9103330B4B632B217"}, "3824": {"op": "PUSH1", "value": "0x59"}, "3826": {"op": "SHL"}, "3827": {"op": "PUSH1", "value": "0x40"}, "3829": {"op": "DUP3"}, "3830": {"op": "ADD"}, "3831": {"op": "MSTORE"}, "3832": {"op": "PUSH1", "value": "0x60"}, "3834": {"op": "ADD"}, "3835": {"op": "SWAP1"}, "3836": {"jump": "o", "op": "JUMP"}, "3837": {"op": "JUMPDEST"}, "3838": {"op": "PUSH1", "value": "0x20"}, "3840": {"op": "DUP1"}, "3841": {"op": "DUP3"}, "3842": {"op": "MSTORE"}, "3843": {"op": "PUSH1", "value": "0x2F"}, "3845": {"op": "SWAP1"}, "3846": {"op": "DUP3"}, "3847": {"op": "ADD"}, "3848": {"op": "MSTORE"}, "3849": {"op": "PUSH32", "value": "0x54686520616D6F756E74206F6620737570706C696564206C7020746F6B656E73"}, "3882": {"op": "PUSH1", "value": "0x40"}, "3884": {"op": "DUP3"}, "3885": {"op": "ADD"}, "3886": {"op": "MSTORE"}, "3887": {"op": "PUSH15", "value": "0x1039B437BAB632103132901F101817"}, "3903": {"op": "PUSH1", "value": "0x89"}, "3905": {"op": "SHL"}, "3906": {"op": "PUSH1", "value": "0x60"}, "3908": {"op": "DUP3"}, "3909": {"op": "ADD"}, "3910": {"op": "MSTORE"}, "3911": {"op": "PUSH1", "value": "0x80"}, "3913": {"op": "ADD"}, "3914": {"op": "SWAP1"}, "3915": {"jump": "o", "op": "JUMP"}, "3916": {"op": "JUMPDEST"}, "3917": {"op": "PUSH1", "value": "0x20"}, "3919": {"op": "DUP1"}, "3920": {"op": "DUP3"}, "3921": {"op": "MSTORE"}, "3922": {"op": "PUSH1", "value": "0x25"}, "3924": {"op": "SWAP1"}, "3925": {"op": "DUP3"}, "3926": {"op": "ADD"}, "3927": {"op": "MSTORE"}, "3928": {"op": "PUSH32", "value": "0x54686520706F6F6C2073686F756C6420626520696E697469616C697A65642066"}, "3961": {"op": "PUSH1", "value": "0x40"}, "3963": {"op": "DUP3"}, "3964": {"op": "ADD"}, "3965": {"op": "MSTORE"}, "3966": {"op": "PUSH5", "value": "0x34B939BA17"}, "3972": {"op": "PUSH1", "value": "0xD9"}, "3974": {"op": "SHL"}, "3975": {"op": "PUSH1", "value": "0x60"}, "3977": {"op": "DUP3"}, "3978": {"op": "ADD"}, "3979": {"op": "MSTORE"}, "3980": {"op": "PUSH1", "value": "0x80"}, "3982": {"op": "ADD"}, "3983": {"op": "SWAP1"}, "3984": {"jump": "o", "op": "JUMP"}, "3985": {"op": "JUMPDEST"}, "3986": {"op": "PUSH1", "value": "0x20"}, "3988": {"op": "DUP1"}, "3989": {"op": "DUP3"}, "3990": {"op": "MSTORE"}, "3991": {"op": "PUSH1", "value": "0x38"}, "3993": {"op": "SWAP1"}, "3994": {"op": "DUP3"}, "3995": {"op": "ADD"}, "3996": {"op": "MSTORE"}, "3997": {"op": "PUSH32", "value": "0x5472616E73666572206F662074686520616D6F756E74206F6620746F6B656E20"}, "4030": {"op": "PUSH1", "value": "0x40"}, "4032": {"op": "DUP3"}, "4033": {"op": "ADD"}, "4034": {"op": "MSTORE"}, "4035": {"op": "PUSH32", "value": "0x796F752077616E7420746F2073656C6C206661696C65642E0000000000000000"}, "4068": {"op": "PUSH1", "value": "0x60"}, "4070": {"op": "DUP3"}, "4071": {"op": "ADD"}, "4072": {"op": "MSTORE"}, "4073": {"op": "PUSH1", "value": "0x80"}, "4075": {"op": "ADD"}, "4076": {"op": "SWAP1"}, "4077": {"jump": "o", "op": "JUMP"}, "4078": {"op": "JUMPDEST"}, "4079": {"op": "PUSH1", "value": "0x20"}, "4081": {"op": "DUP1"}, "4082": {"op": "DUP3"}, "4083": {"op": "MSTORE"}, "4084": {"op": "PUSH1", "value": "0x18"}, "4086": {"op": "SWAP1"}, "4087": {"op": "DUP3"}, "4088": {"op": "ADD"}, "4089": {"op": "MSTORE"}, "4090": {"op": "PUSH32", "value": "0x5472616E73666572206F66204C696E6B206661696C65642E0000000000000000"}, "4123": {"op": "PUSH1", "value": "0x40"}, "4125": {"op": "DUP3"}, "4126": {"op": "ADD"}, "4127": {"op": "MSTORE"}, "4128": {"op": "PUSH1", "value": "0x60"}, "4130": {"op": "ADD"}, "4131": {"op": "SWAP1"}, "4132": {"jump": "o", "op": "JUMP"}, "4133": {"op": "JUMPDEST"}, "4134": {"op": "PUSH1", "value": "0x20"}, "4136": {"op": "DUP1"}, "4137": {"op": "DUP3"}, "4138": {"op": "MSTORE"}, "4139": {"op": "PUSH1", "value": "0x30"}, "4141": {"op": "SWAP1"}, "4142": {"op": "DUP3"}, "4143": {"op": "ADD"}, "4144": {"op": "MSTORE"}, "4145": {"op": "PUSH32", "value": "0x54686520616D6F756E74206F6620726571756573746564206C7020746F6B656E"}, "4178": {"op": "PUSH1", "value": "0x40"}, "4180": {"op": "DUP3"}, "4181": {"op": "ADD"}, "4182": {"op": "MSTORE"}, "4183": {"op": "PUSH16", "value": "0x399039B437BAB632103132901F101817"}, "4200": {"op": "PUSH1", "value": "0x81"}, "4202": {"op": "SHL"}, "4203": {"op": "PUSH1", "value": "0x60"}, "4205": {"op": "DUP3"}, "4206": {"op": "ADD"}, "4207": {"op": "MSTORE"}, "4208": {"op": "PUSH1", "value": "0x80"}, "4210": {"op": "ADD"}, "4211": {"op": "SWAP1"}, "4212": {"jump": "o", "op": "JUMP"}, "4213": {"op": "JUMPDEST"}, "4214": {"op": "PUSH1", "value": "0x20"}, "4216": {"op": "DUP1"}, "4217": {"op": "DUP3"}, "4218": {"op": "MSTORE"}, "4219": {"op": "DUP2"}, "4220": {"op": "DUP2"}, "4221": {"op": "ADD"}, "4222": {"op": "MSTORE"}, "4223": {"op": "PUSH32", "value": "0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572"}, "4256": {"op": "PUSH1", "value": "0x40"}, "4258": {"op": "DUP3"}, "4259": {"op": "ADD"}, "4260": {"op": "MSTORE"}, "4261": {"op": "PUSH1", "value": "0x60"}, "4263": {"op": "ADD"}, "4264": {"op": "SWAP1"}, "4265": {"jump": "o", "op": "JUMP"}, "4266": {"op": "JUMPDEST"}, "4267": {"op": "PUSH1", "value": "0x20"}, "4269": {"op": "DUP1"}, "4270": {"op": "DUP3"}, "4271": {"op": "MSTORE"}, "4272": {"op": "PUSH1", "value": "0x18"}, "4274": {"op": "SWAP1"}, "4275": {"op": "DUP3"}, "4276": {"op": "ADD"}, "4277": {"op": "MSTORE"}, "4278": {"op": "PUSH32", "value": "0x5472616E73666572206F662055534443206661696C65642E0000000000000000"}, "4311": {"op": "PUSH1", "value": "0x40"}, "4313": {"op": "DUP3"}, "4314": {"op": "ADD"}, "4315": {"op": "MSTORE"}, "4316": {"op": "PUSH1", "value": "0x60"}, "4318": {"op": "ADD"}, "4319": {"op": "SWAP1"}, "4320": {"jump": "o", "op": "JUMP"}, "4321": {"op": "JUMPDEST"}, "4322": {"op": "PUSH1", "value": "0x20"}, "4324": {"op": "DUP1"}, "4325": {"op": "DUP3"}, "4326": {"op": "MSTORE"}, "4327": {"op": "PUSH1", "value": "0x35"}, "4329": {"op": "SWAP1"}, "4330": {"op": "DUP3"}, "4331": {"op": "ADD"}, "4332": {"op": "MSTORE"}, "4333": {"op": "PUSH32", "value": "0x54686520616D6F756E74206F662070757263686173656420746F6B656E206973"}, "4366": {"op": "PUSH1", "value": "0x40"}, "4368": {"op": "DUP3"}, "4369": {"op": "ADD"}, "4370": {"op": "MSTORE"}, "4371": {"op": "PUSH21", "value": "0x103637BBB2B9103A3430B7103932B8BAB4B932B217"}, "4393": {"op": "PUSH1", "value": "0x59"}, "4395": {"op": "SHL"}, "4396": {"op": "PUSH1", "value": "0x60"}, "4398": {"op": "DUP3"}, "4399": {"op": "ADD"}, "4400": {"op": "MSTORE"}, "4401": {"op": "PUSH1", "value": "0x80"}, "4403": {"op": "ADD"}, "4404": {"op": "SWAP1"}, "4405": {"jump": "o", "op": "JUMP"}, "4406": {"op": "JUMPDEST"}, "4407": {"op": "PUSH1", "value": "0x20"}, "4409": {"op": "DUP1"}, "4410": {"op": "DUP3"}, "4411": {"op": "MSTORE"}, "4412": {"op": "PUSH1", "value": "0x21"}, "4414": {"op": "SWAP1"}, "4415": {"op": "DUP3"}, "4416": {"op": "ADD"}, "4417": {"op": "MSTORE"}, "4418": {"op": "PUSH32", "value": "0x54686520706F6F6C2077617320616C726561647920696E697469616C697A6564"}, "4451": {"op": "PUSH1", "value": "0x40"}, "4453": {"op": "DUP3"}, "4454": {"op": "ADD"}, "4455": {"op": "MSTORE"}, "4456": {"op": "PUSH1", "value": "0x17"}, "4458": {"op": "PUSH1", "value": "0xF9"}, "4460": {"op": "SHL"}, "4461": {"op": "PUSH1", "value": "0x60"}, "4463": {"op": "DUP3"}, "4464": {"op": "ADD"}, "4465": {"op": "MSTORE"}, "4466": {"op": "PUSH1", "value": "0x80"}, "4468": {"op": "ADD"}, "4469": {"op": "SWAP1"}, "4470": {"jump": "o", "op": "JUMP"}, "4471": {"op": "JUMPDEST"}, "4472": {"op": "PUSH1", "value": "0x20"}, "4474": {"op": "DUP1"}, "4475": {"op": "DUP3"}, "4476": {"op": "MSTORE"}, "4477": {"op": "PUSH1", "value": "0x15"}, "4479": {"op": "SWAP1"}, "4480": {"op": "DUP3"}, "4481": {"op": "ADD"}, "4482": {"op": "MSTORE"}, "4483": {"op": "PUSH21", "value": "0x2634B735903A3930B739B332B9103330B4B632B217"}, "4505": {"op": "PUSH1", "value": "0x59"}, "4507": {"op": "SHL"}, "4508": {"op": "PUSH1", "value": "0x40"}, "4510": {"op": "DUP3"}, "4511": {"op": "ADD"}, "4512": {"op": "MSTORE"}, "4513": {"op": "PUSH1", "value": "0x60"}, "4515": {"op": "ADD"}, "4516": {"op": "SWAP1"}, "4517": {"jump": "o", "op": "JUMP"}, "4518": {"op": "JUMPDEST"}, "4519": {"op": "SWAP1"}, "4520": {"op": "DUP2"}, "4521": {"op": "MSTORE"}, "4522": {"op": "PUSH1", "value": "0x20"}, "4524": {"op": "ADD"}, "4525": {"op": "SWAP1"}, "4526": {"jump": "o", "op": "JUMP"}, "4527": {"op": "JUMPDEST"}, "4528": {"op": "SWAP2"}, "4529": {"op": "DUP3"}, "4530": {"op": "MSTORE"}, "4531": {"op": "PUSH1", "value": "0x20"}, "4533": {"op": "DUP3"}, "4534": {"op": "ADD"}, "4535": {"op": "MSTORE"}, "4536": {"op": "PUSH1", "value": "0x40"}, "4538": {"op": "ADD"}, "4539": {"op": "SWAP1"}, "4540": {"jump": "o", "op": "JUMP"}, "4541": {"op": "JUMPDEST"}, "4542": {"op": "PUSH1", "value": "0x0"}, "4544": {"op": "DUP3"}, "4545": {"op": "NOT"}, "4546": {"op": "DUP3"}, "4547": {"op": "GT"}, "4548": {"op": "ISZERO"}, "4549": {"op": "PUSH2", "value": "0x11D0"}, "4552": {"op": "JUMPI"}, "4553": {"op": "PUSH2", "value": "0x11D0"}, "4556": {"op": "PUSH2", "value": "0x122B"}, "4559": {"jump": "i", "op": "JUMP"}, "4560": {"op": "JUMPDEST"}, "4561": {"op": "POP"}, "4562": {"op": "ADD"}, "4563": {"op": "SWAP1"}, "4564": {"jump": "o", "op": "JUMP"}, "4565": {"op": "JUMPDEST"}, "4566": {"op": "PUSH1", "value": "0x0"}, "4568": {"op": "DUP3"}, "4569": {"op": "PUSH2", "value": "0x11F0"}, "4572": {"op": "JUMPI"}, "4573": {"op": "PUSH4", "value": "0x4E487B71"}, "4578": {"op": "PUSH1", "value": "0xE0"}, "4580": {"op": "SHL"}, "4581": {"op": "DUP2"}, "4582": {"op": "MSTORE"}, "4583": {"op": "PUSH1", "value": "0x12"}, "4585": {"op": "PUSH1", "value": "0x4"}, "4587": {"op": "MSTORE"}, "4588": {"op": "PUSH1", "value": "0x24"}, "4590": {"op": "DUP2"}, "4591": {"op": "REVERT"}, "4592": {"op": "JUMPDEST"}, "4593": {"op": "POP"}, "4594": {"op": "DIV"}, "4595": {"op": "SWAP1"}, "4596": {"jump": "o", "op": "JUMP"}, "4597": {"op": "JUMPDEST"}, "4598": {"op": "PUSH1", "value": "0x0"}, "4600": {"op": "DUP2"}, "4601": {"op": "PUSH1", "value": "0x0"}, "4603": {"op": "NOT"}, "4604": {"op": "DIV"}, "4605": {"op": "DUP4"}, "4606": {"op": "GT"}, "4607": {"op": "DUP3"}, "4608": {"op": "ISZERO"}, "4609": {"op": "ISZERO"}, "4610": {"op": "AND"}, "4611": {"op": "ISZERO"}, "4612": {"op": "PUSH2", "value": "0x120F"}, "4615": {"op": "JUMPI"}, "4616": {"op": "PUSH2", "value": "0x120F"}, "4619": {"op": "PUSH2", "value": "0x122B"}, "4622": {"jump": "i", "op": "JUMP"}, "4623": {"op": "JUMPDEST"}, "4624": {"op": "POP"}, "4625": {"op": "MUL"}, "4626": {"op": "SWAP1"}, "4627": {"jump": "o", "op": "JUMP"}, "4628": {"op": "JUMPDEST"}, "4629": {"op": "PUSH1", "value": "0x0"}, "4631": {"op": "DUP3"}, "4632": {"op": "DUP3"}, "4633": {"op": "LT"}, "4634": {"op": "ISZERO"}, "4635": {"op": "PUSH2", "value": "0x1226"}, "4638": {"op": "JUMPI"}, "4639": {"op": "PUSH2", "value": "0x1226"}, "4642": {"op": "PUSH2", "value": "0x122B"}, "4645": {"jump": "i", "op": "JUMP"}, "4646": {"op": "JUMPDEST"}, "4647": {"op": "POP"}, "4648": {"op": "SUB"}, "4649": {"op": "SWAP1"}, "4650": {"jump": "o", "op": "JUMP"}, "4651": {"op": "JUMPDEST"}, "4652": {"op": "PUSH4", "value": "0x4E487B71"}, "4657": {"op": "PUSH1", "value": "0xE0"}, "4659": {"op": "SHL"}, "4660": {"op": "PUSH1", "value": "0x0"}, "4662": {"op": "MSTORE"}, "4663": {"op": "PUSH1", "value": "0x11"}, "4665": {"op": "PUSH1", "value": "0x4"}, "4667": {"op": "MSTORE"}, "4668": {"op": "PUSH1", "value": "0x24"}, "4670": {"op": "PUSH1", "value": "0x0"}, "4672": {"op": "REVERT"}}, "sha1": "464e31d5c6bc750c287e9b04f20a72a25248fa12", "source": "// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/utils/math/SafeMath.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\ninterface IERC20 {\n    function transfer(address recipient, uint256 amount) external returns (bool);\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n    function approve(address spender, uint256 amount) external returns (bool);\n}\n\n\ncontract SimpleSwap is Ownable {\n    using SafeMath for uint256;\n\n    enum Token{Link, USDC}\n\n    address addressLink = 0xa36085F69e2889c224210F603D836748e7dC0088;   //Kovan address      //0x01BE23585060835E02B77ef475b0Cc51aA1e0709; rinkeby\n    address addressUSDC = 0xb7a4F3E9097C08dA09517b5aB877F7a917224ede;    //Kovan address            //0xeb8f08a975Ab53E34D8a0330E0D34de942C95926; rinkeby\n\n    uint256 public totalAvailableLink = 0;      //18 decimals\n    uint256 public totalAvailableUSDC = 0;      //6 decimals\n\n    uint256  public totalLpTokens = 0;           //6 decimals\n\n    uint256 public FEE = 3 * 10 ** 3;         //6 decimals\n\n    bool isPoolInitialized = false;\n\n    mapping(address => uint256) userToAmountLpTokens;\n\n    function initiatePool(uint256 amountLinkToSupply, uint256 amountUsdcToSupply) public onlyOwner {\n        require(!isPoolInitialized, \"The pool was already initialized.\");\n        isPoolInitialized = true;\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        require(Link.transferFrom(msg.sender, address(this), amountLinkToSupply), \"Link transfer failed.\");\n        require(USDC.transferFrom(msg.sender, address(this), amountUsdcToSupply), \"USDC transfer failed.\");\n\n        totalAvailableLink = totalAvailableLink.add(amountLinkToSupply);\n        totalAvailableUSDC = totalAvailableUSDC.add(amountUsdcToSupply);\n\n        totalLpTokens = amountUsdcToSupply;\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].add(totalLpTokens);\n    }\n\n    function swap(uint256 quantitySoldToken, uint256 minAmountPurchasedToken, Token tokenForSale) public {\n        require(isPoolInitialized, \"The pool should be initialized first.\");\n        require(quantitySoldToken > 0, \"The amount to sell should be strictly bigger than 0.\");\n        uint256 amountPurchasedToken = getAmountPurchasedToken(quantitySoldToken, tokenForSale);\n        require(amountPurchasedToken >= minAmountPurchasedToken, \"The amount of purchased token is lower than required.\");\n\n        IERC20 soldToken;\n        IERC20 boughtToken;\n\n        if (tokenForSale == Token.Link) {\n            totalAvailableLink  = totalAvailableLink.add(quantitySoldToken);\n            totalAvailableUSDC = totalAvailableUSDC.sub(amountPurchasedToken);\n\n            soldToken = IERC20(addressLink);\n            boughtToken = IERC20(addressUSDC);\n        }\n\n        else {\n            totalAvailableLink = totalAvailableLink.sub(amountPurchasedToken);\n            totalAvailableUSDC = totalAvailableUSDC.add(quantitySoldToken);\n\n            soldToken = IERC20(addressUSDC); \n            boughtToken = IERC20(addressLink);\n        }\n        \n        assert(boughtToken.transfer(msg.sender, amountPurchasedToken));\n        require(soldToken.transferFrom(msg.sender, address(this), quantitySoldToken), \"Transfer of the amount of token you want to sell failed.\");\n    }\n\n    function supply(uint256 amountLpTokens) public {\n        require(isPoolInitialized, \"The pool should be initialized first.\");\n        require(amountLpTokens > 0, \"The amount of supplied lp tokens should be > 0.\");\n        (uint256 amountLinkPerLpToken, uint256 amountUsdcPerLpToken) = getLpTokenPrice();\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        uint256 amountLinkToSupply = amountLinkPerLpToken.mul(amountLpTokens).div(10 ** 6); // 18 decimals\n        uint256 amountUSDCToSupply = amountUsdcPerLpToken.mul(amountLpTokens).div(10 ** 6); // 6 decimals\n\n        totalAvailableLink = totalAvailableLink.add(amountLinkToSupply);\n        totalAvailableUSDC = totalAvailableUSDC.add(amountUSDCToSupply);\n\n        totalLpTokens = totalLpTokens.add(amountLpTokens);\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].add(amountLpTokens);\n\n        require(Link.transferFrom(msg.sender, address(this), amountLinkToSupply), \"Transfer of Link failed.\");\n        require(USDC.transferFrom(msg.sender, address(this), amountUSDCToSupply), \"Transfer of USDC failed.\");\n    }\n\n    function withdraw(uint256 amountLpTokens) public {\n        require(isPoolInitialized, \"The pool should be initialized first.\");\n        require(amountLpTokens > 0, \"The amount of requested lp tokens should be > 0.\");\n        require(userToAmountLpTokens[msg.sender] >= amountLpTokens, \"You don't have enough lp tokens.\");\n        (uint256 amountLinkPerLpToken, uint256 amountUSDCPerLpToken)  = getLpTokenPrice();\n\n        uint256 amountLinkToWithdraw = amountLinkPerLpToken.mul(amountLpTokens).div(10 ** 6);\n        uint256 amountUSDCToWithdraw = amountUSDCPerLpToken.mul(amountLpTokens).div(10 ** 6);\n\n        totalAvailableLink = totalAvailableLink.sub(amountLinkToWithdraw);\n        totalAvailableUSDC = totalAvailableUSDC.sub(amountUSDCToWithdraw);\n\n        totalLpTokens = totalLpTokens.sub(amountLpTokens);\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].sub(amountLpTokens);\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        assert(Link.transfer(msg.sender, amountLinkToWithdraw));\n        assert(USDC.transfer(msg.sender, amountUSDCToWithdraw));\n    }\n\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n    // Link - USDC                      // 6 decimals\n    function getAmountPurchasedToken(uint256 amountSoldTokens, Token tokenForSale) internal view returns(uint256)\n    {\n        uint256 y = (tokenForSale == Token.Link) ? totalAvailableUSDC : totalAvailableLink;\n        uint256 x = (tokenForSale == Token.Link) ? totalAvailableLink : totalAvailableUSDC;\n\n        uint256 C = totalAvailableUSDC.mul(totalAvailableLink);         // 24 decimals\n        uint256 amountPurchasedTokens = y.sub(C.div(x.add(amountSoldTokens))); // 6 or 18 decimals\n\n        return amountPurchasedTokens.mul(10 ** 6 - FEE).div(10 ** 6);\n    }\n\n    function getLpTokenPrice() public view returns(uint256, uint256) \n    {\n        return (totalAvailableLink.mul(10 ** 6).div(totalLpTokens), totalAvailableUSDC.mul(10 ** 6).div(totalLpTokens));\n    }\n\n}\n\n\n", "sourceMap": "462:6170:3:-:0;;;560:64;;;-1:-1:-1;;;;;;560:64:3;;;582:42;560:64;;;;707;;;;;;729:42;707:64;;;560;862:37;;;;924;;;;986:33;;1070:11;1049:32;;1109:30;;;-1:-1:-1;;1109:30:3;;;462:6170;;;;;;;;;-1:-1:-1;867:23:0;877:12;:10;:12::i;:::-;867:9;:23::i;:::-;462:6170:3;;586:96:1;665:10;586:96;:::o;2041:169:0:-;2096:16;2115:6;;-1:-1:-1;;;;;2131:17:0;;;-1:-1:-1;;;;;;2131:17:0;;;;;;2163:40;;2115:6;;;;;;;2163:40;;2096:16;2163:40;2041:169;;:::o;462:6170:3:-;;;;;;;", "sourcePath": "contracts/SimpleSwap.sol", "type": "contract", "deployment": {"address": "0xa2AEf78BD851D65cdBD3F14d3Bf814C211a50630", "chainid": "42", "blockHeight": 32717383}}
},{}],3:[function(require,module,exports){
module.exports={
    "serverUrl" : "https://rjfi3tltmxvh.usemoralis.com:2053/server",
    "appId" : "97wagl7iRrfE4SiHD8Y0aR77PrX5Btie0sisKP26"
}
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeAmountLinkToSupply = changeAmountLinkToSupply;
exports.changeAmountUsdcToSupply = changeAmountUsdcToSupply;
exports.changeLinkInput = changeLinkInput;
exports.changeMinAmountReceived = changeMinAmountReceived;
exports.changeUsdcInput = changeUsdcInput;

var _price_functions = require("./price_functions.js");

const NUMBER_DECIMALS = 6;

async function changeUsdcInput(tokenForSale) {
  if (tokenForSale == 0) {
    const amountUsdc = await (0, _price_functions.calculateAmountPurchasedToken)(parseFloat(document.getElementById("link-input").value), tokenForSale);
    document.getElementById("usdc-input").value = amountUsdc.toFixed(NUMBER_DECIMALS);
  } else {
    const amountUsdc = await (0, _price_functions.calculateAmountSoldToken)(parseFloat(document.getElementById("link-input").value), tokenForSale);
    document.getElementById("usdc-input").value = amountUsdc.toFixed(NUMBER_DECIMALS);
  }
}

async function changeLinkInput(tokenForSale) {
  if (tokenForSale == 0) {
    const amountLink = await (0, _price_functions.calculateAmountSoldToken)(parseFloat(document.getElementById("usdc-input").value), tokenForSale);
    document.getElementById("link-input").value = amountLink.toFixed(NUMBER_DECIMALS);
  } else {
    const amountLink = await (0, _price_functions.calculateAmountPurchasedToken)(parseFloat(document.getElementById("usdc-input").value), tokenForSale);
    document.getElementById("link-input").value = amountLink.toFixed(NUMBER_DECIMALS);
  }
}

function changeMinAmountReceived(tokenForSale) {
  const amountOfPurchasedToken = tokenForSale == 0 ? parseFloat(document.getElementById("usdc-input").value) : parseFloat(document.getElementById("link-input").value);
  const maxSlippage = parseFloat(document.getElementById("slippage").value);
  const minAmountPurchasedToken = amountOfPurchasedToken * (1 - maxSlippage / 100);
  const tokenPurchasedStr = tokenForSale == 0 ? "USDC" : "Link";
  document.getElementById("min_amount_purchased_token").innerHTML = "Minimum amount of " + tokenPurchasedStr + " to receive: " + minAmountPurchasedToken.toFixed(NUMBER_DECIMALS).toString();
  document.getElementById("min_amount_purchased_token").setAttribute("data-value", minAmountPurchasedToken);
}

async function changeAmountUsdcToSupply() {
  const amountLink = parseFloat(document.getElementById("supply-link-input").value);
  const [lpTokenPriceLink, lpTokenPriceUsdc] = await (0, _price_functions.getLpTokenPriceBigNumberWithDecimals)();
  document.getElementById("supply-usdc-input").value = amountLink / lpTokenPriceLink.shiftedBy(-18).toNumber() * lpTokenPriceUsdc.shiftedBy(-6).toNumber();
}

async function changeAmountLinkToSupply() {
  const amountUsdc = parseFloat(document.getElementById("supply-usdc-input").value);
  const [lpTokenPriceLink, lpTokenPriceUsdc] = await (0, _price_functions.getLpTokenPriceBigNumberWithDecimals)();
  document.getElementById("supply-link-input").value = amountUsdc / lpTokenPriceUsdc.shiftedBy(-6).toNumber() * lpTokenPriceLink.shiftedBy(-18).toNumber();
}

},{"./price_functions.js":8}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usdcInfo = exports.simpleSwapInfo = exports.linkInfo = void 0;
const simpleSwapInfo = {
  "contractAddress": "0xa2AEf78BD851D65cdBD3F14d3Bf814C211a50630",
  "abi": require("../build/deployments/42/0xa2AEf78BD851D65cdBD3F14d3Bf814C211a50630.json")["abi"]
};
exports.simpleSwapInfo = simpleSwapInfo;
const usdcInfo = {
  contractAddress: "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede",
  abi: require("../build/contracts/IERC20.json")["abi"]
};
exports.usdcInfo = usdcInfo;
const linkInfo = {
  contractAddress: "0xa36085F69e2889c224210F603D836748e7dC0088",
  abi: require("../build/contracts/IERC20.json")["abi"]
};
exports.linkInfo = linkInfo;

},{"../build/contracts/IERC20.json":1,"../build/deployments/42/0xa2AEf78BD851D65cdBD3F14d3Bf814C211a50630.json":2}],6:[function(require,module,exports){
"use strict";

var _contracts_and_abi = require("./contracts_and_abi.js");

var _secondary_functions = require("./secondary_functions.js");

var _price_functions = require("./price_functions.js");

var _autocompletion_functions = require("./autocompletion_functions.js");

const config = require("./.config.json");

const serverUrl = config["serverUrl"];
const appId = config["appId"];
Moralis.start({
  serverUrl,
  appId
});
let tokenForSale = 0;

if (Moralis.User.current()) {
  Moralis.User.logOut();
}

;

async function connect() {
  if (!Moralis.User.current()) {
    await Moralis.authenticate({
      signingMessage: "Log in using Moralis"
    });
  }
}

async function swap() {
  const amountSoldToken = tokenForSale == 0 ? parseFloat(document.getElementById("link-input").value) : parseFloat(document.getElementById("usdc-input").value);

  if (amountSoldToken <= 0) {
    console.log("The amount of token sold should be > 0!");
  } else {
    const minAmountPurchasedToken = parseFloat(document.getElementById("min_amount_purchased_token").getAttribute('data-value'));
    const numberDecimalsSoldToken = tokenForSale == 0 ? 18 : 6;
    const numberDecimalsPurchasedToken = tokenForSale == 0 ? 6 : 18;
    const amountSoldTokenStr = (0, _secondary_functions.getBigNumberWithDecimals)(amountSoldToken, numberDecimalsSoldToken).toString();
    const minAmountPurchasedTokenStr = (0, _secondary_functions.getBigNumberWithDecimals)(minAmountPurchasedToken, numberDecimalsPurchasedToken).toString();
    const soldTokenContractAdress = tokenForSale == 0 ? _contracts_and_abi.linkInfo["contractAddress"] : _contracts_and_abi.usdcInfo["contractAddress"];
    const soldTokenAbi = tokenForSale == 0 ? _contracts_and_abi.linkInfo["abi"] : _contracts_and_abi.usdcInfo["abi"];
    const tx = await (0, _secondary_functions.approve)(amountSoldTokenStr, _contracts_and_abi.simpleSwapInfo["contractAddress"], soldTokenContractAdress, soldTokenAbi);
    await tx.wait();
    const writeOptionsSwap = {
      contractAddress: _contracts_and_abi.simpleSwapInfo["contractAddress"],
      functionName: "swap",
      abi: _contracts_and_abi.simpleSwapInfo["abi"],
      params: {
        quantitySoldToken: amountSoldTokenStr,
        minAmountPurchasedToken: minAmountPurchasedTokenStr,
        tokenForSale: tokenForSale
      }
    };
    await Moralis.executeFunction(writeOptionsSwap);
  }
}

async function supply() {
  const amountUsdc = parseFloat(document.getElementById("supply-usdc-input").value);
  const amountLink = parseFloat(document.getElementById("supply-link-input").value);
  const [priceLinkLpToken, priceUsdcLpToken] = await (0, _price_functions.getLpTokenPriceBigNumberWithDecimals)();
  const amountLpTokens = Math.min(amountLink / priceLinkLpToken.shiftedBy(-18).toNumber(), amountUsdc / priceUsdcLpToken.shiftedBy(-6).toNumber());
  const allowedAmountUsdcStr = priceUsdcLpToken.multipliedBy(amountLpTokens).multipliedBy(1.1).toFixed(0).toString();
  const allowedAmountLinkStr = priceLinkLpToken.multipliedBy(amountLpTokens).multipliedBy(1.1).toFixed(0).toString();
  const txUsdc = await (0, _secondary_functions.approve)(allowedAmountUsdcStr, _contracts_and_abi.simpleSwapInfo["contractAddress"], _contracts_and_abi.usdcInfo["contractAddress"], _contracts_and_abi.usdcInfo["abi"]);
  await txUsdc.wait();
  const txLink = await (0, _secondary_functions.approve)(allowedAmountLinkStr, _contracts_and_abi.simpleSwapInfo["contractAddress"], _contracts_and_abi.linkInfo["contractAddress"], _contracts_and_abi.linkInfo["abi"]);
  await txLink.wait();
  const amountLpTokensWithDecimalsStr = (0, _secondary_functions.getBigNumberWithDecimals)(amountLpTokens, 6).toString();
  const writeOptionsSupply = {
    contractAddress: _contracts_and_abi.simpleSwapInfo["contractAddress"],
    functionName: "supply",
    abi: _contracts_and_abi.simpleSwapInfo["abi"],
    params: {
      amountLpTokens: amountLpTokensWithDecimalsStr
    }
  };
  await Moralis.executeFunction(writeOptionsSupply);
}

async function withdraw() {
  const amountLpTokens = parseFloat(document.getElementById("withdraw-liquidity-input").value);
  const amountLpTokensWithDecimalsStr = (0, _secondary_functions.getBigNumberWithDecimals)(amountLpTokens, 6).toString();
  const writeOptionsWithdraw = {
    contractAddress: _contracts_and_abi.simpleSwapInfo["contractAddress"],
    functionName: "withdraw",
    abi: _contracts_and_abi.simpleSwapInfo["abi"],
    params: {
      amountLpTokens: amountLpTokensWithDecimalsStr
    }
  };
  await Moralis.executeFunction(writeOptionsWithdraw);
}

document.getElementById("connect-btn").onclick = connect;
document.getElementById("swap-btn").onclick = swap;
document.getElementById("supply-btn").onclick = supply;
document.getElementById("withdraw-btn").onclick = withdraw;

document.getElementById("switch-btn").onclick = () => {
  tokenForSale = (tokenForSale + 1) % 2;
  (0, _secondary_functions.reverseButtons)(tokenForSale);
};

document.getElementById("link-input").onchange = async () => {
  await (0, _autocompletion_functions.changeUsdcInput)(tokenForSale);
  (0, _autocompletion_functions.changeMinAmountReceived)(tokenForSale);
};

document.getElementById("usdc-input").onchange = async () => {
  await (0, _autocompletion_functions.changeLinkInput)(tokenForSale);
  (0, _autocompletion_functions.changeMinAmountReceived)(tokenForSale);
};

document.getElementById("supply-usdc-input").onchange = async () => {
  await (0, _autocompletion_functions.changeAmountLinkToSupply)();
};

document.getElementById("supply-link-input").onchange = async () => {
  await (0, _autocompletion_functions.changeAmountUsdcToSupply)();
};

document.getElementById("slippage").onchange = () => {
  (0, _autocompletion_functions.changeMinAmountReceived)(tokenForSale);
};

},{"./.config.json":3,"./autocompletion_functions.js":4,"./contracts_and_abi.js":5,"./price_functions.js":8,"./secondary_functions.js":9}],7:[function(require,module,exports){
;(function (globalObject) {
  'use strict';

/*
 *      bignumber.js v9.0.2
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2021 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */


  var BigNumber,
    isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    mathceil = Math.ceil,
    mathfloor = Math.floor,

    bignumberError = '[BigNumber Error] ',
    tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

    BASE = 1e14,
    LOG_BASE = 14,
    MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
    // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
    SQRT_BASE = 1e7,

    // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1E9;                                   // 0 to MAX_INT32


  /*
   * Create and return a BigNumber constructor.
   */
  function clone(configObject) {
    var div, convertBase, parseNumeric,
      P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
      ONE = new BigNumber(1),


      //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


      // The default values below must be integers within the inclusive ranges stated.
      // The values can also be changed at run-time using BigNumber.set.

      // The maximum number of decimal places for operations involving division.
      DECIMAL_PLACES = 20,                     // 0 to MAX

      // The rounding mode used when rounding to the above decimal places, and when using
      // toExponential, toFixed, toFormat and toPrecision, and round (default value).
      // UP         0 Away from zero.
      // DOWN       1 Towards zero.
      // CEIL       2 Towards +Infinity.
      // FLOOR      3 Towards -Infinity.
      // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      ROUNDING_MODE = 4,                       // 0 to 8

      // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

      // The exponent value at and beneath which toString returns exponential notation.
      // Number type: -7
      TO_EXP_NEG = -7,                         // 0 to -MAX

      // The exponent value at and above which toString returns exponential notation.
      // Number type: 21
      TO_EXP_POS = 21,                         // 0 to MAX

      // RANGE : [MIN_EXP, MAX_EXP]

      // The minimum exponent value, beneath which underflow to zero occurs.
      // Number type: -324  (5e-324)
      MIN_EXP = -1e7,                          // -1 to -MAX

      // The maximum exponent value, above which overflow to Infinity occurs.
      // Number type:  308  (1.7976931348623157e+308)
      // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
      MAX_EXP = 1e7,                           // 1 to MAX

      // Whether to use cryptographically-secure random number generation, if available.
      CRYPTO = false,                          // true or false

      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP        0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN      1 The remainder has the same sign as the dividend.
      //             This modulo mode is commonly known as 'truncated division' and is
      //             equivalent to (a % n) in JavaScript.
      // FLOOR     3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
      // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
      //             The remainder is always positive.
      //
      // The truncated division, floored division, Euclidian division and IEEE 754 remainder
      // modes are commonly used for the modulus operation.
      // Although the other rounding modes can also be used, they may not give useful results.
      MODULO_MODE = 1,                         // 0 to 9

      // The maximum number of significant digits of the result of the exponentiatedBy operation.
      // If POW_PRECISION is 0, there will be unlimited significant digits.
      POW_PRECISION = 0,                       // 0 to MAX

      // The format specification used by the BigNumber.prototype.toFormat method.
      FORMAT = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',        // non-breaking space
        suffix: ''
      },

      // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
      // '-', '.', whitespace, or repeated character.
      // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
      ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz',
      alphabetHasNormalDecimalDigits = true;


    //------------------------------------------------------------------------------------------


    // CONSTRUCTOR


    /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */
    function BigNumber(v, b) {
      var alphabet, c, caseChanged, e, i, isNum, len, str,
        x = this;

      // Enable constructor call without `new`.
      if (!(x instanceof BigNumber)) return new BigNumber(v, b);

      if (b == null) {

        if (v && v._isBigNumber === true) {
          x.s = v.s;

          if (!v.c || v.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (v.e < MIN_EXP) {
            x.c = [x.e = 0];
          } else {
            x.e = v.e;
            x.c = v.c.slice();
          }

          return;
        }

        if ((isNum = typeof v == 'number') && v * 0 == 0) {

          // Use `1 / n` to handle minus zero also.
          x.s = 1 / v < 0 ? (v = -v, -1) : 1;

          // Fast path for integers, where n < 2147483648 (2**31).
          if (v === ~~v) {
            for (e = 0, i = v; i >= 10; i /= 10, e++);

            if (e > MAX_EXP) {
              x.c = x.e = null;
            } else {
              x.e = e;
              x.c = [v];
            }

            return;
          }

          str = String(v);
        } else {

          if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

          x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
        }

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

        // Exponential form?
        if ((i = str.search(/e/i)) > 0) {

          // Determine exponent.
          if (e < 0) e = i;
          e += +str.slice(i + 1);
          str = str.substring(0, i);
        } else if (e < 0) {

          // Integer.
          e = str.length;
        }

      } else {

        // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
        intCheck(b, 2, ALPHABET.length, 'Base');

        // Allow exponential notation to be used with base 10 argument, while
        // also rounding to DECIMAL_PLACES as with other bases.
        if (b == 10 && alphabetHasNormalDecimalDigits) {
          x = new BigNumber(v);
          return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
        }

        str = String(v);

        if (isNum = typeof v == 'number') {

          // Avoid potential interpretation of Infinity and NaN as base 44+ values.
          if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

          x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

          // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
          if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
            throw Error
             (tooManyDigits + v);
          }
        } else {
          x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
        }

        alphabet = ALPHABET.slice(0, b);
        e = i = 0;

        // Check that str is a valid base b number.
        // Don't use RegExp, so alphabet can contain special characters.
        for (len = str.length; i < len; i++) {
          if (alphabet.indexOf(c = str.charAt(i)) < 0) {
            if (c == '.') {

              // If '.' is not the first character and it has not be found before.
              if (i > e) {
                e = len;
                continue;
              }
            } else if (!caseChanged) {

              // Allow e.g. hexadecimal 'FF' as well as 'ff'.
              if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                  str == str.toLowerCase() && (str = str.toUpperCase())) {
                caseChanged = true;
                i = -1;
                e = 0;
                continue;
              }
            }

            return parseNumeric(x, String(v), isNum, b);
          }
        }

        // Prevent later check for length on converted number.
        isNum = false;
        str = convertBase(str, b, 10, x.s);

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
        else e = str.length;
      }

      // Determine leading zeros.
      for (i = 0; str.charCodeAt(i) === 48; i++);

      // Determine trailing zeros.
      for (len = str.length; str.charCodeAt(--len) === 48;);

      if (str = str.slice(i, ++len)) {
        len -= i;

        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
        if (isNum && BigNumber.DEBUG &&
          len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
            throw Error
             (tooManyDigits + (x.s * v));
        }

         // Overflow?
        if ((e = e - i - 1) > MAX_EXP) {

          // Infinity.
          x.c = x.e = null;

        // Underflow?
        } else if (e < MIN_EXP) {

          // Zero.
          x.c = [x.e = 0];
        } else {
          x.e = e;
          x.c = [];

          // Transform base

          // e is the base 10 exponent.
          // i is where to slice str to get the first element of the coefficient array.
          i = (e + 1) % LOG_BASE;
          if (e < 0) i += LOG_BASE;  // i < 1

          if (i < len) {
            if (i) x.c.push(+str.slice(0, i));

            for (len -= LOG_BASE; i < len;) {
              x.c.push(+str.slice(i, i += LOG_BASE));
            }

            i = LOG_BASE - (str = str.slice(i)).length;
          } else {
            i -= len;
          }

          for (; i--; str += '0');
          x.c.push(+str);
        }
      } else {

        // Zero.
        x.c = [x.e = 0];
      }
    }


    // CONSTRUCTOR PROPERTIES


    BigNumber.clone = clone;

    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.EUCLID = 9;


    /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */
    BigNumber.config = BigNumber.set = function (obj) {
      var p, v;

      if (obj != null) {

        if (typeof obj == 'object') {

          // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            DECIMAL_PLACES = v;
          }

          // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
          // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
            v = obj[p];
            intCheck(v, 0, 8, p);
            ROUNDING_MODE = v;
          }

          // EXPONENTIAL_AT {number|number[]}
          // Integer, -MAX to MAX inclusive or
          // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
          // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, 0, p);
              intCheck(v[1], 0, MAX, p);
              TO_EXP_NEG = v[0];
              TO_EXP_POS = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
            }
          }

          // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
          // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
          // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
          if (obj.hasOwnProperty(p = 'RANGE')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, -1, p);
              intCheck(v[1], 1, MAX, p);
              MIN_EXP = v[0];
              MAX_EXP = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              if (v) {
                MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
              } else {
                throw Error
                 (bignumberError + p + ' cannot be zero: ' + v);
              }
            }
          }

          // CRYPTO {boolean} true or false.
          // '[BigNumber Error] CRYPTO not true or false: {v}'
          // '[BigNumber Error] crypto unavailable'
          if (obj.hasOwnProperty(p = 'CRYPTO')) {
            v = obj[p];
            if (v === !!v) {
              if (v) {
                if (typeof crypto != 'undefined' && crypto &&
                 (crypto.getRandomValues || crypto.randomBytes)) {
                  CRYPTO = v;
                } else {
                  CRYPTO = !v;
                  throw Error
                   (bignumberError + 'crypto unavailable');
                }
              } else {
                CRYPTO = v;
              }
            } else {
              throw Error
               (bignumberError + p + ' not true or false: ' + v);
            }
          }

          // MODULO_MODE {number} Integer, 0 to 9 inclusive.
          // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
            v = obj[p];
            intCheck(v, 0, 9, p);
            MODULO_MODE = v;
          }

          // POW_PRECISION {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            POW_PRECISION = v;
          }

          // FORMAT {object}
          // '[BigNumber Error] FORMAT not an object: {v}'
          if (obj.hasOwnProperty(p = 'FORMAT')) {
            v = obj[p];
            if (typeof v == 'object') FORMAT = v;
            else throw Error
             (bignumberError + p + ' not an object: ' + v);
          }

          // ALPHABET {string}
          // '[BigNumber Error] ALPHABET invalid: {v}'
          if (obj.hasOwnProperty(p = 'ALPHABET')) {
            v = obj[p];

            // Disallow if less than two characters,
            // or if it contains '+', '-', '.', whitespace, or a repeated character.
            if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
              alphabetHasNormalDecimalDigits = v.slice(0, 10) == '0123456789';
              ALPHABET = v;
            } else {
              throw Error
               (bignumberError + p + ' invalid: ' + v);
            }
          }

        } else {

          // '[BigNumber Error] Object expected: {v}'
          throw Error
           (bignumberError + 'Object expected: ' + obj);
        }
      }

      return {
        DECIMAL_PLACES: DECIMAL_PLACES,
        ROUNDING_MODE: ROUNDING_MODE,
        EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
        RANGE: [MIN_EXP, MAX_EXP],
        CRYPTO: CRYPTO,
        MODULO_MODE: MODULO_MODE,
        POW_PRECISION: POW_PRECISION,
        FORMAT: FORMAT,
        ALPHABET: ALPHABET
      };
    };


    /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */
    BigNumber.isBigNumber = function (v) {
      if (!v || v._isBigNumber !== true) return false;
      if (!BigNumber.DEBUG) return true;

      var i, n,
        c = v.c,
        e = v.e,
        s = v.s;

      out: if ({}.toString.call(c) == '[object Array]') {

        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

          // If the first element is zero, the BigNumber value must be zero.
          if (c[0] === 0) {
            if (e === 0 && c.length === 1) return true;
            break out;
          }

          // Calculate number of digits that c[0] should have, based on the exponent.
          i = (e + 1) % LOG_BASE;
          if (i < 1) i += LOG_BASE;

          // Calculate number of digits of c[0].
          //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
          if (String(c[0]).length == i) {

            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
            }

            // Last element cannot be zero, unless it is the only element.
            if (n !== 0) return true;
          }
        }

      // Infinity/NaN
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }

      throw Error
        (bignumberError + 'Invalid BigNumber: ' + v);
    };


    /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.maximum = BigNumber.max = function () {
      return maxOrMin(arguments, P.lt);
    };


    /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.minimum = BigNumber.min = function () {
      return maxOrMin(arguments, P.gt);
    };


    /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */
    BigNumber.random = (function () {
      var pow2_53 = 0x20000000000000;

      // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
      // Check if Math.random() produces more than 32 bits of randomness.
      // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
      // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
      var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
       ? function () { return mathfloor(Math.random() * pow2_53); }
       : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
         (Math.random() * 0x800000 | 0); };

      return function (dp) {
        var a, b, e, k, v,
          i = 0,
          c = [],
          rand = new BigNumber(ONE);

        if (dp == null) dp = DECIMAL_PLACES;
        else intCheck(dp, 0, MAX);

        k = mathceil(dp / LOG_BASE);

        if (CRYPTO) {

          // Browsers supporting crypto.getRandomValues.
          if (crypto.getRandomValues) {

            a = crypto.getRandomValues(new Uint32Array(k *= 2));

            for (; i < k;) {

              // 53 bits:
              // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
              // 11111 11111111 11111111 11111111 11100000 00000000 00000000
              // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
              //                                     11111 11111111 11111111
              // 0x20000 is 2^21.
              v = a[i] * 0x20000 + (a[i + 1] >>> 11);

              // Rejection sampling:
              // 0 <= v < 9007199254740992
              // Probability that v >= 9e15, is
              // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
              if (v >= 9e15) {
                b = crypto.getRandomValues(new Uint32Array(2));
                a[i] = b[0];
                a[i + 1] = b[1];
              } else {

                // 0 <= v <= 8999999999999999
                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 2;
              }
            }
            i = k / 2;

          // Node.js supporting crypto.randomBytes.
          } else if (crypto.randomBytes) {

            // buffer
            a = crypto.randomBytes(k *= 7);

            for (; i < k;) {

              // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
              // 0x100000000 is 2^32, 0x1000000 is 2^24
              // 11111 11111111 11111111 11111111 11111111 11111111 11111111
              // 0 <= v < 9007199254740992
              v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                 (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                 (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

              if (v >= 9e15) {
                crypto.randomBytes(7).copy(a, i);
              } else {

                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 7;
              }
            }
            i = k / 7;
          } else {
            CRYPTO = false;
            throw Error
             (bignumberError + 'crypto unavailable');
          }
        }

        // Use Math.random.
        if (!CRYPTO) {

          for (; i < k;) {
            v = random53bitInt();
            if (v < 9e15) c[i++] = v % 1e14;
          }
        }

        k = c[--i];
        dp %= LOG_BASE;

        // Convert trailing digits to zeros according to dp.
        if (k && dp) {
          v = POWS_TEN[LOG_BASE - dp];
          c[i] = mathfloor(k / v) * v;
        }

        // Remove trailing elements which are zero.
        for (; c[i] === 0; c.pop(), i--);

        // Zero?
        if (i < 0) {
          c = [e = 0];
        } else {

          // Remove leading elements which are zero and adjust exponent accordingly.
          for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

          // Count the digits of the first element of c to determine leading zeros, and...
          for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

          // adjust the exponent accordingly.
          if (i < LOG_BASE) e -= LOG_BASE - i;
        }

        rand.e = e;
        rand.c = c;
        return rand;
      };
    })();


    /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.sum = function () {
      var i = 1,
        args = arguments,
        sum = new BigNumber(args[0]);
      for (; i < args.length;) sum = sum.plus(args[i++]);
      return sum;
    };


    // PRIVATE FUNCTIONS


    // Called by BigNumber and BigNumber.prototype.toString.
    convertBase = (function () {
      var decimal = '0123456789';

      /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */
      function toBaseOut(str, baseIn, baseOut, alphabet) {
        var j,
          arr = [0],
          arrL,
          i = 0,
          len = str.length;

        for (; i < len;) {
          for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

          arr[0] += alphabet.indexOf(str.charAt(i++));

          for (j = 0; j < arr.length; j++) {

            if (arr[j] > baseOut - 1) {
              if (arr[j + 1] == null) arr[j + 1] = 0;
              arr[j + 1] += arr[j] / baseOut | 0;
              arr[j] %= baseOut;
            }
          }
        }

        return arr.reverse();
      }

      // Convert a numeric string of baseIn to a numeric string of baseOut.
      // If the caller is toString, we are converting from base 10 to baseOut.
      // If the caller is BigNumber, we are converting from baseIn to base 10.
      return function (str, baseIn, baseOut, sign, callerIsToString) {
        var alphabet, d, e, k, r, x, xc, y,
          i = str.indexOf('.'),
          dp = DECIMAL_PLACES,
          rm = ROUNDING_MODE;

        // Non-integer.
        if (i >= 0) {
          k = POW_PRECISION;

          // Unlimited precision.
          POW_PRECISION = 0;
          str = str.replace('.', '');
          y = new BigNumber(baseIn);
          x = y.pow(str.length - i);
          POW_PRECISION = k;

          // Convert str as if an integer, then restore the fraction part by dividing the
          // result by its base raised to a power.

          y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
           10, baseOut, decimal);
          y.e = y.c.length;
        }

        // Convert the number as integer.

        xc = toBaseOut(str, baseIn, baseOut, callerIsToString
         ? (alphabet = ALPHABET, decimal)
         : (alphabet = decimal, ALPHABET));

        // xc now represents str as an integer and converted to baseOut. e is the exponent.
        e = k = xc.length;

        // Remove trailing zeros.
        for (; xc[--k] == 0; xc.pop());

        // Zero?
        if (!xc[0]) return alphabet.charAt(0);

        // Does str represent an integer? If so, no need for the division.
        if (i < 0) {
          --e;
        } else {
          x.c = xc;
          x.e = e;

          // The sign is needed for correct rounding.
          x.s = sign;
          x = div(x, y, dp, rm, baseOut);
          xc = x.c;
          r = x.r;
          e = x.e;
        }

        // xc now represents str converted to baseOut.

        // THe index of the rounding digit.
        d = e + dp + 1;

        // The rounding digit: the digit to the right of the digit that may be rounded up.
        i = xc[d];

        // Look at the rounding digits and mode to determine whether to round up.

        k = baseOut / 2;
        r = r || d < 0 || xc[d + 1] != null;

        r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
              : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
               rm == (x.s < 0 ? 8 : 7));

        // If the index of the rounding digit is not greater than zero, or xc represents
        // zero, then the result of the base conversion is zero or, if rounding up, a value
        // such as 0.00001.
        if (d < 1 || !xc[0]) {

          // 1^-dp or 0
          str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
        } else {

          // Truncate xc to the required number of decimal places.
          xc.length = d;

          // Round up?
          if (r) {

            // Rounding up may mean the previous digit has to be rounded up and so on.
            for (--baseOut; ++xc[--d] > baseOut;) {
              xc[d] = 0;

              if (!d) {
                ++e;
                xc = [1].concat(xc);
              }
            }
          }

          // Determine trailing zeros.
          for (k = xc.length; !xc[--k];);

          // E.g. [4, 11, 15] becomes 4bf.
          for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

          // Add leading zeros, decimal point and trailing zeros as required.
          str = toFixedPoint(str, e, alphabet.charAt(0));
        }

        // The caller will add the sign.
        return str;
      };
    })();


    // Perform division in the specified base. Called by div and convertBase.
    div = (function () {

      // Assume non-zero x and k.
      function multiply(x, k, base) {
        var m, temp, xlo, xhi,
          carry = 0,
          i = x.length,
          klo = k % SQRT_BASE,
          khi = k / SQRT_BASE | 0;

        for (x = x.slice(); i--;) {
          xlo = x[i] % SQRT_BASE;
          xhi = x[i] / SQRT_BASE | 0;
          m = khi * xlo + xhi * klo;
          temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
          carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
          x[i] = temp % base;
        }

        if (carry) x = [carry].concat(x);

        return x;
      }

      function compare(a, b, aL, bL) {
        var i, cmp;

        if (aL != bL) {
          cmp = aL > bL ? 1 : -1;
        } else {

          for (i = cmp = 0; i < aL; i++) {

            if (a[i] != b[i]) {
              cmp = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }

        return cmp;
      }

      function subtract(a, b, aL, base) {
        var i = 0;

        // Subtract b from a.
        for (; aL--;) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        }

        // Remove leading zeros.
        for (; !a[0] && a.length > 1; a.splice(0, 1));
      }

      // x: dividend, y: divisor.
      return function (x, y, dp, rm, base) {
        var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
          yL, yz,
          s = x.s == y.s ? 1 : -1,
          xc = x.c,
          yc = y.c;

        // Either NaN, Infinity or 0?
        if (!xc || !xc[0] || !yc || !yc[0]) {

          return new BigNumber(

           // Return NaN if either NaN, or both Infinity or 0.
           !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
         );
        }

        q = new BigNumber(s);
        qc = q.c = [];
        e = x.e - y.e;
        s = dp + e + 1;

        if (!base) {
          base = BASE;
          e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
          s = s / LOG_BASE | 0;
        }

        // Result exponent may be one less then the current value of e.
        // The coefficients of the BigNumbers from convertBase may have trailing zeros.
        for (i = 0; yc[i] == (xc[i] || 0); i++);

        if (yc[i] > (xc[i] || 0)) e--;

        if (s < 0) {
          qc.push(1);
          more = true;
        } else {
          xL = xc.length;
          yL = yc.length;
          i = 0;
          s += 2;

          // Normalise xc and yc so highest order digit of yc is >= base / 2.

          n = mathfloor(base / (yc[0] + 1));

          // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
          // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
          if (n > 1) {
            yc = multiply(yc, n, base);
            xc = multiply(xc, n, base);
            yL = yc.length;
            xL = xc.length;
          }

          xi = yL;
          rem = xc.slice(0, yL);
          remL = rem.length;

          // Add zeros to make remainder as long as divisor.
          for (; remL < yL; rem[remL++] = 0);
          yz = yc.slice();
          yz = [0].concat(yz);
          yc0 = yc[0];
          if (yc[1] >= base / 2) yc0++;
          // Not necessary, but to prevent trial digit n > base, when using base 3.
          // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

          do {
            n = 0;

            // Compare divisor and remainder.
            cmp = compare(yc, rem, yL, remL);

            // If divisor < remainder.
            if (cmp < 0) {

              // Calculate trial digit, n.

              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              // n is how many times the divisor goes into the current remainder.
              n = mathfloor(rem0 / yc0);

              //  Algorithm:
              //  product = divisor multiplied by trial digit (n).
              //  Compare product and remainder.
              //  If product is greater than remainder:
              //    Subtract divisor from product, decrement trial digit.
              //  Subtract product from remainder.
              //  If product was less than remainder at the last compare:
              //    Compare new remainder and divisor.
              //    If remainder is greater than divisor:
              //      Subtract divisor from remainder, increment trial digit.

              if (n > 1) {

                // n may be > base only when base is 3.
                if (n >= base) n = base - 1;

                // product = divisor * trial digit.
                prod = multiply(yc, n, base);
                prodL = prod.length;
                remL = rem.length;

                // Compare product and remainder.
                // If product > remainder then trial digit n too high.
                // n is 1 too high about 5% of the time, and is not known to have
                // ever been more than 1 too high.
                while (compare(prod, rem, prodL, remL) == 1) {
                  n--;

                  // Subtract divisor from product.
                  subtract(prod, yL < prodL ? yz : yc, prodL, base);
                  prodL = prod.length;
                  cmp = 1;
                }
              } else {

                // n is 0 or 1, cmp is -1.
                // If n is 0, there is no need to compare yc and rem again below,
                // so change cmp to 1 to avoid it.
                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                if (n == 0) {

                  // divisor < remainder, so n must be at least 1.
                  cmp = n = 1;
                }

                // product = divisor
                prod = yc.slice();
                prodL = prod.length;
              }

              if (prodL < remL) prod = [0].concat(prod);

              // Subtract product from remainder.
              subtract(rem, prod, remL, base);
              remL = rem.length;

               // If product was < remainder.
              if (cmp == -1) {

                // Compare divisor and new remainder.
                // If divisor < new remainder, subtract divisor from remainder.
                // Trial digit n too low.
                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                while (compare(yc, rem, yL, remL) < 1) {
                  n++;

                  // Subtract divisor from remainder.
                  subtract(rem, yL < remL ? yz : yc, remL, base);
                  remL = rem.length;
                }
              }
            } else if (cmp === 0) {
              n++;
              rem = [0];
            } // else cmp === 1 and n will be 0

            // Add the next digit, n, to the result array.
            qc[i++] = n;

            // Update the remainder.
            if (rem[0]) {
              rem[remL++] = xc[xi] || 0;
            } else {
              rem = [xc[xi]];
              remL = 1;
            }
          } while ((xi++ < xL || rem[0] != null) && s--);

          more = rem[0] != null;

          // Leading zero?
          if (!qc[0]) qc.splice(0, 1);
        }

        if (base == BASE) {

          // To calculate q.e, first get the number of digits of qc[0].
          for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

          round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

        // Caller is convertBase.
        } else {
          q.e = e;
          q.r = +more;
        }

        return q;
      };
    })();


    /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */
    function format(n, i, rm, id) {
      var c0, e, ne, len, str;

      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      if (!n.c) return n.toString();

      c0 = n.c[0];
      ne = n.e;

      if (i == null) {
        str = coeffToString(n.c);
        str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
         ? toExponential(str, ne)
         : toFixedPoint(str, ne, '0');
      } else {
        n = round(new BigNumber(n), i, rm);

        // n.e may have changed if the value was rounded up.
        e = n.e;

        str = coeffToString(n.c);
        len = str.length;

        // toPrecision returns exponential notation if the number of significant digits
        // specified is less than the number of digits necessary to represent the integer
        // part of the value in fixed-point notation.

        // Exponential notation.
        if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

          // Append zeros?
          for (; len < i; str += '0', len++);
          str = toExponential(str, e);

        // Fixed-point notation.
        } else {
          i -= ne;
          str = toFixedPoint(str, e, '0');

          // Append zeros?
          if (e + 1 > len) {
            if (--i > 0) for (str += '.'; i--; str += '0');
          } else {
            i += e - len;
            if (i > 0) {
              if (e + 1 == len) str += '.';
              for (; i--; str += '0');
            }
          }
        }
      }

      return n.s < 0 && c0 ? '-' + str : str;
    }


    // Handle BigNumber.max and BigNumber.min.
    function maxOrMin(args, method) {
      var n,
        i = 1,
        m = new BigNumber(args[0]);

      for (; i < args.length; i++) {
        n = new BigNumber(args[i]);

        // If any number is NaN, return NaN.
        if (!n.s) {
          m = n;
          break;
        } else if (method.call(m, n)) {
          m = n;
        }
      }

      return m;
    }


    /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */
    function normalise(n, c, e) {
      var i = 1,
        j = c.length;

       // Remove trailing zeros.
      for (; !c[--j]; c.pop());

      // Calculate the base 10 exponent. First get the number of digits of c[0].
      for (j = c[0]; j >= 10; j /= 10, i++);

      // Overflow?
      if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

        // Infinity.
        n.c = n.e = null;

      // Underflow?
      } else if (e < MIN_EXP) {

        // Zero.
        n.c = [n.e = 0];
      } else {
        n.e = e;
        n.c = c;
      }

      return n;
    }


    // Handle values that fail the validity test in BigNumber.
    parseNumeric = (function () {
      var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        dotAfter = /^([^.]+)\.$/,
        dotBefore = /^\.([^.]+)$/,
        isInfinityOrNaN = /^-?(Infinity|NaN)$/,
        whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

      return function (x, str, isNum, b) {
        var base,
          s = isNum ? str : str.replace(whitespaceOrPlus, '');

        // No exception on ±Infinity or NaN.
        if (isInfinityOrNaN.test(s)) {
          x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
        } else {
          if (!isNum) {

            // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
            s = s.replace(basePrefix, function (m, p1, p2) {
              base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
              return !b || b == base ? p1 : m;
            });

            if (b) {
              base = b;

              // E.g. '1.' to '1', '.1' to '0.1'
              s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
            }

            if (str != s) return new BigNumber(s, base);
          }

          // '[BigNumber Error] Not a number: {n}'
          // '[BigNumber Error] Not a base {b} number: {n}'
          if (BigNumber.DEBUG) {
            throw Error
              (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
          }

          // NaN
          x.s = null;
        }

        x.c = x.e = null;
      }
    })();


    /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */
    function round(x, sd, rm, r) {
      var d, i, j, k, n, ni, rd,
        xc = x.c,
        pows10 = POWS_TEN;

      // if x is not Infinity or NaN...
      if (xc) {

        // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
        // n is a base 1e14 number, the value of the element of array x.c containing rd.
        // ni is the index of n within x.c.
        // d is the number of digits of n.
        // i is the index of rd within n including leading zeros.
        // j is the actual index of rd within n (if < 0, rd is a leading zero).
        out: {

          // Get the number of digits of the first element of xc.
          for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
          i = sd - d;

          // If the rounding digit is in the first element of xc...
          if (i < 0) {
            i += LOG_BASE;
            j = sd;
            n = xc[ni = 0];

            // Get the rounding digit at index j of n.
            rd = n / pows10[d - j - 1] % 10 | 0;
          } else {
            ni = mathceil((i + 1) / LOG_BASE);

            if (ni >= xc.length) {

              if (r) {

                // Needed by sqrt.
                for (; xc.length <= ni; xc.push(0));
                n = rd = 0;
                d = 1;
                i %= LOG_BASE;
                j = i - LOG_BASE + 1;
              } else {
                break out;
              }
            } else {
              n = k = xc[ni];

              // Get the number of digits of n.
              for (d = 1; k >= 10; k /= 10, d++);

              // Get the index of rd within n.
              i %= LOG_BASE;

              // Get the index of rd within n, adjusted for leading zeros.
              // The number of leading zeros of n is given by LOG_BASE - d.
              j = i - LOG_BASE + d;

              // Get the rounding digit at index j of n.
              rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
            }
          }

          r = r || sd < 0 ||

          // Are there any non-zero digits after the rounding digit?
          // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
          // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
           xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

          r = rm < 4
           ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
           : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

            // Check whether the digit to the left of the rounding digit is odd.
            ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
             rm == (x.s < 0 ? 8 : 7));

          if (sd < 1 || !xc[0]) {
            xc.length = 0;

            if (r) {

              // Convert sd to decimal places.
              sd -= x.e + 1;

              // 1, 0.1, 0.01, 0.001, 0.0001 etc.
              xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
              x.e = -sd || 0;
            } else {

              // Zero.
              xc[0] = x.e = 0;
            }

            return x;
          }

          // Remove excess digits.
          if (i == 0) {
            xc.length = ni;
            k = 1;
            ni--;
          } else {
            xc.length = ni + 1;
            k = pows10[LOG_BASE - i];

            // E.g. 56700 becomes 56000 if 7 is the rounding digit.
            // j > 0 means i > number of leading zeros of n.
            xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
          }

          // Round up?
          if (r) {

            for (; ;) {

              // If the digit to be rounded up is in the first element of xc...
              if (ni == 0) {

                // i will be the length of xc[0] before k is added.
                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                j = xc[0] += k;
                for (k = 1; j >= 10; j /= 10, k++);

                // if i != k the length has increased.
                if (i != k) {
                  x.e++;
                  if (xc[0] == BASE) xc[0] = 1;
                }

                break;
              } else {
                xc[ni] += k;
                if (xc[ni] != BASE) break;
                xc[ni--] = 0;
                k = 1;
              }
            }
          }

          // Remove trailing zeros.
          for (i = xc.length; xc[--i] === 0; xc.pop());
        }

        // Overflow? Infinity.
        if (x.e > MAX_EXP) {
          x.c = x.e = null;

        // Underflow? Zero.
        } else if (x.e < MIN_EXP) {
          x.c = [x.e = 0];
        }
      }

      return x;
    }


    function valueOf(n) {
      var str,
        e = n.e;

      if (e === null) return n.toString();

      str = coeffToString(n.c);

      str = e <= TO_EXP_NEG || e >= TO_EXP_POS
        ? toExponential(str, e)
        : toFixedPoint(str, e, '0');

      return n.s < 0 ? '-' + str : str;
    }


    // PROTOTYPE/INSTANCE METHODS


    /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */
    P.absoluteValue = P.abs = function () {
      var x = new BigNumber(this);
      if (x.s < 0) x.s = 1;
      return x;
    };


    /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */
    P.comparedTo = function (y, b) {
      return compare(this, new BigNumber(y, b));
    };


    /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.decimalPlaces = P.dp = function (dp, rm) {
      var c, n, v,
        x = this;

      if (dp != null) {
        intCheck(dp, 0, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), dp + x.e + 1, rm);
      }

      if (!(c = x.c)) return null;
      n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

      // Subtract the number of trailing zeros of the last number.
      if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
      if (n < 0) n = 0;

      return n;
    };


    /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.dividedBy = P.div = function (y, b) {
      return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
    };


    /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */
    P.dividedToIntegerBy = P.idiv = function (y, b) {
      return div(this, new BigNumber(y, b), 0, 1);
    };


    /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */
    P.exponentiatedBy = P.pow = function (n, m) {
      var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
        x = this;

      n = new BigNumber(n);

      // Allow NaN and ±Infinity, but not other non-integers.
      if (n.c && !n.isInteger()) {
        throw Error
          (bignumberError + 'Exponent not an integer: ' + valueOf(n));
      }

      if (m != null) m = new BigNumber(m);

      // Exponent of MAX_SAFE_INTEGER is 15.
      nIsBig = n.e > 14;

      // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
      if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

        // The sign of the result of pow when x is negative depends on the evenness of n.
        // If +n overflows to ±Infinity, the evenness of n would be not be known.
        y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
        return m ? y.mod(m) : y;
      }

      nIsNeg = n.s < 0;

      if (m) {

        // x % m returns NaN if abs(m) is zero, or m is NaN.
        if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

        isModExp = !nIsNeg && x.isInteger() && m.isInteger();

        if (isModExp) x = x.mod(m);

      // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
      // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
      } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
        // [1, 240000000]
        ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
        // [80000000000000]  [99999750000000]
        : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

        // If x is negative and n is odd, k = -0, else k = 0.
        k = x.s < 0 && isOdd(n) ? -0 : 0;

        // If x >= 1, k = ±Infinity.
        if (x.e > -1) k = 1 / k;

        // If n is negative return ±0, else return ±Infinity.
        return new BigNumber(nIsNeg ? 1 / k : k);

      } else if (POW_PRECISION) {

        // Truncating each coefficient array to a length of k after each multiplication
        // equates to truncating significant digits to POW_PRECISION + [28, 41],
        // i.e. there will be a minimum of 28 guard digits retained.
        k = mathceil(POW_PRECISION / LOG_BASE + 2);
      }

      if (nIsBig) {
        half = new BigNumber(0.5);
        if (nIsNeg) n.s = 1;
        nIsOdd = isOdd(n);
      } else {
        i = Math.abs(+valueOf(n));
        nIsOdd = i % 2;
      }

      y = new BigNumber(ONE);

      // Performs 54 loop iterations for n of 9007199254740991.
      for (; ;) {

        if (nIsOdd) {
          y = y.times(x);
          if (!y.c) break;

          if (k) {
            if (y.c.length > k) y.c.length = k;
          } else if (isModExp) {
            y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
          }
        }

        if (i) {
          i = mathfloor(i / 2);
          if (i === 0) break;
          nIsOdd = i % 2;
        } else {
          n = n.times(half);
          round(n, n.e + 1, 1);

          if (n.e > 14) {
            nIsOdd = isOdd(n);
          } else {
            i = +valueOf(n);
            if (i === 0) break;
            nIsOdd = i % 2;
          }
        }

        x = x.times(x);

        if (k) {
          if (x.c && x.c.length > k) x.c.length = k;
        } else if (isModExp) {
          x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
        }
      }

      if (isModExp) return y;
      if (nIsNeg) y = ONE.div(y);

      return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */
    P.integerValue = function (rm) {
      var n = new BigNumber(this);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(n, n.e + 1, rm);
    };


    /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isEqualTo = P.eq = function (y, b) {
      return compare(this, new BigNumber(y, b)) === 0;
    };


    /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */
    P.isFinite = function () {
      return !!this.c;
    };


    /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isGreaterThan = P.gt = function (y, b) {
      return compare(this, new BigNumber(y, b)) > 0;
    };


    /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

    };


    /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */
    P.isInteger = function () {
      return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
    };


    /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isLessThan = P.lt = function (y, b) {
      return compare(this, new BigNumber(y, b)) < 0;
    };


    /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isLessThanOrEqualTo = P.lte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
    };


    /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */
    P.isNaN = function () {
      return !this.s;
    };


    /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */
    P.isNegative = function () {
      return this.s < 0;
    };


    /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */
    P.isPositive = function () {
      return this.s > 0;
    };


    /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */
    P.isZero = function () {
      return !!this.c && this.c[0] == 0;
    };


    /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */
    P.minus = function (y, b) {
      var i, j, t, xLTy,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
      if (a != b) {
        y.s = -b;
        return x.plus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Either Infinity?
        if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

        // Either zero?
        if (!xc[0] || !yc[0]) {

          // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
          return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

           // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
           ROUNDING_MODE == 3 ? -0 : 0);
        }
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Determine which is the bigger number.
      if (a = xe - ye) {

        if (xLTy = a < 0) {
          a = -a;
          t = xc;
        } else {
          ye = xe;
          t = yc;
        }

        t.reverse();

        // Prepend zeros to equalise exponents.
        for (b = a; b--; t.push(0));
        t.reverse();
      } else {

        // Exponents equal. Check digit by digit.
        j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

        for (a = b = 0; b < j; b++) {

          if (xc[b] != yc[b]) {
            xLTy = xc[b] < yc[b];
            break;
          }
        }
      }

      // x < y? Point xc to the array of the bigger number.
      if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

      b = (j = yc.length) - (i = xc.length);

      // Append zeros to xc if shorter.
      // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
      if (b > 0) for (; b--; xc[i++] = 0);
      b = BASE - 1;

      // Subtract yc from xc.
      for (; j > a;) {

        if (xc[--j] < yc[j]) {
          for (i = j; i && !xc[--i]; xc[i] = b);
          --xc[i];
          xc[j] += BASE;
        }

        xc[j] -= yc[j];
      }

      // Remove leading zeros and adjust exponent accordingly.
      for (; xc[0] == 0; xc.splice(0, 1), --ye);

      // Zero?
      if (!xc[0]) {

        // Following IEEE 754 (2008) 6.3,
        // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
        y.s = ROUNDING_MODE == 3 ? -1 : 1;
        y.c = [y.e = 0];
        return y;
      }

      // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
      // for finite x and y.
      return normalise(y, xc, ye);
    };


    /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */
    P.modulo = P.mod = function (y, b) {
      var q, s,
        x = this;

      y = new BigNumber(y, b);

      // Return NaN if x is Infinity or NaN, or y is NaN or zero.
      if (!x.c || !y.s || y.c && !y.c[0]) {
        return new BigNumber(NaN);

      // Return x if y is Infinity or x is zero.
      } else if (!y.c || x.c && !x.c[0]) {
        return new BigNumber(x);
      }

      if (MODULO_MODE == 9) {

        // Euclidian division: q = sign(y) * floor(x / abs(y))
        // r = x - qy    where  0 <= r < abs(y)
        s = y.s;
        y.s = 1;
        q = div(x, y, 0, 3);
        y.s = s;
        q.s *= s;
      } else {
        q = div(x, y, 0, MODULO_MODE);
      }

      y = x.minus(q.times(y));

      // To match JavaScript %, ensure sign of zero is sign of dividend.
      if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

      return y;
    };


    /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */
    P.multipliedBy = P.times = function (y, b) {
      var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
        base, sqrtBase,
        x = this,
        xc = x.c,
        yc = (y = new BigNumber(y, b)).c;

      // Either NaN, ±Infinity or ±0?
      if (!xc || !yc || !xc[0] || !yc[0]) {

        // Return NaN if either is NaN, or one is 0 and the other is Infinity.
        if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
          y.c = y.e = y.s = null;
        } else {
          y.s *= x.s;

          // Return ±Infinity if either is ±Infinity.
          if (!xc || !yc) {
            y.c = y.e = null;

          // Return ±0 if either is ±0.
          } else {
            y.c = [0];
            y.e = 0;
          }
        }

        return y;
      }

      e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
      y.s *= x.s;
      xcL = xc.length;
      ycL = yc.length;

      // Ensure xc points to longer array and xcL to its length.
      if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

      // Initialise the result array with zeros.
      for (i = xcL + ycL, zc = []; i--; zc.push(0));

      base = BASE;
      sqrtBase = SQRT_BASE;

      for (i = ycL; --i >= 0;) {
        c = 0;
        ylo = yc[i] % sqrtBase;
        yhi = yc[i] / sqrtBase | 0;

        for (k = xcL, j = i + k; j > i;) {
          xlo = xc[--k] % sqrtBase;
          xhi = xc[k] / sqrtBase | 0;
          m = yhi * xlo + xhi * ylo;
          xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
          c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
          zc[j--] = xlo % base;
        }

        zc[j] = c;
      }

      if (c) {
        ++e;
      } else {
        zc.splice(0, 1);
      }

      return normalise(y, zc, e);
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */
    P.negated = function () {
      var x = new BigNumber(this);
      x.s = -x.s || null;
      return x;
    };


    /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */
    P.plus = function (y, b) {
      var t,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
       if (a != b) {
        y.s = -b;
        return x.minus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Return ±Infinity if either ±Infinity.
        if (!xc || !yc) return new BigNumber(a / 0);

        // Either zero?
        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
      if (a = xe - ye) {
        if (a > 0) {
          ye = xe;
          t = yc;
        } else {
          a = -a;
          t = xc;
        }

        t.reverse();
        for (; a--; t.push(0));
        t.reverse();
      }

      a = xc.length;
      b = yc.length;

      // Point xc to the longer array, and b to the shorter length.
      if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

      // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
      for (a = 0; b;) {
        a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
      }

      if (a) {
        xc = [a].concat(xc);
        ++ye;
      }

      // No need to check for zero, as +x + +y != 0 && -x + -y != 0
      // ye = MAX_EXP + 1 possible
      return normalise(y, xc, ye);
    };


    /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.precision = P.sd = function (sd, rm) {
      var c, n, v,
        x = this;

      if (sd != null && sd !== !!sd) {
        intCheck(sd, 1, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), sd, rm);
      }

      if (!(c = x.c)) return null;
      v = c.length - 1;
      n = v * LOG_BASE + 1;

      if (v = c[v]) {

        // Subtract the number of trailing zeros of the last element.
        for (; v % 10 == 0; v /= 10, n--);

        // Add the number of digits of the first element.
        for (v = c[0]; v >= 10; v /= 10, n++);
      }

      if (sd && x.e + 1 > n) n = x.e + 1;

      return n;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */
    P.shiftedBy = function (k) {
      intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
      return this.times('1e' + k);
    };


    /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.squareRoot = P.sqrt = function () {
      var m, n, r, rep, t,
        x = this,
        c = x.c,
        s = x.s,
        e = x.e,
        dp = DECIMAL_PLACES + 4,
        half = new BigNumber('0.5');

      // Negative/NaN/Infinity/zero?
      if (s !== 1 || !c || !c[0]) {
        return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
      }

      // Initial estimate.
      s = Math.sqrt(+valueOf(x));

      // Math.sqrt underflow/overflow?
      // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
      if (s == 0 || s == 1 / 0) {
        n = coeffToString(c);
        if ((n.length + e) % 2 == 0) n += '0';
        s = Math.sqrt(+n);
        e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

        if (s == 1 / 0) {
          n = '5e' + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf('e') + 1) + e;
        }

        r = new BigNumber(n);
      } else {
        r = new BigNumber(s + '');
      }

      // Check for zero.
      // r could be zero if MIN_EXP is changed after the this value was created.
      // This would cause a division by zero (x/t) and hence Infinity below, which would cause
      // coeffToString to throw.
      if (r.c[0]) {
        e = r.e;
        s = e + dp;
        if (s < 3) s = 0;

        // Newton-Raphson iteration.
        for (; ;) {
          t = r;
          r = half.times(t.plus(div(x, t, dp, 1)));

          if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

            // The exponent of r may here be one less than the final result exponent,
            // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
            // are indexed correctly.
            if (r.e < e) --s;
            n = n.slice(s - 3, s + 1);

            // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
            // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
            // iteration.
            if (n == '9999' || !rep && n == '4999') {

              // On the first iteration only, check to see if rounding up gives the
              // exact result as the nines may infinitely repeat.
              if (!rep) {
                round(t, t.e + DECIMAL_PLACES + 2, 0);

                if (t.times(t).eq(x)) {
                  r = t;
                  break;
                }
              }

              dp += 4;
              s += 4;
              rep = 1;
            } else {

              // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
              // result. If not, then there are further digits and m will be truthy.
              if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                // Truncate to the first rounding digit.
                round(r, r.e + DECIMAL_PLACES + 2, 1);
                m = !r.times(r).eq(x);
              }

              break;
            }
          }
        }
      }

      return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
    };


    /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toExponential = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp++;
      }
      return format(this, dp, rm, 1);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toFixed = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp = dp + this.e + 1;
      }
      return format(this, dp, rm);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */
    P.toFormat = function (dp, rm, format) {
      var str,
        x = this;

      if (format == null) {
        if (dp != null && rm && typeof rm == 'object') {
          format = rm;
          rm = null;
        } else if (dp && typeof dp == 'object') {
          format = dp;
          dp = rm = null;
        } else {
          format = FORMAT;
        }
      } else if (typeof format != 'object') {
        throw Error
          (bignumberError + 'Argument not an object: ' + format);
      }

      str = x.toFixed(dp, rm);

      if (x.c) {
        var i,
          arr = str.split('.'),
          g1 = +format.groupSize,
          g2 = +format.secondaryGroupSize,
          groupSeparator = format.groupSeparator || '',
          intPart = arr[0],
          fractionPart = arr[1],
          isNeg = x.s < 0,
          intDigits = isNeg ? intPart.slice(1) : intPart,
          len = intDigits.length;

        if (g2) i = g1, g1 = g2, g2 = i, len -= i;

        if (g1 > 0 && len > 0) {
          i = len % g1 || g1;
          intPart = intDigits.substr(0, i);
          for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
          if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
          if (isNeg) intPart = '-' + intPart;
        }

        str = fractionPart
         ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
          ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
           '$&' + (format.fractionGroupSeparator || ''))
          : fractionPart)
         : intPart;
      }

      return (format.prefix || '') + str + (format.suffix || '');
    };


    /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */
    P.toFraction = function (md) {
      var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
        x = this,
        xc = x.c;

      if (md != null) {
        n = new BigNumber(md);

        // Throw if md is less than one or is not an integer, unless it is Infinity.
        if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
          throw Error
            (bignumberError + 'Argument ' +
              (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
        }
      }

      if (!xc) return new BigNumber(x);

      d = new BigNumber(ONE);
      n1 = d0 = new BigNumber(ONE);
      d1 = n0 = new BigNumber(ONE);
      s = coeffToString(xc);

      // Determine initial denominator.
      // d is a power of 10 and the minimum max denominator that specifies the value exactly.
      e = d.e = s.length - x.e - 1;
      d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
      md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

      exp = MAX_EXP;
      MAX_EXP = 1 / 0;
      n = new BigNumber(s);

      // n0 = d1 = 0
      n0.c[0] = 0;

      for (; ;)  {
        q = div(n, d, 0, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.comparedTo(md) == 1) break;
        d0 = d1;
        d1 = d2;
        n1 = n0.plus(q.times(d2 = n1));
        n0 = d2;
        d = n.minus(q.times(d2 = d));
        n = d2;
      }

      d2 = div(md.minus(d0), d1, 0, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      e = e * 2;

      // Determine which fraction is closer to x, n0/d0 or n1/d1
      r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
          div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

      MAX_EXP = exp;

      return r;
    };


    /*
     * Return the value of this BigNumber converted to a number primitive.
     */
    P.toNumber = function () {
      return +valueOf(this);
    };


    /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.toPrecision = function (sd, rm) {
      if (sd != null) intCheck(sd, 1, MAX);
      return format(this, sd, rm, 2);
    };


    /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */
    P.toString = function (b) {
      var str,
        n = this,
        s = n.s,
        e = n.e;

      // Infinity or NaN?
      if (e === null) {
        if (s) {
          str = 'Infinity';
          if (s < 0) str = '-' + str;
        } else {
          str = 'NaN';
        }
      } else {
        if (b == null) {
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
           ? toExponential(coeffToString(n.c), e)
           : toFixedPoint(coeffToString(n.c), e, '0');
        } else if (b === 10 && alphabetHasNormalDecimalDigits) {
          n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
          str = toFixedPoint(coeffToString(n.c), n.e, '0');
        } else {
          intCheck(b, 2, ALPHABET.length, 'Base');
          str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
        }

        if (s < 0 && n.c[0]) str = '-' + str;
      }

      return str;
    };


    /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */
    P.valueOf = P.toJSON = function () {
      return valueOf(this);
    };


    P._isBigNumber = true;

    if (configObject != null) BigNumber.set(configObject);

    return BigNumber;
  }


  // PRIVATE HELPER FUNCTIONS

  // These functions don't need access to variables,
  // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


  function bitFloor(n) {
    var i = n | 0;
    return n > 0 || n === i ? i : i - 1;
  }


  // Return a coefficient array as a string of base 10 digits.
  function coeffToString(a) {
    var s, z,
      i = 1,
      j = a.length,
      r = a[0] + '';

    for (; i < j;) {
      s = a[i++] + '';
      z = LOG_BASE - s.length;
      for (; z--; s = '0' + s);
      r += s;
    }

    // Determine trailing zeros.
    for (j = r.length; r.charCodeAt(--j) === 48;);

    return r.slice(0, j + 1 || 1);
  }


  // Compare the value of BigNumbers x and y.
  function compare(x, y) {
    var a, b,
      xc = x.c,
      yc = y.c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    // Either NaN?
    if (!i || !j) return null;

    a = xc && !xc[0];
    b = yc && !yc[0];

    // Either zero?
    if (a || b) return a ? b ? 0 : -j : i;

    // Signs differ?
    if (i != j) return i;

    a = i < 0;
    b = k == l;

    // Either Infinity?
    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

    // Compare exponents.
    if (!b) return k > l ^ a ? 1 : -1;

    j = (k = xc.length) < (l = yc.length) ? k : l;

    // Compare digit by digit.
    for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

    // Compare lengths.
    return k == l ? 0 : k > l ^ a ? 1 : -1;
  }


  /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */
  function intCheck(n, min, max, name) {
    if (n < min || n > max || n !== mathfloor(n)) {
      throw Error
       (bignumberError + (name || 'Argument') + (typeof n == 'number'
         ? n < min || n > max ? ' out of range: ' : ' not an integer: '
         : ' not a primitive number: ') + String(n));
    }
  }


  // Assumes finite n.
  function isOdd(n) {
    var k = n.c.length - 1;
    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
  }


  function toExponential(str, e) {
    return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
     (e < 0 ? 'e' : 'e+') + e;
  }


  function toFixedPoint(str, e, z) {
    var len, zs;

    // Negative exponent?
    if (e < 0) {

      // Prepend zeros.
      for (zs = z + '.'; ++e; zs += z);
      str = zs + str;

    // Positive exponent
    } else {
      len = str.length;

      // Append zeros.
      if (++e > len) {
        for (zs = z, e -= len; --e; zs += z);
        str += zs;
      } else if (e < len) {
        str = str.slice(0, e) + '.' + str.slice(e);
      }
    }

    return str;
  }


  // EXPORT


  BigNumber = clone();
  BigNumber['default'] = BigNumber.BigNumber = BigNumber;

  // AMD.
  if (typeof define == 'function' && define.amd) {
    define(function () { return BigNumber; });

  // Node.js and other environments that support module.exports.
  } else if (typeof module != 'undefined' && module.exports) {
    module.exports = BigNumber;

  // Browser.
  } else {
    if (!globalObject) {
      globalObject = typeof self != 'undefined' && self ? self : window;
    }

    globalObject.BigNumber = BigNumber;
  }
})(this);

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateAmountPurchasedToken = calculateAmountPurchasedToken;
exports.calculateAmountSoldToken = calculateAmountSoldToken;
exports.getLpTokenPriceBigNumberWithDecimals = getLpTokenPriceBigNumberWithDecimals;

var _secondary_functions = require("./secondary_functions.js");

var _contracts_and_abi = require("./contracts_and_abi.js");

const BigNumber = require('bignumber.js'); // (x + dx ) ( y - dy) = cst
// return y - cst / (x + dx)


async function calculateAmountPurchasedToken(amountSoldToken, tokenForSale) {
  // x : sold token 
  // y : purchased token
  const totalLinkAvaialbe = await (0, _secondary_functions.getTotalAvailableLinkBigNumberWithDecimals)();
  const totalUsdcAvailable = await (0, _secondary_functions.getTotalAvailableUsdcBigNumberWithDecimals)();
  const numberDecimalsSoldToken = tokenForSale == 0 ? 18 : 6;
  const numberDecimalsPurchasedToken = tokenForSale == 0 ? 6 : 18;
  const x = tokenForSale == 0 ? totalLinkAvaialbe : totalUsdcAvailable;
  const y = tokenForSale == 0 ? totalUsdcAvailable : totalLinkAvaialbe;
  const d_x = (0, _secondary_functions.getBigNumberWithDecimals)(amountSoldToken, numberDecimalsSoldToken);
  const d_y = y.minus(totalLinkAvaialbe.multipliedBy(totalUsdcAvailable).dividedBy(x.plus(d_x)));
  return d_y.shiftedBy(-numberDecimalsPurchasedToken).toNumber();
} // (x + dx ) ( y - dy) = cst
// return cst / (y - dy) - x


async function calculateAmountSoldToken(amountPurchasedToken, tokenForSale) {
  const totalLinkAvaialbe = await (0, _secondary_functions.getTotalAvailableLinkBigNumberWithDecimals)();
  const totalUsdcAvailable = await (0, _secondary_functions.getTotalAvailableUsdcBigNumberWithDecimals)();
  const numberDecimalsSoldToken = tokenForSale == 0 ? 18 : 6;
  const numberDecimalsPurchasedToken = tokenForSale == 0 ? 6 : 18;
  const x = tokenForSale == 0 ? totalLinkAvaialbe : totalUsdcAvailable;
  const y = tokenForSale == 0 ? totalUsdcAvailable : totalLinkAvaialbe;
  const d_y = (0, _secondary_functions.getBigNumberWithDecimals)(amountPurchasedToken, numberDecimalsPurchasedToken);
  const d_x = totalLinkAvaialbe.multipliedBy(totalUsdcAvailable).dividedBy(y.minus(d_y)).minus(x);
  return d_x.shiftedBy(-numberDecimalsSoldToken).toNumber();
}

async function getLpTokenPriceBigNumberWithDecimals() {
  const readOptionsGetLpTokenPrice = {
    contractAddress: _contracts_and_abi.simpleSwapInfo["contractAddress"],
    functionName: "getLpTokenPrice",
    abi: _contracts_and_abi.simpleSwapInfo["abi"]
  };
  const [lpTokenPriceLink, lpTokenPriceUsdc] = await Moralis.executeFunction(readOptionsGetLpTokenPrice);
  return [new BigNumber(lpTokenPriceLink.toString()), new BigNumber(lpTokenPriceUsdc.toString())];
}

},{"./contracts_and_abi.js":5,"./secondary_functions.js":9,"bignumber.js":7}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.approve = approve;
exports.getBigNumberWithDecimals = getBigNumberWithDecimals;
exports.getTotalAmountLpTokensBigNumberWithDecimals = getTotalAmountLpTokensBigNumberWithDecimals;
exports.getTotalAvailableLinkBigNumberWithDecimals = getTotalAvailableLinkBigNumberWithDecimals;
exports.getTotalAvailableUsdcBigNumberWithDecimals = getTotalAvailableUsdcBigNumberWithDecimals;
exports.reverseButtons = reverseButtons;

var _contracts_and_abi = require("./contracts_and_abi.js");

var _autocompletion_functions = require("./autocompletion_functions.js");

const BigNumber = require('bignumber.js');

async function approve(amountBigNumberWithDecimalsStr, spenderAddress, contractAddress, abi) {
  const writeOptionsApproval = {
    contractAddress: contractAddress,
    functionName: "approve",
    abi: abi,
    params: {
      spender: spenderAddress,
      amount: amountBigNumberWithDecimalsStr
    }
  };
  return await Moralis.executeFunction(writeOptionsApproval);
}

function getBigNumberWithDecimals(x, numberDecimals) {
  const xAsBigNumber = new BigNumber(x.toFixed(numberDecimals));
  const ScalingFactorAsBigNumber = new BigNumber("1".concat("0".repeat(numberDecimals)));
  return xAsBigNumber.multipliedBy(ScalingFactorAsBigNumber);
}

async function getTotalAvailableLinkBigNumberWithDecimals() {
  const readOptionsTotalAvailableLink = {
    contractAddress: _contracts_and_abi.simpleSwapInfo["contractAddress"],
    functionName: "totalAvailableLink",
    abi: _contracts_and_abi.simpleSwapInfo["abi"]
  };
  const totalAvailableLink = await Moralis.executeFunction(readOptionsTotalAvailableLink);
  const totalAvailableLinkBigNumber = new BigNumber(totalAvailableLink.toString());
  return totalAvailableLinkBigNumber;
}

async function getTotalAvailableUsdcBigNumberWithDecimals() {
  const readOptionsTotalAvailableUSDC = {
    contractAddress: _contracts_and_abi.simpleSwapInfo["contractAddress"],
    functionName: "totalAvailableUSDC",
    abi: _contracts_and_abi.simpleSwapInfo["abi"]
  };
  const totalAvailableUSDC = await Moralis.executeFunction(readOptionsTotalAvailableUSDC);
  const totalAvailableUSDCBigNumber = new BigNumber(totalAvailableUSDC.toString());
  return totalAvailableUSDCBigNumber;
}

async function getTotalAmountLpTokensBigNumberWithDecimals() {
  const readOptionsTotalLpTokens = {
    contractAddress: _contracts_and_abi.simpleSwapInfo["contractAddress"],
    functionName: "totalLpTokens",
    abi: _contracts_and_abi.simpleSwapInfo["abi"]
  };
  const totalAmountLpTokens = await Moralis.executeFunction(readOptionsTotalLpTokens);
  const totalAmountLpTokensBigNumber = new BigNumber(totalAmountLpTokens.toString());
  return totalAmountLpTokensBigNumber;
}

function reverseButtons(tokenForSale) {
  console.log("entering reverse buttons");
  const linkInput = document.getElementById("link-input");
  const usdcInput = document.getElementById("usdc-input");
  const linkLabel = document.getElementById("link-swap-label-id");
  const usdcLabel = document.getElementById("usdc-swap-label-id");
  linkInput.id = "usdc-input";
  linkInput.value = 0;

  linkInput.onchange = async () => {
    await (0, _autocompletion_functions.changeLinkInput)(tokenForSale);
    (0, _autocompletion_functions.changeMinAmountReceived)(tokenForSale);
  };

  usdcInput.id = "link-input";
  usdcInput.value = 0;

  usdcInput.onchange = async () => {
    await (0, _autocompletion_functions.changeUsdcInput)(tokenForSale);
    (0, _autocompletion_functions.changeMinAmountReceived)(tokenForSale);
  };

  linkLabel.id = "usdc-swap-label-id";
  linkLabel.innerHTML = "USDC";
  linkLabel.setAttribute("for", "usdc-input");
  usdcLabel.id = "link-swap-label-id";
  usdcLabel.innerHTML = "LINK";
  usdcLabel.setAttribute("for", "link-input");
}

},{"./autocompletion_functions.js":4,"./contracts_and_abi.js":5,"bignumber.js":7}]},{},[6]);
