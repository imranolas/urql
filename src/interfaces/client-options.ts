import { ICache } from './cache';
import { ApolloLink } from 'apollo-link';

export interface IClientOptions {
  url?: string;
  fetchOptions?: object | (() => object);
  cache?: ICache;
  initialCache?: object;
  link?: ApolloLink;
}
