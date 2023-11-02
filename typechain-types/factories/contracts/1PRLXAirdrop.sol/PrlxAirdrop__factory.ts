/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PrlxAirdrop,
  PrlxAirdropInterface,
} from "../../../contracts/1PRLXAirdrop.sol/PrlxAirdrop";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "retrieve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620010ac380380620010ac833981810160405281019062000037919062000178565b620000576200004b6200006c60201b60201c565b6200007460201b60201c565b600180819055508060028190555050620001aa565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b6000819050919050565b62000152816200013d565b81146200015e57600080fd5b50565b600081519050620001728162000147565b92915050565b60006020828403121562000191576200019062000138565b5b6000620001a18482850162000161565b91505092915050565b610ef280620001ba6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638f88708b1161005b5780638f88708b146100c8578063c884ef83146100e4578063f2fde38b14610114578063f72d82cf146101305761007d565b80632eb4a7ab14610082578063715018a6146100a05780638da5cb5b146100aa575b600080fd5b61008a61014c565b60405161009791906107cc565b60405180910390f35b6100a8610152565b005b6100b2610166565b6040516100bf9190610828565b60405180910390f35b6100e260048036038101906100dd9190610883565b61018f565b005b6100fe60048036038101906100f991906108dc565b61024e565b60405161010b9190610924565b60405180910390f35b61012e600480360381019061012991906108dc565b61026e565b005b61014a600480360381019061014591906109e2565b6102f1565b005b60025481565b61015a6104b1565b610164600061052f565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101976104b1565b60006101a1610166565b73ffffffffffffffffffffffffffffffffffffffff16826040516101c490610a87565b60006040518083038185875af1925050503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b505090508061024a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024190610af9565b60405180910390fd5b5050565b60036020528060005260406000206000915054906101000a900460ff1681565b6102766104b1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036102e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102dc90610b8b565b60405180910390fd5b6102ee8161052f565b50565b6102f96105f3565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610386576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037d90610c1d565b60405180910390fd5b6000838560405160200161039b929190610ca6565b604051602081830303815290604052805190602001209050610401838380806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505060025483610642565b610440576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043790610d1e565b60405180910390fd5b6001600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506104a28486610659565b506104ab61070a565b50505050565b6104b9610713565b73ffffffffffffffffffffffffffffffffffffffff166104d7610166565b73ffffffffffffffffffffffffffffffffffffffff161461052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052490610d8a565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600260015403610638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062f90610df6565b60405180910390fd5b6002600181905550565b60008261064f858461071b565b1490509392505050565b60008273ffffffffffffffffffffffffffffffffffffffff168260405161067f90610a87565b60006040518083038185875af1925050503d80600081146106bc576040519150601f19603f3d011682016040523d82523d6000602084013e6106c1565b606091505b5050905080610705576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fc90610af9565b60405180910390fd5b505050565b60018081905550565b600033905090565b60008082905060005b8451811015610766576107518286838151811061074457610743610e16565b5b6020026020010151610771565b9150808061075e90610e74565b915050610724565b508091505092915050565b600081831061078957610784828461079c565b610794565b610793838361079c565b5b905092915050565b600082600052816020526040600020905092915050565b6000819050919050565b6107c6816107b3565b82525050565b60006020820190506107e160008301846107bd565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610812826107e7565b9050919050565b61082281610807565b82525050565b600060208201905061083d6000830184610819565b92915050565b600080fd5b600080fd5b6000819050919050565b6108608161084d565b811461086b57600080fd5b50565b60008135905061087d81610857565b92915050565b60006020828403121561089957610898610843565b5b60006108a78482850161086e565b91505092915050565b6108b981610807565b81146108c457600080fd5b50565b6000813590506108d6816108b0565b92915050565b6000602082840312156108f2576108f1610843565b5b6000610900848285016108c7565b91505092915050565b60008115159050919050565b61091e81610909565b82525050565b60006020820190506109396000830184610915565b92915050565b600061094a826107e7565b9050919050565b61095a8161093f565b811461096557600080fd5b50565b60008135905061097781610951565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126109a2576109a161097d565b5b8235905067ffffffffffffffff8111156109bf576109be610982565b5b6020830191508360208202830111156109db576109da610987565b5b9250929050565b600080600080606085870312156109fc576109fb610843565b5b6000610a0a8782880161086e565b9450506020610a1b87828801610968565b935050604085013567ffffffffffffffff811115610a3c57610a3b610848565b5b610a488782880161098c565b925092505092959194509250565b600081905092915050565b50565b6000610a71600083610a56565b9150610a7c82610a61565b600082019050919050565b6000610a9282610a64565b9150819050919050565b600082825260208201905092915050565b7f4d65726b6c6541697264726f703a205472616e73666572206661696c65640000600082015250565b6000610ae3601e83610a9c565b9150610aee82610aad565b602082019050919050565b60006020820190508181036000830152610b1281610ad6565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610b75602683610a9c565b9150610b8082610b19565b604082019050919050565b60006020820190508181036000830152610ba481610b68565b9050919050565b7f4d65726b6c6541697264726f703a2050524c5820616c726561647920636c616960008201527f6d65640000000000000000000000000000000000000000000000000000000000602082015250565b6000610c07602383610a9c565b9150610c1282610bab565b604082019050919050565b60006020820190508181036000830152610c3681610bfa565b9050919050565b60008160601b9050919050565b6000610c5582610c3d565b9050919050565b6000610c6782610c4a565b9050919050565b610c7f610c7a8261093f565b610c5c565b82525050565b6000819050919050565b610ca0610c9b8261084d565b610c85565b82525050565b6000610cb28285610c6e565b601482019150610cc28284610c8f565b6020820191508190509392505050565b7f4d65726b6c6541697264726f703a20496e76616c69642070726f6f6600000000600082015250565b6000610d08601c83610a9c565b9150610d1382610cd2565b602082019050919050565b60006020820190508181036000830152610d3781610cfb565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610d74602083610a9c565b9150610d7f82610d3e565b602082019050919050565b60006020820190508181036000830152610da381610d67565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000610de0601f83610a9c565b9150610deb82610daa565b602082019050919050565b60006020820190508181036000830152610e0f81610dd3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e7f8261084d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610eb157610eb0610e45565b5b60018201905091905056fea2646970667358221220e1fd6e995cba34daac22968d67f4fcfa3d4b11f8820b307a92a9cf5cbcd3aac164736f6c63430008120033";

type PrlxAirdropConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrlxAirdropConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrlxAirdrop__factory extends ContractFactory {
  constructor(...args: PrlxAirdropConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _merkleRoot: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PrlxAirdrop> {
    return super.deploy(_merkleRoot, overrides || {}) as Promise<PrlxAirdrop>;
  }
  override getDeployTransaction(
    _merkleRoot: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_merkleRoot, overrides || {});
  }
  override attach(address: string): PrlxAirdrop {
    return super.attach(address) as PrlxAirdrop;
  }
  override connect(signer: Signer): PrlxAirdrop__factory {
    return super.connect(signer) as PrlxAirdrop__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrlxAirdropInterface {
    return new utils.Interface(_abi) as PrlxAirdropInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PrlxAirdrop {
    return new Contract(address, _abi, signerOrProvider) as PrlxAirdrop;
  }
}
