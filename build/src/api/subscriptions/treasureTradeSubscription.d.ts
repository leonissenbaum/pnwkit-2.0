import { Channel } from "pusher-js";
import { Kit } from "../..";
import { subscriptionEvent, treasureTradeSubscriptionFilters } from "../../interfaces/subscriptions";
/**
 * Subscribe to get treasure trades in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {warSubscriptionFilters} filters Filter the treasure trades
 * @return {Channel} The channel the subscription is running on
 */
export default function treasureSubscription(this: Kit, event: subscriptionEvent, callback: Function, filters?: treasureTradeSubscriptionFilters): Promise<Channel>;
