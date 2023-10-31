import express, {
  Application
} from "express";

import { ApolloServer, gql,UserInputError } from "apollo-server-express";
import resolvers from "./resolvers/index";
import typeDefs from "./typeDefs/index";
import { setHttpPlugin } from './error/plugins'; 


import { graphqlUploadExpress } from 'graphql-upload'
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
async function startServer() {
  const app: Application = express();
  app.use(express.static("public"));
 
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  introspection:true,
   
    plugins: [
      setHttpPlugin,
      
    ],
    formatError: (error) => {
      
      
      const extensions = error.extensions || {};
      return {
        message: error.message,
        statusCode: extensions.statusCode || 400,
        data: null,
      };
    },
  });
  await apolloServer.start();
  app.use(graphqlUploadExpress());
  apolloServer.applyMiddleware({ app: app });
  app.listen("2000", () => {
    console.log("Server Running on port 2000......");
  });
}
startServer();
