require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note situate uniform harvest inhale equal gentle'; 
let testAccounts = [
"0x8f0b6396ae9a255236941bc7abc24a620744d4c61958595cbfb6921ef283175f",
"0xd63ca9115b3c2abe8eb1fa51a1bd9ac1f567c0c5b9406c512d3138685bf94996",
"0xc71e844135c29f3f8edda45017947547d42dd49d4d7a67e253beec0220fd5e0c",
"0x40a9b2bb3a04699ccfcea5d708793c25f02fc90de9df56f362197e29af1963fe",
"0x46515d400c13bef87e1886e6c30c74009ccef6a63fdfc6b2d24efca7f8eff98c",
"0x0c0d1ebdf2a145371a5bc98ae8de68bcf244fae231de30486ef5d4650eba5b28",
"0x798ded4f7dd9a1ccf76b6201b3cca0fc356ebdc37c97bbed88872465e2faa69a",
"0x92964994809a0934cafa0f33bea981b0ec4cae12f0cc0811795f08ffcb36a29b",
"0x00f71190b1e862d9750202a148f7754f84c9f1c874d91b37d581bd4376a77536",
"0xb27f9947908d00faff42da14e5a160850560e41d4921b3c014359a6d7b65ccbd"
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


