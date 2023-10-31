import { ExpressContext } from 'apollo-server-express';
// import throwCustomError,{ ErrorTypes, MyError } from '../error/error'; 
import { ErrorTypes ,CustomApolloError} from '../error/error'; 
const { ApolloError } = require('apollo-server');

const productResolvers = {
  
    Query:{
    //    FileUpload:GraphQLUpload,
        getAllProduct:async ()=>{
            interface Product {
                title: string;
                description: string;
              }
              
            // const product:Product[] = [{"title":"koko","description":"kookok"}];
            const product:Product[] = [];
            const arr = false;
            if(product.length < 1){
               
                // throw new ApolloError(ErrorTypes.BAD_USER_INPUT.errorCode, {
                //     code: ErrorTypes.BAD_USER_INPUT.errorCode,
                //     statusCode: ErrorTypes.BAD_USER_INPUT.errorStatus,
                //   });
                throw new CustomApolloError(ErrorTypes.NOT_FOUND.errorCode, ErrorTypes.NOT_FOUND.errorCode, ErrorTypes.NOT_FOUND.errorStatus);

            }
            return product;
        },
        getProduct:async(parents:any,args:any,context:ExpressContext,info:any)=>{
            const {id} = args;
            interface Product {
                title: string;
                description: string;
              }
            const product:Product[] = [{"title":"tetete","description":"testcom"}];
return product;
        }
    },

Mutation:{
    createProduct: async(parents:any,args:any,context:ExpressContext,info:any)=>{
        const {name,email,phone,password} = args.user;
        console.log("create",args);
        

    },
    deleteProduct: async(parents:any,args:any,context:ExpressContext,info:any)=>{
        console.log("delete",args);

    },
    updateProduct: async(parents:any,args:any,context:ExpressContext,info:any)=>{
        console.log("update",args);

    }
    
}
} 

export {productResolvers}