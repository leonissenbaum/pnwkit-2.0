import { Channel } from "pusher-js";
import { Kit } from "../..";
import { TaxBracketSubscriptionFilters, subscriptionEvent } from "../../interfaces/subscriptions";
/**
 * Subscribe to get tax brackets in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {TaxBracketSubscriptionFilters} filters Filter the tax brackets
 * @return {Channel} The channel the subscription is running on
 */
export default function taxBracketSubscription(this: Kit, event: subscriptionEvent, callback: Function, filters?: TaxBracketSubscriptionFilters): Promise<Channel>;
