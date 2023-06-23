import { Channel } from "pusher-js";
import { Kit } from "../..";
import { embargoSubscriptionFilters, subscriptionEvent } from "../../interfaces/subscriptions";
/**
 * Subscribe to get embargoes in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {embargoSubscriptionFilters} filters Filter the embargoes
 * @return {Channel} The channel the subscription is running on
 */
export default function embargoSubscription(this: Kit, event: subscriptionEvent, callback: Function, filters?: embargoSubscriptionFilters): Promise<Channel>;
