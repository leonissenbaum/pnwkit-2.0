import { Channel } from "pusher-js";
import { Kit } from "../..";
import { allianceSubscriptionFilters, subscriptionEvent } from "../../interfaces/subscriptions";
/**
 * Subscribe to get alliance positions in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {allianceSubscriptionFilters} filters Filter the alliances
 * @return {Channel} The channel the subscription is running on
 */
export default function alliancePositionSubscription(this: Kit, event: subscriptionEvent, callback: Function, filters?: allianceSubscriptionFilters): Promise<Channel>;
