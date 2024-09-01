// import { IERC20ABI } from 'web3-plugin-zksync/lib/contracts/IERC20';
import {CEDI_ABI} from '/contracts/deploy/cedi_constants.mjs';

export const cediContractConfig = {
  // address: process.env.CEDI_TOKEN_ADDR,
  address: "0x2f864e5fde4b4159b71e1ed3bce1c48d77892343",
  abi: CEDI_ABI,
};
// export const daiContractConfig = {
//   address: process.ENV.CEDI_TOKEN_ADDR,
//   abi: CEDI_ABI,
// };
