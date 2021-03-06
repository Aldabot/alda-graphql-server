const SDL = `
type Query {
  getUser(psid: String!): User
  getSaltedgeLoginStatus(loginId: String!): String
  hasValidSaltedgeLogin(psid: String!): Boolean!
}

type Mutation {
  createUser(psid: String!): User
  createSaltedgeCustomer(psid: String!): SaltedgeCustomer
  createSaltedgeLogin(
    psid: String!
    username: String!
    password: String!
    provider: String!
  ): SaltedgeLogin
}

type User {
  id: ID!
  psid: String!
  saltedgeCustomer: SaltedgeCustomer
}

type SaltedgeCustomer {
  id: ID!
  customerId: String!
  user: User!
  logins: [SaltedgeLogin!]!
}

type SaltedgeLogin {
  id: ID!
  loginId: String!
  saltedgeCustomer: SaltedgeCustomer!
  accounts: [SaltedgeAccount!]!
  provider: String!
}

type SaltedgeAccount {
  id: ID!
  accountId: String!
  balance: Float
}
`

module.exports = SDL
