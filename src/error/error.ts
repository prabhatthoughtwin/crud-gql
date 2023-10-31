import { ApolloError } from 'apollo-server';


import {ApolloServerErrorCode} from '@apollo/server/errors'
import {GraphQLError} from 'graphql';


export const ErrorTypes = {
  BAD_USER_INPUT:{
    errorCode:ApolloServerErrorCode.BAD_USER_INPUT,
    errorStatus:400,
  },
  BAD_REQUEST:{
    errorCode:ApolloServerErrorCode.BAD_REQUEST,
    errorStatus:400,
  },
  NOT_FOUND:{
    errorCode:'NOT_FOUND',
    errorStatus:404,
  },
  UNAUTHENTICATED:{
    errorCode:'UNAUTHENTICATED',
    errorStatus:401,
  },
  ALLREADY_EXISTS:{
    errorCode:'ALLREADY_EXISTS',
    errorStatus:400,
  },
  INTERNAL_SERVER_ERROR:{
    errorCode:ApolloServerErrorCode.INTERNAL_SERVER_ERROR,
    errorStatus:401,
  },
 
}



export class CustomApolloError extends ApolloError {
  constructor(message: string, code: string, statusCode: number) {
        super(message, code);
        this.extensions = {
          ...this.extensions,
          statusCode,
        };
      }
}
