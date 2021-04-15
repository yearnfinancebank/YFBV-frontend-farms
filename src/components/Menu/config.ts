import { MenuEntry } from 'uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=ETH&outputCurrency=0x1590b659D48717F541A19534d3571573eA7A49A5',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/0x1590b659D48717F541A19534d3571573eA7A49A5/BNB',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: '/staking',
  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: '/referrals',
  },
  {
    label: 'Lottery (Pending)',
    icon: 'TicketIcon',
    href: '/',
  },
  // {
  //   label: 'Referrals',
  //   icon: 'PoolIcon3',
  //   href: '/referrals',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x1590b659D48717F541A19534d3571573eA7A49A5',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x1590b659D48717F541A19534d3571573eA7A49A5',
      },
	  {
        label: 'Chart',
        href: 'https://goswapp-bsc.web.app/0xc11c20cc11f8a7405aee07093290d4a7fb3722b3',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Pig-Finance',
      },
      {
        label: 'Docs',
        href: 'https://pig-finance.gitbook.io/pig-finance/',
      },
    ],
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://pig-finance.gitbook.io/pig-finance/security/audit',
  },
  {
    label: 'Roadmap',
    icon: 'NftIcon',
    href: 'https://pig-finance.gitbook.io/pig-finance/roadmap',
  },
  {
    label: 'Hybrid Burning Mechanism',
    icon: 'IfoIcon',
    href: 'https://pig-finance.gitbook.io/pig-finance/tokenomics/hybrid-burning-mechanism',
  },
  {
    label: 'Forked from audited Goosedefi',
    icon: 'GooseIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
]

export default config
