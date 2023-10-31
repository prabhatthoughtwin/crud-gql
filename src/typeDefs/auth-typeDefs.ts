import { gql } from 'apollo-server-express';


const authTypeDefs = gql`
type User{
    id:ID
    name:String
    email:String
    phone:String
    password:String
}
type Query{
   
    getAllUser:[User]
    getUser(id:ID):User
}
input userInput{
    name:String
    email:String
    phone:String
    password:String
}
type Mutation{
   
    createUser(user:userInput):User
    deleteUser(id:ID):String
    updateUser(id:ID):String
}

`
export {authTypeDefs};