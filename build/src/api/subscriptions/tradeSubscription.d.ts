import { Channel } from "pusher-js";
import { Kit } from "../..";
import { TradeSubscriptionFilters, subscriptionEvent } from "../../interfaces/subscriptions";
/**
 * Subscribe to get trades in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {warSubscriptionFilters} filters Filter the trades
 * @return {Channel} The channel the subscription is running on
 */
export default function tradeSubscription(this: Kit, event: subscriptionEvent, callback: Function, filters?: TradeSubscriptionFilters): Promise<Channel>;
