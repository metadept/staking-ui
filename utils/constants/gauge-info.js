import { IS_MAINNET } from 'config'

const TEST_GAUGE_INFO = Object.freeze({
  '0xf91BD10B18B45262A324883FbDB2Ea21d66ca938': {
    tokenName: 'PGL SNOB-AVAX',
    poolName: 'SNOB-AVAX pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0xd00ae08403b9bbb9124bb305c09058e32c39a48c',
      priceId: 'wavax',
      decimals: 18
    },
    b: {
      address: '0xf319e2f610462f846d6e93f51cdc862eeff2a554',
      priceId: 'snowball',
      decimals: 18
    }
  },
  '0xE730AFB0C84416e33f17a6C781e46E59C6780CC4': {
    tokenName: 'S3D',
    poolName: 'S3D StableVault Pool',
    icon: '/assets/images/lp-icons/s3d.png',
    a: {
      address: '0xd00ae08403b9bbb9124bb305c09058e32c39a48c',
      priceId: 'wavax',
      decimals: 18
    },
    b: {
      address: '0xf319e2f610462f846d6e93f51cdc862eeff2a554',
      priceId: 'snowball',
      decimals: 18
    }
  },
})

const MAIN_GAUGE_INFO = Object.freeze({
  '0xF4072358C1E3d7841BD7AfDE31F61E17E8d99BE7': {
    tokenName: 'WAVAX-SNOWBALL',
    poolName: 'WAVAX-SNOWBALL Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      priceId: 'wavax',
      decimals: 18
    },
    b: {
      address: '0xC38f41A296A4493Ff429F1238e030924A1542e50',
      priceId: 'snowball',
      decimals: 18
    }
  },
  '0xB4db531076494432eaAA4C6fCD59fcc876af2734': {
    tokenName: 'PNG-SNOWBALL',
    poolName: 'PNG-SNOWBALL Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0x60781C2586D68229fde47564546784ab3fACA982',
      priceId: 'png',
      decimals: 18
    },
    b: {
      address: '0xC38f41A296A4493Ff429F1238e030924A1542e50',
      priceId: 'snowball',
      decimals: 18
    }
  },
  '0x586554828eE99811A8ef75029351179949762c26': {
    tokenName: 'WAVAX-ETHER',
    poolName: 'WAVAX-ETHER Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      priceId: 'wavax',
      decimals: 18
    },
    b: {
      address: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
      priceId: 'ether',
      decimals: 18
    }
  },
  '0x621207093D2e65Bf3aC55dD8Bf0351B980A63815': {
    tokenName: 'PNG-WAVAX',
    poolName: 'PNG-WAVAX Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0x60781C2586D68229fde47564546784ab3fACA982',
      priceId: 'png',
      decimals: 18
    },
    b: {
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      priceId: 'wavax',
      decimals: 18
    }
  },
  '0x00933c16e06b1d15958317C2793BC54394Ae356C': {
    tokenName: 'WAVAX-LINK',
    poolName: 'WAVAX-LINK Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      priceId: 'wavax',
      decimals: 18
    },
    b: {
      address: '0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651',
      priceId: 'LINK',
      decimals: 18
    }
  },
  '0x751089F1bf31B13Fa0F0537ae78108088a2253BF': {
    tokenName: 'SUSHI-WAVAX',
    poolName: 'SUSHI-WAVAX Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc',
      priceId: 'sushi',
      decimals: 18
    },
    b: {
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      priceId: 'wavax',
      decimals: 18
    }
  },
  '0x39BE35904f52E83137881C0AC71501Edf0180181': {
    tokenName: 'WBTC-WAVAX',
    poolName: 'WBTC-WAVAX Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB',
      priceId: 'wbtc',
      decimals: 18
    },
    b: {
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      priceId: 'wavax',
      decimals: 18
    }
  },
  '0x3fcFBCB4b368222fCB4d9c314eCA597489FE8605': {
    tokenName: 'WAVAX-USDT',
    poolName: 'WAVAX-USDT Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      priceId: 'wavax',
      decimals: 18
    },
    b: {
      address: '0xde3A24028580884448a5397872046a019649b084',
      priceId: 'usdt',
      decimals: 18
    }
  },
  '0x53B37b9A6631C462d74D65d61e1c056ea9dAa637': {
    tokenName: 'PNG-ETHER',
    poolName: 'PNG-ETHER Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0x60781C2586D68229fde47564546784ab3fACA982',
      priceId: 'png',
      decimals: 18
    },
    b: {
      address: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
      priceId: 'ether',
      decimals: 18
    }
  },
  '0x763Aa38c837f61DD8429313933Cc47f24E881430': {
    tokenName: 'WBTC-PNG',
    poolName: 'WBTC-PNG Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB',
      priceId: 'wbtc',
      decimals: 18
    },
    b: {
      address: '0x60781C2586D68229fde47564546784ab3fACA982',
      priceId: 'png',
      decimals: 18
    }
  },
  '0x392c51Ab0AF3017E3e22713353eCF5B9d6fBDE84': {
    tokenName: 'PNG-LINK',
    poolName: 'PNG-LINK Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0x60781C2586D68229fde47564546784ab3fACA982',
      priceId: 'png',
      decimals: 18
    },
    b: {
      address: '0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651',
      priceId: 'link',
      decimals: 18
    }
  },
  '0x7987aDB3C789f071FeFC1BEb15Ce6DfDfbc75899': {
    tokenName: 'PNG-USDT',
    poolName: 'PNG-USDT Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0x60781C2586D68229fde47564546784ab3fACA982',
      priceId: 'png',
      decimals: 18
    },
    b: {
      address: '0xde3A24028580884448a5397872046a019649b084',
      priceId: 'usdt',
      decimals: 18
    }
  },
  '0x8eDd233546730C51a9d3840e954E5581Eb3fDAB1': {
    tokenName: 'SUSHI-PNG',
    poolName: 'SUSHI-PNG Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc',
      priceId: 'sushi',
      decimals: 18
    },
    b: {
      address: '0x60781C2586D68229fde47564546784ab3fACA982',
      priceId: 'png',
      decimals: 18
    }
  },
  '0xcD651AD29835099334d312a9372418Eb2b70c72F': {
    tokenName: 'PNG-DAI',
    poolName: 'PNG-DAI Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0x60781C2586D68229fde47564546784ab3fACA982',
      priceId: 'png',
      decimals: 18
    },
    b: {
      address: '0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a',
      priceId: 'dai',
      decimals: 18
    }
  },
  '0x3270b685A4a61252C6f30c1eBca9DbE622984e22': {
    tokenName: 'PNG-AAVE',
    poolName: 'PNG-AAVE Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0x60781C2586D68229fde47564546784ab3fACA982',
      priceId: 'png',
      decimals: 18
    },
    b: {
      address: '0x8cE2Dee54bB9921a2AE0A63dBb2DF8eD88B91dD9',
      priceId: 'aave',
      decimals: 18
    }
  },
  '0x14F98349Af847AB472Eb7f7c705Dc4Bee530713B': {
    tokenName: 'PNG-UNI',
    poolName: 'PNG-UNI Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0x60781C2586D68229fde47564546784ab3fACA982',
      priceId: 'png',
      decimals: 18
    },
    b: {
      address: '0xf39f9671906d8630812f9d9863bBEf5D523c84Ab',
      priceId: 'uni',
      decimals: 18
    }
  },
  '0x234ed7c95Be12b2A0A43fF602e737225C83c2aa1': {
    tokenName: 'PNG-YFI',
    poolName: 'PNG-YFI Pool',
    icon: '/assets/images/lp-icons/pgl.png',
    a: {
      address: '0x60781C2586D68229fde47564546784ab3fACA982',
      priceId: 'png',
      decimals: 18
    },
    b: {
      address: '0x99519AcB025a0e0d44c3875A4BbF03af65933627',
      priceId: 'yfi',
      decimals: 18
    }
  },
})

const GAUGE_INFO = IS_MAINNET ? MAIN_GAUGE_INFO : TEST_GAUGE_INFO

export default GAUGE_INFO;