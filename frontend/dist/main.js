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
        1075
      ],
      "IERC20": [
        33
      ],
      "Ownable": [
        742
      ],
      "SafeMath": [
        1054
      ],
      "SimpleSwap": [
        638
      ]
    },
    "id": 639,
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
        "scope": 639,
        "sourceUnit": 1055,
        "src": "64:57:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 639,
        "sourceUnit": 743,
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
        "scope": 639,
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
              "referencedDeclaration": 742,
              "src": "485:7:3"
            },
            "id": 35,
            "nodeType": "InheritanceSpecifier",
            "src": "485:7:3"
          }
        ],
        "contractDependencies": [
          742,
          1075
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 638,
        "linearizedBaseContracts": [
          638,
          742,
          1075
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
              "referencedDeclaration": 1054,
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
            "scope": 638,
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
            "scope": 638,
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
            "scope": 638,
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
            "scope": 638,
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
            "scope": 638,
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
            "scope": 638,
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
            "scope": 638,
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
            "scope": 638,
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
                                  "typeIdentifier": "t_contract$_SimpleSwap_$638",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$638",
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
                                  "typeIdentifier": "t_contract$_SimpleSwap_$638",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$638",
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
                        "referencedDeclaration": 918,
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
                        "referencedDeclaration": 918,
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
                        "referencedDeclaration": 918,
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
                  "referencedDeclaration": 685,
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
            "scope": 638,
            "src": "1201:803:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 286,
              "nodeType": "Block",
              "src": "2135:1262:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 176,
                          "name": "quantitySoldToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 165,
                          "src": "2232:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2252:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2232:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520616d6f756e7420746f2073656c6c2073686f756c64206265207374726963746c7920626967676572207468616e20302e",
                        "id": 179,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2255:54:3",
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
                      "id": 175,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2224:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2224:86:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 181,
                  "nodeType": "ExpressionStatement",
                  "src": "2224:86:3"
                },
                {
                  "assignments": [
                    183
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 183,
                      "mutability": "mutable",
                      "name": "amountPurchasedToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 286,
                      "src": "2320:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 182,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2320:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 188,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 185,
                        "name": "quantitySoldToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 165,
                        "src": "2375:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 186,
                        "name": "tokenForSale",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 170,
                        "src": "2394:12:3",
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
                      "id": 184,
                      "name": "getAmountPurchasedToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 598,
                      "src": "2351:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_enum$_Token_$41_$returns$_t_uint256_$",
                        "typeString": "function (uint256,enum SimpleSwap.Token) view returns (uint256)"
                      }
                    },
                    "id": 187,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2351:56:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2320:87:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 192,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 190,
                          "name": "amountPurchasedToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 183,
                          "src": "2425:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 191,
                          "name": "minAmountPurchasedToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 167,
                          "src": "2449:23:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2425:47:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520616d6f756e74206f662070757263686173656420746f6b656e206973206c6f776572207468616e2072657175697265642e",
                        "id": 193,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2474:55:3",
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
                      "id": 189,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2417:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2417:113:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 195,
                  "nodeType": "ExpressionStatement",
                  "src": "2417:113:3"
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
                      "name": "soldToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 286,
                      "src": "2541:16:3",
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
                  "id": 199,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2541:16:3"
                },
                {
                  "assignments": [
                    202
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 202,
                      "mutability": "mutable",
                      "name": "boughtToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 286,
                      "src": "2567:18:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 201,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 200,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "2567:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "2567:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 203,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2567:18:3"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_enum$_Token_$41",
                      "typeString": "enum SimpleSwap.Token"
                    },
                    "id": 207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 204,
                      "name": "tokenForSale",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 170,
                      "src": "2600:12:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_Token_$41",
                        "typeString": "enum SimpleSwap.Token"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "id": 205,
                        "name": "Token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41,
                        "src": "2616:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_Token_$41_$",
                          "typeString": "type(enum SimpleSwap.Token)"
                        }
                      },
                      "id": 206,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "Link",
                      "nodeType": "MemberAccess",
                      "src": "2616:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_Token_$41",
                        "typeString": "enum SimpleSwap.Token"
                      }
                    },
                    "src": "2600:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 261,
                    "nodeType": "Block",
                    "src": "2903:260:3",
                    "statements": [
                      {
                        "expression": {
                          "id": 240,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 235,
                            "name": "totalAvailableLink",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50,
                            "src": "2917:18:3",
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
                                "id": 238,
                                "name": "amountPurchasedToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 183,
                                "src": "2961:20:3",
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
                                "id": 236,
                                "name": "totalAvailableLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50,
                                "src": "2938:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 237,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 933,
                              "src": "2938:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 239,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2938:44:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2917:65:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 241,
                        "nodeType": "ExpressionStatement",
                        "src": "2917:65:3"
                      },
                      {
                        "expression": {
                          "id": 247,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 242,
                            "name": "totalAvailableUSDC",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53,
                            "src": "2996:18:3",
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
                                "id": 245,
                                "name": "quantitySoldToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 165,
                                "src": "3040:17:3",
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
                                "id": 243,
                                "name": "totalAvailableUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53,
                                "src": "3017:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 244,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 918,
                              "src": "3017:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 246,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3017:41:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2996:62:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 248,
                        "nodeType": "ExpressionStatement",
                        "src": "2996:62:3"
                      },
                      {
                        "expression": {
                          "id": 253,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 249,
                            "name": "soldToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 198,
                            "src": "3073:9:3",
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
                                "id": 251,
                                "name": "addressUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47,
                                "src": "3092:11:3",
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
                              "id": 250,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33,
                              "src": "3085:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 252,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3085:19:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "src": "3073:31:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$33",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 254,
                        "nodeType": "ExpressionStatement",
                        "src": "3073:31:3"
                      },
                      {
                        "expression": {
                          "id": 259,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 255,
                            "name": "boughtToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 202,
                            "src": "3119:11:3",
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
                                "id": 257,
                                "name": "addressLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 44,
                                "src": "3140:11:3",
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
                              "id": 256,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33,
                              "src": "3133:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 258,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3133:19:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "src": "3119:33:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$33",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 260,
                        "nodeType": "ExpressionStatement",
                        "src": "3119:33:3"
                      }
                    ]
                  },
                  "id": 262,
                  "nodeType": "IfStatement",
                  "src": "2596:567:3",
                  "trueBody": {
                    "id": 234,
                    "nodeType": "Block",
                    "src": "2628:260:3",
                    "statements": [
                      {
                        "expression": {
                          "id": 213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 208,
                            "name": "totalAvailableLink",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50,
                            "src": "2642:18:3",
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
                                "id": 211,
                                "name": "quantitySoldToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 165,
                                "src": "2687:17:3",
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
                                "id": 209,
                                "name": "totalAvailableLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50,
                                "src": "2664:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 210,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 918,
                              "src": "2664:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 212,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2664:41:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2642:63:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 214,
                        "nodeType": "ExpressionStatement",
                        "src": "2642:63:3"
                      },
                      {
                        "expression": {
                          "id": 220,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 215,
                            "name": "totalAvailableUSDC",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 53,
                            "src": "2719:18:3",
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
                                "id": 218,
                                "name": "amountPurchasedToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 183,
                                "src": "2763:20:3",
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
                                "id": 216,
                                "name": "totalAvailableUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 53,
                                "src": "2740:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 217,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 933,
                              "src": "2740:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 219,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2740:44:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2719:65:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 221,
                        "nodeType": "ExpressionStatement",
                        "src": "2719:65:3"
                      },
                      {
                        "expression": {
                          "id": 226,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 222,
                            "name": "soldToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 198,
                            "src": "2799:9:3",
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
                                "id": 224,
                                "name": "addressLink",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 44,
                                "src": "2818:11:3",
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
                              "id": 223,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33,
                              "src": "2811:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 225,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2811:19:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "src": "2799:31:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$33",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 227,
                        "nodeType": "ExpressionStatement",
                        "src": "2799:31:3"
                      },
                      {
                        "expression": {
                          "id": 232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 228,
                            "name": "boughtToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 202,
                            "src": "2844:11:3",
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
                                "id": 230,
                                "name": "addressUSDC",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 47,
                                "src": "2865:11:3",
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
                              "id": 229,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33,
                              "src": "2858:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 231,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2858:19:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "src": "2844:33:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$33",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 233,
                        "nodeType": "ExpressionStatement",
                        "src": "2844:33:3"
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
                              "id": 266,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3209:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 267,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "3209:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 268,
                            "name": "amountPurchasedToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 183,
                            "src": "3221:20:3",
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
                            "id": 264,
                            "name": "boughtToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 202,
                            "src": "3188:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 265,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 12,
                          "src": "3188:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 269,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3188:54:3",
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
                      "id": 263,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -3,
                      "src": "3181:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 270,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3181:62:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 271,
                  "nodeType": "ExpressionStatement",
                  "src": "3181:62:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 275,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3284:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 276,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "3284:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 279,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "3304:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$638",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$638",
                                  "typeString": "contract SimpleSwap"
                                }
                              ],
                              "id": 278,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3296:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 277,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3296:7:3",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 280,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3296:13:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 281,
                            "name": "quantitySoldToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 165,
                            "src": "3311:17:3",
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
                            "id": 273,
                            "name": "soldToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 198,
                            "src": "3261:9:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 274,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 23,
                          "src": "3261:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 282,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3261:68:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5472616e73666572206f662074686520616d6f756e74206f6620746f6b656e20796f752077616e7420746f2073656c6c206661696c65642e",
                        "id": 283,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3331:58:3",
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
                      "id": 272,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3253:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 284,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3253:137:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 285,
                  "nodeType": "ExpressionStatement",
                  "src": "3253:137:3"
                }
              ]
            },
            "functionSelector": "5c36d25e",
            "id": 287,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 173,
                "modifierName": {
                  "id": 172,
                  "name": "onlyAfterInitialization",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 637,
                  "src": "2111:23:3"
                },
                "nodeType": "ModifierInvocation",
                "src": "2111:23:3"
              }
            ],
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
                  "scope": 287,
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
                  "scope": 287,
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
                  "scope": 287,
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
              "id": 174,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2135:0:3"
            },
            "scope": 638,
            "src": "2010:1387:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 408,
              "nodeType": "Block",
              "src": "3474:1093:3",
              "statements": [
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
                          "referencedDeclaration": 289,
                          "src": "3571:14:3",
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
                          "src": "3588:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3571:18:3",
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
                        "src": "3591:49:3",
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
                      "src": "3563:7:3",
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
                    "src": "3563:78:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 300,
                  "nodeType": "ExpressionStatement",
                  "src": "3563:78:3"
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
                      "src": "3652:28:3",
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
                        "src": "3652:7:3",
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
                      "src": "3682:28:3",
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
                        "src": "3682:7:3",
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
                      "src": "3714:15:3",
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
                    "src": "3714:17:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3651:80:3"
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
                      "src": "3742:11:3",
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
                          "src": "3742:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "3742:6:3",
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
                        "src": "3763:11:3",
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
                      "src": "3756:6:3",
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
                    "src": "3756:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3742:33:3"
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
                      "src": "3785:11:3",
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
                          "src": "3785:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "3785:6:3",
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
                        "src": "3806:11:3",
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
                      "src": "3799:6:3",
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
                    "src": "3799:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3785:33:3"
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
                      "src": "3829:26:3",
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
                        "src": "3829:7:3",
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
                          "src": "3903:2:3",
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
                          "src": "3909:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "3903:7:3",
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
                            "referencedDeclaration": 289,
                            "src": "3883:14:3",
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
                            "src": "3858:20:3",
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
                          "referencedDeclaration": 948,
                          "src": "3858:24:3",
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
                        "src": "3858:40:3",
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
                      "referencedDeclaration": 963,
                      "src": "3858:44:3",
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
                    "src": "3858:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3829:82:3"
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
                      "src": "3936:26:3",
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
                        "src": "3936:7:3",
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
                          "src": "4010:2:3",
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
                          "src": "4016:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "4010:7:3",
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
                            "referencedDeclaration": 289,
                            "src": "3990:14:3",
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
                            "src": "3965:20:3",
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
                          "referencedDeclaration": 948,
                          "src": "3965:24:3",
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
                        "src": "3965:40:3",
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
                      "referencedDeclaration": 963,
                      "src": "3965:44:3",
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
                    "src": "3965:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3936:82:3"
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
                      "src": "4043:18:3",
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
                          "src": "4087:18:3",
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
                          "src": "4064:18:3",
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
                        "referencedDeclaration": 918,
                        "src": "4064:22:3",
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
                      "src": "4064:42:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4043:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 352,
                  "nodeType": "ExpressionStatement",
                  "src": "4043:63:3"
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
                      "src": "4116:18:3",
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
                          "src": "4160:18:3",
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
                          "src": "4137:18:3",
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
                        "referencedDeclaration": 918,
                        "src": "4137:22:3",
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
                      "src": "4137:42:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4116:63:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 359,
                  "nodeType": "ExpressionStatement",
                  "src": "4116:63:3"
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
                      "src": "4190:13:3",
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
                          "referencedDeclaration": 289,
                          "src": "4224:14:3",
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
                          "src": "4206:13:3",
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
                        "referencedDeclaration": 918,
                        "src": "4206:17:3",
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
                      "src": "4206:33:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4190:49:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 366,
                  "nodeType": "ExpressionStatement",
                  "src": "4190:49:3"
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
                        "src": "4250:20:3",
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
                          "src": "4271:3:3",
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
                        "src": "4271:10:3",
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
                      "src": "4250:32:3",
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
                          "referencedDeclaration": 289,
                          "src": "4322:14:3",
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
                            "src": "4285:20:3",
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
                              "src": "4306:3:3",
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
                            "src": "4306:10:3",
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
                          "src": "4285:32:3",
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
                        "referencedDeclaration": 918,
                        "src": "4285:36:3",
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
                      "src": "4285:52:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4250:87:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 379,
                  "nodeType": "ExpressionStatement",
                  "src": "4250:87:3"
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
                              "src": "4374:3:3",
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
                            "src": "4374:10:3",
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
                                "src": "4394:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$638",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$638",
                                  "typeString": "contract SimpleSwap"
                                }
                              ],
                              "id": 386,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4386:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 385,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4386:7:3",
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
                            "src": "4386:13:3",
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
                            "src": "4401:18:3",
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
                            "src": "4356:4:3",
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
                          "src": "4356:17:3",
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
                        "src": "4356:64:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5472616e73666572206f66204c696e6b206661696c65642e",
                        "id": 391,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4422:26:3",
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
                      "id": 380,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4348:7:3",
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
                    "src": "4348:101:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 393,
                  "nodeType": "ExpressionStatement",
                  "src": "4348:101:3"
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
                              "src": "4485:3:3",
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
                            "src": "4485:10:3",
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
                                "src": "4505:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$638",
                                  "typeString": "contract SimpleSwap"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_SimpleSwap_$638",
                                  "typeString": "contract SimpleSwap"
                                }
                              ],
                              "id": 400,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4497:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 399,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4497:7:3",
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
                            "src": "4497:13:3",
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
                            "src": "4512:18:3",
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
                            "src": "4467:4:3",
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
                          "src": "4467:17:3",
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
                        "src": "4467:64:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5472616e73666572206f662055534443206661696c65642e",
                        "id": 405,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4533:26:3",
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
                      "id": 394,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4459:7:3",
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
                    "src": "4459:101:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 407,
                  "nodeType": "ExpressionStatement",
                  "src": "4459:101:3"
                }
              ]
            },
            "functionSelector": "35403023",
            "id": 409,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 292,
                "modifierName": {
                  "id": 291,
                  "name": "onlyAfterInitialization",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 637,
                  "src": "3450:23:3"
                },
                "nodeType": "ModifierInvocation",
                "src": "3450:23:3"
              }
            ],
            "name": "supply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 290,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 289,
                  "mutability": "mutable",
                  "name": "amountLpTokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 409,
                  "src": "3419:22:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 288,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3419:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3418:24:3"
            },
            "returnParameters": {
              "id": 293,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3474:0:3"
            },
            "scope": 638,
            "src": "3403:1164:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 530,
              "nodeType": "Block",
              "src": "4646:1087:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 419,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 417,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 411,
                          "src": "4743:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 418,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4760:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4743:18:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520616d6f756e74206f6620726571756573746564206c7020746f6b656e732073686f756c64206265203e20302e",
                        "id": 420,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4763:50:3",
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
                      "id": 416,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4735:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4735:79:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 422,
                  "nodeType": "ExpressionStatement",
                  "src": "4735:79:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 429,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 424,
                            "name": "userToAmountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70,
                            "src": "4832:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 427,
                          "indexExpression": {
                            "expression": {
                              "id": 425,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4853:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 426,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4853:10:3",
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
                          "src": "4832:32:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 428,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 411,
                          "src": "4868:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4832:50:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f7520646f6e2774206861766520656e6f756768206c7020746f6b656e732e",
                        "id": 430,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4884:34:3",
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
                      "id": 423,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4824:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4824:95:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 432,
                  "nodeType": "ExpressionStatement",
                  "src": "4824:95:3"
                },
                {
                  "assignments": [
                    434,
                    436
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 434,
                      "mutability": "mutable",
                      "name": "amountLinkPerLpToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 530,
                      "src": "4930:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 433,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4930:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 436,
                      "mutability": "mutable",
                      "name": "amountUSDCPerLpToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 530,
                      "src": "4960:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 435,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4960:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 439,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 437,
                      "name": "getLpTokenPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 628,
                      "src": "4993:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function () view returns (uint256,uint256)"
                      }
                    },
                    "id": 438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4993:17:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4929:81:3"
                },
                {
                  "assignments": [
                    441
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 441,
                      "mutability": "mutable",
                      "name": "amountLinkToWithdraw",
                      "nodeType": "VariableDeclaration",
                      "scope": 530,
                      "src": "5021:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 440,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5021:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 451,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        },
                        "id": 449,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 447,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5097:2:3",
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
                          "id": 448,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5103:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "5097:7:3",
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
                            "id": 444,
                            "name": "amountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 411,
                            "src": "5077:14:3",
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
                            "id": 442,
                            "name": "amountLinkPerLpToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 434,
                            "src": "5052:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 443,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 948,
                          "src": "5052:24:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 445,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5052:40:3",
                        "tryCall": false,
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
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 963,
                      "src": "5052:44:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 450,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5052:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5021:84:3"
                },
                {
                  "assignments": [
                    453
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 453,
                      "mutability": "mutable",
                      "name": "amountUSDCToWithdraw",
                      "nodeType": "VariableDeclaration",
                      "scope": 530,
                      "src": "5115:28:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 452,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5115:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 463,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        },
                        "id": 461,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 459,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5191:2:3",
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
                          "id": 460,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5197:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "5191:7:3",
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
                            "id": 456,
                            "name": "amountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 411,
                            "src": "5171:14:3",
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
                            "id": 454,
                            "name": "amountUSDCPerLpToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 436,
                            "src": "5146:20:3",
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
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 948,
                          "src": "5146:24:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 457,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5146:40:3",
                        "tryCall": false,
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
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 963,
                      "src": "5146:44:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5146:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5115:84:3"
                },
                {
                  "expression": {
                    "id": 469,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 464,
                      "name": "totalAvailableLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "5210:18:3",
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
                          "id": 467,
                          "name": "amountLinkToWithdraw",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 441,
                          "src": "5254:20:3",
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
                          "id": 465,
                          "name": "totalAvailableLink",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50,
                          "src": "5231:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 466,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 933,
                        "src": "5231:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 468,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5231:44:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5210:65:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 470,
                  "nodeType": "ExpressionStatement",
                  "src": "5210:65:3"
                },
                {
                  "expression": {
                    "id": 476,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 471,
                      "name": "totalAvailableUSDC",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53,
                      "src": "5285:18:3",
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
                          "id": 474,
                          "name": "amountUSDCToWithdraw",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 453,
                          "src": "5329:20:3",
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
                          "id": 472,
                          "name": "totalAvailableUSDC",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 53,
                          "src": "5306:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 473,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 933,
                        "src": "5306:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 475,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5306:44:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5285:65:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 477,
                  "nodeType": "ExpressionStatement",
                  "src": "5285:65:3"
                },
                {
                  "expression": {
                    "id": 483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 478,
                      "name": "totalLpTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "5361:13:3",
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
                          "id": 481,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 411,
                          "src": "5395:14:3",
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
                          "id": 479,
                          "name": "totalLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56,
                          "src": "5377:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 480,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 933,
                        "src": "5377:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 482,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5377:33:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5361:49:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 484,
                  "nodeType": "ExpressionStatement",
                  "src": "5361:49:3"
                },
                {
                  "expression": {
                    "id": 496,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 485,
                        "name": "userToAmountLpTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "5421:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 488,
                      "indexExpression": {
                        "expression": {
                          "id": 486,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "5442:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 487,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5442:10:3",
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
                      "src": "5421:32:3",
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
                          "id": 494,
                          "name": "amountLpTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 411,
                          "src": "5493:14:3",
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
                            "id": 489,
                            "name": "userToAmountLpTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70,
                            "src": "5456:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 492,
                          "indexExpression": {
                            "expression": {
                              "id": 490,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "5477:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 491,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "5477:10:3",
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
                          "src": "5456:32:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 493,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 933,
                        "src": "5456:36:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 495,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5456:52:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5421:87:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 497,
                  "nodeType": "ExpressionStatement",
                  "src": "5421:87:3"
                },
                {
                  "assignments": [
                    500
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 500,
                      "mutability": "mutable",
                      "name": "Link",
                      "nodeType": "VariableDeclaration",
                      "scope": 530,
                      "src": "5519:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 499,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 498,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "5519:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "5519:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 504,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 502,
                        "name": "addressLink",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "5540:11:3",
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
                      "id": 501,
                      "name": "IERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "5533:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                        "typeString": "type(contract IERC20)"
                      }
                    },
                    "id": 503,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5533:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5519:33:3"
                },
                {
                  "assignments": [
                    507
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 507,
                      "mutability": "mutable",
                      "name": "USDC",
                      "nodeType": "VariableDeclaration",
                      "scope": 530,
                      "src": "5562:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$33",
                        "typeString": "contract IERC20"
                      },
                      "typeName": {
                        "id": 506,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 505,
                          "name": "IERC20",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 33,
                          "src": "5562:6:3"
                        },
                        "referencedDeclaration": 33,
                        "src": "5562:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$33",
                          "typeString": "contract IERC20"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 511,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 509,
                        "name": "addressUSDC",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 47,
                        "src": "5583:11:3",
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
                      "id": 508,
                      "name": "IERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33,
                      "src": "5576:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_IERC20_$33_$",
                        "typeString": "type(contract IERC20)"
                      }
                    },
                    "id": 510,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5576:19:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$33",
                      "typeString": "contract IERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5562:33:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 515,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "5627:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 516,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "5627:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 517,
                            "name": "amountLinkToWithdraw",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 441,
                            "src": "5639:20:3",
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
                            "id": 513,
                            "name": "Link",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 500,
                            "src": "5613:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$33",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 514,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 12,
                          "src": "5613:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 518,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5613:47:3",
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
                      "id": 512,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -3,
                      "src": "5606:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 519,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5606:55:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 520,
                  "nodeType": "ExpressionStatement",
                  "src": "5606:55:3"
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
                              "src": "5692:3:3",
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
                            "src": "5692:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 526,
                            "name": "amountUSDCToWithdraw",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 453,
                            "src": "5704:20:3",
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
                            "name": "USDC",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 507,
                            "src": "5678:4:3",
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
                          "src": "5678:13:3",
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
                        "src": "5678:47:3",
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
                      "src": "5671:6:3",
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
                    "src": "5671:55:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 529,
                  "nodeType": "ExpressionStatement",
                  "src": "5671:55:3"
                }
              ]
            },
            "functionSelector": "2e1a7d4d",
            "id": 531,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 414,
                "modifierName": {
                  "id": 413,
                  "name": "onlyAfterInitialization",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 637,
                  "src": "4622:23:3"
                },
                "nodeType": "ModifierInvocation",
                "src": "4622:23:3"
              }
            ],
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
                  "scope": 531,
                  "src": "4591:22:3",
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
                    "src": "4591:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4590:24:3"
            },
            "returnParameters": {
              "id": 415,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4646:0:3"
            },
            "scope": 638,
            "src": "4573:1160:3",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 597,
              "nodeType": "Block",
              "src": "6054:449:3",
              "statements": [
                {
                  "assignments": [
                    542
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 542,
                      "mutability": "mutable",
                      "name": "y",
                      "nodeType": "VariableDeclaration",
                      "scope": 597,
                      "src": "6064:9:3",
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
                        "src": "6064:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 551,
                  "initialValue": {
                    "condition": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_enum$_Token_$41",
                            "typeString": "enum SimpleSwap.Token"
                          },
                          "id": 546,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 543,
                            "name": "tokenForSale",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 536,
                            "src": "6077:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_Token_$41",
                              "typeString": "enum SimpleSwap.Token"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 544,
                              "name": "Token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41,
                              "src": "6093:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_Token_$41_$",
                                "typeString": "type(enum SimpleSwap.Token)"
                              }
                            },
                            "id": 545,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "Link",
                            "nodeType": "MemberAccess",
                            "src": "6093:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_Token_$41",
                              "typeString": "enum SimpleSwap.Token"
                            }
                          },
                          "src": "6077:26:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 547,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "6076:28:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 549,
                      "name": "totalAvailableLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "6128:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 550,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "6076:70:3",
                    "trueExpression": {
                      "id": 548,
                      "name": "totalAvailableUSDC",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53,
                      "src": "6107:18:3",
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
                  "src": "6064:82:3"
                },
                {
                  "assignments": [
                    553
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 553,
                      "mutability": "mutable",
                      "name": "x",
                      "nodeType": "VariableDeclaration",
                      "scope": 597,
                      "src": "6156:9:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 552,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6156:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 562,
                  "initialValue": {
                    "condition": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_enum$_Token_$41",
                            "typeString": "enum SimpleSwap.Token"
                          },
                          "id": 557,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 554,
                            "name": "tokenForSale",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 536,
                            "src": "6169:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_Token_$41",
                              "typeString": "enum SimpleSwap.Token"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 555,
                              "name": "Token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41,
                              "src": "6185:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_Token_$41_$",
                                "typeString": "type(enum SimpleSwap.Token)"
                              }
                            },
                            "id": 556,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "Link",
                            "nodeType": "MemberAccess",
                            "src": "6185:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_Token_$41",
                              "typeString": "enum SimpleSwap.Token"
                            }
                          },
                          "src": "6169:26:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 558,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "6168:28:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 560,
                      "name": "totalAvailableUSDC",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 53,
                      "src": "6220:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 561,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "6168:70:3",
                    "trueExpression": {
                      "id": 559,
                      "name": "totalAvailableLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50,
                      "src": "6199:18:3",
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
                  "src": "6156:82:3"
                },
                {
                  "assignments": [
                    564
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 564,
                      "mutability": "mutable",
                      "name": "C",
                      "nodeType": "VariableDeclaration",
                      "scope": 597,
                      "src": "6249:9:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 563,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6249:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 569,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 567,
                        "name": "totalAvailableLink",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50,
                        "src": "6284:18:3",
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
                        "id": 565,
                        "name": "totalAvailableUSDC",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 53,
                        "src": "6261:18:3",
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
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 948,
                      "src": "6261:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 568,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6261:42:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6249:54:3"
                },
                {
                  "assignments": [
                    571
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 571,
                      "mutability": "mutable",
                      "name": "amountPurchasedTokens",
                      "nodeType": "VariableDeclaration",
                      "scope": 597,
                      "src": "6336:29:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 570,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6336:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 582,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 578,
                                "name": "amountSoldTokens",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 533,
                                "src": "6386:16:3",
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
                                "name": "x",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 553,
                                "src": "6380:1:3",
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
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 918,
                              "src": "6380:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 579,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6380:23:3",
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
                            "id": 574,
                            "name": "C",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 564,
                            "src": "6374:1:3",
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
                          "memberName": "div",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 963,
                          "src": "6374:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 580,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6374:30:3",
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
                        "id": 572,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 542,
                        "src": "6368:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 573,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 933,
                      "src": "6368:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 581,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6368:37:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6336:69:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_rational_1000000_by_1",
                          "typeString": "int_const 1000000"
                        },
                        "id": 594,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 592,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6488:2:3",
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
                          "id": 593,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6494:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_6_by_1",
                            "typeString": "int_const 6"
                          },
                          "value": "6"
                        },
                        "src": "6488:7:3",
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
                            "id": 589,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_rational_1000000_by_1",
                                "typeString": "int_const 1000000"
                              },
                              "id": 587,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "3130",
                                "id": 585,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6469:2:3",
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
                                "id": 586,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6475:1:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_6_by_1",
                                  "typeString": "int_const 6"
                                },
                                "value": "6"
                              },
                              "src": "6469:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1000000_by_1",
                                "typeString": "int_const 1000000"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 588,
                              "name": "FEE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63,
                              "src": "6479:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "6469:13:3",
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
                            "name": "amountPurchasedTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 571,
                            "src": "6443:21:3",
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
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 948,
                          "src": "6443:25:3",
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
                        "src": "6443:40:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 963,
                      "src": "6443:44:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 595,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6443:53:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 540,
                  "id": 596,
                  "nodeType": "Return",
                  "src": "6436:60:3"
                }
              ]
            },
            "id": 598,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAmountPurchasedToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 533,
                  "mutability": "mutable",
                  "name": "amountSoldTokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 598,
                  "src": "5973:24:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 532,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5973:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 536,
                  "mutability": "mutable",
                  "name": "tokenForSale",
                  "nodeType": "VariableDeclaration",
                  "scope": 598,
                  "src": "5999:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_Token_$41",
                    "typeString": "enum SimpleSwap.Token"
                  },
                  "typeName": {
                    "id": 535,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 534,
                      "name": "Token",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41,
                      "src": "5999:5:3"
                    },
                    "referencedDeclaration": 41,
                    "src": "5999:5:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_Token_$41",
                      "typeString": "enum SimpleSwap.Token"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5972:46:3"
            },
            "returnParameters": {
              "id": 540,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 539,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 598,
                  "src": "6041:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 538,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6041:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6040:9:3"
            },
            "scope": 638,
            "src": "5940:563:3",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 627,
              "nodeType": "Block",
              "src": "6603:128:3",
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
                            "src": "6657:13:3",
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
                                  "src": "6644:2:3",
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
                                  "src": "6650:1:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_6_by_1",
                                    "typeString": "int_const 6"
                                  },
                                  "value": "6"
                                },
                                "src": "6644:7:3",
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
                                "src": "6621:18:3",
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
                              "referencedDeclaration": 948,
                              "src": "6621:22:3",
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
                            "src": "6621:31:3",
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
                          "referencedDeclaration": 963,
                          "src": "6621:35:3",
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
                        "src": "6621:50:3",
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
                            "src": "6709:13:3",
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
                                  "src": "6696:2:3",
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
                                  "src": "6702:1:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_6_by_1",
                                    "typeString": "int_const 6"
                                  },
                                  "value": "6"
                                },
                                "src": "6696:7:3",
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
                                "src": "6673:18:3",
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
                              "referencedDeclaration": 948,
                              "src": "6673:22:3",
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
                            "src": "6673:31:3",
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
                          "referencedDeclaration": 963,
                          "src": "6673:35:3",
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
                        "src": "6673:50:3",
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
                    "src": "6620:104:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 606,
                  "id": 626,
                  "nodeType": "Return",
                  "src": "6613:111:3"
                }
              ]
            },
            "functionSelector": "6f5cdb6c",
            "id": 628,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 601,
                "modifierName": {
                  "id": 600,
                  "name": "onlyAfterInitialization",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 637,
                  "src": "6543:23:3"
                },
                "nodeType": "ModifierInvocation",
                "src": "6543:23:3"
              }
            ],
            "name": "getLpTokenPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 599,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6533:2:3"
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
                  "src": "6580:7:3",
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
                    "src": "6580:7:3",
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
                  "src": "6589:7:3",
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
                    "src": "6589:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6579:18:3"
            },
            "scope": 638,
            "src": "6509:222:3",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 636,
              "nodeType": "Block",
              "src": "6771:95:3",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 631,
                        "name": "isPoolInitialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66,
                        "src": "6789:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54686520706f6f6c2073686f756c6420626520696e697469616c697a65642066697273742e",
                        "id": 632,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6808:39:3",
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
                      "id": 630,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6781:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 633,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6781:67:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 634,
                  "nodeType": "ExpressionStatement",
                  "src": "6781:67:3"
                },
                {
                  "id": 635,
                  "nodeType": "PlaceholderStatement",
                  "src": "6858:1:3"
                }
              ]
            },
            "id": 637,
            "name": "onlyAfterInitialization",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 629,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6771:0:3"
            },
            "src": "6738:128:3",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 639,
        "src": "462:6406:3"
      }
    ],
    "src": "39:6832:3"
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
  "sha1": "c767ef0f05985423c2f28e5cc1bce26c9e96e960",
  "source": "// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/utils/math/SafeMath.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\ninterface IERC20 {\n    function transfer(address recipient, uint256 amount) external returns (bool);\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n    function approve(address spender, uint256 amount) external returns (bool);\n}\n\n\ncontract SimpleSwap is Ownable {\n    using SafeMath for uint256;\n\n    enum Token{Link, USDC}\n\n    address addressLink = 0xa36085F69e2889c224210F603D836748e7dC0088;   //Kovan address      //0x01BE23585060835E02B77ef475b0Cc51aA1e0709; rinkeby\n    address addressUSDC = 0xb7a4F3E9097C08dA09517b5aB877F7a917224ede;    //Kovan address            //0xeb8f08a975Ab53E34D8a0330E0D34de942C95926; rinkeby\n\n    uint256 public totalAvailableLink = 0;      //18 decimals\n    uint256 public totalAvailableUSDC = 0;      //6 decimals\n\n    uint256  public totalLpTokens = 0;           //6 decimals\n\n    uint256 public FEE = 3 * 10 ** 3;         //6 decimals\n\n    bool isPoolInitialized = false;\n\n    mapping(address => uint256) userToAmountLpTokens;\n\n    function initiatePool(uint256 amountLinkToSupply, uint256 amountUsdcToSupply) public onlyOwner {\n        require(!isPoolInitialized, \"The pool was already initialized.\");\n        isPoolInitialized = true;\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        require(Link.transferFrom(msg.sender, address(this), amountLinkToSupply), \"Link transfer failed.\");\n        require(USDC.transferFrom(msg.sender, address(this), amountUsdcToSupply), \"USDC transfer failed.\");\n\n        totalAvailableLink = totalAvailableLink.add(amountLinkToSupply);\n        totalAvailableUSDC = totalAvailableUSDC.add(amountUsdcToSupply);\n\n        totalLpTokens = amountUsdcToSupply;\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].add(totalLpTokens);\n    }\n\n    function swap(uint256 quantitySoldToken, uint256 minAmountPurchasedToken, Token tokenForSale) public onlyAfterInitialization {\n        //require(isPoolInitialized, \"The pool should be initialized first.\");\n        require(quantitySoldToken > 0, \"The amount to sell should be strictly bigger than 0.\");\n        uint256 amountPurchasedToken = getAmountPurchasedToken(quantitySoldToken, tokenForSale);\n        require(amountPurchasedToken >= minAmountPurchasedToken, \"The amount of purchased token is lower than required.\");\n\n        IERC20 soldToken;\n        IERC20 boughtToken;\n\n        if (tokenForSale == Token.Link) {\n            totalAvailableLink  = totalAvailableLink.add(quantitySoldToken);\n            totalAvailableUSDC = totalAvailableUSDC.sub(amountPurchasedToken);\n\n            soldToken = IERC20(addressLink);\n            boughtToken = IERC20(addressUSDC);\n        }\n\n        else {\n            totalAvailableLink = totalAvailableLink.sub(amountPurchasedToken);\n            totalAvailableUSDC = totalAvailableUSDC.add(quantitySoldToken);\n\n            soldToken = IERC20(addressUSDC); \n            boughtToken = IERC20(addressLink);\n        }\n        \n        assert(boughtToken.transfer(msg.sender, amountPurchasedToken));\n        require(soldToken.transferFrom(msg.sender, address(this), quantitySoldToken), \"Transfer of the amount of token you want to sell failed.\");\n    }\n\n    function supply(uint256 amountLpTokens) public onlyAfterInitialization {\n        //require(isPoolInitialized, \"The pool should be initialized first.\");\n        require(amountLpTokens > 0, \"The amount of supplied lp tokens should be > 0.\");\n        (uint256 amountLinkPerLpToken, uint256 amountUsdcPerLpToken) = getLpTokenPrice();\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        uint256 amountLinkToSupply = amountLinkPerLpToken.mul(amountLpTokens).div(10 ** 6); // 18 decimals\n        uint256 amountUSDCToSupply = amountUsdcPerLpToken.mul(amountLpTokens).div(10 ** 6); // 6 decimals\n\n        totalAvailableLink = totalAvailableLink.add(amountLinkToSupply);\n        totalAvailableUSDC = totalAvailableUSDC.add(amountUSDCToSupply);\n\n        totalLpTokens = totalLpTokens.add(amountLpTokens);\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].add(amountLpTokens);\n\n        require(Link.transferFrom(msg.sender, address(this), amountLinkToSupply), \"Transfer of Link failed.\");\n        require(USDC.transferFrom(msg.sender, address(this), amountUSDCToSupply), \"Transfer of USDC failed.\");\n    }\n\n    function withdraw(uint256 amountLpTokens) public onlyAfterInitialization {\n        //require(isPoolInitialized, \"The pool should be initialized first.\");\n        require(amountLpTokens > 0, \"The amount of requested lp tokens should be > 0.\");\n        require(userToAmountLpTokens[msg.sender] >= amountLpTokens, \"You don't have enough lp tokens.\");\n        (uint256 amountLinkPerLpToken, uint256 amountUSDCPerLpToken)  = getLpTokenPrice();\n\n        uint256 amountLinkToWithdraw = amountLinkPerLpToken.mul(amountLpTokens).div(10 ** 6);\n        uint256 amountUSDCToWithdraw = amountUSDCPerLpToken.mul(amountLpTokens).div(10 ** 6);\n\n        totalAvailableLink = totalAvailableLink.sub(amountLinkToWithdraw);\n        totalAvailableUSDC = totalAvailableUSDC.sub(amountUSDCToWithdraw);\n\n        totalLpTokens = totalLpTokens.sub(amountLpTokens);\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].sub(amountLpTokens);\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        assert(Link.transfer(msg.sender, amountLinkToWithdraw));\n        assert(USDC.transfer(msg.sender, amountUSDCToWithdraw));\n    }\n\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n    // Link - USDC                      // 6 decimals\n    function getAmountPurchasedToken(uint256 amountSoldTokens, Token tokenForSale) internal view returns(uint256)\n    {\n        uint256 y = (tokenForSale == Token.Link) ? totalAvailableUSDC : totalAvailableLink;\n        uint256 x = (tokenForSale == Token.Link) ? totalAvailableLink : totalAvailableUSDC;\n\n        uint256 C = totalAvailableUSDC.mul(totalAvailableLink);         // 24 decimals\n        uint256 amountPurchasedTokens = y.sub(C.div(x.add(amountSoldTokens))); // 6 or 18 decimals\n\n        return amountPurchasedTokens.mul(10 ** 6 - FEE).div(10 ** 6);\n    }\n\n    function getLpTokenPrice() public onlyAfterInitialization view returns(uint256, uint256) \n    {\n        return (totalAvailableLink.mul(10 ** 6).div(totalLpTokens), totalAvailableUSDC.mul(10 ** 6).div(totalLpTokens));\n    }\n\n\n    modifier onlyAfterInitialization {\n        require(isPoolInitialized, \"The pool should be initialized first.\");\n        _;\n    }\n}\n\n\n",
  "sourceMap": "",
  "sourcePath": "contracts/SimpleSwap.sol",
  "type": "interface"
}
},{}],2:[function(require,module,exports){
module.exports={"abi": [{"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"}, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}], "name": "OwnershipTransferred", "type": "event"}, {"inputs": [], "name": "FEE", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getLpTokenPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}, {"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLinkToSupply", "type": "uint256"}, {"internalType": "uint256", "name": "amountUsdcToSupply", "type": "uint256"}], "name": "initiatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "owner", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLpTokens", "type": "uint256"}], "name": "supply", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "quantitySoldToken", "type": "uint256"}, {"internalType": "uint256", "name": "minAmountPurchasedToken", "type": "uint256"}, {"internalType": "enum SimpleSwap.Token", "name": "tokenForSale", "type": "uint8"}], "name": "swap", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "totalAvailableLink", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "totalAvailableUSDC", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "totalLpTokens", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLpTokens", "type": "uint256"}], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function"}], "allSourcePaths": {"0": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/access/Ownable.sol", "1": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/utils/Context.sol", "2": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/utils/math/SafeMath.sol", "3": "contracts/SimpleSwap.sol"}, "ast": {"absolutePath": "contracts/SimpleSwap.sol", "exportedSymbols": {"Context": [1075], "IERC20": [33], "Ownable": [742], "SafeMath": [1054], "SimpleSwap": [638]}, "id": 639, "license": "UNLICENSED", "nodeType": "SourceUnit", "nodes": [{"id": 1, "literals": ["solidity", "^", "0.8", ".0"], "nodeType": "PragmaDirective", "src": "39:23:3"}, {"absolutePath": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/utils/math/SafeMath.sol", "file": "@openzeppelin/contracts/utils/math/SafeMath.sol", "id": 2, "nodeType": "ImportDirective", "scope": 639, "sourceUnit": 1055, "src": "64:57:3", "symbolAliases": [], "unitAlias": ""}, {"absolutePath": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/access/Ownable.sol", "file": "@openzeppelin/contracts/access/Ownable.sol", "id": 3, "nodeType": "ImportDirective", "scope": 639, "sourceUnit": 743, "src": "122:52:3", "symbolAliases": [], "unitAlias": ""}, {"abstract": false, "baseContracts": [], "contractDependencies": [], "contractKind": "interface", "fullyImplemented": false, "id": 33, "linearizedBaseContracts": [33], "name": "IERC20", "nodeType": "ContractDefinition", "nodes": [{"functionSelector": "a9059cbb", "id": 12, "implemented": false, "kind": "function", "modifiers": [], "name": "transfer", "nodeType": "FunctionDefinition", "parameters": {"id": 8, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 5, "mutability": "mutable", "name": "recipient", "nodeType": "VariableDeclaration", "scope": 12, "src": "217:17:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 4, "name": "address", "nodeType": "ElementaryTypeName", "src": "217:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 7, "mutability": "mutable", "name": "amount", "nodeType": "VariableDeclaration", "scope": 12, "src": "236:14:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 6, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "236:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "216:35:3"}, "returnParameters": {"id": 11, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 10, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 12, "src": "270:4:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 9, "name": "bool", "nodeType": "ElementaryTypeName", "src": "270:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "visibility": "internal"}], "src": "269:6:3"}, "scope": 33, "src": "199:77:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "external"}, {"functionSelector": "23b872dd", "id": 23, "implemented": false, "kind": "function", "modifiers": [], "name": "transferFrom", "nodeType": "FunctionDefinition", "parameters": {"id": 19, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 14, "mutability": "mutable", "name": "sender", "nodeType": "VariableDeclaration", "scope": 23, "src": "303:14:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 13, "name": "address", "nodeType": "ElementaryTypeName", "src": "303:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 16, "mutability": "mutable", "name": "recipient", "nodeType": "VariableDeclaration", "scope": 23, "src": "319:17:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 15, "name": "address", "nodeType": "ElementaryTypeName", "src": "319:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 18, "mutability": "mutable", "name": "amount", "nodeType": "VariableDeclaration", "scope": 23, "src": "338:14:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 17, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "338:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "302:51:3"}, "returnParameters": {"id": 22, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 21, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 23, "src": "372:4:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 20, "name": "bool", "nodeType": "ElementaryTypeName", "src": "372:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "visibility": "internal"}], "src": "371:6:3"}, "scope": 33, "src": "281:97:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "external"}, {"functionSelector": "095ea7b3", "id": 32, "implemented": false, "kind": "function", "modifiers": [], "name": "approve", "nodeType": "FunctionDefinition", "parameters": {"id": 28, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 25, "mutability": "mutable", "name": "spender", "nodeType": "VariableDeclaration", "scope": 32, "src": "400:15:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 24, "name": "address", "nodeType": "ElementaryTypeName", "src": "400:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 27, "mutability": "mutable", "name": "amount", "nodeType": "VariableDeclaration", "scope": 32, "src": "417:14:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 26, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "417:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "399:33:3"}, "returnParameters": {"id": 31, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 30, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 32, "src": "451:4:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 29, "name": "bool", "nodeType": "ElementaryTypeName", "src": "451:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "visibility": "internal"}], "src": "450:6:3"}, "scope": 33, "src": "383:74:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "external"}], "scope": 639, "src": "176:283:3"}, {"abstract": false, "baseContracts": [{"baseName": {"id": 34, "name": "Ownable", "nodeType": "IdentifierPath", "referencedDeclaration": 742, "src": "485:7:3"}, "id": 35, "nodeType": "InheritanceSpecifier", "src": "485:7:3"}], "contractDependencies": [742, 1075], "contractKind": "contract", "fullyImplemented": true, "id": 638, "linearizedBaseContracts": [638, 742, 1075], "name": "SimpleSwap", "nodeType": "ContractDefinition", "nodes": [{"id": 38, "libraryName": {"id": 36, "name": "SafeMath", "nodeType": "IdentifierPath", "referencedDeclaration": 1054, "src": "505:8:3"}, "nodeType": "UsingForDirective", "src": "499:27:3", "typeName": {"id": 37, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "518:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}}, {"canonicalName": "SimpleSwap.Token", "id": 41, "members": [{"id": 39, "name": "Link", "nodeType": "EnumValue", "src": "543:4:3"}, {"id": 40, "name": "USDC", "nodeType": "EnumValue", "src": "549:4:3"}], "name": "Token", "nodeType": "EnumDefinition", "src": "532:22:3"}, {"constant": false, "id": 44, "mutability": "mutable", "name": "addressLink", "nodeType": "VariableDeclaration", "scope": 638, "src": "560:64:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 42, "name": "address", "nodeType": "ElementaryTypeName", "src": "560:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "value": {"hexValue": "307861333630383546363965323838396332323432313046363033443833363734386537644330303838", "id": 43, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "582:42:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "value": "0xa36085F69e2889c224210F603D836748e7dC0088"}, "visibility": "internal"}, {"constant": false, "id": 47, "mutability": "mutable", "name": "addressUSDC", "nodeType": "VariableDeclaration", "scope": 638, "src": "707:64:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 45, "name": "address", "nodeType": "ElementaryTypeName", "src": "707:7:3", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "value": {"hexValue": "307862376134463345393039374330386441303935313762356142383737463761393137323234656465", "id": 46, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "729:42:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "value": "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede"}, "visibility": "internal"}, {"constant": false, "functionSelector": "618e552c", "id": 50, "mutability": "mutable", "name": "totalAvailableLink", "nodeType": "VariableDeclaration", "scope": 638, "src": "862:37:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 48, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "862:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 49, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "898:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "functionSelector": "b2e411c2", "id": 53, "mutability": "mutable", "name": "totalAvailableUSDC", "nodeType": "VariableDeclaration", "scope": 638, "src": "924:37:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 51, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "924:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 52, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "960:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "functionSelector": "868c844f", "id": 56, "mutability": "mutable", "name": "totalLpTokens", "nodeType": "VariableDeclaration", "scope": 638, "src": "986:33:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 54, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "986:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 55, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1018:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "functionSelector": "c57981b5", "id": 63, "mutability": "mutable", "name": "FEE", "nodeType": "VariableDeclaration", "scope": 638, "src": "1049:32:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 57, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1049:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"commonType": {"typeIdentifier": "t_rational_3000_by_1", "typeString": "int_const 3000"}, "id": 62, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "33", "id": 58, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1070:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_3_by_1", "typeString": "int_const 3"}, "value": "3"}, "nodeType": "BinaryOperation", "operator": "*", "rightExpression": {"commonType": {"typeIdentifier": "t_rational_1000_by_1", "typeString": "int_const 1000"}, "id": 61, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 59, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1074:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "33", "id": 60, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1080:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_3_by_1", "typeString": "int_const 3"}, "value": "3"}, "src": "1074:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000_by_1", "typeString": "int_const 1000"}}, "src": "1070:11:3", "typeDescriptions": {"typeIdentifier": "t_rational_3000_by_1", "typeString": "int_const 3000"}}, "visibility": "public"}, {"constant": false, "id": 66, "mutability": "mutable", "name": "isPoolInitialized", "nodeType": "VariableDeclaration", "scope": 638, "src": "1109:30:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 64, "name": "bool", "nodeType": "ElementaryTypeName", "src": "1109:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "value": {"hexValue": "66616c7365", "id": 65, "isConstant": false, "isLValue": false, "isPure": true, "kind": "bool", "lValueRequested": false, "nodeType": "Literal", "src": "1134:5:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "value": "false"}, "visibility": "internal"}, {"constant": false, "id": 70, "mutability": "mutable", "name": "userToAmountLpTokens", "nodeType": "VariableDeclaration", "scope": 638, "src": "1146:48:3", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}, "typeName": {"id": 69, "keyType": {"id": 67, "name": "address", "nodeType": "ElementaryTypeName", "src": "1154:7:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "nodeType": "Mapping", "src": "1146:27:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}, "valueType": {"id": 68, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1165:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}}, "visibility": "internal"}, {"body": {"id": 162, "nodeType": "Block", "src": "1296:708:3", "statements": [{"expression": {"arguments": [{"id": 81, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "UnaryOperation", "operator": "!", "prefix": true, "src": "1314:18:3", "subExpression": {"id": 80, "name": "isPoolInitialized", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 66, "src": "1315:17:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520706f6f6c2077617320616c726561647920696e697469616c697a65642e", "id": 82, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "1334:35:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_bc0cbdd852a361dc2085b6876378a83c79cecb9ee35d2f2932c6aa66b51f030d", "typeString": "literal_string \"The pool was already initialized.\""}, "value": "The pool was already initialized."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_bc0cbdd852a361dc2085b6876378a83c79cecb9ee35d2f2932c6aa66b51f030d", "typeString": "literal_string \"The pool was already initialized.\""}], "id": 79, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "1306:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 83, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1306:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 84, "nodeType": "ExpressionStatement", "src": "1306:64:3"}, {"expression": {"id": 87, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 85, "name": "isPoolInitialized", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 66, "src": "1380:17:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"hexValue": "74727565", "id": 86, "isConstant": false, "isLValue": false, "isPure": true, "kind": "bool", "lValueRequested": false, "nodeType": "Literal", "src": "1400:4:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "value": "true"}, "src": "1380:24:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "id": 88, "nodeType": "ExpressionStatement", "src": "1380:24:3"}, {"assignments": [91], "declarations": [{"constant": false, "id": 91, "mutability": "mutable", "name": "Link", "nodeType": "VariableDeclaration", "scope": 162, "src": "1415:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 90, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 89, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "1415:6:3"}, "referencedDeclaration": 33, "src": "1415:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 95, "initialValue": {"arguments": [{"id": 93, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "1436:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 92, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "1429:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 94, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1429:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "1415:33:3"}, {"assignments": [98], "declarations": [{"constant": false, "id": 98, "mutability": "mutable", "name": "USDC", "nodeType": "VariableDeclaration", "scope": 162, "src": "1458:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 97, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 96, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "1458:6:3"}, "referencedDeclaration": 33, "src": "1458:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 102, "initialValue": {"arguments": [{"id": 100, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "1479:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 99, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "1472:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 101, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1472:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "1458:33:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 106, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "1528:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 107, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "1528:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 110, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "1548:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$638", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$638", "typeString": "contract SimpleSwap"}], "id": 109, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "1540:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 108, "name": "address", "nodeType": "ElementaryTypeName", "src": "1540:7:3", "typeDescriptions": {}}}, "id": 111, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1540:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 112, "name": "amountLinkToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72, "src": "1555:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 104, "name": "Link", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 91, "src": "1510:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 105, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "1510:17:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 113, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1510:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "4c696e6b207472616e73666572206661696c65642e", "id": 114, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "1576:23:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_f158e05b19296bc36d920dea915801ce00a59a6190411b5bf1f3a506eff701dd", "typeString": "literal_string \"Link transfer failed.\""}, "value": "Link transfer failed."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_f158e05b19296bc36d920dea915801ce00a59a6190411b5bf1f3a506eff701dd", "typeString": "literal_string \"Link transfer failed.\""}], "id": 103, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "1502:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 115, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1502:98:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 116, "nodeType": "ExpressionStatement", "src": "1502:98:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 120, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "1636:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 121, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "1636:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 124, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "1656:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$638", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$638", "typeString": "contract SimpleSwap"}], "id": 123, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "1648:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 122, "name": "address", "nodeType": "ElementaryTypeName", "src": "1648:7:3", "typeDescriptions": {}}}, "id": 125, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1648:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 126, "name": "amountUsdcToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 74, "src": "1663:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 118, "name": "USDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 98, "src": "1618:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 119, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "1618:17:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 127, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1618:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "55534443207472616e73666572206661696c65642e", "id": 128, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "1684:23:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_4423603f23b62bc938c76ebee4735d5f883a335a9c94590879f4de27de08569c", "typeString": "literal_string \"USDC transfer failed.\""}, "value": "USDC transfer failed."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_4423603f23b62bc938c76ebee4735d5f883a335a9c94590879f4de27de08569c", "typeString": "literal_string \"USDC transfer failed.\""}], "id": 117, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "1610:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 129, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1610:98:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 130, "nodeType": "ExpressionStatement", "src": "1610:98:3"}, {"expression": {"id": 136, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 131, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "1719:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 134, "name": "amountLinkToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 72, "src": "1763:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 132, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "1740:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 133, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 918, "src": "1740:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 135, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1740:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "1719:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 137, "nodeType": "ExpressionStatement", "src": "1719:63:3"}, {"expression": {"id": 143, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 138, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "1792:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 141, "name": "amountUsdcToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 74, "src": "1836:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 139, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "1813:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 140, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 918, "src": "1813:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 142, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1813:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "1792:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 144, "nodeType": "ExpressionStatement", "src": "1792:63:3"}, {"expression": {"id": 147, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 145, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "1866:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"id": 146, "name": "amountUsdcToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 74, "src": "1882:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "1866:34:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 148, "nodeType": "ExpressionStatement", "src": "1866:34:3"}, {"expression": {"id": 160, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"baseExpression": {"id": 149, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "1911:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 152, "indexExpression": {"expression": {"id": 150, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "1932:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 151, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "1932:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": true, "nodeType": "IndexAccess", "src": "1911:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 158, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "1983:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"baseExpression": {"id": 153, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "1946:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 156, "indexExpression": {"expression": {"id": 154, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "1967:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 155, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "1967:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": false, "nodeType": "IndexAccess", "src": "1946:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 157, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 918, "src": "1946:36:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 159, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1946:51:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "1911:86:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 161, "nodeType": "ExpressionStatement", "src": "1911:86:3"}]}, "functionSelector": "ce49ea9a", "id": 163, "implemented": true, "kind": "function", "modifiers": [{"id": 77, "modifierName": {"id": 76, "name": "onlyOwner", "nodeType": "IdentifierPath", "referencedDeclaration": 685, "src": "1286:9:3"}, "nodeType": "ModifierInvocation", "src": "1286:9:3"}], "name": "initiatePool", "nodeType": "FunctionDefinition", "parameters": {"id": 75, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 72, "mutability": "mutable", "name": "amountLinkToSupply", "nodeType": "VariableDeclaration", "scope": 163, "src": "1223:26:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 71, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1223:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 74, "mutability": "mutable", "name": "amountUsdcToSupply", "nodeType": "VariableDeclaration", "scope": 163, "src": "1251:26:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 73, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1251:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "1222:56:3"}, "returnParameters": {"id": 78, "nodeType": "ParameterList", "parameters": [], "src": "1296:0:3"}, "scope": 638, "src": "1201:803:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 286, "nodeType": "Block", "src": "2135:1262:3", "statements": [{"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 178, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 176, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "2232:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">", "rightExpression": {"hexValue": "30", "id": 177, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "2252:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "src": "2232:21:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520616d6f756e7420746f2073656c6c2073686f756c64206265207374726963746c7920626967676572207468616e20302e", "id": 179, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "2255:54:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_229315b7c9587d505a36a119e5a30260cb9a9d236b8c7ce6a99c313fbc52d461", "typeString": "literal_string \"The amount to sell should be strictly bigger than 0.\""}, "value": "The amount to sell should be strictly bigger than 0."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_229315b7c9587d505a36a119e5a30260cb9a9d236b8c7ce6a99c313fbc52d461", "typeString": "literal_string \"The amount to sell should be strictly bigger than 0.\""}], "id": 175, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "2224:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 180, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2224:86:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 181, "nodeType": "ExpressionStatement", "src": "2224:86:3"}, {"assignments": [183], "declarations": [{"constant": false, "id": 183, "mutability": "mutable", "name": "amountPurchasedToken", "nodeType": "VariableDeclaration", "scope": 286, "src": "2320:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 182, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2320:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 188, "initialValue": {"arguments": [{"id": 185, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "2375:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, {"id": 186, "name": "tokenForSale", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 170, "src": "2394:12:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}, {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}], "id": 184, "name": "getAmountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 598, "src": "2351:23:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$_t_uint256_$_t_enum$_Token_$41_$returns$_t_uint256_$", "typeString": "function (uint256,enum SimpleSwap.Token) view returns (uint256)"}}, "id": 187, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2351:56:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "2320:87:3"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 192, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 190, "name": "amountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 183, "src": "2425:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">=", "rightExpression": {"id": 191, "name": "minAmountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 167, "src": "2449:23:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2425:47:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520616d6f756e74206f662070757263686173656420746f6b656e206973206c6f776572207468616e2072657175697265642e", "id": 193, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "2474:55:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_bbba2a48efd6b000ef46699fd497e00f081b29099d44fa3a135476e5eb8f25b6", "typeString": "literal_string \"The amount of purchased token is lower than required.\""}, "value": "The amount of purchased token is lower than required."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_bbba2a48efd6b000ef46699fd497e00f081b29099d44fa3a135476e5eb8f25b6", "typeString": "literal_string \"The amount of purchased token is lower than required.\""}], "id": 189, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "2417:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 194, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2417:113:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 195, "nodeType": "ExpressionStatement", "src": "2417:113:3"}, {"assignments": [198], "declarations": [{"constant": false, "id": 198, "mutability": "mutable", "name": "soldToken", "nodeType": "VariableDeclaration", "scope": 286, "src": "2541:16:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 197, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 196, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "2541:6:3"}, "referencedDeclaration": 33, "src": "2541:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 199, "nodeType": "VariableDeclarationStatement", "src": "2541:16:3"}, {"assignments": [202], "declarations": [{"constant": false, "id": 202, "mutability": "mutable", "name": "boughtToken", "nodeType": "VariableDeclaration", "scope": 286, "src": "2567:18:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 201, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 200, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "2567:6:3"}, "referencedDeclaration": 33, "src": "2567:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 203, "nodeType": "VariableDeclarationStatement", "src": "2567:18:3"}, {"condition": {"commonType": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}, "id": 207, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 204, "name": "tokenForSale", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 170, "src": "2600:12:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "nodeType": "BinaryOperation", "operator": "==", "rightExpression": {"expression": {"id": 205, "name": "Token", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 41, "src": "2616:5:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_enum$_Token_$41_$", "typeString": "type(enum SimpleSwap.Token)"}}, "id": 206, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "memberName": "Link", "nodeType": "MemberAccess", "src": "2616:10:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "src": "2600:26:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseBody": {"id": 261, "nodeType": "Block", "src": "2903:260:3", "statements": [{"expression": {"id": 240, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 235, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "2917:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 238, "name": "amountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 183, "src": "2961:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 236, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "2938:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 237, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 933, "src": "2938:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 239, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2938:44:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2917:65:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 241, "nodeType": "ExpressionStatement", "src": "2917:65:3"}, {"expression": {"id": 247, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 242, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "2996:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 245, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "3040:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 243, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "3017:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 244, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 918, "src": "3017:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 246, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3017:41:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2996:62:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 248, "nodeType": "ExpressionStatement", "src": "2996:62:3"}, {"expression": {"id": 253, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 249, "name": "soldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 198, "src": "3073:9:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 251, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "3092:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 250, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "3085:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 252, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3085:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "src": "3073:31:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 254, "nodeType": "ExpressionStatement", "src": "3073:31:3"}, {"expression": {"id": 259, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 255, "name": "boughtToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 202, "src": "3119:11:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 257, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "3140:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 256, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "3133:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 258, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3133:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "src": "3119:33:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 260, "nodeType": "ExpressionStatement", "src": "3119:33:3"}]}, "id": 262, "nodeType": "IfStatement", "src": "2596:567:3", "trueBody": {"id": 234, "nodeType": "Block", "src": "2628:260:3", "statements": [{"expression": {"id": 213, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 208, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "2642:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 211, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "2687:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 209, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "2664:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 210, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 918, "src": "2664:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 212, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2664:41:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2642:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 214, "nodeType": "ExpressionStatement", "src": "2642:63:3"}, {"expression": {"id": 220, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 215, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "2719:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 218, "name": "amountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 183, "src": "2763:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 216, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "2740:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 217, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 933, "src": "2740:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 219, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2740:44:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2719:65:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 221, "nodeType": "ExpressionStatement", "src": "2719:65:3"}, {"expression": {"id": 226, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 222, "name": "soldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 198, "src": "2799:9:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 224, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "2818:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 223, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "2811:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 225, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2811:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "src": "2799:31:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 227, "nodeType": "ExpressionStatement", "src": "2799:31:3"}, {"expression": {"id": 232, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 228, "name": "boughtToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 202, "src": "2844:11:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 230, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "2865:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 229, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "2858:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 231, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2858:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "src": "2844:33:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 233, "nodeType": "ExpressionStatement", "src": "2844:33:3"}]}}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 266, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "3209:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 267, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "3209:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 268, "name": "amountPurchasedToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 183, "src": "3221:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 264, "name": "boughtToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 202, "src": "3188:11:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 265, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transfer", "nodeType": "MemberAccess", "referencedDeclaration": 12, "src": "3188:20:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,uint256) external returns (bool)"}}, "id": 269, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3188:54:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}], "id": 263, "name": "assert", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -3, "src": "3181:6:3", "typeDescriptions": {"typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$", "typeString": "function (bool) pure"}}, "id": 270, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3181:62:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 271, "nodeType": "ExpressionStatement", "src": "3181:62:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 275, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "3284:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 276, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "3284:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 279, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "3304:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$638", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$638", "typeString": "contract SimpleSwap"}], "id": 278, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "3296:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 277, "name": "address", "nodeType": "ElementaryTypeName", "src": "3296:7:3", "typeDescriptions": {}}}, "id": 280, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3296:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 281, "name": "quantitySoldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 165, "src": "3311:17:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 273, "name": "soldToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 198, "src": "3261:9:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 274, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "3261:22:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 282, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3261:68:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "5472616e73666572206f662074686520616d6f756e74206f6620746f6b656e20796f752077616e7420746f2073656c6c206661696c65642e", "id": 283, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "3331:58:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_895e7d251133ad7c46606a147d2321601428e92dcd0a50a69507b30c13cb22fa", "typeString": "literal_string \"Transfer of the amount of token you want to sell failed.\""}, "value": "Transfer of the amount of token you want to sell failed."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_895e7d251133ad7c46606a147d2321601428e92dcd0a50a69507b30c13cb22fa", "typeString": "literal_string \"Transfer of the amount of token you want to sell failed.\""}], "id": 272, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "3253:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 284, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3253:137:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 285, "nodeType": "ExpressionStatement", "src": "3253:137:3"}]}, "functionSelector": "5c36d25e", "id": 287, "implemented": true, "kind": "function", "modifiers": [{"id": 173, "modifierName": {"id": 172, "name": "onlyAfterInitialization", "nodeType": "IdentifierPath", "referencedDeclaration": 637, "src": "2111:23:3"}, "nodeType": "ModifierInvocation", "src": "2111:23:3"}], "name": "swap", "nodeType": "FunctionDefinition", "parameters": {"id": 171, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 165, "mutability": "mutable", "name": "quantitySoldToken", "nodeType": "VariableDeclaration", "scope": 287, "src": "2024:25:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 164, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2024:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 167, "mutability": "mutable", "name": "minAmountPurchasedToken", "nodeType": "VariableDeclaration", "scope": 287, "src": "2051:31:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 166, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2051:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 170, "mutability": "mutable", "name": "tokenForSale", "nodeType": "VariableDeclaration", "scope": 287, "src": "2084:18:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}, "typeName": {"id": 169, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 168, "name": "Token", "nodeType": "IdentifierPath", "referencedDeclaration": 41, "src": "2084:5:3"}, "referencedDeclaration": 41, "src": "2084:5:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "visibility": "internal"}], "src": "2023:80:3"}, "returnParameters": {"id": 174, "nodeType": "ParameterList", "parameters": [], "src": "2135:0:3"}, "scope": 638, "src": "2010:1387:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 408, "nodeType": "Block", "src": "3474:1093:3", "statements": [{"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 297, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 295, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 289, "src": "3571:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">", "rightExpression": {"hexValue": "30", "id": 296, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3588:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "src": "3571:18:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520616d6f756e74206f6620737570706c696564206c7020746f6b656e732073686f756c64206265203e20302e", "id": 298, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "3591:49:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_4d3edc197d99dc2fb86176939dfb63767cb4b4d2628cec7bef006b1c5d9ab844", "typeString": "literal_string \"The amount of supplied lp tokens should be > 0.\""}, "value": "The amount of supplied lp tokens should be > 0."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_4d3edc197d99dc2fb86176939dfb63767cb4b4d2628cec7bef006b1c5d9ab844", "typeString": "literal_string \"The amount of supplied lp tokens should be > 0.\""}], "id": 294, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "3563:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 299, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3563:78:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 300, "nodeType": "ExpressionStatement", "src": "3563:78:3"}, {"assignments": [302, 304], "declarations": [{"constant": false, "id": 302, "mutability": "mutable", "name": "amountLinkPerLpToken", "nodeType": "VariableDeclaration", "scope": 408, "src": "3652:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 301, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3652:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 304, "mutability": "mutable", "name": "amountUsdcPerLpToken", "nodeType": "VariableDeclaration", "scope": 408, "src": "3682:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 303, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3682:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 307, "initialValue": {"arguments": [], "expression": {"argumentTypes": [], "id": 305, "name": "getLpTokenPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 628, "src": "3714:15:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$", "typeString": "function () view returns (uint256,uint256)"}}, "id": 306, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3714:17:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$", "typeString": "tuple(uint256,uint256)"}}, "nodeType": "VariableDeclarationStatement", "src": "3651:80:3"}, {"assignments": [310], "declarations": [{"constant": false, "id": 310, "mutability": "mutable", "name": "Link", "nodeType": "VariableDeclaration", "scope": 408, "src": "3742:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 309, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 308, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "3742:6:3"}, "referencedDeclaration": 33, "src": "3742:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 314, "initialValue": {"arguments": [{"id": 312, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "3763:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 311, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "3756:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 313, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3756:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "3742:33:3"}, {"assignments": [317], "declarations": [{"constant": false, "id": 317, "mutability": "mutable", "name": "USDC", "nodeType": "VariableDeclaration", "scope": 408, "src": "3785:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 316, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 315, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "3785:6:3"}, "referencedDeclaration": 33, "src": "3785:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 321, "initialValue": {"arguments": [{"id": 319, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "3806:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 318, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "3799:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 320, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3799:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "3785:33:3"}, {"assignments": [323], "declarations": [{"constant": false, "id": 323, "mutability": "mutable", "name": "amountLinkToSupply", "nodeType": "VariableDeclaration", "scope": 408, "src": "3829:26:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 322, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3829:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 333, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 331, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 329, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3903:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 330, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3909:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "3903:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 326, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 289, "src": "3883:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 324, "name": "amountLinkPerLpToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 302, "src": "3858:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 325, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 948, "src": "3858:24:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 327, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3858:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 328, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 963, "src": "3858:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 332, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3858:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "3829:82:3"}, {"assignments": [335], "declarations": [{"constant": false, "id": 335, "mutability": "mutable", "name": "amountUSDCToSupply", "nodeType": "VariableDeclaration", "scope": 408, "src": "3936:26:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 334, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3936:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 345, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 343, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 341, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "4010:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 342, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "4016:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "4010:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 338, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 289, "src": "3990:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 336, "name": "amountUsdcPerLpToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 304, "src": "3965:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 337, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 948, "src": "3965:24:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 339, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3965:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 340, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 963, "src": "3965:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 344, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3965:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "3936:82:3"}, {"expression": {"id": 351, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 346, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "4043:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 349, "name": "amountLinkToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 323, "src": "4087:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 347, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "4064:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 348, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 918, "src": "4064:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 350, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4064:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4043:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 352, "nodeType": "ExpressionStatement", "src": "4043:63:3"}, {"expression": {"id": 358, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 353, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "4116:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 356, "name": "amountUSDCToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 335, "src": "4160:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 354, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "4137:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 355, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 918, "src": "4137:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 357, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4137:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4116:63:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 359, "nodeType": "ExpressionStatement", "src": "4116:63:3"}, {"expression": {"id": 365, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 360, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "4190:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 363, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 289, "src": "4224:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 361, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "4206:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 362, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 918, "src": "4206:17:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 364, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4206:33:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4190:49:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 366, "nodeType": "ExpressionStatement", "src": "4190:49:3"}, {"expression": {"id": 378, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"baseExpression": {"id": 367, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "4250:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 370, "indexExpression": {"expression": {"id": 368, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4271:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 369, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4271:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": true, "nodeType": "IndexAccess", "src": "4250:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 376, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 289, "src": "4322:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"baseExpression": {"id": 371, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "4285:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 374, "indexExpression": {"expression": {"id": 372, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4306:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 373, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4306:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": false, "nodeType": "IndexAccess", "src": "4285:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 375, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 918, "src": "4285:36:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 377, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4285:52:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4250:87:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 379, "nodeType": "ExpressionStatement", "src": "4250:87:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 383, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4374:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 384, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4374:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 387, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "4394:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$638", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$638", "typeString": "contract SimpleSwap"}], "id": 386, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "4386:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 385, "name": "address", "nodeType": "ElementaryTypeName", "src": "4386:7:3", "typeDescriptions": {}}}, "id": 388, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4386:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 389, "name": "amountLinkToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 323, "src": "4401:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 381, "name": "Link", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 310, "src": "4356:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 382, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "4356:17:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 390, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4356:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "5472616e73666572206f66204c696e6b206661696c65642e", "id": 391, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4422:26:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_952b35031a21ec8dacf217f508bafe291bc12b5ae2be70b520e0196d84dc1c59", "typeString": "literal_string \"Transfer of Link failed.\""}, "value": "Transfer of Link failed."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_952b35031a21ec8dacf217f508bafe291bc12b5ae2be70b520e0196d84dc1c59", "typeString": "literal_string \"Transfer of Link failed.\""}], "id": 380, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4348:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 392, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4348:101:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 393, "nodeType": "ExpressionStatement", "src": "4348:101:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 397, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4485:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 398, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4485:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 401, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "4505:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_SimpleSwap_$638", "typeString": "contract SimpleSwap"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_SimpleSwap_$638", "typeString": "contract SimpleSwap"}], "id": 400, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "4497:7:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 399, "name": "address", "nodeType": "ElementaryTypeName", "src": "4497:7:3", "typeDescriptions": {}}}, "id": 402, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4497:13:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 403, "name": "amountUSDCToSupply", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 335, "src": "4512:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 395, "name": "USDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 317, "src": "4467:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 396, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 23, "src": "4467:17:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 404, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4467:64:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "5472616e73666572206f662055534443206661696c65642e", "id": 405, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4533:26:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_b88d0eb8f0af78c81945b09dc751296b154ec68f01cf17783752bece81ce2959", "typeString": "literal_string \"Transfer of USDC failed.\""}, "value": "Transfer of USDC failed."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_b88d0eb8f0af78c81945b09dc751296b154ec68f01cf17783752bece81ce2959", "typeString": "literal_string \"Transfer of USDC failed.\""}], "id": 394, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4459:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 406, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4459:101:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 407, "nodeType": "ExpressionStatement", "src": "4459:101:3"}]}, "functionSelector": "35403023", "id": 409, "implemented": true, "kind": "function", "modifiers": [{"id": 292, "modifierName": {"id": 291, "name": "onlyAfterInitialization", "nodeType": "IdentifierPath", "referencedDeclaration": 637, "src": "3450:23:3"}, "nodeType": "ModifierInvocation", "src": "3450:23:3"}], "name": "supply", "nodeType": "FunctionDefinition", "parameters": {"id": 290, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 289, "mutability": "mutable", "name": "amountLpTokens", "nodeType": "VariableDeclaration", "scope": 409, "src": "3419:22:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 288, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3419:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "3418:24:3"}, "returnParameters": {"id": 293, "nodeType": "ParameterList", "parameters": [], "src": "3474:0:3"}, "scope": 638, "src": "3403:1164:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 530, "nodeType": "Block", "src": "4646:1087:3", "statements": [{"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 419, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 417, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 411, "src": "4743:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">", "rightExpression": {"hexValue": "30", "id": 418, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "4760:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "src": "4743:18:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520616d6f756e74206f6620726571756573746564206c7020746f6b656e732073686f756c64206265203e20302e", "id": 420, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4763:50:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_981c433ebc0dc24005b61ab2540ad670d4eac08e3e379c43f678b7803187e1b2", "typeString": "literal_string \"The amount of requested lp tokens should be > 0.\""}, "value": "The amount of requested lp tokens should be > 0."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_981c433ebc0dc24005b61ab2540ad670d4eac08e3e379c43f678b7803187e1b2", "typeString": "literal_string \"The amount of requested lp tokens should be > 0.\""}], "id": 416, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4735:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 421, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4735:79:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 422, "nodeType": "ExpressionStatement", "src": "4735:79:3"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 429, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"baseExpression": {"id": 424, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "4832:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 427, "indexExpression": {"expression": {"id": 425, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4853:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 426, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4853:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": false, "nodeType": "IndexAccess", "src": "4832:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">=", "rightExpression": {"id": 428, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 411, "src": "4868:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4832:50:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "596f7520646f6e2774206861766520656e6f756768206c7020746f6b656e732e", "id": 430, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4884:34:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_31d8bce085bd2a0bfa7166c5738d1078495ea5bd89df31a2a4e71335b5b85246", "typeString": "literal_string \"You don't have enough lp tokens.\""}, "value": "You don't have enough lp tokens."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_31d8bce085bd2a0bfa7166c5738d1078495ea5bd89df31a2a4e71335b5b85246", "typeString": "literal_string \"You don't have enough lp tokens.\""}], "id": 423, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4824:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 431, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4824:95:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 432, "nodeType": "ExpressionStatement", "src": "4824:95:3"}, {"assignments": [434, 436], "declarations": [{"constant": false, "id": 434, "mutability": "mutable", "name": "amountLinkPerLpToken", "nodeType": "VariableDeclaration", "scope": 530, "src": "4930:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 433, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4930:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 436, "mutability": "mutable", "name": "amountUSDCPerLpToken", "nodeType": "VariableDeclaration", "scope": 530, "src": "4960:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 435, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4960:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 439, "initialValue": {"arguments": [], "expression": {"argumentTypes": [], "id": 437, "name": "getLpTokenPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 628, "src": "4993:15:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_uint256_$", "typeString": "function () view returns (uint256,uint256)"}}, "id": 438, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4993:17:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$", "typeString": "tuple(uint256,uint256)"}}, "nodeType": "VariableDeclarationStatement", "src": "4929:81:3"}, {"assignments": [441], "declarations": [{"constant": false, "id": 441, "mutability": "mutable", "name": "amountLinkToWithdraw", "nodeType": "VariableDeclaration", "scope": 530, "src": "5021:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 440, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5021:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 451, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 449, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 447, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5097:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 448, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5103:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "5097:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 444, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 411, "src": "5077:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 442, "name": "amountLinkPerLpToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 434, "src": "5052:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 443, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 948, "src": "5052:24:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 445, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5052:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 446, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 963, "src": "5052:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 450, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5052:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "5021:84:3"}, {"assignments": [453], "declarations": [{"constant": false, "id": 453, "mutability": "mutable", "name": "amountUSDCToWithdraw", "nodeType": "VariableDeclaration", "scope": 530, "src": "5115:28:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 452, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5115:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 463, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 461, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 459, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5191:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 460, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5197:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "5191:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 456, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 411, "src": "5171:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 454, "name": "amountUSDCPerLpToken", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 436, "src": "5146:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 455, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 948, "src": "5146:24:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 457, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5146:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 458, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 963, "src": "5146:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 462, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5146:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "5115:84:3"}, {"expression": {"id": 469, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 464, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "5210:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 467, "name": "amountLinkToWithdraw", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 441, "src": "5254:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 465, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "5231:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 466, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 933, "src": "5231:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 468, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5231:44:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5210:65:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 470, "nodeType": "ExpressionStatement", "src": "5210:65:3"}, {"expression": {"id": 476, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 471, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "5285:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 474, "name": "amountUSDCToWithdraw", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 453, "src": "5329:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 472, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "5306:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 473, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 933, "src": "5306:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 475, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5306:44:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5285:65:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 477, "nodeType": "ExpressionStatement", "src": "5285:65:3"}, {"expression": {"id": 483, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 478, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "5361:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 481, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 411, "src": "5395:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 479, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "5377:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 480, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 933, "src": "5377:17:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 482, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5377:33:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5361:49:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 484, "nodeType": "ExpressionStatement", "src": "5361:49:3"}, {"expression": {"id": 496, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"baseExpression": {"id": 485, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "5421:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 488, "indexExpression": {"expression": {"id": 486, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "5442:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 487, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "5442:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": true, "nodeType": "IndexAccess", "src": "5421:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 494, "name": "amountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 411, "src": "5493:14:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"baseExpression": {"id": 489, "name": "userToAmountLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 70, "src": "5456:20:3", "typeDescriptions": {"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$", "typeString": "mapping(address => uint256)"}}, "id": 492, "indexExpression": {"expression": {"id": 490, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "5477:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 491, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "5477:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "isConstant": false, "isLValue": true, "isPure": false, "lValueRequested": false, "nodeType": "IndexAccess", "src": "5456:32:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 493, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 933, "src": "5456:36:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 495, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5456:52:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5421:87:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 497, "nodeType": "ExpressionStatement", "src": "5421:87:3"}, {"assignments": [500], "declarations": [{"constant": false, "id": 500, "mutability": "mutable", "name": "Link", "nodeType": "VariableDeclaration", "scope": 530, "src": "5519:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 499, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 498, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "5519:6:3"}, "referencedDeclaration": 33, "src": "5519:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 504, "initialValue": {"arguments": [{"id": 502, "name": "addressLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 44, "src": "5540:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 501, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "5533:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 503, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5533:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "5519:33:3"}, {"assignments": [507], "declarations": [{"constant": false, "id": 507, "mutability": "mutable", "name": "USDC", "nodeType": "VariableDeclaration", "scope": 530, "src": "5562:11:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}, "typeName": {"id": 506, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 505, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 33, "src": "5562:6:3"}, "referencedDeclaration": 33, "src": "5562:6:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 511, "initialValue": {"arguments": [{"id": 509, "name": "addressUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "5583:11:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 508, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 33, "src": "5576:6:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$33_$", "typeString": "type(contract IERC20)"}}, "id": 510, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5576:19:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "5562:33:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 515, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "5627:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 516, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "5627:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 517, "name": "amountLinkToWithdraw", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 441, "src": "5639:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 513, "name": "Link", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 500, "src": "5613:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 514, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transfer", "nodeType": "MemberAccess", "referencedDeclaration": 12, "src": "5613:13:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,uint256) external returns (bool)"}}, "id": 518, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5613:47:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}], "id": 512, "name": "assert", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -3, "src": "5606:6:3", "typeDescriptions": {"typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$", "typeString": "function (bool) pure"}}, "id": 519, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5606:55:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 520, "nodeType": "ExpressionStatement", "src": "5606:55:3"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 524, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "5692:3:3", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 525, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "5692:10:3", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 526, "name": "amountUSDCToWithdraw", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 453, "src": "5704:20:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 522, "name": "USDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 507, "src": "5678:4:3", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$33", "typeString": "contract IERC20"}}, "id": 523, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transfer", "nodeType": "MemberAccess", "referencedDeclaration": 12, "src": "5678:13:3", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,uint256) external returns (bool)"}}, "id": 527, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5678:47:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}], "id": 521, "name": "assert", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -3, "src": "5671:6:3", "typeDescriptions": {"typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$", "typeString": "function (bool) pure"}}, "id": 528, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5671:55:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 529, "nodeType": "ExpressionStatement", "src": "5671:55:3"}]}, "functionSelector": "2e1a7d4d", "id": 531, "implemented": true, "kind": "function", "modifiers": [{"id": 414, "modifierName": {"id": 413, "name": "onlyAfterInitialization", "nodeType": "IdentifierPath", "referencedDeclaration": 637, "src": "4622:23:3"}, "nodeType": "ModifierInvocation", "src": "4622:23:3"}], "name": "withdraw", "nodeType": "FunctionDefinition", "parameters": {"id": 412, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 411, "mutability": "mutable", "name": "amountLpTokens", "nodeType": "VariableDeclaration", "scope": 531, "src": "4591:22:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 410, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4591:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "4590:24:3"}, "returnParameters": {"id": 415, "nodeType": "ParameterList", "parameters": [], "src": "4646:0:3"}, "scope": 638, "src": "4573:1160:3", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 597, "nodeType": "Block", "src": "6054:449:3", "statements": [{"assignments": [542], "declarations": [{"constant": false, "id": 542, "mutability": "mutable", "name": "y", "nodeType": "VariableDeclaration", "scope": 597, "src": "6064:9:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 541, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6064:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 551, "initialValue": {"condition": {"components": [{"commonType": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}, "id": 546, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 543, "name": "tokenForSale", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 536, "src": "6077:12:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "nodeType": "BinaryOperation", "operator": "==", "rightExpression": {"expression": {"id": 544, "name": "Token", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 41, "src": "6093:5:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_enum$_Token_$41_$", "typeString": "type(enum SimpleSwap.Token)"}}, "id": 545, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "memberName": "Link", "nodeType": "MemberAccess", "src": "6093:10:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "src": "6077:26:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "id": 547, "isConstant": false, "isInlineArray": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "TupleExpression", "src": "6076:28:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseExpression": {"id": 549, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "6128:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 550, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "Conditional", "src": "6076:70:3", "trueExpression": {"id": 548, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "6107:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "6064:82:3"}, {"assignments": [553], "declarations": [{"constant": false, "id": 553, "mutability": "mutable", "name": "x", "nodeType": "VariableDeclaration", "scope": 597, "src": "6156:9:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 552, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6156:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 562, "initialValue": {"condition": {"components": [{"commonType": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}, "id": 557, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 554, "name": "tokenForSale", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 536, "src": "6169:12:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "nodeType": "BinaryOperation", "operator": "==", "rightExpression": {"expression": {"id": 555, "name": "Token", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 41, "src": "6185:5:3", "typeDescriptions": {"typeIdentifier": "t_type$_t_enum$_Token_$41_$", "typeString": "type(enum SimpleSwap.Token)"}}, "id": 556, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "memberName": "Link", "nodeType": "MemberAccess", "src": "6185:10:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "src": "6169:26:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "id": 558, "isConstant": false, "isInlineArray": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "TupleExpression", "src": "6168:28:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseExpression": {"id": 560, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "6220:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 561, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "Conditional", "src": "6168:70:3", "trueExpression": {"id": 559, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "6199:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "6156:82:3"}, {"assignments": [564], "declarations": [{"constant": false, "id": 564, "mutability": "mutable", "name": "C", "nodeType": "VariableDeclaration", "scope": 597, "src": "6249:9:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 563, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6249:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 569, "initialValue": {"arguments": [{"id": 567, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "6284:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 565, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "6261:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 566, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 948, "src": "6261:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 568, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6261:42:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "6249:54:3"}, {"assignments": [571], "declarations": [{"constant": false, "id": 571, "mutability": "mutable", "name": "amountPurchasedTokens", "nodeType": "VariableDeclaration", "scope": 597, "src": "6336:29:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 570, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6336:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 582, "initialValue": {"arguments": [{"arguments": [{"arguments": [{"id": 578, "name": "amountSoldTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 533, "src": "6386:16:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 576, "name": "x", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 553, "src": "6380:1:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 577, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 918, "src": "6380:5:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 579, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6380:23:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 574, "name": "C", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 564, "src": "6374:1:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 575, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 963, "src": "6374:5:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 580, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6374:30:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 572, "name": "y", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 542, "src": "6368:1:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 573, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 933, "src": "6368:5:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 581, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6368:37:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "6336:69:3"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 594, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 592, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6488:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 593, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6494:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6488:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 589, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 587, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 585, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6469:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 586, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6475:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6469:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}, "nodeType": "BinaryOperation", "operator": "-", "rightExpression": {"id": 588, "name": "FEE", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 63, "src": "6479:3:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "6469:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 583, "name": "amountPurchasedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 571, "src": "6443:21:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 584, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 948, "src": "6443:25:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 590, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6443:40:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 591, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 963, "src": "6443:44:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 595, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6443:53:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "functionReturnParameters": 540, "id": 596, "nodeType": "Return", "src": "6436:60:3"}]}, "id": 598, "implemented": true, "kind": "function", "modifiers": [], "name": "getAmountPurchasedToken", "nodeType": "FunctionDefinition", "parameters": {"id": 537, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 533, "mutability": "mutable", "name": "amountSoldTokens", "nodeType": "VariableDeclaration", "scope": 598, "src": "5973:24:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 532, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5973:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 536, "mutability": "mutable", "name": "tokenForSale", "nodeType": "VariableDeclaration", "scope": 598, "src": "5999:18:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}, "typeName": {"id": 535, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 534, "name": "Token", "nodeType": "IdentifierPath", "referencedDeclaration": 41, "src": "5999:5:3"}, "referencedDeclaration": 41, "src": "5999:5:3", "typeDescriptions": {"typeIdentifier": "t_enum$_Token_$41", "typeString": "enum SimpleSwap.Token"}}, "visibility": "internal"}], "src": "5972:46:3"}, "returnParameters": {"id": 540, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 539, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 598, "src": "6041:7:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 538, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6041:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "6040:9:3"}, "scope": 638, "src": "5940:563:3", "stateMutability": "view", "virtual": false, "visibility": "internal"}, {"body": {"id": 627, "nodeType": "Block", "src": "6603:128:3", "statements": [{"expression": {"components": [{"arguments": [{"id": 614, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "6657:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 611, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 609, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6644:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 610, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6650:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6644:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"id": 607, "name": "totalAvailableLink", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 50, "src": "6621:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 608, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 948, "src": "6621:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 612, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6621:31:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 613, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 963, "src": "6621:35:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 615, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6621:50:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, {"arguments": [{"id": 623, "name": "totalLpTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 56, "src": "6709:13:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 620, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 618, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6696:2:3", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 619, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6702:1:3", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6696:7:3", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"id": 616, "name": "totalAvailableUSDC", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 53, "src": "6673:18:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 617, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 948, "src": "6673:22:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 621, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6673:31:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 622, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 963, "src": "6673:35:3", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 624, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6673:50:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "id": 625, "isConstant": false, "isInlineArray": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "TupleExpression", "src": "6620:104:3", "typeDescriptions": {"typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$", "typeString": "tuple(uint256,uint256)"}}, "functionReturnParameters": 606, "id": 626, "nodeType": "Return", "src": "6613:111:3"}]}, "functionSelector": "6f5cdb6c", "id": 628, "implemented": true, "kind": "function", "modifiers": [{"id": 601, "modifierName": {"id": 600, "name": "onlyAfterInitialization", "nodeType": "IdentifierPath", "referencedDeclaration": 637, "src": "6543:23:3"}, "nodeType": "ModifierInvocation", "src": "6543:23:3"}], "name": "getLpTokenPrice", "nodeType": "FunctionDefinition", "parameters": {"id": 599, "nodeType": "ParameterList", "parameters": [], "src": "6533:2:3"}, "returnParameters": {"id": 606, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 603, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 628, "src": "6580:7:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 602, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6580:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 605, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 628, "src": "6589:7:3", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 604, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6589:7:3", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "6579:18:3"}, "scope": 638, "src": "6509:222:3", "stateMutability": "view", "virtual": false, "visibility": "public"}, {"body": {"id": 636, "nodeType": "Block", "src": "6771:95:3", "statements": [{"expression": {"arguments": [{"id": 631, "name": "isPoolInitialized", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 66, "src": "6789:17:3", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520706f6f6c2073686f756c6420626520696e697469616c697a65642066697273742e", "id": 632, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "6808:39:3", "typeDescriptions": {"typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580", "typeString": "literal_string \"The pool should be initialized first.\""}, "value": "The pool should be initialized first."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_6038f3aab9a6f4479b3089d4df55b83535c025ad2769d8c0ee5bf32e68b2d580", "typeString": "literal_string \"The pool should be initialized first.\""}], "id": 630, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "6781:7:3", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 633, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6781:67:3", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 634, "nodeType": "ExpressionStatement", "src": "6781:67:3"}, {"id": 635, "nodeType": "PlaceholderStatement", "src": "6858:1:3"}]}, "id": 637, "name": "onlyAfterInitialization", "nodeType": "ModifierDefinition", "parameters": {"id": 629, "nodeType": "ParameterList", "parameters": [], "src": "6771:0:3"}, "src": "6738:128:3", "virtual": false, "visibility": "internal"}], "scope": 639, "src": "462:6406:3"}], "src": "39:6832:3"}, "bytecode": "6080604052600180546001600160a01b031990811673a36085f69e2889c224210f603d836748e7dc0088179091556002805490911673b7a4f3e9097c08da09517b5ab877f7a917224ede179055600060038190556004819055600555610bb86006556007805460ff1916905534801561007757600080fd5b5061008861008361008d565b610091565b6100e1565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61129b806100f06000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063868c844f11610071578063868c844f146101305780638da5cb5b14610138578063b2e411c21461014d578063c57981b514610155578063ce49ea9a1461015d578063f2fde38b14610170576100b4565b80632e1a7d4d146100b957806335403023146100ce5780635c36d25e146100e1578063618e552c146100f45780636f5cdb6c14610112578063715018a614610128575b600080fd5b6100cc6100c7366004610d5e565b610183565b005b6100cc6100dc366004610d5e565b6103e4565b6100cc6100ef366004610d97565b61060e565b6100fc610858565b60405161010991906111ca565b60405180910390f35b61011a61085e565b6040516101099291906111d3565b6100cc6108c9565b6100fc610914565b61014061091a565b6040516101099190610dd2565b6100fc610929565b6100fc61092f565b6100cc61016b366004610d76565b610935565b6100cc61017e366004610d17565b610b44565b60075460ff166101ae5760405162461bcd60e51b81526004016101a590610f70565b60405180910390fd5b600081116101ce5760405162461bcd60e51b81526004016101a590611049565b336000908152600860205260409020548111156101fd5760405162461bcd60e51b81526004016101a590610ebd565b60008061020861085e565b90925090506000610226620f42406102208587610bb5565b90610bc8565b9050600061023b620f42406102208588610bb5565b60035490915061024b9083610bd4565b60035560045461025b9082610bd4565b60045560055461026b9086610bd4565b600555336000908152600860205260409020546102889086610bd4565b336000818152600860205260409081902092909255600154600254925163a9059cbb60e01b81526001600160a01b039182169390911691839163a9059cbb916102d5918890600401610e0a565b602060405180830381600087803b1580156102ef57600080fd5b505af1158015610303573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103279190610d3e565b61034157634e487b7160e01b600052600160045260246000fd5b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb9061036f9033908790600401610e0a565b602060405180830381600087803b15801561038957600080fd5b505af115801561039d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c19190610d3e565b6103db57634e487b7160e01b600052600160045260246000fd5b50505050505050565b60075460ff166104065760405162461bcd60e51b81526004016101a590610f70565b600081116104265760405162461bcd60e51b81526004016101a590610f21565b60008061043161085e565b6001546002549294509092506001600160a01b039081169116600061045d620f42406102208789610bb5565b90506000610472620f4240610220878a610bb5565b6003549091506104829083610be0565b6003556004546104929082610be0565b6004556005546104a29088610be0565b600555336000908152600860205260409020546104bf9088610be0565b33600081815260086020526040908190209290925590516323b872dd60e01b81526001600160a01b038616916323b872dd91610502919030908790600401610de6565b602060405180830381600087803b15801561051c57600080fd5b505af1158015610530573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105549190610d3e565b6105705760405162461bcd60e51b81526004016101a590611012565b6040516323b872dd60e01b81526001600160a01b038416906323b872dd906105a090339030908690600401610de6565b602060405180830381600087803b1580156105ba57600080fd5b505af11580156105ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f29190610d3e565b6103db5760405162461bcd60e51b81526004016101a5906110ce565b60075460ff166106305760405162461bcd60e51b81526004016101a590610f70565b600083116106505760405162461bcd60e51b81526004016101a590610e23565b600061065c8483610bec565b90508281101561067e5760405162461bcd60e51b81526004016101a590611105565b600080808460018111156106a257634e487b7160e01b600052602160045260246000fd5b14156106e2576003546106b59087610be0565b6003556004546106c59084610bd4565b60045550506001546002546001600160a01b039182169116610718565b6003546106ef9084610bd4565b6003556004546106ff9087610be0565b60045550506002546001546001600160a01b0391821691165b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb906107469033908790600401610e0a565b602060405180830381600087803b15801561076057600080fd5b505af1158015610774573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107989190610d3e565b6107b257634e487b7160e01b600052600160045260246000fd5b6040516323b872dd60e01b81526001600160a01b038316906323b872dd906107e290339030908b90600401610de6565b602060405180830381600087803b1580156107fc57600080fd5b505af1158015610810573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108349190610d3e565b6108505760405162461bcd60e51b81526004016101a590610fb5565b505050505050565b60035481565b600754600090819060ff166108855760405162461bcd60e51b81526004016101a590610f70565b6108a3600554610220620f4240600354610bb590919063ffffffff16565b6108c1600554610220620f4240600454610bb590919063ffffffff16565b915091509091565b6108d1610cc3565b6001600160a01b03166108e261091a565b6001600160a01b0316146109085760405162461bcd60e51b81526004016101a590611099565b6109126000610cc7565b565b60055481565b6000546001600160a01b031690565b60045481565b60065481565b61093d610cc3565b6001600160a01b031661094e61091a565b6001600160a01b0316146109745760405162461bcd60e51b81526004016101a590611099565b60075460ff16156109975760405162461bcd60e51b81526004016101a59061115a565b6007805460ff19166001908117909155546002546040516323b872dd60e01b81526001600160a01b0392831692919091169082906323b872dd906109e390339030908990600401610de6565b602060405180830381600087803b1580156109fd57600080fd5b505af1158015610a11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a359190610d3e565b610a515760405162461bcd60e51b81526004016101a59061119b565b6040516323b872dd60e01b81526001600160a01b038216906323b872dd90610a8190339030908890600401610de6565b602060405180830381600087803b158015610a9b57600080fd5b505af1158015610aaf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad39190610d3e565b610aef5760405162461bcd60e51b81526004016101a590610ef2565b600354610afc9085610be0565b600355600454610b0c9084610be0565b600455600583905533600090815260086020526040902054610b2e9084610be0565b3360009081526008602052604090205550505050565b610b4c610cc3565b6001600160a01b0316610b5d61091a565b6001600160a01b031614610b835760405162461bcd60e51b81526004016101a590611099565b6001600160a01b038116610ba95760405162461bcd60e51b81526004016101a590610e77565b610bb281610cc7565b50565b6000610bc18284611219565b9392505050565b6000610bc182846111f9565b6000610bc18284611238565b6000610bc182846111e1565b60008080836001811115610c1057634e487b7160e01b600052602160045260246000fd5b14610c1d57600354610c21565b6004545b9050600080846001811115610c4657634e487b7160e01b600052602160045260246000fd5b14610c5357600454610c57565b6003545b90506000610c72600354600454610bb590919063ffffffff16565b90506000610c94610c8d610c86858a610be0565b8490610bc8565b8590610bd4565b9050610cb8620f4240610220600654620f4240610cb19190611238565b8490610bb5565b979650505050505050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610d28578081fd5b81356001600160a01b0381168114610bc1578182fd5b600060208284031215610d4f578081fd5b81518015158114610bc1578182fd5b600060208284031215610d6f578081fd5b5035919050565b60008060408385031215610d88578081fd5b50508035926020909101359150565b600080600060608486031215610dab578081fd5b8335925060208401359150604084013560028110610dc7578182fd5b809150509250925092565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60208082526034908201527f54686520616d6f756e7420746f2073656c6c2073686f756c642062652073747260408201527334b1ba363c903134b3b3b2b9103a3430b710181760611b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f596f7520646f6e2774206861766520656e6f756768206c7020746f6b656e732e604082015260600190565b6020808252601590820152742aa9a221903a3930b739b332b9103330b4b632b21760591b604082015260600190565b6020808252602f908201527f54686520616d6f756e74206f6620737570706c696564206c7020746f6b656e7360408201526e1039b437bab632103132901f10181760891b606082015260800190565b60208082526025908201527f54686520706f6f6c2073686f756c6420626520696e697469616c697a6564206660408201526434b939ba1760d91b606082015260800190565b60208082526038908201527f5472616e73666572206f662074686520616d6f756e74206f6620746f6b656e2060408201527f796f752077616e7420746f2073656c6c206661696c65642e0000000000000000606082015260800190565b60208082526018908201527f5472616e73666572206f66204c696e6b206661696c65642e0000000000000000604082015260600190565b60208082526030908201527f54686520616d6f756e74206f6620726571756573746564206c7020746f6b656e60408201526f399039b437bab632103132901f10181760811b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526018908201527f5472616e73666572206f662055534443206661696c65642e0000000000000000604082015260600190565b60208082526035908201527f54686520616d6f756e74206f662070757263686173656420746f6b656e206973604082015274103637bbb2b9103a3430b7103932b8bab4b932b21760591b606082015260800190565b60208082526021908201527f54686520706f6f6c2077617320616c726561647920696e697469616c697a65646040820152601760f91b606082015260800190565b6020808252601590820152742634b735903a3930b739b332b9103330b4b632b21760591b604082015260600190565b90815260200190565b918252602082015260400190565b600082198211156111f4576111f461124f565b500190565b60008261121457634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156112335761123361124f565b500290565b60008282101561124a5761124a61124f565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220a8906fafbfbce40dc69138c834fdd6611e9fe9f405a17300ea65bc9fc8da9c6064736f6c63430008000033", "bytecodeSha1": "d77cfdb044102ec51f583a9ff763a73429d906a7", "compiler": {"evm_version": "istanbul", "optimizer": {"enabled": true, "runs": 200}, "version": "0.8.0+commit.c7dfd78e"}, "contractName": "SimpleSwap", "coverageMap": {"branches": {"0": {"Ownable.transferOwnership": {"61": [1185, 1208, true], "62": [1934, 1956, true]}}, "1": {}, "2": {}, "3": {"SimpleSwap.getLpTokenPrice": {"57": [6789, 6806, true]}, "SimpleSwap.initiatePool": {"58": [1314, 1332, true], "59": [1510, 1574, true], "60": [1618, 1682, true]}, "SimpleSwap.supply": {"50": [3571, 3589, true], "51": [4356, 4420, true], "52": [4467, 4531, true]}, "SimpleSwap.swap": {"53": [2232, 2253, true], "54": [2425, 2472, true], "55": [2600, 2626, false], "56": [3261, 3329, true]}, "SimpleSwap.withdraw": {"48": [4743, 4761, true], "49": [4832, 4882, true]}}}, "statements": {"0": {"Ownable._setOwner": {"46": [2131, 2148], "47": [2158, 2203]}, "Ownable.owner": {"29": [1038, 1051]}, "Ownable.renounceOwnership": {"28": [1669, 1690]}, "Ownable.transferOwnership": {"38": [1926, 1999], "39": [2009, 2028]}}, "1": {"Context._msgSender": {"45": [658, 675]}}, "2": {"SafeMath.add": {"43": [2749, 2761]}, "SafeMath.div": {"41": [3844, 3856]}, "SafeMath.mul": {"40": [3459, 3471]}, "SafeMath.sub": {"42": [3116, 3128]}}, "3": {"SimpleSwap.getAmountPurchasedToken": {"44": [6436, 6496]}, "SimpleSwap.getLpTokenPrice": {"27": [6613, 6724]}, "SimpleSwap.initiatePool": {"30": [1306, 1370], "31": [1380, 1404], "32": [1502, 1600], "33": [1610, 1708], "34": [1719, 1782], "35": [1792, 1855], "36": [1866, 1900], "37": [1911, 1997]}, "SimpleSwap.supply": {"8": [3563, 3641], "9": [4043, 4106], "10": [4116, 4179], "11": [4190, 4239], "12": [4250, 4337], "13": [4348, 4449], "14": [4459, 4560]}, "SimpleSwap.swap": {"15": [2224, 2310], "16": [2417, 2530], "17": [2642, 2705], "18": [2719, 2784], "19": [2799, 2830], "20": [2844, 2877], "21": [2917, 2982], "22": [2996, 3058], "23": [3073, 3104], "24": [3119, 3152], "25": [3181, 3243], "26": [3253, 3390]}, "SimpleSwap.withdraw": {"0": [4735, 4814], "1": [4824, 4919], "2": [5210, 5275], "3": [5285, 5350], "4": [5361, 5410], "5": [5421, 5508], "6": [5606, 5661], "7": [5671, 5726]}}}}, "dependencies": ["OpenZeppelin/openzeppelin-contracts@4.2.0/Context", "IERC20", "OpenZeppelin/openzeppelin-contracts@4.2.0/Ownable", "OpenZeppelin/openzeppelin-contracts@4.2.0/SafeMath"], "deployedBytecode": "608060405234801561001057600080fd5b50600436106100b45760003560e01c8063868c844f11610071578063868c844f146101305780638da5cb5b14610138578063b2e411c21461014d578063c57981b514610155578063ce49ea9a1461015d578063f2fde38b14610170576100b4565b80632e1a7d4d146100b957806335403023146100ce5780635c36d25e146100e1578063618e552c146100f45780636f5cdb6c14610112578063715018a614610128575b600080fd5b6100cc6100c7366004610d5e565b610183565b005b6100cc6100dc366004610d5e565b6103e4565b6100cc6100ef366004610d97565b61060e565b6100fc610858565b60405161010991906111ca565b60405180910390f35b61011a61085e565b6040516101099291906111d3565b6100cc6108c9565b6100fc610914565b61014061091a565b6040516101099190610dd2565b6100fc610929565b6100fc61092f565b6100cc61016b366004610d76565b610935565b6100cc61017e366004610d17565b610b44565b60075460ff166101ae5760405162461bcd60e51b81526004016101a590610f70565b60405180910390fd5b600081116101ce5760405162461bcd60e51b81526004016101a590611049565b336000908152600860205260409020548111156101fd5760405162461bcd60e51b81526004016101a590610ebd565b60008061020861085e565b90925090506000610226620f42406102208587610bb5565b90610bc8565b9050600061023b620f42406102208588610bb5565b60035490915061024b9083610bd4565b60035560045461025b9082610bd4565b60045560055461026b9086610bd4565b600555336000908152600860205260409020546102889086610bd4565b336000818152600860205260409081902092909255600154600254925163a9059cbb60e01b81526001600160a01b039182169390911691839163a9059cbb916102d5918890600401610e0a565b602060405180830381600087803b1580156102ef57600080fd5b505af1158015610303573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103279190610d3e565b61034157634e487b7160e01b600052600160045260246000fd5b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb9061036f9033908790600401610e0a565b602060405180830381600087803b15801561038957600080fd5b505af115801561039d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c19190610d3e565b6103db57634e487b7160e01b600052600160045260246000fd5b50505050505050565b60075460ff166104065760405162461bcd60e51b81526004016101a590610f70565b600081116104265760405162461bcd60e51b81526004016101a590610f21565b60008061043161085e565b6001546002549294509092506001600160a01b039081169116600061045d620f42406102208789610bb5565b90506000610472620f4240610220878a610bb5565b6003549091506104829083610be0565b6003556004546104929082610be0565b6004556005546104a29088610be0565b600555336000908152600860205260409020546104bf9088610be0565b33600081815260086020526040908190209290925590516323b872dd60e01b81526001600160a01b038616916323b872dd91610502919030908790600401610de6565b602060405180830381600087803b15801561051c57600080fd5b505af1158015610530573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105549190610d3e565b6105705760405162461bcd60e51b81526004016101a590611012565b6040516323b872dd60e01b81526001600160a01b038416906323b872dd906105a090339030908690600401610de6565b602060405180830381600087803b1580156105ba57600080fd5b505af11580156105ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f29190610d3e565b6103db5760405162461bcd60e51b81526004016101a5906110ce565b60075460ff166106305760405162461bcd60e51b81526004016101a590610f70565b600083116106505760405162461bcd60e51b81526004016101a590610e23565b600061065c8483610bec565b90508281101561067e5760405162461bcd60e51b81526004016101a590611105565b600080808460018111156106a257634e487b7160e01b600052602160045260246000fd5b14156106e2576003546106b59087610be0565b6003556004546106c59084610bd4565b60045550506001546002546001600160a01b039182169116610718565b6003546106ef9084610bd4565b6003556004546106ff9087610be0565b60045550506002546001546001600160a01b0391821691165b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb906107469033908790600401610e0a565b602060405180830381600087803b15801561076057600080fd5b505af1158015610774573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107989190610d3e565b6107b257634e487b7160e01b600052600160045260246000fd5b6040516323b872dd60e01b81526001600160a01b038316906323b872dd906107e290339030908b90600401610de6565b602060405180830381600087803b1580156107fc57600080fd5b505af1158015610810573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108349190610d3e565b6108505760405162461bcd60e51b81526004016101a590610fb5565b505050505050565b60035481565b600754600090819060ff166108855760405162461bcd60e51b81526004016101a590610f70565b6108a3600554610220620f4240600354610bb590919063ffffffff16565b6108c1600554610220620f4240600454610bb590919063ffffffff16565b915091509091565b6108d1610cc3565b6001600160a01b03166108e261091a565b6001600160a01b0316146109085760405162461bcd60e51b81526004016101a590611099565b6109126000610cc7565b565b60055481565b6000546001600160a01b031690565b60045481565b60065481565b61093d610cc3565b6001600160a01b031661094e61091a565b6001600160a01b0316146109745760405162461bcd60e51b81526004016101a590611099565b60075460ff16156109975760405162461bcd60e51b81526004016101a59061115a565b6007805460ff19166001908117909155546002546040516323b872dd60e01b81526001600160a01b0392831692919091169082906323b872dd906109e390339030908990600401610de6565b602060405180830381600087803b1580156109fd57600080fd5b505af1158015610a11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a359190610d3e565b610a515760405162461bcd60e51b81526004016101a59061119b565b6040516323b872dd60e01b81526001600160a01b038216906323b872dd90610a8190339030908890600401610de6565b602060405180830381600087803b158015610a9b57600080fd5b505af1158015610aaf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad39190610d3e565b610aef5760405162461bcd60e51b81526004016101a590610ef2565b600354610afc9085610be0565b600355600454610b0c9084610be0565b600455600583905533600090815260086020526040902054610b2e9084610be0565b3360009081526008602052604090205550505050565b610b4c610cc3565b6001600160a01b0316610b5d61091a565b6001600160a01b031614610b835760405162461bcd60e51b81526004016101a590611099565b6001600160a01b038116610ba95760405162461bcd60e51b81526004016101a590610e77565b610bb281610cc7565b50565b6000610bc18284611219565b9392505050565b6000610bc182846111f9565b6000610bc18284611238565b6000610bc182846111e1565b60008080836001811115610c1057634e487b7160e01b600052602160045260246000fd5b14610c1d57600354610c21565b6004545b9050600080846001811115610c4657634e487b7160e01b600052602160045260246000fd5b14610c5357600454610c57565b6003545b90506000610c72600354600454610bb590919063ffffffff16565b90506000610c94610c8d610c86858a610be0565b8490610bc8565b8590610bd4565b9050610cb8620f4240610220600654620f4240610cb19190611238565b8490610bb5565b979650505050505050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610d28578081fd5b81356001600160a01b0381168114610bc1578182fd5b600060208284031215610d4f578081fd5b81518015158114610bc1578182fd5b600060208284031215610d6f578081fd5b5035919050565b60008060408385031215610d88578081fd5b50508035926020909101359150565b600080600060608486031215610dab578081fd5b8335925060208401359150604084013560028110610dc7578182fd5b809150509250925092565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60208082526034908201527f54686520616d6f756e7420746f2073656c6c2073686f756c642062652073747260408201527334b1ba363c903134b3b3b2b9103a3430b710181760611b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f596f7520646f6e2774206861766520656e6f756768206c7020746f6b656e732e604082015260600190565b6020808252601590820152742aa9a221903a3930b739b332b9103330b4b632b21760591b604082015260600190565b6020808252602f908201527f54686520616d6f756e74206f6620737570706c696564206c7020746f6b656e7360408201526e1039b437bab632103132901f10181760891b606082015260800190565b60208082526025908201527f54686520706f6f6c2073686f756c6420626520696e697469616c697a6564206660408201526434b939ba1760d91b606082015260800190565b60208082526038908201527f5472616e73666572206f662074686520616d6f756e74206f6620746f6b656e2060408201527f796f752077616e7420746f2073656c6c206661696c65642e0000000000000000606082015260800190565b60208082526018908201527f5472616e73666572206f66204c696e6b206661696c65642e0000000000000000604082015260600190565b60208082526030908201527f54686520616d6f756e74206f6620726571756573746564206c7020746f6b656e60408201526f399039b437bab632103132901f10181760811b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526018908201527f5472616e73666572206f662055534443206661696c65642e0000000000000000604082015260600190565b60208082526035908201527f54686520616d6f756e74206f662070757263686173656420746f6b656e206973604082015274103637bbb2b9103a3430b7103932b8bab4b932b21760591b606082015260800190565b60208082526021908201527f54686520706f6f6c2077617320616c726561647920696e697469616c697a65646040820152601760f91b606082015260800190565b6020808252601590820152742634b735903a3930b739b332b9103330b4b632b21760591b604082015260600190565b90815260200190565b918252602082015260400190565b600082198211156111f4576111f461124f565b500190565b60008261121457634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156112335761123361124f565b500290565b60008282101561124a5761124a61124f565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220a8906fafbfbce40dc69138c834fdd6611e9fe9f405a17300ea65bc9fc8da9c6064736f6c63430008000033", "deployedSourceMap": "462:6406:3:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4573:1160;;;;;;:::i;:::-;;:::i;:::-;;3403:1164;;;;;;:::i;:::-;;:::i;2010:1387::-;;;;;;:::i;:::-;;:::i;862:37::-;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6509:222;;;:::i;:::-;;;;;;;;:::i;1605:92:0:-;;;:::i;986:33:3:-;;;:::i;973:85:0:-;;;:::i;:::-;;;;;;;:::i;924:37:3:-;;;:::i;1049:32::-;;;:::i;1201:803::-;;;;;;:::i;:::-;;:::i;1846:189:0:-;;;;;;:::i;:::-;;:::i;4573:1160:3:-;6789:17;;;;6781:67;;;;-1:-1:-1;;;6781:67:3;;;;;;;:::i;:::-;;;;;;;;;4760:1:::1;4743:14;:18;4735:79;;;;-1:-1:-1::0;;;4735:79:3::1;;;;;;;:::i;:::-;4853:10;4832:32;::::0;;;:20:::1;:32;::::0;;;;;:50;-1:-1:-1;4832:50:3::1;4824:95;;;;-1:-1:-1::0;;;4824:95:3::1;;;;;;;:::i;:::-;4930:28;4960::::0;4993:17:::1;:15;:17::i;:::-;4929:81:::0;;-1:-1:-1;4929:81:3;-1:-1:-1;5021:28:3::1;5052:53;5097:7;5052:40;4929:81:::0;5077:14;5052:24:::1;:40::i;:::-;:44:::0;::::1;:53::i;:::-;5021:84:::0;-1:-1:-1;5115:28:3::1;5146:53;5191:7;5146:40;:20:::0;5171:14;5146:24:::1;:40::i;:53::-;5231:18;::::0;5115:84;;-1:-1:-1;5231:44:3::1;::::0;5254:20;5231:22:::1;:44::i;:::-;5210:18;:65:::0;5306:18:::1;::::0;:44:::1;::::0;5329:20;5306:22:::1;:44::i;:::-;5285:18;:65:::0;5377:13:::1;::::0;:33:::1;::::0;5395:14;5377:17:::1;:33::i;:::-;5361:13;:49:::0;5477:10:::1;5456:32;::::0;;;:20:::1;:32;::::0;;;;;:52:::1;::::0;5493:14;5456:36:::1;:52::i;:::-;5442:10;5421:32;::::0;;;:20:::1;:32;::::0;;;;;;:87;;;;5540:11:::1;::::0;5583::::1;::::0;5613:47;;-1:-1:-1;;;5613:47:3;;-1:-1:-1;;;;;5540:11:3;;::::1;::::0;5583;;::::1;::::0;5540;;5613:13:::1;::::0;:47:::1;::::0;5639:20;;5613:47:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5606:55;;-1:-1:-1::0;;;5606:55:3::1;;;;;;;;;5678:47;::::0;-1:-1:-1;;;5678:47:3;;-1:-1:-1;;;;;5678:13:3;::::1;::::0;::::1;::::0;:47:::1;::::0;5692:10:::1;::::0;5704:20;;5678:47:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5671:55;;-1:-1:-1::0;;;5671:55:3::1;;;;;;;;;6858:1;;;;;;4573:1160:::0;:::o;3403:1164::-;6789:17;;;;6781:67;;;;-1:-1:-1;;;6781:67:3;;;;;;;:::i;:::-;3588:1:::1;3571:14;:18;3563:78;;;;-1:-1:-1::0;;;3563:78:3::1;;;;;;;:::i;:::-;3652:28;3682::::0;3714:17:::1;:15;:17::i;:::-;3763:11;::::0;3806::::1;::::0;3651:80;;-1:-1:-1;3651:80:3;;-1:-1:-1;;;;;;3763:11:3;;::::1;::::0;3806::::1;3742;3858:53;3903:7;3858:40;3651:80:::0;3883:14;3858:24:::1;:40::i;:53::-;3829:82:::0;-1:-1:-1;3936:26:3::1;3965:53;4010:7;3965:40;:20:::0;3990:14;3965:24:::1;:40::i;:53::-;4064:18;::::0;3936:82;;-1:-1:-1;4064:42:3::1;::::0;4087:18;4064:22:::1;:42::i;:::-;4043:18;:63:::0;4137:18:::1;::::0;:42:::1;::::0;4160:18;4137:22:::1;:42::i;:::-;4116:18;:63:::0;4206:13:::1;::::0;:33:::1;::::0;4224:14;4206:17:::1;:33::i;:::-;4190:13;:49:::0;4306:10:::1;4285:32;::::0;;;:20:::1;:32;::::0;;;;;:52:::1;::::0;4322:14;4285:36:::1;:52::i;:::-;4271:10;4250:32;::::0;;;:20:::1;:32;::::0;;;;;;:87;;;;4356:64;;-1:-1:-1;;;4356:64:3;;-1:-1:-1;;;;;4356:17:3;::::1;::::0;::::1;::::0;:64:::1;::::0;4271:10;4394:4:::1;::::0;4401:18;;4356:64:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4348:101;;;;-1:-1:-1::0;;;4348:101:3::1;;;;;;;:::i;:::-;4467:64;::::0;-1:-1:-1;;;4467:64:3;;-1:-1:-1;;;;;4467:17:3;::::1;::::0;::::1;::::0;:64:::1;::::0;4485:10:::1;::::0;4505:4:::1;::::0;4512:18;;4467:64:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4459:101;;;;-1:-1:-1::0;;;4459:101:3::1;;;;;;;:::i;2010:1387::-:0;6789:17;;;;6781:67;;;;-1:-1:-1;;;6781:67:3;;;;;;;:::i;:::-;2252:1:::1;2232:17;:21;2224:86;;;;-1:-1:-1::0;;;2224:86:3::1;;;;;;;:::i;:::-;2320:28;2351:56;2375:17;2394:12;2351:23;:56::i;:::-;2320:87;;2449:23;2425:20;:47;;2417:113;;;;-1:-1:-1::0;;;2417:113:3::1;;;;;;;:::i;:::-;2541:16;::::0;;2600:12:::1;:26;;;;;;-1:-1:-1::0;;;2600:26:3::1;;;;;;;;;;2596:567;;;2664:18;::::0;:41:::1;::::0;2687:17;2664:22:::1;:41::i;:::-;2642:18;:63:::0;2740:18:::1;::::0;:44:::1;::::0;2763:20;2740:22:::1;:44::i;:::-;2719:18;:65:::0;-1:-1:-1;;2818:11:3::1;::::0;2865::::1;::::0;-1:-1:-1;;;;;2818:11:3;;::::1;::::0;2865::::1;2596:567;;;2938:18;::::0;:44:::1;::::0;2961:20;2938:22:::1;:44::i;:::-;2917:18;:65:::0;3017:18:::1;::::0;:41:::1;::::0;3040:17;3017:22:::1;:41::i;:::-;2996:18;:62:::0;-1:-1:-1;;3092:11:3::1;::::0;;3140;-1:-1:-1;;;;;3092:11:3;;::::1;::::0;3140::::1;2596:567;3188:54;::::0;-1:-1:-1;;;3188:54:3;;-1:-1:-1;;;;;3188:20:3;::::1;::::0;::::1;::::0;:54:::1;::::0;3209:10:::1;::::0;3221:20;;3188:54:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3181:62;;-1:-1:-1::0;;;3181:62:3::1;;;;;;;;;3261:68;::::0;-1:-1:-1;;;3261:68:3;;-1:-1:-1;;;;;3261:22:3;::::1;::::0;::::1;::::0;:68:::1;::::0;3284:10:::1;::::0;3304:4:::1;::::0;3311:17;;3261:68:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3253:137;;;;-1:-1:-1::0;;;3253:137:3::1;;;;;;;:::i;:::-;6858:1;;;2010:1387:::0;;;:::o;862:37::-;;;;:::o;6509:222::-;6789:17;;6580:7;;;;6789:17;;6781:67;;;;-1:-1:-1;;;6781:67:3;;;;;;;:::i;:::-;6621:50:::1;6657:13;;6621:31;6644:7;6621:18;;:22;;:31;;;;:::i;:50::-;6673;6709:13;;6673:31;6696:7;6673:18;;:22;;:31;;;;:::i;:50::-;6613:111;;;;6509:222:::0;;:::o;1605:92:0:-;1196:12;:10;:12::i;:::-;-1:-1:-1;;;;;1185:23:0;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1185:23:0;;1177:68;;;;-1:-1:-1;;;1177:68:0;;;;;;;:::i;:::-;1669:21:::1;1687:1;1669:9;:21::i;:::-;1605:92::o:0;986:33:3:-;;;;:::o;973:85:0:-;1019:7;1045:6;-1:-1:-1;;;;;1045:6:0;973:85;:::o;924:37:3:-;;;;:::o;1049:32::-;;;;:::o;1201:803::-;1196:12:0;:10;:12::i;:::-;-1:-1:-1;;;;;1185:23:0;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1185:23:0;;1177:68;;;;-1:-1:-1;;;1177:68:0;;;;;;;:::i;:::-;1315:17:3::1;::::0;::::1;;1314:18;1306:64;;;;-1:-1:-1::0;;;1306:64:3::1;;;;;;;:::i;:::-;1380:17;:24:::0;;-1:-1:-1;;1380:24:3::1;1400:4;1380:24:::0;;::::1;::::0;;;1436:11;1479::::1;::::0;1510:64:::1;::::0;-1:-1:-1;;;1510:64:3;;-1:-1:-1;;;;;1436:11:3;;::::1;::::0;1479;;;::::1;::::0;1436;;1510:17:::1;::::0;:64:::1;::::0;1528:10:::1;::::0;1548:4:::1;::::0;1555:18;;1510:64:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1502:98;;;;-1:-1:-1::0;;;1502:98:3::1;;;;;;;:::i;:::-;1618:64;::::0;-1:-1:-1;;;1618:64:3;;-1:-1:-1;;;;;1618:17:3;::::1;::::0;::::1;::::0;:64:::1;::::0;1636:10:::1;::::0;1656:4:::1;::::0;1663:18;;1618:64:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1610:98;;;;-1:-1:-1::0;;;1610:98:3::1;;;;;;;:::i;:::-;1740:18;::::0;:42:::1;::::0;1763:18;1740:22:::1;:42::i;:::-;1719:18;:63:::0;1813:18:::1;::::0;:42:::1;::::0;1836:18;1813:22:::1;:42::i;:::-;1792:18;:63:::0;1866:13:::1;:34:::0;;;1967:10:::1;-1:-1:-1::0;1946:32:3;;;:20:::1;:32;::::0;;;;;:51:::1;::::0;1882:18;1946:36:::1;:51::i;:::-;1932:10;1911:32;::::0;;;:20:::1;:32;::::0;;;;:86;-1:-1:-1;;;;1201:803:3:o;1846:189:0:-;1196:12;:10;:12::i;:::-;-1:-1:-1;;;;;1185:23:0;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1185:23:0;;1177:68;;;;-1:-1:-1;;;1177:68:0;;;;;;;:::i;:::-;-1:-1:-1;;;;;1934:22:0;::::1;1926:73;;;;-1:-1:-1::0;;;1926:73:0::1;;;;;;;:::i;:::-;2009:19;2019:8;2009:9;:19::i;:::-;1846:189:::0;:::o;3382:96:2:-;3440:7;3466:5;3470:1;3466;:5;:::i;:::-;3459:12;3382:96;-1:-1:-1;;;3382:96:2:o;3767:::-;3825:7;3851:5;3855:1;3851;:5;:::i;3039:96::-;3097:7;3123:5;3127:1;3123;:5;:::i;2672:96::-;2730:7;2756:5;2760:1;2756;:5;:::i;5940:563:3:-;6041:7;;;6077:12;:26;;;;;;-1:-1:-1;;;6077:26:3;;;;;;;;;;6076:70;;6128:18;;6076:70;;;6107:18;;6076:70;6064:82;-1:-1:-1;6156:9:3;;6169:12;:26;;;;;;-1:-1:-1;;;6169:26:3;;;;;;;;;;6168:70;;6220:18;;6168:70;;;6199:18;;6168:70;6156:82;;6249:9;6261:42;6284:18;;6261;;:22;;:42;;;;:::i;:::-;6249:54;-1:-1:-1;6336:29:3;6368:37;6374:30;6380:23;:1;6386:16;6380:5;:23::i;:::-;6374:1;;:5;:30::i;:::-;6368:1;;:5;:37::i;:::-;6336:69;;6443:53;6488:7;6443:40;6479:3;;6469:7;:13;;;;:::i;:::-;6443:21;;:25;:40::i;:53::-;6436:60;5940:563;-1:-1:-1;;;;;;;5940:563:3:o;586:96:1:-;665:10;586:96;:::o;2041:169:0:-;2096:16;2115:6;;-1:-1:-1;;;;;2131:17:0;;;-1:-1:-1;;;;;;2131:17:0;;;;;;2163:40;;2115:6;;;;;;;2163:40;;2096:16;2163:40;2041:169;;:::o;14:306:4:-;;126:2;114:9;105:7;101:23;97:32;94:2;;;147:6;139;132:22;94:2;178:23;;-1:-1:-1;;;;;230:31:4;;220:42;;210:2;;281:6;273;266:22;325:297;;445:2;433:9;424:7;420:23;416:32;413:2;;;466:6;458;451:22;413:2;503:9;497:16;556:5;549:13;542:21;535:5;532:32;522:2;;583:6;575;568:22;627:190;;739:2;727:9;718:7;714:23;710:32;707:2;;;760:6;752;745:22;707:2;-1:-1:-1;788:23:4;;697:120;-1:-1:-1;697:120:4:o;822:258::-;;;951:2;939:9;930:7;926:23;922:32;919:2;;;972:6;964;957:22;919:2;-1:-1:-1;;1000:23:4;;;1070:2;1055:18;;;1042:32;;-1:-1:-1;909:171:4:o;1085:420::-;;;;1239:2;1227:9;1218:7;1214:23;1210:32;1207:2;;;1260:6;1252;1245:22;1207:2;1301:9;1288:23;1278:33;;1358:2;1347:9;1343:18;1330:32;1320:42;;1412:2;1401:9;1397:18;1384:32;1445:1;1438:5;1435:12;1425:2;;1466:6;1458;1451:22;1425:2;1494:5;1484:15;;;1197:308;;;;;:::o;1510:203::-;-1:-1:-1;;;;;1674:32:4;;;;1656:51;;1644:2;1629:18;;1611:102::o;1718:375::-;-1:-1:-1;;;;;1976:15:4;;;1958:34;;2028:15;;;;2023:2;2008:18;;2001:43;2075:2;2060:18;;2053:34;;;;1908:2;1893:18;;1875:218::o;2098:274::-;-1:-1:-1;;;;;2290:32:4;;;;2272:51;;2354:2;2339:18;;2332:34;2260:2;2245:18;;2227:145::o;2377:416::-;2579:2;2561:21;;;2618:2;2598:18;;;2591:30;2657:34;2652:2;2637:18;;2630:62;-1:-1:-1;;;2723:2:4;2708:18;;2701:50;2783:3;2768:19;;2551:242::o;2798:402::-;3000:2;2982:21;;;3039:2;3019:18;;;3012:30;3078:34;3073:2;3058:18;;3051:62;-1:-1:-1;;;3144:2:4;3129:18;;3122:36;3190:3;3175:19;;2972:228::o;3205:356::-;3407:2;3389:21;;;3426:18;;;3419:30;3485:34;3480:2;3465:18;;3458:62;3552:2;3537:18;;3379:182::o;3566:345::-;3768:2;3750:21;;;3807:2;3787:18;;;3780:30;-1:-1:-1;;;3841:2:4;3826:18;;3819:51;3902:2;3887:18;;3740:171::o;3916:411::-;4118:2;4100:21;;;4157:2;4137:18;;;4130:30;4196:34;4191:2;4176:18;;4169:62;-1:-1:-1;;;4262:2:4;4247:18;;4240:45;4317:3;4302:19;;4090:237::o;4332:401::-;4534:2;4516:21;;;4573:2;4553:18;;;4546:30;4612:34;4607:2;4592:18;;4585:62;-1:-1:-1;;;4678:2:4;4663:18;;4656:35;4723:3;4708:19;;4506:227::o;4738:420::-;4940:2;4922:21;;;4979:2;4959:18;;;4952:30;5018:34;5013:2;4998:18;;4991:62;5089:26;5084:2;5069:18;;5062:54;5148:3;5133:19;;4912:246::o;5163:348::-;5365:2;5347:21;;;5404:2;5384:18;;;5377:30;5443:26;5438:2;5423:18;;5416:54;5502:2;5487:18;;5337:174::o;5516:412::-;5718:2;5700:21;;;5757:2;5737:18;;;5730:30;5796:34;5791:2;5776:18;;5769:62;-1:-1:-1;;;5862:2:4;5847:18;;5840:46;5918:3;5903:19;;5690:238::o;5933:356::-;6135:2;6117:21;;;6154:18;;;6147:30;6213:34;6208:2;6193:18;;6186:62;6280:2;6265:18;;6107:182::o;6294:348::-;6496:2;6478:21;;;6535:2;6515:18;;;6508:30;6574:26;6569:2;6554:18;;6547:54;6633:2;6618:18;;6468:174::o;6647:417::-;6849:2;6831:21;;;6888:2;6868:18;;;6861:30;6927:34;6922:2;6907:18;;6900:62;-1:-1:-1;;;6993:2:4;6978:18;;6971:51;7054:3;7039:19;;6821:243::o;7069:397::-;7271:2;7253:21;;;7310:2;7290:18;;;7283:30;7349:34;7344:2;7329:18;;7322:62;-1:-1:-1;;;7415:2:4;7400:18;;7393:31;7456:3;7441:19;;7243:223::o;7471:345::-;7673:2;7655:21;;;7712:2;7692:18;;;7685:30;-1:-1:-1;;;7746:2:4;7731:18;;7724:51;7807:2;7792:18;;7645:171::o;7821:177::-;7967:25;;;7955:2;7940:18;;7922:76::o;8003:248::-;8177:25;;;8233:2;8218:18;;8211:34;8165:2;8150:18;;8132:119::o;8256:128::-;;8327:1;8323:6;8320:1;8317:13;8314:2;;;8333:18;;:::i;:::-;-1:-1:-1;8369:9:4;;8304:80::o;8389:217::-;;8455:1;8445:2;;-1:-1:-1;;;8480:31:4;;8534:4;8531:1;8524:15;8562:4;8487:1;8552:15;8445:2;-1:-1:-1;8591:9:4;;8435:171::o;8611:168::-;;8717:1;8713;8709:6;8705:14;8702:1;8699:21;8694:1;8687:9;8680:17;8676:45;8673:2;;;8724:18;;:::i;:::-;-1:-1:-1;8764:9:4;;8663:116::o;8784:125::-;;8852:1;8849;8846:8;8843:2;;;8857:18;;:::i;:::-;-1:-1:-1;8894:9:4;;8833:76::o;8914:127::-;8975:10;8970:3;8966:20;8963:1;8956:31;9006:4;9003:1;8996:15;9030:4;9027:1;9020:15", "language": "Solidity", "natspec": {"kind": "dev", "methods": {"owner()": {"details": "Returns the address of the current owner."}, "renounceOwnership()": {"details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."}, "transferOwnership(address)": {"details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."}}, "version": 1}, "offset": [462, 6868], "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xB4 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x868C844F GT PUSH2 0x71 JUMPI DUP1 PUSH4 0x868C844F EQ PUSH2 0x130 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x138 JUMPI DUP1 PUSH4 0xB2E411C2 EQ PUSH2 0x14D JUMPI DUP1 PUSH4 0xC57981B5 EQ PUSH2 0x155 JUMPI DUP1 PUSH4 0xCE49EA9A EQ PUSH2 0x15D JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x170 JUMPI PUSH2 0xB4 JUMP JUMPDEST DUP1 PUSH4 0x2E1A7D4D EQ PUSH2 0xB9 JUMPI DUP1 PUSH4 0x35403023 EQ PUSH2 0xCE JUMPI DUP1 PUSH4 0x5C36D25E EQ PUSH2 0xE1 JUMPI DUP1 PUSH4 0x618E552C EQ PUSH2 0xF4 JUMPI DUP1 PUSH4 0x6F5CDB6C EQ PUSH2 0x112 JUMPI DUP1 PUSH4 0x715018A6 EQ PUSH2 0x128 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xCC PUSH2 0xC7 CALLDATASIZE PUSH1 0x4 PUSH2 0xD5E JUMP JUMPDEST PUSH2 0x183 JUMP JUMPDEST STOP JUMPDEST PUSH2 0xCC PUSH2 0xDC CALLDATASIZE PUSH1 0x4 PUSH2 0xD5E JUMP JUMPDEST PUSH2 0x3E4 JUMP JUMPDEST PUSH2 0xCC PUSH2 0xEF CALLDATASIZE PUSH1 0x4 PUSH2 0xD97 JUMP JUMPDEST PUSH2 0x60E JUMP JUMPDEST PUSH2 0xFC PUSH2 0x858 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x109 SWAP2 SWAP1 PUSH2 0x11CA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x11A PUSH2 0x85E JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x109 SWAP3 SWAP2 SWAP1 PUSH2 0x11D3 JUMP JUMPDEST PUSH2 0xCC PUSH2 0x8C9 JUMP JUMPDEST PUSH2 0xFC PUSH2 0x914 JUMP JUMPDEST PUSH2 0x140 PUSH2 0x91A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x109 SWAP2 SWAP1 PUSH2 0xDD2 JUMP JUMPDEST PUSH2 0xFC PUSH2 0x929 JUMP JUMPDEST PUSH2 0xFC PUSH2 0x92F JUMP JUMPDEST PUSH2 0xCC PUSH2 0x16B CALLDATASIZE PUSH1 0x4 PUSH2 0xD76 JUMP JUMPDEST PUSH2 0x935 JUMP JUMPDEST PUSH2 0xCC PUSH2 0x17E CALLDATASIZE PUSH1 0x4 PUSH2 0xD17 JUMP JUMPDEST PUSH2 0xB44 JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0xFF AND PUSH2 0x1AE JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xF70 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP2 GT PUSH2 0x1CE JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x1049 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 GT ISZERO PUSH2 0x1FD JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xEBD JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x208 PUSH2 0x85E JUMP JUMPDEST SWAP1 SWAP3 POP SWAP1 POP PUSH1 0x0 PUSH2 0x226 PUSH3 0xF4240 PUSH2 0x220 DUP6 DUP8 PUSH2 0xBB5 JUMP JUMPDEST SWAP1 PUSH2 0xBC8 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0x23B PUSH3 0xF4240 PUSH2 0x220 DUP6 DUP9 PUSH2 0xBB5 JUMP JUMPDEST PUSH1 0x3 SLOAD SWAP1 SWAP2 POP PUSH2 0x24B SWAP1 DUP4 PUSH2 0xBD4 JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x25B SWAP1 DUP3 PUSH2 0xBD4 JUMP JUMPDEST PUSH1 0x4 SSTORE PUSH1 0x5 SLOAD PUSH2 0x26B SWAP1 DUP7 PUSH2 0xBD4 JUMP JUMPDEST PUSH1 0x5 SSTORE CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0x288 SWAP1 DUP7 PUSH2 0xBD4 JUMP JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 DUP2 SWAP1 KECCAK256 SWAP3 SWAP1 SWAP3 SSTORE PUSH1 0x1 SLOAD PUSH1 0x2 SLOAD SWAP3 MLOAD PUSH4 0xA9059CBB PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 DUP3 AND SWAP4 SWAP1 SWAP2 AND SWAP2 DUP4 SWAP2 PUSH4 0xA9059CBB SWAP2 PUSH2 0x2D5 SWAP2 DUP9 SWAP1 PUSH1 0x4 ADD PUSH2 0xE0A JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x2EF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x303 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x327 SWAP2 SWAP1 PUSH2 0xD3E JUMP JUMPDEST PUSH2 0x341 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x1 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH4 0xA9059CBB PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND SWAP1 PUSH4 0xA9059CBB SWAP1 PUSH2 0x36F SWAP1 CALLER SWAP1 DUP8 SWAP1 PUSH1 0x4 ADD PUSH2 0xE0A JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x389 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x39D JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x3C1 SWAP2 SWAP1 PUSH2 0xD3E JUMP JUMPDEST PUSH2 0x3DB JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x1 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST POP POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0xFF AND PUSH2 0x406 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xF70 JUMP JUMPDEST PUSH1 0x0 DUP2 GT PUSH2 0x426 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xF21 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x431 PUSH2 0x85E JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x2 SLOAD SWAP3 SWAP5 POP SWAP1 SWAP3 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 DUP2 AND SWAP2 AND PUSH1 0x0 PUSH2 0x45D PUSH3 0xF4240 PUSH2 0x220 DUP8 DUP10 PUSH2 0xBB5 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0x472 PUSH3 0xF4240 PUSH2 0x220 DUP8 DUP11 PUSH2 0xBB5 JUMP JUMPDEST PUSH1 0x3 SLOAD SWAP1 SWAP2 POP PUSH2 0x482 SWAP1 DUP4 PUSH2 0xBE0 JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x492 SWAP1 DUP3 PUSH2 0xBE0 JUMP JUMPDEST PUSH1 0x4 SSTORE PUSH1 0x5 SLOAD PUSH2 0x4A2 SWAP1 DUP9 PUSH2 0xBE0 JUMP JUMPDEST PUSH1 0x5 SSTORE CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0x4BF SWAP1 DUP9 PUSH2 0xBE0 JUMP JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 DUP2 SWAP1 KECCAK256 SWAP3 SWAP1 SWAP3 SSTORE SWAP1 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP7 AND SWAP2 PUSH4 0x23B872DD SWAP2 PUSH2 0x502 SWAP2 SWAP1 ADDRESS SWAP1 DUP8 SWAP1 PUSH1 0x4 ADD PUSH2 0xDE6 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x51C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x530 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x554 SWAP2 SWAP1 PUSH2 0xD3E JUMP JUMPDEST PUSH2 0x570 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x1012 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP5 AND SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0x5A0 SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP7 SWAP1 PUSH1 0x4 ADD PUSH2 0xDE6 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x5BA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x5CE JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x5F2 SWAP2 SWAP1 PUSH2 0xD3E JUMP JUMPDEST PUSH2 0x3DB JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x10CE JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0xFF AND PUSH2 0x630 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xF70 JUMP JUMPDEST PUSH1 0x0 DUP4 GT PUSH2 0x650 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xE23 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x65C DUP5 DUP4 PUSH2 0xBEC JUMP JUMPDEST SWAP1 POP DUP3 DUP2 LT ISZERO PUSH2 0x67E JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x1105 JUMP JUMPDEST PUSH1 0x0 DUP1 DUP1 DUP5 PUSH1 0x1 DUP2 GT ISZERO PUSH2 0x6A2 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x21 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST EQ ISZERO PUSH2 0x6E2 JUMPI PUSH1 0x3 SLOAD PUSH2 0x6B5 SWAP1 DUP8 PUSH2 0xBE0 JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x6C5 SWAP1 DUP5 PUSH2 0xBD4 JUMP JUMPDEST PUSH1 0x4 SSTORE POP POP PUSH1 0x1 SLOAD PUSH1 0x2 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 DUP3 AND SWAP2 AND PUSH2 0x718 JUMP JUMPDEST PUSH1 0x3 SLOAD PUSH2 0x6EF SWAP1 DUP5 PUSH2 0xBD4 JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x6FF SWAP1 DUP8 PUSH2 0xBE0 JUMP JUMPDEST PUSH1 0x4 SSTORE POP POP PUSH1 0x2 SLOAD PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 DUP3 AND SWAP2 AND JUMPDEST PUSH1 0x40 MLOAD PUSH4 0xA9059CBB PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND SWAP1 PUSH4 0xA9059CBB SWAP1 PUSH2 0x746 SWAP1 CALLER SWAP1 DUP8 SWAP1 PUSH1 0x4 ADD PUSH2 0xE0A JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x760 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x774 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x798 SWAP2 SWAP1 PUSH2 0xD3E JUMP JUMPDEST PUSH2 0x7B2 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x1 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0x7E2 SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP12 SWAP1 PUSH1 0x4 ADD PUSH2 0xDE6 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x7FC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x810 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x834 SWAP2 SWAP1 PUSH2 0xD3E JUMP JUMPDEST PUSH2 0x850 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xFB5 JUMP JUMPDEST POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0x0 SWAP1 DUP2 SWAP1 PUSH1 0xFF AND PUSH2 0x885 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xF70 JUMP JUMPDEST PUSH2 0x8A3 PUSH1 0x5 SLOAD PUSH2 0x220 PUSH3 0xF4240 PUSH1 0x3 SLOAD PUSH2 0xBB5 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH2 0x8C1 PUSH1 0x5 SLOAD PUSH2 0x220 PUSH3 0xF4240 PUSH1 0x4 SLOAD PUSH2 0xBB5 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP2 POP SWAP2 POP SWAP1 SWAP2 JUMP JUMPDEST PUSH2 0x8D1 PUSH2 0xCC3 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x8E2 PUSH2 0x91A JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ PUSH2 0x908 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x1099 JUMP JUMPDEST PUSH2 0x912 PUSH1 0x0 PUSH2 0xCC7 JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x5 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 JUMP JUMPDEST PUSH1 0x4 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x6 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x93D PUSH2 0xCC3 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0x94E PUSH2 0x91A JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ PUSH2 0x974 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x1099 JUMP JUMPDEST PUSH1 0x7 SLOAD PUSH1 0xFF AND ISZERO PUSH2 0x997 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x115A JUMP JUMPDEST PUSH1 0x7 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE SLOAD PUSH1 0x2 SLOAD PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 DUP4 AND SWAP3 SWAP2 SWAP1 SWAP2 AND SWAP1 DUP3 SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0x9E3 SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP10 SWAP1 PUSH1 0x4 ADD PUSH2 0xDE6 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x9FD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0xA11 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0xA35 SWAP2 SWAP1 PUSH2 0xD3E JUMP JUMPDEST PUSH2 0xA51 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x119B JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0xA81 SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP9 SWAP1 PUSH1 0x4 ADD PUSH2 0xDE6 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0xA9B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0xAAF JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0xAD3 SWAP2 SWAP1 PUSH2 0xD3E JUMP JUMPDEST PUSH2 0xAEF JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xEF2 JUMP JUMPDEST PUSH1 0x3 SLOAD PUSH2 0xAFC SWAP1 DUP6 PUSH2 0xBE0 JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0xB0C SWAP1 DUP5 PUSH2 0xBE0 JUMP JUMPDEST PUSH1 0x4 SSTORE PUSH1 0x5 DUP4 SWAP1 SSTORE CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0xB2E SWAP1 DUP5 PUSH2 0xBE0 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x8 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SSTORE POP POP POP POP JUMP JUMPDEST PUSH2 0xB4C PUSH2 0xCC3 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH2 0xB5D PUSH2 0x91A JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND EQ PUSH2 0xB83 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0x1099 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH2 0xBA9 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1A5 SWAP1 PUSH2 0xE77 JUMP JUMPDEST PUSH2 0xBB2 DUP2 PUSH2 0xCC7 JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xBC1 DUP3 DUP5 PUSH2 0x1219 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xBC1 DUP3 DUP5 PUSH2 0x11F9 JUMP JUMPDEST PUSH1 0x0 PUSH2 0xBC1 DUP3 DUP5 PUSH2 0x1238 JUMP JUMPDEST PUSH1 0x0 PUSH2 0xBC1 DUP3 DUP5 PUSH2 0x11E1 JUMP JUMPDEST PUSH1 0x0 DUP1 DUP1 DUP4 PUSH1 0x1 DUP2 GT ISZERO PUSH2 0xC10 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x21 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST EQ PUSH2 0xC1D JUMPI PUSH1 0x3 SLOAD PUSH2 0xC21 JUMP JUMPDEST PUSH1 0x4 SLOAD JUMPDEST SWAP1 POP PUSH1 0x0 DUP1 DUP5 PUSH1 0x1 DUP2 GT ISZERO PUSH2 0xC46 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x21 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST EQ PUSH2 0xC53 JUMPI PUSH1 0x4 SLOAD PUSH2 0xC57 JUMP JUMPDEST PUSH1 0x3 SLOAD JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0xC72 PUSH1 0x3 SLOAD PUSH1 0x4 SLOAD PUSH2 0xBB5 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0xC94 PUSH2 0xC8D PUSH2 0xC86 DUP6 DUP11 PUSH2 0xBE0 JUMP JUMPDEST DUP5 SWAP1 PUSH2 0xBC8 JUMP JUMPDEST DUP6 SWAP1 PUSH2 0xBD4 JUMP JUMPDEST SWAP1 POP PUSH2 0xCB8 PUSH3 0xF4240 PUSH2 0x220 PUSH1 0x6 SLOAD PUSH3 0xF4240 PUSH2 0xCB1 SWAP2 SWAP1 PUSH2 0x1238 JUMP JUMPDEST DUP5 SWAP1 PUSH2 0xBB5 JUMP JUMPDEST SWAP8 SWAP7 POP POP POP POP POP POP POP JUMP JUMPDEST CALLER SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 DUP2 AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT DUP4 AND DUP2 OR DUP5 SSTORE PUSH1 0x40 MLOAD SWAP2 SWAP1 SWAP3 AND SWAP3 DUP4 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD28 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0xBC1 JUMPI DUP2 DUP3 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD4F JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0xBC1 JUMPI DUP2 DUP3 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD6F JUMPI DUP1 DUP2 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xD88 JUMPI DUP1 DUP2 REVERT JUMPDEST POP POP DUP1 CALLDATALOAD SWAP3 PUSH1 0x20 SWAP1 SWAP2 ADD CALLDATALOAD SWAP2 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0xDAB JUMPI DUP1 DUP2 REVERT JUMPDEST DUP4 CALLDATALOAD SWAP3 POP PUSH1 0x20 DUP5 ADD CALLDATALOAD SWAP2 POP PUSH1 0x40 DUP5 ADD CALLDATALOAD PUSH1 0x2 DUP2 LT PUSH2 0xDC7 JUMPI DUP2 DUP3 REVERT JUMPDEST DUP1 SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP4 DUP5 AND DUP2 MSTORE SWAP2 SWAP1 SWAP3 AND PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND DUP3 MSTORE PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x34 SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520616D6F756E7420746F2073656C6C2073686F756C6420626520737472 PUSH1 0x40 DUP3 ADD MSTORE PUSH20 0x34B1BA363C903134B3B3B2B9103A3430B7101817 PUSH1 0x61 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x26 SWAP1 DUP3 ADD MSTORE PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x40 DUP3 ADD MSTORE PUSH6 0x646472657373 PUSH1 0xD0 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 DUP2 ADD MSTORE PUSH32 0x596F7520646F6E2774206861766520656E6F756768206C7020746F6B656E732E PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x15 SWAP1 DUP3 ADD MSTORE PUSH21 0x2AA9A221903A3930B739B332B9103330B4B632B217 PUSH1 0x59 SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x2F SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520616D6F756E74206F6620737570706C696564206C7020746F6B656E73 PUSH1 0x40 DUP3 ADD MSTORE PUSH15 0x1039B437BAB632103132901F101817 PUSH1 0x89 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x25 SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520706F6F6C2073686F756C6420626520696E697469616C697A65642066 PUSH1 0x40 DUP3 ADD MSTORE PUSH5 0x34B939BA17 PUSH1 0xD9 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x38 SWAP1 DUP3 ADD MSTORE PUSH32 0x5472616E73666572206F662074686520616D6F756E74206F6620746F6B656E20 PUSH1 0x40 DUP3 ADD MSTORE PUSH32 0x796F752077616E7420746F2073656C6C206661696C65642E0000000000000000 PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x18 SWAP1 DUP3 ADD MSTORE PUSH32 0x5472616E73666572206F66204C696E6B206661696C65642E0000000000000000 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x30 SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520616D6F756E74206F6620726571756573746564206C7020746F6B656E PUSH1 0x40 DUP3 ADD MSTORE PUSH16 0x399039B437BAB632103132901F101817 PUSH1 0x81 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP2 DUP2 ADD MSTORE PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x18 SWAP1 DUP3 ADD MSTORE PUSH32 0x5472616E73666572206F662055534443206661696C65642E0000000000000000 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x35 SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520616D6F756E74206F662070757263686173656420746F6B656E206973 PUSH1 0x40 DUP3 ADD MSTORE PUSH21 0x103637BBB2B9103A3430B7103932B8BAB4B932B217 PUSH1 0x59 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x21 SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520706F6F6C2077617320616C726561647920696E697469616C697A6564 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x17 PUSH1 0xF9 SHL PUSH1 0x60 DUP3 ADD MSTORE PUSH1 0x80 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x15 SWAP1 DUP3 ADD MSTORE PUSH21 0x2634B735903A3930B739B332B9103330B4B632B217 PUSH1 0x59 SHL PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST SWAP2 DUP3 MSTORE PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0x11F4 JUMPI PUSH2 0x11F4 PUSH2 0x124F JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH2 0x1214 JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 DUP2 REVERT JUMPDEST POP DIV SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 NOT DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH2 0x1233 JUMPI PUSH2 0x1233 PUSH2 0x124F JUMP JUMPDEST POP MUL SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 LT ISZERO PUSH2 0x124A JUMPI PUSH2 0x124A PUSH2 0x124F JUMP JUMPDEST POP SUB SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xA8 SWAP1 PUSH16 0xAFBFBCE40DC69138C834FDD6611E9FE9 DELEGATECALL SDIV LOG1 PUSH20 0xEA65BC9FC8DA9C6064736F6C63430008000033 ", "pcMap": {"0": {"offset": [462, 6868], "op": "PUSH1", "path": "3", "value": "0x80"}, "2": {"fn": null, "offset": [462, 6868], "op": "PUSH1", "path": "3", "value": "0x40"}, "4": {"fn": null, "offset": [462, 6868], "op": "MSTORE", "path": "3"}, "5": {"fn": null, "offset": [462, 6868], "op": "CALLVALUE", "path": "3"}, "6": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "7": {"fn": null, "offset": [462, 6868], "op": "ISZERO", "path": "3"}, "8": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0x10"}, "11": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "12": {"fn": null, "offset": [462, 6868], "op": "PUSH1", "path": "3", "value": "0x0"}, "14": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "15": {"dev": "Cannot send ether to nonpayable function", "fn": null, "offset": [462, 6868], "op": "REVERT", "path": "3"}, "16": {"fn": null, "offset": [462, 6868], "op": "JUMPDEST", "path": "3"}, "17": {"fn": null, "offset": [462, 6868], "op": "POP", "path": "3"}, "18": {"fn": null, "offset": [462, 6868], "op": "PUSH1", "path": "3", "value": "0x4"}, "20": {"fn": null, "offset": [462, 6868], "op": "CALLDATASIZE", "path": "3"}, "21": {"fn": null, "offset": [462, 6868], "op": "LT", "path": "3"}, "22": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0xB4"}, "25": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "26": {"fn": null, "offset": [462, 6868], "op": "PUSH1", "path": "3", "value": "0x0"}, "28": {"fn": null, "offset": [462, 6868], "op": "CALLDATALOAD", "path": "3"}, "29": {"fn": null, "offset": [462, 6868], "op": "PUSH1", "path": "3", "value": "0xE0"}, "31": {"fn": null, "offset": [462, 6868], "op": "SHR", "path": "3"}, "32": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "33": {"fn": null, "offset": [462, 6868], "op": "PUSH4", "path": "3", "value": "0x868C844F"}, "38": {"fn": null, "offset": [462, 6868], "op": "GT", "path": "3"}, "39": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0x71"}, "42": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "43": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "44": {"fn": null, "offset": [462, 6868], "op": "PUSH4", "path": "3", "value": "0x868C844F"}, "49": {"fn": null, "offset": [462, 6868], "op": "EQ", "path": "3"}, "50": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0x130"}, "53": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "54": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "55": {"fn": null, "offset": [462, 6868], "op": "PUSH4", "path": "3", "value": "0x8DA5CB5B"}, "60": {"fn": null, "offset": [462, 6868], "op": "EQ", "path": "3"}, "61": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0x138"}, "64": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "65": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "66": {"fn": null, "offset": [462, 6868], "op": "PUSH4", "path": "3", "value": "0xB2E411C2"}, "71": {"fn": null, "offset": [462, 6868], "op": "EQ", "path": "3"}, "72": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0x14D"}, "75": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "76": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "77": {"fn": null, "offset": [462, 6868], "op": "PUSH4", "path": "3", "value": "0xC57981B5"}, "82": {"fn": null, "offset": [462, 6868], "op": "EQ", "path": "3"}, "83": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0x155"}, "86": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "87": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "88": {"fn": null, "offset": [462, 6868], "op": "PUSH4", "path": "3", "value": "0xCE49EA9A"}, "93": {"fn": null, "offset": [462, 6868], "op": "EQ", "path": "3"}, "94": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0x15D"}, "97": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "98": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "99": {"fn": null, "offset": [462, 6868], "op": "PUSH4", "path": "3", "value": "0xF2FDE38B"}, "104": {"fn": null, "offset": [462, 6868], "op": "EQ", "path": "3"}, "105": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0x170"}, "108": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "109": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0xB4"}, "112": {"fn": null, "offset": [462, 6868], "op": "JUMP", "path": "3"}, "113": {"fn": null, "offset": [462, 6868], "op": "JUMPDEST", "path": "3"}, "114": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "115": {"fn": null, "offset": [462, 6868], "op": "PUSH4", "path": "3", "value": "0x2E1A7D4D"}, "120": {"fn": null, "offset": [462, 6868], "op": "EQ", "path": "3"}, "121": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0xB9"}, "124": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "125": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "126": {"fn": null, "offset": [462, 6868], "op": "PUSH4", "path": "3", "value": "0x35403023"}, "131": {"fn": null, "offset": [462, 6868], "op": "EQ", "path": "3"}, "132": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0xCE"}, "135": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "136": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "137": {"fn": null, "offset": [462, 6868], "op": "PUSH4", "path": "3", "value": "0x5C36D25E"}, "142": {"fn": null, "offset": [462, 6868], "op": "EQ", "path": "3"}, "143": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0xE1"}, "146": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "147": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "148": {"fn": null, "offset": [462, 6868], "op": "PUSH4", "path": "3", "value": "0x618E552C"}, "153": {"fn": null, "offset": [462, 6868], "op": "EQ", "path": "3"}, "154": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0xF4"}, "157": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "158": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "159": {"fn": null, "offset": [462, 6868], "op": "PUSH4", "path": "3", "value": "0x6F5CDB6C"}, "164": {"fn": null, "offset": [462, 6868], "op": "EQ", "path": "3"}, "165": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0x112"}, "168": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "169": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "170": {"fn": null, "offset": [462, 6868], "op": "PUSH4", "path": "3", "value": "0x715018A6"}, "175": {"fn": null, "offset": [462, 6868], "op": "EQ", "path": "3"}, "176": {"fn": null, "offset": [462, 6868], "op": "PUSH2", "path": "3", "value": "0x128"}, "179": {"fn": null, "offset": [462, 6868], "op": "JUMPI", "path": "3"}, "180": {"fn": null, "offset": [462, 6868], "op": "JUMPDEST", "path": "3"}, "181": {"fn": null, "offset": [462, 6868], "op": "PUSH1", "path": "3", "value": "0x0"}, "183": {"fn": null, "offset": [462, 6868], "op": "DUP1", "path": "3"}, "184": {"first_revert": true, "fn": null, "offset": [462, 6868], "op": "REVERT", "path": "3"}, "185": {"fn": "SimpleSwap.withdraw", "offset": [4573, 5733], "op": "JUMPDEST", "path": "3"}, "186": {"fn": "SimpleSwap.withdraw", "offset": [4573, 5733], "op": "PUSH2", "path": "3", "value": "0xCC"}, "189": {"fn": "SimpleSwap.withdraw", "offset": [4573, 5733], "op": "PUSH2", "path": "3", "value": "0xC7"}, "192": {"fn": "SimpleSwap.withdraw", "offset": [4573, 5733], "op": "CALLDATASIZE", "path": "3"}, "193": {"fn": "SimpleSwap.withdraw", "offset": [4573, 5733], "op": "PUSH1", "path": "3", "value": "0x4"}, "195": {"fn": "SimpleSwap.withdraw", "offset": [4573, 5733], "op": "PUSH2", "path": "3", "value": "0xD5E"}, "198": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4573, 5733], "op": "JUMP", "path": "3"}, "199": {"fn": "SimpleSwap.withdraw", "offset": [4573, 5733], "op": "JUMPDEST", "path": "3"}, "200": {"fn": "SimpleSwap.withdraw", "offset": [4573, 5733], "op": "PUSH2", "path": "3", "value": "0x183"}, "203": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4573, 5733], "op": "JUMP", "path": "3"}, "204": {"fn": "SimpleSwap.withdraw", "offset": [4573, 5733], "op": "JUMPDEST", "path": "3"}, "205": {"fn": "SimpleSwap.withdraw", "offset": [4573, 5733], "op": "STOP", "path": "3"}, "206": {"fn": "SimpleSwap.supply", "offset": [3403, 4567], "op": "JUMPDEST", "path": "3"}, "207": {"fn": "SimpleSwap.supply", "offset": [3403, 4567], "op": "PUSH2", "path": "3", "value": "0xCC"}, "210": {"fn": "SimpleSwap.supply", "offset": [3403, 4567], "op": "PUSH2", "path": "3", "value": "0xDC"}, "213": {"fn": "SimpleSwap.supply", "offset": [3403, 4567], "op": "CALLDATASIZE", "path": "3"}, "214": {"fn": "SimpleSwap.supply", "offset": [3403, 4567], "op": "PUSH1", "path": "3", "value": "0x4"}, "216": {"fn": "SimpleSwap.supply", "offset": [3403, 4567], "op": "PUSH2", "path": "3", "value": "0xD5E"}, "219": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3403, 4567], "op": "JUMP", "path": "3"}, "220": {"fn": "SimpleSwap.supply", "offset": [3403, 4567], "op": "JUMPDEST", "path": "3"}, "221": {"fn": "SimpleSwap.supply", "offset": [3403, 4567], "op": "PUSH2", "path": "3", "value": "0x3E4"}, "224": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3403, 4567], "op": "JUMP", "path": "3"}, "225": {"fn": "SimpleSwap.swap", "offset": [2010, 3397], "op": "JUMPDEST", "path": "3"}, "226": {"fn": "SimpleSwap.swap", "offset": [2010, 3397], "op": "PUSH2", "path": "3", "value": "0xCC"}, "229": {"fn": "SimpleSwap.swap", "offset": [2010, 3397], "op": "PUSH2", "path": "3", "value": "0xEF"}, "232": {"fn": "SimpleSwap.swap", "offset": [2010, 3397], "op": "CALLDATASIZE", "path": "3"}, "233": {"fn": "SimpleSwap.swap", "offset": [2010, 3397], "op": "PUSH1", "path": "3", "value": "0x4"}, "235": {"fn": "SimpleSwap.swap", "offset": [2010, 3397], "op": "PUSH2", "path": "3", "value": "0xD97"}, "238": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2010, 3397], "op": "JUMP", "path": "3"}, "239": {"fn": "SimpleSwap.swap", "offset": [2010, 3397], "op": "JUMPDEST", "path": "3"}, "240": {"fn": "SimpleSwap.swap", "offset": [2010, 3397], "op": "PUSH2", "path": "3", "value": "0x60E"}, "243": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2010, 3397], "op": "JUMP", "path": "3"}, "244": {"offset": [862, 899], "op": "JUMPDEST", "path": "3"}, "245": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH2", "path": "3", "value": "0xFC"}, "248": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH2", "path": "3", "value": "0x858"}, "251": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [862, 899], "op": "JUMP", "path": "3"}, "252": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "JUMPDEST", "path": "3"}, "253": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH1", "path": "3", "value": "0x40"}, "255": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "MLOAD", "path": "3"}, "256": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH2", "path": "3", "value": "0x109"}, "259": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SWAP2", "path": "3"}, "260": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SWAP1", "path": "3"}, "261": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH2", "path": "3", "value": "0x11CA"}, "264": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [862, 899], "op": "JUMP", "path": "3"}, "265": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "JUMPDEST", "path": "3"}, "266": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH1", "path": "3", "value": "0x40"}, "268": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "MLOAD", "path": "3"}, "269": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "DUP1", "path": "3"}, "270": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SWAP2", "path": "3"}, "271": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SUB", "path": "3"}, "272": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SWAP1", "path": "3"}, "273": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "RETURN", "path": "3"}, "274": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "JUMPDEST", "path": "3"}, "275": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "PUSH2", "path": "3", "value": "0x11A"}, "278": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "PUSH2", "path": "3", "value": "0x85E"}, "281": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "i", "offset": [6509, 6731], "op": "JUMP", "path": "3"}, "282": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "JUMPDEST", "path": "3"}, "283": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "PUSH1", "path": "3", "value": "0x40"}, "285": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "MLOAD", "path": "3"}, "286": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "PUSH2", "path": "3", "value": "0x109"}, "289": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "SWAP3", "path": "3"}, "290": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "SWAP2", "path": "3"}, "291": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "SWAP1", "path": "3"}, "292": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "PUSH2", "path": "3", "value": "0x11D3"}, "295": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "i", "offset": [6509, 6731], "op": "JUMP", "path": "3"}, "296": {"fn": "Ownable.renounceOwnership", "offset": [1605, 1697], "op": "JUMPDEST", "path": "0"}, "297": {"fn": "Ownable.renounceOwnership", "offset": [1605, 1697], "op": "PUSH2", "path": "0", "value": "0xCC"}, "300": {"fn": "Ownable.renounceOwnership", "offset": [1605, 1697], "op": "PUSH2", "path": "0", "value": "0x8C9"}, "303": {"fn": "Ownable.renounceOwnership", "jump": "i", "offset": [1605, 1697], "op": "JUMP", "path": "0"}, "304": {"offset": [986, 1019], "op": "JUMPDEST", "path": "3"}, "305": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "PUSH2", "path": "3", "value": "0xFC"}, "308": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "PUSH2", "path": "3", "value": "0x914"}, "311": {"fn": "Ownable.renounceOwnership", "jump": "i", "offset": [986, 1019], "op": "JUMP", "path": "3"}, "312": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "JUMPDEST", "path": "0"}, "313": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH2", "path": "0", "value": "0x140"}, "316": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH2", "path": "0", "value": "0x91A"}, "319": {"fn": "Ownable.owner", "jump": "i", "offset": [973, 1058], "op": "JUMP", "path": "0"}, "320": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "JUMPDEST", "path": "0"}, "321": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH1", "path": "0", "value": "0x40"}, "323": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "MLOAD", "path": "0"}, "324": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH2", "path": "0", "value": "0x109"}, "327": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "SWAP2", "path": "0"}, "328": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "SWAP1", "path": "0"}, "329": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "PUSH2", "path": "0", "value": "0xDD2"}, "332": {"fn": "Ownable.owner", "jump": "i", "offset": [973, 1058], "op": "JUMP", "path": "0"}, "333": {"offset": [924, 961], "op": "JUMPDEST", "path": "3"}, "334": {"fn": "Ownable.owner", "offset": [924, 961], "op": "PUSH2", "path": "3", "value": "0xFC"}, "337": {"fn": "Ownable.owner", "offset": [924, 961], "op": "PUSH2", "path": "3", "value": "0x929"}, "340": {"fn": "Ownable.owner", "jump": "i", "offset": [924, 961], "op": "JUMP", "path": "3"}, "341": {"offset": [1049, 1081], "op": "JUMPDEST", "path": "3"}, "342": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "PUSH2", "path": "3", "value": "0xFC"}, "345": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "PUSH2", "path": "3", "value": "0x92F"}, "348": {"fn": "Ownable.owner", "jump": "i", "offset": [1049, 1081], "op": "JUMP", "path": "3"}, "349": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "JUMPDEST", "path": "3"}, "350": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "PUSH2", "path": "3", "value": "0xCC"}, "353": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "PUSH2", "path": "3", "value": "0x16B"}, "356": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "CALLDATASIZE", "path": "3"}, "357": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "PUSH1", "path": "3", "value": "0x4"}, "359": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "PUSH2", "path": "3", "value": "0xD76"}, "362": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1201, 2004], "op": "JUMP", "path": "3"}, "363": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "JUMPDEST", "path": "3"}, "364": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "PUSH2", "path": "3", "value": "0x935"}, "367": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1201, 2004], "op": "JUMP", "path": "3"}, "368": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "JUMPDEST", "path": "0"}, "369": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH2", "path": "0", "value": "0xCC"}, "372": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH2", "path": "0", "value": "0x17E"}, "375": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "CALLDATASIZE", "path": "0"}, "376": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH1", "path": "0", "value": "0x4"}, "378": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH2", "path": "0", "value": "0xD17"}, "381": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [1846, 2035], "op": "JUMP", "path": "0"}, "382": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "JUMPDEST", "path": "0"}, "383": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "PUSH2", "path": "0", "value": "0xB44"}, "386": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [1846, 2035], "op": "JUMP", "path": "0"}, "387": {"fn": "SimpleSwap.withdraw", "offset": [4573, 5733], "op": "JUMPDEST", "path": "3"}, "388": {"offset": [6789, 6806], "op": "PUSH1", "path": "3", "value": "0x7"}, "390": {"fn": "SimpleSwap.withdraw", "offset": [6789, 6806], "op": "SLOAD", "path": "3"}, "391": {"fn": "SimpleSwap.withdraw", "offset": [6789, 6806], "op": "PUSH1", "path": "3", "value": "0xFF"}, "393": {"fn": "SimpleSwap.withdraw", "offset": [6789, 6806], "op": "AND", "path": "3"}, "394": {"offset": [6781, 6848], "op": "PUSH2", "path": "3", "value": "0x1AE"}, "397": {"offset": [6781, 6848], "op": "JUMPI", "path": "3"}, "398": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "PUSH1", "path": "3", "value": "0x40"}, "400": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "MLOAD", "path": "3"}, "401": {"op": "PUSH3", "value": "0x461BCD"}, "405": {"op": "PUSH1", "value": "0xE5"}, "407": {"op": "SHL"}, "408": {"offset": [6781, 6848], "op": "DUP2", "path": "3"}, "409": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "MSTORE", "path": "3"}, "410": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "PUSH1", "path": "3", "value": "0x4"}, "412": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "ADD", "path": "3"}, "413": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "416": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "SWAP1", "path": "3"}, "417": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "PUSH2", "path": "3", "value": "0xF70"}, "420": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [6781, 6848], "op": "JUMP", "path": "3"}, "421": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "JUMPDEST", "path": "3"}, "422": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "PUSH1", "path": "3", "value": "0x40"}, "424": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "MLOAD", "path": "3"}, "425": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "DUP1", "path": "3"}, "426": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "SWAP2", "path": "3"}, "427": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "SUB", "path": "3"}, "428": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "SWAP1", "path": "3"}, "429": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "REVERT", "optimizer_revert": true, "path": "3"}, "430": {"fn": "SimpleSwap.withdraw", "offset": [6781, 6848], "op": "JUMPDEST", "path": "3"}, "431": {"fn": "SimpleSwap.withdraw", "offset": [4760, 4761], "op": "PUSH1", "path": "3", "statement": 0, "value": "0x0"}, "433": {"fn": "SimpleSwap.withdraw", "offset": [4743, 4757], "op": "DUP2", "path": "3"}, "434": {"branch": 48, "fn": "SimpleSwap.withdraw", "offset": [4743, 4761], "op": "GT", "path": "3"}, "435": {"fn": "SimpleSwap.withdraw", "offset": [4735, 4814], "op": "PUSH2", "path": "3", "value": "0x1CE"}, "438": {"branch": 48, "fn": "SimpleSwap.withdraw", "offset": [4735, 4814], "op": "JUMPI", "path": "3"}, "439": {"fn": "SimpleSwap.withdraw", "offset": [4735, 4814], "op": "PUSH1", "path": "3", "value": "0x40"}, "441": {"fn": "SimpleSwap.withdraw", "offset": [4735, 4814], "op": "MLOAD", "path": "3"}, "442": {"op": "PUSH3", "value": "0x461BCD"}, "446": {"op": "PUSH1", "value": "0xE5"}, "448": {"op": "SHL"}, "449": {"fn": "SimpleSwap.withdraw", "offset": [4735, 4814], "op": "DUP2", "path": "3"}, "450": {"fn": "SimpleSwap.withdraw", "offset": [4735, 4814], "op": "MSTORE", "path": "3"}, "451": {"fn": "SimpleSwap.withdraw", "offset": [4735, 4814], "op": "PUSH1", "path": "3", "value": "0x4"}, "453": {"fn": "SimpleSwap.withdraw", "offset": [4735, 4814], "op": "ADD", "path": "3"}, "454": {"fn": "SimpleSwap.withdraw", "offset": [4735, 4814], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "457": {"fn": "SimpleSwap.withdraw", "offset": [4735, 4814], "op": "SWAP1", "path": "3"}, "458": {"fn": "SimpleSwap.withdraw", "offset": [4735, 4814], "op": "PUSH2", "path": "3", "value": "0x1049"}, "461": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4735, 4814], "op": "JUMP", "path": "3"}, "462": {"fn": "SimpleSwap.withdraw", "offset": [4735, 4814], "op": "JUMPDEST", "path": "3"}, "463": {"fn": "SimpleSwap.withdraw", "offset": [4853, 4863], "op": "CALLER", "path": "3", "statement": 1}, "464": {"fn": "SimpleSwap.withdraw", "offset": [4832, 4864], "op": "PUSH1", "path": "3", "value": "0x0"}, "466": {"fn": "SimpleSwap.withdraw", "offset": [4832, 4864], "op": "SWAP1", "path": "3"}, "467": {"fn": "SimpleSwap.withdraw", "offset": [4832, 4864], "op": "DUP2", "path": "3"}, "468": {"fn": "SimpleSwap.withdraw", "offset": [4832, 4864], "op": "MSTORE", "path": "3"}, "469": {"fn": "SimpleSwap.withdraw", "offset": [4832, 4852], "op": "PUSH1", "path": "3", "value": "0x8"}, "471": {"fn": "SimpleSwap.withdraw", "offset": [4832, 4864], "op": "PUSH1", "path": "3", "value": "0x20"}, "473": {"fn": "SimpleSwap.withdraw", "offset": [4832, 4864], "op": "MSTORE", "path": "3"}, "474": {"fn": "SimpleSwap.withdraw", "offset": [4832, 4864], "op": "PUSH1", "path": "3", "value": "0x40"}, "476": {"fn": "SimpleSwap.withdraw", "offset": [4832, 4864], "op": "SWAP1", "path": "3"}, "477": {"fn": "SimpleSwap.withdraw", "offset": [4832, 4864], "op": "KECCAK256", "path": "3"}, "478": {"fn": "SimpleSwap.withdraw", "offset": [4832, 4864], "op": "SLOAD", "path": "3"}, "479": {"fn": "SimpleSwap.withdraw", "offset": [4832, 4882], "op": "DUP2", "path": "3"}, "480": {"op": "GT"}, "481": {"branch": 49, "fn": "SimpleSwap.withdraw", "offset": [4832, 4882], "op": "ISZERO", "path": "3"}, "482": {"fn": "SimpleSwap.withdraw", "offset": [4824, 4919], "op": "PUSH2", "path": "3", "value": "0x1FD"}, "485": {"branch": 49, "fn": "SimpleSwap.withdraw", "offset": [4824, 4919], "op": "JUMPI", "path": "3"}, "486": {"fn": "SimpleSwap.withdraw", "offset": [4824, 4919], "op": "PUSH1", "path": "3", "value": "0x40"}, "488": {"fn": "SimpleSwap.withdraw", "offset": [4824, 4919], "op": "MLOAD", "path": "3"}, "489": {"op": "PUSH3", "value": "0x461BCD"}, "493": {"op": "PUSH1", "value": "0xE5"}, "495": {"op": "SHL"}, "496": {"fn": "SimpleSwap.withdraw", "offset": [4824, 4919], "op": "DUP2", "path": "3"}, "497": {"fn": "SimpleSwap.withdraw", "offset": [4824, 4919], "op": "MSTORE", "path": "3"}, "498": {"fn": "SimpleSwap.withdraw", "offset": [4824, 4919], "op": "PUSH1", "path": "3", "value": "0x4"}, "500": {"fn": "SimpleSwap.withdraw", "offset": [4824, 4919], "op": "ADD", "path": "3"}, "501": {"fn": "SimpleSwap.withdraw", "offset": [4824, 4919], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "504": {"fn": "SimpleSwap.withdraw", "offset": [4824, 4919], "op": "SWAP1", "path": "3"}, "505": {"fn": "SimpleSwap.withdraw", "offset": [4824, 4919], "op": "PUSH2", "path": "3", "value": "0xEBD"}, "508": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4824, 4919], "op": "JUMP", "path": "3"}, "509": {"fn": "SimpleSwap.withdraw", "offset": [4824, 4919], "op": "JUMPDEST", "path": "3"}, "510": {"fn": "SimpleSwap.withdraw", "offset": [4930, 4958], "op": "PUSH1", "path": "3", "value": "0x0"}, "512": {"fn": "SimpleSwap.withdraw", "offset": [4960, 4988], "op": "DUP1", "path": "3"}, "513": {"fn": "SimpleSwap.withdraw", "offset": [4993, 5010], "op": "PUSH2", "path": "3", "value": "0x208"}, "516": {"fn": "SimpleSwap.withdraw", "offset": [4993, 5008], "op": "PUSH2", "path": "3", "value": "0x85E"}, "519": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [4993, 5010], "op": "JUMP", "path": "3"}, "520": {"fn": "SimpleSwap.withdraw", "offset": [4993, 5010], "op": "JUMPDEST", "path": "3"}, "521": {"fn": "SimpleSwap.withdraw", "offset": [4929, 5010], "op": "SWAP1", "path": "3"}, "522": {"fn": "SimpleSwap.withdraw", "offset": [4929, 5010], "op": "SWAP3", "path": "3"}, "523": {"op": "POP"}, "524": {"fn": "SimpleSwap.withdraw", "offset": [4929, 5010], "op": "SWAP1", "path": "3"}, "525": {"op": "POP"}, "526": {"fn": "SimpleSwap.withdraw", "offset": [5021, 5049], "op": "PUSH1", "path": "3", "value": "0x0"}, "528": {"fn": "SimpleSwap.withdraw", "offset": [5052, 5105], "op": "PUSH2", "path": "3", "value": "0x226"}, "531": {"fn": "SimpleSwap.withdraw", "offset": [5097, 5104], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "535": {"fn": "SimpleSwap.withdraw", "offset": [5052, 5092], "op": "PUSH2", "path": "3", "value": "0x220"}, "538": {"fn": "SimpleSwap.withdraw", "offset": [4929, 5010], "op": "DUP6", "path": "3"}, "539": {"fn": "SimpleSwap.withdraw", "offset": [5077, 5091], "op": "DUP8", "path": "3"}, "540": {"fn": "SimpleSwap.withdraw", "offset": [5052, 5076], "op": "PUSH2", "path": "3", "value": "0xBB5"}, "543": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5052, 5092], "op": "JUMP", "path": "3"}, "544": {"fn": "SimpleSwap.withdraw", "offset": [5052, 5092], "op": "JUMPDEST", "path": "3"}, "545": {"fn": "SimpleSwap.withdraw", "offset": [5052, 5096], "op": "SWAP1", "path": "3"}, "546": {"fn": "SimpleSwap.withdraw", "offset": [5052, 5096], "op": "PUSH2", "path": "3", "value": "0xBC8"}, "549": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5052, 5105], "op": "JUMP", "path": "3"}, "550": {"fn": "SimpleSwap.withdraw", "offset": [5052, 5105], "op": "JUMPDEST", "path": "3"}, "551": {"fn": "SimpleSwap.withdraw", "offset": [5021, 5105], "op": "SWAP1", "path": "3"}, "552": {"op": "POP"}, "553": {"fn": "SimpleSwap.withdraw", "offset": [5115, 5143], "op": "PUSH1", "path": "3", "value": "0x0"}, "555": {"fn": "SimpleSwap.withdraw", "offset": [5146, 5199], "op": "PUSH2", "path": "3", "value": "0x23B"}, "558": {"fn": "SimpleSwap.withdraw", "offset": [5191, 5198], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "562": {"fn": "SimpleSwap.withdraw", "offset": [5146, 5186], "op": "PUSH2", "path": "3", "value": "0x220"}, "565": {"fn": "SimpleSwap.withdraw", "offset": [5146, 5166], "op": "DUP6", "path": "3"}, "566": {"fn": "SimpleSwap.withdraw", "offset": [5171, 5185], "op": "DUP9", "path": "3"}, "567": {"fn": "SimpleSwap.withdraw", "offset": [5146, 5170], "op": "PUSH2", "path": "3", "value": "0xBB5"}, "570": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5146, 5186], "op": "JUMP", "path": "3"}, "571": {"fn": "SimpleSwap.withdraw", "offset": [5146, 5199], "op": "JUMPDEST", "path": "3"}, "572": {"fn": "SimpleSwap.withdraw", "offset": [5231, 5249], "op": "PUSH1", "path": "3", "statement": 2, "value": "0x3"}, "574": {"fn": "SimpleSwap.withdraw", "offset": [5231, 5249], "op": "SLOAD", "path": "3"}, "575": {"fn": "SimpleSwap.withdraw", "offset": [5115, 5199], "op": "SWAP1", "path": "3"}, "576": {"fn": "SimpleSwap.withdraw", "offset": [5115, 5199], "op": "SWAP2", "path": "3"}, "577": {"op": "POP"}, "578": {"fn": "SimpleSwap.withdraw", "offset": [5231, 5275], "op": "PUSH2", "path": "3", "value": "0x24B"}, "581": {"fn": "SimpleSwap.withdraw", "offset": [5231, 5275], "op": "SWAP1", "path": "3"}, "582": {"fn": "SimpleSwap.withdraw", "offset": [5254, 5274], "op": "DUP4", "path": "3"}, "583": {"fn": "SimpleSwap.withdraw", "offset": [5231, 5253], "op": "PUSH2", "path": "3", "value": "0xBD4"}, "586": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5231, 5275], "op": "JUMP", "path": "3"}, "587": {"fn": "SimpleSwap.withdraw", "offset": [5231, 5275], "op": "JUMPDEST", "path": "3"}, "588": {"fn": "SimpleSwap.withdraw", "offset": [5210, 5228], "op": "PUSH1", "path": "3", "value": "0x3"}, "590": {"fn": "SimpleSwap.withdraw", "offset": [5210, 5275], "op": "SSTORE", "path": "3"}, "591": {"fn": "SimpleSwap.withdraw", "offset": [5306, 5324], "op": "PUSH1", "path": "3", "statement": 3, "value": "0x4"}, "593": {"fn": "SimpleSwap.withdraw", "offset": [5306, 5324], "op": "SLOAD", "path": "3"}, "594": {"fn": "SimpleSwap.withdraw", "offset": [5306, 5350], "op": "PUSH2", "path": "3", "value": "0x25B"}, "597": {"fn": "SimpleSwap.withdraw", "offset": [5306, 5350], "op": "SWAP1", "path": "3"}, "598": {"fn": "SimpleSwap.withdraw", "offset": [5329, 5349], "op": "DUP3", "path": "3"}, "599": {"fn": "SimpleSwap.withdraw", "offset": [5306, 5328], "op": "PUSH2", "path": "3", "value": "0xBD4"}, "602": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5306, 5350], "op": "JUMP", "path": "3"}, "603": {"fn": "SimpleSwap.withdraw", "offset": [5306, 5350], "op": "JUMPDEST", "path": "3"}, "604": {"fn": "SimpleSwap.withdraw", "offset": [5285, 5303], "op": "PUSH1", "path": "3", "value": "0x4"}, "606": {"fn": "SimpleSwap.withdraw", "offset": [5285, 5350], "op": "SSTORE", "path": "3"}, "607": {"fn": "SimpleSwap.withdraw", "offset": [5377, 5390], "op": "PUSH1", "path": "3", "statement": 4, "value": "0x5"}, "609": {"fn": "SimpleSwap.withdraw", "offset": [5377, 5390], "op": "SLOAD", "path": "3"}, "610": {"fn": "SimpleSwap.withdraw", "offset": [5377, 5410], "op": "PUSH2", "path": "3", "value": "0x26B"}, "613": {"fn": "SimpleSwap.withdraw", "offset": [5377, 5410], "op": "SWAP1", "path": "3"}, "614": {"fn": "SimpleSwap.withdraw", "offset": [5395, 5409], "op": "DUP7", "path": "3"}, "615": {"fn": "SimpleSwap.withdraw", "offset": [5377, 5394], "op": "PUSH2", "path": "3", "value": "0xBD4"}, "618": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5377, 5410], "op": "JUMP", "path": "3"}, "619": {"fn": "SimpleSwap.withdraw", "offset": [5377, 5410], "op": "JUMPDEST", "path": "3"}, "620": {"fn": "SimpleSwap.withdraw", "offset": [5361, 5374], "op": "PUSH1", "path": "3", "value": "0x5"}, "622": {"fn": "SimpleSwap.withdraw", "offset": [5361, 5410], "op": "SSTORE", "path": "3"}, "623": {"fn": "SimpleSwap.withdraw", "offset": [5477, 5487], "op": "CALLER", "path": "3", "statement": 5}, "624": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5488], "op": "PUSH1", "path": "3", "value": "0x0"}, "626": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5488], "op": "SWAP1", "path": "3"}, "627": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5488], "op": "DUP2", "path": "3"}, "628": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5488], "op": "MSTORE", "path": "3"}, "629": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5476], "op": "PUSH1", "path": "3", "value": "0x8"}, "631": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5488], "op": "PUSH1", "path": "3", "value": "0x20"}, "633": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5488], "op": "MSTORE", "path": "3"}, "634": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5488], "op": "PUSH1", "path": "3", "value": "0x40"}, "636": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5488], "op": "SWAP1", "path": "3"}, "637": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5488], "op": "KECCAK256", "path": "3"}, "638": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5488], "op": "SLOAD", "path": "3"}, "639": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5508], "op": "PUSH2", "path": "3", "value": "0x288"}, "642": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5508], "op": "SWAP1", "path": "3"}, "643": {"fn": "SimpleSwap.withdraw", "offset": [5493, 5507], "op": "DUP7", "path": "3"}, "644": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5492], "op": "PUSH2", "path": "3", "value": "0xBD4"}, "647": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5456, 5508], "op": "JUMP", "path": "3"}, "648": {"fn": "SimpleSwap.withdraw", "offset": [5456, 5508], "op": "JUMPDEST", "path": "3"}, "649": {"fn": "SimpleSwap.withdraw", "offset": [5442, 5452], "op": "CALLER", "path": "3"}, "650": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5453], "op": "PUSH1", "path": "3", "value": "0x0"}, "652": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5453], "op": "DUP2", "path": "3"}, "653": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5453], "op": "DUP2", "path": "3"}, "654": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5453], "op": "MSTORE", "path": "3"}, "655": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5441], "op": "PUSH1", "path": "3", "value": "0x8"}, "657": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5453], "op": "PUSH1", "path": "3", "value": "0x20"}, "659": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5453], "op": "MSTORE", "path": "3"}, "660": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5453], "op": "PUSH1", "path": "3", "value": "0x40"}, "662": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5453], "op": "SWAP1", "path": "3"}, "663": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5453], "op": "DUP2", "path": "3"}, "664": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5453], "op": "SWAP1", "path": "3"}, "665": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5453], "op": "KECCAK256", "path": "3"}, "666": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5508], "op": "SWAP3", "path": "3"}, "667": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5508], "op": "SWAP1", "path": "3"}, "668": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5508], "op": "SWAP3", "path": "3"}, "669": {"fn": "SimpleSwap.withdraw", "offset": [5421, 5508], "op": "SSTORE", "path": "3"}, "670": {"fn": "SimpleSwap.withdraw", "offset": [5540, 5551], "op": "PUSH1", "path": "3", "value": "0x1"}, "672": {"fn": "SimpleSwap.withdraw", "offset": [5540, 5551], "op": "SLOAD", "path": "3"}, "673": {"fn": "SimpleSwap.withdraw", "offset": [5583, 5594], "op": "PUSH1", "path": "3", "value": "0x2"}, "675": {"fn": "SimpleSwap.withdraw", "offset": [5583, 5594], "op": "SLOAD", "path": "3"}, "676": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "SWAP3", "path": "3", "statement": 6}, "677": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "MLOAD", "path": "3"}, "678": {"op": "PUSH4", "value": "0xA9059CBB"}, "683": {"op": "PUSH1", "value": "0xE0"}, "685": {"op": "SHL"}, "686": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP2", "path": "3"}, "687": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "MSTORE", "path": "3"}, "688": {"op": "PUSH1", "value": "0x1"}, "690": {"op": "PUSH1", "value": "0x1"}, "692": {"op": "PUSH1", "value": "0xA0"}, "694": {"op": "SHL"}, "695": {"op": "SUB"}, "696": {"fn": "SimpleSwap.withdraw", "offset": [5540, 5551], "op": "SWAP2", "path": "3"}, "697": {"fn": "SimpleSwap.withdraw", "offset": [5540, 5551], "op": "DUP3", "path": "3"}, "698": {"fn": "SimpleSwap.withdraw", "offset": [5540, 5551], "op": "AND", "path": "3"}, "699": {"fn": "SimpleSwap.withdraw", "offset": [5540, 5551], "op": "SWAP4", "path": "3"}, "700": {"fn": "SimpleSwap.withdraw", "offset": [5583, 5594], "op": "SWAP1", "path": "3"}, "701": {"fn": "SimpleSwap.withdraw", "offset": [5583, 5594], "op": "SWAP2", "path": "3"}, "702": {"fn": "SimpleSwap.withdraw", "offset": [5583, 5594], "op": "AND", "path": "3"}, "703": {"fn": "SimpleSwap.withdraw", "offset": [5583, 5594], "op": "SWAP2", "path": "3"}, "704": {"fn": "SimpleSwap.withdraw", "offset": [5540, 5551], "op": "DUP4", "path": "3"}, "705": {"fn": "SimpleSwap.withdraw", "offset": [5540, 5551], "op": "SWAP2", "path": "3"}, "706": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5626], "op": "PUSH4", "path": "3", "value": "0xA9059CBB"}, "711": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5626], "op": "SWAP2", "path": "3"}, "712": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH2", "path": "3", "value": "0x2D5"}, "715": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "SWAP2", "path": "3"}, "716": {"fn": "SimpleSwap.withdraw", "offset": [5639, 5659], "op": "DUP9", "path": "3"}, "717": {"fn": "SimpleSwap.withdraw", "offset": [5639, 5659], "op": "SWAP1", "path": "3"}, "718": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH1", "path": "3", "value": "0x4"}, "720": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "ADD", "path": "3"}, "721": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH2", "path": "3", "value": "0xE0A"}, "724": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5613, 5660], "op": "JUMP", "path": "3"}, "725": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "JUMPDEST", "path": "3"}, "726": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH1", "path": "3", "value": "0x20"}, "728": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH1", "path": "3", "value": "0x40"}, "730": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "MLOAD", "path": "3"}, "731": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP1", "path": "3"}, "732": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP4", "path": "3"}, "733": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "SUB", "path": "3"}, "734": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP2", "path": "3"}, "735": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH1", "path": "3", "value": "0x0"}, "737": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP8", "path": "3"}, "738": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP1", "path": "3"}, "739": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "EXTCODESIZE", "path": "3"}, "740": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "ISZERO", "path": "3"}, "741": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP1", "path": "3"}, "742": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "ISZERO", "path": "3"}, "743": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH2", "path": "3", "value": "0x2EF"}, "746": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "JUMPI", "path": "3"}, "747": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH1", "path": "3", "value": "0x0"}, "749": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP1", "path": "3"}, "750": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "REVERT", "path": "3"}, "751": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "JUMPDEST", "path": "3"}, "752": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "POP", "path": "3"}, "753": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "GAS", "path": "3"}, "754": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "CALL", "path": "3"}, "755": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "ISZERO", "path": "3"}, "756": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP1", "path": "3"}, "757": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "ISZERO", "path": "3"}, "758": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH2", "path": "3", "value": "0x303"}, "761": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "JUMPI", "path": "3"}, "762": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "RETURNDATASIZE", "path": "3"}, "763": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH1", "path": "3", "value": "0x0"}, "765": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP1", "path": "3"}, "766": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "RETURNDATACOPY", "path": "3"}, "767": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "RETURNDATASIZE", "path": "3"}, "768": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH1", "path": "3", "value": "0x0"}, "770": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "REVERT", "path": "3"}, "771": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "JUMPDEST", "path": "3"}, "772": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "POP", "path": "3"}, "773": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "POP", "path": "3"}, "774": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "POP", "path": "3"}, "775": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "POP", "path": "3"}, "776": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH1", "path": "3", "value": "0x40"}, "778": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "MLOAD", "path": "3"}, "779": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "RETURNDATASIZE", "path": "3"}, "780": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH1", "path": "3", "value": "0x1F"}, "782": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "NOT", "path": "3"}, "783": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH1", "path": "3", "value": "0x1F"}, "785": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP3", "path": "3"}, "786": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "ADD", "path": "3"}, "787": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "AND", "path": "3"}, "788": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP3", "path": "3"}, "789": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "ADD", "path": "3"}, "790": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP1", "path": "3"}, "791": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH1", "path": "3", "value": "0x40"}, "793": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "MSTORE", "path": "3"}, "794": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "POP", "path": "3"}, "795": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "DUP2", "path": "3"}, "796": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "ADD", "path": "3"}, "797": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "SWAP1", "path": "3"}, "798": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH2", "path": "3", "value": "0x327"}, "801": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "SWAP2", "path": "3"}, "802": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "SWAP1", "path": "3"}, "803": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "PUSH2", "path": "3", "value": "0xD3E"}, "806": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5613, 5660], "op": "JUMP", "path": "3"}, "807": {"fn": "SimpleSwap.withdraw", "offset": [5613, 5660], "op": "JUMPDEST", "path": "3"}, "808": {"fn": "SimpleSwap.withdraw", "offset": [5606, 5661], "op": "PUSH2", "path": "3", "value": "0x341"}, "811": {"fn": "SimpleSwap.withdraw", "offset": [5606, 5661], "op": "JUMPI", "path": "3"}, "812": {"op": "PUSH4", "value": "0x4E487B71"}, "817": {"op": "PUSH1", "value": "0xE0"}, "819": {"op": "SHL"}, "820": {"fn": "SimpleSwap.withdraw", "offset": [5606, 5661], "op": "PUSH1", "path": "3", "value": "0x0"}, "822": {"fn": "SimpleSwap.withdraw", "offset": [5606, 5661], "op": "MSTORE", "path": "3"}, "823": {"fn": "SimpleSwap.withdraw", "offset": [5606, 5661], "op": "PUSH1", "path": "3", "value": "0x1"}, "825": {"fn": "SimpleSwap.withdraw", "offset": [5606, 5661], "op": "PUSH1", "path": "3", "value": "0x4"}, "827": {"fn": "SimpleSwap.withdraw", "offset": [5606, 5661], "op": "MSTORE", "path": "3"}, "828": {"fn": "SimpleSwap.withdraw", "offset": [5606, 5661], "op": "PUSH1", "path": "3", "value": "0x24"}, "830": {"fn": "SimpleSwap.withdraw", "offset": [5606, 5661], "op": "PUSH1", "path": "3", "value": "0x0"}, "832": {"fn": "SimpleSwap.withdraw", "offset": [5606, 5661], "op": "REVERT", "path": "3"}, "833": {"fn": "SimpleSwap.withdraw", "offset": [5606, 5661], "op": "JUMPDEST", "path": "3"}, "834": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH1", "path": "3", "statement": 7, "value": "0x40"}, "836": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "MLOAD", "path": "3"}, "837": {"op": "PUSH4", "value": "0xA9059CBB"}, "842": {"op": "PUSH1", "value": "0xE0"}, "844": {"op": "SHL"}, "845": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP2", "path": "3"}, "846": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "MSTORE", "path": "3"}, "847": {"op": "PUSH1", "value": "0x1"}, "849": {"op": "PUSH1", "value": "0x1"}, "851": {"op": "PUSH1", "value": "0xA0"}, "853": {"op": "SHL"}, "854": {"op": "SUB"}, "855": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5691], "op": "DUP3", "path": "3"}, "856": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5691], "op": "AND", "path": "3"}, "857": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5691], "op": "SWAP1", "path": "3"}, "858": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5691], "op": "PUSH4", "path": "3", "value": "0xA9059CBB"}, "863": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5691], "op": "SWAP1", "path": "3"}, "864": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH2", "path": "3", "value": "0x36F"}, "867": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "SWAP1", "path": "3"}, "868": {"fn": "SimpleSwap.withdraw", "offset": [5692, 5702], "op": "CALLER", "path": "3"}, "869": {"fn": "SimpleSwap.withdraw", "offset": [5692, 5702], "op": "SWAP1", "path": "3"}, "870": {"fn": "SimpleSwap.withdraw", "offset": [5704, 5724], "op": "DUP8", "path": "3"}, "871": {"fn": "SimpleSwap.withdraw", "offset": [5704, 5724], "op": "SWAP1", "path": "3"}, "872": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH1", "path": "3", "value": "0x4"}, "874": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "ADD", "path": "3"}, "875": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH2", "path": "3", "value": "0xE0A"}, "878": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5678, 5725], "op": "JUMP", "path": "3"}, "879": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "JUMPDEST", "path": "3"}, "880": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH1", "path": "3", "value": "0x20"}, "882": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH1", "path": "3", "value": "0x40"}, "884": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "MLOAD", "path": "3"}, "885": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP1", "path": "3"}, "886": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP4", "path": "3"}, "887": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "SUB", "path": "3"}, "888": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP2", "path": "3"}, "889": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH1", "path": "3", "value": "0x0"}, "891": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP8", "path": "3"}, "892": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP1", "path": "3"}, "893": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "EXTCODESIZE", "path": "3"}, "894": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "ISZERO", "path": "3"}, "895": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP1", "path": "3"}, "896": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "ISZERO", "path": "3"}, "897": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH2", "path": "3", "value": "0x389"}, "900": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "JUMPI", "path": "3"}, "901": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH1", "path": "3", "value": "0x0"}, "903": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP1", "path": "3"}, "904": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "REVERT", "path": "3"}, "905": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "JUMPDEST", "path": "3"}, "906": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "POP", "path": "3"}, "907": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "GAS", "path": "3"}, "908": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "CALL", "path": "3"}, "909": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "ISZERO", "path": "3"}, "910": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP1", "path": "3"}, "911": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "ISZERO", "path": "3"}, "912": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH2", "path": "3", "value": "0x39D"}, "915": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "JUMPI", "path": "3"}, "916": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "RETURNDATASIZE", "path": "3"}, "917": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH1", "path": "3", "value": "0x0"}, "919": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP1", "path": "3"}, "920": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "RETURNDATACOPY", "path": "3"}, "921": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "RETURNDATASIZE", "path": "3"}, "922": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH1", "path": "3", "value": "0x0"}, "924": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "REVERT", "path": "3"}, "925": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "JUMPDEST", "path": "3"}, "926": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "POP", "path": "3"}, "927": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "POP", "path": "3"}, "928": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "POP", "path": "3"}, "929": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "POP", "path": "3"}, "930": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH1", "path": "3", "value": "0x40"}, "932": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "MLOAD", "path": "3"}, "933": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "RETURNDATASIZE", "path": "3"}, "934": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH1", "path": "3", "value": "0x1F"}, "936": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "NOT", "path": "3"}, "937": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH1", "path": "3", "value": "0x1F"}, "939": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP3", "path": "3"}, "940": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "ADD", "path": "3"}, "941": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "AND", "path": "3"}, "942": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP3", "path": "3"}, "943": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "ADD", "path": "3"}, "944": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP1", "path": "3"}, "945": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH1", "path": "3", "value": "0x40"}, "947": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "MSTORE", "path": "3"}, "948": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "POP", "path": "3"}, "949": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "DUP2", "path": "3"}, "950": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "ADD", "path": "3"}, "951": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "SWAP1", "path": "3"}, "952": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH2", "path": "3", "value": "0x3C1"}, "955": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "SWAP2", "path": "3"}, "956": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "SWAP1", "path": "3"}, "957": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "PUSH2", "path": "3", "value": "0xD3E"}, "960": {"fn": "SimpleSwap.withdraw", "jump": "i", "offset": [5678, 5725], "op": "JUMP", "path": "3"}, "961": {"fn": "SimpleSwap.withdraw", "offset": [5678, 5725], "op": "JUMPDEST", "path": "3"}, "962": {"fn": "SimpleSwap.withdraw", "offset": [5671, 5726], "op": "PUSH2", "path": "3", "value": "0x3DB"}, "965": {"fn": "SimpleSwap.withdraw", "offset": [5671, 5726], "op": "JUMPI", "path": "3"}, "966": {"op": "PUSH4", "value": "0x4E487B71"}, "971": {"op": "PUSH1", "value": "0xE0"}, "973": {"op": "SHL"}, "974": {"fn": "SimpleSwap.withdraw", "offset": [5671, 5726], "op": "PUSH1", "path": "3", "value": "0x0"}, "976": {"fn": "SimpleSwap.withdraw", "offset": [5671, 5726], "op": "MSTORE", "path": "3"}, "977": {"fn": "SimpleSwap.withdraw", "offset": [5671, 5726], "op": "PUSH1", "path": "3", "value": "0x1"}, "979": {"fn": "SimpleSwap.withdraw", "offset": [5671, 5726], "op": "PUSH1", "path": "3", "value": "0x4"}, "981": {"fn": "SimpleSwap.withdraw", "offset": [5671, 5726], "op": "MSTORE", "path": "3"}, "982": {"fn": "SimpleSwap.withdraw", "offset": [5671, 5726], "op": "PUSH1", "path": "3", "value": "0x24"}, "984": {"fn": "SimpleSwap.withdraw", "offset": [5671, 5726], "op": "PUSH1", "path": "3", "value": "0x0"}, "986": {"fn": "SimpleSwap.withdraw", "offset": [5671, 5726], "op": "REVERT", "path": "3"}, "987": {"fn": "SimpleSwap.withdraw", "offset": [5671, 5726], "op": "JUMPDEST", "path": "3"}, "988": {"offset": [6858, 6859], "op": "POP", "path": "3"}, "989": {"fn": "SimpleSwap.withdraw", "offset": [6858, 6859], "op": "POP", "path": "3"}, "990": {"fn": "SimpleSwap.withdraw", "offset": [6858, 6859], "op": "POP", "path": "3"}, "991": {"fn": "SimpleSwap.withdraw", "offset": [6858, 6859], "op": "POP", "path": "3"}, "992": {"fn": "SimpleSwap.withdraw", "offset": [6858, 6859], "op": "POP", "path": "3"}, "993": {"fn": "SimpleSwap.withdraw", "offset": [6858, 6859], "op": "POP", "path": "3"}, "994": {"fn": "SimpleSwap.withdraw", "offset": [4573, 5733], "op": "POP", "path": "3"}, "995": {"fn": "SimpleSwap.withdraw", "jump": "o", "offset": [4573, 5733], "op": "JUMP", "path": "3"}, "996": {"fn": "SimpleSwap.supply", "offset": [3403, 4567], "op": "JUMPDEST", "path": "3"}, "997": {"offset": [6789, 6806], "op": "PUSH1", "path": "3", "value": "0x7"}, "999": {"fn": "SimpleSwap.supply", "offset": [6789, 6806], "op": "SLOAD", "path": "3"}, "1000": {"fn": "SimpleSwap.supply", "offset": [6789, 6806], "op": "PUSH1", "path": "3", "value": "0xFF"}, "1002": {"fn": "SimpleSwap.supply", "offset": [6789, 6806], "op": "AND", "path": "3"}, "1003": {"offset": [6781, 6848], "op": "PUSH2", "path": "3", "value": "0x406"}, "1006": {"offset": [6781, 6848], "op": "JUMPI", "path": "3"}, "1007": {"fn": "SimpleSwap.supply", "offset": [6781, 6848], "op": "PUSH1", "path": "3", "value": "0x40"}, "1009": {"fn": "SimpleSwap.supply", "offset": [6781, 6848], "op": "MLOAD", "path": "3"}, "1010": {"op": "PUSH3", "value": "0x461BCD"}, "1014": {"op": "PUSH1", "value": "0xE5"}, "1016": {"op": "SHL"}, "1017": {"offset": [6781, 6848], "op": "DUP2", "path": "3"}, "1018": {"fn": "SimpleSwap.supply", "offset": [6781, 6848], "op": "MSTORE", "path": "3"}, "1019": {"fn": "SimpleSwap.supply", "offset": [6781, 6848], "op": "PUSH1", "path": "3", "value": "0x4"}, "1021": {"fn": "SimpleSwap.supply", "offset": [6781, 6848], "op": "ADD", "path": "3"}, "1022": {"fn": "SimpleSwap.supply", "offset": [6781, 6848], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1025": {"fn": "SimpleSwap.supply", "offset": [6781, 6848], "op": "SWAP1", "path": "3"}, "1026": {"fn": "SimpleSwap.supply", "offset": [6781, 6848], "op": "PUSH2", "path": "3", "value": "0xF70"}, "1029": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [6781, 6848], "op": "JUMP", "path": "3"}, "1030": {"fn": "SimpleSwap.supply", "offset": [6781, 6848], "op": "JUMPDEST", "path": "3"}, "1031": {"fn": "SimpleSwap.supply", "offset": [3588, 3589], "op": "PUSH1", "path": "3", "statement": 8, "value": "0x0"}, "1033": {"fn": "SimpleSwap.supply", "offset": [3571, 3585], "op": "DUP2", "path": "3"}, "1034": {"branch": 50, "fn": "SimpleSwap.supply", "offset": [3571, 3589], "op": "GT", "path": "3"}, "1035": {"fn": "SimpleSwap.supply", "offset": [3563, 3641], "op": "PUSH2", "path": "3", "value": "0x426"}, "1038": {"branch": 50, "fn": "SimpleSwap.supply", "offset": [3563, 3641], "op": "JUMPI", "path": "3"}, "1039": {"fn": "SimpleSwap.supply", "offset": [3563, 3641], "op": "PUSH1", "path": "3", "value": "0x40"}, "1041": {"fn": "SimpleSwap.supply", "offset": [3563, 3641], "op": "MLOAD", "path": "3"}, "1042": {"op": "PUSH3", "value": "0x461BCD"}, "1046": {"op": "PUSH1", "value": "0xE5"}, "1048": {"op": "SHL"}, "1049": {"fn": "SimpleSwap.supply", "offset": [3563, 3641], "op": "DUP2", "path": "3"}, "1050": {"fn": "SimpleSwap.supply", "offset": [3563, 3641], "op": "MSTORE", "path": "3"}, "1051": {"fn": "SimpleSwap.supply", "offset": [3563, 3641], "op": "PUSH1", "path": "3", "value": "0x4"}, "1053": {"fn": "SimpleSwap.supply", "offset": [3563, 3641], "op": "ADD", "path": "3"}, "1054": {"fn": "SimpleSwap.supply", "offset": [3563, 3641], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1057": {"fn": "SimpleSwap.supply", "offset": [3563, 3641], "op": "SWAP1", "path": "3"}, "1058": {"fn": "SimpleSwap.supply", "offset": [3563, 3641], "op": "PUSH2", "path": "3", "value": "0xF21"}, "1061": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3563, 3641], "op": "JUMP", "path": "3"}, "1062": {"fn": "SimpleSwap.supply", "offset": [3563, 3641], "op": "JUMPDEST", "path": "3"}, "1063": {"fn": "SimpleSwap.supply", "offset": [3652, 3680], "op": "PUSH1", "path": "3", "value": "0x0"}, "1065": {"fn": "SimpleSwap.supply", "offset": [3682, 3710], "op": "DUP1", "path": "3"}, "1066": {"fn": "SimpleSwap.supply", "offset": [3714, 3731], "op": "PUSH2", "path": "3", "value": "0x431"}, "1069": {"fn": "SimpleSwap.supply", "offset": [3714, 3729], "op": "PUSH2", "path": "3", "value": "0x85E"}, "1072": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3714, 3731], "op": "JUMP", "path": "3"}, "1073": {"fn": "SimpleSwap.supply", "offset": [3714, 3731], "op": "JUMPDEST", "path": "3"}, "1074": {"fn": "SimpleSwap.supply", "offset": [3763, 3774], "op": "PUSH1", "path": "3", "value": "0x1"}, "1076": {"fn": "SimpleSwap.supply", "offset": [3763, 3774], "op": "SLOAD", "path": "3"}, "1077": {"fn": "SimpleSwap.supply", "offset": [3806, 3817], "op": "PUSH1", "path": "3", "value": "0x2"}, "1079": {"fn": "SimpleSwap.supply", "offset": [3806, 3817], "op": "SLOAD", "path": "3"}, "1080": {"fn": "SimpleSwap.supply", "offset": [3651, 3731], "op": "SWAP3", "path": "3"}, "1081": {"fn": "SimpleSwap.supply", "offset": [3651, 3731], "op": "SWAP5", "path": "3"}, "1082": {"op": "POP"}, "1083": {"fn": "SimpleSwap.supply", "offset": [3651, 3731], "op": "SWAP1", "path": "3"}, "1084": {"fn": "SimpleSwap.supply", "offset": [3651, 3731], "op": "SWAP3", "path": "3"}, "1085": {"op": "POP"}, "1086": {"op": "PUSH1", "value": "0x1"}, "1088": {"op": "PUSH1", "value": "0x1"}, "1090": {"op": "PUSH1", "value": "0xA0"}, "1092": {"op": "SHL"}, "1093": {"op": "SUB"}, "1094": {"fn": "SimpleSwap.supply", "offset": [3763, 3774], "op": "SWAP1", "path": "3"}, "1095": {"fn": "SimpleSwap.supply", "offset": [3763, 3774], "op": "DUP2", "path": "3"}, "1096": {"fn": "SimpleSwap.supply", "offset": [3763, 3774], "op": "AND", "path": "3"}, "1097": {"fn": "SimpleSwap.supply", "offset": [3763, 3774], "op": "SWAP2", "path": "3"}, "1098": {"fn": "SimpleSwap.supply", "offset": [3806, 3817], "op": "AND", "path": "3"}, "1099": {"fn": "SimpleSwap.supply", "offset": [3742, 3753], "op": "PUSH1", "path": "3", "value": "0x0"}, "1101": {"fn": "SimpleSwap.supply", "offset": [3858, 3911], "op": "PUSH2", "path": "3", "value": "0x45D"}, "1104": {"fn": "SimpleSwap.supply", "offset": [3903, 3910], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "1108": {"fn": "SimpleSwap.supply", "offset": [3858, 3898], "op": "PUSH2", "path": "3", "value": "0x220"}, "1111": {"fn": "SimpleSwap.supply", "offset": [3651, 3731], "op": "DUP8", "path": "3"}, "1112": {"fn": "SimpleSwap.supply", "offset": [3883, 3897], "op": "DUP10", "path": "3"}, "1113": {"fn": "SimpleSwap.supply", "offset": [3858, 3882], "op": "PUSH2", "path": "3", "value": "0xBB5"}, "1116": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3858, 3898], "op": "JUMP", "path": "3"}, "1117": {"fn": "SimpleSwap.supply", "offset": [3858, 3911], "op": "JUMPDEST", "path": "3"}, "1118": {"fn": "SimpleSwap.supply", "offset": [3829, 3911], "op": "SWAP1", "path": "3"}, "1119": {"op": "POP"}, "1120": {"fn": "SimpleSwap.supply", "offset": [3936, 3962], "op": "PUSH1", "path": "3", "value": "0x0"}, "1122": {"fn": "SimpleSwap.supply", "offset": [3965, 4018], "op": "PUSH2", "path": "3", "value": "0x472"}, "1125": {"fn": "SimpleSwap.supply", "offset": [4010, 4017], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "1129": {"fn": "SimpleSwap.supply", "offset": [3965, 4005], "op": "PUSH2", "path": "3", "value": "0x220"}, "1132": {"fn": "SimpleSwap.supply", "offset": [3965, 3985], "op": "DUP8", "path": "3"}, "1133": {"fn": "SimpleSwap.supply", "offset": [3990, 4004], "op": "DUP11", "path": "3"}, "1134": {"fn": "SimpleSwap.supply", "offset": [3965, 3989], "op": "PUSH2", "path": "3", "value": "0xBB5"}, "1137": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [3965, 4005], "op": "JUMP", "path": "3"}, "1138": {"fn": "SimpleSwap.supply", "offset": [3965, 4018], "op": "JUMPDEST", "path": "3"}, "1139": {"fn": "SimpleSwap.supply", "offset": [4064, 4082], "op": "PUSH1", "path": "3", "statement": 9, "value": "0x3"}, "1141": {"fn": "SimpleSwap.supply", "offset": [4064, 4082], "op": "SLOAD", "path": "3"}, "1142": {"fn": "SimpleSwap.supply", "offset": [3936, 4018], "op": "SWAP1", "path": "3"}, "1143": {"fn": "SimpleSwap.supply", "offset": [3936, 4018], "op": "SWAP2", "path": "3"}, "1144": {"op": "POP"}, "1145": {"fn": "SimpleSwap.supply", "offset": [4064, 4106], "op": "PUSH2", "path": "3", "value": "0x482"}, "1148": {"fn": "SimpleSwap.supply", "offset": [4064, 4106], "op": "SWAP1", "path": "3"}, "1149": {"fn": "SimpleSwap.supply", "offset": [4087, 4105], "op": "DUP4", "path": "3"}, "1150": {"fn": "SimpleSwap.supply", "offset": [4064, 4086], "op": "PUSH2", "path": "3", "value": "0xBE0"}, "1153": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4064, 4106], "op": "JUMP", "path": "3"}, "1154": {"fn": "SimpleSwap.supply", "offset": [4064, 4106], "op": "JUMPDEST", "path": "3"}, "1155": {"fn": "SimpleSwap.supply", "offset": [4043, 4061], "op": "PUSH1", "path": "3", "value": "0x3"}, "1157": {"fn": "SimpleSwap.supply", "offset": [4043, 4106], "op": "SSTORE", "path": "3"}, "1158": {"fn": "SimpleSwap.supply", "offset": [4137, 4155], "op": "PUSH1", "path": "3", "statement": 10, "value": "0x4"}, "1160": {"fn": "SimpleSwap.supply", "offset": [4137, 4155], "op": "SLOAD", "path": "3"}, "1161": {"fn": "SimpleSwap.supply", "offset": [4137, 4179], "op": "PUSH2", "path": "3", "value": "0x492"}, "1164": {"fn": "SimpleSwap.supply", "offset": [4137, 4179], "op": "SWAP1", "path": "3"}, "1165": {"fn": "SimpleSwap.supply", "offset": [4160, 4178], "op": "DUP3", "path": "3"}, "1166": {"fn": "SimpleSwap.supply", "offset": [4137, 4159], "op": "PUSH2", "path": "3", "value": "0xBE0"}, "1169": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4137, 4179], "op": "JUMP", "path": "3"}, "1170": {"fn": "SimpleSwap.supply", "offset": [4137, 4179], "op": "JUMPDEST", "path": "3"}, "1171": {"fn": "SimpleSwap.supply", "offset": [4116, 4134], "op": "PUSH1", "path": "3", "value": "0x4"}, "1173": {"fn": "SimpleSwap.supply", "offset": [4116, 4179], "op": "SSTORE", "path": "3"}, "1174": {"fn": "SimpleSwap.supply", "offset": [4206, 4219], "op": "PUSH1", "path": "3", "statement": 11, "value": "0x5"}, "1176": {"fn": "SimpleSwap.supply", "offset": [4206, 4219], "op": "SLOAD", "path": "3"}, "1177": {"fn": "SimpleSwap.supply", "offset": [4206, 4239], "op": "PUSH2", "path": "3", "value": "0x4A2"}, "1180": {"fn": "SimpleSwap.supply", "offset": [4206, 4239], "op": "SWAP1", "path": "3"}, "1181": {"fn": "SimpleSwap.supply", "offset": [4224, 4238], "op": "DUP9", "path": "3"}, "1182": {"fn": "SimpleSwap.supply", "offset": [4206, 4223], "op": "PUSH2", "path": "3", "value": "0xBE0"}, "1185": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4206, 4239], "op": "JUMP", "path": "3"}, "1186": {"fn": "SimpleSwap.supply", "offset": [4206, 4239], "op": "JUMPDEST", "path": "3"}, "1187": {"fn": "SimpleSwap.supply", "offset": [4190, 4203], "op": "PUSH1", "path": "3", "value": "0x5"}, "1189": {"fn": "SimpleSwap.supply", "offset": [4190, 4239], "op": "SSTORE", "path": "3"}, "1190": {"fn": "SimpleSwap.supply", "offset": [4306, 4316], "op": "CALLER", "path": "3", "statement": 12}, "1191": {"fn": "SimpleSwap.supply", "offset": [4285, 4317], "op": "PUSH1", "path": "3", "value": "0x0"}, "1193": {"fn": "SimpleSwap.supply", "offset": [4285, 4317], "op": "SWAP1", "path": "3"}, "1194": {"fn": "SimpleSwap.supply", "offset": [4285, 4317], "op": "DUP2", "path": "3"}, "1195": {"fn": "SimpleSwap.supply", "offset": [4285, 4317], "op": "MSTORE", "path": "3"}, "1196": {"fn": "SimpleSwap.supply", "offset": [4285, 4305], "op": "PUSH1", "path": "3", "value": "0x8"}, "1198": {"fn": "SimpleSwap.supply", "offset": [4285, 4317], "op": "PUSH1", "path": "3", "value": "0x20"}, "1200": {"fn": "SimpleSwap.supply", "offset": [4285, 4317], "op": "MSTORE", "path": "3"}, "1201": {"fn": "SimpleSwap.supply", "offset": [4285, 4317], "op": "PUSH1", "path": "3", "value": "0x40"}, "1203": {"fn": "SimpleSwap.supply", "offset": [4285, 4317], "op": "SWAP1", "path": "3"}, "1204": {"fn": "SimpleSwap.supply", "offset": [4285, 4317], "op": "KECCAK256", "path": "3"}, "1205": {"fn": "SimpleSwap.supply", "offset": [4285, 4317], "op": "SLOAD", "path": "3"}, "1206": {"fn": "SimpleSwap.supply", "offset": [4285, 4337], "op": "PUSH2", "path": "3", "value": "0x4BF"}, "1209": {"fn": "SimpleSwap.supply", "offset": [4285, 4337], "op": "SWAP1", "path": "3"}, "1210": {"fn": "SimpleSwap.supply", "offset": [4322, 4336], "op": "DUP9", "path": "3"}, "1211": {"fn": "SimpleSwap.supply", "offset": [4285, 4321], "op": "PUSH2", "path": "3", "value": "0xBE0"}, "1214": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4285, 4337], "op": "JUMP", "path": "3"}, "1215": {"fn": "SimpleSwap.supply", "offset": [4285, 4337], "op": "JUMPDEST", "path": "3"}, "1216": {"fn": "SimpleSwap.supply", "offset": [4271, 4281], "op": "CALLER", "path": "3"}, "1217": {"fn": "SimpleSwap.supply", "offset": [4250, 4282], "op": "PUSH1", "path": "3", "value": "0x0"}, "1219": {"fn": "SimpleSwap.supply", "offset": [4250, 4282], "op": "DUP2", "path": "3"}, "1220": {"fn": "SimpleSwap.supply", "offset": [4250, 4282], "op": "DUP2", "path": "3"}, "1221": {"fn": "SimpleSwap.supply", "offset": [4250, 4282], "op": "MSTORE", "path": "3"}, "1222": {"fn": "SimpleSwap.supply", "offset": [4250, 4270], "op": "PUSH1", "path": "3", "value": "0x8"}, "1224": {"fn": "SimpleSwap.supply", "offset": [4250, 4282], "op": "PUSH1", "path": "3", "value": "0x20"}, "1226": {"fn": "SimpleSwap.supply", "offset": [4250, 4282], "op": "MSTORE", "path": "3"}, "1227": {"fn": "SimpleSwap.supply", "offset": [4250, 4282], "op": "PUSH1", "path": "3", "value": "0x40"}, "1229": {"fn": "SimpleSwap.supply", "offset": [4250, 4282], "op": "SWAP1", "path": "3"}, "1230": {"fn": "SimpleSwap.supply", "offset": [4250, 4282], "op": "DUP2", "path": "3"}, "1231": {"fn": "SimpleSwap.supply", "offset": [4250, 4282], "op": "SWAP1", "path": "3"}, "1232": {"fn": "SimpleSwap.supply", "offset": [4250, 4282], "op": "KECCAK256", "path": "3"}, "1233": {"fn": "SimpleSwap.supply", "offset": [4250, 4337], "op": "SWAP3", "path": "3"}, "1234": {"fn": "SimpleSwap.supply", "offset": [4250, 4337], "op": "SWAP1", "path": "3"}, "1235": {"fn": "SimpleSwap.supply", "offset": [4250, 4337], "op": "SWAP3", "path": "3"}, "1236": {"fn": "SimpleSwap.supply", "offset": [4250, 4337], "op": "SSTORE", "path": "3"}, "1237": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "SWAP1", "path": "3", "statement": 13}, "1238": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "MLOAD", "path": "3"}, "1239": {"op": "PUSH4", "value": "0x23B872DD"}, "1244": {"op": "PUSH1", "value": "0xE0"}, "1246": {"op": "SHL"}, "1247": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP2", "path": "3"}, "1248": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "MSTORE", "path": "3"}, "1249": {"op": "PUSH1", "value": "0x1"}, "1251": {"op": "PUSH1", "value": "0x1"}, "1253": {"op": "PUSH1", "value": "0xA0"}, "1255": {"op": "SHL"}, "1256": {"op": "SUB"}, "1257": {"fn": "SimpleSwap.supply", "offset": [4356, 4373], "op": "DUP7", "path": "3"}, "1258": {"fn": "SimpleSwap.supply", "offset": [4356, 4373], "op": "AND", "path": "3"}, "1259": {"fn": "SimpleSwap.supply", "offset": [4356, 4373], "op": "SWAP2", "path": "3"}, "1260": {"fn": "SimpleSwap.supply", "offset": [4356, 4373], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "1265": {"fn": "SimpleSwap.supply", "offset": [4356, 4373], "op": "SWAP2", "path": "3"}, "1266": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH2", "path": "3", "value": "0x502"}, "1269": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "SWAP2", "path": "3"}, "1270": {"fn": "SimpleSwap.supply", "offset": [4271, 4281], "op": "SWAP1", "path": "3"}, "1271": {"fn": "SimpleSwap.supply", "offset": [4394, 4398], "op": "ADDRESS", "path": "3"}, "1272": {"fn": "SimpleSwap.supply", "offset": [4394, 4398], "op": "SWAP1", "path": "3"}, "1273": {"fn": "SimpleSwap.supply", "offset": [4401, 4419], "op": "DUP8", "path": "3"}, "1274": {"fn": "SimpleSwap.supply", "offset": [4401, 4419], "op": "SWAP1", "path": "3"}, "1275": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH1", "path": "3", "value": "0x4"}, "1277": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "ADD", "path": "3"}, "1278": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH2", "path": "3", "value": "0xDE6"}, "1281": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4356, 4420], "op": "JUMP", "path": "3"}, "1282": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "JUMPDEST", "path": "3"}, "1283": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH1", "path": "3", "value": "0x20"}, "1285": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH1", "path": "3", "value": "0x40"}, "1287": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "MLOAD", "path": "3"}, "1288": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP1", "path": "3"}, "1289": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP4", "path": "3"}, "1290": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "SUB", "path": "3"}, "1291": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP2", "path": "3"}, "1292": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH1", "path": "3", "value": "0x0"}, "1294": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP8", "path": "3"}, "1295": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP1", "path": "3"}, "1296": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "EXTCODESIZE", "path": "3"}, "1297": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "ISZERO", "path": "3"}, "1298": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP1", "path": "3"}, "1299": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "ISZERO", "path": "3"}, "1300": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH2", "path": "3", "value": "0x51C"}, "1303": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "JUMPI", "path": "3"}, "1304": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH1", "path": "3", "value": "0x0"}, "1306": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP1", "path": "3"}, "1307": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "REVERT", "path": "3"}, "1308": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "JUMPDEST", "path": "3"}, "1309": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "POP", "path": "3"}, "1310": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "GAS", "path": "3"}, "1311": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "CALL", "path": "3"}, "1312": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "ISZERO", "path": "3"}, "1313": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP1", "path": "3"}, "1314": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "ISZERO", "path": "3"}, "1315": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH2", "path": "3", "value": "0x530"}, "1318": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "JUMPI", "path": "3"}, "1319": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "RETURNDATASIZE", "path": "3"}, "1320": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH1", "path": "3", "value": "0x0"}, "1322": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP1", "path": "3"}, "1323": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "RETURNDATACOPY", "path": "3"}, "1324": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "RETURNDATASIZE", "path": "3"}, "1325": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH1", "path": "3", "value": "0x0"}, "1327": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "REVERT", "path": "3"}, "1328": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "JUMPDEST", "path": "3"}, "1329": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "POP", "path": "3"}, "1330": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "POP", "path": "3"}, "1331": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "POP", "path": "3"}, "1332": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "POP", "path": "3"}, "1333": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH1", "path": "3", "value": "0x40"}, "1335": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "MLOAD", "path": "3"}, "1336": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "RETURNDATASIZE", "path": "3"}, "1337": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1339": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "NOT", "path": "3"}, "1340": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1342": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP3", "path": "3"}, "1343": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "ADD", "path": "3"}, "1344": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "AND", "path": "3"}, "1345": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP3", "path": "3"}, "1346": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "ADD", "path": "3"}, "1347": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP1", "path": "3"}, "1348": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH1", "path": "3", "value": "0x40"}, "1350": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "MSTORE", "path": "3"}, "1351": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "POP", "path": "3"}, "1352": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "DUP2", "path": "3"}, "1353": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "ADD", "path": "3"}, "1354": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "SWAP1", "path": "3"}, "1355": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH2", "path": "3", "value": "0x554"}, "1358": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "SWAP2", "path": "3"}, "1359": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "SWAP1", "path": "3"}, "1360": {"fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "PUSH2", "path": "3", "value": "0xD3E"}, "1363": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4356, 4420], "op": "JUMP", "path": "3"}, "1364": {"branch": 51, "fn": "SimpleSwap.supply", "offset": [4356, 4420], "op": "JUMPDEST", "path": "3"}, "1365": {"fn": "SimpleSwap.supply", "offset": [4348, 4449], "op": "PUSH2", "path": "3", "value": "0x570"}, "1368": {"branch": 51, "fn": "SimpleSwap.supply", "offset": [4348, 4449], "op": "JUMPI", "path": "3"}, "1369": {"fn": "SimpleSwap.supply", "offset": [4348, 4449], "op": "PUSH1", "path": "3", "value": "0x40"}, "1371": {"fn": "SimpleSwap.supply", "offset": [4348, 4449], "op": "MLOAD", "path": "3"}, "1372": {"op": "PUSH3", "value": "0x461BCD"}, "1376": {"op": "PUSH1", "value": "0xE5"}, "1378": {"op": "SHL"}, "1379": {"fn": "SimpleSwap.supply", "offset": [4348, 4449], "op": "DUP2", "path": "3"}, "1380": {"fn": "SimpleSwap.supply", "offset": [4348, 4449], "op": "MSTORE", "path": "3"}, "1381": {"fn": "SimpleSwap.supply", "offset": [4348, 4449], "op": "PUSH1", "path": "3", "value": "0x4"}, "1383": {"fn": "SimpleSwap.supply", "offset": [4348, 4449], "op": "ADD", "path": "3"}, "1384": {"fn": "SimpleSwap.supply", "offset": [4348, 4449], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1387": {"fn": "SimpleSwap.supply", "offset": [4348, 4449], "op": "SWAP1", "path": "3"}, "1388": {"fn": "SimpleSwap.supply", "offset": [4348, 4449], "op": "PUSH2", "path": "3", "value": "0x1012"}, "1391": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4348, 4449], "op": "JUMP", "path": "3"}, "1392": {"fn": "SimpleSwap.supply", "offset": [4348, 4449], "op": "JUMPDEST", "path": "3"}, "1393": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH1", "path": "3", "statement": 14, "value": "0x40"}, "1395": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "MLOAD", "path": "3"}, "1396": {"op": "PUSH4", "value": "0x23B872DD"}, "1401": {"op": "PUSH1", "value": "0xE0"}, "1403": {"op": "SHL"}, "1404": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP2", "path": "3"}, "1405": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "MSTORE", "path": "3"}, "1406": {"op": "PUSH1", "value": "0x1"}, "1408": {"op": "PUSH1", "value": "0x1"}, "1410": {"op": "PUSH1", "value": "0xA0"}, "1412": {"op": "SHL"}, "1413": {"op": "SUB"}, "1414": {"fn": "SimpleSwap.supply", "offset": [4467, 4484], "op": "DUP5", "path": "3"}, "1415": {"fn": "SimpleSwap.supply", "offset": [4467, 4484], "op": "AND", "path": "3"}, "1416": {"fn": "SimpleSwap.supply", "offset": [4467, 4484], "op": "SWAP1", "path": "3"}, "1417": {"fn": "SimpleSwap.supply", "offset": [4467, 4484], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "1422": {"fn": "SimpleSwap.supply", "offset": [4467, 4484], "op": "SWAP1", "path": "3"}, "1423": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH2", "path": "3", "value": "0x5A0"}, "1426": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "SWAP1", "path": "3"}, "1427": {"fn": "SimpleSwap.supply", "offset": [4485, 4495], "op": "CALLER", "path": "3"}, "1428": {"fn": "SimpleSwap.supply", "offset": [4485, 4495], "op": "SWAP1", "path": "3"}, "1429": {"fn": "SimpleSwap.supply", "offset": [4505, 4509], "op": "ADDRESS", "path": "3"}, "1430": {"fn": "SimpleSwap.supply", "offset": [4505, 4509], "op": "SWAP1", "path": "3"}, "1431": {"fn": "SimpleSwap.supply", "offset": [4512, 4530], "op": "DUP7", "path": "3"}, "1432": {"fn": "SimpleSwap.supply", "offset": [4512, 4530], "op": "SWAP1", "path": "3"}, "1433": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH1", "path": "3", "value": "0x4"}, "1435": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "ADD", "path": "3"}, "1436": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH2", "path": "3", "value": "0xDE6"}, "1439": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4467, 4531], "op": "JUMP", "path": "3"}, "1440": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "JUMPDEST", "path": "3"}, "1441": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH1", "path": "3", "value": "0x20"}, "1443": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH1", "path": "3", "value": "0x40"}, "1445": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "MLOAD", "path": "3"}, "1446": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP1", "path": "3"}, "1447": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP4", "path": "3"}, "1448": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "SUB", "path": "3"}, "1449": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP2", "path": "3"}, "1450": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH1", "path": "3", "value": "0x0"}, "1452": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP8", "path": "3"}, "1453": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP1", "path": "3"}, "1454": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "EXTCODESIZE", "path": "3"}, "1455": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "ISZERO", "path": "3"}, "1456": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP1", "path": "3"}, "1457": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "ISZERO", "path": "3"}, "1458": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH2", "path": "3", "value": "0x5BA"}, "1461": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "JUMPI", "path": "3"}, "1462": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH1", "path": "3", "value": "0x0"}, "1464": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP1", "path": "3"}, "1465": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "REVERT", "path": "3"}, "1466": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "JUMPDEST", "path": "3"}, "1467": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "POP", "path": "3"}, "1468": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "GAS", "path": "3"}, "1469": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "CALL", "path": "3"}, "1470": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "ISZERO", "path": "3"}, "1471": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP1", "path": "3"}, "1472": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "ISZERO", "path": "3"}, "1473": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH2", "path": "3", "value": "0x5CE"}, "1476": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "JUMPI", "path": "3"}, "1477": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "RETURNDATASIZE", "path": "3"}, "1478": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH1", "path": "3", "value": "0x0"}, "1480": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP1", "path": "3"}, "1481": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "RETURNDATACOPY", "path": "3"}, "1482": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "RETURNDATASIZE", "path": "3"}, "1483": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH1", "path": "3", "value": "0x0"}, "1485": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "REVERT", "path": "3"}, "1486": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "JUMPDEST", "path": "3"}, "1487": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "POP", "path": "3"}, "1488": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "POP", "path": "3"}, "1489": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "POP", "path": "3"}, "1490": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "POP", "path": "3"}, "1491": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH1", "path": "3", "value": "0x40"}, "1493": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "MLOAD", "path": "3"}, "1494": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "RETURNDATASIZE", "path": "3"}, "1495": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1497": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "NOT", "path": "3"}, "1498": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1500": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP3", "path": "3"}, "1501": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "ADD", "path": "3"}, "1502": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "AND", "path": "3"}, "1503": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP3", "path": "3"}, "1504": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "ADD", "path": "3"}, "1505": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP1", "path": "3"}, "1506": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH1", "path": "3", "value": "0x40"}, "1508": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "MSTORE", "path": "3"}, "1509": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "POP", "path": "3"}, "1510": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "DUP2", "path": "3"}, "1511": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "ADD", "path": "3"}, "1512": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "SWAP1", "path": "3"}, "1513": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH2", "path": "3", "value": "0x5F2"}, "1516": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "SWAP2", "path": "3"}, "1517": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "SWAP1", "path": "3"}, "1518": {"fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "PUSH2", "path": "3", "value": "0xD3E"}, "1521": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4467, 4531], "op": "JUMP", "path": "3"}, "1522": {"branch": 52, "fn": "SimpleSwap.supply", "offset": [4467, 4531], "op": "JUMPDEST", "path": "3"}, "1523": {"fn": "SimpleSwap.supply", "offset": [4459, 4560], "op": "PUSH2", "path": "3", "value": "0x3DB"}, "1526": {"branch": 52, "fn": "SimpleSwap.supply", "offset": [4459, 4560], "op": "JUMPI", "path": "3"}, "1527": {"fn": "SimpleSwap.supply", "offset": [4459, 4560], "op": "PUSH1", "path": "3", "value": "0x40"}, "1529": {"fn": "SimpleSwap.supply", "offset": [4459, 4560], "op": "MLOAD", "path": "3"}, "1530": {"op": "PUSH3", "value": "0x461BCD"}, "1534": {"op": "PUSH1", "value": "0xE5"}, "1536": {"op": "SHL"}, "1537": {"fn": "SimpleSwap.supply", "offset": [4459, 4560], "op": "DUP2", "path": "3"}, "1538": {"fn": "SimpleSwap.supply", "offset": [4459, 4560], "op": "MSTORE", "path": "3"}, "1539": {"fn": "SimpleSwap.supply", "offset": [4459, 4560], "op": "PUSH1", "path": "3", "value": "0x4"}, "1541": {"fn": "SimpleSwap.supply", "offset": [4459, 4560], "op": "ADD", "path": "3"}, "1542": {"fn": "SimpleSwap.supply", "offset": [4459, 4560], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1545": {"fn": "SimpleSwap.supply", "offset": [4459, 4560], "op": "SWAP1", "path": "3"}, "1546": {"fn": "SimpleSwap.supply", "offset": [4459, 4560], "op": "PUSH2", "path": "3", "value": "0x10CE"}, "1549": {"fn": "SimpleSwap.supply", "jump": "i", "offset": [4459, 4560], "op": "JUMP", "path": "3"}, "1550": {"fn": "SimpleSwap.swap", "offset": [2010, 3397], "op": "JUMPDEST", "path": "3"}, "1551": {"offset": [6789, 6806], "op": "PUSH1", "path": "3", "value": "0x7"}, "1553": {"fn": "SimpleSwap.swap", "offset": [6789, 6806], "op": "SLOAD", "path": "3"}, "1554": {"fn": "SimpleSwap.swap", "offset": [6789, 6806], "op": "PUSH1", "path": "3", "value": "0xFF"}, "1556": {"fn": "SimpleSwap.swap", "offset": [6789, 6806], "op": "AND", "path": "3"}, "1557": {"offset": [6781, 6848], "op": "PUSH2", "path": "3", "value": "0x630"}, "1560": {"offset": [6781, 6848], "op": "JUMPI", "path": "3"}, "1561": {"fn": "SimpleSwap.swap", "offset": [6781, 6848], "op": "PUSH1", "path": "3", "value": "0x40"}, "1563": {"fn": "SimpleSwap.swap", "offset": [6781, 6848], "op": "MLOAD", "path": "3"}, "1564": {"op": "PUSH3", "value": "0x461BCD"}, "1568": {"op": "PUSH1", "value": "0xE5"}, "1570": {"op": "SHL"}, "1571": {"offset": [6781, 6848], "op": "DUP2", "path": "3"}, "1572": {"fn": "SimpleSwap.swap", "offset": [6781, 6848], "op": "MSTORE", "path": "3"}, "1573": {"fn": "SimpleSwap.swap", "offset": [6781, 6848], "op": "PUSH1", "path": "3", "value": "0x4"}, "1575": {"fn": "SimpleSwap.swap", "offset": [6781, 6848], "op": "ADD", "path": "3"}, "1576": {"fn": "SimpleSwap.swap", "offset": [6781, 6848], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1579": {"fn": "SimpleSwap.swap", "offset": [6781, 6848], "op": "SWAP1", "path": "3"}, "1580": {"fn": "SimpleSwap.swap", "offset": [6781, 6848], "op": "PUSH2", "path": "3", "value": "0xF70"}, "1583": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [6781, 6848], "op": "JUMP", "path": "3"}, "1584": {"fn": "SimpleSwap.swap", "offset": [6781, 6848], "op": "JUMPDEST", "path": "3"}, "1585": {"fn": "SimpleSwap.swap", "offset": [2252, 2253], "op": "PUSH1", "path": "3", "statement": 15, "value": "0x0"}, "1587": {"fn": "SimpleSwap.swap", "offset": [2232, 2249], "op": "DUP4", "path": "3"}, "1588": {"branch": 53, "fn": "SimpleSwap.swap", "offset": [2232, 2253], "op": "GT", "path": "3"}, "1589": {"fn": "SimpleSwap.swap", "offset": [2224, 2310], "op": "PUSH2", "path": "3", "value": "0x650"}, "1592": {"branch": 53, "fn": "SimpleSwap.swap", "offset": [2224, 2310], "op": "JUMPI", "path": "3"}, "1593": {"fn": "SimpleSwap.swap", "offset": [2224, 2310], "op": "PUSH1", "path": "3", "value": "0x40"}, "1595": {"fn": "SimpleSwap.swap", "offset": [2224, 2310], "op": "MLOAD", "path": "3"}, "1596": {"op": "PUSH3", "value": "0x461BCD"}, "1600": {"op": "PUSH1", "value": "0xE5"}, "1602": {"op": "SHL"}, "1603": {"fn": "SimpleSwap.swap", "offset": [2224, 2310], "op": "DUP2", "path": "3"}, "1604": {"fn": "SimpleSwap.swap", "offset": [2224, 2310], "op": "MSTORE", "path": "3"}, "1605": {"fn": "SimpleSwap.swap", "offset": [2224, 2310], "op": "PUSH1", "path": "3", "value": "0x4"}, "1607": {"fn": "SimpleSwap.swap", "offset": [2224, 2310], "op": "ADD", "path": "3"}, "1608": {"fn": "SimpleSwap.swap", "offset": [2224, 2310], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1611": {"fn": "SimpleSwap.swap", "offset": [2224, 2310], "op": "SWAP1", "path": "3"}, "1612": {"fn": "SimpleSwap.swap", "offset": [2224, 2310], "op": "PUSH2", "path": "3", "value": "0xE23"}, "1615": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2224, 2310], "op": "JUMP", "path": "3"}, "1616": {"fn": "SimpleSwap.swap", "offset": [2224, 2310], "op": "JUMPDEST", "path": "3"}, "1617": {"fn": "SimpleSwap.swap", "offset": [2320, 2348], "op": "PUSH1", "path": "3", "value": "0x0"}, "1619": {"fn": "SimpleSwap.swap", "offset": [2351, 2407], "op": "PUSH2", "path": "3", "value": "0x65C"}, "1622": {"fn": "SimpleSwap.swap", "offset": [2375, 2392], "op": "DUP5", "path": "3"}, "1623": {"fn": "SimpleSwap.swap", "offset": [2394, 2406], "op": "DUP4", "path": "3"}, "1624": {"fn": "SimpleSwap.swap", "offset": [2351, 2374], "op": "PUSH2", "path": "3", "value": "0xBEC"}, "1627": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2351, 2407], "op": "JUMP", "path": "3"}, "1628": {"fn": "SimpleSwap.swap", "offset": [2351, 2407], "op": "JUMPDEST", "path": "3"}, "1629": {"fn": "SimpleSwap.swap", "offset": [2320, 2407], "op": "SWAP1", "path": "3"}, "1630": {"fn": "SimpleSwap.swap", "offset": [2320, 2407], "op": "POP", "path": "3"}, "1631": {"fn": "SimpleSwap.swap", "offset": [2449, 2472], "op": "DUP3", "path": "3", "statement": 16}, "1632": {"fn": "SimpleSwap.swap", "offset": [2425, 2445], "op": "DUP2", "path": "3"}, "1633": {"fn": "SimpleSwap.swap", "offset": [2425, 2472], "op": "LT", "path": "3"}, "1634": {"branch": 54, "fn": "SimpleSwap.swap", "offset": [2425, 2472], "op": "ISZERO", "path": "3"}, "1635": {"fn": "SimpleSwap.swap", "offset": [2417, 2530], "op": "PUSH2", "path": "3", "value": "0x67E"}, "1638": {"branch": 54, "fn": "SimpleSwap.swap", "offset": [2417, 2530], "op": "JUMPI", "path": "3"}, "1639": {"fn": "SimpleSwap.swap", "offset": [2417, 2530], "op": "PUSH1", "path": "3", "value": "0x40"}, "1641": {"fn": "SimpleSwap.swap", "offset": [2417, 2530], "op": "MLOAD", "path": "3"}, "1642": {"op": "PUSH3", "value": "0x461BCD"}, "1646": {"op": "PUSH1", "value": "0xE5"}, "1648": {"op": "SHL"}, "1649": {"fn": "SimpleSwap.swap", "offset": [2417, 2530], "op": "DUP2", "path": "3"}, "1650": {"fn": "SimpleSwap.swap", "offset": [2417, 2530], "op": "MSTORE", "path": "3"}, "1651": {"fn": "SimpleSwap.swap", "offset": [2417, 2530], "op": "PUSH1", "path": "3", "value": "0x4"}, "1653": {"fn": "SimpleSwap.swap", "offset": [2417, 2530], "op": "ADD", "path": "3"}, "1654": {"fn": "SimpleSwap.swap", "offset": [2417, 2530], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "1657": {"fn": "SimpleSwap.swap", "offset": [2417, 2530], "op": "SWAP1", "path": "3"}, "1658": {"fn": "SimpleSwap.swap", "offset": [2417, 2530], "op": "PUSH2", "path": "3", "value": "0x1105"}, "1661": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2417, 2530], "op": "JUMP", "path": "3"}, "1662": {"fn": "SimpleSwap.swap", "offset": [2417, 2530], "op": "JUMPDEST", "path": "3"}, "1663": {"fn": "SimpleSwap.swap", "offset": [2541, 2557], "op": "PUSH1", "path": "3", "value": "0x0"}, "1665": {"fn": "SimpleSwap.swap", "offset": [2541, 2557], "op": "DUP1", "path": "3"}, "1666": {"fn": "SimpleSwap.swap", "offset": [2541, 2557], "op": "DUP1", "path": "3"}, "1667": {"fn": "SimpleSwap.swap", "offset": [2600, 2612], "op": "DUP5", "path": "3"}, "1668": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "PUSH1", "path": "3", "value": "0x1"}, "1670": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "DUP2", "path": "3"}, "1671": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "GT", "path": "3"}, "1672": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "ISZERO", "path": "3"}, "1673": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "PUSH2", "path": "3", "value": "0x6A2"}, "1676": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "JUMPI", "path": "3"}, "1677": {"op": "PUSH4", "value": "0x4E487B71"}, "1682": {"op": "PUSH1", "value": "0xE0"}, "1684": {"op": "SHL"}, "1685": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "PUSH1", "path": "3", "value": "0x0"}, "1687": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "MSTORE", "path": "3"}, "1688": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "PUSH1", "path": "3", "value": "0x21"}, "1690": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "PUSH1", "path": "3", "value": "0x4"}, "1692": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "MSTORE", "path": "3"}, "1693": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "PUSH1", "path": "3", "value": "0x24"}, "1695": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "PUSH1", "path": "3", "value": "0x0"}, "1697": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "REVERT", "path": "3"}, "1698": {"fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "JUMPDEST", "path": "3"}, "1699": {"branch": 55, "fn": "SimpleSwap.swap", "offset": [2600, 2626], "op": "EQ", "path": "3"}, "1700": {"fn": "SimpleSwap.swap", "offset": [2596, 3163], "op": "ISZERO", "path": "3"}, "1701": {"fn": "SimpleSwap.swap", "offset": [2596, 3163], "op": "PUSH2", "path": "3", "value": "0x6E2"}, "1704": {"branch": 55, "fn": "SimpleSwap.swap", "offset": [2596, 3163], "op": "JUMPI", "path": "3"}, "1705": {"fn": "SimpleSwap.swap", "offset": [2664, 2682], "op": "PUSH1", "path": "3", "statement": 17, "value": "0x3"}, "1707": {"fn": "SimpleSwap.swap", "offset": [2664, 2682], "op": "SLOAD", "path": "3"}, "1708": {"fn": "SimpleSwap.swap", "offset": [2664, 2705], "op": "PUSH2", "path": "3", "value": "0x6B5"}, "1711": {"fn": "SimpleSwap.swap", "offset": [2664, 2705], "op": "SWAP1", "path": "3"}, "1712": {"fn": "SimpleSwap.swap", "offset": [2687, 2704], "op": "DUP8", "path": "3"}, "1713": {"fn": "SimpleSwap.swap", "offset": [2664, 2686], "op": "PUSH2", "path": "3", "value": "0xBE0"}, "1716": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2664, 2705], "op": "JUMP", "path": "3"}, "1717": {"fn": "SimpleSwap.swap", "offset": [2664, 2705], "op": "JUMPDEST", "path": "3"}, "1718": {"fn": "SimpleSwap.swap", "offset": [2642, 2660], "op": "PUSH1", "path": "3", "value": "0x3"}, "1720": {"fn": "SimpleSwap.swap", "offset": [2642, 2705], "op": "SSTORE", "path": "3"}, "1721": {"fn": "SimpleSwap.swap", "offset": [2740, 2758], "op": "PUSH1", "path": "3", "statement": 18, "value": "0x4"}, "1723": {"fn": "SimpleSwap.swap", "offset": [2740, 2758], "op": "SLOAD", "path": "3"}, "1724": {"fn": "SimpleSwap.swap", "offset": [2740, 2784], "op": "PUSH2", "path": "3", "value": "0x6C5"}, "1727": {"fn": "SimpleSwap.swap", "offset": [2740, 2784], "op": "SWAP1", "path": "3"}, "1728": {"fn": "SimpleSwap.swap", "offset": [2763, 2783], "op": "DUP5", "path": "3"}, "1729": {"fn": "SimpleSwap.swap", "offset": [2740, 2762], "op": "PUSH2", "path": "3", "value": "0xBD4"}, "1732": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2740, 2784], "op": "JUMP", "path": "3"}, "1733": {"fn": "SimpleSwap.swap", "offset": [2740, 2784], "op": "JUMPDEST", "path": "3"}, "1734": {"fn": "SimpleSwap.swap", "offset": [2719, 2737], "op": "PUSH1", "path": "3", "value": "0x4"}, "1736": {"fn": "SimpleSwap.swap", "offset": [2719, 2784], "op": "SSTORE", "path": "3"}, "1737": {"op": "POP"}, "1738": {"op": "POP"}, "1739": {"fn": "SimpleSwap.swap", "offset": [2818, 2829], "op": "PUSH1", "path": "3", "statement": 19, "value": "0x1"}, "1741": {"fn": "SimpleSwap.swap", "offset": [2818, 2829], "op": "SLOAD", "path": "3"}, "1742": {"fn": "SimpleSwap.swap", "offset": [2865, 2876], "op": "PUSH1", "path": "3", "statement": 20, "value": "0x2"}, "1744": {"fn": "SimpleSwap.swap", "offset": [2865, 2876], "op": "SLOAD", "path": "3"}, "1745": {"op": "PUSH1", "value": "0x1"}, "1747": {"op": "PUSH1", "value": "0x1"}, "1749": {"op": "PUSH1", "value": "0xA0"}, "1751": {"op": "SHL"}, "1752": {"op": "SUB"}, "1753": {"fn": "SimpleSwap.swap", "offset": [2818, 2829], "op": "SWAP2", "path": "3"}, "1754": {"fn": "SimpleSwap.swap", "offset": [2818, 2829], "op": "DUP3", "path": "3"}, "1755": {"fn": "SimpleSwap.swap", "offset": [2818, 2829], "op": "AND", "path": "3"}, "1756": {"fn": "SimpleSwap.swap", "offset": [2818, 2829], "op": "SWAP2", "path": "3"}, "1757": {"fn": "SimpleSwap.swap", "offset": [2865, 2876], "op": "AND", "path": "3"}, "1758": {"fn": "SimpleSwap.swap", "offset": [2596, 3163], "op": "PUSH2", "path": "3", "value": "0x718"}, "1761": {"fn": "SimpleSwap.swap", "offset": [2596, 3163], "op": "JUMP", "path": "3"}, "1762": {"fn": "SimpleSwap.swap", "offset": [2596, 3163], "op": "JUMPDEST", "path": "3"}, "1763": {"fn": "SimpleSwap.swap", "offset": [2938, 2956], "op": "PUSH1", "path": "3", "statement": 21, "value": "0x3"}, "1765": {"fn": "SimpleSwap.swap", "offset": [2938, 2956], "op": "SLOAD", "path": "3"}, "1766": {"fn": "SimpleSwap.swap", "offset": [2938, 2982], "op": "PUSH2", "path": "3", "value": "0x6EF"}, "1769": {"fn": "SimpleSwap.swap", "offset": [2938, 2982], "op": "SWAP1", "path": "3"}, "1770": {"fn": "SimpleSwap.swap", "offset": [2961, 2981], "op": "DUP5", "path": "3"}, "1771": {"fn": "SimpleSwap.swap", "offset": [2938, 2960], "op": "PUSH2", "path": "3", "value": "0xBD4"}, "1774": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [2938, 2982], "op": "JUMP", "path": "3"}, "1775": {"fn": "SimpleSwap.swap", "offset": [2938, 2982], "op": "JUMPDEST", "path": "3"}, "1776": {"fn": "SimpleSwap.swap", "offset": [2917, 2935], "op": "PUSH1", "path": "3", "value": "0x3"}, "1778": {"fn": "SimpleSwap.swap", "offset": [2917, 2982], "op": "SSTORE", "path": "3"}, "1779": {"fn": "SimpleSwap.swap", "offset": [3017, 3035], "op": "PUSH1", "path": "3", "statement": 22, "value": "0x4"}, "1781": {"fn": "SimpleSwap.swap", "offset": [3017, 3035], "op": "SLOAD", "path": "3"}, "1782": {"fn": "SimpleSwap.swap", "offset": [3017, 3058], "op": "PUSH2", "path": "3", "value": "0x6FF"}, "1785": {"fn": "SimpleSwap.swap", "offset": [3017, 3058], "op": "SWAP1", "path": "3"}, "1786": {"fn": "SimpleSwap.swap", "offset": [3040, 3057], "op": "DUP8", "path": "3"}, "1787": {"fn": "SimpleSwap.swap", "offset": [3017, 3039], "op": "PUSH2", "path": "3", "value": "0xBE0"}, "1790": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3017, 3058], "op": "JUMP", "path": "3"}, "1791": {"fn": "SimpleSwap.swap", "offset": [3017, 3058], "op": "JUMPDEST", "path": "3"}, "1792": {"fn": "SimpleSwap.swap", "offset": [2996, 3014], "op": "PUSH1", "path": "3", "value": "0x4"}, "1794": {"fn": "SimpleSwap.swap", "offset": [2996, 3058], "op": "SSTORE", "path": "3"}, "1795": {"op": "POP"}, "1796": {"op": "POP"}, "1797": {"fn": "SimpleSwap.swap", "offset": [3092, 3103], "op": "PUSH1", "path": "3", "statement": 23, "value": "0x2"}, "1799": {"fn": "SimpleSwap.swap", "offset": [3092, 3103], "op": "SLOAD", "path": "3"}, "1800": {"fn": "SimpleSwap.swap", "offset": [3092, 3103], "op": "PUSH1", "path": "3", "value": "0x1"}, "1802": {"fn": "SimpleSwap.swap", "offset": [3140, 3151], "op": "SLOAD", "path": "3", "statement": 24}, "1803": {"op": "PUSH1", "value": "0x1"}, "1805": {"op": "PUSH1", "value": "0x1"}, "1807": {"op": "PUSH1", "value": "0xA0"}, "1809": {"op": "SHL"}, "1810": {"op": "SUB"}, "1811": {"fn": "SimpleSwap.swap", "offset": [3092, 3103], "op": "SWAP2", "path": "3"}, "1812": {"fn": "SimpleSwap.swap", "offset": [3092, 3103], "op": "DUP3", "path": "3"}, "1813": {"fn": "SimpleSwap.swap", "offset": [3092, 3103], "op": "AND", "path": "3"}, "1814": {"fn": "SimpleSwap.swap", "offset": [3092, 3103], "op": "SWAP2", "path": "3"}, "1815": {"fn": "SimpleSwap.swap", "offset": [3140, 3151], "op": "AND", "path": "3"}, "1816": {"fn": "SimpleSwap.swap", "offset": [2596, 3163], "op": "JUMPDEST", "path": "3"}, "1817": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH1", "path": "3", "statement": 25, "value": "0x40"}, "1819": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "MLOAD", "path": "3"}, "1820": {"op": "PUSH4", "value": "0xA9059CBB"}, "1825": {"op": "PUSH1", "value": "0xE0"}, "1827": {"op": "SHL"}, "1828": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP2", "path": "3"}, "1829": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "MSTORE", "path": "3"}, "1830": {"op": "PUSH1", "value": "0x1"}, "1832": {"op": "PUSH1", "value": "0x1"}, "1834": {"op": "PUSH1", "value": "0xA0"}, "1836": {"op": "SHL"}, "1837": {"op": "SUB"}, "1838": {"fn": "SimpleSwap.swap", "offset": [3188, 3208], "op": "DUP3", "path": "3"}, "1839": {"fn": "SimpleSwap.swap", "offset": [3188, 3208], "op": "AND", "path": "3"}, "1840": {"fn": "SimpleSwap.swap", "offset": [3188, 3208], "op": "SWAP1", "path": "3"}, "1841": {"fn": "SimpleSwap.swap", "offset": [3188, 3208], "op": "PUSH4", "path": "3", "value": "0xA9059CBB"}, "1846": {"fn": "SimpleSwap.swap", "offset": [3188, 3208], "op": "SWAP1", "path": "3"}, "1847": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH2", "path": "3", "value": "0x746"}, "1850": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "SWAP1", "path": "3"}, "1851": {"fn": "SimpleSwap.swap", "offset": [3209, 3219], "op": "CALLER", "path": "3"}, "1852": {"fn": "SimpleSwap.swap", "offset": [3209, 3219], "op": "SWAP1", "path": "3"}, "1853": {"fn": "SimpleSwap.swap", "offset": [3221, 3241], "op": "DUP8", "path": "3"}, "1854": {"fn": "SimpleSwap.swap", "offset": [3221, 3241], "op": "SWAP1", "path": "3"}, "1855": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH1", "path": "3", "value": "0x4"}, "1857": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "ADD", "path": "3"}, "1858": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH2", "path": "3", "value": "0xE0A"}, "1861": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3188, 3242], "op": "JUMP", "path": "3"}, "1862": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "JUMPDEST", "path": "3"}, "1863": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH1", "path": "3", "value": "0x20"}, "1865": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH1", "path": "3", "value": "0x40"}, "1867": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "MLOAD", "path": "3"}, "1868": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP1", "path": "3"}, "1869": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP4", "path": "3"}, "1870": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "SUB", "path": "3"}, "1871": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP2", "path": "3"}, "1872": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH1", "path": "3", "value": "0x0"}, "1874": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP8", "path": "3"}, "1875": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP1", "path": "3"}, "1876": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "EXTCODESIZE", "path": "3"}, "1877": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "ISZERO", "path": "3"}, "1878": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP1", "path": "3"}, "1879": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "ISZERO", "path": "3"}, "1880": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH2", "path": "3", "value": "0x760"}, "1883": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "JUMPI", "path": "3"}, "1884": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH1", "path": "3", "value": "0x0"}, "1886": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP1", "path": "3"}, "1887": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "REVERT", "path": "3"}, "1888": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "JUMPDEST", "path": "3"}, "1889": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "POP", "path": "3"}, "1890": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "GAS", "path": "3"}, "1891": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "CALL", "path": "3"}, "1892": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "ISZERO", "path": "3"}, "1893": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP1", "path": "3"}, "1894": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "ISZERO", "path": "3"}, "1895": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH2", "path": "3", "value": "0x774"}, "1898": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "JUMPI", "path": "3"}, "1899": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "RETURNDATASIZE", "path": "3"}, "1900": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH1", "path": "3", "value": "0x0"}, "1902": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP1", "path": "3"}, "1903": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "RETURNDATACOPY", "path": "3"}, "1904": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "RETURNDATASIZE", "path": "3"}, "1905": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH1", "path": "3", "value": "0x0"}, "1907": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "REVERT", "path": "3"}, "1908": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "JUMPDEST", "path": "3"}, "1909": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "POP", "path": "3"}, "1910": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "POP", "path": "3"}, "1911": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "POP", "path": "3"}, "1912": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "POP", "path": "3"}, "1913": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH1", "path": "3", "value": "0x40"}, "1915": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "MLOAD", "path": "3"}, "1916": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "RETURNDATASIZE", "path": "3"}, "1917": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1919": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "NOT", "path": "3"}, "1920": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH1", "path": "3", "value": "0x1F"}, "1922": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP3", "path": "3"}, "1923": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "ADD", "path": "3"}, "1924": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "AND", "path": "3"}, "1925": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP3", "path": "3"}, "1926": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "ADD", "path": "3"}, "1927": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP1", "path": "3"}, "1928": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH1", "path": "3", "value": "0x40"}, "1930": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "MSTORE", "path": "3"}, "1931": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "POP", "path": "3"}, "1932": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "DUP2", "path": "3"}, "1933": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "ADD", "path": "3"}, "1934": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "SWAP1", "path": "3"}, "1935": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH2", "path": "3", "value": "0x798"}, "1938": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "SWAP2", "path": "3"}, "1939": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "SWAP1", "path": "3"}, "1940": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "PUSH2", "path": "3", "value": "0xD3E"}, "1943": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3188, 3242], "op": "JUMP", "path": "3"}, "1944": {"fn": "SimpleSwap.swap", "offset": [3188, 3242], "op": "JUMPDEST", "path": "3"}, "1945": {"fn": "SimpleSwap.swap", "offset": [3181, 3243], "op": "PUSH2", "path": "3", "value": "0x7B2"}, "1948": {"fn": "SimpleSwap.swap", "offset": [3181, 3243], "op": "JUMPI", "path": "3"}, "1949": {"op": "PUSH4", "value": "0x4E487B71"}, "1954": {"op": "PUSH1", "value": "0xE0"}, "1956": {"op": "SHL"}, "1957": {"fn": "SimpleSwap.swap", "offset": [3181, 3243], "op": "PUSH1", "path": "3", "value": "0x0"}, "1959": {"fn": "SimpleSwap.swap", "offset": [3181, 3243], "op": "MSTORE", "path": "3"}, "1960": {"fn": "SimpleSwap.swap", "offset": [3181, 3243], "op": "PUSH1", "path": "3", "value": "0x1"}, "1962": {"fn": "SimpleSwap.swap", "offset": [3181, 3243], "op": "PUSH1", "path": "3", "value": "0x4"}, "1964": {"fn": "SimpleSwap.swap", "offset": [3181, 3243], "op": "MSTORE", "path": "3"}, "1965": {"fn": "SimpleSwap.swap", "offset": [3181, 3243], "op": "PUSH1", "path": "3", "value": "0x24"}, "1967": {"fn": "SimpleSwap.swap", "offset": [3181, 3243], "op": "PUSH1", "path": "3", "value": "0x0"}, "1969": {"fn": "SimpleSwap.swap", "offset": [3181, 3243], "op": "REVERT", "path": "3"}, "1970": {"fn": "SimpleSwap.swap", "offset": [3181, 3243], "op": "JUMPDEST", "path": "3"}, "1971": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH1", "path": "3", "statement": 26, "value": "0x40"}, "1973": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "MLOAD", "path": "3"}, "1974": {"op": "PUSH4", "value": "0x23B872DD"}, "1979": {"op": "PUSH1", "value": "0xE0"}, "1981": {"op": "SHL"}, "1982": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP2", "path": "3"}, "1983": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "MSTORE", "path": "3"}, "1984": {"op": "PUSH1", "value": "0x1"}, "1986": {"op": "PUSH1", "value": "0x1"}, "1988": {"op": "PUSH1", "value": "0xA0"}, "1990": {"op": "SHL"}, "1991": {"op": "SUB"}, "1992": {"fn": "SimpleSwap.swap", "offset": [3261, 3283], "op": "DUP4", "path": "3"}, "1993": {"fn": "SimpleSwap.swap", "offset": [3261, 3283], "op": "AND", "path": "3"}, "1994": {"fn": "SimpleSwap.swap", "offset": [3261, 3283], "op": "SWAP1", "path": "3"}, "1995": {"fn": "SimpleSwap.swap", "offset": [3261, 3283], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "2000": {"fn": "SimpleSwap.swap", "offset": [3261, 3283], "op": "SWAP1", "path": "3"}, "2001": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH2", "path": "3", "value": "0x7E2"}, "2004": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "SWAP1", "path": "3"}, "2005": {"fn": "SimpleSwap.swap", "offset": [3284, 3294], "op": "CALLER", "path": "3"}, "2006": {"fn": "SimpleSwap.swap", "offset": [3284, 3294], "op": "SWAP1", "path": "3"}, "2007": {"fn": "SimpleSwap.swap", "offset": [3304, 3308], "op": "ADDRESS", "path": "3"}, "2008": {"fn": "SimpleSwap.swap", "offset": [3304, 3308], "op": "SWAP1", "path": "3"}, "2009": {"fn": "SimpleSwap.swap", "offset": [3311, 3328], "op": "DUP12", "path": "3"}, "2010": {"fn": "SimpleSwap.swap", "offset": [3311, 3328], "op": "SWAP1", "path": "3"}, "2011": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH1", "path": "3", "value": "0x4"}, "2013": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "ADD", "path": "3"}, "2014": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH2", "path": "3", "value": "0xDE6"}, "2017": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3261, 3329], "op": "JUMP", "path": "3"}, "2018": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "JUMPDEST", "path": "3"}, "2019": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH1", "path": "3", "value": "0x20"}, "2021": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH1", "path": "3", "value": "0x40"}, "2023": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "MLOAD", "path": "3"}, "2024": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP1", "path": "3"}, "2025": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP4", "path": "3"}, "2026": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "SUB", "path": "3"}, "2027": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP2", "path": "3"}, "2028": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH1", "path": "3", "value": "0x0"}, "2030": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP8", "path": "3"}, "2031": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP1", "path": "3"}, "2032": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "EXTCODESIZE", "path": "3"}, "2033": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "ISZERO", "path": "3"}, "2034": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP1", "path": "3"}, "2035": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "ISZERO", "path": "3"}, "2036": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH2", "path": "3", "value": "0x7FC"}, "2039": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "JUMPI", "path": "3"}, "2040": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH1", "path": "3", "value": "0x0"}, "2042": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP1", "path": "3"}, "2043": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "REVERT", "path": "3"}, "2044": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "JUMPDEST", "path": "3"}, "2045": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "POP", "path": "3"}, "2046": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "GAS", "path": "3"}, "2047": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "CALL", "path": "3"}, "2048": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "ISZERO", "path": "3"}, "2049": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP1", "path": "3"}, "2050": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "ISZERO", "path": "3"}, "2051": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH2", "path": "3", "value": "0x810"}, "2054": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "JUMPI", "path": "3"}, "2055": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "RETURNDATASIZE", "path": "3"}, "2056": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH1", "path": "3", "value": "0x0"}, "2058": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP1", "path": "3"}, "2059": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "RETURNDATACOPY", "path": "3"}, "2060": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "RETURNDATASIZE", "path": "3"}, "2061": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH1", "path": "3", "value": "0x0"}, "2063": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "REVERT", "path": "3"}, "2064": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "JUMPDEST", "path": "3"}, "2065": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "POP", "path": "3"}, "2066": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "POP", "path": "3"}, "2067": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "POP", "path": "3"}, "2068": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "POP", "path": "3"}, "2069": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH1", "path": "3", "value": "0x40"}, "2071": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "MLOAD", "path": "3"}, "2072": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "RETURNDATASIZE", "path": "3"}, "2073": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2075": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "NOT", "path": "3"}, "2076": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2078": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP3", "path": "3"}, "2079": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "ADD", "path": "3"}, "2080": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "AND", "path": "3"}, "2081": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP3", "path": "3"}, "2082": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "ADD", "path": "3"}, "2083": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP1", "path": "3"}, "2084": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH1", "path": "3", "value": "0x40"}, "2086": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "MSTORE", "path": "3"}, "2087": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "POP", "path": "3"}, "2088": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "DUP2", "path": "3"}, "2089": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "ADD", "path": "3"}, "2090": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "SWAP1", "path": "3"}, "2091": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH2", "path": "3", "value": "0x834"}, "2094": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "SWAP2", "path": "3"}, "2095": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "SWAP1", "path": "3"}, "2096": {"fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "PUSH2", "path": "3", "value": "0xD3E"}, "2099": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3261, 3329], "op": "JUMP", "path": "3"}, "2100": {"branch": 56, "fn": "SimpleSwap.swap", "offset": [3261, 3329], "op": "JUMPDEST", "path": "3"}, "2101": {"fn": "SimpleSwap.swap", "offset": [3253, 3390], "op": "PUSH2", "path": "3", "value": "0x850"}, "2104": {"branch": 56, "fn": "SimpleSwap.swap", "offset": [3253, 3390], "op": "JUMPI", "path": "3"}, "2105": {"fn": "SimpleSwap.swap", "offset": [3253, 3390], "op": "PUSH1", "path": "3", "value": "0x40"}, "2107": {"fn": "SimpleSwap.swap", "offset": [3253, 3390], "op": "MLOAD", "path": "3"}, "2108": {"op": "PUSH3", "value": "0x461BCD"}, "2112": {"op": "PUSH1", "value": "0xE5"}, "2114": {"op": "SHL"}, "2115": {"fn": "SimpleSwap.swap", "offset": [3253, 3390], "op": "DUP2", "path": "3"}, "2116": {"fn": "SimpleSwap.swap", "offset": [3253, 3390], "op": "MSTORE", "path": "3"}, "2117": {"fn": "SimpleSwap.swap", "offset": [3253, 3390], "op": "PUSH1", "path": "3", "value": "0x4"}, "2119": {"fn": "SimpleSwap.swap", "offset": [3253, 3390], "op": "ADD", "path": "3"}, "2120": {"fn": "SimpleSwap.swap", "offset": [3253, 3390], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "2123": {"fn": "SimpleSwap.swap", "offset": [3253, 3390], "op": "SWAP1", "path": "3"}, "2124": {"fn": "SimpleSwap.swap", "offset": [3253, 3390], "op": "PUSH2", "path": "3", "value": "0xFB5"}, "2127": {"fn": "SimpleSwap.swap", "jump": "i", "offset": [3253, 3390], "op": "JUMP", "path": "3"}, "2128": {"fn": "SimpleSwap.swap", "offset": [3253, 3390], "op": "JUMPDEST", "path": "3"}, "2129": {"offset": [6858, 6859], "op": "POP", "path": "3"}, "2130": {"fn": "SimpleSwap.swap", "offset": [6858, 6859], "op": "POP", "path": "3"}, "2131": {"fn": "SimpleSwap.swap", "offset": [6858, 6859], "op": "POP", "path": "3"}, "2132": {"fn": "SimpleSwap.swap", "offset": [2010, 3397], "op": "POP", "path": "3"}, "2133": {"fn": "SimpleSwap.swap", "offset": [2010, 3397], "op": "POP", "path": "3"}, "2134": {"fn": "SimpleSwap.swap", "offset": [2010, 3397], "op": "POP", "path": "3"}, "2135": {"fn": "SimpleSwap.swap", "jump": "o", "offset": [2010, 3397], "op": "JUMP", "path": "3"}, "2136": {"offset": [862, 899], "op": "JUMPDEST", "path": "3"}, "2137": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "PUSH1", "path": "3", "value": "0x3"}, "2139": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "SLOAD", "path": "3"}, "2140": {"fn": "SimpleSwap.swap", "offset": [862, 899], "op": "DUP2", "path": "3"}, "2141": {"fn": "SimpleSwap.swap", "jump": "o", "offset": [862, 899], "op": "JUMP", "path": "3"}, "2142": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "JUMPDEST", "path": "3"}, "2143": {"offset": [6789, 6806], "op": "PUSH1", "path": "3", "value": "0x7"}, "2145": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6789, 6806], "op": "SLOAD", "path": "3"}, "2146": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6580, 6587], "op": "PUSH1", "path": "3", "value": "0x0"}, "2148": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6580, 6587], "op": "SWAP1", "path": "3"}, "2149": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6580, 6587], "op": "DUP2", "path": "3"}, "2150": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6580, 6587], "op": "SWAP1", "path": "3"}, "2151": {"offset": [6789, 6806], "op": "PUSH1", "path": "3", "value": "0xFF"}, "2153": {"branch": 57, "fn": "SimpleSwap.getLpTokenPrice", "offset": [6789, 6806], "op": "AND", "path": "3"}, "2154": {"offset": [6781, 6848], "op": "PUSH2", "path": "3", "value": "0x885"}, "2157": {"branch": 57, "offset": [6781, 6848], "op": "JUMPI", "path": "3"}, "2158": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6781, 6848], "op": "PUSH1", "path": "3", "value": "0x40"}, "2160": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6781, 6848], "op": "MLOAD", "path": "3"}, "2161": {"op": "PUSH3", "value": "0x461BCD"}, "2165": {"op": "PUSH1", "value": "0xE5"}, "2167": {"op": "SHL"}, "2168": {"offset": [6781, 6848], "op": "DUP2", "path": "3"}, "2169": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6781, 6848], "op": "MSTORE", "path": "3"}, "2170": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6781, 6848], "op": "PUSH1", "path": "3", "value": "0x4"}, "2172": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6781, 6848], "op": "ADD", "path": "3"}, "2173": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6781, 6848], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "2176": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6781, 6848], "op": "SWAP1", "path": "3"}, "2177": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6781, 6848], "op": "PUSH2", "path": "3", "value": "0xF70"}, "2180": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "i", "offset": [6781, 6848], "op": "JUMP", "path": "3"}, "2181": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6781, 6848], "op": "JUMPDEST", "path": "3"}, "2182": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6621, 6671], "op": "PUSH2", "path": "3", "statement": 27, "value": "0x8A3"}, "2185": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6657, 6670], "op": "PUSH1", "path": "3", "value": "0x5"}, "2187": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6657, 6670], "op": "SLOAD", "path": "3"}, "2188": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6621, 6652], "op": "PUSH2", "path": "3", "value": "0x220"}, "2191": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6644, 6651], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "2195": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6621, 6639], "op": "PUSH1", "path": "3", "value": "0x3"}, "2197": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6621, 6639], "op": "SLOAD", "path": "3"}, "2198": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6621, 6643], "op": "PUSH2", "path": "3", "value": "0xBB5"}, "2201": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6621, 6643], "op": "SWAP1", "path": "3"}, "2202": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6621, 6652], "op": "SWAP2", "path": "3"}, "2203": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6621, 6652], "op": "SWAP1", "path": "3"}, "2204": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6621, 6652], "op": "PUSH4", "path": "3", "value": "0xFFFFFFFF"}, "2209": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6621, 6652], "op": "AND", "path": "3"}, "2210": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "i", "offset": [6621, 6652], "op": "JUMP", "path": "3"}, "2211": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6621, 6671], "op": "JUMPDEST", "path": "3"}, "2212": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6673, 6723], "op": "PUSH2", "path": "3", "value": "0x8C1"}, "2215": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6709, 6722], "op": "PUSH1", "path": "3", "value": "0x5"}, "2217": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6709, 6722], "op": "SLOAD", "path": "3"}, "2218": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6673, 6704], "op": "PUSH2", "path": "3", "value": "0x220"}, "2221": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6696, 6703], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "2225": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6673, 6691], "op": "PUSH1", "path": "3", "value": "0x4"}, "2227": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6673, 6691], "op": "SLOAD", "path": "3"}, "2228": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6673, 6695], "op": "PUSH2", "path": "3", "value": "0xBB5"}, "2231": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6673, 6695], "op": "SWAP1", "path": "3"}, "2232": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6673, 6704], "op": "SWAP2", "path": "3"}, "2233": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6673, 6704], "op": "SWAP1", "path": "3"}, "2234": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6673, 6704], "op": "PUSH4", "path": "3", "value": "0xFFFFFFFF"}, "2239": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6673, 6704], "op": "AND", "path": "3"}, "2240": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "i", "offset": [6673, 6704], "op": "JUMP", "path": "3"}, "2241": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6673, 6723], "op": "JUMPDEST", "path": "3"}, "2242": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6613, 6724], "op": "SWAP2", "path": "3"}, "2243": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6613, 6724], "op": "POP", "path": "3"}, "2244": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6613, 6724], "op": "SWAP2", "path": "3"}, "2245": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6613, 6724], "op": "POP", "path": "3"}, "2246": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "SWAP1", "path": "3"}, "2247": {"fn": "SimpleSwap.getLpTokenPrice", "offset": [6509, 6731], "op": "SWAP2", "path": "3"}, "2248": {"fn": "SimpleSwap.getLpTokenPrice", "jump": "o", "offset": [6509, 6731], "op": "JUMP", "path": "3"}, "2249": {"fn": "Ownable.renounceOwnership", "offset": [1605, 1697], "op": "JUMPDEST", "path": "0"}, "2250": {"offset": [1196, 1208], "op": "PUSH2", "path": "0", "value": "0x8D1"}, "2253": {"offset": [1196, 1206], "op": "PUSH2", "path": "0", "value": "0xCC3"}, "2256": {"jump": "i", "offset": [1196, 1208], "op": "JUMP", "path": "0"}, "2257": {"fn": "Ownable.renounceOwnership", "offset": [1196, 1208], "op": "JUMPDEST", "path": "0"}, "2258": {"op": "PUSH1", "value": "0x1"}, "2260": {"op": "PUSH1", "value": "0x1"}, "2262": {"op": "PUSH1", "value": "0xA0"}, "2264": {"op": "SHL"}, "2265": {"op": "SUB"}, "2266": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2267": {"offset": [1185, 1192], "op": "PUSH2", "path": "0", "value": "0x8E2"}, "2270": {"offset": [1185, 1190], "op": "PUSH2", "path": "0", "value": "0x91A"}, "2273": {"jump": "i", "offset": [1185, 1192], "op": "JUMP", "path": "0"}, "2274": {"fn": "Ownable.renounceOwnership", "offset": [1185, 1192], "op": "JUMPDEST", "path": "0"}, "2275": {"op": "PUSH1", "value": "0x1"}, "2277": {"op": "PUSH1", "value": "0x1"}, "2279": {"op": "PUSH1", "value": "0xA0"}, "2281": {"op": "SHL"}, "2282": {"op": "SUB"}, "2283": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2284": {"fn": "Ownable.renounceOwnership", "offset": [1185, 1208], "op": "EQ", "path": "0"}, "2285": {"offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x908"}, "2288": {"offset": [1177, 1245], "op": "JUMPI", "path": "0"}, "2289": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x40"}, "2291": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "MLOAD", "path": "0"}, "2292": {"op": "PUSH3", "value": "0x461BCD"}, "2296": {"op": "PUSH1", "value": "0xE5"}, "2298": {"op": "SHL"}, "2299": {"offset": [1177, 1245], "op": "DUP2", "path": "0"}, "2300": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "MSTORE", "path": "0"}, "2301": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x4"}, "2303": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "ADD", "path": "0"}, "2304": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1A5"}, "2307": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "SWAP1", "path": "0"}, "2308": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1099"}, "2311": {"fn": "Ownable.renounceOwnership", "jump": "i", "offset": [1177, 1245], "op": "JUMP", "path": "0"}, "2312": {"fn": "Ownable.renounceOwnership", "offset": [1177, 1245], "op": "JUMPDEST", "path": "0"}, "2313": {"fn": "Ownable.renounceOwnership", "offset": [1669, 1690], "op": "PUSH2", "path": "0", "statement": 28, "value": "0x912"}, "2316": {"fn": "Ownable.renounceOwnership", "offset": [1687, 1688], "op": "PUSH1", "path": "0", "value": "0x0"}, "2318": {"fn": "Ownable.renounceOwnership", "offset": [1669, 1678], "op": "PUSH2", "path": "0", "value": "0xCC7"}, "2321": {"fn": "Ownable.renounceOwnership", "jump": "i", "offset": [1669, 1690], "op": "JUMP", "path": "0"}, "2322": {"fn": "Ownable.renounceOwnership", "offset": [1669, 1690], "op": "JUMPDEST", "path": "0"}, "2323": {"fn": "Ownable.renounceOwnership", "jump": "o", "offset": [1605, 1697], "op": "JUMP", "path": "0"}, "2324": {"offset": [986, 1019], "op": "JUMPDEST", "path": "3"}, "2325": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "PUSH1", "path": "3", "value": "0x5"}, "2327": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "SLOAD", "path": "3"}, "2328": {"fn": "Ownable.renounceOwnership", "offset": [986, 1019], "op": "DUP2", "path": "3"}, "2329": {"fn": "Ownable.renounceOwnership", "jump": "o", "offset": [986, 1019], "op": "JUMP", "path": "3"}, "2330": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "JUMPDEST", "path": "0"}, "2331": {"fn": "Ownable.owner", "offset": [1019, 1026], "op": "PUSH1", "path": "0", "value": "0x0"}, "2333": {"fn": "Ownable.owner", "offset": [1045, 1051], "op": "SLOAD", "path": "0", "statement": 29}, "2334": {"op": "PUSH1", "value": "0x1"}, "2336": {"op": "PUSH1", "value": "0x1"}, "2338": {"op": "PUSH1", "value": "0xA0"}, "2340": {"op": "SHL"}, "2341": {"op": "SUB"}, "2342": {"fn": "Ownable.owner", "offset": [1045, 1051], "op": "AND", "path": "0"}, "2343": {"fn": "Ownable.owner", "offset": [973, 1058], "op": "SWAP1", "path": "0"}, "2344": {"fn": "Ownable.owner", "jump": "o", "offset": [973, 1058], "op": "JUMP", "path": "0"}, "2345": {"offset": [924, 961], "op": "JUMPDEST", "path": "3"}, "2346": {"fn": "Ownable.owner", "offset": [924, 961], "op": "PUSH1", "path": "3", "value": "0x4"}, "2348": {"fn": "Ownable.owner", "offset": [924, 961], "op": "SLOAD", "path": "3"}, "2349": {"fn": "Ownable.owner", "offset": [924, 961], "op": "DUP2", "path": "3"}, "2350": {"fn": "Ownable.owner", "jump": "o", "offset": [924, 961], "op": "JUMP", "path": "3"}, "2351": {"offset": [1049, 1081], "op": "JUMPDEST", "path": "3"}, "2352": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "PUSH1", "path": "3", "value": "0x6"}, "2354": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "SLOAD", "path": "3"}, "2355": {"fn": "Ownable.owner", "offset": [1049, 1081], "op": "DUP2", "path": "3"}, "2356": {"fn": "Ownable.owner", "jump": "o", "offset": [1049, 1081], "op": "JUMP", "path": "3"}, "2357": {"fn": "SimpleSwap.initiatePool", "offset": [1201, 2004], "op": "JUMPDEST", "path": "3"}, "2358": {"offset": [1196, 1208], "op": "PUSH2", "path": "0", "value": "0x93D"}, "2361": {"offset": [1196, 1206], "op": "PUSH2", "path": "0", "value": "0xCC3"}, "2364": {"jump": "i", "offset": [1196, 1208], "op": "JUMP", "path": "0"}, "2365": {"fn": "SimpleSwap.initiatePool", "offset": [1196, 1208], "op": "JUMPDEST", "path": "0"}, "2366": {"op": "PUSH1", "value": "0x1"}, "2368": {"op": "PUSH1", "value": "0x1"}, "2370": {"op": "PUSH1", "value": "0xA0"}, "2372": {"op": "SHL"}, "2373": {"op": "SUB"}, "2374": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2375": {"offset": [1185, 1192], "op": "PUSH2", "path": "0", "value": "0x94E"}, "2378": {"offset": [1185, 1190], "op": "PUSH2", "path": "0", "value": "0x91A"}, "2381": {"jump": "i", "offset": [1185, 1192], "op": "JUMP", "path": "0"}, "2382": {"fn": "SimpleSwap.initiatePool", "offset": [1185, 1192], "op": "JUMPDEST", "path": "0"}, "2383": {"op": "PUSH1", "value": "0x1"}, "2385": {"op": "PUSH1", "value": "0x1"}, "2387": {"op": "PUSH1", "value": "0xA0"}, "2389": {"op": "SHL"}, "2390": {"op": "SUB"}, "2391": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2392": {"fn": "SimpleSwap.initiatePool", "offset": [1185, 1208], "op": "EQ", "path": "0"}, "2393": {"offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x974"}, "2396": {"offset": [1177, 1245], "op": "JUMPI", "path": "0"}, "2397": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x40"}, "2399": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "MLOAD", "path": "0"}, "2400": {"op": "PUSH3", "value": "0x461BCD"}, "2404": {"op": "PUSH1", "value": "0xE5"}, "2406": {"op": "SHL"}, "2407": {"offset": [1177, 1245], "op": "DUP2", "path": "0"}, "2408": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "MSTORE", "path": "0"}, "2409": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x4"}, "2411": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "ADD", "path": "0"}, "2412": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1A5"}, "2415": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "SWAP1", "path": "0"}, "2416": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1099"}, "2419": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1177, 1245], "op": "JUMP", "path": "0"}, "2420": {"fn": "SimpleSwap.initiatePool", "offset": [1177, 1245], "op": "JUMPDEST", "path": "0"}, "2421": {"fn": "SimpleSwap.initiatePool", "offset": [1315, 1332], "op": "PUSH1", "path": "3", "statement": 30, "value": "0x7"}, "2423": {"fn": "SimpleSwap.initiatePool", "offset": [1315, 1332], "op": "SLOAD", "path": "3"}, "2424": {"fn": "SimpleSwap.initiatePool", "offset": [1315, 1332], "op": "PUSH1", "path": "3", "value": "0xFF"}, "2426": {"fn": "SimpleSwap.initiatePool", "offset": [1315, 1332], "op": "AND", "path": "3"}, "2427": {"branch": 58, "fn": "SimpleSwap.initiatePool", "offset": [1314, 1332], "op": "ISZERO", "path": "3"}, "2428": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "PUSH2", "path": "3", "value": "0x997"}, "2431": {"branch": 58, "fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "JUMPI", "path": "3"}, "2432": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "PUSH1", "path": "3", "value": "0x40"}, "2434": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "MLOAD", "path": "3"}, "2435": {"op": "PUSH3", "value": "0x461BCD"}, "2439": {"op": "PUSH1", "value": "0xE5"}, "2441": {"op": "SHL"}, "2442": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "DUP2", "path": "3"}, "2443": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "MSTORE", "path": "3"}, "2444": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "PUSH1", "path": "3", "value": "0x4"}, "2446": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "ADD", "path": "3"}, "2447": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "2450": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "SWAP1", "path": "3"}, "2451": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "PUSH2", "path": "3", "value": "0x115A"}, "2454": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1306, 1370], "op": "JUMP", "path": "3"}, "2455": {"fn": "SimpleSwap.initiatePool", "offset": [1306, 1370], "op": "JUMPDEST", "path": "3"}, "2456": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1397], "op": "PUSH1", "path": "3", "statement": 31, "value": "0x7"}, "2458": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "DUP1", "path": "3"}, "2459": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "SLOAD", "path": "3"}, "2460": {"op": "PUSH1", "value": "0xFF"}, "2462": {"op": "NOT"}, "2463": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "AND", "path": "3"}, "2464": {"fn": "SimpleSwap.initiatePool", "offset": [1400, 1404], "op": "PUSH1", "path": "3", "value": "0x1"}, "2466": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "SWAP1", "path": "3"}, "2467": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "DUP2", "path": "3"}, "2468": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "OR", "path": "3"}, "2469": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "SWAP1", "path": "3"}, "2470": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "SWAP2", "path": "3"}, "2471": {"fn": "SimpleSwap.initiatePool", "offset": [1380, 1404], "op": "SSTORE", "path": "3"}, "2472": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "SLOAD", "path": "3"}, "2473": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "PUSH1", "path": "3", "value": "0x2"}, "2475": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "SLOAD", "path": "3"}, "2476": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "statement": 32, "value": "0x40"}, "2478": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "MLOAD", "path": "3"}, "2479": {"op": "PUSH4", "value": "0x23B872DD"}, "2484": {"op": "PUSH1", "value": "0xE0"}, "2486": {"op": "SHL"}, "2487": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP2", "path": "3"}, "2488": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "MSTORE", "path": "3"}, "2489": {"op": "PUSH1", "value": "0x1"}, "2491": {"op": "PUSH1", "value": "0x1"}, "2493": {"op": "PUSH1", "value": "0xA0"}, "2495": {"op": "SHL"}, "2496": {"op": "SUB"}, "2497": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "SWAP3", "path": "3"}, "2498": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "DUP4", "path": "3"}, "2499": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "AND", "path": "3"}, "2500": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "SWAP3", "path": "3"}, "2501": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "SWAP2", "path": "3"}, "2502": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "SWAP1", "path": "3"}, "2503": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "SWAP2", "path": "3"}, "2504": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "AND", "path": "3"}, "2505": {"fn": "SimpleSwap.initiatePool", "offset": [1479, 1490], "op": "SWAP1", "path": "3"}, "2506": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "DUP3", "path": "3"}, "2507": {"fn": "SimpleSwap.initiatePool", "offset": [1436, 1447], "op": "SWAP1", "path": "3"}, "2508": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1527], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "2513": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1527], "op": "SWAP1", "path": "3"}, "2514": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH2", "path": "3", "value": "0x9E3"}, "2517": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "SWAP1", "path": "3"}, "2518": {"fn": "SimpleSwap.initiatePool", "offset": [1528, 1538], "op": "CALLER", "path": "3"}, "2519": {"fn": "SimpleSwap.initiatePool", "offset": [1528, 1538], "op": "SWAP1", "path": "3"}, "2520": {"fn": "SimpleSwap.initiatePool", "offset": [1548, 1552], "op": "ADDRESS", "path": "3"}, "2521": {"fn": "SimpleSwap.initiatePool", "offset": [1548, 1552], "op": "SWAP1", "path": "3"}, "2522": {"fn": "SimpleSwap.initiatePool", "offset": [1555, 1573], "op": "DUP10", "path": "3"}, "2523": {"fn": "SimpleSwap.initiatePool", "offset": [1555, 1573], "op": "SWAP1", "path": "3"}, "2524": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x4"}, "2526": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ADD", "path": "3"}, "2527": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH2", "path": "3", "value": "0xDE6"}, "2530": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1510, 1574], "op": "JUMP", "path": "3"}, "2531": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "JUMPDEST", "path": "3"}, "2532": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x20"}, "2534": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x40"}, "2536": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "MLOAD", "path": "3"}, "2537": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2538": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP4", "path": "3"}, "2539": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "SUB", "path": "3"}, "2540": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP2", "path": "3"}, "2541": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x0"}, "2543": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP8", "path": "3"}, "2544": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2545": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "EXTCODESIZE", "path": "3"}, "2546": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ISZERO", "path": "3"}, "2547": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2548": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ISZERO", "path": "3"}, "2549": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH2", "path": "3", "value": "0x9FD"}, "2552": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "JUMPI", "path": "3"}, "2553": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x0"}, "2555": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2556": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "REVERT", "path": "3"}, "2557": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "JUMPDEST", "path": "3"}, "2558": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "POP", "path": "3"}, "2559": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "GAS", "path": "3"}, "2560": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "CALL", "path": "3"}, "2561": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ISZERO", "path": "3"}, "2562": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2563": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ISZERO", "path": "3"}, "2564": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH2", "path": "3", "value": "0xA11"}, "2567": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "JUMPI", "path": "3"}, "2568": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "RETURNDATASIZE", "path": "3"}, "2569": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x0"}, "2571": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2572": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "RETURNDATACOPY", "path": "3"}, "2573": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "RETURNDATASIZE", "path": "3"}, "2574": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x0"}, "2576": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "REVERT", "path": "3"}, "2577": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "JUMPDEST", "path": "3"}, "2578": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "POP", "path": "3"}, "2579": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "POP", "path": "3"}, "2580": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "POP", "path": "3"}, "2581": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "POP", "path": "3"}, "2582": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x40"}, "2584": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "MLOAD", "path": "3"}, "2585": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "RETURNDATASIZE", "path": "3"}, "2586": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2588": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "NOT", "path": "3"}, "2589": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2591": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP3", "path": "3"}, "2592": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ADD", "path": "3"}, "2593": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "AND", "path": "3"}, "2594": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP3", "path": "3"}, "2595": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ADD", "path": "3"}, "2596": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP1", "path": "3"}, "2597": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH1", "path": "3", "value": "0x40"}, "2599": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "MSTORE", "path": "3"}, "2600": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "POP", "path": "3"}, "2601": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "DUP2", "path": "3"}, "2602": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "ADD", "path": "3"}, "2603": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "SWAP1", "path": "3"}, "2604": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH2", "path": "3", "value": "0xA35"}, "2607": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "SWAP2", "path": "3"}, "2608": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "SWAP1", "path": "3"}, "2609": {"fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "PUSH2", "path": "3", "value": "0xD3E"}, "2612": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1510, 1574], "op": "JUMP", "path": "3"}, "2613": {"branch": 59, "fn": "SimpleSwap.initiatePool", "offset": [1510, 1574], "op": "JUMPDEST", "path": "3"}, "2614": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "PUSH2", "path": "3", "value": "0xA51"}, "2617": {"branch": 59, "fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "JUMPI", "path": "3"}, "2618": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "PUSH1", "path": "3", "value": "0x40"}, "2620": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "MLOAD", "path": "3"}, "2621": {"op": "PUSH3", "value": "0x461BCD"}, "2625": {"op": "PUSH1", "value": "0xE5"}, "2627": {"op": "SHL"}, "2628": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "DUP2", "path": "3"}, "2629": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "MSTORE", "path": "3"}, "2630": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "PUSH1", "path": "3", "value": "0x4"}, "2632": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "ADD", "path": "3"}, "2633": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "2636": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "SWAP1", "path": "3"}, "2637": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "PUSH2", "path": "3", "value": "0x119B"}, "2640": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1502, 1600], "op": "JUMP", "path": "3"}, "2641": {"fn": "SimpleSwap.initiatePool", "offset": [1502, 1600], "op": "JUMPDEST", "path": "3"}, "2642": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "statement": 33, "value": "0x40"}, "2644": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "MLOAD", "path": "3"}, "2645": {"op": "PUSH4", "value": "0x23B872DD"}, "2650": {"op": "PUSH1", "value": "0xE0"}, "2652": {"op": "SHL"}, "2653": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP2", "path": "3"}, "2654": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "MSTORE", "path": "3"}, "2655": {"op": "PUSH1", "value": "0x1"}, "2657": {"op": "PUSH1", "value": "0x1"}, "2659": {"op": "PUSH1", "value": "0xA0"}, "2661": {"op": "SHL"}, "2662": {"op": "SUB"}, "2663": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1635], "op": "DUP3", "path": "3"}, "2664": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1635], "op": "AND", "path": "3"}, "2665": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1635], "op": "SWAP1", "path": "3"}, "2666": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1635], "op": "PUSH4", "path": "3", "value": "0x23B872DD"}, "2671": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1635], "op": "SWAP1", "path": "3"}, "2672": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH2", "path": "3", "value": "0xA81"}, "2675": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "SWAP1", "path": "3"}, "2676": {"fn": "SimpleSwap.initiatePool", "offset": [1636, 1646], "op": "CALLER", "path": "3"}, "2677": {"fn": "SimpleSwap.initiatePool", "offset": [1636, 1646], "op": "SWAP1", "path": "3"}, "2678": {"fn": "SimpleSwap.initiatePool", "offset": [1656, 1660], "op": "ADDRESS", "path": "3"}, "2679": {"fn": "SimpleSwap.initiatePool", "offset": [1656, 1660], "op": "SWAP1", "path": "3"}, "2680": {"fn": "SimpleSwap.initiatePool", "offset": [1663, 1681], "op": "DUP9", "path": "3"}, "2681": {"fn": "SimpleSwap.initiatePool", "offset": [1663, 1681], "op": "SWAP1", "path": "3"}, "2682": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x4"}, "2684": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ADD", "path": "3"}, "2685": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH2", "path": "3", "value": "0xDE6"}, "2688": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1618, 1682], "op": "JUMP", "path": "3"}, "2689": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "JUMPDEST", "path": "3"}, "2690": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x20"}, "2692": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x40"}, "2694": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "MLOAD", "path": "3"}, "2695": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2696": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP4", "path": "3"}, "2697": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "SUB", "path": "3"}, "2698": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP2", "path": "3"}, "2699": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x0"}, "2701": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP8", "path": "3"}, "2702": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2703": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "EXTCODESIZE", "path": "3"}, "2704": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ISZERO", "path": "3"}, "2705": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2706": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ISZERO", "path": "3"}, "2707": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH2", "path": "3", "value": "0xA9B"}, "2710": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "JUMPI", "path": "3"}, "2711": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x0"}, "2713": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2714": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "REVERT", "path": "3"}, "2715": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "JUMPDEST", "path": "3"}, "2716": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "POP", "path": "3"}, "2717": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "GAS", "path": "3"}, "2718": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "CALL", "path": "3"}, "2719": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ISZERO", "path": "3"}, "2720": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2721": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ISZERO", "path": "3"}, "2722": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH2", "path": "3", "value": "0xAAF"}, "2725": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "JUMPI", "path": "3"}, "2726": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "RETURNDATASIZE", "path": "3"}, "2727": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x0"}, "2729": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2730": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "RETURNDATACOPY", "path": "3"}, "2731": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "RETURNDATASIZE", "path": "3"}, "2732": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x0"}, "2734": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "REVERT", "path": "3"}, "2735": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "JUMPDEST", "path": "3"}, "2736": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "POP", "path": "3"}, "2737": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "POP", "path": "3"}, "2738": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "POP", "path": "3"}, "2739": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "POP", "path": "3"}, "2740": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x40"}, "2742": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "MLOAD", "path": "3"}, "2743": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "RETURNDATASIZE", "path": "3"}, "2744": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2746": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "NOT", "path": "3"}, "2747": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x1F"}, "2749": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP3", "path": "3"}, "2750": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ADD", "path": "3"}, "2751": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "AND", "path": "3"}, "2752": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP3", "path": "3"}, "2753": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ADD", "path": "3"}, "2754": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP1", "path": "3"}, "2755": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH1", "path": "3", "value": "0x40"}, "2757": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "MSTORE", "path": "3"}, "2758": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "POP", "path": "3"}, "2759": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "DUP2", "path": "3"}, "2760": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "ADD", "path": "3"}, "2761": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "SWAP1", "path": "3"}, "2762": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH2", "path": "3", "value": "0xAD3"}, "2765": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "SWAP2", "path": "3"}, "2766": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "SWAP1", "path": "3"}, "2767": {"fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "PUSH2", "path": "3", "value": "0xD3E"}, "2770": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1618, 1682], "op": "JUMP", "path": "3"}, "2771": {"branch": 60, "fn": "SimpleSwap.initiatePool", "offset": [1618, 1682], "op": "JUMPDEST", "path": "3"}, "2772": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "PUSH2", "path": "3", "value": "0xAEF"}, "2775": {"branch": 60, "fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "JUMPI", "path": "3"}, "2776": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "PUSH1", "path": "3", "value": "0x40"}, "2778": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "MLOAD", "path": "3"}, "2779": {"op": "PUSH3", "value": "0x461BCD"}, "2783": {"op": "PUSH1", "value": "0xE5"}, "2785": {"op": "SHL"}, "2786": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "DUP2", "path": "3"}, "2787": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "MSTORE", "path": "3"}, "2788": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "PUSH1", "path": "3", "value": "0x4"}, "2790": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "ADD", "path": "3"}, "2791": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "PUSH2", "path": "3", "value": "0x1A5"}, "2794": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "SWAP1", "path": "3"}, "2795": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "PUSH2", "path": "3", "value": "0xEF2"}, "2798": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1610, 1708], "op": "JUMP", "path": "3"}, "2799": {"fn": "SimpleSwap.initiatePool", "offset": [1610, 1708], "op": "JUMPDEST", "path": "3"}, "2800": {"fn": "SimpleSwap.initiatePool", "offset": [1740, 1758], "op": "PUSH1", "path": "3", "statement": 34, "value": "0x3"}, "2802": {"fn": "SimpleSwap.initiatePool", "offset": [1740, 1758], "op": "SLOAD", "path": "3"}, "2803": {"fn": "SimpleSwap.initiatePool", "offset": [1740, 1782], "op": "PUSH2", "path": "3", "value": "0xAFC"}, "2806": {"fn": "SimpleSwap.initiatePool", "offset": [1740, 1782], "op": "SWAP1", "path": "3"}, "2807": {"fn": "SimpleSwap.initiatePool", "offset": [1763, 1781], "op": "DUP6", "path": "3"}, "2808": {"fn": "SimpleSwap.initiatePool", "offset": [1740, 1762], "op": "PUSH2", "path": "3", "value": "0xBE0"}, "2811": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1740, 1782], "op": "JUMP", "path": "3"}, "2812": {"fn": "SimpleSwap.initiatePool", "offset": [1740, 1782], "op": "JUMPDEST", "path": "3"}, "2813": {"fn": "SimpleSwap.initiatePool", "offset": [1719, 1737], "op": "PUSH1", "path": "3", "value": "0x3"}, "2815": {"fn": "SimpleSwap.initiatePool", "offset": [1719, 1782], "op": "SSTORE", "path": "3"}, "2816": {"fn": "SimpleSwap.initiatePool", "offset": [1813, 1831], "op": "PUSH1", "path": "3", "statement": 35, "value": "0x4"}, "2818": {"fn": "SimpleSwap.initiatePool", "offset": [1813, 1831], "op": "SLOAD", "path": "3"}, "2819": {"fn": "SimpleSwap.initiatePool", "offset": [1813, 1855], "op": "PUSH2", "path": "3", "value": "0xB0C"}, "2822": {"fn": "SimpleSwap.initiatePool", "offset": [1813, 1855], "op": "SWAP1", "path": "3"}, "2823": {"fn": "SimpleSwap.initiatePool", "offset": [1836, 1854], "op": "DUP5", "path": "3"}, "2824": {"fn": "SimpleSwap.initiatePool", "offset": [1813, 1835], "op": "PUSH2", "path": "3", "value": "0xBE0"}, "2827": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1813, 1855], "op": "JUMP", "path": "3"}, "2828": {"fn": "SimpleSwap.initiatePool", "offset": [1813, 1855], "op": "JUMPDEST", "path": "3"}, "2829": {"fn": "SimpleSwap.initiatePool", "offset": [1792, 1810], "op": "PUSH1", "path": "3", "value": "0x4"}, "2831": {"fn": "SimpleSwap.initiatePool", "offset": [1792, 1855], "op": "SSTORE", "path": "3"}, "2832": {"fn": "SimpleSwap.initiatePool", "offset": [1866, 1879], "op": "PUSH1", "path": "3", "statement": 36, "value": "0x5"}, "2834": {"fn": "SimpleSwap.initiatePool", "offset": [1866, 1900], "op": "DUP4", "path": "3"}, "2835": {"fn": "SimpleSwap.initiatePool", "offset": [1866, 1900], "op": "SWAP1", "path": "3"}, "2836": {"fn": "SimpleSwap.initiatePool", "offset": [1866, 1900], "op": "SSTORE", "path": "3"}, "2837": {"fn": "SimpleSwap.initiatePool", "offset": [1967, 1977], "op": "CALLER", "path": "3", "statement": 37}, "2838": {"op": "PUSH1", "value": "0x0"}, "2840": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "SWAP1", "path": "3"}, "2841": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "DUP2", "path": "3"}, "2842": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "MSTORE", "path": "3"}, "2843": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1966], "op": "PUSH1", "path": "3", "value": "0x8"}, "2845": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "PUSH1", "path": "3", "value": "0x20"}, "2847": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "MSTORE", "path": "3"}, "2848": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "PUSH1", "path": "3", "value": "0x40"}, "2850": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "SWAP1", "path": "3"}, "2851": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "KECCAK256", "path": "3"}, "2852": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1978], "op": "SLOAD", "path": "3"}, "2853": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1997], "op": "PUSH2", "path": "3", "value": "0xB2E"}, "2856": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1997], "op": "SWAP1", "path": "3"}, "2857": {"fn": "SimpleSwap.initiatePool", "offset": [1882, 1900], "op": "DUP5", "path": "3"}, "2858": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1982], "op": "PUSH2", "path": "3", "value": "0xBE0"}, "2861": {"fn": "SimpleSwap.initiatePool", "jump": "i", "offset": [1946, 1997], "op": "JUMP", "path": "3"}, "2862": {"fn": "SimpleSwap.initiatePool", "offset": [1946, 1997], "op": "JUMPDEST", "path": "3"}, "2863": {"fn": "SimpleSwap.initiatePool", "offset": [1932, 1942], "op": "CALLER", "path": "3"}, "2864": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "PUSH1", "path": "3", "value": "0x0"}, "2866": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "SWAP1", "path": "3"}, "2867": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "DUP2", "path": "3"}, "2868": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "MSTORE", "path": "3"}, "2869": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1931], "op": "PUSH1", "path": "3", "value": "0x8"}, "2871": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "PUSH1", "path": "3", "value": "0x20"}, "2873": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "MSTORE", "path": "3"}, "2874": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "PUSH1", "path": "3", "value": "0x40"}, "2876": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "SWAP1", "path": "3"}, "2877": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1943], "op": "KECCAK256", "path": "3"}, "2878": {"fn": "SimpleSwap.initiatePool", "offset": [1911, 1997], "op": "SSTORE", "path": "3"}, "2879": {"op": "POP"}, "2880": {"op": "POP"}, "2881": {"op": "POP"}, "2882": {"op": "POP"}, "2883": {"fn": "SimpleSwap.initiatePool", "jump": "o", "offset": [1201, 2004], "op": "JUMP", "path": "3"}, "2884": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "JUMPDEST", "path": "0"}, "2885": {"offset": [1196, 1208], "op": "PUSH2", "path": "0", "value": "0xB4C"}, "2888": {"offset": [1196, 1206], "op": "PUSH2", "path": "0", "value": "0xCC3"}, "2891": {"jump": "i", "offset": [1196, 1208], "op": "JUMP", "path": "0"}, "2892": {"fn": "Ownable.transferOwnership", "offset": [1196, 1208], "op": "JUMPDEST", "path": "0"}, "2893": {"op": "PUSH1", "value": "0x1"}, "2895": {"op": "PUSH1", "value": "0x1"}, "2897": {"op": "PUSH1", "value": "0xA0"}, "2899": {"op": "SHL"}, "2900": {"op": "SUB"}, "2901": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2902": {"offset": [1185, 1192], "op": "PUSH2", "path": "0", "value": "0xB5D"}, "2905": {"offset": [1185, 1190], "op": "PUSH2", "path": "0", "value": "0x91A"}, "2908": {"jump": "i", "offset": [1185, 1192], "op": "JUMP", "path": "0"}, "2909": {"fn": "Ownable.transferOwnership", "offset": [1185, 1192], "op": "JUMPDEST", "path": "0"}, "2910": {"op": "PUSH1", "value": "0x1"}, "2912": {"op": "PUSH1", "value": "0x1"}, "2914": {"op": "PUSH1", "value": "0xA0"}, "2916": {"op": "SHL"}, "2917": {"op": "SUB"}, "2918": {"offset": [1185, 1208], "op": "AND", "path": "0"}, "2919": {"branch": 61, "fn": "Ownable.transferOwnership", "offset": [1185, 1208], "op": "EQ", "path": "0"}, "2920": {"offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0xB83"}, "2923": {"branch": 61, "offset": [1177, 1245], "op": "JUMPI", "path": "0"}, "2924": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x40"}, "2926": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "MLOAD", "path": "0"}, "2927": {"op": "PUSH3", "value": "0x461BCD"}, "2931": {"op": "PUSH1", "value": "0xE5"}, "2933": {"op": "SHL"}, "2934": {"offset": [1177, 1245], "op": "DUP2", "path": "0"}, "2935": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "MSTORE", "path": "0"}, "2936": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "PUSH1", "path": "0", "value": "0x4"}, "2938": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "ADD", "path": "0"}, "2939": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1A5"}, "2942": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "SWAP1", "path": "0"}, "2943": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "PUSH2", "path": "0", "value": "0x1099"}, "2946": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [1177, 1245], "op": "JUMP", "path": "0"}, "2947": {"fn": "Ownable.transferOwnership", "offset": [1177, 1245], "op": "JUMPDEST", "path": "0"}, "2948": {"op": "PUSH1", "value": "0x1"}, "2950": {"op": "PUSH1", "value": "0x1"}, "2952": {"op": "PUSH1", "value": "0xA0"}, "2954": {"op": "SHL"}, "2955": {"op": "SUB"}, "2956": {"fn": "Ownable.transferOwnership", "offset": [1934, 1956], "op": "DUP2", "path": "0", "statement": 38}, "2957": {"branch": 62, "fn": "Ownable.transferOwnership", "offset": [1934, 1956], "op": "AND", "path": "0"}, "2958": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH2", "path": "0", "value": "0xBA9"}, "2961": {"branch": 62, "fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "JUMPI", "path": "0"}, "2962": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH1", "path": "0", "value": "0x40"}, "2964": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "MLOAD", "path": "0"}, "2965": {"op": "PUSH3", "value": "0x461BCD"}, "2969": {"op": "PUSH1", "value": "0xE5"}, "2971": {"op": "SHL"}, "2972": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "DUP2", "path": "0"}, "2973": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "MSTORE", "path": "0"}, "2974": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH1", "path": "0", "value": "0x4"}, "2976": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "ADD", "path": "0"}, "2977": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH2", "path": "0", "value": "0x1A5"}, "2980": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "SWAP1", "path": "0"}, "2981": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "PUSH2", "path": "0", "value": "0xE77"}, "2984": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [1926, 1999], "op": "JUMP", "path": "0"}, "2985": {"fn": "Ownable.transferOwnership", "offset": [1926, 1999], "op": "JUMPDEST", "path": "0"}, "2986": {"fn": "Ownable.transferOwnership", "offset": [2009, 2028], "op": "PUSH2", "path": "0", "statement": 39, "value": "0xBB2"}, "2989": {"fn": "Ownable.transferOwnership", "offset": [2019, 2027], "op": "DUP2", "path": "0"}, "2990": {"fn": "Ownable.transferOwnership", "offset": [2009, 2018], "op": "PUSH2", "path": "0", "value": "0xCC7"}, "2993": {"fn": "Ownable.transferOwnership", "jump": "i", "offset": [2009, 2028], "op": "JUMP", "path": "0"}, "2994": {"fn": "Ownable.transferOwnership", "offset": [2009, 2028], "op": "JUMPDEST", "path": "0"}, "2995": {"fn": "Ownable.transferOwnership", "offset": [1846, 2035], "op": "POP", "path": "0"}, "2996": {"fn": "Ownable.transferOwnership", "jump": "o", "offset": [1846, 2035], "op": "JUMP", "path": "0"}, "2997": {"fn": "SafeMath.mul", "offset": [3382, 3478], "op": "JUMPDEST", "path": "2"}, "2998": {"fn": "SafeMath.mul", "offset": [3440, 3447], "op": "PUSH1", "path": "2", "value": "0x0"}, "3000": {"fn": "SafeMath.mul", "offset": [3466, 3471], "op": "PUSH2", "path": "2", "statement": 40, "value": "0xBC1"}, "3003": {"fn": "SafeMath.mul", "offset": [3470, 3471], "op": "DUP3", "path": "2"}, "3004": {"fn": "SafeMath.mul", "offset": [3466, 3467], "op": "DUP5", "path": "2"}, "3005": {"fn": "SafeMath.mul", "offset": [3466, 3471], "op": "PUSH2", "path": "2", "value": "0x1219"}, "3008": {"fn": "SafeMath.mul", "jump": "i", "offset": [3466, 3471], "op": "JUMP", "path": "2"}, "3009": {"fn": "SafeMath.mul", "offset": [3466, 3471], "op": "JUMPDEST", "path": "2"}, "3010": {"fn": "SafeMath.mul", "offset": [3459, 3471], "op": "SWAP4", "path": "2"}, "3011": {"fn": "SafeMath.mul", "offset": [3382, 3478], "op": "SWAP3", "path": "2"}, "3012": {"op": "POP"}, "3013": {"op": "POP"}, "3014": {"op": "POP"}, "3015": {"fn": "SafeMath.mul", "jump": "o", "offset": [3382, 3478], "op": "JUMP", "path": "2"}, "3016": {"fn": "SafeMath.div", "offset": [3767, 3863], "op": "JUMPDEST", "path": "2"}, "3017": {"fn": "SafeMath.div", "offset": [3825, 3832], "op": "PUSH1", "path": "2", "value": "0x0"}, "3019": {"fn": "SafeMath.div", "offset": [3851, 3856], "op": "PUSH2", "path": "2", "statement": 41, "value": "0xBC1"}, "3022": {"fn": "SafeMath.div", "offset": [3855, 3856], "op": "DUP3", "path": "2"}, "3023": {"fn": "SafeMath.div", "offset": [3851, 3852], "op": "DUP5", "path": "2"}, "3024": {"fn": "SafeMath.div", "offset": [3851, 3856], "op": "PUSH2", "path": "2", "value": "0x11F9"}, "3027": {"fn": "SafeMath.div", "jump": "i", "offset": [3851, 3856], "op": "JUMP", "path": "2"}, "3028": {"fn": "SafeMath.sub", "offset": [3039, 3135], "op": "JUMPDEST", "path": "2"}, "3029": {"fn": "SafeMath.sub", "offset": [3097, 3104], "op": "PUSH1", "path": "2", "value": "0x0"}, "3031": {"fn": "SafeMath.sub", "offset": [3123, 3128], "op": "PUSH2", "path": "2", "statement": 42, "value": "0xBC1"}, "3034": {"fn": "SafeMath.sub", "offset": [3127, 3128], "op": "DUP3", "path": "2"}, "3035": {"fn": "SafeMath.sub", "offset": [3123, 3124], "op": "DUP5", "path": "2"}, "3036": {"fn": "SafeMath.sub", "offset": [3123, 3128], "op": "PUSH2", "path": "2", "value": "0x1238"}, "3039": {"fn": "SafeMath.sub", "jump": "i", "offset": [3123, 3128], "op": "JUMP", "path": "2"}, "3040": {"fn": "SafeMath.add", "offset": [2672, 2768], "op": "JUMPDEST", "path": "2"}, "3041": {"fn": "SafeMath.add", "offset": [2730, 2737], "op": "PUSH1", "path": "2", "value": "0x0"}, "3043": {"fn": "SafeMath.add", "offset": [2756, 2761], "op": "PUSH2", "path": "2", "statement": 43, "value": "0xBC1"}, "3046": {"fn": "SafeMath.add", "offset": [2760, 2761], "op": "DUP3", "path": "2"}, "3047": {"fn": "SafeMath.add", "offset": [2756, 2757], "op": "DUP5", "path": "2"}, "3048": {"fn": "SafeMath.add", "offset": [2756, 2761], "op": "PUSH2", "path": "2", "value": "0x11E1"}, "3051": {"fn": "SafeMath.add", "jump": "i", "offset": [2756, 2761], "op": "JUMP", "path": "2"}, "3052": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5940, 6503], "op": "JUMPDEST", "path": "3"}, "3053": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6041, 6048], "op": "PUSH1", "path": "3", "value": "0x0"}, "3055": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6041, 6048], "op": "DUP1", "path": "3"}, "3056": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6041, 6048], "op": "DUP1", "path": "3"}, "3057": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6089], "op": "DUP4", "path": "3"}, "3058": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "PUSH1", "path": "3", "value": "0x1"}, "3060": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "DUP2", "path": "3"}, "3061": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "GT", "path": "3"}, "3062": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "ISZERO", "path": "3"}, "3063": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "PUSH2", "path": "3", "value": "0xC10"}, "3066": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "JUMPI", "path": "3"}, "3067": {"op": "PUSH4", "value": "0x4E487B71"}, "3072": {"op": "PUSH1", "value": "0xE0"}, "3074": {"op": "SHL"}, "3075": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "PUSH1", "path": "3", "value": "0x0"}, "3077": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "MSTORE", "path": "3"}, "3078": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "PUSH1", "path": "3", "value": "0x21"}, "3080": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "PUSH1", "path": "3", "value": "0x4"}, "3082": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "MSTORE", "path": "3"}, "3083": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "PUSH1", "path": "3", "value": "0x24"}, "3085": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "PUSH1", "path": "3", "value": "0x0"}, "3087": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "REVERT", "path": "3"}, "3088": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "JUMPDEST", "path": "3"}, "3089": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6077, 6103], "op": "EQ", "path": "3"}, "3090": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6076, 6146], "op": "PUSH2", "path": "3", "value": "0xC1D"}, "3093": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6076, 6146], "op": "JUMPI", "path": "3"}, "3094": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6128, 6146], "op": "PUSH1", "path": "3", "value": "0x3"}, "3096": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6128, 6146], "op": "SLOAD", "path": "3"}, "3097": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6076, 6146], "op": "PUSH2", "path": "3", "value": "0xC21"}, "3100": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6076, 6146], "op": "JUMP", "path": "3"}, "3101": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6076, 6146], "op": "JUMPDEST", "path": "3"}, "3102": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6107, 6125], "op": "PUSH1", "path": "3", "value": "0x4"}, "3104": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6107, 6125], "op": "SLOAD", "path": "3"}, "3105": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6076, 6146], "op": "JUMPDEST", "path": "3"}, "3106": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6064, 6146], "op": "SWAP1", "path": "3"}, "3107": {"op": "POP"}, "3108": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6156, 6165], "op": "PUSH1", "path": "3", "value": "0x0"}, "3110": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6156, 6165], "op": "DUP1", "path": "3"}, "3111": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6181], "op": "DUP5", "path": "3"}, "3112": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "PUSH1", "path": "3", "value": "0x1"}, "3114": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "DUP2", "path": "3"}, "3115": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "GT", "path": "3"}, "3116": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "ISZERO", "path": "3"}, "3117": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "PUSH2", "path": "3", "value": "0xC46"}, "3120": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "JUMPI", "path": "3"}, "3121": {"op": "PUSH4", "value": "0x4E487B71"}, "3126": {"op": "PUSH1", "value": "0xE0"}, "3128": {"op": "SHL"}, "3129": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "PUSH1", "path": "3", "value": "0x0"}, "3131": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "MSTORE", "path": "3"}, "3132": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "PUSH1", "path": "3", "value": "0x21"}, "3134": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "PUSH1", "path": "3", "value": "0x4"}, "3136": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "MSTORE", "path": "3"}, "3137": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "PUSH1", "path": "3", "value": "0x24"}, "3139": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "PUSH1", "path": "3", "value": "0x0"}, "3141": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "REVERT", "path": "3"}, "3142": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "JUMPDEST", "path": "3"}, "3143": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6169, 6195], "op": "EQ", "path": "3"}, "3144": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6168, 6238], "op": "PUSH2", "path": "3", "value": "0xC53"}, "3147": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6168, 6238], "op": "JUMPI", "path": "3"}, "3148": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6220, 6238], "op": "PUSH1", "path": "3", "value": "0x4"}, "3150": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6220, 6238], "op": "SLOAD", "path": "3"}, "3151": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6168, 6238], "op": "PUSH2", "path": "3", "value": "0xC57"}, "3154": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6168, 6238], "op": "JUMP", "path": "3"}, "3155": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6168, 6238], "op": "JUMPDEST", "path": "3"}, "3156": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6199, 6217], "op": "PUSH1", "path": "3", "value": "0x3"}, "3158": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6199, 6217], "op": "SLOAD", "path": "3"}, "3159": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6168, 6238], "op": "JUMPDEST", "path": "3"}, "3160": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6156, 6238], "op": "SWAP1", "path": "3"}, "3161": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6156, 6238], "op": "POP", "path": "3"}, "3162": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6249, 6258], "op": "PUSH1", "path": "3", "value": "0x0"}, "3164": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6261, 6303], "op": "PUSH2", "path": "3", "value": "0xC72"}, "3167": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6284, 6302], "op": "PUSH1", "path": "3", "value": "0x3"}, "3169": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6284, 6302], "op": "SLOAD", "path": "3"}, "3170": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6261, 6279], "op": "PUSH1", "path": "3", "value": "0x4"}, "3172": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6261, 6279], "op": "SLOAD", "path": "3"}, "3173": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6261, 6283], "op": "PUSH2", "path": "3", "value": "0xBB5"}, "3176": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6261, 6283], "op": "SWAP1", "path": "3"}, "3177": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6261, 6303], "op": "SWAP2", "path": "3"}, "3178": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6261, 6303], "op": "SWAP1", "path": "3"}, "3179": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6261, 6303], "op": "PUSH4", "path": "3", "value": "0xFFFFFFFF"}, "3184": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6261, 6303], "op": "AND", "path": "3"}, "3185": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6261, 6303], "op": "JUMP", "path": "3"}, "3186": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6261, 6303], "op": "JUMPDEST", "path": "3"}, "3187": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6249, 6303], "op": "SWAP1", "path": "3"}, "3188": {"op": "POP"}, "3189": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6336, 6365], "op": "PUSH1", "path": "3", "value": "0x0"}, "3191": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6368, 6405], "op": "PUSH2", "path": "3", "value": "0xC94"}, "3194": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6374, 6404], "op": "PUSH2", "path": "3", "value": "0xC8D"}, "3197": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6380, 6403], "op": "PUSH2", "path": "3", "value": "0xC86"}, "3200": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6380, 6381], "op": "DUP6", "path": "3"}, "3201": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6386, 6402], "op": "DUP11", "path": "3"}, "3202": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6380, 6385], "op": "PUSH2", "path": "3", "value": "0xBE0"}, "3205": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6380, 6403], "op": "JUMP", "path": "3"}, "3206": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6380, 6403], "op": "JUMPDEST", "path": "3"}, "3207": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6374, 6375], "op": "DUP5", "path": "3"}, "3208": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6374, 6375], "op": "SWAP1", "path": "3"}, "3209": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6374, 6379], "op": "PUSH2", "path": "3", "value": "0xBC8"}, "3212": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6374, 6404], "op": "JUMP", "path": "3"}, "3213": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6374, 6404], "op": "JUMPDEST", "path": "3"}, "3214": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6368, 6369], "op": "DUP6", "path": "3"}, "3215": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6368, 6369], "op": "SWAP1", "path": "3"}, "3216": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6368, 6373], "op": "PUSH2", "path": "3", "value": "0xBD4"}, "3219": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6368, 6405], "op": "JUMP", "path": "3"}, "3220": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6368, 6405], "op": "JUMPDEST", "path": "3"}, "3221": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6336, 6405], "op": "SWAP1", "path": "3"}, "3222": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6336, 6405], "op": "POP", "path": "3"}, "3223": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6443, 6496], "op": "PUSH2", "path": "3", "statement": 44, "value": "0xCB8"}, "3226": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6488, 6495], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "3230": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6443, 6483], "op": "PUSH2", "path": "3", "value": "0x220"}, "3233": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6479, 6482], "op": "PUSH1", "path": "3", "value": "0x6"}, "3235": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6479, 6482], "op": "SLOAD", "path": "3"}, "3236": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6469, 6476], "op": "PUSH3", "path": "3", "value": "0xF4240"}, "3240": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6469, 6482], "op": "PUSH2", "path": "3", "value": "0xCB1"}, "3243": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6469, 6482], "op": "SWAP2", "path": "3"}, "3244": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6469, 6482], "op": "SWAP1", "path": "3"}, "3245": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6469, 6482], "op": "PUSH2", "path": "3", "value": "0x1238"}, "3248": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6469, 6482], "op": "JUMP", "path": "3"}, "3249": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6469, 6482], "op": "JUMPDEST", "path": "3"}, "3250": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6443, 6464], "op": "DUP5", "path": "3"}, "3251": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6443, 6464], "op": "SWAP1", "path": "3"}, "3252": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6443, 6468], "op": "PUSH2", "path": "3", "value": "0xBB5"}, "3255": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "i", "offset": [6443, 6483], "op": "JUMP", "path": "3"}, "3256": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6443, 6496], "op": "JUMPDEST", "path": "3"}, "3257": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [6436, 6496], "op": "SWAP8", "path": "3"}, "3258": {"fn": "SimpleSwap.getAmountPurchasedToken", "offset": [5940, 6503], "op": "SWAP7", "path": "3"}, "3259": {"op": "POP"}, "3260": {"op": "POP"}, "3261": {"op": "POP"}, "3262": {"op": "POP"}, "3263": {"op": "POP"}, "3264": {"op": "POP"}, "3265": {"op": "POP"}, "3266": {"fn": "SimpleSwap.getAmountPurchasedToken", "jump": "o", "offset": [5940, 6503], "op": "JUMP", "path": "3"}, "3267": {"fn": "Context._msgSender", "offset": [586, 682], "op": "JUMPDEST", "path": "1"}, "3268": {"fn": "Context._msgSender", "offset": [665, 675], "op": "CALLER", "path": "1", "statement": 45}, "3269": {"fn": "Context._msgSender", "offset": [586, 682], "op": "SWAP1", "path": "1"}, "3270": {"fn": "Context._msgSender", "jump": "o", "offset": [586, 682], "op": "JUMP", "path": "1"}, "3271": {"fn": "Ownable._setOwner", "offset": [2041, 2210], "op": "JUMPDEST", "path": "0"}, "3272": {"fn": "Ownable._setOwner", "offset": [2096, 2112], "op": "PUSH1", "path": "0", "value": "0x0"}, "3274": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "DUP1", "path": "0"}, "3275": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SLOAD", "path": "0"}, "3276": {"op": "PUSH1", "value": "0x1"}, "3278": {"op": "PUSH1", "value": "0x1"}, "3280": {"op": "PUSH1", "value": "0xA0"}, "3282": {"op": "SHL"}, "3283": {"op": "SUB"}, "3284": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP4", "path": "0", "statement": 46}, "3285": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP2", "path": "0"}, "3286": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "AND", "path": "0"}, "3287": {"op": "PUSH1", "value": "0x1"}, "3289": {"op": "PUSH1", "value": "0x1"}, "3291": {"op": "PUSH1", "value": "0xA0"}, "3293": {"op": "SHL"}, "3294": {"op": "SUB"}, "3295": {"op": "NOT"}, "3296": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP4", "path": "0"}, "3297": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "AND", "path": "0"}, "3298": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP2", "path": "0"}, "3299": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "OR", "path": "0"}, "3300": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "DUP5", "path": "0"}, "3301": {"fn": "Ownable._setOwner", "offset": [2131, 2148], "op": "SSTORE", "path": "0"}, "3302": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "PUSH1", "path": "0", "statement": 47, "value": "0x40"}, "3304": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "MLOAD", "path": "0"}, "3305": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP2", "path": "0"}, "3306": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP1", "path": "0"}, "3307": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP3", "path": "0"}, "3308": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "AND", "path": "0"}, "3309": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP3", "path": "0"}, "3310": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "DUP4", "path": "0"}, "3311": {"fn": "Ownable._setOwner", "offset": [2115, 2121], "op": "SWAP2", "path": "0"}, "3312": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "PUSH32", "path": "0", "value": "0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0"}, "3345": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "SWAP2", "path": "0"}, "3346": {"fn": "Ownable._setOwner", "offset": [2096, 2112], "op": "SWAP1", "path": "0"}, "3347": {"fn": "Ownable._setOwner", "offset": [2163, 2203], "op": "LOG3", "path": "0"}, "3348": {"fn": "Ownable._setOwner", "offset": [2041, 2210], "op": "POP", "path": "0"}, "3349": {"fn": "Ownable._setOwner", "offset": [2041, 2210], "op": "POP", "path": "0"}, "3350": {"fn": "Ownable._setOwner", "jump": "o", "offset": [2041, 2210], "op": "JUMP", "path": "0"}, "3351": {"op": "JUMPDEST"}, "3352": {"op": "PUSH1", "value": "0x0"}, "3354": {"op": "PUSH1", "value": "0x20"}, "3356": {"op": "DUP3"}, "3357": {"op": "DUP5"}, "3358": {"op": "SUB"}, "3359": {"op": "SLT"}, "3360": {"op": "ISZERO"}, "3361": {"op": "PUSH2", "value": "0xD28"}, "3364": {"op": "JUMPI"}, "3365": {"op": "DUP1"}, "3366": {"op": "DUP2"}, "3367": {"op": "REVERT"}, "3368": {"op": "JUMPDEST"}, "3369": {"op": "DUP2"}, "3370": {"op": "CALLDATALOAD"}, "3371": {"op": "PUSH1", "value": "0x1"}, "3373": {"op": "PUSH1", "value": "0x1"}, "3375": {"op": "PUSH1", "value": "0xA0"}, "3377": {"op": "SHL"}, "3378": {"op": "SUB"}, "3379": {"op": "DUP2"}, "3380": {"op": "AND"}, "3381": {"op": "DUP2"}, "3382": {"op": "EQ"}, "3383": {"op": "PUSH2", "value": "0xBC1"}, "3386": {"op": "JUMPI"}, "3387": {"op": "DUP2"}, "3388": {"op": "DUP3"}, "3389": {"op": "REVERT"}, "3390": {"op": "JUMPDEST"}, "3391": {"op": "PUSH1", "value": "0x0"}, "3393": {"op": "PUSH1", "value": "0x20"}, "3395": {"op": "DUP3"}, "3396": {"op": "DUP5"}, "3397": {"op": "SUB"}, "3398": {"op": "SLT"}, "3399": {"op": "ISZERO"}, "3400": {"op": "PUSH2", "value": "0xD4F"}, "3403": {"op": "JUMPI"}, "3404": {"op": "DUP1"}, "3405": {"op": "DUP2"}, "3406": {"op": "REVERT"}, "3407": {"op": "JUMPDEST"}, "3408": {"op": "DUP2"}, "3409": {"op": "MLOAD"}, "3410": {"op": "DUP1"}, "3411": {"op": "ISZERO"}, "3412": {"op": "ISZERO"}, "3413": {"op": "DUP2"}, "3414": {"op": "EQ"}, "3415": {"op": "PUSH2", "value": "0xBC1"}, "3418": {"op": "JUMPI"}, "3419": {"op": "DUP2"}, "3420": {"op": "DUP3"}, "3421": {"op": "REVERT"}, "3422": {"op": "JUMPDEST"}, "3423": {"op": "PUSH1", "value": "0x0"}, "3425": {"op": "PUSH1", "value": "0x20"}, "3427": {"op": "DUP3"}, "3428": {"op": "DUP5"}, "3429": {"op": "SUB"}, "3430": {"op": "SLT"}, "3431": {"op": "ISZERO"}, "3432": {"op": "PUSH2", "value": "0xD6F"}, "3435": {"op": "JUMPI"}, "3436": {"op": "DUP1"}, "3437": {"op": "DUP2"}, "3438": {"op": "REVERT"}, "3439": {"op": "JUMPDEST"}, "3440": {"op": "POP"}, "3441": {"op": "CALLDATALOAD"}, "3442": {"op": "SWAP2"}, "3443": {"op": "SWAP1"}, "3444": {"op": "POP"}, "3445": {"jump": "o", "op": "JUMP"}, "3446": {"op": "JUMPDEST"}, "3447": {"op": "PUSH1", "value": "0x0"}, "3449": {"op": "DUP1"}, "3450": {"op": "PUSH1", "value": "0x40"}, "3452": {"op": "DUP4"}, "3453": {"op": "DUP6"}, "3454": {"op": "SUB"}, "3455": {"op": "SLT"}, "3456": {"op": "ISZERO"}, "3457": {"op": "PUSH2", "value": "0xD88"}, "3460": {"op": "JUMPI"}, "3461": {"op": "DUP1"}, "3462": {"op": "DUP2"}, "3463": {"op": "REVERT"}, "3464": {"op": "JUMPDEST"}, "3465": {"op": "POP"}, "3466": {"op": "POP"}, "3467": {"op": "DUP1"}, "3468": {"op": "CALLDATALOAD"}, "3469": {"op": "SWAP3"}, "3470": {"op": "PUSH1", "value": "0x20"}, "3472": {"op": "SWAP1"}, "3473": {"op": "SWAP2"}, "3474": {"op": "ADD"}, "3475": {"op": "CALLDATALOAD"}, "3476": {"op": "SWAP2"}, "3477": {"op": "POP"}, "3478": {"jump": "o", "op": "JUMP"}, "3479": {"op": "JUMPDEST"}, "3480": {"op": "PUSH1", "value": "0x0"}, "3482": {"op": "DUP1"}, "3483": {"op": "PUSH1", "value": "0x0"}, "3485": {"op": "PUSH1", "value": "0x60"}, "3487": {"op": "DUP5"}, "3488": {"op": "DUP7"}, "3489": {"op": "SUB"}, "3490": {"op": "SLT"}, "3491": {"op": "ISZERO"}, "3492": {"op": "PUSH2", "value": "0xDAB"}, "3495": {"op": "JUMPI"}, "3496": {"op": "DUP1"}, "3497": {"op": "DUP2"}, "3498": {"op": "REVERT"}, "3499": {"op": "JUMPDEST"}, "3500": {"op": "DUP4"}, "3501": {"op": "CALLDATALOAD"}, "3502": {"op": "SWAP3"}, "3503": {"op": "POP"}, "3504": {"op": "PUSH1", "value": "0x20"}, "3506": {"op": "DUP5"}, "3507": {"op": "ADD"}, "3508": {"op": "CALLDATALOAD"}, "3509": {"op": "SWAP2"}, "3510": {"op": "POP"}, "3511": {"op": "PUSH1", "value": "0x40"}, "3513": {"op": "DUP5"}, "3514": {"op": "ADD"}, "3515": {"op": "CALLDATALOAD"}, "3516": {"op": "PUSH1", "value": "0x2"}, "3518": {"op": "DUP2"}, "3519": {"op": "LT"}, "3520": {"op": "PUSH2", "value": "0xDC7"}, "3523": {"op": "JUMPI"}, "3524": {"op": "DUP2"}, "3525": {"op": "DUP3"}, "3526": {"op": "REVERT"}, "3527": {"op": "JUMPDEST"}, "3528": {"op": "DUP1"}, "3529": {"op": "SWAP2"}, "3530": {"op": "POP"}, "3531": {"op": "POP"}, "3532": {"op": "SWAP3"}, "3533": {"op": "POP"}, "3534": {"op": "SWAP3"}, "3535": {"op": "POP"}, "3536": {"op": "SWAP3"}, "3537": {"jump": "o", "op": "JUMP"}, "3538": {"op": "JUMPDEST"}, "3539": {"op": "PUSH1", "value": "0x1"}, "3541": {"op": "PUSH1", "value": "0x1"}, "3543": {"op": "PUSH1", "value": "0xA0"}, "3545": {"op": "SHL"}, "3546": {"op": "SUB"}, "3547": {"op": "SWAP2"}, "3548": {"op": "SWAP1"}, "3549": {"op": "SWAP2"}, "3550": {"op": "AND"}, "3551": {"op": "DUP2"}, "3552": {"op": "MSTORE"}, "3553": {"op": "PUSH1", "value": "0x20"}, "3555": {"op": "ADD"}, "3556": {"op": "SWAP1"}, "3557": {"jump": "o", "op": "JUMP"}, "3558": {"op": "JUMPDEST"}, "3559": {"op": "PUSH1", "value": "0x1"}, "3561": {"op": "PUSH1", "value": "0x1"}, "3563": {"op": "PUSH1", "value": "0xA0"}, "3565": {"op": "SHL"}, "3566": {"op": "SUB"}, "3567": {"op": "SWAP4"}, "3568": {"op": "DUP5"}, "3569": {"op": "AND"}, "3570": {"op": "DUP2"}, "3571": {"op": "MSTORE"}, "3572": {"op": "SWAP2"}, "3573": {"op": "SWAP1"}, "3574": {"op": "SWAP3"}, "3575": {"op": "AND"}, "3576": {"op": "PUSH1", "value": "0x20"}, "3578": {"op": "DUP3"}, "3579": {"op": "ADD"}, "3580": {"op": "MSTORE"}, "3581": {"op": "PUSH1", "value": "0x40"}, "3583": {"op": "DUP2"}, "3584": {"op": "ADD"}, "3585": {"op": "SWAP2"}, "3586": {"op": "SWAP1"}, "3587": {"op": "SWAP2"}, "3588": {"op": "MSTORE"}, "3589": {"op": "PUSH1", "value": "0x60"}, "3591": {"op": "ADD"}, "3592": {"op": "SWAP1"}, "3593": {"jump": "o", "op": "JUMP"}, "3594": {"op": "JUMPDEST"}, "3595": {"op": "PUSH1", "value": "0x1"}, "3597": {"op": "PUSH1", "value": "0x1"}, "3599": {"op": "PUSH1", "value": "0xA0"}, "3601": {"op": "SHL"}, "3602": {"op": "SUB"}, "3603": {"op": "SWAP3"}, "3604": {"op": "SWAP1"}, "3605": {"op": "SWAP3"}, "3606": {"op": "AND"}, "3607": {"op": "DUP3"}, "3608": {"op": "MSTORE"}, "3609": {"op": "PUSH1", "value": "0x20"}, "3611": {"op": "DUP3"}, "3612": {"op": "ADD"}, "3613": {"op": "MSTORE"}, "3614": {"op": "PUSH1", "value": "0x40"}, "3616": {"op": "ADD"}, "3617": {"op": "SWAP1"}, "3618": {"jump": "o", "op": "JUMP"}, "3619": {"op": "JUMPDEST"}, "3620": {"op": "PUSH1", "value": "0x20"}, "3622": {"op": "DUP1"}, "3623": {"op": "DUP3"}, "3624": {"op": "MSTORE"}, "3625": {"op": "PUSH1", "value": "0x34"}, "3627": {"op": "SWAP1"}, "3628": {"op": "DUP3"}, "3629": {"op": "ADD"}, "3630": {"op": "MSTORE"}, "3631": {"op": "PUSH32", "value": "0x54686520616D6F756E7420746F2073656C6C2073686F756C6420626520737472"}, "3664": {"op": "PUSH1", "value": "0x40"}, "3666": {"op": "DUP3"}, "3667": {"op": "ADD"}, "3668": {"op": "MSTORE"}, "3669": {"op": "PUSH20", "value": "0x34B1BA363C903134B3B3B2B9103A3430B7101817"}, "3690": {"op": "PUSH1", "value": "0x61"}, "3692": {"op": "SHL"}, "3693": {"op": "PUSH1", "value": "0x60"}, "3695": {"op": "DUP3"}, "3696": {"op": "ADD"}, "3697": {"op": "MSTORE"}, "3698": {"op": "PUSH1", "value": "0x80"}, "3700": {"op": "ADD"}, "3701": {"op": "SWAP1"}, "3702": {"jump": "o", "op": "JUMP"}, "3703": {"op": "JUMPDEST"}, "3704": {"op": "PUSH1", "value": "0x20"}, "3706": {"op": "DUP1"}, "3707": {"op": "DUP3"}, "3708": {"op": "MSTORE"}, "3709": {"op": "PUSH1", "value": "0x26"}, "3711": {"op": "SWAP1"}, "3712": {"op": "DUP3"}, "3713": {"op": "ADD"}, "3714": {"op": "MSTORE"}, "3715": {"op": "PUSH32", "value": "0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061"}, "3748": {"op": "PUSH1", "value": "0x40"}, "3750": {"op": "DUP3"}, "3751": {"op": "ADD"}, "3752": {"op": "MSTORE"}, "3753": {"op": "PUSH6", "value": "0x646472657373"}, "3760": {"op": "PUSH1", "value": "0xD0"}, "3762": {"op": "SHL"}, "3763": {"op": "PUSH1", "value": "0x60"}, "3765": {"op": "DUP3"}, "3766": {"op": "ADD"}, "3767": {"op": "MSTORE"}, "3768": {"op": "PUSH1", "value": "0x80"}, "3770": {"op": "ADD"}, "3771": {"op": "SWAP1"}, "3772": {"jump": "o", "op": "JUMP"}, "3773": {"op": "JUMPDEST"}, "3774": {"op": "PUSH1", "value": "0x20"}, "3776": {"op": "DUP1"}, "3777": {"op": "DUP3"}, "3778": {"op": "MSTORE"}, "3779": {"op": "DUP2"}, "3780": {"op": "DUP2"}, "3781": {"op": "ADD"}, "3782": {"op": "MSTORE"}, "3783": {"op": "PUSH32", "value": "0x596F7520646F6E2774206861766520656E6F756768206C7020746F6B656E732E"}, "3816": {"op": "PUSH1", "value": "0x40"}, "3818": {"op": "DUP3"}, "3819": {"op": "ADD"}, "3820": {"op": "MSTORE"}, "3821": {"op": "PUSH1", "value": "0x60"}, "3823": {"op": "ADD"}, "3824": {"op": "SWAP1"}, "3825": {"jump": "o", "op": "JUMP"}, "3826": {"op": "JUMPDEST"}, "3827": {"op": "PUSH1", "value": "0x20"}, "3829": {"op": "DUP1"}, "3830": {"op": "DUP3"}, "3831": {"op": "MSTORE"}, "3832": {"op": "PUSH1", "value": "0x15"}, "3834": {"op": "SWAP1"}, "3835": {"op": "DUP3"}, "3836": {"op": "ADD"}, "3837": {"op": "MSTORE"}, "3838": {"op": "PUSH21", "value": "0x2AA9A221903A3930B739B332B9103330B4B632B217"}, "3860": {"op": "PUSH1", "value": "0x59"}, "3862": {"op": "SHL"}, "3863": {"op": "PUSH1", "value": "0x40"}, "3865": {"op": "DUP3"}, "3866": {"op": "ADD"}, "3867": {"op": "MSTORE"}, "3868": {"op": "PUSH1", "value": "0x60"}, "3870": {"op": "ADD"}, "3871": {"op": "SWAP1"}, "3872": {"jump": "o", "op": "JUMP"}, "3873": {"op": "JUMPDEST"}, "3874": {"op": "PUSH1", "value": "0x20"}, "3876": {"op": "DUP1"}, "3877": {"op": "DUP3"}, "3878": {"op": "MSTORE"}, "3879": {"op": "PUSH1", "value": "0x2F"}, "3881": {"op": "SWAP1"}, "3882": {"op": "DUP3"}, "3883": {"op": "ADD"}, "3884": {"op": "MSTORE"}, "3885": {"op": "PUSH32", "value": "0x54686520616D6F756E74206F6620737570706C696564206C7020746F6B656E73"}, "3918": {"op": "PUSH1", "value": "0x40"}, "3920": {"op": "DUP3"}, "3921": {"op": "ADD"}, "3922": {"op": "MSTORE"}, "3923": {"op": "PUSH15", "value": "0x1039B437BAB632103132901F101817"}, "3939": {"op": "PUSH1", "value": "0x89"}, "3941": {"op": "SHL"}, "3942": {"op": "PUSH1", "value": "0x60"}, "3944": {"op": "DUP3"}, "3945": {"op": "ADD"}, "3946": {"op": "MSTORE"}, "3947": {"op": "PUSH1", "value": "0x80"}, "3949": {"op": "ADD"}, "3950": {"op": "SWAP1"}, "3951": {"jump": "o", "op": "JUMP"}, "3952": {"op": "JUMPDEST"}, "3953": {"op": "PUSH1", "value": "0x20"}, "3955": {"op": "DUP1"}, "3956": {"op": "DUP3"}, "3957": {"op": "MSTORE"}, "3958": {"op": "PUSH1", "value": "0x25"}, "3960": {"op": "SWAP1"}, "3961": {"op": "DUP3"}, "3962": {"op": "ADD"}, "3963": {"op": "MSTORE"}, "3964": {"op": "PUSH32", "value": "0x54686520706F6F6C2073686F756C6420626520696E697469616C697A65642066"}, "3997": {"op": "PUSH1", "value": "0x40"}, "3999": {"op": "DUP3"}, "4000": {"op": "ADD"}, "4001": {"op": "MSTORE"}, "4002": {"op": "PUSH5", "value": "0x34B939BA17"}, "4008": {"op": "PUSH1", "value": "0xD9"}, "4010": {"op": "SHL"}, "4011": {"op": "PUSH1", "value": "0x60"}, "4013": {"op": "DUP3"}, "4014": {"op": "ADD"}, "4015": {"op": "MSTORE"}, "4016": {"op": "PUSH1", "value": "0x80"}, "4018": {"op": "ADD"}, "4019": {"op": "SWAP1"}, "4020": {"jump": "o", "op": "JUMP"}, "4021": {"op": "JUMPDEST"}, "4022": {"op": "PUSH1", "value": "0x20"}, "4024": {"op": "DUP1"}, "4025": {"op": "DUP3"}, "4026": {"op": "MSTORE"}, "4027": {"op": "PUSH1", "value": "0x38"}, "4029": {"op": "SWAP1"}, "4030": {"op": "DUP3"}, "4031": {"op": "ADD"}, "4032": {"op": "MSTORE"}, "4033": {"op": "PUSH32", "value": "0x5472616E73666572206F662074686520616D6F756E74206F6620746F6B656E20"}, "4066": {"op": "PUSH1", "value": "0x40"}, "4068": {"op": "DUP3"}, "4069": {"op": "ADD"}, "4070": {"op": "MSTORE"}, "4071": {"op": "PUSH32", "value": "0x796F752077616E7420746F2073656C6C206661696C65642E0000000000000000"}, "4104": {"op": "PUSH1", "value": "0x60"}, "4106": {"op": "DUP3"}, "4107": {"op": "ADD"}, "4108": {"op": "MSTORE"}, "4109": {"op": "PUSH1", "value": "0x80"}, "4111": {"op": "ADD"}, "4112": {"op": "SWAP1"}, "4113": {"jump": "o", "op": "JUMP"}, "4114": {"op": "JUMPDEST"}, "4115": {"op": "PUSH1", "value": "0x20"}, "4117": {"op": "DUP1"}, "4118": {"op": "DUP3"}, "4119": {"op": "MSTORE"}, "4120": {"op": "PUSH1", "value": "0x18"}, "4122": {"op": "SWAP1"}, "4123": {"op": "DUP3"}, "4124": {"op": "ADD"}, "4125": {"op": "MSTORE"}, "4126": {"op": "PUSH32", "value": "0x5472616E73666572206F66204C696E6B206661696C65642E0000000000000000"}, "4159": {"op": "PUSH1", "value": "0x40"}, "4161": {"op": "DUP3"}, "4162": {"op": "ADD"}, "4163": {"op": "MSTORE"}, "4164": {"op": "PUSH1", "value": "0x60"}, "4166": {"op": "ADD"}, "4167": {"op": "SWAP1"}, "4168": {"jump": "o", "op": "JUMP"}, "4169": {"op": "JUMPDEST"}, "4170": {"op": "PUSH1", "value": "0x20"}, "4172": {"op": "DUP1"}, "4173": {"op": "DUP3"}, "4174": {"op": "MSTORE"}, "4175": {"op": "PUSH1", "value": "0x30"}, "4177": {"op": "SWAP1"}, "4178": {"op": "DUP3"}, "4179": {"op": "ADD"}, "4180": {"op": "MSTORE"}, "4181": {"op": "PUSH32", "value": "0x54686520616D6F756E74206F6620726571756573746564206C7020746F6B656E"}, "4214": {"op": "PUSH1", "value": "0x40"}, "4216": {"op": "DUP3"}, "4217": {"op": "ADD"}, "4218": {"op": "MSTORE"}, "4219": {"op": "PUSH16", "value": "0x399039B437BAB632103132901F101817"}, "4236": {"op": "PUSH1", "value": "0x81"}, "4238": {"op": "SHL"}, "4239": {"op": "PUSH1", "value": "0x60"}, "4241": {"op": "DUP3"}, "4242": {"op": "ADD"}, "4243": {"op": "MSTORE"}, "4244": {"op": "PUSH1", "value": "0x80"}, "4246": {"op": "ADD"}, "4247": {"op": "SWAP1"}, "4248": {"jump": "o", "op": "JUMP"}, "4249": {"op": "JUMPDEST"}, "4250": {"op": "PUSH1", "value": "0x20"}, "4252": {"op": "DUP1"}, "4253": {"op": "DUP3"}, "4254": {"op": "MSTORE"}, "4255": {"op": "DUP2"}, "4256": {"op": "DUP2"}, "4257": {"op": "ADD"}, "4258": {"op": "MSTORE"}, "4259": {"op": "PUSH32", "value": "0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572"}, "4292": {"op": "PUSH1", "value": "0x40"}, "4294": {"op": "DUP3"}, "4295": {"op": "ADD"}, "4296": {"op": "MSTORE"}, "4297": {"op": "PUSH1", "value": "0x60"}, "4299": {"op": "ADD"}, "4300": {"op": "SWAP1"}, "4301": {"jump": "o", "op": "JUMP"}, "4302": {"op": "JUMPDEST"}, "4303": {"op": "PUSH1", "value": "0x20"}, "4305": {"op": "DUP1"}, "4306": {"op": "DUP3"}, "4307": {"op": "MSTORE"}, "4308": {"op": "PUSH1", "value": "0x18"}, "4310": {"op": "SWAP1"}, "4311": {"op": "DUP3"}, "4312": {"op": "ADD"}, "4313": {"op": "MSTORE"}, "4314": {"op": "PUSH32", "value": "0x5472616E73666572206F662055534443206661696C65642E0000000000000000"}, "4347": {"op": "PUSH1", "value": "0x40"}, "4349": {"op": "DUP3"}, "4350": {"op": "ADD"}, "4351": {"op": "MSTORE"}, "4352": {"op": "PUSH1", "value": "0x60"}, "4354": {"op": "ADD"}, "4355": {"op": "SWAP1"}, "4356": {"jump": "o", "op": "JUMP"}, "4357": {"op": "JUMPDEST"}, "4358": {"op": "PUSH1", "value": "0x20"}, "4360": {"op": "DUP1"}, "4361": {"op": "DUP3"}, "4362": {"op": "MSTORE"}, "4363": {"op": "PUSH1", "value": "0x35"}, "4365": {"op": "SWAP1"}, "4366": {"op": "DUP3"}, "4367": {"op": "ADD"}, "4368": {"op": "MSTORE"}, "4369": {"op": "PUSH32", "value": "0x54686520616D6F756E74206F662070757263686173656420746F6B656E206973"}, "4402": {"op": "PUSH1", "value": "0x40"}, "4404": {"op": "DUP3"}, "4405": {"op": "ADD"}, "4406": {"op": "MSTORE"}, "4407": {"op": "PUSH21", "value": "0x103637BBB2B9103A3430B7103932B8BAB4B932B217"}, "4429": {"op": "PUSH1", "value": "0x59"}, "4431": {"op": "SHL"}, "4432": {"op": "PUSH1", "value": "0x60"}, "4434": {"op": "DUP3"}, "4435": {"op": "ADD"}, "4436": {"op": "MSTORE"}, "4437": {"op": "PUSH1", "value": "0x80"}, "4439": {"op": "ADD"}, "4440": {"op": "SWAP1"}, "4441": {"jump": "o", "op": "JUMP"}, "4442": {"op": "JUMPDEST"}, "4443": {"op": "PUSH1", "value": "0x20"}, "4445": {"op": "DUP1"}, "4446": {"op": "DUP3"}, "4447": {"op": "MSTORE"}, "4448": {"op": "PUSH1", "value": "0x21"}, "4450": {"op": "SWAP1"}, "4451": {"op": "DUP3"}, "4452": {"op": "ADD"}, "4453": {"op": "MSTORE"}, "4454": {"op": "PUSH32", "value": "0x54686520706F6F6C2077617320616C726561647920696E697469616C697A6564"}, "4487": {"op": "PUSH1", "value": "0x40"}, "4489": {"op": "DUP3"}, "4490": {"op": "ADD"}, "4491": {"op": "MSTORE"}, "4492": {"op": "PUSH1", "value": "0x17"}, "4494": {"op": "PUSH1", "value": "0xF9"}, "4496": {"op": "SHL"}, "4497": {"op": "PUSH1", "value": "0x60"}, "4499": {"op": "DUP3"}, "4500": {"op": "ADD"}, "4501": {"op": "MSTORE"}, "4502": {"op": "PUSH1", "value": "0x80"}, "4504": {"op": "ADD"}, "4505": {"op": "SWAP1"}, "4506": {"jump": "o", "op": "JUMP"}, "4507": {"op": "JUMPDEST"}, "4508": {"op": "PUSH1", "value": "0x20"}, "4510": {"op": "DUP1"}, "4511": {"op": "DUP3"}, "4512": {"op": "MSTORE"}, "4513": {"op": "PUSH1", "value": "0x15"}, "4515": {"op": "SWAP1"}, "4516": {"op": "DUP3"}, "4517": {"op": "ADD"}, "4518": {"op": "MSTORE"}, "4519": {"op": "PUSH21", "value": "0x2634B735903A3930B739B332B9103330B4B632B217"}, "4541": {"op": "PUSH1", "value": "0x59"}, "4543": {"op": "SHL"}, "4544": {"op": "PUSH1", "value": "0x40"}, "4546": {"op": "DUP3"}, "4547": {"op": "ADD"}, "4548": {"op": "MSTORE"}, "4549": {"op": "PUSH1", "value": "0x60"}, "4551": {"op": "ADD"}, "4552": {"op": "SWAP1"}, "4553": {"jump": "o", "op": "JUMP"}, "4554": {"op": "JUMPDEST"}, "4555": {"op": "SWAP1"}, "4556": {"op": "DUP2"}, "4557": {"op": "MSTORE"}, "4558": {"op": "PUSH1", "value": "0x20"}, "4560": {"op": "ADD"}, "4561": {"op": "SWAP1"}, "4562": {"jump": "o", "op": "JUMP"}, "4563": {"op": "JUMPDEST"}, "4564": {"op": "SWAP2"}, "4565": {"op": "DUP3"}, "4566": {"op": "MSTORE"}, "4567": {"op": "PUSH1", "value": "0x20"}, "4569": {"op": "DUP3"}, "4570": {"op": "ADD"}, "4571": {"op": "MSTORE"}, "4572": {"op": "PUSH1", "value": "0x40"}, "4574": {"op": "ADD"}, "4575": {"op": "SWAP1"}, "4576": {"jump": "o", "op": "JUMP"}, "4577": {"op": "JUMPDEST"}, "4578": {"op": "PUSH1", "value": "0x0"}, "4580": {"op": "DUP3"}, "4581": {"op": "NOT"}, "4582": {"op": "DUP3"}, "4583": {"op": "GT"}, "4584": {"op": "ISZERO"}, "4585": {"op": "PUSH2", "value": "0x11F4"}, "4588": {"op": "JUMPI"}, "4589": {"op": "PUSH2", "value": "0x11F4"}, "4592": {"op": "PUSH2", "value": "0x124F"}, "4595": {"jump": "i", "op": "JUMP"}, "4596": {"op": "JUMPDEST"}, "4597": {"op": "POP"}, "4598": {"op": "ADD"}, "4599": {"op": "SWAP1"}, "4600": {"jump": "o", "op": "JUMP"}, "4601": {"op": "JUMPDEST"}, "4602": {"op": "PUSH1", "value": "0x0"}, "4604": {"op": "DUP3"}, "4605": {"op": "PUSH2", "value": "0x1214"}, "4608": {"op": "JUMPI"}, "4609": {"op": "PUSH4", "value": "0x4E487B71"}, "4614": {"op": "PUSH1", "value": "0xE0"}, "4616": {"op": "SHL"}, "4617": {"op": "DUP2"}, "4618": {"op": "MSTORE"}, "4619": {"op": "PUSH1", "value": "0x12"}, "4621": {"op": "PUSH1", "value": "0x4"}, "4623": {"op": "MSTORE"}, "4624": {"op": "PUSH1", "value": "0x24"}, "4626": {"op": "DUP2"}, "4627": {"op": "REVERT"}, "4628": {"op": "JUMPDEST"}, "4629": {"op": "POP"}, "4630": {"op": "DIV"}, "4631": {"op": "SWAP1"}, "4632": {"jump": "o", "op": "JUMP"}, "4633": {"op": "JUMPDEST"}, "4634": {"op": "PUSH1", "value": "0x0"}, "4636": {"op": "DUP2"}, "4637": {"op": "PUSH1", "value": "0x0"}, "4639": {"op": "NOT"}, "4640": {"op": "DIV"}, "4641": {"op": "DUP4"}, "4642": {"op": "GT"}, "4643": {"op": "DUP3"}, "4644": {"op": "ISZERO"}, "4645": {"op": "ISZERO"}, "4646": {"op": "AND"}, "4647": {"op": "ISZERO"}, "4648": {"op": "PUSH2", "value": "0x1233"}, "4651": {"op": "JUMPI"}, "4652": {"op": "PUSH2", "value": "0x1233"}, "4655": {"op": "PUSH2", "value": "0x124F"}, "4658": {"jump": "i", "op": "JUMP"}, "4659": {"op": "JUMPDEST"}, "4660": {"op": "POP"}, "4661": {"op": "MUL"}, "4662": {"op": "SWAP1"}, "4663": {"jump": "o", "op": "JUMP"}, "4664": {"op": "JUMPDEST"}, "4665": {"op": "PUSH1", "value": "0x0"}, "4667": {"op": "DUP3"}, "4668": {"op": "DUP3"}, "4669": {"op": "LT"}, "4670": {"op": "ISZERO"}, "4671": {"op": "PUSH2", "value": "0x124A"}, "4674": {"op": "JUMPI"}, "4675": {"op": "PUSH2", "value": "0x124A"}, "4678": {"op": "PUSH2", "value": "0x124F"}, "4681": {"jump": "i", "op": "JUMP"}, "4682": {"op": "JUMPDEST"}, "4683": {"op": "POP"}, "4684": {"op": "SUB"}, "4685": {"op": "SWAP1"}, "4686": {"jump": "o", "op": "JUMP"}, "4687": {"op": "JUMPDEST"}, "4688": {"op": "PUSH4", "value": "0x4E487B71"}, "4693": {"op": "PUSH1", "value": "0xE0"}, "4695": {"op": "SHL"}, "4696": {"op": "PUSH1", "value": "0x0"}, "4698": {"op": "MSTORE"}, "4699": {"op": "PUSH1", "value": "0x11"}, "4701": {"op": "PUSH1", "value": "0x4"}, "4703": {"op": "MSTORE"}, "4704": {"op": "PUSH1", "value": "0x24"}, "4706": {"op": "PUSH1", "value": "0x0"}, "4708": {"op": "REVERT"}}, "sha1": "c767ef0f05985423c2f28e5cc1bce26c9e96e960", "source": "// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/utils/math/SafeMath.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\ninterface IERC20 {\n    function transfer(address recipient, uint256 amount) external returns (bool);\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n    function approve(address spender, uint256 amount) external returns (bool);\n}\n\n\ncontract SimpleSwap is Ownable {\n    using SafeMath for uint256;\n\n    enum Token{Link, USDC}\n\n    address addressLink = 0xa36085F69e2889c224210F603D836748e7dC0088;   //Kovan address      //0x01BE23585060835E02B77ef475b0Cc51aA1e0709; rinkeby\n    address addressUSDC = 0xb7a4F3E9097C08dA09517b5aB877F7a917224ede;    //Kovan address            //0xeb8f08a975Ab53E34D8a0330E0D34de942C95926; rinkeby\n\n    uint256 public totalAvailableLink = 0;      //18 decimals\n    uint256 public totalAvailableUSDC = 0;      //6 decimals\n\n    uint256  public totalLpTokens = 0;           //6 decimals\n\n    uint256 public FEE = 3 * 10 ** 3;         //6 decimals\n\n    bool isPoolInitialized = false;\n\n    mapping(address => uint256) userToAmountLpTokens;\n\n    function initiatePool(uint256 amountLinkToSupply, uint256 amountUsdcToSupply) public onlyOwner {\n        require(!isPoolInitialized, \"The pool was already initialized.\");\n        isPoolInitialized = true;\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        require(Link.transferFrom(msg.sender, address(this), amountLinkToSupply), \"Link transfer failed.\");\n        require(USDC.transferFrom(msg.sender, address(this), amountUsdcToSupply), \"USDC transfer failed.\");\n\n        totalAvailableLink = totalAvailableLink.add(amountLinkToSupply);\n        totalAvailableUSDC = totalAvailableUSDC.add(amountUsdcToSupply);\n\n        totalLpTokens = amountUsdcToSupply;\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].add(totalLpTokens);\n    }\n\n    function swap(uint256 quantitySoldToken, uint256 minAmountPurchasedToken, Token tokenForSale) public onlyAfterInitialization {\n        //require(isPoolInitialized, \"The pool should be initialized first.\");\n        require(quantitySoldToken > 0, \"The amount to sell should be strictly bigger than 0.\");\n        uint256 amountPurchasedToken = getAmountPurchasedToken(quantitySoldToken, tokenForSale);\n        require(amountPurchasedToken >= minAmountPurchasedToken, \"The amount of purchased token is lower than required.\");\n\n        IERC20 soldToken;\n        IERC20 boughtToken;\n\n        if (tokenForSale == Token.Link) {\n            totalAvailableLink  = totalAvailableLink.add(quantitySoldToken);\n            totalAvailableUSDC = totalAvailableUSDC.sub(amountPurchasedToken);\n\n            soldToken = IERC20(addressLink);\n            boughtToken = IERC20(addressUSDC);\n        }\n\n        else {\n            totalAvailableLink = totalAvailableLink.sub(amountPurchasedToken);\n            totalAvailableUSDC = totalAvailableUSDC.add(quantitySoldToken);\n\n            soldToken = IERC20(addressUSDC); \n            boughtToken = IERC20(addressLink);\n        }\n        \n        assert(boughtToken.transfer(msg.sender, amountPurchasedToken));\n        require(soldToken.transferFrom(msg.sender, address(this), quantitySoldToken), \"Transfer of the amount of token you want to sell failed.\");\n    }\n\n    function supply(uint256 amountLpTokens) public onlyAfterInitialization {\n        //require(isPoolInitialized, \"The pool should be initialized first.\");\n        require(amountLpTokens > 0, \"The amount of supplied lp tokens should be > 0.\");\n        (uint256 amountLinkPerLpToken, uint256 amountUsdcPerLpToken) = getLpTokenPrice();\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        uint256 amountLinkToSupply = amountLinkPerLpToken.mul(amountLpTokens).div(10 ** 6); // 18 decimals\n        uint256 amountUSDCToSupply = amountUsdcPerLpToken.mul(amountLpTokens).div(10 ** 6); // 6 decimals\n\n        totalAvailableLink = totalAvailableLink.add(amountLinkToSupply);\n        totalAvailableUSDC = totalAvailableUSDC.add(amountUSDCToSupply);\n\n        totalLpTokens = totalLpTokens.add(amountLpTokens);\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].add(amountLpTokens);\n\n        require(Link.transferFrom(msg.sender, address(this), amountLinkToSupply), \"Transfer of Link failed.\");\n        require(USDC.transferFrom(msg.sender, address(this), amountUSDCToSupply), \"Transfer of USDC failed.\");\n    }\n\n    function withdraw(uint256 amountLpTokens) public onlyAfterInitialization {\n        //require(isPoolInitialized, \"The pool should be initialized first.\");\n        require(amountLpTokens > 0, \"The amount of requested lp tokens should be > 0.\");\n        require(userToAmountLpTokens[msg.sender] >= amountLpTokens, \"You don't have enough lp tokens.\");\n        (uint256 amountLinkPerLpToken, uint256 amountUSDCPerLpToken)  = getLpTokenPrice();\n\n        uint256 amountLinkToWithdraw = amountLinkPerLpToken.mul(amountLpTokens).div(10 ** 6);\n        uint256 amountUSDCToWithdraw = amountUSDCPerLpToken.mul(amountLpTokens).div(10 ** 6);\n\n        totalAvailableLink = totalAvailableLink.sub(amountLinkToWithdraw);\n        totalAvailableUSDC = totalAvailableUSDC.sub(amountUSDCToWithdraw);\n\n        totalLpTokens = totalLpTokens.sub(amountLpTokens);\n\n        userToAmountLpTokens[msg.sender] = userToAmountLpTokens[msg.sender].sub(amountLpTokens);\n\n        IERC20 Link = IERC20(addressLink);\n        IERC20 USDC = IERC20(addressUSDC);\n\n        assert(Link.transfer(msg.sender, amountLinkToWithdraw));\n        assert(USDC.transfer(msg.sender, amountUSDCToWithdraw));\n    }\n\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n    // Link - USDC                      // 6 decimals\n    function getAmountPurchasedToken(uint256 amountSoldTokens, Token tokenForSale) internal view returns(uint256)\n    {\n        uint256 y = (tokenForSale == Token.Link) ? totalAvailableUSDC : totalAvailableLink;\n        uint256 x = (tokenForSale == Token.Link) ? totalAvailableLink : totalAvailableUSDC;\n\n        uint256 C = totalAvailableUSDC.mul(totalAvailableLink);         // 24 decimals\n        uint256 amountPurchasedTokens = y.sub(C.div(x.add(amountSoldTokens))); // 6 or 18 decimals\n\n        return amountPurchasedTokens.mul(10 ** 6 - FEE).div(10 ** 6);\n    }\n\n    function getLpTokenPrice() public onlyAfterInitialization view returns(uint256, uint256) \n    {\n        return (totalAvailableLink.mul(10 ** 6).div(totalLpTokens), totalAvailableUSDC.mul(10 ** 6).div(totalLpTokens));\n    }\n\n\n    modifier onlyAfterInitialization {\n        require(isPoolInitialized, \"The pool should be initialized first.\");\n        _;\n    }\n}\n\n\n", "sourceMap": "462:6406:3:-:0;;;560:64;;;-1:-1:-1;;;;;;560:64:3;;;582:42;560:64;;;;707;;;;;;729:42;707:64;;;560;862:37;;;;924;;;;986:33;;1070:11;1049:32;;1109:30;;;-1:-1:-1;;1109:30:3;;;462:6406;;;;;;;;;-1:-1:-1;867:23:0;877:12;:10;:12::i;:::-;867:9;:23::i;:::-;462:6406:3;;586:96:1;665:10;586:96;:::o;2041:169:0:-;2096:16;2115:6;;-1:-1:-1;;;;;2131:17:0;;;-1:-1:-1;;;;;;2131:17:0;;;;;;2163:40;;2115:6;;;;;;;2163:40;;2096:16;2163:40;2041:169;;:::o;462:6406:3:-;;;;;;;", "sourcePath": "contracts/SimpleSwap.sol", "type": "contract", "deployment": {"address": "0x5CD98cDD838174E9523e561887E13A5123211785", "chainid": "42", "blockHeight": 32773141}}
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
  document.getElementById("min-amount-purchased-token").innerHTML = "Minimum amount of " + tokenPurchasedStr + " to receive: " + minAmountPurchasedToken.toFixed(NUMBER_DECIMALS).toString();
  document.getElementById("min-amount-purchased-token").setAttribute("data-value", minAmountPurchasedToken);
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
  "contractAddress": "0x5CD98cDD838174E9523e561887E13A5123211785",
  //"0xa2AEf78BD851D65cdBD3F14d3Bf814C211a50630",
  "abi": require("../build/deployments/42/0x5CD98cDD838174E9523e561887E13A5123211785.json")["abi"]
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

},{"../build/contracts/IERC20.json":1,"../build/deployments/42/0x5CD98cDD838174E9523e561887E13A5123211785.json":2}],6:[function(require,module,exports){
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
    const minAmountPurchasedToken = parseFloat(document.getElementById("min-amount-purchased-token").getAttribute('data-value'));
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
