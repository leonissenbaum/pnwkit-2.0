import { Channel } from "pusher-js";
import { Kit } from "../..";
import { subscriptionEvent, warSubscriptionFilters } from "../../interfaces/subscriptions";
/**
 * Subscribe to get wars in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {warSubscriptionFilters} filters Filter the wars
 * @return {Channel} The channel the subscription is running on
 */
export default function warSubscription(this: Kit, event: subscriptionEvent, callback: Function, filters?: warSubscriptionFilters): Promise<Channel>;
