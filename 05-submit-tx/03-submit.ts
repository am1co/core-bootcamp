// 0x3b26E8DA9aDedAAe86a260b6354aC1855AA65C14

import path from 'path'
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

import {
  Hex,
  createWalletClient,
  getContract,
  http,
  publicActions,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import artifacts from "./submit.artifacts.json";

// Application Binary Interface
const { abi } = artifacts;

const privateKey = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(`0x${privateKey}` as Hex);

(async () => {
  const client = createWalletClient({
    account,
    transport: http(process.env.API_URL),
  }).extend(publicActions);

  const contractAddress = '0x3b26E8DA9aDedAAe86a260b6354aC1855AA65C14';
  const contract = getContract({
    address: contractAddress,
    abi,
    client,
  });

  const tx = await contract.write.recordSubmission([
    'am1co',
    'Cyrus',
    '0x214213Bf5E2276DFA465bA452c0ded4519Ecf1DB',
    '0xA419Ad01bDf5cF2f63F6D5533d33E9Bdf477C7c0'
    ]);    
  console.log('tx', tx); //0x5663a9e6943c590434a586514e62652e7be012379846147c2c806525640552dc
})();