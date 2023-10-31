import { mergeResolvers } from '@graphql-tools/merge';
import {authResolvers} from './auth-resolvers';
import {productResolvers} from './product-resolvers';
import {profileResolvers} from './profile-resolvers';

const resolvers = mergeResolvers([authResolvers,productResolvers,profileResolvers]);

export default resolvers
