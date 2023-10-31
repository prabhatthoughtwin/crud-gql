import { mergeTypeDefs } from '@graphql-tools/merge';
import {authTypeDefs} from './auth-typeDefs';
import {productTypeDefs} from './product-typeDefs';
import {profileTypeDefs} from './profile-typeDefs';

const typeDefs = mergeTypeDefs([authTypeDefs,productTypeDefs,profileTypeDefs]);

export default typeDefs;