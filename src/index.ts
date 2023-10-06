import memoize from 'memoizee';
import { rateLimitI } from './interfaces/other';
import PnwKitAPI from './api';
import PnwKitUtils from './utilities';

/**
 * The main application class
 */
export class Kit extends PnwKitAPI {
    [key: string]: any;
    utilities = new PnwKitUtils;

    apiKey = '';
    botKey = '';

    private rateLimitData = {
        resetAfterSeconds: 0,
        limit: 0,
        remaining: 0,
        reset: 0,
    };

    /**
     * Set the pnwkit instance's API Key, bot key.
     * @param {string} apiKey
     * @param {string} botKey
     */
    setApiKey(apiKey: string, botKey?: string): void {
        this.apiKey = apiKey;

        if (botKey)
            this.botKey = botKey;
    }

    get rateLimit(): rateLimitI {
        return new Proxy(this.rateLimitData, {
            set: () => {
                return false;
            },
        });
    }

    /**
     * Do not call this function, this is internal.
     * @param value
     */
    setRateLimit(value: rateLimitI): void {
        this.rateLimitData = value;
    }

    /**
     * Lets you cache results of a query call
     *
     * It returns a cached version of the function that accepts the same arguments but caches it for a certain period of time
     * @param {(...args: any[]) => any} queryFunc The query function you want to cache
     * @param {number} maxAgeMinutes The max number of minutes to cache it for
     *
     * @return {Function} returns a cached version of the function
     */
    cached(queryFunc: (...args: any[]) => any, maxAgeMinutes: number) {
        return memoize(queryFunc.bind(this), { maxAge: maxAgeMinutes * 60 * 1000, promise: true, primitive: true });
    }
}

const kit = new Kit();

for (const [key] of Object.entries(kit)) {
    exports[key] = kit[key];
}

exports.setKeys = kit.setKeys;
exports.cached = kit.cached;
exports.setRateLimit = kit.setRateLimit;

export default kit;