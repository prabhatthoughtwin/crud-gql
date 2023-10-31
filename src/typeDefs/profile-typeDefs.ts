import { gql } from 'apollo-server-express';


const profileTypeDefs = gql`
scalar Upload

  type File {
     id: ID!
     filename: String!
     mimetype: String!
   }

 
type Mutation{
  addPhoto(file: Upload!): File!
  multipleUpload(files: [Upload!]!): [File!]!

}

`
export {profileTypeDefs};





