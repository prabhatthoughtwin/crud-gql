import { ExpressContext } from 'apollo-server-express';


const authResolvers = {
    Query:{
       
        getAllUser:async ()=>{
            interface User {
                name: string;
                email: string;
              }
            const user:User[] = [{"name":"tetete","email":"test@gmail.com"}];
return user;
        },
        getUser:async(parents:any,args:any,context:ExpressContext,info:any)=>{
            const {id} = args;
            interface User {
                name: string;
                email: string;
              }
            const user:User[] = [{"name":"tetete","email":"test@gmail.com"}];
return user;
        }
    },

Mutation:{
    createUser: async(parents:any,args:any,context:ExpressContext,info:any)=>{
        const {name,email,phone,password} = args.user;
        console.log("create",args);
        

    },
    deleteUser: async(parents:any,args:any,context:ExpressContext,info:any)=>{
        console.log("delete",args);

    },
    updateUser: async(parents:any,args:any,context:ExpressContext,info:any)=>{
        console.log("update",args);

    }
}
} 

export {authResolvers}