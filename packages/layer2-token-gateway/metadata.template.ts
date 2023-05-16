import {Address, log} from "@graphprotocol/graph-ts";

// export const nitroStartBlock = BigInt.fromString("{{{ nitroGenesisBlockNum }}}")

// we use moustache to template these values in (as used in the subgraph manifest template)
const l2StandardGateway: string = "{{{ l2StandardGateway }}}"
let l2StandardGatewayAddr = Address.zero()
if (l2StandardGateway != "") {
  log.info("l2StandardGateway not empty: %s", [l2StandardGateway])
  l2StandardGatewayAddr = Address.fromString(l2StandardGateway.toLowerCase())
} else {
  log.info("l2StandardGateway empty: %s", [l2StandardGateway])
}
export const L2_STD_GATEWAY = l2StandardGatewayAddr
