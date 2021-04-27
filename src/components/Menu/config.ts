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
        href: '',
      },
      {
        label: 'Liquidity',
        href: '',
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
        href: '',
      },
	  {
        label: 'Chart',
        href: '',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: '',
      },
    ],
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: '',
  },
  {
    label: 'Forked from audited Goosedefi',
    icon: 'GooseIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
]

export default config
