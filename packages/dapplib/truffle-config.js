require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn purpose grace derive symptom skate'; 
let testAccounts = [
"0x488a7a038c992a14e2ee5f8bd3b2e403152a644d84a0b71ca9bb831cec1e6bd3",
"0xe6d52a28620db3f6ca9609566b5ce23c1e6421bef4a6d21a5d9edc02fdf16dfa",
"0x0f807fbd0018e45fdf9cbb27b0de185d3f9f2faec102faefbc1a6fe02fe6fc15",
"0x01b65cc6cb3cd00a3516a6c906ca03137016a366f9abb5e19e9b1f3b07e0c6bf",
"0x2fb07a3cc6da99756fe5012d044266a7a889fc7915c687626369374d0b60b994",
"0x3785ba10864677a0edb2b0c14d6c8ade91c4d41d1dcffeb517e4be74e4214432",
"0x3f3bb722a859dc13621844abf7bd3fe45eb3b921c58bb2e54c057fc10a67b725",
"0x244333625db171d9fb1114f8a9e53dc0df53fa83364e3135f6e2415df203ef22",
"0x4974ec84a7baccc5212ba782a4b5d3a75a8a559cbe6da37df9f1f0ed86c55393",
"0xe94c027cf8f0410ee41ada7e079b8e0b8d626ec15d6e0f732d279c701725939e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


