"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pusher_js_1 = __importDefault(require("pusher-js"));
/**
 * Subscribe to get bounties in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @return {Channel} The channel the subscription is running on
 */
function bountySubscription(event, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.apiKey)
            throw new Error('SubscriptionService: Cannot make a call without an API key!');
        const channelName = JSON.parse(yield (yield fetch(`https://api.politicsandwar.com/subscriptions/v1/subscribe/bounty/${event}?api_key=${this.apiKey}`, {
            method: 'GET',
        })).text()).channel;
        const pusher = new pusher_js_1.default("a22734a47847a64386c8", {
            cluster: 'us2',
            wsHost: "socket.politicsandwar.com",
            disableStats: true,
            authEndpoint: "https://api.politicsandwar.com/subscriptions/v1/auth",
        });
        const channel = pusher.subscribe(channelName);
        channel.bind(`BULK_BOUNTY_${event.toUpperCase()}`, function (data) {
            callback(data);
            return;
        });
        return channel;
    });
}
exports.default = bountySubscription;
//# sourceMappingURL=bountySubsciption.js.map