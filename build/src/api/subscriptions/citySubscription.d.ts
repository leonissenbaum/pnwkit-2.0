import { Channel } from "pusher-js";
import { Kit } from "../..";
import { subscriptionEvent, citySubscriptionFilters } from "../../interfaces/subscriptions";
/**
 * Subscribe to get bank records in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {citySubscriptionFilters} filters Filter the bank records
 * @return {Channel} The channel the subscription is running on
 */
export default function citySubscription(this: Kit, event: subscriptionEvent, callback: Function, filters?: citySubscriptionFilters): Promise<Channel>;
