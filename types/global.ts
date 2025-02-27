export interface Idea {
  id: number
  title: string
  description: string
  technology: string[]
  difficulty: string
  time_taken: number
  source?: string | string[]
  link?: string | string[]
}

// Github contributors
// @see https://api.github.com/repos/anburocky3/developer-resources/contributors
export interface Contributor {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  contributions: number
}
