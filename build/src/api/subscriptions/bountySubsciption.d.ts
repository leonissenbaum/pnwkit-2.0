import { Channel } from "pusher-js";
import { Kit } from "../..";
import { subscriptionEvent } from "../../interfaces/subscriptions";
/**
 * Subscribe to get bounties in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @return {Channel} The channel the subscription is running on
 */
export default function bountySubscription(this: Kit, event: subscriptionEvent, callback: Function): Promise<Channel>;
