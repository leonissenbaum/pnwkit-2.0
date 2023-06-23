import { Channel } from "pusher-js";
import { Kit } from "../..";
import { subscriptionEvent, warAttackSubscriptionFilters } from "../../interfaces/subscriptions";
/**
 * Subscribe to get war attacks in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {warSubscriptionFilters} filters Filter the war attacks
 * @return {Channel} The channel the subscription is running on
 */
export default function warAttackSubscription(this: Kit, event: subscriptionEvent, callback: Function, filters?: warAttackSubscriptionFilters): Promise<Channel>;
