require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/yIpqgwaSb8oQw-H_69CuDbQzLP04CsFU',
      accounts: [
        '28f11df9aebb6e8315d4edeaff4d12f44f26d5244f3d3f3ec7189c8a1226885f',
      ],
    },
  },
}
