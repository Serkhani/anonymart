import { Web3 } from "web3";
import {
  types,
  Web3ZKsyncL2,
  ContractFactory,
  ZKsyncPlugin,
  ZKsyncWallet,
} from "web3-plugin-zksync";
import {CEDI_ABI, CEDI_BYTECODE} from "./cedi_constants.mjs";
import  {config} from "dotenv";
config();
console.log(process.env.ACCOUNT_PRIVATE_KEY)

const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;


async function main() {
  const web3 = new Web3("https://zksync-sepolia.drpc.org");
  web3.registerPlugin(
    new ZKsyncPlugin(Web3ZKsyncL2.initWithDefaultProvider(types.Network.Sepolia))
  );
  console.log(CEDI_BYTECODE.toString().length)
  const zksync = web3.ZKsync; 
  const wallet = new zksync.Wallet(ACCOUNT_PRIVATE_KEY);
  const contractFactory = new ContractFactory(CEDI_ABI, CEDI_BYTECODE, wallet);
  console.log(
    "Testnet paymaster address:",
    await zksync.rpc.getTestnetPaymasterAddress(),
  );
  try {
    const contract = await contractFactory.deploy([]);
    console.log("Contract methods:", contract.methods);
  } catch (error) {
    console.error("❌ Error deploying contract:", error);
  }
}

cedi = 0x2f864e5fde4b4159b71e1ed3bce1c48d77892343
main()
  .then(() => console.log("✅ Script executed successfully"))
  .catch((error) => console.error("❌ Error executing script:", error));
