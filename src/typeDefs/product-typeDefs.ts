import { gql } from 'apollo-server-express';


const productTypeDefs = gql`
 
type Product{
    id:ID
    title:String
    price:String
    description:String
    color:String
   
}

type Query{
   
    getAllProduct:[Product]
    getProduct(id:ID):Product
}
input productInput{
    title:String
    price:String
    description:String
    color:String
    
}
type Mutation{
   
    createProduct(product:productInput):Product
    deleteProduct(id:ID):String
    updateProduct(id:ID):String
}

`
export {productTypeDefs};