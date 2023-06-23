import memoize from 'memoizee';
import { rateLimitI } from './interfaces/other';
import PnwKitAPI from './api';
import PnwKitUtils from './utilities';
/**
 * The main application class
 */
export declare class Kit extends PnwKitAPI {
    [key: string]: any;
    utilities: PnwKitUtils;
    apiKey: string;
    botKey: string;
    botKeyApiKey: string;
    private rateLimitData;
    /**
     * Set the pnwkit instance's key.
     * @param key
     */
    setKey(key: string): void;
    /**
    * Set the x-pnwkit instance's key.
    * @param botKey
    * @param botKeyApiKey
    */
    setBotKeys(botKey: string, botKeyApiKey: string): void;
    get rateLimit(): rateLimitI;
    /**
     * Do not call this function, this is internal.
     * @param value
     */
    setRateLimit(value: rateLimitI): void;
    /**
     * Lets you cache results of a query call
     *
     * It returns a cached version of the function that accepts the same arguments but caches it for a certain period of time
     * @param {(...args: any[]) => any} queryFunc The query function you want to cache
     * @param {number} maxAgeMinutes The max number of minutes to cache it for
     *
     * @return {Function} returns a cached version of the function
     */
    cached(queryFunc: (...args: any[]) => any, maxAgeMinutes: number): ((...args: any[]) => any) & memoize.Memoized<(...args: any[]) => any>;
}
declare const kit: Kit;
export default kit;
