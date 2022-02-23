const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type User {
    _id: Id
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]!
  }
  type Book {
    authors: [String]!
    description: String!
    bookId: Id!
    title: String!
    image: String
    link: String
  }
  type Auth {
    token: Id!
    user: User
  }
  input BookInput{
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    link: String
    image:String
}
type Query {
  users: [User]
  user(id: Id!): User
  me: User
}
type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth login(email: String!, password: String!): Auth
 
  saveBook (
  bookToSave: BookInput!):User
  removeBook(bookId: String): User
}
`;

module.exports = typeDefs;