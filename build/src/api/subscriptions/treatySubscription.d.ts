import { Channel } from "pusher-js";
import { Kit } from "../..";
import { TreatySubscriptionFilters, subscriptionEvent } from "../../interfaces/subscriptions";
/**
 * Subscribe to get treaties in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {warSubscriptionFilters} filters Filter the treaties
 * @return {Channel} The channel the subscription is running on
 */
export default function treatySubscription(this: Kit, event: subscriptionEvent, callback: Function, filters?: TreatySubscriptionFilters): Promise<Channel>;
