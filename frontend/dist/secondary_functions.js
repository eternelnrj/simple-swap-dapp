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
        1066
      ],
      "IERC20": [
        33
      ],
      "Ownable": [
        733
      ],
      "SafeMath": [
        1045
      ],
      "SimpleSwap": [
        629
      ]
    },
    "id": 630,
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
        "scope": 630,
        "sourceUnit": 1046,
        "src": "64:57:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 630,
        "sourceUnit": 734,
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
        "scope": 630,
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
              "referencedDeclaration": 733,
              "src": "485:7:3"
            },
            "id": 35,
            "nodeType": "InheritanceSpecifier",
            "src": "485:7:3"
          }
        ],
        "contractDependencies": [
          733,
          1066
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 629,
        "linearizedBaseContracts": [
          629,
          733,
          1066
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
              "referencedDeclaration": 1045,
              "src": "504:8:3"
            },
            "nodeType": "UsingForDirective",
            "src": "498:27:3",
            "typeName": {
              "id": 37,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "517:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "SimpleSwap.Tokens",
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
            "name": "Tokens",
            "nodeType": "EnumDefinition",
            "src": "531:23:3"
          },
          {
            "constant": false,
            "id": 44,
            "mutability": "mutable",
            "name": "addressLink",
            "nodeType": "VariableDeclaration",
            "scope": 629,
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
            "scope": 629,
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
            "scope": 629,
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
            "scope": 629,
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
            "scope": 629,
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
            "scope": 629,
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
            "name": "isPoolInitiated",
            "nodeType": "VariableDeclaration",
            "scope": 629,
            "src": "1109:28:3",
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
              "src": "1132:5:3",
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
            "scope": 629,
            "src": "1144:48:3",
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
                "src": "1152:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1144:27:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 68,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1163:7:3",
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
              "src": "1297:715:3",
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
                        "src": "1315:16:3",
                        "subExpression": {
                          "id": 80,
                          "name": "isPoolInitiated",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66,
                          "src": "1316:15:3",
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
                        "hexValue": "54686520706f6f6c2077617320616c726561647920696e69746961746564",
                        "id": 82,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1333:32:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_41608b195b2f075782b018f76cf076ad4c2f39a8d275fb9a800ce7c8666cc5cc",
                          "typeString": "literal_string \"The pool was already initiated\""
                        },
                        "value": "The pool was already initiated"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_41608b195b2f075782b018f76cf076ad4c2f39a8d275fb9a800ce7c8666cc5cc",
                          "typeString": "literal_string \"The pool was already initiated\""
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
                      "src": "1307:7:3",
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
                    "src": "1307:59:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "1307:59:3"
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
                      "name": "isPoolInitiated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 66,
                      "src": "1376:15:3",
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
                      "src": "1394:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1376:22:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 88,
                  "nodeType": "ExpressionStatement",
                  "src": "1376:22:3"
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
                      "src": "1408:11:3",
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
                          "src": "1408:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "1408:6:3",
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
                        "src": "1429:11:3",
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
                      "src": "1422:6:3",
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
                    "src": "1422:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1408:33:3"
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
                      "src": "1451:11:3",
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
                          "src": "1451:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "1451:6:3",
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
                        "src": "1472:11:3",
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
                      "src": "1465:6:3",
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
                    "src": "1465:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1451:33:3"
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
                              "src": "1521:3:3",
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
                            "src": "1521:10:3",
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
                                "src": "1541:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$629",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$629",
                                  "typeString": "contract SimpleSwap"
                                }
                              ],
                              "id": 109,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1533:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 108,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1533:7:3",
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
                            "src": "1533:13:3",
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
                            "src": "1548:18:3",
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
                            "src": "1503:4:3",
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
                          "src": "1503:17:3",
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
                        "src": "1503:64:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4c696e6b20616d6f756e7420756e617661696c61626c652e",
                        "id": 114,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1569:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_591cf3d3018fa9e37e640351a76135b58faebb191920a81c66c2abc7a2e848f6",
                          "typeString": "literal_string \"Link amount unavailable.\""
                        },
                        "value": "Link amount unavailable."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_591cf3d3018fa9e37e640351a76135b58faebb191920a81c66c2abc7a2e848f6",
                          "typeString": "literal_string \"Link amount unavailable.\""
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
                      "src": "1495:7:3",
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
                    "src": "1495:101:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 116,
                  "nodeType": "ExpressionStatement",
                  "src": "1495:101:3"
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
                              "src": "1632:3:3",
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
                            "src": "1632:10:3",
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
                                "src": "1652:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$629",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$629",
                                  "typeString": "contract SimpleSwap"
                                }
                              ],
                              "id": 123,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1644:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 122,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1644:7:3",
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
                            "src": "1644:13:3",
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
                            "src": "1659:18:3",
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
                            "src": "1614:4:3",
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
                          "src": "1614:17:3",
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
                        "src": "1614:64:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5553444320616d6f756e7420756e617661696c61626c652e",
                        "id": 128,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1680:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5242f098d6ef367a38ad451edc792a59ddb5e521292071330cacb901006b65cd",
                          "typeString": "literal_string \"USDC amount unavailable.\""
                        },
                        "value": "USDC amount unavailable."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5242f098d6ef367a38ad451edc792a59ddb5e521292071330cacb901006b65cd",
                          "typeString": "literal_string \"USDC amount unavailable.\""
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
                      "src": "1606:7:3",
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
                    "src": "1606:101:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 130,
                  "nodeType": "ExpressionStatement",
                  "src": "1606:101:3"
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
                      "src": "1718:18:3",
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
                          "src": "1762:18:3",
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
                          "src": "1739:18:3",
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
                        "referencedDeclaration": 909,
                        "src": "1739:22:3",
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
                      "src": "1739:42:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1718:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "1718:63:3"
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
                      "src": "1791:18:3",
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
                          "src": "1835:18:3",
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
                          "src": "1812:18:3",
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
                        "referencedDeclaration": 909,
                        "src": "1812:22:3",
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
                      "src": "1812:42:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1791:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 144,
                  "nodeType": "ExpressionStatement",
                  "src": "1791:63:3"
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
                      "src": "1865:13:3",
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
                      "src": "1881:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1865:34:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 148,
                  "nodeType": "ExpressionStatement",
                  "src": "1865:34:3"
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
                        "src": "1910:20:3",
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
                          "src": "1931:3:3",
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
                        "src": "1931:10:3",
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
                      "src": "1910:32:3",
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
                          "src": "1982:13:3",
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
                            "src": "1945:20:3",
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
                              "src": "1966:3:3",
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
                            "src": "1966:10:3",
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
                          "src": "1945:32:3",
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
                        "referencedDeclaration": 909,
                        "src": "1945:36:3",
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
                      "src": "1945:51:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1910:86:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 161,
                  "nodeType": "ExpressionStatement",
                  "src": "1910:86:3"
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
                  "referencedDeclaration": 676,
                  "src": "1287:9:3"
                },
                "nodeType": "ModifierInvocation",
                "src": "1287:9:3"
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
                  "src": "1224:26:3",
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
                    "src": "1224:7:3",
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
                  "src": "1252:26:3",
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
                    "src": "1252:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1223:56:3"
            },
            "returnParameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1297:0:3"
            },
            "scope": 629,
            "src": "1202:810:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 283,
              "nodeType": "Block",
              "src": "2146:1161:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 174,
                        "name": "isPoolInitiated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66,
                        "src": "2164:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520706f6f6c2073686f756c6420626520696e697469617465642066697273742e",
                        "id": 175,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2181:37:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_608d25f69640ce0cca05f1a985beb91244e3b0aa2a675a272c818d6d7cad3c94",
                          "typeString": "literal_string \"The pool should be initiated first.\""
                        },
                        "value": "The pool should be initiated first."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_608d25f69640ce0cca05f1a985beb91244e3b0aa2a675a272c818d6d7cad3c94",
                          "typeString": "literal_string \"The pool should be initiated first.\""
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
                      "src": "2156:7:3",
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
                    "src": "2156:63:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 177,
                  "nodeType": "ExpressionStatement",
                  "src": "2156:63:3"
                },
                {
                  "assignments": [
                    179
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 179,
                      "mutability": "mutable",
                      "name": "amountPurchasedToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 283,
                      "src": "2229:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 178,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2229:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 184,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 181,
                        "name": "quantitySoldToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 165,
                        "src": "2284:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 182,
                        "name": "tokenForSale",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 170,
                        "src": "2303:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_Tokens_$41",
                          "typeString": "enum SimpleSwap.Tokens"
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
                          "typeIdentifier": "t_enum$_Tokens_$41",
                          "typeString": "enum SimpleSwap.Tokens"
                        }
                      ],
                      "id": 180,
                      "name": "getAmountPurchasedToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 600,
                      "src": "2260:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_enum$_Tokens_$41_$returns$_t_uint256_$",
                        "typeString": "function (uint256,enum SimpleSwap.Tokens) view returns (uint256)"
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
                    "src": "2260:56:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2229:87:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 188,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 186,
                          "name": "amountPurchasedToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 179,
                          "src": "2334:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 187,
                          "name": "minAmountPurchasedToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 167,
                          "src": "2358:23:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2334:47:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520616d6f756e74206f662070757263686173656420746f6b656e206973206c6f776572207468616e2072657175697265642e",
                        "id": 189,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2383:55:3",
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
                      "id": 185,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2326:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
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
                    "src": "2326:113:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 191,
                  "nodeType": "ExpressionStatement",
                  "src": "2326:113:3"
                },
                {
                  "assignments": [
                    194
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 194,
                      "mutability": "mutable",
                      "name": "soldToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 283,
                      "src": "2450:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 193,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 192,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "2450:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "2450:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 195,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2450:16:3"
                },
                {
                  "assignments": [
                    198
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 198,
                      "mutability": "mutable",
                      "name": "boughtToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 283,
                      "src": "2476:18:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 197,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 196,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "2476:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "2476:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 199,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2476:18:3"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_enum$_Tokens_$41",
                      "typeString": "enum SimpleSwap.Tokens"
                    },
                    "id": 203,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 200,
                      "name": "tokenForSale",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 170,
                      "src": "2509:12:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_Tokens_$41",
                        "typeString": "enum SimpleSwap.Tokens"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "id": 201,
                        "name": "Tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "2525:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_Tokens_$41_$",
                          "typeString": "type(enum SimpleSwap.Tokens)"
                        }
                      },
                      "id": 202,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "Link",
                      "nodeType": "MemberAccess",
                      "src": "2525:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_Tokens_$41",
                        "typeString": "enum SimpleSwap.Tokens"
                      }
                    },
                    "src": "2509:27:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 257,
                    "nodeType": "Block",
                    "src": "2813:260:3",
                    "statements": [
                      {
                        "expression": {
                          "id": 236,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 231,
                            "name": "totalAvailableLink",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50,
                            "src": "2827:18:3",
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
                                "id": 234,
                                "name": "amountPurchasedToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 179,
                                "src": "2871:20:3",
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
                                "id": 232,
                                "name": "totalAvailableLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50,
                                "src": "2848:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 233,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 924,
                              "src": "2848:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 235,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2848:44:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2827:65:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 237,
                        "nodeType": "ExpressionStatement",
                        "src": "2827:65:3"
                      },
                      {
                        "expression": {
                          "id": 243,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 238,
                            "name": "totalAvailableUSDC",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53,
                            "src": "2906:18:3",
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
                                "name": "quantitySoldToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 165,
                                "src": "2950:17:3",
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
                                "name": "totalAvailableUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53,
                                "src": "2927:18:3",
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
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 909,
                              "src": "2927:22:3",
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
                            "src": "2927:41:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2906:62:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 244,
                        "nodeType": "ExpressionStatement",
                        "src": "2906:62:3"
                      },
                      {
                        "expression": {
                          "id": 249,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 245,
                            "name": "soldToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 194,
                            "src": "2983:9:3",
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
                                "id": 247,
                                "name": "addressUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47,
                                "src": "3002:11:3",
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
                              "id": 246,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33,
                              "src": "2995:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 248,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2995:19:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "src": "2983:31:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$33",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 250,
                        "nodeType": "ExpressionStatement",
                        "src": "2983:31:3"
                      },
                      {
                        "expression": {
                          "id": 255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 251,
                            "name": "boughtToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 198,
                            "src": "3029:11:3",
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
                                "id": 253,
                                "name": "addressLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 44,
                                "src": "3050:11:3",
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
                              "id": 252,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33,
                              "src": "3043:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 254,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3043:19:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "src": "3029:33:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$33",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 256,
                        "nodeType": "ExpressionStatement",
                        "src": "3029:33:3"
                      }
                    ]
                  },
                  "id": 258,
                  "nodeType": "IfStatement",
                  "src": "2505:568:3",
                  "trueBody": {
                    "id": 230,
                    "nodeType": "Block",
                    "src": "2538:260:3",
                    "statements": [
                      {
                        "expression": {
                          "id": 209,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 204,
                            "name": "totalAvailableLink",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50,
                            "src": "2552:18:3",
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
                                "id": 207,
                                "name": "quantitySoldToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 165,
                                "src": "2597:17:3",
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
                                "id": 205,
                                "name": "totalAvailableLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50,
                                "src": "2574:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 206,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 909,
                              "src": "2574:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 208,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2574:41:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2552:63:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 210,
                        "nodeType": "ExpressionStatement",
                        "src": "2552:63:3"
                      },
                      {
                        "expression": {
                          "id": 216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 211,
                            "name": "totalAvailableUSDC",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53,
                            "src": "2629:18:3",
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
                                "name": "amountPurchasedToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 179,
                                "src": "2673:20:3",
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
                                "name": "totalAvailableUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53,
                                "src": "2650:18:3",
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
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 924,
                              "src": "2650:22:3",
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
                            "src": "2650:44:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2629:65:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 217,
                        "nodeType": "ExpressionStatement",
                        "src": "2629:65:3"
                      },
                      {
                        "expression": {
                          "id": 222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 218,
                            "name": "soldToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 194,
                            "src": "2709:9:3",
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
                                "id": 220,
                                "name": "addressLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 44,
                                "src": "2728:11:3",
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
                              "id": 219,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33,
                              "src": "2721:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 221,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2721:19:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "src": "2709:31:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$33",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 223,
                        "nodeType": "ExpressionStatement",
                        "src": "2709:31:3"
                      },
                      {
                        "expression": {
                          "id": 228,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 224,
                            "name": "boughtToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 198,
                            "src": "2754:11:3",
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
                                "id": 226,
                                "name": "addressUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47,
                                "src": "2775:11:3",
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
                              "id": 225,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33,
                              "src": "2768:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 227,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2768:19:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "src": "2754:33:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$33",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 229,
                        "nodeType": "ExpressionStatement",
                        "src": "2754:33:3"
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
                              "id": 262,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3120:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 263,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "3120:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 264,
                            "name": "amountPurchasedToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 179,
                            "src": "3132:20:3",
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
                            "id": 260,
                            "name": "boughtToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 198,
                            "src": "3099:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 261,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 12,
                          "src": "3099:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 265,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3099:54:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "546f6b656e20616d6f756e7420756e617661696c61626c652e",
                        "id": 266,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3155:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a1af1d15535e7bc442ee0e618061f403bb916475c60a0adcfe0a67a8291d42ab",
                          "typeString": "literal_string \"Token amount unavailable.\""
                        },
                        "value": "Token amount unavailable."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a1af1d15535e7bc442ee0e618061f403bb916475c60a0adcfe0a67a8291d42ab",
                          "typeString": "literal_string \"Token amount unavailable.\""
                        }
                      ],
                      "id": 259,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3091:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 267,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3091:92:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 268,
                  "nodeType": "ExpressionStatement",
                  "src": "3091:92:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 272,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3224:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 273,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "3224:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 276,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "3244:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$629",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$629",
                                  "typeString": "contract SimpleSwap"
                                }
                              ],
                              "id": 275,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3236:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 274,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3236:7:3",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3236:13:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 278,
                            "name": "quantitySoldToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 165,
                            "src": "3251:17:3",
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
                            "id": 270,
                            "name": "soldToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 194,
                            "src": "3201:9:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 271,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23,
                          "src": "3201:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 279,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3201:68:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "546f6b656e20616d6f756e7420756e617661696c61626c652e",
                        "id": 280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3271:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a1af1d15535e7bc442ee0e618061f403bb916475c60a0adcfe0a67a8291d42ab",
                          "typeString": "literal_string \"Token amount unavailable.\""
                        },
                        "value": "Token amount unavailable."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a1af1d15535e7bc442ee0e618061f403bb916475c60a0adcfe0a67a8291d42ab",
                          "typeString": "literal_string \"Token amount unavailable.\""
                        }
                      ],
                      "id": 269,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3193:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3193:106:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 282,
                  "nodeType": "ExpressionStatement",
                  "src": "3193:106:3"
                }
              ]
            },
            "functionSelector": "5c36d25e",
            "id": 284,
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
                  "scope": 284,
                  "src": "2058:25:3",
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
                    "src": "2058:7:3",
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
                  "scope": 284,
                  "src": "2085:31:3",
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
                    "src": "2085:7:3",
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
                  "scope": 284,
                  "src": "2118:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Tokens_$41",
                    "typeString": "enum SimpleSwap.Tokens"
                  },
                  "typeName": {
                    "id": 169,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 168,
                      "name": "Tokens",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41,
                      "src": "2118:6:3"
                    },
                    "referencedDeclaration": 41,
                    "src": "2118:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Tokens_$41",
                      "typeString": "enum SimpleSwap.Tokens"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2057:81:3"
            },
            "returnParameters": {
              "id": 172,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2146:0:3"
            },
            "scope": 629,
            "src": "2044:1263:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 408,
              "nodeType": "Block",
              "src": "3385:1087:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 290,
                        "name": "isPoolInitiated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66,
                        "src": "3403:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520706f6f6c2073686f756c6420626520696e697469617465642066697273742e",
                        "id": 291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3420:37:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_608d25f69640ce0cca05f1a985beb91244e3b0aa2a675a272c818d6d7cad3c94",
                          "typeString": "literal_string \"The pool should be initiated first.\""
                        },
                        "value": "The pool should be initiated first."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_608d25f69640ce0cca05f1a985beb91244e3b0aa2a675a272c818d6d7cad3c94",
                          "typeString": "literal_string \"The pool should be initiated first.\""
                        }
                      ],
                      "id": 289,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3395:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3395:63:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 293,
                  "nodeType": "ExpressionStatement",
                  "src": "3395:63:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 297,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 295,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 286,
                          "src": "3476:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 296,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3493:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3476:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520616d6f756e74206f6620737570706c696564206c7020746f6b656e732073686f756c64206265203e20302e",
                        "id": 298,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3496:49:3",
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
                      "id": 294,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3468:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 299,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3468:78:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 300,
                  "nodeType": "ExpressionStatement",
                  "src": "3468:78:3"
                },
                {
                  "assignments": [
                    302,
                    304
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 302,
                      "mutability": "mutable",
                      "name": "amountLinkPerLpToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 408,
                      "src": "3557:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 301,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3557:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 304,
                      "mutability": "mutable",
                      "name": "amountUsdcPerLpToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 408,
                      "src": "3587:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 303,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3587:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 307,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 305,
                      "name": "getLpTokenPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 628,
                      "src": "3619:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function () view returns (uint256,uint256)"
                      }
                    },
                    "id": 306,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3619:17:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3556:80:3"
                },
                {
                  "assignments": [
                    310
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 310,
                      "mutability": "mutable",
                      "name": "Link",
                      "nodeType": "VariableDeclaration",
                      "scope": 408,
                      "src": "3647:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 309,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 308,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "3647:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "3647:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 314,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 312,
                        "name": "addressLink",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "3668:11:3",
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
                      "id": 311,
                      "name": "IERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "3661:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                        "typeString": "type(contract IERC20)"
                      }
                    },
                    "id": 313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3661:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3647:33:3"
                },
                {
                  "assignments": [
                    317
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 317,
                      "mutability": "mutable",
                      "name": "USDC",
                      "nodeType": "VariableDeclaration",
                      "scope": 408,
                      "src": "3690:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 316,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 315,
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
                  "id": 321,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 319,
                        "name": "addressUSDC",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47,
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
                      "id": 318,
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
                    "id": 320,
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
                      "name": "amountLinkToSupply",
                      "nodeType": "VariableDeclaration",
                      "scope": 408,
                      "src": "3734:26:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 322,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3734:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 333,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        },
                        "id": 331,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 329,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3808:2:3",
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
                          "id": 330,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3814:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "3808:7:3",
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
                            "id": 326,
                            "name": "amountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 286,
                            "src": "3788:14:3",
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
                            "id": 324,
                            "name": "amountLinkPerLpToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 302,
                            "src": "3763:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 325,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 939,
                          "src": "3763:24:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 327,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3763:40:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 328,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 954,
                      "src": "3763:44:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 332,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3763:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3734:82:3"
                },
                {
                  "assignments": [
                    335
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 335,
                      "mutability": "mutable",
                      "name": "amountUSDCToSupply",
                      "nodeType": "VariableDeclaration",
                      "scope": 408,
                      "src": "3841:26:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 334,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3841:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 345,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        },
                        "id": 343,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 341,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3915:2:3",
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
                          "id": 342,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3921:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "3915:7:3",
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
                            "id": 338,
                            "name": "amountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 286,
                            "src": "3895:14:3",
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
                            "id": 336,
                            "name": "amountUsdcPerLpToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 304,
                            "src": "3870:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 337,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 939,
                          "src": "3870:24:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3870:40:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 340,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 954,
                      "src": "3870:44:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 344,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3870:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3841:82:3"
                },
                {
                  "expression": {
                    "id": 351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 346,
                      "name": "totalAvailableLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "3948:18:3",
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
                          "id": 349,
                          "name": "amountLinkToSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 323,
                          "src": "3992:18:3",
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
                          "id": 347,
                          "name": "totalAvailableLink",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50,
                          "src": "3969:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 348,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 909,
                        "src": "3969:22:3",
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
                      "src": "3969:42:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3948:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 352,
                  "nodeType": "ExpressionStatement",
                  "src": "3948:63:3"
                },
                {
                  "expression": {
                    "id": 358,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 353,
                      "name": "totalAvailableUSDC",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53,
                      "src": "4021:18:3",
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
                          "id": 356,
                          "name": "amountUSDCToSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 335,
                          "src": "4065:18:3",
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
                          "id": 354,
                          "name": "totalAvailableUSDC",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53,
                          "src": "4042:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 355,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 909,
                        "src": "4042:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 357,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4042:42:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4021:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 359,
                  "nodeType": "ExpressionStatement",
                  "src": "4021:63:3"
                },
                {
                  "expression": {
                    "id": 365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 360,
                      "name": "totalLpTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "4095:13:3",
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
                          "id": 363,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 286,
                          "src": "4129:14:3",
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
                          "id": 361,
                          "name": "totalLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56,
                          "src": "4111:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 362,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 909,
                        "src": "4111:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 364,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4111:33:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4095:49:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 366,
                  "nodeType": "ExpressionStatement",
                  "src": "4095:49:3"
                },
                {
                  "expression": {
                    "id": 378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 367,
                        "name": "userToAmountLpTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "4155:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 370,
                      "indexExpression": {
                        "expression": {
                          "id": 368,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "4176:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 369,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4176:10:3",
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
                      "src": "4155:32:3",
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
                          "id": 376,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 286,
                          "src": "4227:14:3",
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
                            "id": 371,
                            "name": "userToAmountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70,
                            "src": "4190:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 374,
                          "indexExpression": {
                            "expression": {
                              "id": 372,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4211:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 373,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4211:10:3",
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
                          "src": "4190:32:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 909,
                        "src": "4190:36:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 377,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4190:52:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4155:87:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 379,
                  "nodeType": "ExpressionStatement",
                  "src": "4155:87:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 383,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4279:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 384,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4279:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 387,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "4299:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$629",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$629",
                                  "typeString": "contract SimpleSwap"
                                }
                              ],
                              "id": 386,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4291:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 385,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4291:7:3",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 388,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4291:13:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 389,
                            "name": "amountLinkToSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 323,
                            "src": "4306:18:3",
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
                            "id": 381,
                            "name": "Link",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 310,
                            "src": "4261:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 382,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23,
                          "src": "4261:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 390,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4261:64:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4c696e6b20616d6f756e7420756e617661696c61626c652e",
                        "id": 391,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4327:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_591cf3d3018fa9e37e640351a76135b58faebb191920a81c66c2abc7a2e848f6",
                          "typeString": "literal_string \"Link amount unavailable.\""
                        },
                        "value": "Link amount unavailable."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_591cf3d3018fa9e37e640351a76135b58faebb191920a81c66c2abc7a2e848f6",
                          "typeString": "literal_string \"Link amount unavailable.\""
                        }
                      ],
                      "id": 380,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4253:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4253:101:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 393,
                  "nodeType": "ExpressionStatement",
                  "src": "4253:101:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 397,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4390:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 398,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4390:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 401,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "4410:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$629",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$629",
                                  "typeString": "contract SimpleSwap"
                                }
                              ],
                              "id": 400,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4402:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 399,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4402:7:3",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 402,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4402:13:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 403,
                            "name": "amountUSDCToSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 335,
                            "src": "4417:18:3",
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
                            "id": 395,
                            "name": "USDC",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 317,
                            "src": "4372:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23,
                          "src": "4372:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 404,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4372:64:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5553444320616d6f756e7420756e617661696c61626c652e",
                        "id": 405,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4438:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5242f098d6ef367a38ad451edc792a59ddb5e521292071330cacb901006b65cd",
                          "typeString": "literal_string \"USDC amount unavailable.\""
                        },
                        "value": "USDC amount unavailable."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5242f098d6ef367a38ad451edc792a59ddb5e521292071330cacb901006b65cd",
                          "typeString": "literal_string \"USDC amount unavailable.\""
                        }
                      ],
                      "id": 394,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4364:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4364:101:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 407,
                  "nodeType": "ExpressionStatement",
                  "src": "4364:101:3"
                }
              ]
            },
            "functionSelector": "35403023",
            "id": 409,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 286,
                  "mutability": "mutable",
                  "name": "amountLpTokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 409,
                  "src": "3354:22:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 285,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3354:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3353:24:3"
            },
            "returnParameters": {
              "id": 288,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3385:0:3"
            },
            "scope": 629,
            "src": "3338:1134:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 535,
              "nodeType": "Block",
              "src": "4553:1140:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 415,
                        "name": "isPoolInitiated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66,
                        "src": "4571:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520706f6f6c2073686f756c6420626520696e697469617465642066697273742e",
                        "id": 416,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4588:37:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_608d25f69640ce0cca05f1a985beb91244e3b0aa2a675a272c818d6d7cad3c94",
                          "typeString": "literal_string \"The pool should be initiated first.\""
                        },
                        "value": "The pool should be initiated first."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_608d25f69640ce0cca05f1a985beb91244e3b0aa2a675a272c818d6d7cad3c94",
                          "typeString": "literal_string \"The pool should be initiated first.\""
                        }
                      ],
                      "id": 414,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4563:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 417,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4563:63:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 418,
                  "nodeType": "ExpressionStatement",
                  "src": "4563:63:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 422,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 420,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 411,
                          "src": "4644:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 421,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4661:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4644:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520616d6f756e74206f6620726571756573746564206c7020746f6b656e732073686f756c64206265203e20302e",
                        "id": 423,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4664:50:3",
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
                      "id": 419,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4636:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 424,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4636:79:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 425,
                  "nodeType": "ExpressionStatement",
                  "src": "4636:79:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 432,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 427,
                            "name": "userToAmountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70,
                            "src": "4733:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 430,
                          "indexExpression": {
                            "expression": {
                              "id": 428,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4754:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 429,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4754:10:3",
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
                          "src": "4733:32:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 431,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 411,
                          "src": "4769:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4733:50:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f7520646f6e2774206861766520656e6f756768204c5020746f6b656e732e",
                        "id": 433,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4785:34:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5df3abdb3ead51351b27c91d31547c5e6be42e41e5dfbf4c06fc289f0547de84",
                          "typeString": "literal_string \"You don't have enough LP tokens.\""
                        },
                        "value": "You don't have enough LP tokens."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5df3abdb3ead51351b27c91d31547c5e6be42e41e5dfbf4c06fc289f0547de84",
                          "typeString": "literal_string \"You don't have enough LP tokens.\""
                        }
                      ],
                      "id": 426,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4725:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 434,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4725:95:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 435,
                  "nodeType": "ExpressionStatement",
                  "src": "4725:95:3"
                },
                {
                  "assignments": [
                    437,
                    439
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 437,
                      "mutability": "mutable",
                      "name": "amountLinkPerLpToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 535,
                      "src": "4831:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 436,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4831:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 439,
                      "mutability": "mutable",
                      "name": "amountUSDCPerLpToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 535,
                      "src": "4861:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 438,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4861:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 442,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 440,
                      "name": "getLpTokenPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 628,
                      "src": "4894:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function () view returns (uint256,uint256)"
                      }
                    },
                    "id": 441,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4894:17:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4830:81:3"
                },
                {
                  "assignments": [
                    444
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 444,
                      "mutability": "mutable",
                      "name": "amountLinkToWithdraw",
                      "nodeType": "VariableDeclaration",
                      "scope": 535,
                      "src": "4922:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 443,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4922:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 454,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        },
                        "id": 452,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 450,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4998:2:3",
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
                          "id": 451,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5004:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "4998:7:3",
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
                            "id": 447,
                            "name": "amountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 411,
                            "src": "4978:14:3",
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
                            "id": 445,
                            "name": "amountLinkPerLpToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 437,
                            "src": "4953:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 446,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 939,
                          "src": "4953:24:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 448,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4953:40:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 449,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 954,
                      "src": "4953:44:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 453,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4953:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4922:84:3"
                },
                {
                  "assignments": [
                    456
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 456,
                      "mutability": "mutable",
                      "name": "amountUSDCToWithdraw",
                      "nodeType": "VariableDeclaration",
                      "scope": 535,
                      "src": "5016:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 455,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5016:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 466,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        },
                        "id": 464,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 462,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5092:2:3",
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
                          "id": 463,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5098:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "5092:7:3",
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
                            "id": 459,
                            "name": "amountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 411,
                            "src": "5072:14:3",
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
                            "id": 457,
                            "name": "amountUSDCPerLpToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 439,
                            "src": "5047:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 458,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 939,
                          "src": "5047:24:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 460,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5047:40:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 461,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 954,
                      "src": "5047:44:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 465,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5047:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5016:84:3"
                },
                {
                  "expression": {
                    "id": 472,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 467,
                      "name": "totalAvailableLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "5111:18:3",
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
                          "id": 470,
                          "name": "amountLinkToWithdraw",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 444,
                          "src": "5155:20:3",
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
                          "id": 468,
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
                        "id": 469,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 924,
                        "src": "5132:22:3",
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
                      "src": "5132:44:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5111:65:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 473,
                  "nodeType": "ExpressionStatement",
                  "src": "5111:65:3"
                },
                {
                  "expression": {
                    "id": 479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 474,
                      "name": "totalAvailableUSDC",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53,
                      "src": "5186:18:3",
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
                          "id": 477,
                          "name": "amountUSDCToWithdraw",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 456,
                          "src": "5230:20:3",
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
                          "id": 475,
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
                        "id": 476,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 924,
                        "src": "5207:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5207:44:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5186:65:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 480,
                  "nodeType": "ExpressionStatement",
                  "src": "5186:65:3"
                },
                {
                  "expression": {
                    "id": 486,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 481,
                      "name": "totalLpTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "5262:13:3",
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
                          "id": 484,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 411,
                          "src": "5296:14:3",
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
                          "id": 482,
                          "name": "totalLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56,
                          "src": "5278:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 483,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 924,
                        "src": "5278:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 485,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5278:33:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5262:49:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 487,
                  "nodeType": "ExpressionStatement",
                  "src": "5262:49:3"
                },
                {
                  "expression": {
                    "id": 499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 488,
                        "name": "userToAmountLpTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "5322:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 491,
                      "indexExpression": {
                        "expression": {
                          "id": 489,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "5343:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 490,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5343:10:3",
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
                      "src": "5322:32:3",
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
                          "id": 497,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 411,
                          "src": "5394:14:3",
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
                            "id": 492,
                            "name": "userToAmountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70,
                            "src": "5357:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 495,
                          "indexExpression": {
                            "expression": {
                              "id": 493,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "5378:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 494,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "5378:10:3",
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
                          "src": "5357:32:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 496,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 924,
                        "src": "5357:36:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 498,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5357:52:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5322:87:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 500,
                  "nodeType": "ExpressionStatement",
                  "src": "5322:87:3"
                },
                {
                  "assignments": [
                    503
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 503,
                      "mutability": "mutable",
                      "name": "Link",
                      "nodeType": "VariableDeclaration",
                      "scope": 535,
                      "src": "5420:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 502,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 501,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "5420:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "5420:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 507,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 505,
                        "name": "addressLink",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "5441:11:3",
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
                      "id": 504,
                      "name": "IERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "5434:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                        "typeString": "type(contract IERC20)"
                      }
                    },
                    "id": 506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5434:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5420:33:3"
                },
                {
                  "assignments": [
                    510
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 510,
                      "mutability": "mutable",
                      "name": "USDC",
                      "nodeType": "VariableDeclaration",
                      "scope": 535,
                      "src": "5463:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 509,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 508,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "5463:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "5463:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 514,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 512,
                        "name": "addressUSDC",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47,
                        "src": "5484:11:3",
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
                      "id": 511,
                      "name": "IERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "5477:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                        "typeString": "type(contract IERC20)"
                      }
                    },
                    "id": 513,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5477:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5463:33:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 518,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "5529:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 519,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "5529:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 520,
                            "name": "amountLinkToWithdraw",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 444,
                            "src": "5541:20:3",
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
                            "id": 516,
                            "name": "Link",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 503,
                            "src": "5515:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 517,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 12,
                          "src": "5515:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 521,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5515:47:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4c696e6b20616d6f756e7420756e617661696c61626c652e",
                        "id": 522,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5564:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_591cf3d3018fa9e37e640351a76135b58faebb191920a81c66c2abc7a2e848f6",
                          "typeString": "literal_string \"Link amount unavailable.\""
                        },
                        "value": "Link amount unavailable."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_591cf3d3018fa9e37e640351a76135b58faebb191920a81c66c2abc7a2e848f6",
                          "typeString": "literal_string \"Link amount unavailable.\""
                        }
                      ],
                      "id": 515,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5507:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 523,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5507:84:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 524,
                  "nodeType": "ExpressionStatement",
                  "src": "5507:84:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 528,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "5623:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 529,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "5623:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 530,
                            "name": "amountUSDCToWithdraw",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 456,
                            "src": "5635:20:3",
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
                            "id": 526,
                            "name": "USDC",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 510,
                            "src": "5609:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 527,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 12,
                          "src": "5609:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 531,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5609:47:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5553444320616d6f756e7420756e617661696c61626c652e",
                        "id": 532,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5658:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5242f098d6ef367a38ad451edc792a59ddb5e521292071330cacb901006b65cd",
                          "typeString": "literal_string \"USDC amount unavailable.\""
                        },
                        "value": "USDC amount unavailable."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5242f098d6ef367a38ad451edc792a59ddb5e521292071330cacb901006b65cd",
                          "typeString": "literal_string \"USDC amount unavailable.\""
                        }
                      ],
                      "id": 525,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5601:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 533,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5601:84:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 534,
                  "nodeType": "ExpressionStatement",
                  "src": "5601:84:3"
                }
              ]
            },
            "functionSelector": "2e1a7d4d",
            "id": 536,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 411,
                  "mutability": "mutable",
                  "name": "amountLpTokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 536,
                  "src": "4522:22:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 410,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4522:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4521:24:3"
            },
            "returnParameters": {
              "id": 413,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4553:0:3"
            },
            "scope": 629,
            "src": "4504:1189:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 599,
              "nodeType": "Block",
              "src": "6007:431:3",
              "statements": [
                {
                  "assignments": [
                    547
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 547,
                      "mutability": "mutable",
                      "name": "y",
                      "nodeType": "VariableDeclaration",
                      "scope": 599,
                      "src": "6017:9:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 546,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6017:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 556,
                  "initialValue": {
                    "condition": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_enum$_Tokens_$41",
                            "typeString": "enum SimpleSwap.Tokens"
                          },
                          "id": 551,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 548,
                            "name": "tokenForSale",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 541,
                            "src": "6030:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_Tokens_$41",
                              "typeString": "enum SimpleSwap.Tokens"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 549,
                              "name": "Tokens",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41,
                              "src": "6046:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_Tokens_$41_$",
                                "typeString": "type(enum SimpleSwap.Tokens)"
                              }
                            },
                            "id": 550,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "Link",
                            "nodeType": "MemberAccess",
                            "src": "6046:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_Tokens_$41",
                              "typeString": "enum SimpleSwap.Tokens"
                            }
                          },
                          "src": "6030:27:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 552,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "6029:29:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 554,
                      "name": "totalAvailableLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "6082:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 555,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "6029:71:3",
                    "trueExpression": {
                      "id": 553,
                      "name": "totalAvailableUSDC",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53,
                      "src": "6061:18:3",
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
                  "src": "6017:83:3"
                },
                {
                  "assignments": [
                    558
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 558,
                      "mutability": "mutable",
                      "name": "x",
                      "nodeType": "VariableDeclaration",
                      "scope": 599,
                      "src": "6110:9:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 557,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6110:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 567,
                  "initialValue": {
                    "condition": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_enum$_Tokens_$41",
                            "typeString": "enum SimpleSwap.Tokens"
                          },
                          "id": 562,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 559,
                            "name": "tokenForSale",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 541,
                            "src": "6123:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_Tokens_$41",
                              "typeString": "enum SimpleSwap.Tokens"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 560,
                              "name": "Tokens",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41,
                              "src": "6139:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_Tokens_$41_$",
                                "typeString": "type(enum SimpleSwap.Tokens)"
                              }
                            },
                            "id": 561,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "Link",
                            "nodeType": "MemberAccess",
                            "src": "6139:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_Tokens_$41",
                              "typeString": "enum SimpleSwap.Tokens"
                            }
                          },
                          "src": "6123:27:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 563,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "6122:29:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 565,
                      "name": "totalAvailableUSDC",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53,
                      "src": "6175:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 566,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "6122:71:3",
                    "trueExpression": {
                      "id": 564,
                      "name": "totalAvailableLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "6154:18:3",
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
                  "src": "6110:83:3"
                },
                {
                  "assignments": [
                    569
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 569,
                      "mutability": "mutable",
                      "name": "C",
                      "nodeType": "VariableDeclaration",
                      "scope": 599,
                      "src": "6204:9:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 568,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6204:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 573,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 570,
                      "name": "totalAvailableUSDC",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53,
                      "src": "6216:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "id": 571,
                      "name": "totalAvailableLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "6237:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6216:39:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6204:51:3"
                },
                {
                  "assignments": [
                    575
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 575,
                      "mutability": "mutable",
                      "name": "amountPurchasedTokens",
                      "nodeType": "VariableDeclaration",
                      "scope": 599,
                      "src": "6288:29:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 574,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6288:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 585,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 582,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 580,
                              "name": "x",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 558,
                              "src": "6332:1:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "id": 581,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 538,
                              "src": "6336:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "6332:10:3",
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
                            "id": 578,
                            "name": "C",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 569,
                            "src": "6326:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 579,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "div",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 954,
                          "src": "6326:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 583,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6326:17:3",
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
                        "id": 576,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 547,
                        "src": "6320:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 577,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 924,
                      "src": "6320:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 584,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6320:24:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6288:56:3"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 593,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 586,
                        "name": "amountPurchasedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 575,
                        "src": "6382:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 591,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_rational_1000000_by_1",
                                "typeString": "int_const 1000000"
                              },
                              "id": 589,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "3130",
                                "id": 587,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6407:2:3",
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
                                "id": 588,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6413:1:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_6_by_1",
                                  "typeString": "int_const 6"
                                },
                                "value": "6"
                              },
                              "src": "6407:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1000000_by_1",
                                "typeString": "int_const 1000000"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 590,
                              "name": "FEE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63,
                              "src": "6417:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "6407:13:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 592,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "6406:15:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6382:39:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
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
                        "src": "6424:2:3",
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
                        "src": "6430:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_6_by_1",
                          "typeString": "int_const 6"
                        },
                        "value": "6"
                      },
                      "src": "6424:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000000_by_1",
                        "typeString": "int_const 1000000"
                      }
                    },
                    "src": "6382:49:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 545,
                  "id": 598,
                  "nodeType": "Return",
                  "src": "6375:56:3"
                }
              ]
            },
            "id": 600,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAmountPurchasedToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 542,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 538,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 600,
                  "src": "5935:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 537,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5935:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 541,
                  "mutability": "mutable",
                  "name": "tokenForSale",
                  "nodeType": "VariableDeclaration",
                  "scope": 600,
                  "src": "5951:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Tokens_$41",
                    "typeString": "enum SimpleSwap.Tokens"
                  },
                  "typeName": {
                    "id": 540,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 539,
                      "name": "Tokens",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41,
                      "src": "5951:6:3"
                    },
                    "referencedDeclaration": 41,
                    "src": "5951:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Tokens_$41",
                      "typeString": "enum SimpleSwap.Tokens"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5934:37:3"
            },
            "returnParameters": {
              "id": 545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 544,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 600,
                  "src": "5994:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 543,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5994:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5993:9:3"
            },
            "scope": 629,
            "src": "5902:536:3",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 627,
              "nodeType": "Block",
              "src": "6516:128:3",
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 614,
                            "name": "totalLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "6570:13:3",
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
                                "id": 611,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 609,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6557:2:3",
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
                                  "id": 610,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6563:1:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_6_by_1",
                                    "typeString": "int_const 6"
                                  },
                                  "value": "6"
                                },
                                "src": "6557:7:3",
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
                                "id": 607,
                                "name": "totalAvailableLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50,
                                "src": "6534:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 608,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "mul",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 939,
                              "src": "6534:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 612,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6534:31:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 613,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "div",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 954,
                          "src": "6534:35:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 615,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6534:50:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 623,
                            "name": "totalLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "6622:13:3",
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
                                "id": 620,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 618,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6609:2:3",
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
                                  "id": 619,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6615:1:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_6_by_1",
                                    "typeString": "int_const 6"
                                  },
                                  "value": "6"
                                },
                                "src": "6609:7:3",
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
                                "id": 616,
                                "name": "totalAvailableUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53,
                                "src": "6586:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 617,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "mul",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 939,
                              "src": "6586:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 621,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6586:31:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 622,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "div",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 954,
                          "src": "6586:35:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 624,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6586:50:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 625,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "6533:104:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 606,
                  "id": 626,
                  "nodeType": "Return",
                  "src": "6526:111:3"
                }
              ]
            },
            "functionSelector": "6f5cdb6c",
            "id": 628,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getLpTokenPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 601,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6470:2:3"
            },
            "returnParameters": {
              "id": 606,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 603,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 628,
                  "src": "6493:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 602,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6493:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 605,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 628,
                  "src": "6502:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 604,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6502:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6492:18:3"
            },
            "scope": 629,
            "src": "6446:198:3",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 630,
        "src": "462:6186:3"
      }
    ],
    "src": "39:6612:3"
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
  "sha1": "24e2cbf9e3c0ee9b87c32eb6eb882f879a55a17a",
  "source": "// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/utils/math/SafeMath.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\ninterface IERC20 {\n    function transfer(address recipient, uint256 amount) external returns (bool);\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n    function approve(address spender, uint256 amount) external returns (bool);\n}\n\n\ncontract SimpleSwap is Ownable{\n    using SafeMath for uint256;\n\n    enum Tokens{Link, USDC}\n\n    address addressLink = 0xa36085F69e2889c224210F603D836748e7dC0088;   //Kovan address      //0x01BE23585060835E02B77ef475b0Cc51aA1e0709; rinkeby\n    address addressUSDC = 0xb7a4F3E9097C08dA09517b5aB877F7a917224ede;    //Kovan address            //0xeb8f08a975Ab53E34D8a0330E0D34de942C95926; rinkeby\n\n    uint256 public totalAvailableLink = 0;      //18 decimals\n    uint256 public totalAvailableUSDC = 0;      //6 decimals\n\n    uint256  public totalLpTokens = 0;           //6 decimals\n\n    uint256 public FEE = 3 * 10 ** 3;         //6 decimals\n\n    bool isPoolInitiated = false;\n\n    mapping(address => uint256) userToAmountLpTokens;\n\n \n\n    function initiatePool(uint256 amountLinkToSupply, uint256 amountUsdcToSupply) public onlyOwner {\n        require(!isPoolInitiated, \"The pool was already initiated\");\n        isPoolInitiated = true;\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        require(Link.transferFrom(msg.sender, address(this), amountLinkToSupply), \"Link amount unavailable.\");\n        require(USDC.transferFrom(msg.sender, address(this), amountUsdcToSupply), \"USDC amount unavailable.\");\n\n        totalAvailableLink = totalAvailableLink.add(amountLinkToSupply);\n        totalAvailableUSDC = totalAvailableUSDC.add(amountUsdcToSupply);\n\n        totalLpTokens = amountUsdcToSupply;\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].add(totalLpTokens);\n        \n    }\n\n\n    // Basic check: Done\n    function swap(uint256 quantitySoldToken, uint256 minAmountPurchasedToken, Tokens tokenForSale) public {\n        require(isPoolInitiated, \"The pool should be initiated first.\");\n        uint256 amountPurchasedToken = getAmountPurchasedToken(quantitySoldToken, tokenForSale);\n        require(amountPurchasedToken >= minAmountPurchasedToken, \"The amount of purchased token is lower than required.\");\n\n        IERC20 soldToken;\n        IERC20 boughtToken;\n\n        if (tokenForSale == Tokens.Link) {\n            totalAvailableLink  = totalAvailableLink.add(quantitySoldToken);\n            totalAvailableUSDC = totalAvailableUSDC.sub(amountPurchasedToken);\n\n            soldToken = IERC20(addressLink);\n            boughtToken = IERC20(addressUSDC);\n        }\n\n        else {\n            totalAvailableLink = totalAvailableLink.sub(amountPurchasedToken);\n            totalAvailableUSDC = totalAvailableUSDC.add(quantitySoldToken);\n\n            soldToken = IERC20(addressUSDC); \n            boughtToken = IERC20(addressLink);\n        }\n        \n        require(boughtToken.transfer(msg.sender, amountPurchasedToken), \"Token amount unavailable.\");\n        require(soldToken.transferFrom(msg.sender, address(this), quantitySoldToken), \"Token amount unavailable.\");\n\n    }\n\n    // Basic check: Done\n    function supply(uint256 amountLpTokens) public {\n        require(isPoolInitiated, \"The pool should be initiated first.\");\n        require(amountLpTokens > 0, \"The amount of supplied lp tokens should be > 0.\");\n        (uint256 amountLinkPerLpToken, uint256 amountUsdcPerLpToken) = getLpTokenPrice();\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        uint256 amountLinkToSupply = amountLinkPerLpToken.mul(amountLpTokens).div(10 ** 6); // 18 decimals\n        uint256 amountUSDCToSupply = amountUsdcPerLpToken.mul(amountLpTokens).div(10 ** 6); // 6 decimals\n\n        totalAvailableLink = totalAvailableLink.add(amountLinkToSupply);\n        totalAvailableUSDC = totalAvailableUSDC.add(amountUSDCToSupply);\n\n        totalLpTokens = totalLpTokens.add(amountLpTokens);\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].add(amountLpTokens);\n\n        require(Link.transferFrom(msg.sender, address(this), amountLinkToSupply), \"Link amount unavailable.\");\n        require(USDC.transferFrom(msg.sender, address(this), amountUSDCToSupply), \"USDC amount unavailable.\");\n    }\n\n\n    // Basic check: Done\n    function withdraw(uint256 amountLpTokens) public {\n        require(isPoolInitiated, \"The pool should be initiated first.\");\n        require(amountLpTokens > 0, \"The amount of requested lp tokens should be > 0.\");\n        require(userToAmountLpTokens[msg.sender] >= amountLpTokens, \"You don't have enough LP tokens.\");\n        (uint256 amountLinkPerLpToken, uint256 amountUSDCPerLpToken)  = getLpTokenPrice();\n\n        uint256 amountLinkToWithdraw = amountLinkPerLpToken.mul(amountLpTokens).div(10 ** 6);\n        uint256 amountUSDCToWithdraw = amountUSDCPerLpToken.mul(amountLpTokens).div(10 ** 6);\n\n        totalAvailableLink = totalAvailableLink.sub(amountLinkToWithdraw);\n        totalAvailableUSDC = totalAvailableUSDC.sub(amountUSDCToWithdraw);\n\n        totalLpTokens = totalLpTokens.sub(amountLpTokens);\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].sub(amountLpTokens);\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        require(Link.transfer(msg.sender, amountLinkToWithdraw), \"Link amount unavailable.\");\n        require(USDC.transfer(msg.sender, amountUSDCToWithdraw), \"USDC amount unavailable.\");\n\n    }\n\n\n\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n    // Link - USDC                      // 6 decimals\n    function getAmountPurchasedToken(uint256 amount, Tokens tokenForSale) internal view returns(uint256)\n    {\n        uint256 y = (tokenForSale == Tokens.Link) ? totalAvailableUSDC : totalAvailableLink;\n        uint256 x = (tokenForSale == Tokens.Link) ? totalAvailableLink : totalAvailableUSDC;\n\n        uint256 C = totalAvailableUSDC * totalAvailableLink;         // 24 decimals\n        uint256 amountPurchasedTokens = y.sub(C.div(x + amount)); // 6 or 18 decimals\n\n        return amountPurchasedTokens * (10 ** 6 - FEE) / 10 ** 6;\n    }\n\n\n\n    function getLpTokenPrice() public view returns(uint256, uint256) \n    {\n        return (totalAvailableLink.mul(10 ** 6).div(totalLpTokens), totalAvailableUSDC.mul(10 ** 6).div(totalLpTokens));\n    }\n\n\n}\n\n\n",
  "sourceMap": "",
  "sourcePath": "contracts/SimpleSwap.sol",
  "type": "interface"
}
},{}],2:[function(require,module,exports){
module.exports={"abi": [{"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"}, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}], "name": "OwnershipTransferred", "type": "event"}, {"inputs": [], "name": "FEE", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getLpTokenPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}, {"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLinkToSupply", "type": "uint256"}, {"internalType": "uint256", "name": "amountUsdcToSupply", "type": "uint256"}], "name": "initiatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "owner", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLpTokens", "type": "uint256"}], "name": "supply", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "quantitySoldToken", "type": "uint256"}, {"internalType": "uint256", "name": "minAmountPurchasedToken", "type": "uint256"}, {"internalType": "enum SimpleSwap.Tokens", "name": "tokenForSale", "type": "uint8"}], "name": "swap", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "totalAvailableLink", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "totalAvailableUSDC", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "totalLpTokens", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLpTokens", "type": "uint256"}], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function"}], "allSourcePaths": {"0": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/access/Ownable.sol", "1": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/utils/Context.sol", "2": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/utils/math/SafeMath.sol", "3": "contracts/SimpleSwap.sol"}, "ast": {"absolutePath": "contracts/SimpleSwap.sol", "exportedSymbols": {"Context": [1066], "IERC20": [33], "Ownable": [733], "SafeMath": [1045], "SimpleSwap": [629]}, "id": 630, "license": "UNLICENSED", "nodeType": "SourceUnit", "nodes": [{"id": 1, "literals": ["solidity", "^", "0.8", ".0"], "nodeType": "PragmaDirective", "src": "39:23:3"}, {"absolutePath": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/utils/math/SafeMath.sol", "file": "@openzeppelin/contracts/utils/math/SafeMath.sol", "id": 2, "nodeType": "ImportDirective", "scope": 630, "sourceUnit": 1046, "src": "64:57:3", "symbolAliases": [], "unitAlias": ""}, {"absolutePath": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/access/Ownable.sol", "file": "@openzeppelin/contracts/access/Ownable.sol", "id": 3, "nodeType": "ImportDirective", "scope": 630, "sourceUnit": 734, "src": "122:52:3", "symbolAliases": [], "unitAlias": ""}, {"abstract": false, "baseContracts": [], "contractDependencies": [], "contractKind": "interface", "fullyImplemented": false, "id": 33, "linearizedBaseContracts": [33], "name": "IERC20", "nodeType": "ContractDefinition", "nodes": [{"functionSelector": "a9059cbb", "id": 12, "implemented": false, "kind": "function", "modifiers": [], "name": "transfer", "nodeType": "FunctionDefinition", "parameters": {"id": 8, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 5, "mutability": "mutable", "name": "recipient", "nodeType": "VariableDeclaration", "scope": 12, "src": "217:17:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 4, "name": "address", "nodeType": "ElementaryTypeName", "src": "217:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 7, "mutability": "mutable", "name": "amount", "nodeType": "VariableDeclaration", "scope": 12, "src": "236:14:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 6, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "236:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "216:35:3"}, "returnParameters": {"id": 11, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 10, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 12, "src": "270:4:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 9, "name": "bool", "nodeType": "ElementaryTypeName", "src": "270:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "visibility": "internal"}], "src": "269:6:3"}, "scope": 33, "src": "199:77:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "external"}, {"functionSelector": "23b872dd", "id": 23, "implemented": false, "kind": "function", "modifiers": [], "name": "transferFrom", "nodeType": "FunctionDefinition", "parameters": {"id": 19, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 14, "mutability": "mutable", "name": "sender", "nodeType": "VariableDeclaration", "scope": 23, "src": "303:14:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 13, "name": "address", "nodeType": "ElementaryTypeName", "src": "303:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 16, "mutability": "mutable", "name": "recipient", "nodeType": "VariableDeclaration", "scope": 23, "src": "319:17:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 15, "name": "address", "nodeType": "ElementaryTypeName", "src": "319:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 18, "mutability": "mutable", "name": "amount", "nodeType": "VariableDeclaration", "scope": 23, "src": "338:14:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 17, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "338:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "302:51:3"}, "returnParameters": {"id": 22, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 21, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 23, "src": "372:4:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 20, "name": "bool", "nodeType": "ElementaryTypeName", "src": "372:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "visibility": "internal"}], "src": "371:6:3"}, "scope": 33, "src": "281:97:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "external"}, {"functionSelector": "095ea7b3", "id": 32, "implemented": false, "kind": "function", "modifiers": [], "name": "approve", "nodeType": "FunctionDefinition", "parameters": {"id": 28, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 25, "mutability": "mutable", "name": "spender", "nodeType": "VariableDeclaration", "scope": 32, "src": "400:15:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 24, "name": "address", "nodeType": "ElementaryTypeName", "src": "400:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 27, "mutability": "mutable", "name": "amount", "nodeType": "VariableDeclaration", "scope": 32, "src": "417:14:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 26, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "417:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "399:33:3"}, "returnParameters": {"id": 31, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 30, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 32, "src": "451:4:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 29, "name": "bool", "nodeType": "ElementaryTypeName", "src": "451:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "visibility": "internal"}], "src": "450:6:3"}, "scope": 33, "src": "383:74:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "external"}], "scope": 630, "src": "176:283:3"}, {"abstract": false, "baseContracts": [{"baseName": {"id": 34, "name": "Ownable", "nodeType": "IdentifierPath", "referencedDeclaration": 733, "src": "485:7:3"}, "id": 35, "nodeType": "InheritanceSpecifier", "src": "485:7:3"}], "contractDependencies": [733, 1066], "contractKind": "contract", "fullyImplemented": true, "id": 629, "linearizedBaseContracts": [629, 733, 1066], "name": "SimpleSwap", "nodeType": "ContractDefinition", "nodes": [{"id": 38, "libraryName": {"id": 36, "name": "SafeMath", "nodeType": "IdentifierPath", "referencedDeclaration": 1045, "src": "504:8:3"}, "nodeType": "UsingForDirective", "src": "498:27:3", "typeName": {"id": 37, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "517:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}}, {"canonicalName": "SimpleSwap.Tokens", "id": 41, "members": [{"id": 39, "name": "Link", "nodeType": "EnumValue", "src": "543:4:3"}, {"id": 40, "name": "USDC", "nodeType": "EnumValue", "src": "549:4:3"}], "name": "Tokens", "nodeType": "EnumDefinition", "src": "531:23:3"}, {"constant": false, "id": 44, "mutability": "mutable", "name": "addressLink", "nodeType": "VariableDeclaration", "scope": 629, "src": "560:64:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 42, "name": "address", "nodeType": "ElementaryTypeName", "src": "560:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "value": {"hexValue": "307861333630383546363965323838396332323432313046363033443833363734386537644330303838", "id": 43, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "582:42:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "value": "0xa36085F69e2889c224210F603D836748e7dC0088"}, "visibility": "internal"}, {"constant": false, "id": 47, "mutability": "mutable", "name": "addressUSDC", "nodeType": "VariableDeclaration", "scope": 629, "src": "707:64:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 45, "name": "address", "nodeType": "ElementaryTypeName", "src": "707:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "value": {"hexValue": "307862376134463345393039374330386441303935313762356142383737463761393137323234656465", "id": 46, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "729:42:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "value": "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede"}, "visibility": "internal"}, {"constant": false, "functionSelector": "618e552c", "id": 50, "mutability": "mutable", "name": "totalAvailableLink", "nodeType": "VariableDeclaration", "scope": 629, "src": "862:37:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 48, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "862:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 49, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "898:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "functionSelector": "b2e411c2", "id": 53, "mutability": "mutable", "name": "totalAvailableUSDC", "nodeType": "VariableDeclaration", "scope": 629, "src": "924:37:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 51, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "924:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 52, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "960:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "functionSelector": "868c844f", "id": 56, "mutability": "mutable", "name": "totalLpTokens", "nodeType": "VariableDeclaration", "scope": 629, "src": "986:33:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 54, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "986:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 55, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1018:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "functionSelector": "c57981b5", "id": 63, "mutability": "mutable", "name": "FEE", "nodeType": "VariableDeclaration", "scope": 629, "src": "1049:32:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 57, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1049:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"commonType": {"typeIdentifier": "t_rational_3000_by_1", "typeString": "int_const 3000"}, "id": 62, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "33", "id": 58, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1070:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_3_by_1", "typeString": "int_const 3"}, "value": "3"}, "nodeType": "BinaryOperation", "operator": "*", "rightExpression": {"commonType": {"typeIdentifier": "t_rational_1000_by_1", "typeString": "int_const 1000"}, "id": 61, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 59, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1074:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "33", "id": 60, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1080:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_3_by_1", "typeString": "int_const 3"}, "value": "3"}, "src": "1074:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000_by_1", "typeString": "int_const 1000"}}, "src": "1070:11:3", "typeDescriptions": {"typeIdentifier": "t_rational_3000_by_1", "typeString": "int_const 3000"}}, "visibility": "public"}, {"constant": false, "id": 66, "mutability": "mutable", "name": "isPoolInitiated", "nodeType": "VariableDeclaration", "scope": 629, "src": "1109:28:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 64, "name": "bool", "nodeType": "ElementaryTypeName", "src": "1109:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "value": {"hexValue": "66616c7365", "id": 65, "isConstant": false, "isLValue": false, "isPure": true, "kind": "bool", "lValueRequested": false, "nodeType": "Literal", "src": "1132:5:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "value": "false"}, "visibility": "internal"}, {"constant": false, "id": 70, "mutability": "mutable", "name": "userToAmountLpTokens", "nodeType": "VariableDeclaration", "scope": 629, "src": "1144:48:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}, "typeName": {"id": 69, "keyType": {"id": 67, "name": "address", "nodeType": "ElementaryTypeName", "src": "1152:7:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "nodeType": "Mapping", "src": "1144:27:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}, "valueType": {"id": 68, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1163:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}}, "visibility": "internal"}, {"body": {"id": 162, "nodeType": "Block", "src": "1297:715:3", "statements": [{"expression": {"arguments": [{"id": 81, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "UnaryOperation", "operator": "!", "prefix": true, "src": "1315:16:3", "subExpression": {"id": 80, "name": "isPoolInitiated", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 66, "src": "1316:15:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520706f6f6c2077617320616c726561647920696e69746961746564", "id": 82, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "1333:32:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_41608b195b2f075782b018f76cf076ad4c2f39a8d275fb9a800ce7c8666cc5cc", "typeString": "literal_string \"The pool was already initiated\""}, "value": "The pool was already initiated"}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_41608b195b2f075782b018f76cf076ad4c2f39a8d275fb9a800ce7c8666cc5cc", "typeString": "literal_string \"The pool was already initiated\""}], "id": 79, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "1307:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 83, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1307:59:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 84, "nodeType": "ExpressionStatement", "src": "1307:59:3"}, {"expression": {"id": 87, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 85, "name": "isPoolInitiated", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 66, "src": "1376:15:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"hexValue": "74727565", "id": 86, "isConstant": false, "isLValue": false, "isPure": true, "kind": "bool", "lValueRequested": false, "nodeType": "Literal", "src": "1394:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "value": "true"}, "src": "1376:22:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "id": 88, "nodeType": "ExpressionStatement", "src": "1376:22:3"}, {"assignments": [91], "declarations": [{"constant": false, "id": 91, "mutability": "mutable", "name": "Link", "nodeType": "VariableDeclaration", "scope": 162, "src": "1408:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 90, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 89, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "1408:6:3"}, "referencedDeclaration": 33, "src": "1408:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 95, "initialValue": {"arguments": [{"id": 93, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "1429:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 92, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "1422:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 94, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1422:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "1408:33:3"}, {"assignments": [98], "declarations": [{"constant": false, "id": 98, "mutability": "mutable", "name": "USDC", "nodeType": "VariableDeclaration", "scope": 162, "src": "1451:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 97, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 96, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "1451:6:3"}, "referencedDeclaration": 33, "src": "1451:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 102, "initialValue": {"arguments": [{"id": 100, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "1472:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 99, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "1465:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 101, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1465:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "1451:33:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 106, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "1521:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 107, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "1521:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 110, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "1541:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$629", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$629", "typeString": "contract SimpleSwap"}], "id": 109, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "1533:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 108, "name": "address", "nodeType": "ElementaryTypeName", "src": "1533:7:3", "typeDescriptions": {}}}, "id": 111, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1533:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 112, "name": "amountLinkToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72, "src": "1548:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 104, "name": "Link", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 91, "src": "1503:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 105, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "1503:17:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 113, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1503:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "4c696e6b20616d6f756e7420756e617661696c61626c652e", "id": 114, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "1569:26:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_591cf3d3018fa9e37e640351a76135b58faebb191920a81c66c2abc7a2e848f6", "typeString": "literal_string \"Link amount unavailable.\""}, "value": "Link amount unavailable."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_591cf3d3018fa9e37e640351a76135b58faebb191920a81c66c2abc7a2e848f6", "typeString": "literal_string \"Link amount unavailable.\""}], "id": 103, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "1495:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 115, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1495:101:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 116, "nodeType": "ExpressionStatement", "src": "1495:101:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 120, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "1632:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 121, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "1632:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 124, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "1652:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$629", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$629", "typeString": "contract SimpleSwap"}], "id": 123, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "1644:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 122, "name": "address", "nodeType": "ElementaryTypeName", "src": "1644:7:3", "typeDescriptions": {}}}, "id": 125, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1644:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 126, "name": "amountUsdcToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 74, "src": "1659:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 118, "name": "USDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 98, "src": "1614:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 119, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "1614:17:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 127, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1614:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "5553444320616d6f756e7420756e617661696c61626c652e", "id": 128, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "1680:26:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_5242f098d6ef367a38ad451edc792a59ddb5e521292071330cacb901006b65cd", "typeString": "literal_string \"USDC amount unavailable.\""}, "value": "USDC amount unavailable."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_5242f098d6ef367a38ad451edc792a59ddb5e521292071330cacb901006b65cd", "typeString": "literal_string \"USDC amount unavailable.\""}], "id": 117, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "1606:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 129, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1606:101:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 130, "nodeType": "ExpressionStatement", "src": "1606:101:3"}, {"expression": {"id": 136, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 131, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "1718:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 134, "name": "amountLinkToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72, "src": "1762:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 132, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "1739:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 133, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 909, "src": "1739:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 135, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1739:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "1718:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 137, "nodeType": "ExpressionStatement", "src": "1718:63:3"}, {"expression": {"id": 143, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 138, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "1791:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 141, "name": "amountUsdcToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 74, "src": "1835:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 139, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "1812:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 140, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 909, "src": "1812:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 142, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1812:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "1791:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 144, "nodeType": "ExpressionStatement", "src": "1791:63:3"}, {"expression": {"id": 147, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 145, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "1865:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"id": 146, "name": "amountUsdcToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 74, "src": "1881:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "1865:34:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 148, "nodeType": "ExpressionStatement", "src": "1865:34:3"}, {"expression": {"id": 160, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"baseExpression": {"id": 149, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "1910:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 152, "indexExpression": {"expression": {"id": 150, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "1931:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 151, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "1931:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": true, "nodeType": "IndexAccess", "src": "1910:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 158, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "1982:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"baseExpression": {"id": 153, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "1945:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 156, "indexExpression": {"expression": {"id": 154, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "1966:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 155, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "1966:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": false, "nodeType": "IndexAccess", "src": "1945:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 157, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 909, "src": "1945:36:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 159, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1945:51:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "1910:86:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 161, "nodeType": "ExpressionStatement", "src": "1910:86:3"}]}, "functionSelector": "ce49ea9a", "id": 163, "implemented": true, "kind": "function", "modifiers": [{"id": 77, "modifierName": {"id": 76, "name": "onlyOwner", "nodeType": "IdentifierPath", "referencedDeclaration": 676, "src": "1287:9:3"}, "nodeType": "ModifierInvocation", "src": "1287:9:3"}], "name": "initiatePool", "nodeType": "FunctionDefinition", "parameters": {"id": 75, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 72, "mutability": "mutable", "name": "amountLinkToSupply", "nodeType": "VariableDeclaration", "scope": 163, "src": "1224:26:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 71, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1224:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 74, "mutability": "mutable", "name": "amountUsdcToSupply", "nodeType": "VariableDeclaration", "scope": 163, "src": "1252:26:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 73, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1252:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "1223:56:3"}, "returnParameters": {"id": 78, "nodeType": "ParameterList", "parameters": [], "src": "1297:0:3"}, "scope": 629, "src": "1202:810:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 283, "nodeType": "Block", "src": "2146:1161:3", "statements": [{"expression": {"arguments": [{"id": 174, "name": "isPoolInitiated", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 66, "src": "2164:15:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520706f6f6c2073686f756c6420626520696e697469617465642066697273742e", "id": 175, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "2181:37:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_608d25f69640ce0cca05f1a985beb91244e3b0aa2a675a272c818d6d7cad3c94", "typeString": "literal_string \"The pool should be initiated first.\""}, "value": "The pool should be initiated first."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_608d25f69640ce0cca05f1a985beb91244e3b0aa2a675a272c818d6d7cad3c94", "typeString": "literal_string \"The pool should be initiated first.\""}], "id": 173, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "2156:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 176, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2156:63:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 177, "nodeType": "ExpressionStatement", "src": "2156:63:3"}, {"assignments": [179], "declarations": [{"constant": false, "id": 179, "mutability": "mutable", "name": "amountPurchasedToken", "nodeType": "VariableDeclaration", "scope": 283, "src": "2229:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 178, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2229:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 184, "initialValue": {"arguments": [{"id": 181, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "2284:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, {"id": 182, "name": "tokenForSale", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 170, "src": "2303:12:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}, {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}], "id": 180, "name": "getAmountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 600, "src": "2260:23:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$_t_uint256_$_t_enum$_Tokens_$41_$returns$_t_uint256_$", "typeString": "function (uint256,enum SimpleSwap.Tokens) view returns (uint256)"}}, "id": 183, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2260:56:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "2229:87:3"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 188, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 186, "name": "amountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 179, "src": "2334:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">=", "rightExpression": {"id": 187, "name": "minAmountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 167, "src": "2358:23:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2334:47:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520616d6f756e74206f662070757263686173656420746f6b656e206973206c6f776572207468616e2072657175697265642e", "id": 189, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "2383:55:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_bbba2a48efd6b000ef46699fd497e00f081b29099d44fa3a135476e5eb8f25b6", "typeString": "literal_string \"The amount of purchased token is lower than required.\""}, "value": "The amount of purchased token is lower than required."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_bbba2a48efd6b000ef46699fd497e00f081b29099d44fa3a135476e5eb8f25b6", "typeString": "literal_string \"The amount of purchased token is lower than required.\""}], "id": 185, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "2326:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 190, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2326:113:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 191, "nodeType": "ExpressionStatement", "src": "2326:113:3"}, {"assignments": [194], "declarations": [{"constant": false, "id": 194, "mutability": "mutable", "name": "soldToken", "nodeType": "VariableDeclaration", "scope": 283, "src": "2450:16:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 193, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 192, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "2450:6:3"}, "referencedDeclaration": 33, "src": "2450:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 195, "nodeType": "VariableDeclarationStatement", "src": "2450:16:3"}, {"assignments": [198], "declarations": [{"constant": false, "id": 198, "mutability": "mutable", "name": "boughtToken", "nodeType": "VariableDeclaration", "scope": 283, "src": "2476:18:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 197, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 196, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "2476:6:3"}, "referencedDeclaration": 33, "src": "2476:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 199, "nodeType": "VariableDeclarationStatement", "src": "2476:18:3"}, {"condition": {"commonType": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}, "id": 203, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 200, "name": "tokenForSale", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 170, "src": "2509:12:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}}, "nodeType": "BinaryOperation", "operator": "==", "rightExpression": {"expression": {"id": 201, "name": "Tokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 41, "src": "2525:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_enum$_Tokens_$41_$", "typeString": "type(enum SimpleSwap.Tokens)"}}, "id": 202, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "memberName": "Link", "nodeType": "MemberAccess", "src": "2525:11:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}}, "src": "2509:27:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseBody": {"id": 257, "nodeType": "Block", "src": "2813:260:3", "statements": [{"expression": {"id": 236, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 231, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "2827:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 234, "name": "amountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 179, "src": "2871:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 232, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "2848:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 233, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 924, "src": "2848:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 235, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2848:44:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2827:65:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 237, "nodeType": "ExpressionStatement", "src": "2827:65:3"}, {"expression": {"id": 243, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 238, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "2906:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 241, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "2950:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 239, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "2927:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 240, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 909, "src": "2927:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 242, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2927:41:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2906:62:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 244, "nodeType": "ExpressionStatement", "src": "2906:62:3"}, {"expression": {"id": 249, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 245, "name": "soldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 194, "src": "2983:9:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 247, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "3002:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 246, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "2995:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 248, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2995:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "src": "2983:31:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 250, "nodeType": "ExpressionStatement", "src": "2983:31:3"}, {"expression": {"id": 255, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 251, "name": "boughtToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 198, "src": "3029:11:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 253, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "3050:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 252, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "3043:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 254, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3043:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "src": "3029:33:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 256, "nodeType": "ExpressionStatement", "src": "3029:33:3"}]}, "id": 258, "nodeType": "IfStatement", "src": "2505:568:3", "trueBody": {"id": 230, "nodeType": "Block", "src": "2538:260:3", "statements": [{"expression": {"id": 209, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 204, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "2552:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 207, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "2597:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 205, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "2574:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 206, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 909, "src": "2574:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 208, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2574:41:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2552:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 210, "nodeType": "ExpressionStatement", "src": "2552:63:3"}, {"expression": {"id": 216, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 211, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "2629:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 214, "name": "amountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 179, "src": "2673:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 212, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "2650:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 213, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 924, "src": "2650:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 215, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2650:44:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2629:65:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 217, "nodeType": "ExpressionStatement", "src": "2629:65:3"}, {"expression": {"id": 222, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 218, "name": "soldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 194, "src": "2709:9:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 220, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "2728:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 219, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "2721:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 221, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2721:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "src": "2709:31:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 223, "nodeType": "ExpressionStatement", "src": "2709:31:3"}, {"expression": {"id": 228, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 224, "name": "boughtToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 198, "src": "2754:11:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 226, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "2775:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 225, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "2768:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 227, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2768:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "src": "2754:33:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 229, "nodeType": "ExpressionStatement", "src": "2754:33:3"}]}}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 262, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "3120:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 263, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "3120:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 264, "name": "amountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 179, "src": "3132:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 260, "name": "boughtToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 198, "src": "3099:11:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 261, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transfer", "nodeType": "MemberAccess", "referencedDeclaration": 12, "src": "3099:20:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,uint256) external returns (bool)"}}, "id": 265, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3099:54:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "546f6b656e20616d6f756e7420756e617661696c61626c652e", "id": 266, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "3155:27:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_a1af1d15535e7bc442ee0e618061f403bb916475c60a0adcfe0a67a8291d42ab", "typeString": "literal_string \"Token amount unavailable.\""}, "value": "Token amount unavailable."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_a1af1d15535e7bc442ee0e618061f403bb916475c60a0adcfe0a67a8291d42ab", "typeString": "literal_string \"Token amount unavailable.\""}], "id": 259, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "3091:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 267, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3091:92:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 268, "nodeType": "ExpressionStatement", "src": "3091:92:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 272, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "3224:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 273, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "3224:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 276, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "3244:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$629", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$629", "typeString": "contract SimpleSwap"}], "id": 275, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "3236:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 274, "name": "address", "nodeType": "ElementaryTypeName", "src": "3236:7:3", "typeDescriptions": {}}}, "id": 277, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3236:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 278, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "3251:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 270, "name": "soldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 194, "src": "3201:9:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 271, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "3201:22:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 279, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3201:68:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "546f6b656e20616d6f756e7420756e617661696c61626c652e", "id": 280, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "3271:27:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_a1af1d15535e7bc442ee0e618061f403bb916475c60a0adcfe0a67a8291d42ab", "typeString": "literal_string \"Token amount unavailable.\""}, "value": "Token amount unavailable."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_a1af1d15535e7bc442ee0e618061f403bb916475c60a0adcfe0a67a8291d42ab", "typeString": "literal_string \"Token amount unavailable.\""}], "id": 269, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "3193:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 281, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3193:106:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 282, "nodeType": "ExpressionStatement", "src": "3193:106:3"}]}, "functionSelector": "5c36d25e", "id": 284, "implemented": true, "kind": "function", "modifiers": [], "name": "swap", "nodeType": "FunctionDefinition", "parameters": {"id": 171, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 165, "mutability": "mutable", "name": "quantitySoldToken", "nodeType": "VariableDeclaration", "scope": 284, "src": "2058:25:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 164, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2058:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 167, "mutability": "mutable", "name": "minAmountPurchasedToken", "nodeType": "VariableDeclaration", "scope": 284, "src": "2085:31:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 166, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2085:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 170, "mutability": "mutable", "name": "tokenForSale", "nodeType": "VariableDeclaration", "scope": 284, "src": "2118:19:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}, "typeName": {"id": 169, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 168, "name": "Tokens", "nodeType": "IdentifierPath", "referencedDeclaration": 41, "src": "2118:6:3"}, "referencedDeclaration": 41, "src": "2118:6:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}}, "visibility": "internal"}], "src": "2057:81:3"}, "returnParameters": {"id": 172, "nodeType": "ParameterList", "parameters": [], "src": "2146:0:3"}, "scope": 629, "src": "2044:1263:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 408, "nodeType": "Block", "src": "3385:1087:3", "statements": [{"expression": {"arguments": [{"id": 290, "name": "isPoolInitiated", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 66, "src": "3403:15:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520706f6f6c2073686f756c6420626520696e697469617465642066697273742e", "id": 291, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "3420:37:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_608d25f69640ce0cca05f1a985beb91244e3b0aa2a675a272c818d6d7cad3c94", "typeString": "literal_string \"The pool should be initiated first.\""}, "value": "The pool should be initiated first."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_608d25f69640ce0cca05f1a985beb91244e3b0aa2a675a272c818d6d7cad3c94", "typeString": "literal_string \"The pool should be initiated first.\""}], "id": 289, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "3395:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 292, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3395:63:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 293, "nodeType": "ExpressionStatement", "src": "3395:63:3"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 297, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 295, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 286, "src": "3476:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">", "rightExpression": {"hexValue": "30", "id": 296, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3493:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "src": "3476:18:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520616d6f756e74206f6620737570706c696564206c7020746f6b656e732073686f756c64206265203e20302e", "id": 298, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "3496:49:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_4d3edc197d99dc2fb86176939dfb63767cb4b4d2628cec7bef006b1c5d9ab844", "typeString": "literal_string \"The amount of supplied lp tokens should be > 0.\""}, "value": "The amount of supplied lp tokens should be > 0."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_4d3edc197d99dc2fb86176939dfb63767cb4b4d2628cec7bef006b1c5d9ab844", "typeString": "literal_string \"The amount of supplied lp tokens should be > 0.\""}], "id": 294, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "3468:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 299, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3468:78:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 300, "nodeType": "ExpressionStatement", "src": "3468:78:3"}, {"assignments": [302, 304], "declarations": [{"constant": false, "id": 302, "mutability": "mutable", "name": "amountLinkPerLpToken", "nodeType": "VariableDeclaration", "scope": 408, "src": "3557:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 301, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3557:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 304, "mutability": "mutable", "name": "amountUsdcPerLpToken", "nodeType": "VariableDeclaration", "scope": 408, "src": "3587:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 303, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3587:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 307, "initialValue": {"arguments": [], "expression": {"argumentTypes": [], "id": 305, "name": "getLpTokenPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 628, "src": "3619:15:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$", "typeString": "function () view returns (uint256,uint256)"}}, "id": 306, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3619:17:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$", "typeString": "tuple(uint256,uint256)"}}, "nodeType": "VariableDeclarationStatement", "src": "3556:80:3"}, {"assignments": [310], "declarations": [{"constant": false, "id": 310, "mutability": "mutable", "name": "Link", "nodeType": "VariableDeclaration", "scope": 408, "src": "3647:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 309, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 308, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "3647:6:3"}, "referencedDeclaration": 33, "src": "3647:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 314, "initialValue": {"arguments": [{"id": 312, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "3668:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 311, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "3661:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 313, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3661:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "3647:33:3"}, {"assignments": [317], "declarations": [{"constant": false, "id": 317, "mutability": "mutable", "name": "USDC", "nodeType": "VariableDeclaration", "scope": 408, "src": "3690:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 316, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 315, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "3690:6:3"}, "referencedDeclaration": 33, "src": "3690:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 321, "initialValue": {"arguments": [{"id": 319, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "3711:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 318, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "3704:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 320, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3704:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "3690:33:3"}, {"assignments": [323], "declarations": [{"constant": false, "id": 323, "mutability": "mutable", "name": "amountLinkToSupply", "nodeType": "VariableDeclaration", "scope": 408, "src": "3734:26:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 322, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3734:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 333, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 331, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 329, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3808:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 330, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3814:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "3808:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 326, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 286, "src": "3788:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 324, "name": "amountLinkPerLpToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 302, "src": "3763:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 325, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 939, "src": "3763:24:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 327, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3763:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 328, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 954, "src": "3763:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 332, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3763:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "3734:82:3"}, {"assignments": [335], "declarations": [{"constant": false, "id": 335, "mutability": "mutable", "name": "amountUSDCToSupply", "nodeType": "VariableDeclaration", "scope": 408, "src": "3841:26:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 334, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3841:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 345, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 343, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 341, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3915:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 342, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3921:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "3915:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 338, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 286, "src": "3895:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 336, "name": "amountUsdcPerLpToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 304, "src": "3870:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 337, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 939, "src": "3870:24:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 339, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3870:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 340, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 954, "src": "3870:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 344, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3870:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "3841:82:3"}, {"expression": {"id": 351, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 346, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "3948:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 349, "name": "amountLinkToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 323, "src": "3992:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 347, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "3969:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 348, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 909, "src": "3969:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 350, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3969:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "3948:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 352, "nodeType": "ExpressionStatement", "src": "3948:63:3"}, {"expression": {"id": 358, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 353, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "4021:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 356, "name": "amountUSDCToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 335, "src": "4065:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 354, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "4042:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 355, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 909, "src": "4042:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 357, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4042:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4021:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 359, "nodeType": "ExpressionStatement", "src": "4021:63:3"}, {"expression": {"id": 365, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 360, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "4095:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 363, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 286, "src": "4129:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 361, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "4111:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 362, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 909, "src": "4111:17:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 364, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4111:33:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4095:49:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 366, "nodeType": "ExpressionStatement", "src": "4095:49:3"}, {"expression": {"id": 378, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"baseExpression": {"id": 367, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "4155:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 370, "indexExpression": {"expression": {"id": 368, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4176:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 369, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4176:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": true, "nodeType": "IndexAccess", "src": "4155:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 376, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 286, "src": "4227:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"baseExpression": {"id": 371, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "4190:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 374, "indexExpression": {"expression": {"id": 372, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4211:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 373, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4211:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": false, "nodeType": "IndexAccess", "src": "4190:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 375, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 909, "src": "4190:36:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 377, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4190:52:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4155:87:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 379, "nodeType": "ExpressionStatement", "src": "4155:87:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 383, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4279:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 384, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4279:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 387, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "4299:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$629", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$629", "typeString": "contract SimpleSwap"}], "id": 386, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "4291:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 385, "name": "address", "nodeType": "ElementaryTypeName", "src": "4291:7:3", "typeDescriptions": {}}}, "id": 388, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4291:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 389, "name": "amountLinkToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 323, "src": "4306:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 381, "name": "Link", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 310, "src": "4261:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 382, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "4261:17:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 390, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4261:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "4c696e6b20616d6f756e7420756e617661696c61626c652e", "id": 391, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4327:26:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_591cf3d3018fa9e37e640351a76135b58faebb191920a81c66c2abc7a2e848f6", "typeString": "literal_string \"Link amount unavailable.\""}, "value": "Link amount unavailable."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_591cf3d3018fa9e37e640351a76135b58faebb191920a81c66c2abc7a2e848f6", "typeString": "literal_string \"Link amount unavailable.\""}], "id": 380, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4253:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 392, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4253:101:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 393, "nodeType": "ExpressionStatement", "src": "4253:101:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 397, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4390:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 398, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4390:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 401, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "4410:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$629", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$629", "typeString": "contract SimpleSwap"}], "id": 400, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "4402:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 399, "name": "address", "nodeType": "ElementaryTypeName", "src": "4402:7:3", "typeDescriptions": {}}}, "id": 402, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4402:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 403, "name": "amountUSDCToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 335, "src": "4417:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 395, "name": "USDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 317, "src": "4372:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 396, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "4372:17:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 404, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4372:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "5553444320616d6f756e7420756e617661696c61626c652e", "id": 405, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4438:26:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_5242f098d6ef367a38ad451edc792a59ddb5e521292071330cacb901006b65cd", "typeString": "literal_string \"USDC amount unavailable.\""}, "value": "USDC amount unavailable."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_5242f098d6ef367a38ad451edc792a59ddb5e521292071330cacb901006b65cd", "typeString": "literal_string \"USDC amount unavailable.\""}], "id": 394, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4364:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 406, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4364:101:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 407, "nodeType": "ExpressionStatement", "src": "4364:101:3"}]}, "functionSelector": "35403023", "id": 409, "implemented": true, "kind": "function", "modifiers": [], "name": "supply", "nodeType": "FunctionDefinition", "parameters": {"id": 287, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 286, "mutability": "mutable", "name": "amountLpTokens", "nodeType": "VariableDeclaration", "scope": 409, "src": "3354:22:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 285, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3354:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "3353:24:3"}, "returnParameters": {"id": 288, "nodeType": "ParameterList", "parameters": [], "src": "3385:0:3"}, "scope": 629, "src": "3338:1134:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 535, "nodeType": "Block", "src": "4553:1140:3", "statements": [{"expression": {"arguments": [{"id": 415, "name": "isPoolInitiated", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 66, "src": "4571:15:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520706f6f6c2073686f756c6420626520696e697469617465642066697273742e", "id": 416, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4588:37:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_608d25f69640ce0cca05f1a985beb91244e3b0aa2a675a272c818d6d7cad3c94", "typeString": "literal_string \"The pool should be initiated first.\""}, "value": "The pool should be initiated first."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_608d25f69640ce0cca05f1a985beb91244e3b0aa2a675a272c818d6d7cad3c94", "typeString": "literal_string \"The pool should be initiated first.\""}], "id": 414, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4563:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 417, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4563:63:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 418, "nodeType": "ExpressionStatement", "src": "4563:63:3"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 422, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 420, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 411, "src": "4644:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">", "rightExpression": {"hexValue": "30", "id": 421, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "4661:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "src": "4644:18:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520616d6f756e74206f6620726571756573746564206c7020746f6b656e732073686f756c64206265203e20302e", "id": 423, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4664:50:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_981c433ebc0dc24005b61ab2540ad670d4eac08e3e379c43f678b7803187e1b2", "typeString": "literal_string \"The amount of requested lp tokens should be > 0.\""}, "value": "The amount of requested lp tokens should be > 0."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_981c433ebc0dc24005b61ab2540ad670d4eac08e3e379c43f678b7803187e1b2", "typeString": "literal_string \"The amount of requested lp tokens should be > 0.\""}], "id": 419, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4636:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 424, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4636:79:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 425, "nodeType": "ExpressionStatement", "src": "4636:79:3"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 432, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"baseExpression": {"id": 427, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "4733:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 430, "indexExpression": {"expression": {"id": 428, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4754:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 429, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4754:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": false, "nodeType": "IndexAccess", "src": "4733:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">=", "rightExpression": {"id": 431, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 411, "src": "4769:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4733:50:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "596f7520646f6e2774206861766520656e6f756768204c5020746f6b656e732e", "id": 433, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4785:34:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_5df3abdb3ead51351b27c91d31547c5e6be42e41e5dfbf4c06fc289f0547de84", "typeString": "literal_string \"You don't have enough LP tokens.\""}, "value": "You don't have enough LP tokens."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_5df3abdb3ead51351b27c91d31547c5e6be42e41e5dfbf4c06fc289f0547de84", "typeString": "literal_string \"You don't have enough LP tokens.\""}], "id": 426, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4725:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 434, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4725:95:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 435, "nodeType": "ExpressionStatement", "src": "4725:95:3"}, {"assignments": [437, 439], "declarations": [{"constant": false, "id": 437, "mutability": "mutable", "name": "amountLinkPerLpToken", "nodeType": "VariableDeclaration", "scope": 535, "src": "4831:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 436, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4831:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 439, "mutability": "mutable", "name": "amountUSDCPerLpToken", "nodeType": "VariableDeclaration", "scope": 535, "src": "4861:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 438, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4861:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 442, "initialValue": {"arguments": [], "expression": {"argumentTypes": [], "id": 440, "name": "getLpTokenPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 628, "src": "4894:15:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$", "typeString": "function () view returns (uint256,uint256)"}}, "id": 441, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4894:17:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$", "typeString": "tuple(uint256,uint256)"}}, "nodeType": "VariableDeclarationStatement", "src": "4830:81:3"}, {"assignments": [444], "declarations": [{"constant": false, "id": 444, "mutability": "mutable", "name": "amountLinkToWithdraw", "nodeType": "VariableDeclaration", "scope": 535, "src": "4922:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 443, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4922:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 454, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 452, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 450, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "4998:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 451, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5004:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "4998:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 447, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 411, "src": "4978:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 445, "name": "amountLinkPerLpToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 437, "src": "4953:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 446, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 939, "src": "4953:24:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 448, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4953:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 449, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 954, "src": "4953:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 453, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4953:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "4922:84:3"}, {"assignments": [456], "declarations": [{"constant": false, "id": 456, "mutability": "mutable", "name": "amountUSDCToWithdraw", "nodeType": "VariableDeclaration", "scope": 535, "src": "5016:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 455, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5016:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 466, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 464, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 462, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5092:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 463, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5098:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "5092:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 459, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 411, "src": "5072:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 457, "name": "amountUSDCPerLpToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 439, "src": "5047:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 458, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 939, "src": "5047:24:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 460, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5047:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 461, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 954, "src": "5047:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 465, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5047:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "5016:84:3"}, {"expression": {"id": 472, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 467, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "5111:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 470, "name": "amountLinkToWithdraw", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 444, "src": "5155:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 468, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "5132:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 469, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 924, "src": "5132:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 471, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5132:44:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5111:65:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 473, "nodeType": "ExpressionStatement", "src": "5111:65:3"}, {"expression": {"id": 479, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 474, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "5186:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 477, "name": "amountUSDCToWithdraw", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 456, "src": "5230:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 475, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "5207:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 476, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 924, "src": "5207:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 478, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5207:44:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5186:65:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 480, "nodeType": "ExpressionStatement", "src": "5186:65:3"}, {"expression": {"id": 486, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 481, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "5262:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 484, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 411, "src": "5296:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 482, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "5278:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 483, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 924, "src": "5278:17:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 485, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5278:33:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5262:49:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 487, "nodeType": "ExpressionStatement", "src": "5262:49:3"}, {"expression": {"id": 499, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"baseExpression": {"id": 488, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "5322:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 491, "indexExpression": {"expression": {"id": 489, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "5343:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 490, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "5343:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": true, "nodeType": "IndexAccess", "src": "5322:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 497, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 411, "src": "5394:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"baseExpression": {"id": 492, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "5357:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 495, "indexExpression": {"expression": {"id": 493, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "5378:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 494, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "5378:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": false, "nodeType": "IndexAccess", "src": "5357:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 496, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 924, "src": "5357:36:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 498, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5357:52:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5322:87:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 500, "nodeType": "ExpressionStatement", "src": "5322:87:3"}, {"assignments": [503], "declarations": [{"constant": false, "id": 503, "mutability": "mutable", "name": "Link", "nodeType": "VariableDeclaration", "scope": 535, "src": "5420:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 502, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 501, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "5420:6:3"}, "referencedDeclaration": 33, "src": "5420:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 507, "initialValue": {"arguments": [{"id": 505, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "5441:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 504, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "5434:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 506, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5434:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "5420:33:3"}, {"assignments": [510], "declarations": [{"constant": false, "id": 510, "mutability": "mutable", "name": "USDC", "nodeType": "VariableDeclaration", "scope": 535, "src": "5463:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 509, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 508, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "5463:6:3"}, "referencedDeclaration": 33, "src": "5463:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 514, "initialValue": {"arguments": [{"id": 512, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "5484:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 511, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "5477:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 513, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5477:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "5463:33:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 518, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "5529:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 519, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "5529:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 520, "name": "amountLinkToWithdraw", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 444, "src": "5541:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 516, "name": "Link", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 503, "src": "5515:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 517, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transfer", "nodeType": "MemberAccess", "referencedDeclaration": 12, "src": "5515:13:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,uint256) external returns (bool)"}}, "id": 521, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5515:47:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "4c696e6b20616d6f756e7420756e617661696c61626c652e", "id": 522, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "5564:26:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_591cf3d3018fa9e37e640351a76135b58faebb191920a81c66c2abc7a2e848f6", "typeString": "literal_string \"Link amount unavailable.\""}, "value": "Link amount unavailable."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_591cf3d3018fa9e37e640351a76135b58faebb191920a81c66c2abc7a2e848f6", "typeString": "literal_string \"Link amount unavailable.\""}], "id": 515, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "5507:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 523, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5507:84:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 524, "nodeType": "ExpressionStatement", "src": "5507:84:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 528, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "5623:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 529, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "5623:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 530, "name": "amountUSDCToWithdraw", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 456, "src": "5635:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 526, "name": "USDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 510, "src": "5609:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 527, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transfer", "nodeType": "MemberAccess", "referencedDeclaration": 12, "src": "5609:13:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,uint256) external returns (bool)"}}, "id": 531, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5609:47:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "5553444320616d6f756e7420756e617661696c61626c652e", "id": 532, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "5658:26:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_5242f098d6ef367a38ad451edc792a59ddb5e521292071330cacb901006b65cd", "typeString": "literal_string \"USDC amount unavailable.\""}, "value": "USDC amount unavailable."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_5242f098d6ef367a38ad451edc792a59ddb5e521292071330cacb901006b65cd", "typeString": "literal_string \"USDC amount unavailable.\""}], "id": 525, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "5601:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 533, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5601:84:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 534, "nodeType": "ExpressionStatement", "src": "5601:84:3"}]}, "functionSelector": "2e1a7d4d", "id": 536, "implemented": true, "kind": "function", "modifiers": [], "name": "withdraw", "nodeType": "FunctionDefinition", "parameters": {"id": 412, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 411, "mutability": "mutable", "name": "amountLpTokens", "nodeType": "VariableDeclaration", "scope": 536, "src": "4522:22:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 410, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4522:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "4521:24:3"}, "returnParameters": {"id": 413, "nodeType": "ParameterList", "parameters": [], "src": "4553:0:3"}, "scope": 629, "src": "4504:1189:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 599, "nodeType": "Block", "src": "6007:431:3", "statements": [{"assignments": [547], "declarations": [{"constant": false, "id": 547, "mutability": "mutable", "name": "y", "nodeType": "VariableDeclaration", "scope": 599, "src": "6017:9:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 546, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6017:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 556, "initialValue": {"condition": {"components": [{"commonType": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}, "id": 551, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 548, "name": "tokenForSale", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 541, "src": "6030:12:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}}, "nodeType": "BinaryOperation", "operator": "==", "rightExpression": {"expression": {"id": 549, "name": "Tokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 41, "src": "6046:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_enum$_Tokens_$41_$", "typeString": "type(enum SimpleSwap.Tokens)"}}, "id": 550, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "memberName": "Link", "nodeType": "MemberAccess", "src": "6046:11:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}}, "src": "6030:27:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "id": 552, "isConstant": false, "isInlineArray": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "TupleExpression", "src": "6029:29:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseExpression": {"id": 554, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "6082:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 555, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "Conditional", "src": "6029:71:3", "trueExpression": {"id": 553, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "6061:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "6017:83:3"}, {"assignments": [558], "declarations": [{"constant": false, "id": 558, "mutability": "mutable", "name": "x", "nodeType": "VariableDeclaration", "scope": 599, "src": "6110:9:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 557, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6110:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 567, "initialValue": {"condition": {"components": [{"commonType": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}, "id": 562, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 559, "name": "tokenForSale", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 541, "src": "6123:12:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}}, "nodeType": "BinaryOperation", "operator": "==", "rightExpression": {"expression": {"id": 560, "name": "Tokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 41, "src": "6139:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_enum$_Tokens_$41_$", "typeString": "type(enum SimpleSwap.Tokens)"}}, "id": 561, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "memberName": "Link", "nodeType": "MemberAccess", "src": "6139:11:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}}, "src": "6123:27:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "id": 563, "isConstant": false, "isInlineArray": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "TupleExpression", "src": "6122:29:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseExpression": {"id": 565, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "6175:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 566, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "Conditional", "src": "6122:71:3", "trueExpression": {"id": 564, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "6154:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "6110:83:3"}, {"assignments": [569], "declarations": [{"constant": false, "id": 569, "mutability": "mutable", "name": "C", "nodeType": "VariableDeclaration", "scope": 599, "src": "6204:9:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 568, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6204:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 573, "initialValue": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 572, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 570, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "6216:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": "*", "rightExpression": {"id": 571, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "6237:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "6216:39:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "6204:51:3"}, {"assignments": [575], "declarations": [{"constant": false, "id": 575, "mutability": "mutable", "name": "amountPurchasedTokens", "nodeType": "VariableDeclaration", "scope": 599, "src": "6288:29:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 574, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6288:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 585, "initialValue": {"arguments": [{"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 582, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 580, "name": "x", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 558, "src": "6332:1:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": "+", "rightExpression": {"id": 581, "name": "amount", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 538, "src": "6336:6:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "6332:10:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 578, "name": "C", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 569, "src": "6326:1:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 579, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 954, "src": "6326:5:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 583, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6326:17:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 576, "name": "y", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 547, "src": "6320:1:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 577, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 924, "src": "6320:5:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 584, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6320:24:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "6288:56:3"}, {"expression": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 597, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 593, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 586, "name": "amountPurchasedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 575, "src": "6382:21:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": "*", "rightExpression": {"components": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 591, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 589, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 587, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6407:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 588, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6413:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6407:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}, "nodeType": "BinaryOperation", "operator": "-", "rightExpression": {"id": 590, "name": "FEE", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 63, "src": "6417:3:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "6407:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "id": 592, "isConstant": false, "isInlineArray": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "TupleExpression", "src": "6406:15:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "6382:39:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": "/", "rightExpression": {"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 596, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 594, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6424:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 595, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6430:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6424:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}, "src": "6382:49:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "functionReturnParameters": 545, "id": 598, "nodeType": "Return", "src": "6375:56:3"}]}, "id": 600, "implemented": true, "kind": "function", "modifiers": [], "name": "getAmountPurchasedToken", "nodeType": "FunctionDefinition", "parameters": {"id": 542, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 538, "mutability": "mutable", "name": "amount", "nodeType": "VariableDeclaration", "scope": 600, "src": "5935:14:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 537, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5935:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 541, "mutability": "mutable", "name": "tokenForSale", "nodeType": "VariableDeclaration", "scope": 600, "src": "5951:19:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}, "typeName": {"id": 540, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 539, "name": "Tokens", "nodeType": "IdentifierPath", "referencedDeclaration": 41, "src": "5951:6:3"}, "referencedDeclaration": 41, "src": "5951:6:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Tokens_$41", "typeString": "enum SimpleSwap.Tokens"}}, "visibility": "internal"}], "src": "5934:37:3"}, "returnParameters": {"id": 545, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 544, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 600, "src": "5994:7:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 543, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5994:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "5993:9:3"}, "scope": 629, "src": "5902:536:3", "stateMutability": "view", "virtual": false, "visibility": "internal"}, {"body": {"id": 627, "nodeType": "Block", "src": "6516:128:3", "statements": [{"expression": {"components": [{"arguments": [{"id": 614, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "6570:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 611, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 609, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6557:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 610, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6563:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6557:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"id": 607, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "6534:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 608, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 939, "src": "6534:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 612, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6534:31:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 613, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 954, "src": "6534:35:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 615, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6534:50:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, {"arguments": [{"id": 623, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "6622:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 620, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 618, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6609:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 619, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6615:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6609:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"id": 616, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "6586:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 617, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 939, "src": "6586:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 621, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6586:31:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 622, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 954, "src": "6586:35:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 624, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6586:50:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "id": 625, "isConstant": false, "isInlineArray": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "TupleExpression", "src": "6533:104:3", "typeDescriptions": {"typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$", "typeString": "tuple(uint256,uint256)"}}, "functionReturnParameters": 606, "id": 626, "nodeType": "Return", "src": "6526:111:3"}]}, "functionSelector": "6f5cdb6c", "id": 628, "implemented": true, "kind": "function", "modifiers": [], "name": "getLpTokenPrice", "nodeType": "FunctionDefinition", "parameters": {"id": 601, "nodeType": "ParameterList", "parameters": [], "src": "6470:2:3"}, "returnParameters": {"id": 606, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 603, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 628, "src": "6493:7:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 602, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6493:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 605, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 628, "src": "6502:7:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 604, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6502:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "6492:18:3"}, "scope": 629, "src": "6446:198:3", "stateMutability": "view", "virtual": false, "visibility": "public"}], "scope": 630, "src": "462:6186:3"}], "src": "39:6612:3"}, "bytecode": "6080604052600180546001600160a01b031990811673a36085f69e2889c224210f603d836748e7dc0088179091556002805490911673b7a4f3e9097c08da09517b5ab877f7a917224ede179055600060038190556004819055600555610bb86006556007805460ff1916905534801561007757600080fd5b5061008861008361008d565b610091565b6100e1565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61110b806100f06000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063868c844f11610071578063868c844f146101305780638da5cb5b14610138578063b2e411c21461014d578063c57981b514610155578063ce49ea9a1461015d578063f2fde38b14610170576100b4565b80632e1a7d4d146100b957806335403023146100ce5780635c36d25e146100e1578063618e552c146100f45780636f5cdb6c14610112578063715018a614610128575b600080fd5b6100cc6100c7366004610cb2565b610183565b005b6100cc6100dc366004610cb2565b6103e8565b6100cc6100ef366004610ceb565b6105a4565b6100fc6107d0565b604051610109919061103a565b60405180910390f35b61011a6107d6565b604051610109929190611043565b6100cc61081d565b6100fc610868565b61014061086e565b6040516101099190610d26565b6100fc61087d565b6100fc610883565b6100cc61016b366004610cca565b610889565b6100cc61017e366004610c6b565b610a98565b60075460ff166101ae5760405162461bcd60e51b81526004016101a590610ee6565b60405180910390fd5b600081116101ce5760405162461bcd60e51b81526004016101a590610f29565b336000908152600860205260409020548111156101fd5760405162461bcd60e51b81526004016101a590610eb1565b6000806102086107d6565b90925090506000610226620f42406102208587610b09565b90610b1c565b9050600061023b620f42406102208588610b09565b60035490915061024b9083610b28565b60035560045461025b9082610b28565b60045560055461026b9086610b28565b600555336000908152600860205260409020546102889086610b28565b336000818152600860205260409081902092909255600154600254925163a9059cbb60e01b81526001600160a01b039182169390911691839163a9059cbb916102d5918890600401610d5e565b602060405180830381600087803b1580156102ef57600080fd5b505af1158015610303573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103279190610c92565b6103435760405162461bcd60e51b81526004016101a590610e7a565b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb906103719033908790600401610d5e565b602060405180830381600087803b15801561038b57600080fd5b505af115801561039f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c39190610c92565b6103df5760405162461bcd60e51b81526004016101a590610e43565b50505050505050565b60075460ff1661040a5760405162461bcd60e51b81526004016101a590610ee6565b6000811161042a5760405162461bcd60e51b81526004016101a590610df4565b6000806104356107d6565b6001546002549294509092506001600160a01b0390811691166000610461620f42406102208789610b09565b90506000610476620f4240610220878a610b09565b6003549091506104869083610b34565b6003556004546104969082610b34565b6004556005546104a69088610b34565b600555336000908152600860205260409020546104c39088610b34565b33600081815260086020526040908190209290925590516323b872dd60e01b81526001600160a01b038616916323b872dd91610506919030908790600401610d3a565b602060405180830381600087803b15801561052057600080fd5b505af1158015610534573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105589190610c92565b6105745760405162461bcd60e51b81526004016101a590610e7a565b6040516323b872dd60e01b81526001600160a01b038416906323b872dd9061037190339030908690600401610d3a565b60075460ff166105c65760405162461bcd60e51b81526004016101a590610ee6565b60006105d28483610b40565b9050828110156105f45760405162461bcd60e51b81526004016101a590610fe5565b6000808084600181111561061857634e487b7160e01b600052602160045260246000fd5b14156106585760035461062b9087610b34565b60035560045461063b9084610b28565b60045550506001546002546001600160a01b03918216911661068e565b6003546106659084610b28565b6003556004546106759087610b34565b60045550506002546001546001600160a01b0391821691165b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb906106bc9033908790600401610d5e565b602060405180830381600087803b1580156106d657600080fd5b505af11580156106ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070e9190610c92565b61072a5760405162461bcd60e51b81526004016101a590610fae565b6040516323b872dd60e01b81526001600160a01b038316906323b872dd9061075a90339030908b90600401610d3a565b602060405180830381600087803b15801561077457600080fd5b505af1158015610788573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ac9190610c92565b6107c85760405162461bcd60e51b81526004016101a590610fae565b505050505050565b60035481565b6000806107f7600554610220620f4240600354610b0990919063ffffffff16565b610815600554610220620f4240600454610b0990919063ffffffff16565b915091509091565b610825610c17565b6001600160a01b031661083661086e565b6001600160a01b03161461085c5760405162461bcd60e51b81526004016101a590610f79565b6108666000610c1b565b565b60055481565b6000546001600160a01b031690565b60045481565b60065481565b610891610c17565b6001600160a01b03166108a261086e565b6001600160a01b0316146108c85760405162461bcd60e51b81526004016101a590610f79565b60075460ff16156108eb5760405162461bcd60e51b81526004016101a590610dbd565b6007805460ff19166001908117909155546002546040516323b872dd60e01b81526001600160a01b0392831692919091169082906323b872dd9061093790339030908990600401610d3a565b602060405180830381600087803b15801561095157600080fd5b505af1158015610965573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109899190610c92565b6109a55760405162461bcd60e51b81526004016101a590610e7a565b6040516323b872dd60e01b81526001600160a01b038216906323b872dd906109d590339030908890600401610d3a565b602060405180830381600087803b1580156109ef57600080fd5b505af1158015610a03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a279190610c92565b610a435760405162461bcd60e51b81526004016101a590610e43565b600354610a509085610b34565b600355600454610a609084610b34565b600455600583905533600090815260086020526040902054610a829084610b34565b3360009081526008602052604090205550505050565b610aa0610c17565b6001600160a01b0316610ab161086e565b6001600160a01b031614610ad75760405162461bcd60e51b81526004016101a590610f79565b6001600160a01b038116610afd5760405162461bcd60e51b81526004016101a590610d77565b610b0681610c1b565b50565b6000610b158284611089565b9392505050565b6000610b158284611069565b6000610b1582846110a8565b6000610b158284611051565b60008080836001811115610b6457634e487b7160e01b600052602160045260246000fd5b14610b7157600354610b75565b6004545b9050600080846001811115610b9a57634e487b7160e01b600052602160045260246000fd5b14610ba757600454610bab565b6003545b90506000600354600454610bbf9190611089565b90506000610be1610bda610bd38986611051565b8490610b1c565b8590610b28565b9050620f4240600654620f4240610bf891906110a8565b610c029083611089565b610c0c9190611069565b979650505050505050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610c7c578081fd5b81356001600160a01b0381168114610b15578182fd5b600060208284031215610ca3578081fd5b81518015158114610b15578182fd5b600060208284031215610cc3578081fd5b5035919050565b60008060408385031215610cdc578081fd5b50508035926020909101359150565b600080600060608486031215610cff578081fd5b8335925060208401359150604084013560028110610d1b578182fd5b809150509250925092565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601e908201527f54686520706f6f6c2077617320616c726561647920696e697469617465640000604082015260600190565b6020808252602f908201527f54686520616d6f756e74206f6620737570706c696564206c7020746f6b656e7360408201526e1039b437bab632103132901f10181760891b606082015260800190565b60208082526018908201527f5553444320616d6f756e7420756e617661696c61626c652e0000000000000000604082015260600190565b60208082526018908201527f4c696e6b20616d6f756e7420756e617661696c61626c652e0000000000000000604082015260600190565b6020808252818101527f596f7520646f6e2774206861766520656e6f756768204c5020746f6b656e732e604082015260600190565b60208082526023908201527f54686520706f6f6c2073686f756c6420626520696e697469617465642066697260408201526239ba1760e91b606082015260800190565b60208082526030908201527f54686520616d6f756e74206f6620726571756573746564206c7020746f6b656e60408201526f399039b437bab632103132901f10181760811b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526019908201527f546f6b656e20616d6f756e7420756e617661696c61626c652e00000000000000604082015260600190565b60208082526035908201527f54686520616d6f756e74206f662070757263686173656420746f6b656e206973604082015274103637bbb2b9103a3430b7103932b8bab4b932b21760591b606082015260800190565b90815260200190565b918252602082015260400190565b60008219821115611064576110646110bf565b500190565b60008261108457634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156110a3576110a36110bf565b500290565b6000828210156110ba576110ba6110bf565b500390565b634e487b7160e01b600052601160045260246000fdfea264697066735822122088b872d8e93f33c9297200b03d7fc1f4360d076753bba005a27a9bff8c23f92b64736f6c63430008000033", "bytecodeSha1": "35f666e2072f72a49f175bfb8037273be6502b7b", "compiler": {"evm_version": "istanbul", "optimizer": {"enabled": true, "runs": 200}, "version": "0.8.0+commit.c7dfd78e"}, "contractName": "SimpleSwap", "coverageMap": {"branches": {"0": {"Ownable.transferOwnership": {"67": [1185, 1208, true], "68": [1934, 1956, true]}}, "1": {}, "2": {}, "3": {"SimpleSwap.initiatePool": {"64": [1315, 1331, true], "65": [1503, 1567, true], "66": [1614, 1678, true]}, "SimpleSwap.supply": {"55": [3403, 3418, true], "56": [3476, 3494, true], "57": [4261, 4325, true], "58": [4372, 4436, true]}, "SimpleSwap.swap": {"59": [2164, 2179, true], "60": [2334, 2381, true], "61": [2509, 2536, false], "62": [3099, 3153, true], "63": [3201, 3269, true]}, "SimpleSwap.withdraw": {"50": [4571, 4586, true], "51": [4644, 4662, true], "52": [4733, 4783, true], "53": [5515, 5562, true], "54": [5609, 5656, true]}}}, "statements": {"0": {"Ownable._setOwner": {"48": [2131, 2148], "49": [2158, 2203]}, "Ownable.owner": {"31": [1038, 1051]}, "Ownable.renounceOwnership": {"30": [1669, 1690]}, "Ownable.transferOwnership": {"40": [1926, 1999], "41": [2009, 2028]}}, "1": {"Context._msgSender": {"47": [658, 675]}}, "2": {"SafeMath.add": {"45": [2749, 2761]}, "SafeMath.div": {"43": [3844, 3856]}, "SafeMath.mul": {"42": [3459, 3471]}, "SafeMath.sub": {"44": [3116, 3128]}}, "3": {"SimpleSwap.getAmountPurchasedToken": {"46": [6375, 6431]}, "SimpleSwap.getLpTokenPrice": {"29": [6526, 6637]}, "SimpleSwap.initiatePool": {"32": [1307, 1366], "33": [1376, 1398], "34": [1495, 1596], "35": [1606, 1707], "36": [1718, 1781], "37": [1791, 1854], "38": [1865, 1899], "39": [1910, 1996]}, "SimpleSwap.supply": {"9": [3395, 3458], "10": [3468, 3546], "11": [3948, 4011], "12": [4021, 4084], "13": [4095, 4144], "14": [4155, 4242], "15": [4253, 4354], "16": [4364, 4465]}, "SimpleSwap.swap": {"17": [2156, 2219], "18": [2326, 2439], "19": [2552, 2615], "20": [2629, 2694], "21": [2709, 2740], "22": [2754, 2787], "23": [2827, 2892], "24": [2906, 2968], "25": [2983, 3014], "26": [3029, 3062], "27": [3091, 3183], "28": [3193, 3299]}, "SimpleSwap.withdraw": {"0": [4563, 4626], "1": [4636, 4715], "2": [4725, 4820], "3": [5111, 5176], "4": [5186, 5251], "5": [5262, 5311], "6": [5322, 5409], "7": [5507, 5591], "8": [5601, 5685]}}}}, "dependencies": ["OpenZeppelin/openzeppelin-contracts@4.2.0/Context", "IERC20", "OpenZeppelin/openzeppelin-contracts@4.2.0/Ownable", "OpenZeppelin/openzeppelin-contracts@4.2.0/SafeMath"], "deployedBytecode": "608060405234801561001057600080fd5b50600436106100b45760003560e01c8063868c844f11610071578063868c844f146101305780638da5cb5b14610138578063b2e411c21461014d578063c57981b514610155578063ce49ea9a1461015d578063f2fde38b14610170576100b4565b80632e1a7d4d146100b957806335403023146100ce5780635c36d25e146100e1578063618e552c146100f45780636f5cdb6c14610112578063715018a614610128575b600080fd5b6100cc6100c7366004610cb2565b610183565b005b6100cc6100dc366004610cb2565b6103e8565b6100cc6100ef366004610ceb565b6105a4565b6100fc6107d0565b604051610109919061103a565b60405180910390f35b61011a6107d6565b604051610109929190611043565b6100cc61081d565b6100fc610868565b61014061086e565b6040516101099190610d26565b6100fc61087d565b6100fc610883565b6100cc61016b366004610cca565b610889565b6100cc61017e366004610c6b565b610a98565b60075460ff166101ae5760405162461bcd60e51b81526004016101a590610ee6565b60405180910390fd5b600081116101ce5760405162461bcd60e51b81526004016101a590610f29565b336000908152600860205260409020548111156101fd5760405162461bcd60e51b81526004016101a590610eb1565b6000806102086107d6565b90925090506000610226620f42406102208587610b09565b90610b1c565b9050600061023b620f42406102208588610b09565b60035490915061024b9083610b28565b60035560045461025b9082610b28565b60045560055461026b9086610b28565b600555336000908152600860205260409020546102889086610b28565b336000818152600860205260409081902092909255600154600254925163a9059cbb60e01b81526001600160a01b039182169390911691839163a9059cbb916102d5918890600401610d5e565b602060405180830381600087803b1580156102ef57600080fd5b505af1158015610303573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103279190610c92565b6103435760405162461bcd60e51b81526004016101a590610e7a565b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb906103719033908790600401610d5e565b602060405180830381600087803b15801561038b57600080fd5b505af115801561039f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c39190610c92565b6103df5760405162461bcd60e51b81526004016101a590610e43565b50505050505050565b60075460ff1661040a5760405162461bcd60e51b81526004016101a590610ee6565b6000811161042a5760405162461bcd60e51b81526004016101a590610df4565b6000806104356107d6565b6001546002549294509092506001600160a01b0390811691166000610461620f42406102208789610b09565b90506000610476620f4240610220878a610b09565b6003549091506104869083610b34565b6003556004546104969082610b34565b6004556005546104a69088610b34565b600555336000908152600860205260409020546104c39088610b34565b33600081815260086020526040908190209290925590516323b872dd60e01b81526001600160a01b038616916323b872dd91610506919030908790600401610d3a565b602060405180830381600087803b15801561052057600080fd5b505af1158015610534573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105589190610c92565b6105745760405162461bcd60e51b81526004016101a590610e7a565b6040516323b872dd60e01b81526001600160a01b038416906323b872dd9061037190339030908690600401610d3a565b60075460ff166105c65760405162461bcd60e51b81526004016101a590610ee6565b60006105d28483610b40565b9050828110156105f45760405162461bcd60e51b81526004016101a590610fe5565b6000808084600181111561061857634e487b7160e01b600052602160045260246000fd5b14156106585760035461062b9087610b34565b60035560045461063b9084610b28565b60045550506001546002546001600160a01b03918216911661068e565b6003546106659084610b28565b6003556004546106759087610b34565b60045550506002546001546001600160a01b0391821691165b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb906106bc9033908790600401610d5e565b602060405180830381600087803b1580156106d657600080fd5b505af11580156106ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070e9190610c92565b61072a5760405162461bcd60e51b81526004016101a590610fae565b6040516323b872dd60e01b81526001600160a01b038316906323b872dd9061075a90339030908b90600401610d3a565b602060405180830381600087803b15801561077457600080fd5b505af1158015610788573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ac9190610c92565b6107c85760405162461bcd60e51b81526004016101a590610fae565b505050505050565b60035481565b6000806107f7600554610220620f4240600354610b0990919063ffffffff16565b610815600554610220620f4240600454610b0990919063ffffffff16565b915091509091565b610825610c17565b6001600160a01b031661083661086e565b6001600160a01b03161461085c5760405162461bcd60e51b81526004016101a590610f79565b6108666000610c1b565b565b60055481565b6000546001600160a01b031690565b60045481565b60065481565b610891610c17565b6001600160a01b03166108a261086e565b6001600160a01b0316146108c85760405162461bcd60e51b81526004016101a590610f79565b60075460ff16156108eb5760405162461bcd60e51b81526004016101a590610dbd565b6007805460ff19166001908117909155546002546040516323b872dd60e01b81526001600160a01b0392831692919091169082906323b872dd9061093790339030908990600401610d3a565b602060405180830381600087803b15801561095157600080fd5b505af1158015610965573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109899190610c92565b6109a55760405162461bcd60e51b81526004016101a590610e7a565b6040516323b872dd60e01b81526001600160a01b038216906323b872dd906109d590339030908890600401610d3a565b602060405180830381600087803b1580156109ef57600080fd5b505af1158015610a03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a279190610c92565b610a435760405162461bcd60e51b81526004016101a590610e43565b600354610a509085610b34565b600355600454610a609084610b34565b600455600583905533600090815260086020526040902054610a829084610b34565b3360009081526008602052604090205550505050565b610aa0610c17565b6001600160a01b0316610ab161086e565b6001600160a01b031614610ad75760405162461bcd60e51b81526004016101a590610f79565b6001600160a01b038116610afd5760405162461bcd60e51b81526004016101a590610d77565b610b0681610c1b565b50565b6000610b158284611089565b9392505050565b6000610b158284611069565b6000610b1582846110a8565b6000610b158284611051565b60008080836001811115610b6457634e487b7160e01b600052602160045260246000fd5b14610b7157600354610b75565b6004545b9050600080846001811115610b9a57634e487b7160e01b600052602160045260246000fd5b14610ba757600454610bab565b6003545b90506000600354600454610bbf9190611089565b90506000610be1610bda610bd38986611051565b8490610b1c565b8590610b28565b9050620f4240600654620f4240610bf891906110a8565b610c029083611089565b610c0c9190611069565b979650505050505050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610c7c578081fd5b81356001600160a01b0381168114610b15578182fd5b600060208284031215610ca3578081fd5b81518015158114610b15578182fd5b600060208284031215610cc3578081fd5b5035919050565b60008060408385031215610cdc578081fd5b50508035926020909101359150565b600080600060608486031215610cff578081fd5b8335925060208401359150604084013560028110610d1b578182fd5b809150509250925092565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601e908201527f54686520706f6f6c2077617320616c726561647920696e697469617465640000604082015260600190565b6020808252602f908201527f54686520616d6f756e74206f6620737570706c696564206c7020746f6b656e7360408201526e1039b437bab632103132901f10181760891b606082015260800190565b60208082526018908201527f5553444320616d6f756e7420756e617661696c61626c652e0000000000000000604082015260600190565b60208082526018908201527f4c696e6b20616d6f756e7420756e617661696c61626c652e0000000000000000604082015260600190565b6020808252818101527f596f7520646f6e2774206861766520656e6f756768204c5020746f6b656e732e604082015260600190565b60208082526023908201527f54686520706f6f6c2073686f756c6420626520696e697469617465642066697260408201526239ba1760e91b606082015260800190565b60208082526030908201527f54686520616d6f756e74206f6620726571756573746564206c7020746f6b656e60408201526f399039b437bab632103132901f10181760811b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526019908201527f546f6b656e20616d6f756e7420756e617661696c61626c652e00000000000000604082015260600190565b60208082526035908201527f54686520616d6f756e74206f662070757263686173656420746f6b656e206973604082015274103637bbb2b9103a3430b7103932b8bab4b932b21760591b606082015260800190565b90815260200190565b918252602082015260400190565b60008219821115611064576110646110bf565b500190565b60008261108457634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156110a3576110a36110bf565b500290565b6000828210156110ba576110ba6110bf565b500390565b634e487b7160e01b600052601160045260246000fdfea264697066735822122088b872d8e93f33c9297200b03d7fc1f4360d076753bba005a27a9bff8c23f92b64736f6c63430008000033", "deployedSourceMap": "462:6186:3:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4504:1189;;;;;;:::i;:::-;;:::i;:::-;;3338:1134;;;;;;:::i;:::-;;:::i;2044:1263::-;;;;;;:::i;:::-;;:::i;862:37::-;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6446:198;;;:::i;:::-;;;;;;;;:::i;1605:92:0:-;;;:::i;986:33:3:-;;;:::i;973:85:0:-;;;:::i;:::-;;;;;;;:::i;924:37:3:-;;;:::i;1049:32::-;;;:::i;1202:810::-;;;;;;:::i;:::-;;:::i;1846:189:0:-;;;;;;:::i;:::-;;:::i;4504:1189:3:-;4571:15;;;;4563:63;;;;-1:-1:-1;;;4563:63:3;;;;;;;:::i;:::-;;;;;;;;;4661:1;4644:14;:18;4636:79;;;;-1:-1:-1;;;4636:79:3;;;;;;;:::i;:::-;4754:10;4733:32;;;;:20;:32;;;;;;:50;-1:-1:-1;4733:50:3;4725:95;;;;-1:-1:-1;;;4725:95:3;;;;;;;:::i;:::-;4831:28;4861;4894:17;:15;:17::i;:::-;4830:81;;-1:-1:-1;4830:81:3;-1:-1:-1;4922:28:3;4953:53;4998:7;4953:40;4830:81;4978:14;4953:24;:40::i;:::-;:44;;:53::i;:::-;4922:84;-1:-1:-1;5016:28:3;5047:53;5092:7;5047:40;:20;5072:14;5047:24;:40::i;:53::-;5132:18;;5016:84;;-1:-1:-1;5132:44:3;;5155:20;5132:22;:44::i;:::-;5111:18;:65;5207:18;;:44;;5230:20;5207:22;:44::i;:::-;5186:18;:65;5278:13;;:33;;5296:14;5278:17;:33::i;:::-;5262:13;:49;5378:10;5357:32;;;;:20;:32;;;;;;:52;;5394:14;5357:36;:52::i;:::-;5343:10;5322:32;;;;:20;:32;;;;;;;:87;;;;5441:11;;5484;;5515:47;;-1:-1:-1;;;5515:47:3;;-1:-1:-1;;;;;5441:11:3;;;;5484;;;;5441;;5515:13;;:47;;5541:20;;5515:47;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5507:84;;;;-1:-1:-1;;;5507:84:3;;;;;;;:::i;:::-;5609:47;;-1:-1:-1;;;5609:47:3;;-1:-1:-1;;;;;5609:13:3;;;;;:47;;5623:10;;5635:20;;5609:47;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5601:84;;;;-1:-1:-1;;;5601:84:3;;;;;;;:::i;:::-;4504:1189;;;;;;;:::o;3338:1134::-;3403:15;;;;3395:63;;;;-1:-1:-1;;;3395:63:3;;;;;;;:::i;:::-;3493:1;3476:14;:18;3468:78;;;;-1:-1:-1;;;3468:78:3;;;;;;;:::i;:::-;3557:28;3587;3619:17;:15;:17::i;:::-;3668:11;;3711;;3556:80;;-1:-1:-1;3556:80:3;;-1:-1:-1;;;;;;3668:11:3;;;;3711;3647;3763:53;3808:7;3763:40;3556:80;3788:14;3763:24;:40::i;:53::-;3734:82;-1:-1:-1;3841:26:3;3870:53;3915:7;3870:40;:20;3895:14;3870:24;:40::i;:53::-;3969:18;;3841:82;;-1:-1:-1;3969:42:3;;3992:18;3969:22;:42::i;:::-;3948:18;:63;4042:18;;:42;;4065:18;4042:22;:42::i;:::-;4021:18;:63;4111:13;;:33;;4129:14;4111:17;:33::i;:::-;4095:13;:49;4211:10;4190:32;;;;:20;:32;;;;;;:52;;4227:14;4190:36;:52::i;:::-;4176:10;4155:32;;;;:20;:32;;;;;;;:87;;;;4261:64;;-1:-1:-1;;;4261:64:3;;-1:-1:-1;;;;;4261:17:3;;;;;:64;;4176:10;4299:4;;4306:18;;4261:64;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4253:101;;;;-1:-1:-1;;;4253:101:3;;;;;;;:::i;:::-;4372:64;;-1:-1:-1;;;4372:64:3;;-1:-1:-1;;;;;4372:17:3;;;;;:64;;4390:10;;4410:4;;4417:18;;4372:64;;;:::i;2044:1263::-;2164:15;;;;2156:63;;;;-1:-1:-1;;;2156:63:3;;;;;;;:::i;:::-;2229:28;2260:56;2284:17;2303:12;2260:23;:56::i;:::-;2229:87;;2358:23;2334:20;:47;;2326:113;;;;-1:-1:-1;;;2326:113:3;;;;;;;:::i;:::-;2450:16;;;2509:12;:27;;;;;;-1:-1:-1;;;2509:27:3;;;;;;;;;;2505:568;;;2574:18;;:41;;2597:17;2574:22;:41::i;:::-;2552:18;:63;2650:18;;:44;;2673:20;2650:22;:44::i;:::-;2629:18;:65;-1:-1:-1;;2728:11:3;;2775;;-1:-1:-1;;;;;2728:11:3;;;;2775;2505:568;;;2848:18;;:44;;2871:20;2848:22;:44::i;:::-;2827:18;:65;2927:18;;:41;;2950:17;2927:22;:41::i;:::-;2906:18;:62;-1:-1:-1;;3002:11:3;;;3050;-1:-1:-1;;;;;3002:11:3;;;;3050;2505:568;3099:54;;-1:-1:-1;;;3099:54:3;;-1:-1:-1;;;;;3099:20:3;;;;;:54;;3120:10;;3132:20;;3099:54;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3091:92;;;;-1:-1:-1;;;3091:92:3;;;;;;;:::i;:::-;3201:68;;-1:-1:-1;;;3201:68:3;;-1:-1:-1;;;;;3201:22:3;;;;;:68;;3224:10;;3244:4;;3251:17;;3201:68;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3193:106;;;;-1:-1:-1;;;3193:106:3;;;;;;;:::i;:::-;2044:1263;;;;;;:::o;862:37::-;;;;:::o;6446:198::-;6493:7;6502;6534:50;6570:13;;6534:31;6557:7;6534:18;;:22;;:31;;;;:::i;:50::-;6586;6622:13;;6586:31;6609:7;6586:18;;:22;;:31;;;;:::i;:50::-;6526:111;;;;6446:198;;:::o;1605:92:0:-;1196:12;:10;:12::i;:::-;-1:-1:-1;;;;;1185:23:0;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1185:23:0;;1177:68;;;;-1:-1:-1;;;1177:68:0;;;;;;;:::i;:::-;1669:21:::1;1687:1;1669:9;:21::i;:::-;1605:92::o:0;986:33:3:-;;;;:::o;973:85:0:-;1019:7;1045:6;-1:-1:-1;;;;;1045:6:0;973:85;:::o;924:37:3:-;;;;:::o;1049:32::-;;;;:::o;1202:810::-;1196:12:0;:10;:12::i;:::-;-1:-1:-1;;;;;1185:23:0;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1185:23:0;;1177:68;;;;-1:-1:-1;;;1177:68:0;;;;;;;:::i;:::-;1316:15:3::1;::::0;::::1;;1315:16;1307:59;;;;-1:-1:-1::0;;;1307:59:3::1;;;;;;;:::i;:::-;1376:15;:22:::0;;-1:-1:-1;;1376:22:3::1;1394:4;1376:22:::0;;::::1;::::0;;;1429:11;1472::::1;::::0;1503:64:::1;::::0;-1:-1:-1;;;1503:64:3;;-1:-1:-1;;;;;1429:11:3;;::::1;::::0;1472;;;::::1;::::0;1429;;1503:17:::1;::::0;:64:::1;::::0;1521:10:::1;::::0;1541:4:::1;::::0;1548:18;;1503:64:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1495:101;;;;-1:-1:-1::0;;;1495:101:3::1;;;;;;;:::i;:::-;1614:64;::::0;-1:-1:-1;;;1614:64:3;;-1:-1:-1;;;;;1614:17:3;::::1;::::0;::::1;::::0;:64:::1;::::0;1632:10:::1;::::0;1652:4:::1;::::0;1659:18;;1614:64:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1606:101;;;;-1:-1:-1::0;;;1606:101:3::1;;;;;;;:::i;:::-;1739:18;::::0;:42:::1;::::0;1762:18;1739:22:::1;:42::i;:::-;1718:18;:63:::0;1812:18:::1;::::0;:42:::1;::::0;1835:18;1812:22:::1;:42::i;:::-;1791:18;:63:::0;1865:13:::1;:34:::0;;;1966:10:::1;-1:-1:-1::0;1945:32:3;;;:20:::1;:32;::::0;;;;;:51:::1;::::0;1881:18;1945:36:::1;:51::i;:::-;1931:10;1910:32;::::0;;;:20:::1;:32;::::0;;;;:86;-1:-1:-1;;;;1202:810:3:o;1846:189:0:-;1196:12;:10;:12::i;:::-;-1:-1:-1;;;;;1185:23:0;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1185:23:0;;1177:68;;;;-1:-1:-1;;;1177:68:0;;;;;;;:::i;:::-;-1:-1:-1;;;;;1934:22:0;::::1;1926:73;;;;-1:-1:-1::0;;;1926:73:0::1;;;;;;;:::i;:::-;2009:19;2019:8;2009:9;:19::i;:::-;1846:189:::0;:::o;3382:96:2:-;3440:7;3466:5;3470:1;3466;:5;:::i;:::-;3459:12;3382:96;-1:-1:-1;;;3382:96:2:o;3767:::-;3825:7;3851:5;3855:1;3851;:5;:::i;3039:96::-;3097:7;3123:5;3127:1;3123;:5;:::i;2672:96::-;2730:7;2756:5;2760:1;2756;:5;:::i;5902:536:3:-;5994:7;;;6030:12;:27;;;;;;-1:-1:-1;;;6030:27:3;;;;;;;;;;6029:71;;6082:18;;6029:71;;;6061:18;;6029:71;6017:83;-1:-1:-1;6110:9:3;;6123:12;:27;;;;;;-1:-1:-1;;;6123:27:3;;;;;;;;;;6122:71;;6175:18;;6122:71;;;6154:18;;6122:71;6110:83;;6204:9;6237:18;;6216;;:39;;;;:::i;:::-;6204:51;-1:-1:-1;6288:29:3;6320:24;6326:17;6332:10;6336:6;6332:1;:10;:::i;:::-;6326:1;;:5;:17::i;:::-;6320:1;;:5;:24::i;:::-;6288:56;;6424:7;6417:3;;6407:7;:13;;;;:::i;:::-;6382:39;;:21;:39;:::i;:::-;:49;;;;:::i;:::-;6375:56;5902:536;-1:-1:-1;;;;;;;5902:536:3:o;586:96:1:-;665:10;586:96;:::o;2041:169:0:-;2096:16;2115:6;;-1:-1:-1;;;;;2131:17:0;;;-1:-1:-1;;;;;;2131:17:0;;;;;;2163:40;;2115:6;;;;;;;2163:40;;2096:16;2163:40;2041:169;;:::o;14:306:4:-;;126:2;114:9;105:7;101:23;97:32;94:2;;;147:6;139;132:22;94:2;178:23;;-1:-1:-1;;;;;230:31:4;;220:42;;210:2;;281:6;273;266:22;325:297;;445:2;433:9;424:7;420:23;416:32;413:2;;;466:6;458;451:22;413:2;503:9;497:16;556:5;549:13;542:21;535:5;532:32;522:2;;583:6;575;568:22;627:190;;739:2;727:9;718:7;714:23;710:32;707:2;;;760:6;752;745:22;707:2;-1:-1:-1;788:23:4;;697:120;-1:-1:-1;697:120:4:o;822:258::-;;;951:2;939:9;930:7;926:23;922:32;919:2;;;972:6;964;957:22;919:2;-1:-1:-1;;1000:23:4;;;1070:2;1055:18;;;1042:32;;-1:-1:-1;909:171:4:o;1085:421::-;;;;1240:2;1228:9;1219:7;1215:23;1211:32;1208:2;;;1261:6;1253;1246:22;1208:2;1302:9;1289:23;1279:33;;1359:2;1348:9;1344:18;1331:32;1321:42;;1413:2;1402:9;1398:18;1385:32;1446:1;1439:5;1436:12;1426:2;;1467:6;1459;1452:22;1426:2;1495:5;1485:15;;;1198:308;;;;;:::o;1511:203::-;-1:-1:-1;;;;;1675:32:4;;;;1657:51;;1645:2;1630:18;;1612:102::o;1719:375::-;-1:-1:-1;;;;;1977:15:4;;;1959:34;;2029:15;;;;2024:2;2009:18;;2002:43;2076:2;2061:18;;2054:34;;;;1909:2;1894:18;;1876:218::o;2099:274::-;-1:-1:-1;;;;;2291:32:4;;;;2273:51;;2355:2;2340:18;;2333:34;2261:2;2246:18;;2228:145::o;2378:402::-;2580:2;2562:21;;;2619:2;2599:18;;;2592:30;2658:34;2653:2;2638:18;;2631:62;-1:-1:-1;;;2724:2:4;2709:18;;2702:36;2770:3;2755:19;;2552:228::o;2785:354::-;2987:2;2969:21;;;3026:2;3006:18;;;2999:30;3065:32;3060:2;3045:18;;3038:60;3130:2;3115:18;;2959:180::o;3144:411::-;3346:2;3328:21;;;3385:2;3365:18;;;3358:30;3424:34;3419:2;3404:18;;3397:62;-1:-1:-1;;;3490:2:4;3475:18;;3468:45;3545:3;3530:19;;3318:237::o;3560:348::-;3762:2;3744:21;;;3801:2;3781:18;;;3774:30;3840:26;3835:2;3820:18;;3813:54;3899:2;3884:18;;3734:174::o;3913:348::-;4115:2;4097:21;;;4154:2;4134:18;;;4127:30;4193:26;4188:2;4173:18;;4166:54;4252:2;4237:18;;4087:174::o;4266:356::-;4468:2;4450:21;;;4487:18;;;4480:30;4546:34;4541:2;4526:18;;4519:62;4613:2;4598:18;;4440:182::o;4627:399::-;4829:2;4811:21;;;4868:2;4848:18;;;4841:30;4907:34;4902:2;4887:18;;4880:62;-1:-1:-1;;;4973:2:4;4958:18;;4951:33;5016:3;5001:19;;4801:225::o;5031:412::-;5233:2;5215:21;;;5272:2;5252:18;;;5245:30;5311:34;5306:2;5291:18;;5284:62;-1:-1:-1;;;5377:2:4;5362:18;;5355:46;5433:3;5418:19;;5205:238::o;5448:356::-;5650:2;5632:21;;;5669:18;;;5662:30;5728:34;5723:2;5708:18;;5701:62;5795:2;5780:18;;5622:182::o;5809:349::-;6011:2;5993:21;;;6050:2;6030:18;;;6023:30;6089:27;6084:2;6069:18;;6062:55;6149:2;6134:18;;5983:175::o;6163:417::-;6365:2;6347:21;;;6404:2;6384:18;;;6377:30;6443:34;6438:2;6423:18;;6416:62;-1:-1:-1;;;6509:2:4;6494:18;;6487:51;6570:3;6555:19;;6337:243::o;6585:177::-;6731:25;;;6719:2;6704:18;;6686:76::o;6767:248::-;6941:25;;;6997:2;6982:18;;6975:34;6929:2;6914:18;;6896:119::o;7020:128::-;;7091:1;7087:6;7084:1;7081:13;7078:2;;;7097:18;;:::i;:::-;-1:-1:-1;7133:9:4;;7068:80::o;7153:217::-;;7219:1;7209:2;;-1:-1:-1;;;7244:31:4;;7298:4;7295:1;7288:15;7326:4;7251:1;7316:15;7209:2;-1:-1:-1;7355:9:4;;7199:171::o;7375:168::-;;7481:1;7477;7473:6;7469:14;7466:1;7463:21;7458:1;7451:9;7444:17;7440:45;7437:2;;;7488:18;;:::i;:::-;-1:-1:-1;7528:9:4;;7427:116::o;7548:125::-;;7616:1;7613;7610:8;7607:2;;;7621:18;;:::i;:::-;-1:-1:-1;7658:9:4;;7597:76::o;7678:127::-;7739:10;7734:3;7730:20;7727:1;7720:31;7770:4;7767:1;7760:15;7794:4;7791:1;7784:15", "language": "Solidity", "natspec": {"kind": "dev", "methods": {"owner()": {"details": "Returns the address of the current owner."}, "renounceOwnership()": {"details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."}, "transferOwnership(address)": {"details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."}}, "version": 1}, "offset": [462, 6648], "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xB4 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x868C844F GT PUSH2 0x71 JUMPI DUP1 PUSH4 0x868C844F EQ PUSH2 0x130 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x138 JUMPI DUP1 PUSH4 0xB2E411C2 EQ PUSH2 0x14D JUMPI DUP1 PUSH4 0xC57981B5 EQ PUSH2 0x155 JUMPI DUP1 PUSH4 0xCE49EA9A EQ PUSH2 0x15D JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x170 JUMPI PUSH2 0xB4 JUMP JUMPDEST DUP1 PUSH4 0x2E1A7D4D EQ PUSH2 0xB9 JUMPI DUP1 PUSH4 0x35403023 EQ PUSH2 0xCE JUMPI DUP1 PUSH4 0x5C36D25E EQ PUSH2 0xE1 JUMPI DUP1 PUSH4 0x618E552C EQ PUSH2 0xF4 JUMPI DUP1 PUSH4 0x6F5CDB6C EQ PUSH2 0x112 JUMPI DUP1 PUSH4 0x715018A6 EQ PUSH2 0x128 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xCC PUSH2 0xC7 CALLDATASIZE PUSH1 0x4 PUSH2 0xCB2 JUMP JUMPDEST PUSH2 0x183 JUMP JUMPDEST STOP JUMPDEST PUSH2 0xCC PUSH2 0xDC CALLDATASIZE PUSH1 0x4 PUSH2 0xCB2 JUMP JUMPDEST PUSH2 0x3E8 JUMP JUMPDEST PUSH2 0xCC PUSH2 0xEF CALLDATASIZE PUSH1 0x4 PUSH2 0xCEB JUMP JUMPDEST PUSH2 0x5A4 JUMP JUMPDEST PUSH2 0xFC PUSH2 0x7D0 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x109 SWAP2 SWAP1 PUSH2 0x103A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x11A PUSH2 0x7D6 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x109 SWAP3 SWAP2 SWAP1 PUSH2 0x1043 JUMP JUMPDEST PUSH2 0xCC PUSH2 0x81D JUMP JUMPDEST PUSH2 0xFC PUSH2 0x868 JUMP JUMPDEST PUSH2 0x140 PUSH2 0x86E JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x109 SWAP2 SWAP1 PUSH2 0xD26 JUMP JUMPDEST PUSH2 0xFC PUSH2 0x87D JUMP JUMPDEST PUSH2 0xFC PUSH2 0x883 JUMP JUMPDEST PUSH2 0xCC PUSH2 0x16B CALLDATASIZE PUSH1 0x4 PUSH2 0xCCA JUMP JUMPDEST PUSH2 0x889 JUMP JUMPDEST PUSH2 0xCC PUSH2 0x17E CALLDATASIZE PUSH1 0x4 PUSH2 0xC6B JUMP JUMPDEST PUSH2 0xA98 JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0xFF AND PUSH2 0x1AE JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xEE6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP2 GT PUSH2 0x1CE JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xF29 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 GT ISZERO PUSH2 0x1FD JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xEB1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x208 PUSH2 0x7D6 JUMP JUMPDEST SWAP1 SWAP3 POP SWAP1 POP PUSH1 0x0 PUSH2 0x226 PUSH3 0xF4240 PUSH2 0x220 DUP6 DUP8 PUSH2 0xB09 JUMP JUMPDEST SWAP1 PUSH2 0xB1C JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0x23B PUSH3 0xF4240 PUSH2 0x220 DUP6 DUP9 PUSH2 0xB09 JUMP JUMPDEST PUSH1 0x3 SLOAD SWAP1 SWAP2 POP PUSH2 0x24B SWAP1 DUP4 PUSH2 0xB28 JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x25B SWAP1 DUP3 PUSH2 0xB28 JUMP JUMPDEST PUSH1 0x4 SSTORE PUSH1 0x5 SLOAD PUSH2 0x26B SWAP1 DUP7 PUSH2 0xB28 JUMP JUMPDEST PUSH1 0x5 SSTORE CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0x288 SWAP1 DUP7 PUSH2 0xB28 JUMP JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 DUP2 SWAP1 KECCAK256 SWAP3 SWAP1 SWAP3 SSTORE PUSH1 0x1 SLOAD PUSH1 0x2 SLOAD SWAP3 MLOAD PUSH4 0xA9059CBB PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 DUP3 AND SWAP4 SWAP1 SWAP2 AND SWAP2 DUP4 SWAP2 PUSH4 0xA9059CBB SWAP2 PUSH2 0x2D5 SWAP2 DUP9 SWAP1 PUSH1 0x4 ADD PUSH2 0xD5E JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x2EF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x303 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x327 SWAP2 SWAP1 PUSH2 0xC92 JUMP JUMPDEST PUSH2 0x343 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xE7A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0xA9059CBB PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND SWAP1 PUSH4 0xA9059CBB SWAP1 PUSH2 0x371 SWAP1 CALLER SWAP1 DUP8 SWAP1 PUSH1 0x4 ADD PUSH2 0xD5E JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x38B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x39F JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x3C3 SWAP2 SWAP1 PUSH2 0xC92 JUMP JUMPDEST PUSH2 0x3DF JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xE43 JUMP JUMPDEST POP POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0xFF AND PUSH2 0x40A JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xEE6 JUMP JUMPDEST PUSH1 0x0 DUP2 GT PUSH2 0x42A JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xDF4 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x435 PUSH2 0x7D6 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x2 SLOAD SWAP3 SWAP5 POP SWAP1 SWAP3 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 DUP2 AND SWAP2 AND PUSH1 0x0 PUSH2 0x461 PUSH3 0xF4240 PUSH2 0x220 DUP8 DUP10 PUSH2 0xB09 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0x476 PUSH3 0xF4240 PUSH2 0x220 DUP8 DUP11 PUSH2 0xB09 JUMP JUMPDEST PUSH1 0x3 SLOAD SWAP1 SWAP2 POP PUSH2 0x486 SWAP1 DUP4 PUSH2 0xB34 JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x496 SWAP1 DUP3 PUSH2 0xB34 JUMP JUMPDEST PUSH1 0x4 SSTORE PUSH1 0x5 SLOAD PUSH2 0x4A6 SWAP1 DUP9 PUSH2 0xB34 JUMP JUMPDEST PUSH1 0x5 SSTORE CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0x4C3 SWAP1 DUP9 PUSH2 0xB34 JUMP JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 DUP2 SWAP1 KECCAK256 SWAP3 SWAP1 SWAP3 SSTORE SWAP1 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP7 AND SWAP2 PUSH4 0x23B872DD SWAP2 PUSH2 0x506 SWAP2 SWAP1 ADDRESS SWAP1 DUP8 SWAP1 PUSH1 0x4 ADD PUSH2 0xD3A JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x520 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x534 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x558 SWAP2 SWAP1 PUSH2 0xC92 JUMP JUMPDEST PUSH2 0x574 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xE7A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0x371 SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP7 SWAP1 PUSH1 0x4 ADD PUSH2 0xD3A JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0xFF AND PUSH2 0x5C6 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xEE6 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x5D2 DUP5 DUP4 PUSH2 0xB40 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 LT ISZERO PUSH2 0x5F4 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xFE5 JUMP JUMPDEST PUSH1 0x0 DUP1 DUP1 DUP5 PUSH1 0x1 DUP2 GT ISZERO PUSH2 0x618 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x21 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST EQ ISZERO PUSH2 0x658 JUMPI PUSH1 0x3 SLOAD PUSH2 0x62B SWAP1 DUP8 PUSH2 0xB34 JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x63B SWAP1 DUP5 PUSH2 0xB28 JUMP JUMPDEST PUSH1 0x4 SSTORE POP POP PUSH1 0x1 SLOAD PUSH1 0x2 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 DUP3 AND SWAP2 AND PUSH2 0x68E JUMP JUMPDEST PUSH1 0x3 SLOAD PUSH2 0x665 SWAP1 DUP5 PUSH2 0xB28 JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x675 SWAP1 DUP8 PUSH2 0xB34 JUMP JUMPDEST PUSH1 0x4 SSTORE POP POP PUSH1 0x2 SLOAD PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 DUP3 AND SWAP2 AND JUMPDEST PUSH1 0x40 MLOAD PUSH4 0xA9059CBB PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND SWAP1 PUSH4 0xA9059CBB SWAP1 PUSH2 0x6BC SWAP1 CALLER SWAP1 DUP8 SWAP1 PUSH1 0x4 ADD PUSH2 0xD5E JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x6D6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x6EA JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x70E SWAP2 SWAP1 PUSH2 0xC92 JUMP JUMPDEST PUSH2 0x72A JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xFAE JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0x75A SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP12 SWAP1 PUSH1 0x4 ADD PUSH2 0xD3A JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x774 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x788 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x7AC SWAP2 SWAP1 PUSH2 0xC92 JUMP JUMPDEST PUSH2 0x7C8 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xFAE JUMP JUMPDEST POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x7F7 PUSH1 0x5 SLOAD PUSH2 0x220 PUSH3 0xF4240 PUSH1 0x3 SLOAD PUSH2 0xB09 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH2 0x815 PUSH1 0x5 SLOAD PUSH2 0x220 PUSH3 0xF4240 PUSH1 0x4 SLOAD PUSH2 0xB09 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP2 POP SWAP2 POP SWAP1 SWAP2 JUMP JUMPDEST PUSH2 0x825 PUSH2 0xC17 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x836 PUSH2 0x86E JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ PUSH2 0x85C JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xF79 JUMP JUMPDEST PUSH2 0x866 PUSH1 0x0 PUSH2 0xC1B JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x5 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 JUMP JUMPDEST PUSH1 0x4 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x6 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x891 PUSH2 0xC17 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x8A2 PUSH2 0x86E JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ PUSH2 0x8C8 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xF79 JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0xFF AND ISZERO PUSH2 0x8EB JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xDBD JUMP JUMPDEST PUSH1 0x7 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE SLOAD PUSH1 0x2 SLOAD PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 DUP4 AND SWAP3 SWAP2 SWAP1 SWAP2 AND SWAP1 DUP3 SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0x937 SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP10 SWAP1 PUSH1 0x4 ADD PUSH2 0xD3A JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x951 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x965 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x989 SWAP2 SWAP1 PUSH2 0xC92 JUMP JUMPDEST PUSH2 0x9A5 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xE7A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0x9D5 SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP9 SWAP1 PUSH1 0x4 ADD PUSH2 0xD3A JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x9EF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0xA03 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0xA27 SWAP2 SWAP1 PUSH2 0xC92 JUMP JUMPDEST PUSH2 0xA43 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xE43 JUMP JUMPDEST PUSH1 0x3 SLOAD PUSH2 0xA50 SWAP1 DUP6 PUSH2 0xB34 JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0xA60 SWAP1 DUP5 PUSH2 0xB34 JUMP JUMPDEST PUSH1 0x4 SSTORE PUSH1 0x5 DUP4 SWAP1 SSTORE CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0xA82 SWAP1 DUP5 PUSH2 0xB34 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SSTORE POP POP POP POP JUMP JUMPDEST PUSH2 0xAA0 PUSH2 0xC17 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0xAB1 PUSH2 0x86E JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ PUSH2 0xAD7 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xF79 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0xAFD JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xD77 JUMP JUMPDEST PUSH2 0xB06 DUP2 PUSH2 0xC1B JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB15 DUP3 DUP5 PUSH2 0x1089 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB15 DUP3 DUP5 PUSH2 0x1069 JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB15 DUP3 DUP5 PUSH2 0x10A8 JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB15 DUP3 DUP5 PUSH2 0x1051 JUMP JUMPDEST PUSH1 0x0 DUP1 DUP1 DUP4 PUSH1 0x1 DUP2 GT ISZERO PUSH2 0xB64 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x21 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST EQ PUSH2 0xB71 JUMPI PUSH1 0x3 SLOAD PUSH2 0xB75 JUMP JUMPDEST PUSH1 0x4 SLOAD JUMPDEST SWAP1 POP PUSH1 0x0 DUP1 DUP5 PUSH1 0x1 DUP2 GT ISZERO PUSH2 0xB9A JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x21 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST EQ PUSH2 0xBA7 JUMPI PUSH1 0x4 SLOAD PUSH2 0xBAB JUMP JUMPDEST PUSH1 0x3 SLOAD JUMPDEST SWAP1 POP PUSH1 0x0 PUSH1 0x3 SLOAD PUSH1 0x4 SLOAD PUSH2 0xBBF SWAP2 SWAP1 PUSH2 0x1089 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0xBE1 PUSH2 0xBDA PUSH2 0xBD3 DUP10 DUP7 PUSH2 0x1051 JUMP JUMPDEST DUP5 SWAP1 PUSH2 0xB1C JUMP JUMPDEST DUP6 SWAP1 PUSH2 0xB28 JUMP JUMPDEST SWAP1 POP PUSH3 0xF4240 PUSH1 0x6 SLOAD PUSH3 0xF4240 PUSH2 0xBF8 SWAP2 SWAP1 PUSH2 0x10A8 JUMP JUMPDEST PUSH2 0xC02 SWAP1 DUP4 PUSH2 0x1089 JUMP JUMPDEST PUSH2 0xC0C SWAP2 SWAP1 PUSH2 0x1069 JUMP JUMPDEST SWAP8 SWAP7 POP POP POP POP POP POP POP JUMP JUMPDEST CALLER SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR DUP5 SSTORE PUSH1 0x40 MLOAD SWAP2 SWAP1 SWAP3 AND SWAP3 DUP4 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xC7C JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0xB15 JUMPI DUP2 DUP3 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xCA3 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0xB15 JUMPI DUP2 DUP3 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xCC3 JUMPI DUP1 DUP2 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xCDC JUMPI DUP1 DUP2 REVERT JUMPDEST POP POP DUP1 CALLDATALOAD SWAP3 PUSH1 0x20 SWAP1 SWAP2 ADD CALLDATALOAD SWAP2 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0xCFF JUMPI DUP1 DUP2 REVERT JUMPDEST DUP4 CALLDATALOAD SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD SWAP2 POP PUSH1 0x40 DUP5 ADD CALLDATALOAD PUSH1 0x2 DUP2 LT PUSH2 0xD1B JUMPI DUP2 DUP3 REVERT JUMPDEST DUP1 SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP4 DUP5 AND DUP2 MSTORE SWAP2 SWAP1 SWAP3 AND PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND DUP3 MSTORE PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x26 SWAP1 DUP3 ADD MSTORE PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x40 DUP3 ADD MSTORE PUSH6 0x646472657373 PUSH1 0xD0 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x1E SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520706F6F6C2077617320616C726561647920696E697469617465640000 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x2F SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520616D6F756E74206F6620737570706C696564206C7020746F6B656E73 PUSH1 0x40 DUP3 ADD MSTORE PUSH15 0x1039B437BAB632103132901F101817 PUSH1 0x89 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x18 SWAP1 DUP3 ADD MSTORE PUSH32 0x5553444320616D6F756E7420756E617661696C61626C652E0000000000000000 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x18 SWAP1 DUP3 ADD MSTORE PUSH32 0x4C696E6B20616D6F756E7420756E617661696C61626C652E0000000000000000 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 DUP2 ADD MSTORE PUSH32 0x596F7520646F6E2774206861766520656E6F756768204C5020746F6B656E732E PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x23 SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520706F6F6C2073686F756C6420626520696E6974696174656420666972 PUSH1 0x40 DUP3 ADD MSTORE PUSH3 0x39BA17 PUSH1 0xE9 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x30 SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520616D6F756E74206F6620726571756573746564206C7020746F6B656E PUSH1 0x40 DUP3 ADD MSTORE PUSH16 0x399039B437BAB632103132901F101817 PUSH1 0x81 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 DUP2 ADD MSTORE PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x19 SWAP1 DUP3 ADD MSTORE PUSH32 0x546F6B656E20616D6F756E7420756E617661696C61626C652E00000000000000 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x35 SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520616D6F756E74206F662070757263686173656420746F6B656E206973 PUSH1 0x40 DUP3 ADD MSTORE PUSH21 0x103637BBB2B9103A3430B7103932B8BAB4B932B217 PUSH1 0x59 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST SWAP2 DUP3 MSTORE PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0x1064 JUMPI PUSH2 0x1064 PUSH2 0x10BF JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH2 0x1084 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 DUP2 REVERT JUMPDEST POP DIV SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 NOT DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH2 0x10A3 JUMPI PUSH2 0x10A3 PUSH2 0x10BF JUMP JUMPDEST POP MUL SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 LT ISZERO PUSH2 0x10BA JUMPI PUSH2 0x10BA PUSH2 0x10BF JUMP JUMPDEST POP SUB SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 DUP9 0xB8 PUSH19 0xD8E93F33C9297200B03D7FC1F4360D076753BB LOG0 SDIV LOG2 PUSH27 0x9BFF8C23F92B64736F6C6343000800003300000000000000000000 ", "pcMap": {"0": {"offset": [462, 6648], "op": "PUSH1", "path": "3", "value": "0x80"}, "2": {"fn": null, "offset": [462, 6648], "op": "PUSH1", "path": "3", "value": "0x40"}, "4": {"fn": null, "offset": [462, 6648], "op": "MSTORE", "path": "3"}, "5": {"fn": null, "offset": [462, 6648], "op": "CALLVALUE", "path": "3"}, "6": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "7": {"fn": null, "offset": [462, 6648], "op": "ISZERO", "path": "3"}, "8": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0x10"}, "11": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "12": {"fn": null, "offset": [462, 6648], "op": "PUSH1", "path": "3", "value": "0x0"}, "14": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "15": {"dev": "Cannot send ether to nonpayable function", "fn": null, "offset": [462, 6648], "op": "REVERT", "path": "3"}, "16": {"fn": null, "offset": [462, 6648], "op": "JUMPDEST", "path": "3"}, "17": {"fn": null, "offset": [462, 6648], "op": "POP", "path": "3"}, "18": {"fn": null, "offset": [462, 6648], "op": "PUSH1", "path": "3", "value": "0x4"}, "20": {"fn": null, "offset": [462, 6648], "op": "CALLDATASIZE", "path": "3"}, "21": {"fn": null, "offset": [462, 6648], "op": "LT", "path": "3"}, "22": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0xB4"}, "25": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "26": {"fn": null, "offset": [462, 6648], "op": "PUSH1", "path": "3", "value": "0x0"}, "28": {"fn": null, "offset": [462, 6648], "op": "CALLDATALOAD", "path": "3"}, "29": {"fn": null, "offset": [462, 6648], "op": "PUSH1", "path": "3", "value": "0xE0"}, "31": {"fn": null, "offset": [462, 6648], "op": "SHR", "path": "3"}, "32": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "33": {"fn": null, "offset": [462, 6648], "op": "PUSH4", "path": "3", "value": "0x868C844F"}, "38": {"fn": null, "offset": [462, 6648], "op": "GT", "path": "3"}, "39": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0x71"}, "42": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "43": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "44": {"fn": null, "offset": [462, 6648], "op": "PUSH4", "path": "3", "value": "0x868C844F"}, "49": {"fn": null, "offset": [462, 6648], "op": "EQ", "path": "3"}, "50": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0x130"}, "53": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "54": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "55": {"fn": null, "offset": [462, 6648], "op": "PUSH4", "path": "3", "value": "0x8DA5CB5B"}, "60": {"fn": null, "offset": [462, 6648], "op": "EQ", "path": "3"}, "61": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0x138"}, "64": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "65": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "66": {"fn": null, "offset": [462, 6648], "op": "PUSH4", "path": "3", "value": "0xB2E411C2"}, "71": {"fn": null, "offset": [462, 6648], "op": "EQ", "path": "3"}, "72": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0x14D"}, "75": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "76": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "77": {"fn": null, "offset": [462, 6648], "op": "PUSH4", "path": "3", "value": "0xC57981B5"}, "82": {"fn": null, "offset": [462, 6648], "op": "EQ", "path": "3"}, "83": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0x155"}, "86": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "87": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "88": {"fn": null, "offset": [462, 6648], "op": "PUSH4", "path": "3", "value": "0xCE49EA9A"}, "93": {"fn": null, "offset": [462, 6648], "op": "EQ", "path": "3"}, "94": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0x15D"}, "97": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "98": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "99": {"fn": null, "offset": [462, 6648], "op": "PUSH4", "path": "3", "value": "0xF2FDE38B"}, "104": {"fn": null, "offset": [462, 6648], "op": "EQ", "path": "3"}, "105": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0x170"}, "108": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "109": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0xB4"}, "112": {"fn": null, "offset": [462, 6648], "op": "JUMP", "path": "3"}, "113": {"fn": null, "offset": [462, 6648], "op": "JUMPDEST", "path": "3"}, "114": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "115": {"fn": null, "offset": [462, 6648], "op": "PUSH4", "path": "3", "value": "0x2E1A7D4D"}, "120": {"fn": null, "offset": [462, 6648], "op": "EQ", "path": "3"}, "121": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0xB9"}, "124": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "125": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "126": {"fn": null, "offset": [462, 6648], "op": "PUSH4", "path": "3", "value": "0x35403023"}, "131": {"fn": null, "offset": [462, 6648], "op": "EQ", "path": "3"}, "132": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0xCE"}, "135": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "136": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "137": {"fn": null, "offset": [462, 6648], "op": "PUSH4", "path": "3", "value": "0x5C36D25E"}, "142": {"fn": null, "offset": [462, 6648], "op": "EQ", "path": "3"}, "143": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0xE1"}, "146": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "147": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "148": {"fn": null, "offset": [462, 6648], "op": "PUSH4", "path": "3", "value": "0x618E552C"}, "153": {"fn": null, "offset": [462, 6648], "op": "EQ", "path": "3"}, "154": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0xF4"}, "157": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "158": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "159": {"fn": null, "offset": [462, 6648], "op": "PUSH4", "path": "3", "value": "0x6F5CDB6C"}, "164": {"fn": null, "offset": [462, 6648], "op": "EQ", "path": "3"}, "165": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0x112"}, "168": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "169": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "170": {"fn": null, "offset": [462, 6648], "op": "PUSH4", "path": "3", "value": "0x715018A6"}, "175": {"fn": null, "offset": [462, 6648], "op": "EQ", "path": "3"}, "176": {"fn": null, "offset": [462, 6648], "op": "PUSH2", "path": "3", "value": "0x128"}, "179": {"fn": null, "offset": [462, 6648], "op": "JUMPI", "path": "3"}, "180": {"fn": null, "offset": [462, 6648], "op": "JUMPDEST", "path": "3"}, "181": {"fn": null, "offset": [462, 6648], "op": "PUSH1", "path": "3", "value": "0x0"}, "183": {"fn": null, "offset": [462, 6648], "op": "DUP1", "path": "3"}, "184": {"first_revert": true, "fn": null, "offset": [462, 6648], "op": "REVERT", "path": "3"}, "185": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "JUMPDEST", "path": "3"}, "186": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "PUSH2", "path": "3", "value": "0xCC"}, "189": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "PUSH2", "path": "3", "value": "0xC7"}, "192": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "CALLDATASIZE", "path": "3"}, "193": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "PUSH1", "path": "3", "value": "0x4"}, "195": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "PUSH2", "path": "3", "value": "0xCB2"}, "198": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4504, 5693], "op": "JUMP", "path": "3"}, "199": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "JUMPDEST", "path": "3"}, "200": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "PUSH2", "path": "3", "value": "0x183"}, "203": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4504, 5693], "op": "JUMP", "path": "3"}, "204": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "JUMPDEST", "path": "3"}, "205": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "STOP", "path": "3"}, "206": {"fn": "SimpleSwap.supply", "offset": [3338, 4472], "op": "JUMPDEST", "path": "3"}, "207": {"fn": "SimpleSwap.supply", "offset": [3338, 4472], "op": "PUSH2", "path": "3", "value": "0xCC"}, "210": {"fn": "SimpleSwap.supply", "offset": [3338, 4472], "op": "PUSH2", "path": "3", "value": "0xDC"}, "213": {"fn": "SimpleSwap.supply", "offset": [3338, 4472], "op": "CALLDATASIZE", "path": "3"}, "214": {"fn": "SimpleSwap.supply", "offset": [3338, 4472], "op": "PUSH1", "path": "3", "value": "0x4"}, "216": {"fn": "SimpleSwap.supply", "offset": [3338, 4472], "op": "PUSH2", "path": "3", "value": "0xCB2"}, "219": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3338, 4472], "op": "JUMP", "path": "3"}, "220": {"fn": "SimpleSwap.supply", "offset": [3338, 4472], "op": "JUMPDEST", "path": "3"}, "221": {"fn": "SimpleSwap.supply", "offset": [3338, 4472], "op": "PUSH2", "path": "3", "value": "0x3E8"}, "224": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3338, 4472], "op": "JUMP", "path": "3"}, "225": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "JUMPDEST", "path": "3"}, "226": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "PUSH2", "path": "3", "value": "0xCC"}, "229": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "PUSH2", "path": "3", "value": "0xEF"}, "232": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "CALLDATASIZE", "path": "3"}, "233": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "PUSH1", "path": "3", "value": "0x4"}, "235": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "PUSH2", "path": "3", "value": "0xCEB"}, "238": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2044, 3307], "op": "JUMP", "path": "3"}, "239": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "JUMPDEST", "path": "3"}, "240": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "PUSH2", "path": "3", "value": "0x5A4"}, "243": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2044, 3307], "op": "JUMP", "path": "3"}, "244": {"offset": [862, 899], "op": "JUMPDEST", "path": "3"}, "245": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH2", "path": "3", "value": "0xFC"}, "248": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH2", "path": "3", "value": "0x7D0"}, "251": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [862, 899], "op": "JUMP", "path": "3"}, "252": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "JUMPDEST", "path": "3"}, "253": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH1", "path": "3", "value": "0x40"}, "255": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "MLOAD", "path": "3"}, "256": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH2", "path": "3", "value": "0x109"}, "259": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SWAP2", "path": "3"}, "260": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SWAP1", "path": "3"}, "261": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH2", "path": "3", "value": "0x103A"}, "264": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [862, 899], "op": "JUMP", "path": "3"}, "265": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "JUMPDEST", "path": "3"}, "266": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH1", "path": "3", "value": "0x40"}, "268": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "MLOAD", "path": "3"}, "269": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "DUP1", "path": "3"}, "270": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SWAP2", "path": "3"}, "271": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SUB", "path": "3"}, "272": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SWAP1", "path": "3"}, "273": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "RETURN", "path": "3"}, "274": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "JUMPDEST", "path": "3"}, "275": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "PUSH2", "path": "3", "value": "0x11A"}, "278": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "PUSH2", "path": "3", "value": "0x7D6"}, "281": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "i", "offset": [6446, 6644], "op": "JUMP", "path": "3"}, "282": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "JUMPDEST", "path": "3"}, "283": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "PUSH1", "path": "3", "value": "0x40"}, "285": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "MLOAD", "path": "3"}, "286": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "PUSH2", "path": "3", "value": "0x109"}, "289": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "SWAP3", "path": "3"}, "290": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "SWAP2", "path": "3"}, "291": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "SWAP1", "path": "3"}, "292": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "PUSH2", "path": "3", "value": "0x1043"}, "295": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "i", "offset": [6446, 6644], "op": "JUMP", "path": "3"}, "296": {"fn": "Ownable.renounceOwnership", "offset": [1605, 1697], "op": "JUMPDEST", "path": "0"}, "297": {"fn": "Ownable.renounceOwnership", "offset": [1605, 1697], "op": "PUSH2", "path": "0", "value": "0xCC"}, "300": {"fn": "Ownable.renounceOwnership", "offset": [1605, 1697], "op": "PUSH2", "path": "0", "value": "0x81D"}, "303": {"fn": "Ownable.renounceOwnership", "jump": "i", "offset": [1605, 1697], "op": "JUMP", "path": "0"}, "304": {"offset": [986, 1019], "op": "JUMPDEST", "path": "3"}, "305": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "PUSH2", "path": "3", "value": "0xFC"}, "308": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "PUSH2", "path": "3", "value": "0x868"}, "311": {"fn": "Ownable.renounceOwnership", "jump": "i", "offset": [986, 1019], "op": "JUMP", "path": "3"}, "312": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "JUMPDEST", "path": "0"}, "313": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH2", "path": "0", "value": "0x140"}, "316": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH2", "path": "0", "value": "0x86E"}, "319": {"fn": "Ownable.owner", "jump": "i", "offset": [973, 1058], "op": "JUMP", "path": "0"}, "320": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "JUMPDEST", "path": "0"}, "321": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH1", "path": "0", "value": "0x40"}, "323": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "MLOAD", "path": "0"}, "324": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH2", "path": "0", "value": "0x109"}, "327": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "SWAP2", "path": "0"}, "328": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "SWAP1", "path": "0"}, "329": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH2", "path": "0", "value": "0xD26"}, "332": {"fn": "Ownable.owner", "jump": "i", "offset": [973, 1058], "op": "JUMP", "path": "0"}, "333": {"offset": [924, 961], "op": "JUMPDEST", "path": "3"}, "334": {"fn": "Ownable.owner", "offset": [924, 961], "op": "PUSH2", "path": "3", "value": "0xFC"}, "337": {"fn": "Ownable.owner", "offset": [924, 961], "op": "PUSH2", "path": "3", "value": "0x87D"}, "340": {"fn": "Ownable.owner", "jump": "i", "offset": [924, 961], "op": "JUMP", "path": "3"}, "341": {"offset": [1049, 1081], "op": "JUMPDEST", "path": "3"}, "342": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "PUSH2", "path": "3", "value": "0xFC"}, "345": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "PUSH2", "path": "3", "value": "0x883"}, "348": {"fn": "Ownable.owner", "jump": "i", "offset": [1049, 1081], "op": "JUMP", "path": "3"}, "349": {"fn": "SimpleSwap.initiatePool", "offset": [1202, 2012], "op": "JUMPDEST", "path": "3"}, "350": {"fn": "SimpleSwap.initiatePool", "offset": [1202, 2012], "op": "PUSH2", "path": "3", "value": "0xCC"}, "353": {"fn": "SimpleSwap.initiatePool", "offset": [1202, 2012], "op": "PUSH2", "path": "3", "value": "0x16B"}, "356": {"fn": "SimpleSwap.initiatePool", "offset": [1202, 2012], "op": "CALLDATASIZE", "path": "3"}, "357": {"fn": "SimpleSwap.initiatePool", "offset": [1202, 2012], "op": "PUSH1", "path": "3", "value": "0x4"}, "359": {"fn": "SimpleSwap.initiatePool", "offset": [1202, 2012], "op": "PUSH2", "path": "3", "value": "0xCCA"}, "362": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1202, 2012], "op": "JUMP", "path": "3"}, "363": {"fn": "SimpleSwap.initiatePool", "offset": [1202, 2012], "op": "JUMPDEST", "path": "3"}, "364": {"fn": "SimpleSwap.initiatePool", "offset": [1202, 2012], "op": "PUSH2", "path": "3", "value": "0x889"}, "367": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1202, 2012], "op": "JUMP", "path": "3"}, "368": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "JUMPDEST", "path": "0"}, "369": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH2", "path": "0", "value": "0xCC"}, "372": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH2", "path": "0", "value": "0x17E"}, "375": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "CALLDATASIZE", "path": "0"}, "376": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH1", "path": "0", "value": "0x4"}, "378": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH2", "path": "0", "value": "0xC6B"}, "381": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [1846, 2035], "op": "JUMP", "path": "0"}, "382": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "JUMPDEST", "path": "0"}, "383": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH2", "path": "0", "value": "0xA98"}, "386": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [1846, 2035], "op": "JUMP", "path": "0"}, "387": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "JUMPDEST", "path": "3"}, "388": {"fn": "SimpleSwap.withdraw", "offset": [4571, 4586], "op": "PUSH1", "path": "3", "statement": 0, "value": "0x7"}, "390": {"fn": "SimpleSwap.withdraw", "offset": [4571, 4586], "op": "SLOAD", "path": "3"}, "391": {"fn": "SimpleSwap.withdraw", "offset": [4571, 4586], "op": "PUSH1", "path": "3", "value": "0xFF"}, "393": {"branch": 50, "fn": "SimpleSwap.withdraw", "offset": [4571, 4586], "op": "AND", "path": "3"}, "394": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "PUSH2", "path": "3", "value": "0x1AE"}, "397": {"branch": 50, "fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "JUMPI", "path": "3"}, "398": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "PUSH1", "path": "3", "value": "0x40"}, "400": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "MLOAD", "path": "3"}, "401": {"op": "PUSH3", "value": "0x461BCD"}, "405": {"op": "PUSH1", "value": "0xE5"}, "407": {"op": "SHL"}, "408": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "DUP2", "path": "3"}, "409": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "MSTORE", "path": "3"}, "410": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "PUSH1", "path": "3", "value": "0x4"}, "412": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "ADD", "path": "3"}, "413": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "416": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "SWAP1", "path": "3"}, "417": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "PUSH2", "path": "3", "value": "0xEE6"}, "420": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4563, 4626], "op": "JUMP", "path": "3"}, "421": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "JUMPDEST", "path": "3"}, "422": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "PUSH1", "path": "3", "value": "0x40"}, "424": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "MLOAD", "path": "3"}, "425": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "DUP1", "path": "3"}, "426": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "SWAP2", "path": "3"}, "427": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "SUB", "path": "3"}, "428": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "SWAP1", "path": "3"}, "429": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "REVERT", "optimizer_revert": true, "path": "3"}, "430": {"fn": "SimpleSwap.withdraw", "offset": [4563, 4626], "op": "JUMPDEST", "path": "3"}, "431": {"fn": "SimpleSwap.withdraw", "offset": [4661, 4662], "op": "PUSH1", "path": "3", "statement": 1, "value": "0x0"}, "433": {"fn": "SimpleSwap.withdraw", "offset": [4644, 4658], "op": "DUP2", "path": "3"}, "434": {"branch": 51, "fn": "SimpleSwap.withdraw", "offset": [4644, 4662], "op": "GT", "path": "3"}, "435": {"fn": "SimpleSwap.withdraw", "offset": [4636, 4715], "op": "PUSH2", "path": "3", "value": "0x1CE"}, "438": {"branch": 51, "fn": "SimpleSwap.withdraw", "offset": [4636, 4715], "op": "JUMPI", "path": "3"}, "439": {"fn": "SimpleSwap.withdraw", "offset": [4636, 4715], "op": "PUSH1", "path": "3", "value": "0x40"}, "441": {"fn": "SimpleSwap.withdraw", "offset": [4636, 4715], "op": "MLOAD", "path": "3"}, "442": {"op": "PUSH3", "value": "0x461BCD"}, "446": {"op": "PUSH1", "value": "0xE5"}, "448": {"op": "SHL"}, "449": {"fn": "SimpleSwap.withdraw", "offset": [4636, 4715], "op": "DUP2", "path": "3"}, "450": {"fn": "SimpleSwap.withdraw", "offset": [4636, 4715], "op": "MSTORE", "path": "3"}, "451": {"fn": "SimpleSwap.withdraw", "offset": [4636, 4715], "op": "PUSH1", "path": "3", "value": "0x4"}, "453": {"fn": "SimpleSwap.withdraw", "offset": [4636, 4715], "op": "ADD", "path": "3"}, "454": {"fn": "SimpleSwap.withdraw", "offset": [4636, 4715], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "457": {"fn": "SimpleSwap.withdraw", "offset": [4636, 4715], "op": "SWAP1", "path": "3"}, "458": {"fn": "SimpleSwap.withdraw", "offset": [4636, 4715], "op": "PUSH2", "path": "3", "value": "0xF29"}, "461": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4636, 4715], "op": "JUMP", "path": "3"}, "462": {"fn": "SimpleSwap.withdraw", "offset": [4636, 4715], "op": "JUMPDEST", "path": "3"}, "463": {"fn": "SimpleSwap.withdraw", "offset": [4754, 4764], "op": "CALLER", "path": "3", "statement": 2}, "464": {"fn": "SimpleSwap.withdraw", "offset": [4733, 4765], "op": "PUSH1", "path": "3", "value": "0x0"}, "466": {"fn": "SimpleSwap.withdraw", "offset": [4733, 4765], "op": "SWAP1", "path": "3"}, "467": {"fn": "SimpleSwap.withdraw", "offset": [4733, 4765], "op": "DUP2", "path": "3"}, "468": {"fn": "SimpleSwap.withdraw", "offset": [4733, 4765], "op": "MSTORE", "path": "3"}, "469": {"fn": "SimpleSwap.withdraw", "offset": [4733, 4753], "op": "PUSH1", "path": "3", "value": "0x8"}, "471": {"fn": "SimpleSwap.withdraw", "offset": [4733, 4765], "op": "PUSH1", "path": "3", "value": "0x20"}, "473": {"fn": "SimpleSwap.withdraw", "offset": [4733, 4765], "op": "MSTORE", "path": "3"}, "474": {"fn": "SimpleSwap.withdraw", "offset": [4733, 4765], "op": "PUSH1", "path": "3", "value": "0x40"}, "476": {"fn": "SimpleSwap.withdraw", "offset": [4733, 4765], "op": "SWAP1", "path": "3"}, "477": {"fn": "SimpleSwap.withdraw", "offset": [4733, 4765], "op": "KECCAK256", "path": "3"}, "478": {"fn": "SimpleSwap.withdraw", "offset": [4733, 4765], "op": "SLOAD", "path": "3"}, "479": {"fn": "SimpleSwap.withdraw", "offset": [4733, 4783], "op": "DUP2", "path": "3"}, "480": {"op": "GT"}, "481": {"branch": 52, "fn": "SimpleSwap.withdraw", "offset": [4733, 4783], "op": "ISZERO", "path": "3"}, "482": {"fn": "SimpleSwap.withdraw", "offset": [4725, 4820], "op": "PUSH2", "path": "3", "value": "0x1FD"}, "485": {"branch": 52, "fn": "SimpleSwap.withdraw", "offset": [4725, 4820], "op": "JUMPI", "path": "3"}, "486": {"fn": "SimpleSwap.withdraw", "offset": [4725, 4820], "op": "PUSH1", "path": "3", "value": "0x40"}, "488": {"fn": "SimpleSwap.withdraw", "offset": [4725, 4820], "op": "MLOAD", "path": "3"}, "489": {"op": "PUSH3", "value": "0x461BCD"}, "493": {"op": "PUSH1", "value": "0xE5"}, "495": {"op": "SHL"}, "496": {"fn": "SimpleSwap.withdraw", "offset": [4725, 4820], "op": "DUP2", "path": "3"}, "497": {"fn": "SimpleSwap.withdraw", "offset": [4725, 4820], "op": "MSTORE", "path": "3"}, "498": {"fn": "SimpleSwap.withdraw", "offset": [4725, 4820], "op": "PUSH1", "path": "3", "value": "0x4"}, "500": {"fn": "SimpleSwap.withdraw", "offset": [4725, 4820], "op": "ADD", "path": "3"}, "501": {"fn": "SimpleSwap.withdraw", "offset": [4725, 4820], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "504": {"fn": "SimpleSwap.withdraw", "offset": [4725, 4820], "op": "SWAP1", "path": "3"}, "505": {"fn": "SimpleSwap.withdraw", "offset": [4725, 4820], "op": "PUSH2", "path": "3", "value": "0xEB1"}, "508": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4725, 4820], "op": "JUMP", "path": "3"}, "509": {"fn": "SimpleSwap.withdraw", "offset": [4725, 4820], "op": "JUMPDEST", "path": "3"}, "510": {"fn": "SimpleSwap.withdraw", "offset": [4831, 4859], "op": "PUSH1", "path": "3", "value": "0x0"}, "512": {"fn": "SimpleSwap.withdraw", "offset": [4861, 4889], "op": "DUP1", "path": "3"}, "513": {"fn": "SimpleSwap.withdraw", "offset": [4894, 4911], "op": "PUSH2", "path": "3", "value": "0x208"}, "516": {"fn": "SimpleSwap.withdraw", "offset": [4894, 4909], "op": "PUSH2", "path": "3", "value": "0x7D6"}, "519": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4894, 4911], "op": "JUMP", "path": "3"}, "520": {"fn": "SimpleSwap.withdraw", "offset": [4894, 4911], "op": "JUMPDEST", "path": "3"}, "521": {"fn": "SimpleSwap.withdraw", "offset": [4830, 4911], "op": "SWAP1", "path": "3"}, "522": {"fn": "SimpleSwap.withdraw", "offset": [4830, 4911], "op": "SWAP3", "path": "3"}, "523": {"op": "POP"}, "524": {"fn": "SimpleSwap.withdraw", "offset": [4830, 4911], "op": "SWAP1", "path": "3"}, "525": {"op": "POP"}, "526": {"fn": "SimpleSwap.withdraw", "offset": [4922, 4950], "op": "PUSH1", "path": "3", "value": "0x0"}, "528": {"fn": "SimpleSwap.withdraw", "offset": [4953, 5006], "op": "PUSH2", "path": "3", "value": "0x226"}, "531": {"fn": "SimpleSwap.withdraw", "offset": [4998, 5005], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "535": {"fn": "SimpleSwap.withdraw", "offset": [4953, 4993], "op": "PUSH2", "path": "3", "value": "0x220"}, "538": {"fn": "SimpleSwap.withdraw", "offset": [4830, 4911], "op": "DUP6", "path": "3"}, "539": {"fn": "SimpleSwap.withdraw", "offset": [4978, 4992], "op": "DUP8", "path": "3"}, "540": {"fn": "SimpleSwap.withdraw", "offset": [4953, 4977], "op": "PUSH2", "path": "3", "value": "0xB09"}, "543": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4953, 4993], "op": "JUMP", "path": "3"}, "544": {"fn": "SimpleSwap.withdraw", "offset": [4953, 4993], "op": "JUMPDEST", "path": "3"}, "545": {"fn": "SimpleSwap.withdraw", "offset": [4953, 4997], "op": "SWAP1", "path": "3"}, "546": {"fn": "SimpleSwap.withdraw", "offset": [4953, 4997], "op": "PUSH2", "path": "3", "value": "0xB1C"}, "549": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4953, 5006], "op": "JUMP", "path": "3"}, "550": {"fn": "SimpleSwap.withdraw", "offset": [4953, 5006], "op": "JUMPDEST", "path": "3"}, "551": {"fn": "SimpleSwap.withdraw", "offset": [4922, 5006], "op": "SWAP1", "path": "3"}, "552": {"op": "POP"}, "553": {"fn": "SimpleSwap.withdraw", "offset": [5016, 5044], "op": "PUSH1", "path": "3", "value": "0x0"}, "555": {"fn": "SimpleSwap.withdraw", "offset": [5047, 5100], "op": "PUSH2", "path": "3", "value": "0x23B"}, "558": {"fn": "SimpleSwap.withdraw", "offset": [5092, 5099], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "562": {"fn": "SimpleSwap.withdraw", "offset": [5047, 5087], "op": "PUSH2", "path": "3", "value": "0x220"}, "565": {"fn": "SimpleSwap.withdraw", "offset": [5047, 5067], "op": "DUP6", "path": "3"}, "566": {"fn": "SimpleSwap.withdraw", "offset": [5072, 5086], "op": "DUP9", "path": "3"}, "567": {"fn": "SimpleSwap.withdraw", "offset": [5047, 5071], "op": "PUSH2", "path": "3", "value": "0xB09"}, "570": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5047, 5087], "op": "JUMP", "path": "3"}, "571": {"fn": "SimpleSwap.withdraw", "offset": [5047, 5100], "op": "JUMPDEST", "path": "3"}, "572": {"fn": "SimpleSwap.withdraw", "offset": [5132, 5150], "op": "PUSH1", "path": "3", "statement": 3, "value": "0x3"}, "574": {"fn": "SimpleSwap.withdraw", "offset": [5132, 5150], "op": "SLOAD", "path": "3"}, "575": {"fn": "SimpleSwap.withdraw", "offset": [5016, 5100], "op": "SWAP1", "path": "3"}, "576": {"fn": "SimpleSwap.withdraw", "offset": [5016, 5100], "op": "SWAP2", "path": "3"}, "577": {"op": "POP"}, "578": {"fn": "SimpleSwap.withdraw", "offset": [5132, 5176], "op": "PUSH2", "path": "3", "value": "0x24B"}, "581": {"fn": "SimpleSwap.withdraw", "offset": [5132, 5176], "op": "SWAP1", "path": "3"}, "582": {"fn": "SimpleSwap.withdraw", "offset": [5155, 5175], "op": "DUP4", "path": "3"}, "583": {"fn": "SimpleSwap.withdraw", "offset": [5132, 5154], "op": "PUSH2", "path": "3", "value": "0xB28"}, "586": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5132, 5176], "op": "JUMP", "path": "3"}, "587": {"fn": "SimpleSwap.withdraw", "offset": [5132, 5176], "op": "JUMPDEST", "path": "3"}, "588": {"fn": "SimpleSwap.withdraw", "offset": [5111, 5129], "op": "PUSH1", "path": "3", "value": "0x3"}, "590": {"fn": "SimpleSwap.withdraw", "offset": [5111, 5176], "op": "SSTORE", "path": "3"}, "591": {"fn": "SimpleSwap.withdraw", "offset": [5207, 5225], "op": "PUSH1", "path": "3", "statement": 4, "value": "0x4"}, "593": {"fn": "SimpleSwap.withdraw", "offset": [5207, 5225], "op": "SLOAD", "path": "3"}, "594": {"fn": "SimpleSwap.withdraw", "offset": [5207, 5251], "op": "PUSH2", "path": "3", "value": "0x25B"}, "597": {"fn": "SimpleSwap.withdraw", "offset": [5207, 5251], "op": "SWAP1", "path": "3"}, "598": {"fn": "SimpleSwap.withdraw", "offset": [5230, 5250], "op": "DUP3", "path": "3"}, "599": {"fn": "SimpleSwap.withdraw", "offset": [5207, 5229], "op": "PUSH2", "path": "3", "value": "0xB28"}, "602": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5207, 5251], "op": "JUMP", "path": "3"}, "603": {"fn": "SimpleSwap.withdraw", "offset": [5207, 5251], "op": "JUMPDEST", "path": "3"}, "604": {"fn": "SimpleSwap.withdraw", "offset": [5186, 5204], "op": "PUSH1", "path": "3", "value": "0x4"}, "606": {"fn": "SimpleSwap.withdraw", "offset": [5186, 5251], "op": "SSTORE", "path": "3"}, "607": {"fn": "SimpleSwap.withdraw", "offset": [5278, 5291], "op": "PUSH1", "path": "3", "statement": 5, "value": "0x5"}, "609": {"fn": "SimpleSwap.withdraw", "offset": [5278, 5291], "op": "SLOAD", "path": "3"}, "610": {"fn": "SimpleSwap.withdraw", "offset": [5278, 5311], "op": "PUSH2", "path": "3", "value": "0x26B"}, "613": {"fn": "SimpleSwap.withdraw", "offset": [5278, 5311], "op": "SWAP1", "path": "3"}, "614": {"fn": "SimpleSwap.withdraw", "offset": [5296, 5310], "op": "DUP7", "path": "3"}, "615": {"fn": "SimpleSwap.withdraw", "offset": [5278, 5295], "op": "PUSH2", "path": "3", "value": "0xB28"}, "618": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5278, 5311], "op": "JUMP", "path": "3"}, "619": {"fn": "SimpleSwap.withdraw", "offset": [5278, 5311], "op": "JUMPDEST", "path": "3"}, "620": {"fn": "SimpleSwap.withdraw", "offset": [5262, 5275], "op": "PUSH1", "path": "3", "value": "0x5"}, "622": {"fn": "SimpleSwap.withdraw", "offset": [5262, 5311], "op": "SSTORE", "path": "3"}, "623": {"fn": "SimpleSwap.withdraw", "offset": [5378, 5388], "op": "CALLER", "path": "3", "statement": 6}, "624": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5389], "op": "PUSH1", "path": "3", "value": "0x0"}, "626": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5389], "op": "SWAP1", "path": "3"}, "627": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5389], "op": "DUP2", "path": "3"}, "628": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5389], "op": "MSTORE", "path": "3"}, "629": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5377], "op": "PUSH1", "path": "3", "value": "0x8"}, "631": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5389], "op": "PUSH1", "path": "3", "value": "0x20"}, "633": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5389], "op": "MSTORE", "path": "3"}, "634": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5389], "op": "PUSH1", "path": "3", "value": "0x40"}, "636": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5389], "op": "SWAP1", "path": "3"}, "637": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5389], "op": "KECCAK256", "path": "3"}, "638": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5389], "op": "SLOAD", "path": "3"}, "639": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5409], "op": "PUSH2", "path": "3", "value": "0x288"}, "642": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5409], "op": "SWAP1", "path": "3"}, "643": {"fn": "SimpleSwap.withdraw", "offset": [5394, 5408], "op": "DUP7", "path": "3"}, "644": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5393], "op": "PUSH2", "path": "3", "value": "0xB28"}, "647": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5357, 5409], "op": "JUMP", "path": "3"}, "648": {"fn": "SimpleSwap.withdraw", "offset": [5357, 5409], "op": "JUMPDEST", "path": "3"}, "649": {"fn": "SimpleSwap.withdraw", "offset": [5343, 5353], "op": "CALLER", "path": "3"}, "650": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5354], "op": "PUSH1", "path": "3", "value": "0x0"}, "652": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5354], "op": "DUP2", "path": "3"}, "653": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5354], "op": "DUP2", "path": "3"}, "654": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5354], "op": "MSTORE", "path": "3"}, "655": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5342], "op": "PUSH1", "path": "3", "value": "0x8"}, "657": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5354], "op": "PUSH1", "path": "3", "value": "0x20"}, "659": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5354], "op": "MSTORE", "path": "3"}, "660": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5354], "op": "PUSH1", "path": "3", "value": "0x40"}, "662": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5354], "op": "SWAP1", "path": "3"}, "663": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5354], "op": "DUP2", "path": "3"}, "664": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5354], "op": "SWAP1", "path": "3"}, "665": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5354], "op": "KECCAK256", "path": "3"}, "666": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5409], "op": "SWAP3", "path": "3"}, "667": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5409], "op": "SWAP1", "path": "3"}, "668": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5409], "op": "SWAP3", "path": "3"}, "669": {"fn": "SimpleSwap.withdraw", "offset": [5322, 5409], "op": "SSTORE", "path": "3"}, "670": {"fn": "SimpleSwap.withdraw", "offset": [5441, 5452], "op": "PUSH1", "path": "3", "value": "0x1"}, "672": {"fn": "SimpleSwap.withdraw", "offset": [5441, 5452], "op": "SLOAD", "path": "3"}, "673": {"fn": "SimpleSwap.withdraw", "offset": [5484, 5495], "op": "PUSH1", "path": "3", "value": "0x2"}, "675": {"fn": "SimpleSwap.withdraw", "offset": [5484, 5495], "op": "SLOAD", "path": "3"}, "676": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "SWAP3", "path": "3", "statement": 7}, "677": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "MLOAD", "path": "3"}, "678": {"op": "PUSH4", "value": "0xA9059CBB"}, "683": {"op": "PUSH1", "value": "0xE0"}, "685": {"op": "SHL"}, "686": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP2", "path": "3"}, "687": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "MSTORE", "path": "3"}, "688": {"op": "PUSH1", "value": "0x1"}, "690": {"op": "PUSH1", "value": "0x1"}, "692": {"op": "PUSH1", "value": "0xA0"}, "694": {"op": "SHL"}, "695": {"op": "SUB"}, "696": {"fn": "SimpleSwap.withdraw", "offset": [5441, 5452], "op": "SWAP2", "path": "3"}, "697": {"fn": "SimpleSwap.withdraw", "offset": [5441, 5452], "op": "DUP3", "path": "3"}, "698": {"fn": "SimpleSwap.withdraw", "offset": [5441, 5452], "op": "AND", "path": "3"}, "699": {"fn": "SimpleSwap.withdraw", "offset": [5441, 5452], "op": "SWAP4", "path": "3"}, "700": {"fn": "SimpleSwap.withdraw", "offset": [5484, 5495], "op": "SWAP1", "path": "3"}, "701": {"fn": "SimpleSwap.withdraw", "offset": [5484, 5495], "op": "SWAP2", "path": "3"}, "702": {"fn": "SimpleSwap.withdraw", "offset": [5484, 5495], "op": "AND", "path": "3"}, "703": {"fn": "SimpleSwap.withdraw", "offset": [5484, 5495], "op": "SWAP2", "path": "3"}, "704": {"fn": "SimpleSwap.withdraw", "offset": [5441, 5452], "op": "DUP4", "path": "3"}, "705": {"fn": "SimpleSwap.withdraw", "offset": [5441, 5452], "op": "SWAP2", "path": "3"}, "706": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5528], "op": "PUSH4", "path": "3", "value": "0xA9059CBB"}, "711": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5528], "op": "SWAP2", "path": "3"}, "712": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH2", "path": "3", "value": "0x2D5"}, "715": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "SWAP2", "path": "3"}, "716": {"fn": "SimpleSwap.withdraw", "offset": [5541, 5561], "op": "DUP9", "path": "3"}, "717": {"fn": "SimpleSwap.withdraw", "offset": [5541, 5561], "op": "SWAP1", "path": "3"}, "718": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH1", "path": "3", "value": "0x4"}, "720": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "ADD", "path": "3"}, "721": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH2", "path": "3", "value": "0xD5E"}, "724": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5515, 5562], "op": "JUMP", "path": "3"}, "725": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "JUMPDEST", "path": "3"}, "726": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH1", "path": "3", "value": "0x20"}, "728": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH1", "path": "3", "value": "0x40"}, "730": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "MLOAD", "path": "3"}, "731": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP1", "path": "3"}, "732": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP4", "path": "3"}, "733": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "SUB", "path": "3"}, "734": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP2", "path": "3"}, "735": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH1", "path": "3", "value": "0x0"}, "737": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP8", "path": "3"}, "738": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP1", "path": "3"}, "739": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "EXTCODESIZE", "path": "3"}, "740": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "ISZERO", "path": "3"}, "741": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP1", "path": "3"}, "742": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "ISZERO", "path": "3"}, "743": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH2", "path": "3", "value": "0x2EF"}, "746": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "JUMPI", "path": "3"}, "747": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH1", "path": "3", "value": "0x0"}, "749": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP1", "path": "3"}, "750": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "REVERT", "path": "3"}, "751": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "JUMPDEST", "path": "3"}, "752": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "POP", "path": "3"}, "753": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "GAS", "path": "3"}, "754": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "CALL", "path": "3"}, "755": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "ISZERO", "path": "3"}, "756": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP1", "path": "3"}, "757": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "ISZERO", "path": "3"}, "758": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH2", "path": "3", "value": "0x303"}, "761": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "JUMPI", "path": "3"}, "762": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "RETURNDATASIZE", "path": "3"}, "763": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH1", "path": "3", "value": "0x0"}, "765": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP1", "path": "3"}, "766": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "RETURNDATACOPY", "path": "3"}, "767": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "RETURNDATASIZE", "path": "3"}, "768": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH1", "path": "3", "value": "0x0"}, "770": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "REVERT", "path": "3"}, "771": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "JUMPDEST", "path": "3"}, "772": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "POP", "path": "3"}, "773": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "POP", "path": "3"}, "774": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "POP", "path": "3"}, "775": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "POP", "path": "3"}, "776": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH1", "path": "3", "value": "0x40"}, "778": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "MLOAD", "path": "3"}, "779": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "RETURNDATASIZE", "path": "3"}, "780": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH1", "path": "3", "value": "0x1F"}, "782": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "NOT", "path": "3"}, "783": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH1", "path": "3", "value": "0x1F"}, "785": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP3", "path": "3"}, "786": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "ADD", "path": "3"}, "787": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "AND", "path": "3"}, "788": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP3", "path": "3"}, "789": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "ADD", "path": "3"}, "790": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP1", "path": "3"}, "791": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH1", "path": "3", "value": "0x40"}, "793": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "MSTORE", "path": "3"}, "794": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "POP", "path": "3"}, "795": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "DUP2", "path": "3"}, "796": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "ADD", "path": "3"}, "797": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "SWAP1", "path": "3"}, "798": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH2", "path": "3", "value": "0x327"}, "801": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "SWAP2", "path": "3"}, "802": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "SWAP1", "path": "3"}, "803": {"fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "PUSH2", "path": "3", "value": "0xC92"}, "806": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5515, 5562], "op": "JUMP", "path": "3"}, "807": {"branch": 53, "fn": "SimpleSwap.withdraw", "offset": [5515, 5562], "op": "JUMPDEST", "path": "3"}, "808": {"fn": "SimpleSwap.withdraw", "offset": [5507, 5591], "op": "PUSH2", "path": "3", "value": "0x343"}, "811": {"branch": 53, "fn": "SimpleSwap.withdraw", "offset": [5507, 5591], "op": "JUMPI", "path": "3"}, "812": {"fn": "SimpleSwap.withdraw", "offset": [5507, 5591], "op": "PUSH1", "path": "3", "value": "0x40"}, "814": {"fn": "SimpleSwap.withdraw", "offset": [5507, 5591], "op": "MLOAD", "path": "3"}, "815": {"op": "PUSH3", "value": "0x461BCD"}, "819": {"op": "PUSH1", "value": "0xE5"}, "821": {"op": "SHL"}, "822": {"fn": "SimpleSwap.withdraw", "offset": [5507, 5591], "op": "DUP2", "path": "3"}, "823": {"fn": "SimpleSwap.withdraw", "offset": [5507, 5591], "op": "MSTORE", "path": "3"}, "824": {"fn": "SimpleSwap.withdraw", "offset": [5507, 5591], "op": "PUSH1", "path": "3", "value": "0x4"}, "826": {"fn": "SimpleSwap.withdraw", "offset": [5507, 5591], "op": "ADD", "path": "3"}, "827": {"fn": "SimpleSwap.withdraw", "offset": [5507, 5591], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "830": {"fn": "SimpleSwap.withdraw", "offset": [5507, 5591], "op": "SWAP1", "path": "3"}, "831": {"fn": "SimpleSwap.withdraw", "offset": [5507, 5591], "op": "PUSH2", "path": "3", "value": "0xE7A"}, "834": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5507, 5591], "op": "JUMP", "path": "3"}, "835": {"fn": "SimpleSwap.withdraw", "offset": [5507, 5591], "op": "JUMPDEST", "path": "3"}, "836": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH1", "path": "3", "statement": 8, "value": "0x40"}, "838": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "MLOAD", "path": "3"}, "839": {"op": "PUSH4", "value": "0xA9059CBB"}, "844": {"op": "PUSH1", "value": "0xE0"}, "846": {"op": "SHL"}, "847": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP2", "path": "3"}, "848": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "MSTORE", "path": "3"}, "849": {"op": "PUSH1", "value": "0x1"}, "851": {"op": "PUSH1", "value": "0x1"}, "853": {"op": "PUSH1", "value": "0xA0"}, "855": {"op": "SHL"}, "856": {"op": "SUB"}, "857": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5622], "op": "DUP3", "path": "3"}, "858": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5622], "op": "AND", "path": "3"}, "859": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5622], "op": "SWAP1", "path": "3"}, "860": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5622], "op": "PUSH4", "path": "3", "value": "0xA9059CBB"}, "865": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5622], "op": "SWAP1", "path": "3"}, "866": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH2", "path": "3", "value": "0x371"}, "869": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "SWAP1", "path": "3"}, "870": {"fn": "SimpleSwap.withdraw", "offset": [5623, 5633], "op": "CALLER", "path": "3"}, "871": {"fn": "SimpleSwap.withdraw", "offset": [5623, 5633], "op": "SWAP1", "path": "3"}, "872": {"fn": "SimpleSwap.withdraw", "offset": [5635, 5655], "op": "DUP8", "path": "3"}, "873": {"fn": "SimpleSwap.withdraw", "offset": [5635, 5655], "op": "SWAP1", "path": "3"}, "874": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH1", "path": "3", "value": "0x4"}, "876": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "ADD", "path": "3"}, "877": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH2", "path": "3", "value": "0xD5E"}, "880": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5609, 5656], "op": "JUMP", "path": "3"}, "881": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "JUMPDEST", "path": "3"}, "882": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH1", "path": "3", "value": "0x20"}, "884": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH1", "path": "3", "value": "0x40"}, "886": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "MLOAD", "path": "3"}, "887": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP1", "path": "3"}, "888": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP4", "path": "3"}, "889": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "SUB", "path": "3"}, "890": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP2", "path": "3"}, "891": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH1", "path": "3", "value": "0x0"}, "893": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP8", "path": "3"}, "894": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP1", "path": "3"}, "895": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "EXTCODESIZE", "path": "3"}, "896": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "ISZERO", "path": "3"}, "897": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP1", "path": "3"}, "898": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "ISZERO", "path": "3"}, "899": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH2", "path": "3", "value": "0x38B"}, "902": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "JUMPI", "path": "3"}, "903": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH1", "path": "3", "value": "0x0"}, "905": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP1", "path": "3"}, "906": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "REVERT", "path": "3"}, "907": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "JUMPDEST", "path": "3"}, "908": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "POP", "path": "3"}, "909": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "GAS", "path": "3"}, "910": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "CALL", "path": "3"}, "911": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "ISZERO", "path": "3"}, "912": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP1", "path": "3"}, "913": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "ISZERO", "path": "3"}, "914": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH2", "path": "3", "value": "0x39F"}, "917": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "JUMPI", "path": "3"}, "918": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "RETURNDATASIZE", "path": "3"}, "919": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH1", "path": "3", "value": "0x0"}, "921": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP1", "path": "3"}, "922": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "RETURNDATACOPY", "path": "3"}, "923": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "RETURNDATASIZE", "path": "3"}, "924": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH1", "path": "3", "value": "0x0"}, "926": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "REVERT", "path": "3"}, "927": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "JUMPDEST", "path": "3"}, "928": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "POP", "path": "3"}, "929": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "POP", "path": "3"}, "930": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "POP", "path": "3"}, "931": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "POP", "path": "3"}, "932": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH1", "path": "3", "value": "0x40"}, "934": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "MLOAD", "path": "3"}, "935": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "RETURNDATASIZE", "path": "3"}, "936": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH1", "path": "3", "value": "0x1F"}, "938": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "NOT", "path": "3"}, "939": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH1", "path": "3", "value": "0x1F"}, "941": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP3", "path": "3"}, "942": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "ADD", "path": "3"}, "943": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "AND", "path": "3"}, "944": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP3", "path": "3"}, "945": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "ADD", "path": "3"}, "946": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP1", "path": "3"}, "947": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH1", "path": "3", "value": "0x40"}, "949": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "MSTORE", "path": "3"}, "950": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "POP", "path": "3"}, "951": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "DUP2", "path": "3"}, "952": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "ADD", "path": "3"}, "953": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "SWAP1", "path": "3"}, "954": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH2", "path": "3", "value": "0x3C3"}, "957": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "SWAP2", "path": "3"}, "958": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "SWAP1", "path": "3"}, "959": {"fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "PUSH2", "path": "3", "value": "0xC92"}, "962": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5609, 5656], "op": "JUMP", "path": "3"}, "963": {"branch": 54, "fn": "SimpleSwap.withdraw", "offset": [5609, 5656], "op": "JUMPDEST", "path": "3"}, "964": {"fn": "SimpleSwap.withdraw", "offset": [5601, 5685], "op": "PUSH2", "path": "3", "value": "0x3DF"}, "967": {"branch": 54, "fn": "SimpleSwap.withdraw", "offset": [5601, 5685], "op": "JUMPI", "path": "3"}, "968": {"fn": "SimpleSwap.withdraw", "offset": [5601, 5685], "op": "PUSH1", "path": "3", "value": "0x40"}, "970": {"fn": "SimpleSwap.withdraw", "offset": [5601, 5685], "op": "MLOAD", "path": "3"}, "971": {"op": "PUSH3", "value": "0x461BCD"}, "975": {"op": "PUSH1", "value": "0xE5"}, "977": {"op": "SHL"}, "978": {"fn": "SimpleSwap.withdraw", "offset": [5601, 5685], "op": "DUP2", "path": "3"}, "979": {"fn": "SimpleSwap.withdraw", "offset": [5601, 5685], "op": "MSTORE", "path": "3"}, "980": {"fn": "SimpleSwap.withdraw", "offset": [5601, 5685], "op": "PUSH1", "path": "3", "value": "0x4"}, "982": {"fn": "SimpleSwap.withdraw", "offset": [5601, 5685], "op": "ADD", "path": "3"}, "983": {"fn": "SimpleSwap.withdraw", "offset": [5601, 5685], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "986": {"fn": "SimpleSwap.withdraw", "offset": [5601, 5685], "op": "SWAP1", "path": "3"}, "987": {"fn": "SimpleSwap.withdraw", "offset": [5601, 5685], "op": "PUSH2", "path": "3", "value": "0xE43"}, "990": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5601, 5685], "op": "JUMP", "path": "3"}, "991": {"fn": "SimpleSwap.withdraw", "offset": [5601, 5685], "op": "JUMPDEST", "path": "3"}, "992": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "POP", "path": "3"}, "993": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "POP", "path": "3"}, "994": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "POP", "path": "3"}, "995": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "POP", "path": "3"}, "996": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "POP", "path": "3"}, "997": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "POP", "path": "3"}, "998": {"fn": "SimpleSwap.withdraw", "offset": [4504, 5693], "op": "POP", "path": "3"}, "999": {"fn": "SimpleSwap.withdraw", "jump": "o", "offset": [4504, 5693], "op": "JUMP", "path": "3"}, "1000": {"fn": "SimpleSwap.supply", "offset": [3338, 4472], "op": "JUMPDEST", "path": "3"}, "1001": {"fn": "SimpleSwap.supply", "offset": [3403, 3418], "op": "PUSH1", "path": "3", "statement": 9, "value": "0x7"}, "1003": {"fn": "SimpleSwap.supply", "offset": [3403, 3418], "op": "SLOAD", "path": "3"}, "1004": {"fn": "SimpleSwap.supply", "offset": [3403, 3418], "op": "PUSH1", "path": "3", "value": "0xFF"}, "1006": {"branch": 55, "fn": "SimpleSwap.supply", "offset": [3403, 3418], "op": "AND", "path": "3"}, "1007": {"fn": "SimpleSwap.supply", "offset": [3395, 3458], "op": "PUSH2", "path": "3", "value": "0x40A"}, "1010": {"branch": 55, "fn": "SimpleSwap.supply", "offset": [3395, 3458], "op": "JUMPI", "path": "3"}, "1011": {"fn": "SimpleSwap.supply", "offset": [3395, 3458], "op": "PUSH1", "path": "3", "value": "0x40"}, "1013": {"fn": "SimpleSwap.supply", "offset": [3395, 3458], "op": "MLOAD", "path": "3"}, "1014": {"op": "PUSH3", "value": "0x461BCD"}, "1018": {"op": "PUSH1", "value": "0xE5"}, "1020": {"op": "SHL"}, "1021": {"fn": "SimpleSwap.supply", "offset": [3395, 3458], "op": "DUP2", "path": "3"}, "1022": {"fn": "SimpleSwap.supply", "offset": [3395, 3458], "op": "MSTORE", "path": "3"}, "1023": {"fn": "SimpleSwap.supply", "offset": [3395, 3458], "op": "PUSH1", "path": "3", "value": "0x4"}, "1025": {"fn": "SimpleSwap.supply", "offset": [3395, 3458], "op": "ADD", "path": "3"}, "1026": {"fn": "SimpleSwap.supply", "offset": [3395, 3458], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1029": {"fn": "SimpleSwap.supply", "offset": [3395, 3458], "op": "SWAP1", "path": "3"}, "1030": {"fn": "SimpleSwap.supply", "offset": [3395, 3458], "op": "PUSH2", "path": "3", "value": "0xEE6"}, "1033": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3395, 3458], "op": "JUMP", "path": "3"}, "1034": {"fn": "SimpleSwap.supply", "offset": [3395, 3458], "op": "JUMPDEST", "path": "3"}, "1035": {"fn": "SimpleSwap.supply", "offset": [3493, 3494], "op": "PUSH1", "path": "3", "statement": 10, "value": "0x0"}, "1037": {"fn": "SimpleSwap.supply", "offset": [3476, 3490], "op": "DUP2", "path": "3"}, "1038": {"branch": 56, "fn": "SimpleSwap.supply", "offset": [3476, 3494], "op": "GT", "path": "3"}, "1039": {"fn": "SimpleSwap.supply", "offset": [3468, 3546], "op": "PUSH2", "path": "3", "value": "0x42A"}, "1042": {"branch": 56, "fn": "SimpleSwap.supply", "offset": [3468, 3546], "op": "JUMPI", "path": "3"}, "1043": {"fn": "SimpleSwap.supply", "offset": [3468, 3546], "op": "PUSH1", "path": "3", "value": "0x40"}, "1045": {"fn": "SimpleSwap.supply", "offset": [3468, 3546], "op": "MLOAD", "path": "3"}, "1046": {"op": "PUSH3", "value": "0x461BCD"}, "1050": {"op": "PUSH1", "value": "0xE5"}, "1052": {"op": "SHL"}, "1053": {"fn": "SimpleSwap.supply", "offset": [3468, 3546], "op": "DUP2", "path": "3"}, "1054": {"fn": "SimpleSwap.supply", "offset": [3468, 3546], "op": "MSTORE", "path": "3"}, "1055": {"fn": "SimpleSwap.supply", "offset": [3468, 3546], "op": "PUSH1", "path": "3", "value": "0x4"}, "1057": {"fn": "SimpleSwap.supply", "offset": [3468, 3546], "op": "ADD", "path": "3"}, "1058": {"fn": "SimpleSwap.supply", "offset": [3468, 3546], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1061": {"fn": "SimpleSwap.supply", "offset": [3468, 3546], "op": "SWAP1", "path": "3"}, "1062": {"fn": "SimpleSwap.supply", "offset": [3468, 3546], "op": "PUSH2", "path": "3", "value": "0xDF4"}, "1065": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3468, 3546], "op": "JUMP", "path": "3"}, "1066": {"fn": "SimpleSwap.supply", "offset": [3468, 3546], "op": "JUMPDEST", "path": "3"}, "1067": {"fn": "SimpleSwap.supply", "offset": [3557, 3585], "op": "PUSH1", "path": "3", "value": "0x0"}, "1069": {"fn": "SimpleSwap.supply", "offset": [3587, 3615], "op": "DUP1", "path": "3"}, "1070": {"fn": "SimpleSwap.supply", "offset": [3619, 3636], "op": "PUSH2", "path": "3", "value": "0x435"}, "1073": {"fn": "SimpleSwap.supply", "offset": [3619, 3634], "op": "PUSH2", "path": "3", "value": "0x7D6"}, "1076": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3619, 3636], "op": "JUMP", "path": "3"}, "1077": {"fn": "SimpleSwap.supply", "offset": [3619, 3636], "op": "JUMPDEST", "path": "3"}, "1078": {"fn": "SimpleSwap.supply", "offset": [3668, 3679], "op": "PUSH1", "path": "3", "value": "0x1"}, "1080": {"fn": "SimpleSwap.supply", "offset": [3668, 3679], "op": "SLOAD", "path": "3"}, "1081": {"fn": "SimpleSwap.supply", "offset": [3711, 3722], "op": "PUSH1", "path": "3", "value": "0x2"}, "1083": {"fn": "SimpleSwap.supply", "offset": [3711, 3722], "op": "SLOAD", "path": "3"}, "1084": {"fn": "SimpleSwap.supply", "offset": [3556, 3636], "op": "SWAP3", "path": "3"}, "1085": {"fn": "SimpleSwap.supply", "offset": [3556, 3636], "op": "SWAP5", "path": "3"}, "1086": {"op": "POP"}, "1087": {"fn": "SimpleSwap.supply", "offset": [3556, 3636], "op": "SWAP1", "path": "3"}, "1088": {"fn": "SimpleSwap.supply", "offset": [3556, 3636], "op": "SWAP3", "path": "3"}, "1089": {"op": "POP"}, "1090": {"op": "PUSH1", "value": "0x1"}, "1092": {"op": "PUSH1", "value": "0x1"}, "1094": {"op": "PUSH1", "value": "0xA0"}, "1096": {"op": "SHL"}, "1097": {"op": "SUB"}, "1098": {"fn": "SimpleSwap.supply", "offset": [3668, 3679], "op": "SWAP1", "path": "3"}, "1099": {"fn": "SimpleSwap.supply", "offset": [3668, 3679], "op": "DUP2", "path": "3"}, "1100": {"fn": "SimpleSwap.supply", "offset": [3668, 3679], "op": "AND", "path": "3"}, "1101": {"fn": "SimpleSwap.supply", "offset": [3668, 3679], "op": "SWAP2", "path": "3"}, "1102": {"fn": "SimpleSwap.supply", "offset": [3711, 3722], "op": "AND", "path": "3"}, "1103": {"fn": "SimpleSwap.supply", "offset": [3647, 3658], "op": "PUSH1", "path": "3", "value": "0x0"}, "1105": {"fn": "SimpleSwap.supply", "offset": [3763, 3816], "op": "PUSH2", "path": "3", "value": "0x461"}, "1108": {"fn": "SimpleSwap.supply", "offset": [3808, 3815], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "1112": {"fn": "SimpleSwap.supply", "offset": [3763, 3803], "op": "PUSH2", "path": "3", "value": "0x220"}, "1115": {"fn": "SimpleSwap.supply", "offset": [3556, 3636], "op": "DUP8", "path": "3"}, "1116": {"fn": "SimpleSwap.supply", "offset": [3788, 3802], "op": "DUP10", "path": "3"}, "1117": {"fn": "SimpleSwap.supply", "offset": [3763, 3787], "op": "PUSH2", "path": "3", "value": "0xB09"}, "1120": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3763, 3803], "op": "JUMP", "path": "3"}, "1121": {"fn": "SimpleSwap.supply", "offset": [3763, 3816], "op": "JUMPDEST", "path": "3"}, "1122": {"fn": "SimpleSwap.supply", "offset": [3734, 3816], "op": "SWAP1", "path": "3"}, "1123": {"op": "POP"}, "1124": {"fn": "SimpleSwap.supply", "offset": [3841, 3867], "op": "PUSH1", "path": "3", "value": "0x0"}, "1126": {"fn": "SimpleSwap.supply", "offset": [3870, 3923], "op": "PUSH2", "path": "3", "value": "0x476"}, "1129": {"fn": "SimpleSwap.supply", "offset": [3915, 3922], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "1133": {"fn": "SimpleSwap.supply", "offset": [3870, 3910], "op": "PUSH2", "path": "3", "value": "0x220"}, "1136": {"fn": "SimpleSwap.supply", "offset": [3870, 3890], "op": "DUP8", "path": "3"}, "1137": {"fn": "SimpleSwap.supply", "offset": [3895, 3909], "op": "DUP11", "path": "3"}, "1138": {"fn": "SimpleSwap.supply", "offset": [3870, 3894], "op": "PUSH2", "path": "3", "value": "0xB09"}, "1141": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3870, 3910], "op": "JUMP", "path": "3"}, "1142": {"fn": "SimpleSwap.supply", "offset": [3870, 3923], "op": "JUMPDEST", "path": "3"}, "1143": {"fn": "SimpleSwap.supply", "offset": [3969, 3987], "op": "PUSH1", "path": "3", "statement": 11, "value": "0x3"}, "1145": {"fn": "SimpleSwap.supply", "offset": [3969, 3987], "op": "SLOAD", "path": "3"}, "1146": {"fn": "SimpleSwap.supply", "offset": [3841, 3923], "op": "SWAP1", "path": "3"}, "1147": {"fn": "SimpleSwap.supply", "offset": [3841, 3923], "op": "SWAP2", "path": "3"}, "1148": {"op": "POP"}, "1149": {"fn": "SimpleSwap.supply", "offset": [3969, 4011], "op": "PUSH2", "path": "3", "value": "0x486"}, "1152": {"fn": "SimpleSwap.supply", "offset": [3969, 4011], "op": "SWAP1", "path": "3"}, "1153": {"fn": "SimpleSwap.supply", "offset": [3992, 4010], "op": "DUP4", "path": "3"}, "1154": {"fn": "SimpleSwap.supply", "offset": [3969, 3991], "op": "PUSH2", "path": "3", "value": "0xB34"}, "1157": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3969, 4011], "op": "JUMP", "path": "3"}, "1158": {"fn": "SimpleSwap.supply", "offset": [3969, 4011], "op": "JUMPDEST", "path": "3"}, "1159": {"fn": "SimpleSwap.supply", "offset": [3948, 3966], "op": "PUSH1", "path": "3", "value": "0x3"}, "1161": {"fn": "SimpleSwap.supply", "offset": [3948, 4011], "op": "SSTORE", "path": "3"}, "1162": {"fn": "SimpleSwap.supply", "offset": [4042, 4060], "op": "PUSH1", "path": "3", "statement": 12, "value": "0x4"}, "1164": {"fn": "SimpleSwap.supply", "offset": [4042, 4060], "op": "SLOAD", "path": "3"}, "1165": {"fn": "SimpleSwap.supply", "offset": [4042, 4084], "op": "PUSH2", "path": "3", "value": "0x496"}, "1168": {"fn": "SimpleSwap.supply", "offset": [4042, 4084], "op": "SWAP1", "path": "3"}, "1169": {"fn": "SimpleSwap.supply", "offset": [4065, 4083], "op": "DUP3", "path": "3"}, "1170": {"fn": "SimpleSwap.supply", "offset": [4042, 4064], "op": "PUSH2", "path": "3", "value": "0xB34"}, "1173": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4042, 4084], "op": "JUMP", "path": "3"}, "1174": {"fn": "SimpleSwap.supply", "offset": [4042, 4084], "op": "JUMPDEST", "path": "3"}, "1175": {"fn": "SimpleSwap.supply", "offset": [4021, 4039], "op": "PUSH1", "path": "3", "value": "0x4"}, "1177": {"fn": "SimpleSwap.supply", "offset": [4021, 4084], "op": "SSTORE", "path": "3"}, "1178": {"fn": "SimpleSwap.supply", "offset": [4111, 4124], "op": "PUSH1", "path": "3", "statement": 13, "value": "0x5"}, "1180": {"fn": "SimpleSwap.supply", "offset": [4111, 4124], "op": "SLOAD", "path": "3"}, "1181": {"fn": "SimpleSwap.supply", "offset": [4111, 4144], "op": "PUSH2", "path": "3", "value": "0x4A6"}, "1184": {"fn": "SimpleSwap.supply", "offset": [4111, 4144], "op": "SWAP1", "path": "3"}, "1185": {"fn": "SimpleSwap.supply", "offset": [4129, 4143], "op": "DUP9", "path": "3"}, "1186": {"fn": "SimpleSwap.supply", "offset": [4111, 4128], "op": "PUSH2", "path": "3", "value": "0xB34"}, "1189": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4111, 4144], "op": "JUMP", "path": "3"}, "1190": {"fn": "SimpleSwap.supply", "offset": [4111, 4144], "op": "JUMPDEST", "path": "3"}, "1191": {"fn": "SimpleSwap.supply", "offset": [4095, 4108], "op": "PUSH1", "path": "3", "value": "0x5"}, "1193": {"fn": "SimpleSwap.supply", "offset": [4095, 4144], "op": "SSTORE", "path": "3"}, "1194": {"fn": "SimpleSwap.supply", "offset": [4211, 4221], "op": "CALLER", "path": "3", "statement": 14}, "1195": {"fn": "SimpleSwap.supply", "offset": [4190, 4222], "op": "PUSH1", "path": "3", "value": "0x0"}, "1197": {"fn": "SimpleSwap.supply", "offset": [4190, 4222], "op": "SWAP1", "path": "3"}, "1198": {"fn": "SimpleSwap.supply", "offset": [4190, 4222], "op": "DUP2", "path": "3"}, "1199": {"fn": "SimpleSwap.supply", "offset": [4190, 4222], "op": "MSTORE", "path": "3"}, "1200": {"fn": "SimpleSwap.supply", "offset": [4190, 4210], "op": "PUSH1", "path": "3", "value": "0x8"}, "1202": {"fn": "SimpleSwap.supply", "offset": [4190, 4222], "op": "PUSH1", "path": "3", "value": "0x20"}, "1204": {"fn": "SimpleSwap.supply", "offset": [4190, 4222], "op": "MSTORE", "path": "3"}, "1205": {"fn": "SimpleSwap.supply", "offset": [4190, 4222], "op": "PUSH1", "path": "3", "value": "0x40"}, "1207": {"fn": "SimpleSwap.supply", "offset": [4190, 4222], "op": "SWAP1", "path": "3"}, "1208": {"fn": "SimpleSwap.supply", "offset": [4190, 4222], "op": "KECCAK256", "path": "3"}, "1209": {"fn": "SimpleSwap.supply", "offset": [4190, 4222], "op": "SLOAD", "path": "3"}, "1210": {"fn": "SimpleSwap.supply", "offset": [4190, 4242], "op": "PUSH2", "path": "3", "value": "0x4C3"}, "1213": {"fn": "SimpleSwap.supply", "offset": [4190, 4242], "op": "SWAP1", "path": "3"}, "1214": {"fn": "SimpleSwap.supply", "offset": [4227, 4241], "op": "DUP9", "path": "3"}, "1215": {"fn": "SimpleSwap.supply", "offset": [4190, 4226], "op": "PUSH2", "path": "3", "value": "0xB34"}, "1218": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4190, 4242], "op": "JUMP", "path": "3"}, "1219": {"fn": "SimpleSwap.supply", "offset": [4190, 4242], "op": "JUMPDEST", "path": "3"}, "1220": {"fn": "SimpleSwap.supply", "offset": [4176, 4186], "op": "CALLER", "path": "3"}, "1221": {"fn": "SimpleSwap.supply", "offset": [4155, 4187], "op": "PUSH1", "path": "3", "value": "0x0"}, "1223": {"fn": "SimpleSwap.supply", "offset": [4155, 4187], "op": "DUP2", "path": "3"}, "1224": {"fn": "SimpleSwap.supply", "offset": [4155, 4187], "op": "DUP2", "path": "3"}, "1225": {"fn": "SimpleSwap.supply", "offset": [4155, 4187], "op": "MSTORE", "path": "3"}, "1226": {"fn": "SimpleSwap.supply", "offset": [4155, 4175], "op": "PUSH1", "path": "3", "value": "0x8"}, "1228": {"fn": "SimpleSwap.supply", "offset": [4155, 4187], "op": "PUSH1", "path": "3", "value": "0x20"}, "1230": {"fn": "SimpleSwap.supply", "offset": [4155, 4187], "op": "MSTORE", "path": "3"}, "1231": {"fn": "SimpleSwap.supply", "offset": [4155, 4187], "op": "PUSH1", "path": "3", "value": "0x40"}, "1233": {"fn": "SimpleSwap.supply", "offset": [4155, 4187], "op": "SWAP1", "path": "3"}, "1234": {"fn": "SimpleSwap.supply", "offset": [4155, 4187], "op": "DUP2", "path": "3"}, "1235": {"fn": "SimpleSwap.supply", "offset": [4155, 4187], "op": "SWAP1", "path": "3"}, "1236": {"fn": "SimpleSwap.supply", "offset": [4155, 4187], "op": "KECCAK256", "path": "3"}, "1237": {"fn": "SimpleSwap.supply", "offset": [4155, 4242], "op": "SWAP3", "path": "3"}, "1238": {"fn": "SimpleSwap.supply", "offset": [4155, 4242], "op": "SWAP1", "path": "3"}, "1239": {"fn": "SimpleSwap.supply", "offset": [4155, 4242], "op": "SWAP3", "path": "3"}, "1240": {"fn": "SimpleSwap.supply", "offset": [4155, 4242], "op": "SSTORE", "path": "3"}, "1241": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "SWAP1", "path": "3", "statement": 15}, "1242": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "MLOAD", "path": "3"}, "1243": {"op": "PUSH4", "value": "0x23B872DD"}, "1248": {"op": "PUSH1", "value": "0xE0"}, "1250": {"op": "SHL"}, "1251": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP2", "path": "3"}, "1252": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "MSTORE", "path": "3"}, "1253": {"op": "PUSH1", "value": "0x1"}, "1255": {"op": "PUSH1", "value": "0x1"}, "1257": {"op": "PUSH1", "value": "0xA0"}, "1259": {"op": "SHL"}, "1260": {"op": "SUB"}, "1261": {"fn": "SimpleSwap.supply", "offset": [4261, 4278], "op": "DUP7", "path": "3"}, "1262": {"fn": "SimpleSwap.supply", "offset": [4261, 4278], "op": "AND", "path": "3"}, "1263": {"fn": "SimpleSwap.supply", "offset": [4261, 4278], "op": "SWAP2", "path": "3"}, "1264": {"fn": "SimpleSwap.supply", "offset": [4261, 4278], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "1269": {"fn": "SimpleSwap.supply", "offset": [4261, 4278], "op": "SWAP2", "path": "3"}, "1270": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH2", "path": "3", "value": "0x506"}, "1273": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "SWAP2", "path": "3"}, "1274": {"fn": "SimpleSwap.supply", "offset": [4176, 4186], "op": "SWAP1", "path": "3"}, "1275": {"fn": "SimpleSwap.supply", "offset": [4299, 4303], "op": "ADDRESS", "path": "3"}, "1276": {"fn": "SimpleSwap.supply", "offset": [4299, 4303], "op": "SWAP1", "path": "3"}, "1277": {"fn": "SimpleSwap.supply", "offset": [4306, 4324], "op": "DUP8", "path": "3"}, "1278": {"fn": "SimpleSwap.supply", "offset": [4306, 4324], "op": "SWAP1", "path": "3"}, "1279": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH1", "path": "3", "value": "0x4"}, "1281": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "ADD", "path": "3"}, "1282": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH2", "path": "3", "value": "0xD3A"}, "1285": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4261, 4325], "op": "JUMP", "path": "3"}, "1286": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "JUMPDEST", "path": "3"}, "1287": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH1", "path": "3", "value": "0x20"}, "1289": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH1", "path": "3", "value": "0x40"}, "1291": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "MLOAD", "path": "3"}, "1292": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP1", "path": "3"}, "1293": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP4", "path": "3"}, "1294": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "SUB", "path": "3"}, "1295": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP2", "path": "3"}, "1296": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH1", "path": "3", "value": "0x0"}, "1298": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP8", "path": "3"}, "1299": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP1", "path": "3"}, "1300": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "EXTCODESIZE", "path": "3"}, "1301": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "ISZERO", "path": "3"}, "1302": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP1", "path": "3"}, "1303": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "ISZERO", "path": "3"}, "1304": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH2", "path": "3", "value": "0x520"}, "1307": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "JUMPI", "path": "3"}, "1308": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH1", "path": "3", "value": "0x0"}, "1310": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP1", "path": "3"}, "1311": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "REVERT", "path": "3"}, "1312": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "JUMPDEST", "path": "3"}, "1313": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "POP", "path": "3"}, "1314": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "GAS", "path": "3"}, "1315": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "CALL", "path": "3"}, "1316": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "ISZERO", "path": "3"}, "1317": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP1", "path": "3"}, "1318": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "ISZERO", "path": "3"}, "1319": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH2", "path": "3", "value": "0x534"}, "1322": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "JUMPI", "path": "3"}, "1323": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "RETURNDATASIZE", "path": "3"}, "1324": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH1", "path": "3", "value": "0x0"}, "1326": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP1", "path": "3"}, "1327": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "RETURNDATACOPY", "path": "3"}, "1328": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "RETURNDATASIZE", "path": "3"}, "1329": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH1", "path": "3", "value": "0x0"}, "1331": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "REVERT", "path": "3"}, "1332": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "JUMPDEST", "path": "3"}, "1333": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "POP", "path": "3"}, "1334": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "POP", "path": "3"}, "1335": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "POP", "path": "3"}, "1336": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "POP", "path": "3"}, "1337": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH1", "path": "3", "value": "0x40"}, "1339": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "MLOAD", "path": "3"}, "1340": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "RETURNDATASIZE", "path": "3"}, "1341": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1343": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "NOT", "path": "3"}, "1344": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1346": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP3", "path": "3"}, "1347": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "ADD", "path": "3"}, "1348": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "AND", "path": "3"}, "1349": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP3", "path": "3"}, "1350": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "ADD", "path": "3"}, "1351": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP1", "path": "3"}, "1352": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH1", "path": "3", "value": "0x40"}, "1354": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "MSTORE", "path": "3"}, "1355": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "POP", "path": "3"}, "1356": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "DUP2", "path": "3"}, "1357": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "ADD", "path": "3"}, "1358": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "SWAP1", "path": "3"}, "1359": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH2", "path": "3", "value": "0x558"}, "1362": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "SWAP2", "path": "3"}, "1363": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "SWAP1", "path": "3"}, "1364": {"fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "PUSH2", "path": "3", "value": "0xC92"}, "1367": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4261, 4325], "op": "JUMP", "path": "3"}, "1368": {"branch": 57, "fn": "SimpleSwap.supply", "offset": [4261, 4325], "op": "JUMPDEST", "path": "3"}, "1369": {"fn": "SimpleSwap.supply", "offset": [4253, 4354], "op": "PUSH2", "path": "3", "value": "0x574"}, "1372": {"branch": 57, "fn": "SimpleSwap.supply", "offset": [4253, 4354], "op": "JUMPI", "path": "3"}, "1373": {"fn": "SimpleSwap.supply", "offset": [4253, 4354], "op": "PUSH1", "path": "3", "value": "0x40"}, "1375": {"fn": "SimpleSwap.supply", "offset": [4253, 4354], "op": "MLOAD", "path": "3"}, "1376": {"op": "PUSH3", "value": "0x461BCD"}, "1380": {"op": "PUSH1", "value": "0xE5"}, "1382": {"op": "SHL"}, "1383": {"fn": "SimpleSwap.supply", "offset": [4253, 4354], "op": "DUP2", "path": "3"}, "1384": {"fn": "SimpleSwap.supply", "offset": [4253, 4354], "op": "MSTORE", "path": "3"}, "1385": {"fn": "SimpleSwap.supply", "offset": [4253, 4354], "op": "PUSH1", "path": "3", "value": "0x4"}, "1387": {"fn": "SimpleSwap.supply", "offset": [4253, 4354], "op": "ADD", "path": "3"}, "1388": {"fn": "SimpleSwap.supply", "offset": [4253, 4354], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1391": {"fn": "SimpleSwap.supply", "offset": [4253, 4354], "op": "SWAP1", "path": "3"}, "1392": {"fn": "SimpleSwap.supply", "offset": [4253, 4354], "op": "PUSH2", "path": "3", "value": "0xE7A"}, "1395": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4253, 4354], "op": "JUMP", "path": "3"}, "1396": {"fn": "SimpleSwap.supply", "offset": [4253, 4354], "op": "JUMPDEST", "path": "3"}, "1397": {"fn": "SimpleSwap.supply", "offset": [4372, 4436], "op": "PUSH1", "path": "3", "statement": 16, "value": "0x40"}, "1399": {"fn": "SimpleSwap.supply", "offset": [4372, 4436], "op": "MLOAD", "path": "3"}, "1400": {"op": "PUSH4", "value": "0x23B872DD"}, "1405": {"op": "PUSH1", "value": "0xE0"}, "1407": {"op": "SHL"}, "1408": {"fn": "SimpleSwap.supply", "offset": [4372, 4436], "op": "DUP2", "path": "3"}, "1409": {"fn": "SimpleSwap.supply", "offset": [4372, 4436], "op": "MSTORE", "path": "3"}, "1410": {"op": "PUSH1", "value": "0x1"}, "1412": {"op": "PUSH1", "value": "0x1"}, "1414": {"op": "PUSH1", "value": "0xA0"}, "1416": {"op": "SHL"}, "1417": {"op": "SUB"}, "1418": {"fn": "SimpleSwap.supply", "offset": [4372, 4389], "op": "DUP5", "path": "3"}, "1419": {"fn": "SimpleSwap.supply", "offset": [4372, 4389], "op": "AND", "path": "3"}, "1420": {"fn": "SimpleSwap.supply", "offset": [4372, 4389], "op": "SWAP1", "path": "3"}, "1421": {"fn": "SimpleSwap.supply", "offset": [4372, 4389], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "1426": {"fn": "SimpleSwap.supply", "offset": [4372, 4389], "op": "SWAP1", "path": "3"}, "1427": {"fn": "SimpleSwap.supply", "offset": [4372, 4436], "op": "PUSH2", "path": "3", "value": "0x371"}, "1430": {"fn": "SimpleSwap.supply", "offset": [4372, 4436], "op": "SWAP1", "path": "3"}, "1431": {"fn": "SimpleSwap.supply", "offset": [4390, 4400], "op": "CALLER", "path": "3"}, "1432": {"fn": "SimpleSwap.supply", "offset": [4390, 4400], "op": "SWAP1", "path": "3"}, "1433": {"fn": "SimpleSwap.supply", "offset": [4410, 4414], "op": "ADDRESS", "path": "3"}, "1434": {"fn": "SimpleSwap.supply", "offset": [4410, 4414], "op": "SWAP1", "path": "3"}, "1435": {"fn": "SimpleSwap.supply", "offset": [4417, 4435], "op": "DUP7", "path": "3"}, "1436": {"fn": "SimpleSwap.supply", "offset": [4417, 4435], "op": "SWAP1", "path": "3"}, "1437": {"fn": "SimpleSwap.supply", "offset": [4372, 4436], "op": "PUSH1", "path": "3", "value": "0x4"}, "1439": {"fn": "SimpleSwap.supply", "offset": [4372, 4436], "op": "ADD", "path": "3"}, "1440": {"fn": "SimpleSwap.supply", "offset": [4372, 4436], "op": "PUSH2", "path": "3", "value": "0xD3A"}, "1443": {"branch": 58, "fn": "SimpleSwap.supply", "jump": "i", "offset": [4372, 4436], "op": "JUMP", "path": "3"}, "1444": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "JUMPDEST", "path": "3"}, "1445": {"fn": "SimpleSwap.swap", "offset": [2164, 2179], "op": "PUSH1", "path": "3", "statement": 17, "value": "0x7"}, "1447": {"fn": "SimpleSwap.swap", "offset": [2164, 2179], "op": "SLOAD", "path": "3"}, "1448": {"fn": "SimpleSwap.swap", "offset": [2164, 2179], "op": "PUSH1", "path": "3", "value": "0xFF"}, "1450": {"branch": 59, "fn": "SimpleSwap.swap", "offset": [2164, 2179], "op": "AND", "path": "3"}, "1451": {"fn": "SimpleSwap.swap", "offset": [2156, 2219], "op": "PUSH2", "path": "3", "value": "0x5C6"}, "1454": {"branch": 59, "fn": "SimpleSwap.swap", "offset": [2156, 2219], "op": "JUMPI", "path": "3"}, "1455": {"fn": "SimpleSwap.swap", "offset": [2156, 2219], "op": "PUSH1", "path": "3", "value": "0x40"}, "1457": {"fn": "SimpleSwap.swap", "offset": [2156, 2219], "op": "MLOAD", "path": "3"}, "1458": {"op": "PUSH3", "value": "0x461BCD"}, "1462": {"op": "PUSH1", "value": "0xE5"}, "1464": {"op": "SHL"}, "1465": {"fn": "SimpleSwap.swap", "offset": [2156, 2219], "op": "DUP2", "path": "3"}, "1466": {"fn": "SimpleSwap.swap", "offset": [2156, 2219], "op": "MSTORE", "path": "3"}, "1467": {"fn": "SimpleSwap.swap", "offset": [2156, 2219], "op": "PUSH1", "path": "3", "value": "0x4"}, "1469": {"fn": "SimpleSwap.swap", "offset": [2156, 2219], "op": "ADD", "path": "3"}, "1470": {"fn": "SimpleSwap.swap", "offset": [2156, 2219], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1473": {"fn": "SimpleSwap.swap", "offset": [2156, 2219], "op": "SWAP1", "path": "3"}, "1474": {"fn": "SimpleSwap.swap", "offset": [2156, 2219], "op": "PUSH2", "path": "3", "value": "0xEE6"}, "1477": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2156, 2219], "op": "JUMP", "path": "3"}, "1478": {"fn": "SimpleSwap.swap", "offset": [2156, 2219], "op": "JUMPDEST", "path": "3"}, "1479": {"fn": "SimpleSwap.swap", "offset": [2229, 2257], "op": "PUSH1", "path": "3", "value": "0x0"}, "1481": {"fn": "SimpleSwap.swap", "offset": [2260, 2316], "op": "PUSH2", "path": "3", "value": "0x5D2"}, "1484": {"fn": "SimpleSwap.swap", "offset": [2284, 2301], "op": "DUP5", "path": "3"}, "1485": {"fn": "SimpleSwap.swap", "offset": [2303, 2315], "op": "DUP4", "path": "3"}, "1486": {"fn": "SimpleSwap.swap", "offset": [2260, 2283], "op": "PUSH2", "path": "3", "value": "0xB40"}, "1489": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2260, 2316], "op": "JUMP", "path": "3"}, "1490": {"fn": "SimpleSwap.swap", "offset": [2260, 2316], "op": "JUMPDEST", "path": "3"}, "1491": {"fn": "SimpleSwap.swap", "offset": [2229, 2316], "op": "SWAP1", "path": "3"}, "1492": {"fn": "SimpleSwap.swap", "offset": [2229, 2316], "op": "POP", "path": "3"}, "1493": {"fn": "SimpleSwap.swap", "offset": [2358, 2381], "op": "DUP3", "path": "3", "statement": 18}, "1494": {"fn": "SimpleSwap.swap", "offset": [2334, 2354], "op": "DUP2", "path": "3"}, "1495": {"fn": "SimpleSwap.swap", "offset": [2334, 2381], "op": "LT", "path": "3"}, "1496": {"branch": 60, "fn": "SimpleSwap.swap", "offset": [2334, 2381], "op": "ISZERO", "path": "3"}, "1497": {"fn": "SimpleSwap.swap", "offset": [2326, 2439], "op": "PUSH2", "path": "3", "value": "0x5F4"}, "1500": {"branch": 60, "fn": "SimpleSwap.swap", "offset": [2326, 2439], "op": "JUMPI", "path": "3"}, "1501": {"fn": "SimpleSwap.swap", "offset": [2326, 2439], "op": "PUSH1", "path": "3", "value": "0x40"}, "1503": {"fn": "SimpleSwap.swap", "offset": [2326, 2439], "op": "MLOAD", "path": "3"}, "1504": {"op": "PUSH3", "value": "0x461BCD"}, "1508": {"op": "PUSH1", "value": "0xE5"}, "1510": {"op": "SHL"}, "1511": {"fn": "SimpleSwap.swap", "offset": [2326, 2439], "op": "DUP2", "path": "3"}, "1512": {"fn": "SimpleSwap.swap", "offset": [2326, 2439], "op": "MSTORE", "path": "3"}, "1513": {"fn": "SimpleSwap.swap", "offset": [2326, 2439], "op": "PUSH1", "path": "3", "value": "0x4"}, "1515": {"fn": "SimpleSwap.swap", "offset": [2326, 2439], "op": "ADD", "path": "3"}, "1516": {"fn": "SimpleSwap.swap", "offset": [2326, 2439], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1519": {"fn": "SimpleSwap.swap", "offset": [2326, 2439], "op": "SWAP1", "path": "3"}, "1520": {"fn": "SimpleSwap.swap", "offset": [2326, 2439], "op": "PUSH2", "path": "3", "value": "0xFE5"}, "1523": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2326, 2439], "op": "JUMP", "path": "3"}, "1524": {"fn": "SimpleSwap.swap", "offset": [2326, 2439], "op": "JUMPDEST", "path": "3"}, "1525": {"fn": "SimpleSwap.swap", "offset": [2450, 2466], "op": "PUSH1", "path": "3", "value": "0x0"}, "1527": {"fn": "SimpleSwap.swap", "offset": [2450, 2466], "op": "DUP1", "path": "3"}, "1528": {"fn": "SimpleSwap.swap", "offset": [2450, 2466], "op": "DUP1", "path": "3"}, "1529": {"fn": "SimpleSwap.swap", "offset": [2509, 2521], "op": "DUP5", "path": "3"}, "1530": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "PUSH1", "path": "3", "value": "0x1"}, "1532": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "DUP2", "path": "3"}, "1533": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "GT", "path": "3"}, "1534": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "ISZERO", "path": "3"}, "1535": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "PUSH2", "path": "3", "value": "0x618"}, "1538": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "JUMPI", "path": "3"}, "1539": {"op": "PUSH4", "value": "0x4E487B71"}, "1544": {"op": "PUSH1", "value": "0xE0"}, "1546": {"op": "SHL"}, "1547": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "PUSH1", "path": "3", "value": "0x0"}, "1549": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "MSTORE", "path": "3"}, "1550": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "PUSH1", "path": "3", "value": "0x21"}, "1552": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "PUSH1", "path": "3", "value": "0x4"}, "1554": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "MSTORE", "path": "3"}, "1555": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "PUSH1", "path": "3", "value": "0x24"}, "1557": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "PUSH1", "path": "3", "value": "0x0"}, "1559": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "REVERT", "path": "3"}, "1560": {"fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "JUMPDEST", "path": "3"}, "1561": {"branch": 61, "fn": "SimpleSwap.swap", "offset": [2509, 2536], "op": "EQ", "path": "3"}, "1562": {"fn": "SimpleSwap.swap", "offset": [2505, 3073], "op": "ISZERO", "path": "3"}, "1563": {"fn": "SimpleSwap.swap", "offset": [2505, 3073], "op": "PUSH2", "path": "3", "value": "0x658"}, "1566": {"branch": 61, "fn": "SimpleSwap.swap", "offset": [2505, 3073], "op": "JUMPI", "path": "3"}, "1567": {"fn": "SimpleSwap.swap", "offset": [2574, 2592], "op": "PUSH1", "path": "3", "statement": 19, "value": "0x3"}, "1569": {"fn": "SimpleSwap.swap", "offset": [2574, 2592], "op": "SLOAD", "path": "3"}, "1570": {"fn": "SimpleSwap.swap", "offset": [2574, 2615], "op": "PUSH2", "path": "3", "value": "0x62B"}, "1573": {"fn": "SimpleSwap.swap", "offset": [2574, 2615], "op": "SWAP1", "path": "3"}, "1574": {"fn": "SimpleSwap.swap", "offset": [2597, 2614], "op": "DUP8", "path": "3"}, "1575": {"fn": "SimpleSwap.swap", "offset": [2574, 2596], "op": "PUSH2", "path": "3", "value": "0xB34"}, "1578": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2574, 2615], "op": "JUMP", "path": "3"}, "1579": {"fn": "SimpleSwap.swap", "offset": [2574, 2615], "op": "JUMPDEST", "path": "3"}, "1580": {"fn": "SimpleSwap.swap", "offset": [2552, 2570], "op": "PUSH1", "path": "3", "value": "0x3"}, "1582": {"fn": "SimpleSwap.swap", "offset": [2552, 2615], "op": "SSTORE", "path": "3"}, "1583": {"fn": "SimpleSwap.swap", "offset": [2650, 2668], "op": "PUSH1", "path": "3", "statement": 20, "value": "0x4"}, "1585": {"fn": "SimpleSwap.swap", "offset": [2650, 2668], "op": "SLOAD", "path": "3"}, "1586": {"fn": "SimpleSwap.swap", "offset": [2650, 2694], "op": "PUSH2", "path": "3", "value": "0x63B"}, "1589": {"fn": "SimpleSwap.swap", "offset": [2650, 2694], "op": "SWAP1", "path": "3"}, "1590": {"fn": "SimpleSwap.swap", "offset": [2673, 2693], "op": "DUP5", "path": "3"}, "1591": {"fn": "SimpleSwap.swap", "offset": [2650, 2672], "op": "PUSH2", "path": "3", "value": "0xB28"}, "1594": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2650, 2694], "op": "JUMP", "path": "3"}, "1595": {"fn": "SimpleSwap.swap", "offset": [2650, 2694], "op": "JUMPDEST", "path": "3"}, "1596": {"fn": "SimpleSwap.swap", "offset": [2629, 2647], "op": "PUSH1", "path": "3", "value": "0x4"}, "1598": {"fn": "SimpleSwap.swap", "offset": [2629, 2694], "op": "SSTORE", "path": "3"}, "1599": {"op": "POP"}, "1600": {"op": "POP"}, "1601": {"fn": "SimpleSwap.swap", "offset": [2728, 2739], "op": "PUSH1", "path": "3", "statement": 21, "value": "0x1"}, "1603": {"fn": "SimpleSwap.swap", "offset": [2728, 2739], "op": "SLOAD", "path": "3"}, "1604": {"fn": "SimpleSwap.swap", "offset": [2775, 2786], "op": "PUSH1", "path": "3", "statement": 22, "value": "0x2"}, "1606": {"fn": "SimpleSwap.swap", "offset": [2775, 2786], "op": "SLOAD", "path": "3"}, "1607": {"op": "PUSH1", "value": "0x1"}, "1609": {"op": "PUSH1", "value": "0x1"}, "1611": {"op": "PUSH1", "value": "0xA0"}, "1613": {"op": "SHL"}, "1614": {"op": "SUB"}, "1615": {"fn": "SimpleSwap.swap", "offset": [2728, 2739], "op": "SWAP2", "path": "3"}, "1616": {"fn": "SimpleSwap.swap", "offset": [2728, 2739], "op": "DUP3", "path": "3"}, "1617": {"fn": "SimpleSwap.swap", "offset": [2728, 2739], "op": "AND", "path": "3"}, "1618": {"fn": "SimpleSwap.swap", "offset": [2728, 2739], "op": "SWAP2", "path": "3"}, "1619": {"fn": "SimpleSwap.swap", "offset": [2775, 2786], "op": "AND", "path": "3"}, "1620": {"fn": "SimpleSwap.swap", "offset": [2505, 3073], "op": "PUSH2", "path": "3", "value": "0x68E"}, "1623": {"fn": "SimpleSwap.swap", "offset": [2505, 3073], "op": "JUMP", "path": "3"}, "1624": {"fn": "SimpleSwap.swap", "offset": [2505, 3073], "op": "JUMPDEST", "path": "3"}, "1625": {"fn": "SimpleSwap.swap", "offset": [2848, 2866], "op": "PUSH1", "path": "3", "statement": 23, "value": "0x3"}, "1627": {"fn": "SimpleSwap.swap", "offset": [2848, 2866], "op": "SLOAD", "path": "3"}, "1628": {"fn": "SimpleSwap.swap", "offset": [2848, 2892], "op": "PUSH2", "path": "3", "value": "0x665"}, "1631": {"fn": "SimpleSwap.swap", "offset": [2848, 2892], "op": "SWAP1", "path": "3"}, "1632": {"fn": "SimpleSwap.swap", "offset": [2871, 2891], "op": "DUP5", "path": "3"}, "1633": {"fn": "SimpleSwap.swap", "offset": [2848, 2870], "op": "PUSH2", "path": "3", "value": "0xB28"}, "1636": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2848, 2892], "op": "JUMP", "path": "3"}, "1637": {"fn": "SimpleSwap.swap", "offset": [2848, 2892], "op": "JUMPDEST", "path": "3"}, "1638": {"fn": "SimpleSwap.swap", "offset": [2827, 2845], "op": "PUSH1", "path": "3", "value": "0x3"}, "1640": {"fn": "SimpleSwap.swap", "offset": [2827, 2892], "op": "SSTORE", "path": "3"}, "1641": {"fn": "SimpleSwap.swap", "offset": [2927, 2945], "op": "PUSH1", "path": "3", "statement": 24, "value": "0x4"}, "1643": {"fn": "SimpleSwap.swap", "offset": [2927, 2945], "op": "SLOAD", "path": "3"}, "1644": {"fn": "SimpleSwap.swap", "offset": [2927, 2968], "op": "PUSH2", "path": "3", "value": "0x675"}, "1647": {"fn": "SimpleSwap.swap", "offset": [2927, 2968], "op": "SWAP1", "path": "3"}, "1648": {"fn": "SimpleSwap.swap", "offset": [2950, 2967], "op": "DUP8", "path": "3"}, "1649": {"fn": "SimpleSwap.swap", "offset": [2927, 2949], "op": "PUSH2", "path": "3", "value": "0xB34"}, "1652": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2927, 2968], "op": "JUMP", "path": "3"}, "1653": {"fn": "SimpleSwap.swap", "offset": [2927, 2968], "op": "JUMPDEST", "path": "3"}, "1654": {"fn": "SimpleSwap.swap", "offset": [2906, 2924], "op": "PUSH1", "path": "3", "value": "0x4"}, "1656": {"fn": "SimpleSwap.swap", "offset": [2906, 2968], "op": "SSTORE", "path": "3"}, "1657": {"op": "POP"}, "1658": {"op": "POP"}, "1659": {"fn": "SimpleSwap.swap", "offset": [3002, 3013], "op": "PUSH1", "path": "3", "statement": 25, "value": "0x2"}, "1661": {"fn": "SimpleSwap.swap", "offset": [3002, 3013], "op": "SLOAD", "path": "3"}, "1662": {"fn": "SimpleSwap.swap", "offset": [3002, 3013], "op": "PUSH1", "path": "3", "value": "0x1"}, "1664": {"fn": "SimpleSwap.swap", "offset": [3050, 3061], "op": "SLOAD", "path": "3", "statement": 26}, "1665": {"op": "PUSH1", "value": "0x1"}, "1667": {"op": "PUSH1", "value": "0x1"}, "1669": {"op": "PUSH1", "value": "0xA0"}, "1671": {"op": "SHL"}, "1672": {"op": "SUB"}, "1673": {"fn": "SimpleSwap.swap", "offset": [3002, 3013], "op": "SWAP2", "path": "3"}, "1674": {"fn": "SimpleSwap.swap", "offset": [3002, 3013], "op": "DUP3", "path": "3"}, "1675": {"fn": "SimpleSwap.swap", "offset": [3002, 3013], "op": "AND", "path": "3"}, "1676": {"fn": "SimpleSwap.swap", "offset": [3002, 3013], "op": "SWAP2", "path": "3"}, "1677": {"fn": "SimpleSwap.swap", "offset": [3050, 3061], "op": "AND", "path": "3"}, "1678": {"fn": "SimpleSwap.swap", "offset": [2505, 3073], "op": "JUMPDEST", "path": "3"}, "1679": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH1", "path": "3", "statement": 27, "value": "0x40"}, "1681": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "MLOAD", "path": "3"}, "1682": {"op": "PUSH4", "value": "0xA9059CBB"}, "1687": {"op": "PUSH1", "value": "0xE0"}, "1689": {"op": "SHL"}, "1690": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP2", "path": "3"}, "1691": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "MSTORE", "path": "3"}, "1692": {"op": "PUSH1", "value": "0x1"}, "1694": {"op": "PUSH1", "value": "0x1"}, "1696": {"op": "PUSH1", "value": "0xA0"}, "1698": {"op": "SHL"}, "1699": {"op": "SUB"}, "1700": {"fn": "SimpleSwap.swap", "offset": [3099, 3119], "op": "DUP3", "path": "3"}, "1701": {"fn": "SimpleSwap.swap", "offset": [3099, 3119], "op": "AND", "path": "3"}, "1702": {"fn": "SimpleSwap.swap", "offset": [3099, 3119], "op": "SWAP1", "path": "3"}, "1703": {"fn": "SimpleSwap.swap", "offset": [3099, 3119], "op": "PUSH4", "path": "3", "value": "0xA9059CBB"}, "1708": {"fn": "SimpleSwap.swap", "offset": [3099, 3119], "op": "SWAP1", "path": "3"}, "1709": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH2", "path": "3", "value": "0x6BC"}, "1712": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "SWAP1", "path": "3"}, "1713": {"fn": "SimpleSwap.swap", "offset": [3120, 3130], "op": "CALLER", "path": "3"}, "1714": {"fn": "SimpleSwap.swap", "offset": [3120, 3130], "op": "SWAP1", "path": "3"}, "1715": {"fn": "SimpleSwap.swap", "offset": [3132, 3152], "op": "DUP8", "path": "3"}, "1716": {"fn": "SimpleSwap.swap", "offset": [3132, 3152], "op": "SWAP1", "path": "3"}, "1717": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH1", "path": "3", "value": "0x4"}, "1719": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "ADD", "path": "3"}, "1720": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH2", "path": "3", "value": "0xD5E"}, "1723": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3099, 3153], "op": "JUMP", "path": "3"}, "1724": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "JUMPDEST", "path": "3"}, "1725": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH1", "path": "3", "value": "0x20"}, "1727": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH1", "path": "3", "value": "0x40"}, "1729": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "MLOAD", "path": "3"}, "1730": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP1", "path": "3"}, "1731": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP4", "path": "3"}, "1732": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "SUB", "path": "3"}, "1733": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP2", "path": "3"}, "1734": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH1", "path": "3", "value": "0x0"}, "1736": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP8", "path": "3"}, "1737": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP1", "path": "3"}, "1738": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "EXTCODESIZE", "path": "3"}, "1739": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "ISZERO", "path": "3"}, "1740": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP1", "path": "3"}, "1741": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "ISZERO", "path": "3"}, "1742": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH2", "path": "3", "value": "0x6D6"}, "1745": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "JUMPI", "path": "3"}, "1746": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH1", "path": "3", "value": "0x0"}, "1748": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP1", "path": "3"}, "1749": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "REVERT", "path": "3"}, "1750": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "JUMPDEST", "path": "3"}, "1751": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "POP", "path": "3"}, "1752": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "GAS", "path": "3"}, "1753": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "CALL", "path": "3"}, "1754": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "ISZERO", "path": "3"}, "1755": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP1", "path": "3"}, "1756": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "ISZERO", "path": "3"}, "1757": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH2", "path": "3", "value": "0x6EA"}, "1760": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "JUMPI", "path": "3"}, "1761": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "RETURNDATASIZE", "path": "3"}, "1762": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH1", "path": "3", "value": "0x0"}, "1764": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP1", "path": "3"}, "1765": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "RETURNDATACOPY", "path": "3"}, "1766": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "RETURNDATASIZE", "path": "3"}, "1767": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH1", "path": "3", "value": "0x0"}, "1769": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "REVERT", "path": "3"}, "1770": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "JUMPDEST", "path": "3"}, "1771": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "POP", "path": "3"}, "1772": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "POP", "path": "3"}, "1773": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "POP", "path": "3"}, "1774": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "POP", "path": "3"}, "1775": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH1", "path": "3", "value": "0x40"}, "1777": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "MLOAD", "path": "3"}, "1778": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "RETURNDATASIZE", "path": "3"}, "1779": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1781": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "NOT", "path": "3"}, "1782": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1784": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP3", "path": "3"}, "1785": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "ADD", "path": "3"}, "1786": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "AND", "path": "3"}, "1787": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP3", "path": "3"}, "1788": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "ADD", "path": "3"}, "1789": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP1", "path": "3"}, "1790": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH1", "path": "3", "value": "0x40"}, "1792": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "MSTORE", "path": "3"}, "1793": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "POP", "path": "3"}, "1794": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "DUP2", "path": "3"}, "1795": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "ADD", "path": "3"}, "1796": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "SWAP1", "path": "3"}, "1797": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH2", "path": "3", "value": "0x70E"}, "1800": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "SWAP2", "path": "3"}, "1801": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "SWAP1", "path": "3"}, "1802": {"fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "PUSH2", "path": "3", "value": "0xC92"}, "1805": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3099, 3153], "op": "JUMP", "path": "3"}, "1806": {"branch": 62, "fn": "SimpleSwap.swap", "offset": [3099, 3153], "op": "JUMPDEST", "path": "3"}, "1807": {"fn": "SimpleSwap.swap", "offset": [3091, 3183], "op": "PUSH2", "path": "3", "value": "0x72A"}, "1810": {"branch": 62, "fn": "SimpleSwap.swap", "offset": [3091, 3183], "op": "JUMPI", "path": "3"}, "1811": {"fn": "SimpleSwap.swap", "offset": [3091, 3183], "op": "PUSH1", "path": "3", "value": "0x40"}, "1813": {"fn": "SimpleSwap.swap", "offset": [3091, 3183], "op": "MLOAD", "path": "3"}, "1814": {"op": "PUSH3", "value": "0x461BCD"}, "1818": {"op": "PUSH1", "value": "0xE5"}, "1820": {"op": "SHL"}, "1821": {"fn": "SimpleSwap.swap", "offset": [3091, 3183], "op": "DUP2", "path": "3"}, "1822": {"fn": "SimpleSwap.swap", "offset": [3091, 3183], "op": "MSTORE", "path": "3"}, "1823": {"fn": "SimpleSwap.swap", "offset": [3091, 3183], "op": "PUSH1", "path": "3", "value": "0x4"}, "1825": {"fn": "SimpleSwap.swap", "offset": [3091, 3183], "op": "ADD", "path": "3"}, "1826": {"fn": "SimpleSwap.swap", "offset": [3091, 3183], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1829": {"fn": "SimpleSwap.swap", "offset": [3091, 3183], "op": "SWAP1", "path": "3"}, "1830": {"fn": "SimpleSwap.swap", "offset": [3091, 3183], "op": "PUSH2", "path": "3", "value": "0xFAE"}, "1833": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3091, 3183], "op": "JUMP", "path": "3"}, "1834": {"fn": "SimpleSwap.swap", "offset": [3091, 3183], "op": "JUMPDEST", "path": "3"}, "1835": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH1", "path": "3", "statement": 28, "value": "0x40"}, "1837": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "MLOAD", "path": "3"}, "1838": {"op": "PUSH4", "value": "0x23B872DD"}, "1843": {"op": "PUSH1", "value": "0xE0"}, "1845": {"op": "SHL"}, "1846": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP2", "path": "3"}, "1847": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "MSTORE", "path": "3"}, "1848": {"op": "PUSH1", "value": "0x1"}, "1850": {"op": "PUSH1", "value": "0x1"}, "1852": {"op": "PUSH1", "value": "0xA0"}, "1854": {"op": "SHL"}, "1855": {"op": "SUB"}, "1856": {"fn": "SimpleSwap.swap", "offset": [3201, 3223], "op": "DUP4", "path": "3"}, "1857": {"fn": "SimpleSwap.swap", "offset": [3201, 3223], "op": "AND", "path": "3"}, "1858": {"fn": "SimpleSwap.swap", "offset": [3201, 3223], "op": "SWAP1", "path": "3"}, "1859": {"fn": "SimpleSwap.swap", "offset": [3201, 3223], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "1864": {"fn": "SimpleSwap.swap", "offset": [3201, 3223], "op": "SWAP1", "path": "3"}, "1865": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH2", "path": "3", "value": "0x75A"}, "1868": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "SWAP1", "path": "3"}, "1869": {"fn": "SimpleSwap.swap", "offset": [3224, 3234], "op": "CALLER", "path": "3"}, "1870": {"fn": "SimpleSwap.swap", "offset": [3224, 3234], "op": "SWAP1", "path": "3"}, "1871": {"fn": "SimpleSwap.swap", "offset": [3244, 3248], "op": "ADDRESS", "path": "3"}, "1872": {"fn": "SimpleSwap.swap", "offset": [3244, 3248], "op": "SWAP1", "path": "3"}, "1873": {"fn": "SimpleSwap.swap", "offset": [3251, 3268], "op": "DUP12", "path": "3"}, "1874": {"fn": "SimpleSwap.swap", "offset": [3251, 3268], "op": "SWAP1", "path": "3"}, "1875": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH1", "path": "3", "value": "0x4"}, "1877": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "ADD", "path": "3"}, "1878": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH2", "path": "3", "value": "0xD3A"}, "1881": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3201, 3269], "op": "JUMP", "path": "3"}, "1882": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "JUMPDEST", "path": "3"}, "1883": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH1", "path": "3", "value": "0x20"}, "1885": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH1", "path": "3", "value": "0x40"}, "1887": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "MLOAD", "path": "3"}, "1888": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP1", "path": "3"}, "1889": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP4", "path": "3"}, "1890": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "SUB", "path": "3"}, "1891": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP2", "path": "3"}, "1892": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH1", "path": "3", "value": "0x0"}, "1894": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP8", "path": "3"}, "1895": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP1", "path": "3"}, "1896": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "EXTCODESIZE", "path": "3"}, "1897": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "ISZERO", "path": "3"}, "1898": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP1", "path": "3"}, "1899": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "ISZERO", "path": "3"}, "1900": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH2", "path": "3", "value": "0x774"}, "1903": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "JUMPI", "path": "3"}, "1904": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH1", "path": "3", "value": "0x0"}, "1906": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP1", "path": "3"}, "1907": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "REVERT", "path": "3"}, "1908": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "JUMPDEST", "path": "3"}, "1909": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "POP", "path": "3"}, "1910": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "GAS", "path": "3"}, "1911": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "CALL", "path": "3"}, "1912": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "ISZERO", "path": "3"}, "1913": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP1", "path": "3"}, "1914": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "ISZERO", "path": "3"}, "1915": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH2", "path": "3", "value": "0x788"}, "1918": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "JUMPI", "path": "3"}, "1919": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "RETURNDATASIZE", "path": "3"}, "1920": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH1", "path": "3", "value": "0x0"}, "1922": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP1", "path": "3"}, "1923": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "RETURNDATACOPY", "path": "3"}, "1924": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "RETURNDATASIZE", "path": "3"}, "1925": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH1", "path": "3", "value": "0x0"}, "1927": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "REVERT", "path": "3"}, "1928": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "JUMPDEST", "path": "3"}, "1929": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "POP", "path": "3"}, "1930": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "POP", "path": "3"}, "1931": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "POP", "path": "3"}, "1932": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "POP", "path": "3"}, "1933": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH1", "path": "3", "value": "0x40"}, "1935": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "MLOAD", "path": "3"}, "1936": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "RETURNDATASIZE", "path": "3"}, "1937": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1939": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "NOT", "path": "3"}, "1940": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1942": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP3", "path": "3"}, "1943": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "ADD", "path": "3"}, "1944": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "AND", "path": "3"}, "1945": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP3", "path": "3"}, "1946": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "ADD", "path": "3"}, "1947": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP1", "path": "3"}, "1948": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH1", "path": "3", "value": "0x40"}, "1950": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "MSTORE", "path": "3"}, "1951": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "POP", "path": "3"}, "1952": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "DUP2", "path": "3"}, "1953": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "ADD", "path": "3"}, "1954": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "SWAP1", "path": "3"}, "1955": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH2", "path": "3", "value": "0x7AC"}, "1958": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "SWAP2", "path": "3"}, "1959": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "SWAP1", "path": "3"}, "1960": {"fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "PUSH2", "path": "3", "value": "0xC92"}, "1963": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3201, 3269], "op": "JUMP", "path": "3"}, "1964": {"branch": 63, "fn": "SimpleSwap.swap", "offset": [3201, 3269], "op": "JUMPDEST", "path": "3"}, "1965": {"fn": "SimpleSwap.swap", "offset": [3193, 3299], "op": "PUSH2", "path": "3", "value": "0x7C8"}, "1968": {"branch": 63, "fn": "SimpleSwap.swap", "offset": [3193, 3299], "op": "JUMPI", "path": "3"}, "1969": {"fn": "SimpleSwap.swap", "offset": [3193, 3299], "op": "PUSH1", "path": "3", "value": "0x40"}, "1971": {"fn": "SimpleSwap.swap", "offset": [3193, 3299], "op": "MLOAD", "path": "3"}, "1972": {"op": "PUSH3", "value": "0x461BCD"}, "1976": {"op": "PUSH1", "value": "0xE5"}, "1978": {"op": "SHL"}, "1979": {"fn": "SimpleSwap.swap", "offset": [3193, 3299], "op": "DUP2", "path": "3"}, "1980": {"fn": "SimpleSwap.swap", "offset": [3193, 3299], "op": "MSTORE", "path": "3"}, "1981": {"fn": "SimpleSwap.swap", "offset": [3193, 3299], "op": "PUSH1", "path": "3", "value": "0x4"}, "1983": {"fn": "SimpleSwap.swap", "offset": [3193, 3299], "op": "ADD", "path": "3"}, "1984": {"fn": "SimpleSwap.swap", "offset": [3193, 3299], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1987": {"fn": "SimpleSwap.swap", "offset": [3193, 3299], "op": "SWAP1", "path": "3"}, "1988": {"fn": "SimpleSwap.swap", "offset": [3193, 3299], "op": "PUSH2", "path": "3", "value": "0xFAE"}, "1991": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3193, 3299], "op": "JUMP", "path": "3"}, "1992": {"fn": "SimpleSwap.swap", "offset": [3193, 3299], "op": "JUMPDEST", "path": "3"}, "1993": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "POP", "path": "3"}, "1994": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "POP", "path": "3"}, "1995": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "POP", "path": "3"}, "1996": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "POP", "path": "3"}, "1997": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "POP", "path": "3"}, "1998": {"fn": "SimpleSwap.swap", "offset": [2044, 3307], "op": "POP", "path": "3"}, "1999": {"fn": "SimpleSwap.swap", "jump": "o", "offset": [2044, 3307], "op": "JUMP", "path": "3"}, "2000": {"offset": [862, 899], "op": "JUMPDEST", "path": "3"}, "2001": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH1", "path": "3", "value": "0x3"}, "2003": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SLOAD", "path": "3"}, "2004": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "DUP2", "path": "3"}, "2005": {"fn": "SimpleSwap.swap", "jump": "o", "offset": [862, 899], "op": "JUMP", "path": "3"}, "2006": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "JUMPDEST", "path": "3"}, "2007": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6493, 6500], "op": "PUSH1", "path": "3", "value": "0x0"}, "2009": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6502, 6509], "op": "DUP1", "path": "3"}, "2010": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6534, 6584], "op": "PUSH2", "path": "3", "statement": 29, "value": "0x7F7"}, "2013": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6570, 6583], "op": "PUSH1", "path": "3", "value": "0x5"}, "2015": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6570, 6583], "op": "SLOAD", "path": "3"}, "2016": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6534, 6565], "op": "PUSH2", "path": "3", "value": "0x220"}, "2019": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6557, 6564], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "2023": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6534, 6552], "op": "PUSH1", "path": "3", "value": "0x3"}, "2025": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6534, 6552], "op": "SLOAD", "path": "3"}, "2026": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6534, 6556], "op": "PUSH2", "path": "3", "value": "0xB09"}, "2029": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6534, 6556], "op": "SWAP1", "path": "3"}, "2030": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6534, 6565], "op": "SWAP2", "path": "3"}, "2031": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6534, 6565], "op": "SWAP1", "path": "3"}, "2032": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6534, 6565], "op": "PUSH4", "path": "3", "value": "0xFFFFFFFF"}, "2037": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6534, 6565], "op": "AND", "path": "3"}, "2038": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "i", "offset": [6534, 6565], "op": "JUMP", "path": "3"}, "2039": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6534, 6584], "op": "JUMPDEST", "path": "3"}, "2040": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6586, 6636], "op": "PUSH2", "path": "3", "value": "0x815"}, "2043": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6622, 6635], "op": "PUSH1", "path": "3", "value": "0x5"}, "2045": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6622, 6635], "op": "SLOAD", "path": "3"}, "2046": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6586, 6617], "op": "PUSH2", "path": "3", "value": "0x220"}, "2049": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6609, 6616], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "2053": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6586, 6604], "op": "PUSH1", "path": "3", "value": "0x4"}, "2055": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6586, 6604], "op": "SLOAD", "path": "3"}, "2056": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6586, 6608], "op": "PUSH2", "path": "3", "value": "0xB09"}, "2059": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6586, 6608], "op": "SWAP1", "path": "3"}, "2060": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6586, 6617], "op": "SWAP2", "path": "3"}, "2061": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6586, 6617], "op": "SWAP1", "path": "3"}, "2062": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6586, 6617], "op": "PUSH4", "path": "3", "value": "0xFFFFFFFF"}, "2067": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6586, 6617], "op": "AND", "path": "3"}, "2068": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "i", "offset": [6586, 6617], "op": "JUMP", "path": "3"}, "2069": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6586, 6636], "op": "JUMPDEST", "path": "3"}, "2070": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6526, 6637], "op": "SWAP2", "path": "3"}, "2071": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6526, 6637], "op": "POP", "path": "3"}, "2072": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6526, 6637], "op": "SWAP2", "path": "3"}, "2073": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6526, 6637], "op": "POP", "path": "3"}, "2074": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "SWAP1", "path": "3"}, "2075": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6446, 6644], "op": "SWAP2", "path": "3"}, "2076": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "o", "offset": [6446, 6644], "op": "JUMP", "path": "3"}, "2077": {"fn": "Ownable.renounceOwnership", "offset": [1605, 1697], "op": "JUMPDEST", "path": "0"}, "2078": {"offset": [1196, 1208], "op": "PUSH2", "path": "0", "value": "0x825"}, "2081": {"offset": [1196, 1206], "op": "PUSH2", "path": "0", "value": "0xC17"}, "2084": {"jump": "i", "offset": [1196, 1208], "op": "JUMP", "path": "0"}, "2085": {"fn": "Ownable.renounceOwnership", "offset": [1196, 1208], "op": "JUMPDEST", "path": "0"}, "2086": {"op": "PUSH1", "value": "0x1"}, "2088": {"op": "PUSH1", "value": "0x1"}, "2090": {"op": "PUSH1", "value": "0xA0"}, "2092": {"op": "SHL"}, "2093": {"op": "SUB"}, "2094": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2095": {"offset": [1185, 1192], "op": "PUSH2", "path": "0", "value": "0x836"}, "2098": {"offset": [1185, 1190], "op": "PUSH2", "path": "0", "value": "0x86E"}, "2101": {"jump": "i", "offset": [1185, 1192], "op": "JUMP", "path": "0"}, "2102": {"fn": "Ownable.renounceOwnership", "offset": [1185, 1192], "op": "JUMPDEST", "path": "0"}, "2103": {"op": "PUSH1", "value": "0x1"}, "2105": {"op": "PUSH1", "value": "0x1"}, "2107": {"op": "PUSH1", "value": "0xA0"}, "2109": {"op": "SHL"}, "2110": {"op": "SUB"}, "2111": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2112": {"fn": "Ownable.renounceOwnership", "offset": [1185, 1208], "op": "EQ", "path": "0"}, "2113": {"offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x85C"}, "2116": {"offset": [1177, 1245], "op": "JUMPI", "path": "0"}, "2117": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x40"}, "2119": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "MLOAD", "path": "0"}, "2120": {"op": "PUSH3", "value": "0x461BCD"}, "2124": {"op": "PUSH1", "value": "0xE5"}, "2126": {"op": "SHL"}, "2127": {"offset": [1177, 1245], "op": "DUP2", "path": "0"}, "2128": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "MSTORE", "path": "0"}, "2129": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x4"}, "2131": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "ADD", "path": "0"}, "2132": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1A5"}, "2135": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "SWAP1", "path": "0"}, "2136": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0xF79"}, "2139": {"fn": "Ownable.renounceOwnership", "jump": "i", "offset": [1177, 1245], "op": "JUMP", "path": "0"}, "2140": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "JUMPDEST", "path": "0"}, "2141": {"fn": "Ownable.renounceOwnership", "offset": [1669, 1690], "op": "PUSH2", "path": "0", "statement": 30, "value": "0x866"}, "2144": {"fn": "Ownable.renounceOwnership", "offset": [1687, 1688], "op": "PUSH1", "path": "0", "value": "0x0"}, "2146": {"fn": "Ownable.renounceOwnership", "offset": [1669, 1678], "op": "PUSH2", "path": "0", "value": "0xC1B"}, "2149": {"fn": "Ownable.renounceOwnership", "jump": "i", "offset": [1669, 1690], "op": "JUMP", "path": "0"}, "2150": {"fn": "Ownable.renounceOwnership", "offset": [1669, 1690], "op": "JUMPDEST", "path": "0"}, "2151": {"fn": "Ownable.renounceOwnership", "jump": "o", "offset": [1605, 1697], "op": "JUMP", "path": "0"}, "2152": {"offset": [986, 1019], "op": "JUMPDEST", "path": "3"}, "2153": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "PUSH1", "path": "3", "value": "0x5"}, "2155": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "SLOAD", "path": "3"}, "2156": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "DUP2", "path": "3"}, "2157": {"fn": "Ownable.renounceOwnership", "jump": "o", "offset": [986, 1019], "op": "JUMP", "path": "3"}, "2158": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "JUMPDEST", "path": "0"}, "2159": {"fn": "Ownable.owner", "offset": [1019, 1026], "op": "PUSH1", "path": "0", "value": "0x0"}, "2161": {"fn": "Ownable.owner", "offset": [1045, 1051], "op": "SLOAD", "path": "0", "statement": 31}, "2162": {"op": "PUSH1", "value": "0x1"}, "2164": {"op": "PUSH1", "value": "0x1"}, "2166": {"op": "PUSH1", "value": "0xA0"}, "2168": {"op": "SHL"}, "2169": {"op": "SUB"}, "2170": {"fn": "Ownable.owner", "offset": [1045, 1051], "op": "AND", "path": "0"}, "2171": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "SWAP1", "path": "0"}, "2172": {"fn": "Ownable.owner", "jump": "o", "offset": [973, 1058], "op": "JUMP", "path": "0"}, "2173": {"offset": [924, 961], "op": "JUMPDEST", "path": "3"}, "2174": {"fn": "Ownable.owner", "offset": [924, 961], "op": "PUSH1", "path": "3", "value": "0x4"}, "2176": {"fn": "Ownable.owner", "offset": [924, 961], "op": "SLOAD", "path": "3"}, "2177": {"fn": "Ownable.owner", "offset": [924, 961], "op": "DUP2", "path": "3"}, "2178": {"fn": "Ownable.owner", "jump": "o", "offset": [924, 961], "op": "JUMP", "path": "3"}, "2179": {"offset": [1049, 1081], "op": "JUMPDEST", "path": "3"}, "2180": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "PUSH1", "path": "3", "value": "0x6"}, "2182": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "SLOAD", "path": "3"}, "2183": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "DUP2", "path": "3"}, "2184": {"fn": "Ownable.owner", "jump": "o", "offset": [1049, 1081], "op": "JUMP", "path": "3"}, "2185": {"fn": "SimpleSwap.initiatePool", "offset": [1202, 2012], "op": "JUMPDEST", "path": "3"}, "2186": {"offset": [1196, 1208], "op": "PUSH2", "path": "0", "value": "0x891"}, "2189": {"offset": [1196, 1206], "op": "PUSH2", "path": "0", "value": "0xC17"}, "2192": {"jump": "i", "offset": [1196, 1208], "op": "JUMP", "path": "0"}, "2193": {"fn": "SimpleSwap.initiatePool", "offset": [1196, 1208], "op": "JUMPDEST", "path": "0"}, "2194": {"op": "PUSH1", "value": "0x1"}, "2196": {"op": "PUSH1", "value": "0x1"}, "2198": {"op": "PUSH1", "value": "0xA0"}, "2200": {"op": "SHL"}, "2201": {"op": "SUB"}, "2202": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2203": {"offset": [1185, 1192], "op": "PUSH2", "path": "0", "value": "0x8A2"}, "2206": {"offset": [1185, 1190], "op": "PUSH2", "path": "0", "value": "0x86E"}, "2209": {"jump": "i", "offset": [1185, 1192], "op": "JUMP", "path": "0"}, "2210": {"fn": "SimpleSwap.initiatePool", "offset": [1185, 1192], "op": "JUMPDEST", "path": "0"}, "2211": {"op": "PUSH1", "value": "0x1"}, "2213": {"op": "PUSH1", "value": "0x1"}, "2215": {"op": "PUSH1", "value": "0xA0"}, "2217": {"op": "SHL"}, "2218": {"op": "SUB"}, "2219": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2220": {"fn": "SimpleSwap.initiatePool", "offset": [1185, 1208], "op": "EQ", "path": "0"}, "2221": {"offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x8C8"}, "2224": {"offset": [1177, 1245], "op": "JUMPI", "path": "0"}, "2225": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x40"}, "2227": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "MLOAD", "path": "0"}, "2228": {"op": "PUSH3", "value": "0x461BCD"}, "2232": {"op": "PUSH1", "value": "0xE5"}, "2234": {"op": "SHL"}, "2235": {"offset": [1177, 1245], "op": "DUP2", "path": "0"}, "2236": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "MSTORE", "path": "0"}, "2237": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x4"}, "2239": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "ADD", "path": "0"}, "2240": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1A5"}, "2243": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "SWAP1", "path": "0"}, "2244": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0xF79"}, "2247": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1177, 1245], "op": "JUMP", "path": "0"}, "2248": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "JUMPDEST", "path": "0"}, "2249": {"fn": "SimpleSwap.initiatePool", "offset": [1316, 1331], "op": "PUSH1", "path": "3", "statement": 32, "value": "0x7"}, "2251": {"fn": "SimpleSwap.initiatePool", "offset": [1316, 1331], "op": "SLOAD", "path": "3"}, "2252": {"fn": "SimpleSwap.initiatePool", "offset": [1316, 1331], "op": "PUSH1", "path": "3", "value": "0xFF"}, "2254": {"fn": "SimpleSwap.initiatePool", "offset": [1316, 1331], "op": "AND", "path": "3"}, "2255": {"branch": 64, "fn": "SimpleSwap.initiatePool", "offset": [1315, 1331], "op": "ISZERO", "path": "3"}, "2256": {"fn": "SimpleSwap.initiatePool", "offset": [1307, 1366], "op": "PUSH2", "path": "3", "value": "0x8EB"}, "2259": {"branch": 64, "fn": "SimpleSwap.initiatePool", "offset": [1307, 1366], "op": "JUMPI", "path": "3"}, "2260": {"fn": "SimpleSwap.initiatePool", "offset": [1307, 1366], "op": "PUSH1", "path": "3", "value": "0x40"}, "2262": {"fn": "SimpleSwap.initiatePool", "offset": [1307, 1366], "op": "MLOAD", "path": "3"}, "2263": {"op": "PUSH3", "value": "0x461BCD"}, "2267": {"op": "PUSH1", "value": "0xE5"}, "2269": {"op": "SHL"}, "2270": {"fn": "SimpleSwap.initiatePool", "offset": [1307, 1366], "op": "DUP2", "path": "3"}, "2271": {"fn": "SimpleSwap.initiatePool", "offset": [1307, 1366], "op": "MSTORE", "path": "3"}, "2272": {"fn": "SimpleSwap.initiatePool", "offset": [1307, 1366], "op": "PUSH1", "path": "3", "value": "0x4"}, "2274": {"fn": "SimpleSwap.initiatePool", "offset": [1307, 1366], "op": "ADD", "path": "3"}, "2275": {"fn": "SimpleSwap.initiatePool", "offset": [1307, 1366], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "2278": {"fn": "SimpleSwap.initiatePool", "offset": [1307, 1366], "op": "SWAP1", "path": "3"}, "2279": {"fn": "SimpleSwap.initiatePool", "offset": [1307, 1366], "op": "PUSH2", "path": "3", "value": "0xDBD"}, "2282": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1307, 1366], "op": "JUMP", "path": "3"}, "2283": {"fn": "SimpleSwap.initiatePool", "offset": [1307, 1366], "op": "JUMPDEST", "path": "3"}, "2284": {"fn": "SimpleSwap.initiatePool", "offset": [1376, 1391], "op": "PUSH1", "path": "3", "statement": 33, "value": "0x7"}, "2286": {"fn": "SimpleSwap.initiatePool", "offset": [1376, 1398], "op": "DUP1", "path": "3"}, "2287": {"fn": "SimpleSwap.initiatePool", "offset": [1376, 1398], "op": "SLOAD", "path": "3"}, "2288": {"op": "PUSH1", "value": "0xFF"}, "2290": {"op": "NOT"}, "2291": {"fn": "SimpleSwap.initiatePool", "offset": [1376, 1398], "op": "AND", "path": "3"}, "2292": {"fn": "SimpleSwap.initiatePool", "offset": [1394, 1398], "op": "PUSH1", "path": "3", "value": "0x1"}, "2294": {"fn": "SimpleSwap.initiatePool", "offset": [1376, 1398], "op": "SWAP1", "path": "3"}, "2295": {"fn": "SimpleSwap.initiatePool", "offset": [1376, 1398], "op": "DUP2", "path": "3"}, "2296": {"fn": "SimpleSwap.initiatePool", "offset": [1376, 1398], "op": "OR", "path": "3"}, "2297": {"fn": "SimpleSwap.initiatePool", "offset": [1376, 1398], "op": "SWAP1", "path": "3"}, "2298": {"fn": "SimpleSwap.initiatePool", "offset": [1376, 1398], "op": "SWAP2", "path": "3"}, "2299": {"fn": "SimpleSwap.initiatePool", "offset": [1376, 1398], "op": "SSTORE", "path": "3"}, "2300": {"fn": "SimpleSwap.initiatePool", "offset": [1429, 1440], "op": "SLOAD", "path": "3"}, "2301": {"fn": "SimpleSwap.initiatePool", "offset": [1472, 1483], "op": "PUSH1", "path": "3", "value": "0x2"}, "2303": {"fn": "SimpleSwap.initiatePool", "offset": [1472, 1483], "op": "SLOAD", "path": "3"}, "2304": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH1", "path": "3", "statement": 34, "value": "0x40"}, "2306": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "MLOAD", "path": "3"}, "2307": {"op": "PUSH4", "value": "0x23B872DD"}, "2312": {"op": "PUSH1", "value": "0xE0"}, "2314": {"op": "SHL"}, "2315": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP2", "path": "3"}, "2316": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "MSTORE", "path": "3"}, "2317": {"op": "PUSH1", "value": "0x1"}, "2319": {"op": "PUSH1", "value": "0x1"}, "2321": {"op": "PUSH1", "value": "0xA0"}, "2323": {"op": "SHL"}, "2324": {"op": "SUB"}, "2325": {"fn": "SimpleSwap.initiatePool", "offset": [1429, 1440], "op": "SWAP3", "path": "3"}, "2326": {"fn": "SimpleSwap.initiatePool", "offset": [1429, 1440], "op": "DUP4", "path": "3"}, "2327": {"fn": "SimpleSwap.initiatePool", "offset": [1429, 1440], "op": "AND", "path": "3"}, "2328": {"fn": "SimpleSwap.initiatePool", "offset": [1429, 1440], "op": "SWAP3", "path": "3"}, "2329": {"fn": "SimpleSwap.initiatePool", "offset": [1472, 1483], "op": "SWAP2", "path": "3"}, "2330": {"fn": "SimpleSwap.initiatePool", "offset": [1472, 1483], "op": "SWAP1", "path": "3"}, "2331": {"fn": "SimpleSwap.initiatePool", "offset": [1472, 1483], "op": "SWAP2", "path": "3"}, "2332": {"fn": "SimpleSwap.initiatePool", "offset": [1472, 1483], "op": "AND", "path": "3"}, "2333": {"fn": "SimpleSwap.initiatePool", "offset": [1472, 1483], "op": "SWAP1", "path": "3"}, "2334": {"fn": "SimpleSwap.initiatePool", "offset": [1429, 1440], "op": "DUP3", "path": "3"}, "2335": {"fn": "SimpleSwap.initiatePool", "offset": [1429, 1440], "op": "SWAP1", "path": "3"}, "2336": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1520], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "2341": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1520], "op": "SWAP1", "path": "3"}, "2342": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH2", "path": "3", "value": "0x937"}, "2345": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "SWAP1", "path": "3"}, "2346": {"fn": "SimpleSwap.initiatePool", "offset": [1521, 1531], "op": "CALLER", "path": "3"}, "2347": {"fn": "SimpleSwap.initiatePool", "offset": [1521, 1531], "op": "SWAP1", "path": "3"}, "2348": {"fn": "SimpleSwap.initiatePool", "offset": [1541, 1545], "op": "ADDRESS", "path": "3"}, "2349": {"fn": "SimpleSwap.initiatePool", "offset": [1541, 1545], "op": "SWAP1", "path": "3"}, "2350": {"fn": "SimpleSwap.initiatePool", "offset": [1548, 1566], "op": "DUP10", "path": "3"}, "2351": {"fn": "SimpleSwap.initiatePool", "offset": [1548, 1566], "op": "SWAP1", "path": "3"}, "2352": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH1", "path": "3", "value": "0x4"}, "2354": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "ADD", "path": "3"}, "2355": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH2", "path": "3", "value": "0xD3A"}, "2358": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1503, 1567], "op": "JUMP", "path": "3"}, "2359": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "JUMPDEST", "path": "3"}, "2360": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH1", "path": "3", "value": "0x20"}, "2362": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH1", "path": "3", "value": "0x40"}, "2364": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "MLOAD", "path": "3"}, "2365": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP1", "path": "3"}, "2366": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP4", "path": "3"}, "2367": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "SUB", "path": "3"}, "2368": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP2", "path": "3"}, "2369": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH1", "path": "3", "value": "0x0"}, "2371": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP8", "path": "3"}, "2372": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP1", "path": "3"}, "2373": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "EXTCODESIZE", "path": "3"}, "2374": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "ISZERO", "path": "3"}, "2375": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP1", "path": "3"}, "2376": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "ISZERO", "path": "3"}, "2377": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH2", "path": "3", "value": "0x951"}, "2380": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "JUMPI", "path": "3"}, "2381": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH1", "path": "3", "value": "0x0"}, "2383": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP1", "path": "3"}, "2384": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "REVERT", "path": "3"}, "2385": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "JUMPDEST", "path": "3"}, "2386": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "POP", "path": "3"}, "2387": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "GAS", "path": "3"}, "2388": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "CALL", "path": "3"}, "2389": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "ISZERO", "path": "3"}, "2390": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP1", "path": "3"}, "2391": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "ISZERO", "path": "3"}, "2392": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH2", "path": "3", "value": "0x965"}, "2395": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "JUMPI", "path": "3"}, "2396": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "RETURNDATASIZE", "path": "3"}, "2397": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH1", "path": "3", "value": "0x0"}, "2399": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP1", "path": "3"}, "2400": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "RETURNDATACOPY", "path": "3"}, "2401": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "RETURNDATASIZE", "path": "3"}, "2402": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH1", "path": "3", "value": "0x0"}, "2404": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "REVERT", "path": "3"}, "2405": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "JUMPDEST", "path": "3"}, "2406": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "POP", "path": "3"}, "2407": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "POP", "path": "3"}, "2408": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "POP", "path": "3"}, "2409": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "POP", "path": "3"}, "2410": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH1", "path": "3", "value": "0x40"}, "2412": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "MLOAD", "path": "3"}, "2413": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "RETURNDATASIZE", "path": "3"}, "2414": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2416": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "NOT", "path": "3"}, "2417": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2419": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP3", "path": "3"}, "2420": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "ADD", "path": "3"}, "2421": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "AND", "path": "3"}, "2422": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP3", "path": "3"}, "2423": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "ADD", "path": "3"}, "2424": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP1", "path": "3"}, "2425": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH1", "path": "3", "value": "0x40"}, "2427": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "MSTORE", "path": "3"}, "2428": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "POP", "path": "3"}, "2429": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "DUP2", "path": "3"}, "2430": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "ADD", "path": "3"}, "2431": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "SWAP1", "path": "3"}, "2432": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH2", "path": "3", "value": "0x989"}, "2435": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "SWAP2", "path": "3"}, "2436": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "SWAP1", "path": "3"}, "2437": {"fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "PUSH2", "path": "3", "value": "0xC92"}, "2440": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1503, 1567], "op": "JUMP", "path": "3"}, "2441": {"branch": 65, "fn": "SimpleSwap.initiatePool", "offset": [1503, 1567], "op": "JUMPDEST", "path": "3"}, "2442": {"fn": "SimpleSwap.initiatePool", "offset": [1495, 1596], "op": "PUSH2", "path": "3", "value": "0x9A5"}, "2445": {"branch": 65, "fn": "SimpleSwap.initiatePool", "offset": [1495, 1596], "op": "JUMPI", "path": "3"}, "2446": {"fn": "SimpleSwap.initiatePool", "offset": [1495, 1596], "op": "PUSH1", "path": "3", "value": "0x40"}, "2448": {"fn": "SimpleSwap.initiatePool", "offset": [1495, 1596], "op": "MLOAD", "path": "3"}, "2449": {"op": "PUSH3", "value": "0x461BCD"}, "2453": {"op": "PUSH1", "value": "0xE5"}, "2455": {"op": "SHL"}, "2456": {"fn": "SimpleSwap.initiatePool", "offset": [1495, 1596], "op": "DUP2", "path": "3"}, "2457": {"fn": "SimpleSwap.initiatePool", "offset": [1495, 1596], "op": "MSTORE", "path": "3"}, "2458": {"fn": "SimpleSwap.initiatePool", "offset": [1495, 1596], "op": "PUSH1", "path": "3", "value": "0x4"}, "2460": {"fn": "SimpleSwap.initiatePool", "offset": [1495, 1596], "op": "ADD", "path": "3"}, "2461": {"fn": "SimpleSwap.initiatePool", "offset": [1495, 1596], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "2464": {"fn": "SimpleSwap.initiatePool", "offset": [1495, 1596], "op": "SWAP1", "path": "3"}, "2465": {"fn": "SimpleSwap.initiatePool", "offset": [1495, 1596], "op": "PUSH2", "path": "3", "value": "0xE7A"}, "2468": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1495, 1596], "op": "JUMP", "path": "3"}, "2469": {"fn": "SimpleSwap.initiatePool", "offset": [1495, 1596], "op": "JUMPDEST", "path": "3"}, "2470": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH1", "path": "3", "statement": 35, "value": "0x40"}, "2472": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "MLOAD", "path": "3"}, "2473": {"op": "PUSH4", "value": "0x23B872DD"}, "2478": {"op": "PUSH1", "value": "0xE0"}, "2480": {"op": "SHL"}, "2481": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP2", "path": "3"}, "2482": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "MSTORE", "path": "3"}, "2483": {"op": "PUSH1", "value": "0x1"}, "2485": {"op": "PUSH1", "value": "0x1"}, "2487": {"op": "PUSH1", "value": "0xA0"}, "2489": {"op": "SHL"}, "2490": {"op": "SUB"}, "2491": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1631], "op": "DUP3", "path": "3"}, "2492": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1631], "op": "AND", "path": "3"}, "2493": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1631], "op": "SWAP1", "path": "3"}, "2494": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1631], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "2499": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1631], "op": "SWAP1", "path": "3"}, "2500": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH2", "path": "3", "value": "0x9D5"}, "2503": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "SWAP1", "path": "3"}, "2504": {"fn": "SimpleSwap.initiatePool", "offset": [1632, 1642], "op": "CALLER", "path": "3"}, "2505": {"fn": "SimpleSwap.initiatePool", "offset": [1632, 1642], "op": "SWAP1", "path": "3"}, "2506": {"fn": "SimpleSwap.initiatePool", "offset": [1652, 1656], "op": "ADDRESS", "path": "3"}, "2507": {"fn": "SimpleSwap.initiatePool", "offset": [1652, 1656], "op": "SWAP1", "path": "3"}, "2508": {"fn": "SimpleSwap.initiatePool", "offset": [1659, 1677], "op": "DUP9", "path": "3"}, "2509": {"fn": "SimpleSwap.initiatePool", "offset": [1659, 1677], "op": "SWAP1", "path": "3"}, "2510": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH1", "path": "3", "value": "0x4"}, "2512": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "ADD", "path": "3"}, "2513": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH2", "path": "3", "value": "0xD3A"}, "2516": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1614, 1678], "op": "JUMP", "path": "3"}, "2517": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "JUMPDEST", "path": "3"}, "2518": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH1", "path": "3", "value": "0x20"}, "2520": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH1", "path": "3", "value": "0x40"}, "2522": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "MLOAD", "path": "3"}, "2523": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP1", "path": "3"}, "2524": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP4", "path": "3"}, "2525": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "SUB", "path": "3"}, "2526": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP2", "path": "3"}, "2527": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH1", "path": "3", "value": "0x0"}, "2529": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP8", "path": "3"}, "2530": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP1", "path": "3"}, "2531": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "EXTCODESIZE", "path": "3"}, "2532": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "ISZERO", "path": "3"}, "2533": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP1", "path": "3"}, "2534": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "ISZERO", "path": "3"}, "2535": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH2", "path": "3", "value": "0x9EF"}, "2538": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "JUMPI", "path": "3"}, "2539": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH1", "path": "3", "value": "0x0"}, "2541": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP1", "path": "3"}, "2542": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "REVERT", "path": "3"}, "2543": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "JUMPDEST", "path": "3"}, "2544": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "POP", "path": "3"}, "2545": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "GAS", "path": "3"}, "2546": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "CALL", "path": "3"}, "2547": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "ISZERO", "path": "3"}, "2548": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP1", "path": "3"}, "2549": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "ISZERO", "path": "3"}, "2550": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH2", "path": "3", "value": "0xA03"}, "2553": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "JUMPI", "path": "3"}, "2554": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "RETURNDATASIZE", "path": "3"}, "2555": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH1", "path": "3", "value": "0x0"}, "2557": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP1", "path": "3"}, "2558": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "RETURNDATACOPY", "path": "3"}, "2559": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "RETURNDATASIZE", "path": "3"}, "2560": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH1", "path": "3", "value": "0x0"}, "2562": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "REVERT", "path": "3"}, "2563": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "JUMPDEST", "path": "3"}, "2564": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "POP", "path": "3"}, "2565": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "POP", "path": "3"}, "2566": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "POP", "path": "3"}, "2567": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "POP", "path": "3"}, "2568": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH1", "path": "3", "value": "0x40"}, "2570": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "MLOAD", "path": "3"}, "2571": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "RETURNDATASIZE", "path": "3"}, "2572": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2574": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "NOT", "path": "3"}, "2575": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2577": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP3", "path": "3"}, "2578": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "ADD", "path": "3"}, "2579": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "AND", "path": "3"}, "2580": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP3", "path": "3"}, "2581": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "ADD", "path": "3"}, "2582": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP1", "path": "3"}, "2583": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH1", "path": "3", "value": "0x40"}, "2585": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "MSTORE", "path": "3"}, "2586": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "POP", "path": "3"}, "2587": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "DUP2", "path": "3"}, "2588": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "ADD", "path": "3"}, "2589": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "SWAP1", "path": "3"}, "2590": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH2", "path": "3", "value": "0xA27"}, "2593": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "SWAP2", "path": "3"}, "2594": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "SWAP1", "path": "3"}, "2595": {"fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "PUSH2", "path": "3", "value": "0xC92"}, "2598": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1614, 1678], "op": "JUMP", "path": "3"}, "2599": {"branch": 66, "fn": "SimpleSwap.initiatePool", "offset": [1614, 1678], "op": "JUMPDEST", "path": "3"}, "2600": {"fn": "SimpleSwap.initiatePool", "offset": [1606, 1707], "op": "PUSH2", "path": "3", "value": "0xA43"}, "2603": {"branch": 66, "fn": "SimpleSwap.initiatePool", "offset": [1606, 1707], "op": "JUMPI", "path": "3"}, "2604": {"fn": "SimpleSwap.initiatePool", "offset": [1606, 1707], "op": "PUSH1", "path": "3", "value": "0x40"}, "2606": {"fn": "SimpleSwap.initiatePool", "offset": [1606, 1707], "op": "MLOAD", "path": "3"}, "2607": {"op": "PUSH3", "value": "0x461BCD"}, "2611": {"op": "PUSH1", "value": "0xE5"}, "2613": {"op": "SHL"}, "2614": {"fn": "SimpleSwap.initiatePool", "offset": [1606, 1707], "op": "DUP2", "path": "3"}, "2615": {"fn": "SimpleSwap.initiatePool", "offset": [1606, 1707], "op": "MSTORE", "path": "3"}, "2616": {"fn": "SimpleSwap.initiatePool", "offset": [1606, 1707], "op": "PUSH1", "path": "3", "value": "0x4"}, "2618": {"fn": "SimpleSwap.initiatePool", "offset": [1606, 1707], "op": "ADD", "path": "3"}, "2619": {"fn": "SimpleSwap.initiatePool", "offset": [1606, 1707], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "2622": {"fn": "SimpleSwap.initiatePool", "offset": [1606, 1707], "op": "SWAP1", "path": "3"}, "2623": {"fn": "SimpleSwap.initiatePool", "offset": [1606, 1707], "op": "PUSH2", "path": "3", "value": "0xE43"}, "2626": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1606, 1707], "op": "JUMP", "path": "3"}, "2627": {"fn": "SimpleSwap.initiatePool", "offset": [1606, 1707], "op": "JUMPDEST", "path": "3"}, "2628": {"fn": "SimpleSwap.initiatePool", "offset": [1739, 1757], "op": "PUSH1", "path": "3", "statement": 36, "value": "0x3"}, "2630": {"fn": "SimpleSwap.initiatePool", "offset": [1739, 1757], "op": "SLOAD", "path": "3"}, "2631": {"fn": "SimpleSwap.initiatePool", "offset": [1739, 1781], "op": "PUSH2", "path": "3", "value": "0xA50"}, "2634": {"fn": "SimpleSwap.initiatePool", "offset": [1739, 1781], "op": "SWAP1", "path": "3"}, "2635": {"fn": "SimpleSwap.initiatePool", "offset": [1762, 1780], "op": "DUP6", "path": "3"}, "2636": {"fn": "SimpleSwap.initiatePool", "offset": [1739, 1761], "op": "PUSH2", "path": "3", "value": "0xB34"}, "2639": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1739, 1781], "op": "JUMP", "path": "3"}, "2640": {"fn": "SimpleSwap.initiatePool", "offset": [1739, 1781], "op": "JUMPDEST", "path": "3"}, "2641": {"fn": "SimpleSwap.initiatePool", "offset": [1718, 1736], "op": "PUSH1", "path": "3", "value": "0x3"}, "2643": {"fn": "SimpleSwap.initiatePool", "offset": [1718, 1781], "op": "SSTORE", "path": "3"}, "2644": {"fn": "SimpleSwap.initiatePool", "offset": [1812, 1830], "op": "PUSH1", "path": "3", "statement": 37, "value": "0x4"}, "2646": {"fn": "SimpleSwap.initiatePool", "offset": [1812, 1830], "op": "SLOAD", "path": "3"}, "2647": {"fn": "SimpleSwap.initiatePool", "offset": [1812, 1854], "op": "PUSH2", "path": "3", "value": "0xA60"}, "2650": {"fn": "SimpleSwap.initiatePool", "offset": [1812, 1854], "op": "SWAP1", "path": "3"}, "2651": {"fn": "SimpleSwap.initiatePool", "offset": [1835, 1853], "op": "DUP5", "path": "3"}, "2652": {"fn": "SimpleSwap.initiatePool", "offset": [1812, 1834], "op": "PUSH2", "path": "3", "value": "0xB34"}, "2655": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1812, 1854], "op": "JUMP", "path": "3"}, "2656": {"fn": "SimpleSwap.initiatePool", "offset": [1812, 1854], "op": "JUMPDEST", "path": "3"}, "2657": {"fn": "SimpleSwap.initiatePool", "offset": [1791, 1809], "op": "PUSH1", "path": "3", "value": "0x4"}, "2659": {"fn": "SimpleSwap.initiatePool", "offset": [1791, 1854], "op": "SSTORE", "path": "3"}, "2660": {"fn": "SimpleSwap.initiatePool", "offset": [1865, 1878], "op": "PUSH1", "path": "3", "statement": 38, "value": "0x5"}, "2662": {"fn": "SimpleSwap.initiatePool", "offset": [1865, 1899], "op": "DUP4", "path": "3"}, "2663": {"fn": "SimpleSwap.initiatePool", "offset": [1865, 1899], "op": "SWAP1", "path": "3"}, "2664": {"fn": "SimpleSwap.initiatePool", "offset": [1865, 1899], "op": "SSTORE", "path": "3"}, "2665": {"fn": "SimpleSwap.initiatePool", "offset": [1966, 1976], "op": "CALLER", "path": "3", "statement": 39}, "2666": {"op": "PUSH1", "value": "0x0"}, "2668": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1977], "op": "SWAP1", "path": "3"}, "2669": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1977], "op": "DUP2", "path": "3"}, "2670": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1977], "op": "MSTORE", "path": "3"}, "2671": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1965], "op": "PUSH1", "path": "3", "value": "0x8"}, "2673": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1977], "op": "PUSH1", "path": "3", "value": "0x20"}, "2675": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1977], "op": "MSTORE", "path": "3"}, "2676": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1977], "op": "PUSH1", "path": "3", "value": "0x40"}, "2678": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1977], "op": "SWAP1", "path": "3"}, "2679": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1977], "op": "KECCAK256", "path": "3"}, "2680": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1977], "op": "SLOAD", "path": "3"}, "2681": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1996], "op": "PUSH2", "path": "3", "value": "0xA82"}, "2684": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1996], "op": "SWAP1", "path": "3"}, "2685": {"fn": "SimpleSwap.initiatePool", "offset": [1881, 1899], "op": "DUP5", "path": "3"}, "2686": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1981], "op": "PUSH2", "path": "3", "value": "0xB34"}, "2689": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1945, 1996], "op": "JUMP", "path": "3"}, "2690": {"fn": "SimpleSwap.initiatePool", "offset": [1945, 1996], "op": "JUMPDEST", "path": "3"}, "2691": {"fn": "SimpleSwap.initiatePool", "offset": [1931, 1941], "op": "CALLER", "path": "3"}, "2692": {"fn": "SimpleSwap.initiatePool", "offset": [1910, 1942], "op": "PUSH1", "path": "3", "value": "0x0"}, "2694": {"fn": "SimpleSwap.initiatePool", "offset": [1910, 1942], "op": "SWAP1", "path": "3"}, "2695": {"fn": "SimpleSwap.initiatePool", "offset": [1910, 1942], "op": "DUP2", "path": "3"}, "2696": {"fn": "SimpleSwap.initiatePool", "offset": [1910, 1942], "op": "MSTORE", "path": "3"}, "2697": {"fn": "SimpleSwap.initiatePool", "offset": [1910, 1930], "op": "PUSH1", "path": "3", "value": "0x8"}, "2699": {"fn": "SimpleSwap.initiatePool", "offset": [1910, 1942], "op": "PUSH1", "path": "3", "value": "0x20"}, "2701": {"fn": "SimpleSwap.initiatePool", "offset": [1910, 1942], "op": "MSTORE", "path": "3"}, "2702": {"fn": "SimpleSwap.initiatePool", "offset": [1910, 1942], "op": "PUSH1", "path": "3", "value": "0x40"}, "2704": {"fn": "SimpleSwap.initiatePool", "offset": [1910, 1942], "op": "SWAP1", "path": "3"}, "2705": {"fn": "SimpleSwap.initiatePool", "offset": [1910, 1942], "op": "KECCAK256", "path": "3"}, "2706": {"fn": "SimpleSwap.initiatePool", "offset": [1910, 1996], "op": "SSTORE", "path": "3"}, "2707": {"op": "POP"}, "2708": {"op": "POP"}, "2709": {"op": "POP"}, "2710": {"op": "POP"}, "2711": {"fn": "SimpleSwap.initiatePool", "jump": "o", "offset": [1202, 2012], "op": "JUMP", "path": "3"}, "2712": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "JUMPDEST", "path": "0"}, "2713": {"offset": [1196, 1208], "op": "PUSH2", "path": "0", "value": "0xAA0"}, "2716": {"offset": [1196, 1206], "op": "PUSH2", "path": "0", "value": "0xC17"}, "2719": {"jump": "i", "offset": [1196, 1208], "op": "JUMP", "path": "0"}, "2720": {"fn": "Ownable.transferOwnership", "offset": [1196, 1208], "op": "JUMPDEST", "path": "0"}, "2721": {"op": "PUSH1", "value": "0x1"}, "2723": {"op": "PUSH1", "value": "0x1"}, "2725": {"op": "PUSH1", "value": "0xA0"}, "2727": {"op": "SHL"}, "2728": {"op": "SUB"}, "2729": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2730": {"offset": [1185, 1192], "op": "PUSH2", "path": "0", "value": "0xAB1"}, "2733": {"offset": [1185, 1190], "op": "PUSH2", "path": "0", "value": "0x86E"}, "2736": {"jump": "i", "offset": [1185, 1192], "op": "JUMP", "path": "0"}, "2737": {"fn": "Ownable.transferOwnership", "offset": [1185, 1192], "op": "JUMPDEST", "path": "0"}, "2738": {"op": "PUSH1", "value": "0x1"}, "2740": {"op": "PUSH1", "value": "0x1"}, "2742": {"op": "PUSH1", "value": "0xA0"}, "2744": {"op": "SHL"}, "2745": {"op": "SUB"}, "2746": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2747": {"branch": 67, "fn": "Ownable.transferOwnership", "offset": [1185, 1208], "op": "EQ", "path": "0"}, "2748": {"offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0xAD7"}, "2751": {"branch": 67, "offset": [1177, 1245], "op": "JUMPI", "path": "0"}, "2752": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x40"}, "2754": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "MLOAD", "path": "0"}, "2755": {"op": "PUSH3", "value": "0x461BCD"}, "2759": {"op": "PUSH1", "value": "0xE5"}, "2761": {"op": "SHL"}, "2762": {"offset": [1177, 1245], "op": "DUP2", "path": "0"}, "2763": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "MSTORE", "path": "0"}, "2764": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x4"}, "2766": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "ADD", "path": "0"}, "2767": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1A5"}, "2770": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "SWAP1", "path": "0"}, "2771": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0xF79"}, "2774": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [1177, 1245], "op": "JUMP", "path": "0"}, "2775": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "JUMPDEST", "path": "0"}, "2776": {"op": "PUSH1", "value": "0x1"}, "2778": {"op": "PUSH1", "value": "0x1"}, "2780": {"op": "PUSH1", "value": "0xA0"}, "2782": {"op": "SHL"}, "2783": {"op": "SUB"}, "2784": {"fn": "Ownable.transferOwnership", "offset": [1934, 1956], "op": "DUP2", "path": "0", "statement": 40}, "2785": {"branch": 68, "fn": "Ownable.transferOwnership", "offset": [1934, 1956], "op": "AND", "path": "0"}, "2786": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH2", "path": "0", "value": "0xAFD"}, "2789": {"branch": 68, "fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "JUMPI", "path": "0"}, "2790": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH1", "path": "0", "value": "0x40"}, "2792": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "MLOAD", "path": "0"}, "2793": {"op": "PUSH3", "value": "0x461BCD"}, "2797": {"op": "PUSH1", "value": "0xE5"}, "2799": {"op": "SHL"}, "2800": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "DUP2", "path": "0"}, "2801": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "MSTORE", "path": "0"}, "2802": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH1", "path": "0", "value": "0x4"}, "2804": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "ADD", "path": "0"}, "2805": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH2", "path": "0", "value": "0x1A5"}, "2808": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "SWAP1", "path": "0"}, "2809": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH2", "path": "0", "value": "0xD77"}, "2812": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [1926, 1999], "op": "JUMP", "path": "0"}, "2813": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "JUMPDEST", "path": "0"}, "2814": {"fn": "Ownable.transferOwnership", "offset": [2009, 2028], "op": "PUSH2", "path": "0", "statement": 41, "value": "0xB06"}, "2817": {"fn": "Ownable.transferOwnership", "offset": [2019, 2027], "op": "DUP2", "path": "0"}, "2818": {"fn": "Ownable.transferOwnership", "offset": [2009, 2018], "op": "PUSH2", "path": "0", "value": "0xC1B"}, "2821": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [2009, 2028], "op": "JUMP", "path": "0"}, "2822": {"fn": "Ownable.transferOwnership", "offset": [2009, 2028], "op": "JUMPDEST", "path": "0"}, "2823": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "POP", "path": "0"}, "2824": {"fn": "Ownable.transferOwnership", "jump": "o", "offset": [1846, 2035], "op": "JUMP", "path": "0"}, "2825": {"fn": "SafeMath.mul", "offset": [3382, 3478], "op": "JUMPDEST", "path": "2"}, "2826": {"fn": "SafeMath.mul", "offset": [3440, 3447], "op": "PUSH1", "path": "2", "value": "0x0"}, "2828": {"fn": "SafeMath.mul", "offset": [3466, 3471], "op": "PUSH2", "path": "2", "statement": 42, "value": "0xB15"}, "2831": {"fn": "SafeMath.mul", "offset": [3470, 3471], "op": "DUP3", "path": "2"}, "2832": {"fn": "SafeMath.mul", "offset": [3466, 3467], "op": "DUP5", "path": "2"}, "2833": {"fn": "SafeMath.mul", "offset": [3466, 3471], "op": "PUSH2", "path": "2", "value": "0x1089"}, "2836": {"fn": "SafeMath.mul", "jump": "i", "offset": [3466, 3471], "op": "JUMP", "path": "2"}, "2837": {"fn": "SafeMath.mul", "offset": [3466, 3471], "op": "JUMPDEST", "path": "2"}, "2838": {"fn": "SafeMath.mul", "offset": [3459, 3471], "op": "SWAP4", "path": "2"}, "2839": {"fn": "SafeMath.mul", "offset": [3382, 3478], "op": "SWAP3", "path": "2"}, "2840": {"op": "POP"}, "2841": {"op": "POP"}, "2842": {"op": "POP"}, "2843": {"fn": "SafeMath.mul", "jump": "o", "offset": [3382, 3478], "op": "JUMP", "path": "2"}, "2844": {"fn": "SafeMath.div", "offset": [3767, 3863], "op": "JUMPDEST", "path": "2"}, "2845": {"fn": "SafeMath.div", "offset": [3825, 3832], "op": "PUSH1", "path": "2", "value": "0x0"}, "2847": {"fn": "SafeMath.div", "offset": [3851, 3856], "op": "PUSH2", "path": "2", "statement": 43, "value": "0xB15"}, "2850": {"fn": "SafeMath.div", "offset": [3855, 3856], "op": "DUP3", "path": "2"}, "2851": {"fn": "SafeMath.div", "offset": [3851, 3852], "op": "DUP5", "path": "2"}, "2852": {"fn": "SafeMath.div", "offset": [3851, 3856], "op": "PUSH2", "path": "2", "value": "0x1069"}, "2855": {"fn": "SafeMath.div", "jump": "i", "offset": [3851, 3856], "op": "JUMP", "path": "2"}, "2856": {"fn": "SafeMath.sub", "offset": [3039, 3135], "op": "JUMPDEST", "path": "2"}, "2857": {"fn": "SafeMath.sub", "offset": [3097, 3104], "op": "PUSH1", "path": "2", "value": "0x0"}, "2859": {"fn": "SafeMath.sub", "offset": [3123, 3128], "op": "PUSH2", "path": "2", "statement": 44, "value": "0xB15"}, "2862": {"fn": "SafeMath.sub", "offset": [3127, 3128], "op": "DUP3", "path": "2"}, "2863": {"fn": "SafeMath.sub", "offset": [3123, 3124], "op": "DUP5", "path": "2"}, "2864": {"fn": "SafeMath.sub", "offset": [3123, 3128], "op": "PUSH2", "path": "2", "value": "0x10A8"}, "2867": {"fn": "SafeMath.sub", "jump": "i", "offset": [3123, 3128], "op": "JUMP", "path": "2"}, "2868": {"fn": "SafeMath.add", "offset": [2672, 2768], "op": "JUMPDEST", "path": "2"}, "2869": {"fn": "SafeMath.add", "offset": [2730, 2737], "op": "PUSH1", "path": "2", "value": "0x0"}, "2871": {"fn": "SafeMath.add", "offset": [2756, 2761], "op": "PUSH2", "path": "2", "statement": 45, "value": "0xB15"}, "2874": {"fn": "SafeMath.add", "offset": [2760, 2761], "op": "DUP3", "path": "2"}, "2875": {"fn": "SafeMath.add", "offset": [2756, 2757], "op": "DUP5", "path": "2"}, "2876": {"fn": "SafeMath.add", "offset": [2756, 2761], "op": "PUSH2", "path": "2", "value": "0x1051"}, "2879": {"fn": "SafeMath.add", "jump": "i", "offset": [2756, 2761], "op": "JUMP", "path": "2"}, "2880": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5902, 6438], "op": "JUMPDEST", "path": "3"}, "2881": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5994, 6001], "op": "PUSH1", "path": "3", "value": "0x0"}, "2883": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5994, 6001], "op": "DUP1", "path": "3"}, "2884": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5994, 6001], "op": "DUP1", "path": "3"}, "2885": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6042], "op": "DUP4", "path": "3"}, "2886": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "PUSH1", "path": "3", "value": "0x1"}, "2888": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "DUP2", "path": "3"}, "2889": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "GT", "path": "3"}, "2890": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "ISZERO", "path": "3"}, "2891": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "PUSH2", "path": "3", "value": "0xB64"}, "2894": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "JUMPI", "path": "3"}, "2895": {"op": "PUSH4", "value": "0x4E487B71"}, "2900": {"op": "PUSH1", "value": "0xE0"}, "2902": {"op": "SHL"}, "2903": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "PUSH1", "path": "3", "value": "0x0"}, "2905": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "MSTORE", "path": "3"}, "2906": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "PUSH1", "path": "3", "value": "0x21"}, "2908": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "PUSH1", "path": "3", "value": "0x4"}, "2910": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "MSTORE", "path": "3"}, "2911": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "PUSH1", "path": "3", "value": "0x24"}, "2913": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "PUSH1", "path": "3", "value": "0x0"}, "2915": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "REVERT", "path": "3"}, "2916": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "JUMPDEST", "path": "3"}, "2917": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6030, 6057], "op": "EQ", "path": "3"}, "2918": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6029, 6100], "op": "PUSH2", "path": "3", "value": "0xB71"}, "2921": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6029, 6100], "op": "JUMPI", "path": "3"}, "2922": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6082, 6100], "op": "PUSH1", "path": "3", "value": "0x3"}, "2924": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6082, 6100], "op": "SLOAD", "path": "3"}, "2925": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6029, 6100], "op": "PUSH2", "path": "3", "value": "0xB75"}, "2928": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6029, 6100], "op": "JUMP", "path": "3"}, "2929": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6029, 6100], "op": "JUMPDEST", "path": "3"}, "2930": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6061, 6079], "op": "PUSH1", "path": "3", "value": "0x4"}, "2932": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6061, 6079], "op": "SLOAD", "path": "3"}, "2933": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6029, 6100], "op": "JUMPDEST", "path": "3"}, "2934": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6017, 6100], "op": "SWAP1", "path": "3"}, "2935": {"op": "POP"}, "2936": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6110, 6119], "op": "PUSH1", "path": "3", "value": "0x0"}, "2938": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6110, 6119], "op": "DUP1", "path": "3"}, "2939": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6135], "op": "DUP5", "path": "3"}, "2940": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "PUSH1", "path": "3", "value": "0x1"}, "2942": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "DUP2", "path": "3"}, "2943": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "GT", "path": "3"}, "2944": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "ISZERO", "path": "3"}, "2945": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "PUSH2", "path": "3", "value": "0xB9A"}, "2948": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "JUMPI", "path": "3"}, "2949": {"op": "PUSH4", "value": "0x4E487B71"}, "2954": {"op": "PUSH1", "value": "0xE0"}, "2956": {"op": "SHL"}, "2957": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "PUSH1", "path": "3", "value": "0x0"}, "2959": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "MSTORE", "path": "3"}, "2960": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "PUSH1", "path": "3", "value": "0x21"}, "2962": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "PUSH1", "path": "3", "value": "0x4"}, "2964": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "MSTORE", "path": "3"}, "2965": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "PUSH1", "path": "3", "value": "0x24"}, "2967": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "PUSH1", "path": "3", "value": "0x0"}, "2969": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "REVERT", "path": "3"}, "2970": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "JUMPDEST", "path": "3"}, "2971": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6123, 6150], "op": "EQ", "path": "3"}, "2972": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6122, 6193], "op": "PUSH2", "path": "3", "value": "0xBA7"}, "2975": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6122, 6193], "op": "JUMPI", "path": "3"}, "2976": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6175, 6193], "op": "PUSH1", "path": "3", "value": "0x4"}, "2978": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6175, 6193], "op": "SLOAD", "path": "3"}, "2979": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6122, 6193], "op": "PUSH2", "path": "3", "value": "0xBAB"}, "2982": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6122, 6193], "op": "JUMP", "path": "3"}, "2983": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6122, 6193], "op": "JUMPDEST", "path": "3"}, "2984": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6154, 6172], "op": "PUSH1", "path": "3", "value": "0x3"}, "2986": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6154, 6172], "op": "SLOAD", "path": "3"}, "2987": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6122, 6193], "op": "JUMPDEST", "path": "3"}, "2988": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6110, 6193], "op": "SWAP1", "path": "3"}, "2989": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6110, 6193], "op": "POP", "path": "3"}, "2990": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6204, 6213], "op": "PUSH1", "path": "3", "value": "0x0"}, "2992": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6237, 6255], "op": "PUSH1", "path": "3", "value": "0x3"}, "2994": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6237, 6255], "op": "SLOAD", "path": "3"}, "2995": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6216, 6234], "op": "PUSH1", "path": "3", "value": "0x4"}, "2997": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6216, 6234], "op": "SLOAD", "path": "3"}, "2998": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6216, 6255], "op": "PUSH2", "path": "3", "value": "0xBBF"}, "3001": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6216, 6255], "op": "SWAP2", "path": "3"}, "3002": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6216, 6255], "op": "SWAP1", "path": "3"}, "3003": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6216, 6255], "op": "PUSH2", "path": "3", "value": "0x1089"}, "3006": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6216, 6255], "op": "JUMP", "path": "3"}, "3007": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6216, 6255], "op": "JUMPDEST", "path": "3"}, "3008": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6204, 6255], "op": "SWAP1", "path": "3"}, "3009": {"op": "POP"}, "3010": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6288, 6317], "op": "PUSH1", "path": "3", "value": "0x0"}, "3012": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6320, 6344], "op": "PUSH2", "path": "3", "value": "0xBE1"}, "3015": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6326, 6343], "op": "PUSH2", "path": "3", "value": "0xBDA"}, "3018": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6332, 6342], "op": "PUSH2", "path": "3", "value": "0xBD3"}, "3021": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6336, 6342], "op": "DUP10", "path": "3"}, "3022": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6332, 6333], "op": "DUP7", "path": "3"}, "3023": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6332, 6342], "op": "PUSH2", "path": "3", "value": "0x1051"}, "3026": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6332, 6342], "op": "JUMP", "path": "3"}, "3027": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6332, 6342], "op": "JUMPDEST", "path": "3"}, "3028": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6326, 6327], "op": "DUP5", "path": "3"}, "3029": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6326, 6327], "op": "SWAP1", "path": "3"}, "3030": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6326, 6331], "op": "PUSH2", "path": "3", "value": "0xB1C"}, "3033": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6326, 6343], "op": "JUMP", "path": "3"}, "3034": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6326, 6343], "op": "JUMPDEST", "path": "3"}, "3035": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6320, 6321], "op": "DUP6", "path": "3"}, "3036": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6320, 6321], "op": "SWAP1", "path": "3"}, "3037": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6320, 6325], "op": "PUSH2", "path": "3", "value": "0xB28"}, "3040": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6320, 6344], "op": "JUMP", "path": "3"}, "3041": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6320, 6344], "op": "JUMPDEST", "path": "3"}, "3042": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6288, 6344], "op": "SWAP1", "path": "3"}, "3043": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6288, 6344], "op": "POP", "path": "3"}, "3044": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6424, 6431], "op": "PUSH3", "path": "3", "statement": 46, "value": "0xF4240"}, "3048": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6417, 6420], "op": "PUSH1", "path": "3", "value": "0x6"}, "3050": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6417, 6420], "op": "SLOAD", "path": "3"}, "3051": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6407, 6414], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "3055": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6407, 6420], "op": "PUSH2", "path": "3", "value": "0xBF8"}, "3058": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6407, 6420], "op": "SWAP2", "path": "3"}, "3059": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6407, 6420], "op": "SWAP1", "path": "3"}, "3060": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6407, 6420], "op": "PUSH2", "path": "3", "value": "0x10A8"}, "3063": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6407, 6420], "op": "JUMP", "path": "3"}, "3064": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6407, 6420], "op": "JUMPDEST", "path": "3"}, "3065": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6382, 6421], "op": "PUSH2", "path": "3", "value": "0xC02"}, "3068": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6382, 6421], "op": "SWAP1", "path": "3"}, "3069": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6382, 6403], "op": "DUP4", "path": "3"}, "3070": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6382, 6421], "op": "PUSH2", "path": "3", "value": "0x1089"}, "3073": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6382, 6421], "op": "JUMP", "path": "3"}, "3074": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6382, 6421], "op": "JUMPDEST", "path": "3"}, "3075": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6382, 6431], "op": "PUSH2", "path": "3", "value": "0xC0C"}, "3078": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6382, 6431], "op": "SWAP2", "path": "3"}, "3079": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6382, 6431], "op": "SWAP1", "path": "3"}, "3080": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6382, 6431], "op": "PUSH2", "path": "3", "value": "0x1069"}, "3083": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6382, 6431], "op": "JUMP", "path": "3"}, "3084": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6382, 6431], "op": "JUMPDEST", "path": "3"}, "3085": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6375, 6431], "op": "SWAP8", "path": "3"}, "3086": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5902, 6438], "op": "SWAP7", "path": "3"}, "3087": {"op": "POP"}, "3088": {"op": "POP"}, "3089": {"op": "POP"}, "3090": {"op": "POP"}, "3091": {"op": "POP"}, "3092": {"op": "POP"}, "3093": {"op": "POP"}, "3094": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "o", "offset": [5902, 6438], "op": "JUMP", "path": "3"}, "3095": {"fn": "Context._msgSender", "offset": [586, 682], "op": "JUMPDEST", "path": "1"}, "3096": {"fn": "Context._msgSender", "offset": [665, 675], "op": "CALLER", "path": "1", "statement": 47}, "3097": {"fn": "Context._msgSender", "offset": [586, 682], "op": "SWAP1", "path": "1"}, "3098": {"fn": "Context._msgSender", "jump": "o", "offset": [586, 682], "op": "JUMP", "path": "1"}, "3099": {"fn": "Ownable._setOwner", "offset": [2041, 2210], "op": "JUMPDEST", "path": "0"}, "3100": {"fn": "Ownable._setOwner", "offset": [2096, 2112], "op": "PUSH1", "path": "0", "value": "0x0"}, "3102": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "DUP1", "path": "0"}, "3103": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SLOAD", "path": "0"}, "3104": {"op": "PUSH1", "value": "0x1"}, "3106": {"op": "PUSH1", "value": "0x1"}, "3108": {"op": "PUSH1", "value": "0xA0"}, "3110": {"op": "SHL"}, "3111": {"op": "SUB"}, "3112": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP4", "path": "0", "statement": 48}, "3113": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP2", "path": "0"}, "3114": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "AND", "path": "0"}, "3115": {"op": "PUSH1", "value": "0x1"}, "3117": {"op": "PUSH1", "value": "0x1"}, "3119": {"op": "PUSH1", "value": "0xA0"}, "3121": {"op": "SHL"}, "3122": {"op": "SUB"}, "3123": {"op": "NOT"}, "3124": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP4", "path": "0"}, "3125": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "AND", "path": "0"}, "3126": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP2", "path": "0"}, "3127": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "OR", "path": "0"}, "3128": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP5", "path": "0"}, "3129": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "SSTORE", "path": "0"}, "3130": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "PUSH1", "path": "0", "statement": 49, "value": "0x40"}, "3132": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "MLOAD", "path": "0"}, "3133": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP2", "path": "0"}, "3134": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP1", "path": "0"}, "3135": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP3", "path": "0"}, "3136": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "AND", "path": "0"}, "3137": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP3", "path": "0"}, "3138": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "DUP4", "path": "0"}, "3139": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP2", "path": "0"}, "3140": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "PUSH32", "path": "0", "value": "0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0"}, "3173": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "SWAP2", "path": "0"}, "3174": {"fn": "Ownable._setOwner", "offset": [2096, 2112], "op": "SWAP1", "path": "0"}, "3175": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "LOG3", "path": "0"}, "3176": {"fn": "Ownable._setOwner", "offset": [2041, 2210], "op": "POP", "path": "0"}, "3177": {"fn": "Ownable._setOwner", "offset": [2041, 2210], "op": "POP", "path": "0"}, "3178": {"fn": "Ownable._setOwner", "jump": "o", "offset": [2041, 2210], "op": "JUMP", "path": "0"}, "3179": {"op": "JUMPDEST"}, "3180": {"op": "PUSH1", "value": "0x0"}, "3182": {"op": "PUSH1", "value": "0x20"}, "3184": {"op": "DUP3"}, "3185": {"op": "DUP5"}, "3186": {"op": "SUB"}, "3187": {"op": "SLT"}, "3188": {"op": "ISZERO"}, "3189": {"op": "PUSH2", "value": "0xC7C"}, "3192": {"op": "JUMPI"}, "3193": {"op": "DUP1"}, "3194": {"op": "DUP2"}, "3195": {"op": "REVERT"}, "3196": {"op": "JUMPDEST"}, "3197": {"op": "DUP2"}, "3198": {"op": "CALLDATALOAD"}, "3199": {"op": "PUSH1", "value": "0x1"}, "3201": {"op": "PUSH1", "value": "0x1"}, "3203": {"op": "PUSH1", "value": "0xA0"}, "3205": {"op": "SHL"}, "3206": {"op": "SUB"}, "3207": {"op": "DUP2"}, "3208": {"op": "AND"}, "3209": {"op": "DUP2"}, "3210": {"op": "EQ"}, "3211": {"op": "PUSH2", "value": "0xB15"}, "3214": {"op": "JUMPI"}, "3215": {"op": "DUP2"}, "3216": {"op": "DUP3"}, "3217": {"op": "REVERT"}, "3218": {"op": "JUMPDEST"}, "3219": {"op": "PUSH1", "value": "0x0"}, "3221": {"op": "PUSH1", "value": "0x20"}, "3223": {"op": "DUP3"}, "3224": {"op": "DUP5"}, "3225": {"op": "SUB"}, "3226": {"op": "SLT"}, "3227": {"op": "ISZERO"}, "3228": {"op": "PUSH2", "value": "0xCA3"}, "3231": {"op": "JUMPI"}, "3232": {"op": "DUP1"}, "3233": {"op": "DUP2"}, "3234": {"op": "REVERT"}, "3235": {"op": "JUMPDEST"}, "3236": {"op": "DUP2"}, "3237": {"op": "MLOAD"}, "3238": {"op": "DUP1"}, "3239": {"op": "ISZERO"}, "3240": {"op": "ISZERO"}, "3241": {"op": "DUP2"}, "3242": {"op": "EQ"}, "3243": {"op": "PUSH2", "value": "0xB15"}, "3246": {"op": "JUMPI"}, "3247": {"op": "DUP2"}, "3248": {"op": "DUP3"}, "3249": {"op": "REVERT"}, "3250": {"op": "JUMPDEST"}, "3251": {"op": "PUSH1", "value": "0x0"}, "3253": {"op": "PUSH1", "value": "0x20"}, "3255": {"op": "DUP3"}, "3256": {"op": "DUP5"}, "3257": {"op": "SUB"}, "3258": {"op": "SLT"}, "3259": {"op": "ISZERO"}, "3260": {"op": "PUSH2", "value": "0xCC3"}, "3263": {"op": "JUMPI"}, "3264": {"op": "DUP1"}, "3265": {"op": "DUP2"}, "3266": {"op": "REVERT"}, "3267": {"op": "JUMPDEST"}, "3268": {"op": "POP"}, "3269": {"op": "CALLDATALOAD"}, "3270": {"op": "SWAP2"}, "3271": {"op": "SWAP1"}, "3272": {"op": "POP"}, "3273": {"jump": "o", "op": "JUMP"}, "3274": {"op": "JUMPDEST"}, "3275": {"op": "PUSH1", "value": "0x0"}, "3277": {"op": "DUP1"}, "3278": {"op": "PUSH1", "value": "0x40"}, "3280": {"op": "DUP4"}, "3281": {"op": "DUP6"}, "3282": {"op": "SUB"}, "3283": {"op": "SLT"}, "3284": {"op": "ISZERO"}, "3285": {"op": "PUSH2", "value": "0xCDC"}, "3288": {"op": "JUMPI"}, "3289": {"op": "DUP1"}, "3290": {"op": "DUP2"}, "3291": {"op": "REVERT"}, "3292": {"op": "JUMPDEST"}, "3293": {"op": "POP"}, "3294": {"op": "POP"}, "3295": {"op": "DUP1"}, "3296": {"op": "CALLDATALOAD"}, "3297": {"op": "SWAP3"}, "3298": {"op": "PUSH1", "value": "0x20"}, "3300": {"op": "SWAP1"}, "3301": {"op": "SWAP2"}, "3302": {"op": "ADD"}, "3303": {"op": "CALLDATALOAD"}, "3304": {"op": "SWAP2"}, "3305": {"op": "POP"}, "3306": {"jump": "o", "op": "JUMP"}, "3307": {"op": "JUMPDEST"}, "3308": {"op": "PUSH1", "value": "0x0"}, "3310": {"op": "DUP1"}, "3311": {"op": "PUSH1", "value": "0x0"}, "3313": {"op": "PUSH1", "value": "0x60"}, "3315": {"op": "DUP5"}, "3316": {"op": "DUP7"}, "3317": {"op": "SUB"}, "3318": {"op": "SLT"}, "3319": {"op": "ISZERO"}, "3320": {"op": "PUSH2", "value": "0xCFF"}, "3323": {"op": "JUMPI"}, "3324": {"op": "DUP1"}, "3325": {"op": "DUP2"}, "3326": {"op": "REVERT"}, "3327": {"op": "JUMPDEST"}, "3328": {"op": "DUP4"}, "3329": {"op": "CALLDATALOAD"}, "3330": {"op": "SWAP3"}, "3331": {"op": "POP"}, "3332": {"op": "PUSH1", "value": "0x20"}, "3334": {"op": "DUP5"}, "3335": {"op": "ADD"}, "3336": {"op": "CALLDATALOAD"}, "3337": {"op": "SWAP2"}, "3338": {"op": "POP"}, "3339": {"op": "PUSH1", "value": "0x40"}, "3341": {"op": "DUP5"}, "3342": {"op": "ADD"}, "3343": {"op": "CALLDATALOAD"}, "3344": {"op": "PUSH1", "value": "0x2"}, "3346": {"op": "DUP2"}, "3347": {"op": "LT"}, "3348": {"op": "PUSH2", "value": "0xD1B"}, "3351": {"op": "JUMPI"}, "3352": {"op": "DUP2"}, "3353": {"op": "DUP3"}, "3354": {"op": "REVERT"}, "3355": {"op": "JUMPDEST"}, "3356": {"op": "DUP1"}, "3357": {"op": "SWAP2"}, "3358": {"op": "POP"}, "3359": {"op": "POP"}, "3360": {"op": "SWAP3"}, "3361": {"op": "POP"}, "3362": {"op": "SWAP3"}, "3363": {"op": "POP"}, "3364": {"op": "SWAP3"}, "3365": {"jump": "o", "op": "JUMP"}, "3366": {"op": "JUMPDEST"}, "3367": {"op": "PUSH1", "value": "0x1"}, "3369": {"op": "PUSH1", "value": "0x1"}, "3371": {"op": "PUSH1", "value": "0xA0"}, "3373": {"op": "SHL"}, "3374": {"op": "SUB"}, "3375": {"op": "SWAP2"}, "3376": {"op": "SWAP1"}, "3377": {"op": "SWAP2"}, "3378": {"op": "AND"}, "3379": {"op": "DUP2"}, "3380": {"op": "MSTORE"}, "3381": {"op": "PUSH1", "value": "0x20"}, "3383": {"op": "ADD"}, "3384": {"op": "SWAP1"}, "3385": {"jump": "o", "op": "JUMP"}, "3386": {"op": "JUMPDEST"}, "3387": {"op": "PUSH1", "value": "0x1"}, "3389": {"op": "PUSH1", "value": "0x1"}, "3391": {"op": "PUSH1", "value": "0xA0"}, "3393": {"op": "SHL"}, "3394": {"op": "SUB"}, "3395": {"op": "SWAP4"}, "3396": {"op": "DUP5"}, "3397": {"op": "AND"}, "3398": {"op": "DUP2"}, "3399": {"op": "MSTORE"}, "3400": {"op": "SWAP2"}, "3401": {"op": "SWAP1"}, "3402": {"op": "SWAP3"}, "3403": {"op": "AND"}, "3404": {"op": "PUSH1", "value": "0x20"}, "3406": {"op": "DUP3"}, "3407": {"op": "ADD"}, "3408": {"op": "MSTORE"}, "3409": {"op": "PUSH1", "value": "0x40"}, "3411": {"op": "DUP2"}, "3412": {"op": "ADD"}, "3413": {"op": "SWAP2"}, "3414": {"op": "SWAP1"}, "3415": {"op": "SWAP2"}, "3416": {"op": "MSTORE"}, "3417": {"op": "PUSH1", "value": "0x60"}, "3419": {"op": "ADD"}, "3420": {"op": "SWAP1"}, "3421": {"jump": "o", "op": "JUMP"}, "3422": {"op": "JUMPDEST"}, "3423": {"op": "PUSH1", "value": "0x1"}, "3425": {"op": "PUSH1", "value": "0x1"}, "3427": {"op": "PUSH1", "value": "0xA0"}, "3429": {"op": "SHL"}, "3430": {"op": "SUB"}, "3431": {"op": "SWAP3"}, "3432": {"op": "SWAP1"}, "3433": {"op": "SWAP3"}, "3434": {"op": "AND"}, "3435": {"op": "DUP3"}, "3436": {"op": "MSTORE"}, "3437": {"op": "PUSH1", "value": "0x20"}, "3439": {"op": "DUP3"}, "3440": {"op": "ADD"}, "3441": {"op": "MSTORE"}, "3442": {"op": "PUSH1", "value": "0x40"}, "3444": {"op": "ADD"}, "3445": {"op": "SWAP1"}, "3446": {"jump": "o", "op": "JUMP"}, "3447": {"op": "JUMPDEST"}, "3448": {"op": "PUSH1", "value": "0x20"}, "3450": {"op": "DUP1"}, "3451": {"op": "DUP3"}, "3452": {"op": "MSTORE"}, "3453": {"op": "PUSH1", "value": "0x26"}, "3455": {"op": "SWAP1"}, "3456": {"op": "DUP3"}, "3457": {"op": "ADD"}, "3458": {"op": "MSTORE"}, "3459": {"op": "PUSH32", "value": "0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061"}, "3492": {"op": "PUSH1", "value": "0x40"}, "3494": {"op": "DUP3"}, "3495": {"op": "ADD"}, "3496": {"op": "MSTORE"}, "3497": {"op": "PUSH6", "value": "0x646472657373"}, "3504": {"op": "PUSH1", "value": "0xD0"}, "3506": {"op": "SHL"}, "3507": {"op": "PUSH1", "value": "0x60"}, "3509": {"op": "DUP3"}, "3510": {"op": "ADD"}, "3511": {"op": "MSTORE"}, "3512": {"op": "PUSH1", "value": "0x80"}, "3514": {"op": "ADD"}, "3515": {"op": "SWAP1"}, "3516": {"jump": "o", "op": "JUMP"}, "3517": {"op": "JUMPDEST"}, "3518": {"op": "PUSH1", "value": "0x20"}, "3520": {"op": "DUP1"}, "3521": {"op": "DUP3"}, "3522": {"op": "MSTORE"}, "3523": {"op": "PUSH1", "value": "0x1E"}, "3525": {"op": "SWAP1"}, "3526": {"op": "DUP3"}, "3527": {"op": "ADD"}, "3528": {"op": "MSTORE"}, "3529": {"op": "PUSH32", "value": "0x54686520706F6F6C2077617320616C726561647920696E697469617465640000"}, "3562": {"op": "PUSH1", "value": "0x40"}, "3564": {"op": "DUP3"}, "3565": {"op": "ADD"}, "3566": {"op": "MSTORE"}, "3567": {"op": "PUSH1", "value": "0x60"}, "3569": {"op": "ADD"}, "3570": {"op": "SWAP1"}, "3571": {"jump": "o", "op": "JUMP"}, "3572": {"op": "JUMPDEST"}, "3573": {"op": "PUSH1", "value": "0x20"}, "3575": {"op": "DUP1"}, "3576": {"op": "DUP3"}, "3577": {"op": "MSTORE"}, "3578": {"op": "PUSH1", "value": "0x2F"}, "3580": {"op": "SWAP1"}, "3581": {"op": "DUP3"}, "3582": {"op": "ADD"}, "3583": {"op": "MSTORE"}, "3584": {"op": "PUSH32", "value": "0x54686520616D6F756E74206F6620737570706C696564206C7020746F6B656E73"}, "3617": {"op": "PUSH1", "value": "0x40"}, "3619": {"op": "DUP3"}, "3620": {"op": "ADD"}, "3621": {"op": "MSTORE"}, "3622": {"op": "PUSH15", "value": "0x1039B437BAB632103132901F101817"}, "3638": {"op": "PUSH1", "value": "0x89"}, "3640": {"op": "SHL"}, "3641": {"op": "PUSH1", "value": "0x60"}, "3643": {"op": "DUP3"}, "3644": {"op": "ADD"}, "3645": {"op": "MSTORE"}, "3646": {"op": "PUSH1", "value": "0x80"}, "3648": {"op": "ADD"}, "3649": {"op": "SWAP1"}, "3650": {"jump": "o", "op": "JUMP"}, "3651": {"op": "JUMPDEST"}, "3652": {"op": "PUSH1", "value": "0x20"}, "3654": {"op": "DUP1"}, "3655": {"op": "DUP3"}, "3656": {"op": "MSTORE"}, "3657": {"op": "PUSH1", "value": "0x18"}, "3659": {"op": "SWAP1"}, "3660": {"op": "DUP3"}, "3661": {"op": "ADD"}, "3662": {"op": "MSTORE"}, "3663": {"op": "PUSH32", "value": "0x5553444320616D6F756E7420756E617661696C61626C652E0000000000000000"}, "3696": {"op": "PUSH1", "value": "0x40"}, "3698": {"op": "DUP3"}, "3699": {"op": "ADD"}, "3700": {"op": "MSTORE"}, "3701": {"op": "PUSH1", "value": "0x60"}, "3703": {"op": "ADD"}, "3704": {"op": "SWAP1"}, "3705": {"jump": "o", "op": "JUMP"}, "3706": {"op": "JUMPDEST"}, "3707": {"op": "PUSH1", "value": "0x20"}, "3709": {"op": "DUP1"}, "3710": {"op": "DUP3"}, "3711": {"op": "MSTORE"}, "3712": {"op": "PUSH1", "value": "0x18"}, "3714": {"op": "SWAP1"}, "3715": {"op": "DUP3"}, "3716": {"op": "ADD"}, "3717": {"op": "MSTORE"}, "3718": {"op": "PUSH32", "value": "0x4C696E6B20616D6F756E7420756E617661696C61626C652E0000000000000000"}, "3751": {"op": "PUSH1", "value": "0x40"}, "3753": {"op": "DUP3"}, "3754": {"op": "ADD"}, "3755": {"op": "MSTORE"}, "3756": {"op": "PUSH1", "value": "0x60"}, "3758": {"op": "ADD"}, "3759": {"op": "SWAP1"}, "3760": {"jump": "o", "op": "JUMP"}, "3761": {"op": "JUMPDEST"}, "3762": {"op": "PUSH1", "value": "0x20"}, "3764": {"op": "DUP1"}, "3765": {"op": "DUP3"}, "3766": {"op": "MSTORE"}, "3767": {"op": "DUP2"}, "3768": {"op": "DUP2"}, "3769": {"op": "ADD"}, "3770": {"op": "MSTORE"}, "3771": {"op": "PUSH32", "value": "0x596F7520646F6E2774206861766520656E6F756768204C5020746F6B656E732E"}, "3804": {"op": "PUSH1", "value": "0x40"}, "3806": {"op": "DUP3"}, "3807": {"op": "ADD"}, "3808": {"op": "MSTORE"}, "3809": {"op": "PUSH1", "value": "0x60"}, "3811": {"op": "ADD"}, "3812": {"op": "SWAP1"}, "3813": {"jump": "o", "op": "JUMP"}, "3814": {"op": "JUMPDEST"}, "3815": {"op": "PUSH1", "value": "0x20"}, "3817": {"op": "DUP1"}, "3818": {"op": "DUP3"}, "3819": {"op": "MSTORE"}, "3820": {"op": "PUSH1", "value": "0x23"}, "3822": {"op": "SWAP1"}, "3823": {"op": "DUP3"}, "3824": {"op": "ADD"}, "3825": {"op": "MSTORE"}, "3826": {"op": "PUSH32", "value": "0x54686520706F6F6C2073686F756C6420626520696E6974696174656420666972"}, "3859": {"op": "PUSH1", "value": "0x40"}, "3861": {"op": "DUP3"}, "3862": {"op": "ADD"}, "3863": {"op": "MSTORE"}, "3864": {"op": "PUSH3", "value": "0x39BA17"}, "3868": {"op": "PUSH1", "value": "0xE9"}, "3870": {"op": "SHL"}, "3871": {"op": "PUSH1", "value": "0x60"}, "3873": {"op": "DUP3"}, "3874": {"op": "ADD"}, "3875": {"op": "MSTORE"}, "3876": {"op": "PUSH1", "value": "0x80"}, "3878": {"op": "ADD"}, "3879": {"op": "SWAP1"}, "3880": {"jump": "o", "op": "JUMP"}, "3881": {"op": "JUMPDEST"}, "3882": {"op": "PUSH1", "value": "0x20"}, "3884": {"op": "DUP1"}, "3885": {"op": "DUP3"}, "3886": {"op": "MSTORE"}, "3887": {"op": "PUSH1", "value": "0x30"}, "3889": {"op": "SWAP1"}, "3890": {"op": "DUP3"}, "3891": {"op": "ADD"}, "3892": {"op": "MSTORE"}, "3893": {"op": "PUSH32", "value": "0x54686520616D6F756E74206F6620726571756573746564206C7020746F6B656E"}, "3926": {"op": "PUSH1", "value": "0x40"}, "3928": {"op": "DUP3"}, "3929": {"op": "ADD"}, "3930": {"op": "MSTORE"}, "3931": {"op": "PUSH16", "value": "0x399039B437BAB632103132901F101817"}, "3948": {"op": "PUSH1", "value": "0x81"}, "3950": {"op": "SHL"}, "3951": {"op": "PUSH1", "value": "0x60"}, "3953": {"op": "DUP3"}, "3954": {"op": "ADD"}, "3955": {"op": "MSTORE"}, "3956": {"op": "PUSH1", "value": "0x80"}, "3958": {"op": "ADD"}, "3959": {"op": "SWAP1"}, "3960": {"jump": "o", "op": "JUMP"}, "3961": {"op": "JUMPDEST"}, "3962": {"op": "PUSH1", "value": "0x20"}, "3964": {"op": "DUP1"}, "3965": {"op": "DUP3"}, "3966": {"op": "MSTORE"}, "3967": {"op": "DUP2"}, "3968": {"op": "DUP2"}, "3969": {"op": "ADD"}, "3970": {"op": "MSTORE"}, "3971": {"op": "PUSH32", "value": "0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572"}, "4004": {"op": "PUSH1", "value": "0x40"}, "4006": {"op": "DUP3"}, "4007": {"op": "ADD"}, "4008": {"op": "MSTORE"}, "4009": {"op": "PUSH1", "value": "0x60"}, "4011": {"op": "ADD"}, "4012": {"op": "SWAP1"}, "4013": {"jump": "o", "op": "JUMP"}, "4014": {"op": "JUMPDEST"}, "4015": {"op": "PUSH1", "value": "0x20"}, "4017": {"op": "DUP1"}, "4018": {"op": "DUP3"}, "4019": {"op": "MSTORE"}, "4020": {"op": "PUSH1", "value": "0x19"}, "4022": {"op": "SWAP1"}, "4023": {"op": "DUP3"}, "4024": {"op": "ADD"}, "4025": {"op": "MSTORE"}, "4026": {"op": "PUSH32", "value": "0x546F6B656E20616D6F756E7420756E617661696C61626C652E00000000000000"}, "4059": {"op": "PUSH1", "value": "0x40"}, "4061": {"op": "DUP3"}, "4062": {"op": "ADD"}, "4063": {"op": "MSTORE"}, "4064": {"op": "PUSH1", "value": "0x60"}, "4066": {"op": "ADD"}, "4067": {"op": "SWAP1"}, "4068": {"jump": "o", "op": "JUMP"}, "4069": {"op": "JUMPDEST"}, "4070": {"op": "PUSH1", "value": "0x20"}, "4072": {"op": "DUP1"}, "4073": {"op": "DUP3"}, "4074": {"op": "MSTORE"}, "4075": {"op": "PUSH1", "value": "0x35"}, "4077": {"op": "SWAP1"}, "4078": {"op": "DUP3"}, "4079": {"op": "ADD"}, "4080": {"op": "MSTORE"}, "4081": {"op": "PUSH32", "value": "0x54686520616D6F756E74206F662070757263686173656420746F6B656E206973"}, "4114": {"op": "PUSH1", "value": "0x40"}, "4116": {"op": "DUP3"}, "4117": {"op": "ADD"}, "4118": {"op": "MSTORE"}, "4119": {"op": "PUSH21", "value": "0x103637BBB2B9103A3430B7103932B8BAB4B932B217"}, "4141": {"op": "PUSH1", "value": "0x59"}, "4143": {"op": "SHL"}, "4144": {"op": "PUSH1", "value": "0x60"}, "4146": {"op": "DUP3"}, "4147": {"op": "ADD"}, "4148": {"op": "MSTORE"}, "4149": {"op": "PUSH1", "value": "0x80"}, "4151": {"op": "ADD"}, "4152": {"op": "SWAP1"}, "4153": {"jump": "o", "op": "JUMP"}, "4154": {"op": "JUMPDEST"}, "4155": {"op": "SWAP1"}, "4156": {"op": "DUP2"}, "4157": {"op": "MSTORE"}, "4158": {"op": "PUSH1", "value": "0x20"}, "4160": {"op": "ADD"}, "4161": {"op": "SWAP1"}, "4162": {"jump": "o", "op": "JUMP"}, "4163": {"op": "JUMPDEST"}, "4164": {"op": "SWAP2"}, "4165": {"op": "DUP3"}, "4166": {"op": "MSTORE"}, "4167": {"op": "PUSH1", "value": "0x20"}, "4169": {"op": "DUP3"}, "4170": {"op": "ADD"}, "4171": {"op": "MSTORE"}, "4172": {"op": "PUSH1", "value": "0x40"}, "4174": {"op": "ADD"}, "4175": {"op": "SWAP1"}, "4176": {"jump": "o", "op": "JUMP"}, "4177": {"op": "JUMPDEST"}, "4178": {"op": "PUSH1", "value": "0x0"}, "4180": {"op": "DUP3"}, "4181": {"op": "NOT"}, "4182": {"op": "DUP3"}, "4183": {"op": "GT"}, "4184": {"op": "ISZERO"}, "4185": {"op": "PUSH2", "value": "0x1064"}, "4188": {"op": "JUMPI"}, "4189": {"op": "PUSH2", "value": "0x1064"}, "4192": {"op": "PUSH2", "value": "0x10BF"}, "4195": {"jump": "i", "op": "JUMP"}, "4196": {"op": "JUMPDEST"}, "4197": {"op": "POP"}, "4198": {"op": "ADD"}, "4199": {"op": "SWAP1"}, "4200": {"jump": "o", "op": "JUMP"}, "4201": {"op": "JUMPDEST"}, "4202": {"op": "PUSH1", "value": "0x0"}, "4204": {"op": "DUP3"}, "4205": {"op": "PUSH2", "value": "0x1084"}, "4208": {"op": "JUMPI"}, "4209": {"op": "PUSH4", "value": "0x4E487B71"}, "4214": {"op": "PUSH1", "value": "0xE0"}, "4216": {"op": "SHL"}, "4217": {"op": "DUP2"}, "4218": {"op": "MSTORE"}, "4219": {"op": "PUSH1", "value": "0x12"}, "4221": {"op": "PUSH1", "value": "0x4"}, "4223": {"op": "MSTORE"}, "4224": {"op": "PUSH1", "value": "0x24"}, "4226": {"op": "DUP2"}, "4227": {"op": "REVERT"}, "4228": {"op": "JUMPDEST"}, "4229": {"op": "POP"}, "4230": {"op": "DIV"}, "4231": {"op": "SWAP1"}, "4232": {"jump": "o", "op": "JUMP"}, "4233": {"op": "JUMPDEST"}, "4234": {"op": "PUSH1", "value": "0x0"}, "4236": {"op": "DUP2"}, "4237": {"op": "PUSH1", "value": "0x0"}, "4239": {"op": "NOT"}, "4240": {"op": "DIV"}, "4241": {"op": "DUP4"}, "4242": {"op": "GT"}, "4243": {"op": "DUP3"}, "4244": {"op": "ISZERO"}, "4245": {"op": "ISZERO"}, "4246": {"op": "AND"}, "4247": {"op": "ISZERO"}, "4248": {"op": "PUSH2", "value": "0x10A3"}, "4251": {"op": "JUMPI"}, "4252": {"op": "PUSH2", "value": "0x10A3"}, "4255": {"op": "PUSH2", "value": "0x10BF"}, "4258": {"jump": "i", "op": "JUMP"}, "4259": {"op": "JUMPDEST"}, "4260": {"op": "POP"}, "4261": {"op": "MUL"}, "4262": {"op": "SWAP1"}, "4263": {"jump": "o", "op": "JUMP"}, "4264": {"op": "JUMPDEST"}, "4265": {"op": "PUSH1", "value": "0x0"}, "4267": {"op": "DUP3"}, "4268": {"op": "DUP3"}, "4269": {"op": "LT"}, "4270": {"op": "ISZERO"}, "4271": {"op": "PUSH2", "value": "0x10BA"}, "4274": {"op": "JUMPI"}, "4275": {"op": "PUSH2", "value": "0x10BA"}, "4278": {"op": "PUSH2", "value": "0x10BF"}, "4281": {"jump": "i", "op": "JUMP"}, "4282": {"op": "JUMPDEST"}, "4283": {"op": "POP"}, "4284": {"op": "SUB"}, "4285": {"op": "SWAP1"}, "4286": {"jump": "o", "op": "JUMP"}, "4287": {"op": "JUMPDEST"}, "4288": {"op": "PUSH4", "value": "0x4E487B71"}, "4293": {"op": "PUSH1", "value": "0xE0"}, "4295": {"op": "SHL"}, "4296": {"op": "PUSH1", "value": "0x0"}, "4298": {"op": "MSTORE"}, "4299": {"op": "PUSH1", "value": "0x11"}, "4301": {"op": "PUSH1", "value": "0x4"}, "4303": {"op": "MSTORE"}, "4304": {"op": "PUSH1", "value": "0x24"}, "4306": {"op": "PUSH1", "value": "0x0"}, "4308": {"op": "REVERT"}}, "sha1": "24e2cbf9e3c0ee9b87c32eb6eb882f879a55a17a", "source": "// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/utils/math/SafeMath.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\ninterface IERC20 {\n    function transfer(address recipient, uint256 amount) external returns (bool);\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n    function approve(address spender, uint256 amount) external returns (bool);\n}\n\n\ncontract SimpleSwap is Ownable{\n    using SafeMath for uint256;\n\n    enum Tokens{Link, USDC}\n\n    address addressLink = 0xa36085F69e2889c224210F603D836748e7dC0088;   //Kovan address      //0x01BE23585060835E02B77ef475b0Cc51aA1e0709; rinkeby\n    address addressUSDC = 0xb7a4F3E9097C08dA09517b5aB877F7a917224ede;    //Kovan address            //0xeb8f08a975Ab53E34D8a0330E0D34de942C95926; rinkeby\n\n    uint256 public totalAvailableLink = 0;      //18 decimals\n    uint256 public totalAvailableUSDC = 0;      //6 decimals\n\n    uint256  public totalLpTokens = 0;           //6 decimals\n\n    uint256 public FEE = 3 * 10 ** 3;         //6 decimals\n\n    bool isPoolInitiated = false;\n\n    mapping(address => uint256) userToAmountLpTokens;\n\n \n\n    function initiatePool(uint256 amountLinkToSupply, uint256 amountUsdcToSupply) public onlyOwner {\n        require(!isPoolInitiated, \"The pool was already initiated\");\n        isPoolInitiated = true;\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        require(Link.transferFrom(msg.sender, address(this), amountLinkToSupply), \"Link amount unavailable.\");\n        require(USDC.transferFrom(msg.sender, address(this), amountUsdcToSupply), \"USDC amount unavailable.\");\n\n        totalAvailableLink = totalAvailableLink.add(amountLinkToSupply);\n        totalAvailableUSDC = totalAvailableUSDC.add(amountUsdcToSupply);\n\n        totalLpTokens = amountUsdcToSupply;\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].add(totalLpTokens);\n        \n    }\n\n\n    // Basic check: Done\n    function swap(uint256 quantitySoldToken, uint256 minAmountPurchasedToken, Tokens tokenForSale) public {\n        require(isPoolInitiated, \"The pool should be initiated first.\");\n        uint256 amountPurchasedToken = getAmountPurchasedToken(quantitySoldToken, tokenForSale);\n        require(amountPurchasedToken >= minAmountPurchasedToken, \"The amount of purchased token is lower than required.\");\n\n        IERC20 soldToken;\n        IERC20 boughtToken;\n\n        if (tokenForSale == Tokens.Link) {\n            totalAvailableLink  = totalAvailableLink.add(quantitySoldToken);\n            totalAvailableUSDC = totalAvailableUSDC.sub(amountPurchasedToken);\n\n            soldToken = IERC20(addressLink);\n            boughtToken = IERC20(addressUSDC);\n        }\n\n        else {\n            totalAvailableLink = totalAvailableLink.sub(amountPurchasedToken);\n            totalAvailableUSDC = totalAvailableUSDC.add(quantitySoldToken);\n\n            soldToken = IERC20(addressUSDC); \n            boughtToken = IERC20(addressLink);\n        }\n        \n        require(boughtToken.transfer(msg.sender, amountPurchasedToken), \"Token amount unavailable.\");\n        require(soldToken.transferFrom(msg.sender, address(this), quantitySoldToken), \"Token amount unavailable.\");\n\n    }\n\n    // Basic check: Done\n    function supply(uint256 amountLpTokens) public {\n        require(isPoolInitiated, \"The pool should be initiated first.\");\n        require(amountLpTokens > 0, \"The amount of supplied lp tokens should be > 0.\");\n        (uint256 amountLinkPerLpToken, uint256 amountUsdcPerLpToken) = getLpTokenPrice();\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        uint256 amountLinkToSupply = amountLinkPerLpToken.mul(amountLpTokens).div(10 ** 6); // 18 decimals\n        uint256 amountUSDCToSupply = amountUsdcPerLpToken.mul(amountLpTokens).div(10 ** 6); // 6 decimals\n\n        totalAvailableLink = totalAvailableLink.add(amountLinkToSupply);\n        totalAvailableUSDC = totalAvailableUSDC.add(amountUSDCToSupply);\n\n        totalLpTokens = totalLpTokens.add(amountLpTokens);\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].add(amountLpTokens);\n\n        require(Link.transferFrom(msg.sender, address(this), amountLinkToSupply), \"Link amount unavailable.\");\n        require(USDC.transferFrom(msg.sender, address(this), amountUSDCToSupply), \"USDC amount unavailable.\");\n    }\n\n\n    // Basic check: Done\n    function withdraw(uint256 amountLpTokens) public {\n        require(isPoolInitiated, \"The pool should be initiated first.\");\n        require(amountLpTokens > 0, \"The amount of requested lp tokens should be > 0.\");\n        require(userToAmountLpTokens[msg.sender] >= amountLpTokens, \"You don't have enough LP tokens.\");\n        (uint256 amountLinkPerLpToken, uint256 amountUSDCPerLpToken)  = getLpTokenPrice();\n\n        uint256 amountLinkToWithdraw = amountLinkPerLpToken.mul(amountLpTokens).div(10 ** 6);\n        uint256 amountUSDCToWithdraw = amountUSDCPerLpToken.mul(amountLpTokens).div(10 ** 6);\n\n        totalAvailableLink = totalAvailableLink.sub(amountLinkToWithdraw);\n        totalAvailableUSDC = totalAvailableUSDC.sub(amountUSDCToWithdraw);\n\n        totalLpTokens = totalLpTokens.sub(amountLpTokens);\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].sub(amountLpTokens);\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        require(Link.transfer(msg.sender, amountLinkToWithdraw), \"Link amount unavailable.\");\n        require(USDC.transfer(msg.sender, amountUSDCToWithdraw), \"USDC amount unavailable.\");\n\n    }\n\n\n\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n    // Link - USDC                      // 6 decimals\n    function getAmountPurchasedToken(uint256 amount, Tokens tokenForSale) internal view returns(uint256)\n    {\n        uint256 y = (tokenForSale == Tokens.Link) ? totalAvailableUSDC : totalAvailableLink;\n        uint256 x = (tokenForSale == Tokens.Link) ? totalAvailableLink : totalAvailableUSDC;\n\n        uint256 C = totalAvailableUSDC * totalAvailableLink;         // 24 decimals\n        uint256 amountPurchasedTokens = y.sub(C.div(x + amount)); // 6 or 18 decimals\n\n        return amountPurchasedTokens * (10 ** 6 - FEE) / 10 ** 6;\n    }\n\n\n\n    function getLpTokenPrice() public view returns(uint256, uint256) \n    {\n        return (totalAvailableLink.mul(10 ** 6).div(totalLpTokens), totalAvailableUSDC.mul(10 ** 6).div(totalLpTokens));\n    }\n\n\n}\n\n\n", "sourceMap": "462:6186:3:-:0;;;560:64;;;-1:-1:-1;;;;;;560:64:3;;;582:42;560:64;;;;707;;;;;;729:42;707:64;;;560;862:37;;;;924;;;;986:33;;1070:11;1049:32;;1109:28;;;-1:-1:-1;;1109:28:3;;;462:6186;;;;;;;;;-1:-1:-1;867:23:0;877:12;:10;:12::i;:::-;867:9;:23::i;:::-;462:6186:3;;586:96:1;665:10;586:96;:::o;2041:169:0:-;2096:16;2115:6;;-1:-1:-1;;;;;2131:17:0;;;-1:-1:-1;;;;;;2131:17:0;;;;;;2163:40;;2115:6;;;;;;;2163:40;;2096:16;2163:40;2041:169;;:::o;462:6186:3:-;;;;;;;", "sourcePath": "contracts/SimpleSwap.sol", "type": "contract", "deployment": {"address": "0xec0429a31d86da174AC7246004A465B90DF47225", "chainid": "42", "blockHeight": 32353406}}
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usdcInfo = exports.simpleSwapInfo = exports.linkInfo = void 0;
const simpleSwapInfo = {
  "contractAddress": "0xec0429a31d86da174AC7246004A465B90DF47225",
  "abi": require("../build/deployments/42/0xec0429a31d86da174AC7246004A465B90DF47225.json")["abi"]
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

},{"../build/contracts/IERC20.json":1,"../build/deployments/42/0xec0429a31d86da174AC7246004A465B90DF47225.json":2}],4:[function(require,module,exports){
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

            // Return ??0 if x is ??0 or y is ??Infinity, or return ??Infinity as y is ??0.
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

        // No exception on ??Infinity or NaN.
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
     * value of this BigNumber, or null if the value of this BigNumber is ??Infinity or NaN.
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

      // Allow NaN and ??Infinity, but not other non-integers.
      if (n.c && !n.isInteger()) {
        throw Error
          (bignumberError + 'Exponent not an integer: ' + valueOf(n));
      }

      if (m != null) m = new BigNumber(m);

      // Exponent of MAX_SAFE_INTEGER is 15.
      nIsBig = n.e > 14;

      // If x is NaN, ??Infinity, ??0 or ??1, or n is ??Infinity, NaN or ??0.
      if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

        // The sign of the result of pow when x is negative depends on the evenness of n.
        // If +n overflows to ??Infinity, the evenness of n would be not be known.
        y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
        return m ? y.mod(m) : y;
      }

      nIsNeg = n.s < 0;

      if (m) {

        // x % m returns NaN if abs(m) is zero, or m is NaN.
        if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

        isModExp = !nIsNeg && x.isInteger() && m.isInteger();

        if (isModExp) x = x.mod(m);

      // Overflow to ??Infinity: >=2**1e10 or >=1.0000024**1e15.
      // Underflow to ??0: <=0.79**1e10 or <=0.9999975**1e15.
      } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
        // [1, 240000000]
        ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
        // [80000000000000]  [99999750000000]
        : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

        // If x is negative and n is odd, k = -0, else k = 0.
        k = x.s < 0 && isOdd(n) ? -0 : 0;

        // If x >= 1, k = ??Infinity.
        if (x.e > -1) k = 1 / k;

        // If n is negative return ??0, else return ??Infinity.
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

      // Either NaN, ??Infinity or ??0?
      if (!xc || !yc || !xc[0] || !yc[0]) {

        // Return NaN if either is NaN, or one is 0 and the other is Infinity.
        if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
          y.c = y.e = y.s = null;
        } else {
          y.s *= x.s;

          // Return ??Infinity if either is ??Infinity.
          if (!xc || !yc) {
            y.c = y.e = null;

          // Return ??0 if either is ??0.
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

        // Return ??Infinity if either ??Infinity.
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
     * the value of this BigNumber, or null if the value of this BigNumber is ??Infinity or NaN.
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

},{}],5:[function(require,module,exports){
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
  let xAsBigNumber = new BigNumber(x);
  let yAsBigNumberWithDecimals = new BigNumber("1".concat("0".repeat(numberDecimals)));
  return xAsBigNumber.multipliedBy(yAsBigNumberWithDecimals);
} // returns  BigNumber


async function getTotalAvailableLinkBigNumberWithDecimals() {
  const readOptionsTotalAvailableLink = {
    contractAddress: _contracts_and_abi.simpleSwapInfo["contractAddress"],
    functionName: "totalAvailableLink",
    abi: _contracts_and_abi.simpleSwapInfo["abi"]
  };
  const totalAvailableLink = await Moralis.executeFunction(readOptionsTotalAvailableLink);
  const totalAvailableLinkBigNumber = new BigNumber(totalAvailableLink.toString()); //console.log(totalAvailableLinkBigNumber.shiftedBy(-18).toNumber());

  return totalAvailableLinkBigNumber;
} // returns BigNumber


async function getTotalAvailableUsdcBigNumberWithDecimals() {
  const readOptionsTotalAvailableUsdc = {
    contractAddress: _contracts_and_abi.simpleSwapInfo["contractAddress"],
    functionName: "totalAvailableUSDC",
    abi: _contracts_and_abi.simpleSwapInfo["abi"]
  };
  const totalAvailableUSDC = await Moralis.executeFunction(readOptionsTotalAvailableUsdc);
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

function reverseButtons() {
  const linkInput = document.getElementById("link-input");
  const usdcInput = document.getElementById("usdc-input");
  linkInput.name = "usdc";
  linkInput.id = "usdc-input";
  linkInput.onchange = changeLinkInput;
  usdcInput.name = "link";
  usdcInput.id = "link-input";
  usdcInput.onchange = changeUsdcInput;
  const linkLabel = document.getElementById("link-swap-label-id");
  const usdcLabel = document.getElementById("usdc-swap-label-id");
  linkLabel.for = "usdc";
  linkLabel.id = "usdc-swap-label-id";
  linkLabel.innerHTML = "USDC";
  usdcLabel.for = "link";
  usdcLabel.id = "link-swap-label-id";
  usdcLabel.innerHTML = "link";
}

},{"./contracts_and_abi.js":3,"bignumber.js":4}]},{},[5]);
