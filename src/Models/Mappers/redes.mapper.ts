import { AddEthereumChainParameter } from "@web3-react/types";
import { Red } from "../redes.model";

export const mapRedToAddEthereumChainParameter = (red: Red) : AddEthereumChainParameter => ({
  chainId: red.chainId,
  chainName: red.name,
  nativeCurrency: red.nativeCurrency,
  rpcUrls: red.rpc,
})