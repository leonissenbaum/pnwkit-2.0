import { Channel } from "pusher-js";
import { Kit } from "../..";
import { nationSubscriptionFilters, subscriptionEvent } from "../../interfaces/subscriptions";
/**
 * Subscribe to get nations in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {nationSubscriptionFilters} filters Filter the nations
 * @return {Channel} The channel the subscription is running on
 */
export default function nationSubscription(this: Kit, event: subscriptionEvent, callback: Function, filters?: nationSubscriptionFilters): Promise<Channel>;
