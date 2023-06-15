"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kit = void 0;
const memoizee_1 = __importDefault(require("memoizee"));
const api_1 = __importDefault(require("./api"));
const utilities_1 = __importDefault(require("./utilities"));
/**
 * The main application class
 */
class Kit extends api_1.default {
    constructor() {
        super(...arguments);
        this.utilities = new utilities_1.default;
        this.apiKey = '';
        this.botKey = '';
        this.botKeyApiKey = '';
        this.rateLimitData = {
            resetAfterSeconds: 0,
            limit: 0,
            remaining: 0,
            reset: 0,
        };
    }
    /**
     * Set the pnwkit instance's key.
     * @param key
     */
    setKey(key) {
        this.apiKey = key;
    }
    /**
    * Set the x-pnwkit instance's key.
    * @param botKey
    * @param botKeyApiKey
    */
    setBotKeys(botKey, botKeyApiKey) {
        this.botKey = botKey;
        this.botKeyApiKey = botKeyApiKey;
    }
    get rateLimit() {
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
    setRateLimit(value) {
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
    cached(queryFunc, maxAgeMinutes) {
        return (0, memoizee_1.default)(queryFunc.bind(this), { maxAge: maxAgeMinutes * 60 * 1000, promise: true, primitive: true });
    }
}
exports.Kit = Kit;
const kit = new Kit();
for (const [key] of Object.entries(kit)) {
    exports[key] = kit[key];
}
exports.setKey = kit.setKey;
exports.set_bot_key = kit.setBotKeys;
exports.cached = kit.cached;
exports.setRateLimit = kit.setRateLimit;
exports.default = kit;
