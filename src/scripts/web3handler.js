import Web3 from 'web3';

export const contractAddr = "0xb374885b2e5C78ba8924230DB37Ec7E1035700Da"; // From your deployment
export const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"age","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"class","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"StudentCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"StudentDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"StudentUpdated","type":"event"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_age","type":"uint256"},{"internalType":"uint256","name":"_class","type":"uint256"}],"name":"createStudent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numberOfStudents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"removeStudent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"students","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"uint256","name":"class","type":"uint256"},{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"string","name":"name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_age","type":"uint256"},{"internalType":"uint256","name":"_class","type":"uint256"}],"name":"updateStudent","outputs":[],"stateMutability":"nonpayable","type":"function"}]; // Paste the ABI from your HTML file

export const BSC_TESTNET_PARAMS = {
    chainId: '0x61', 
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: { name: 'tBNB', symbol: 'tBNB', decimals: 18 },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    blockExplorerUrls: ['https://testnet.bscscan.com']
};

export async function getWeb3() {
    if (!window.ethereum) throw new Error("Please install MetaMask");
    return new Web3(window.ethereum);
}