import { Fetch, clearResponseCache } from './fetch';
import {
  fetchDedupe,
  getRequestKey,
  clearRequestCache,
  isRequestInFlight
} from './fetch-dedupe';

export {
  Fetch,
  fetchDedupe,
  getRequestKey,
  clearRequestCache,
  clearResponseCache,
  isRequestInFlight
};
