import { Channel } from "pusher-js";
import { Kit } from "../..";
import { subscriptionEvent } from "../../interfaces/subscriptions";
import { baseballTeam } from "../../interfaces/queries/baseball";
/**
 * Subscribe to get baseball games in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {bankRecSubscriptionFilters} filters Filter the baseball games
 * @return {Channel} The channel the subscription is running on
 */
export default function baseballTeamSubscription(this: Kit, event: subscriptionEvent, callback: Function, filters?: baseballTeam): Promise<Channel>;
