import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Retards.Wiki',
  description:
    'A Wiki for Retards. For Posterity, this site documents Profoundly Autistic Adventures as narrated by the members of the Retard Security Council.',
  href: 'https://retards.wiki',
  author: 'Retard Security Council',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'mailto:careers@retards.wiki',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
