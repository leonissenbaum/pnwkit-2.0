import Pusher, { Channel } from "pusher-js";
import { Kit } from "../..";
import { subscriptionEvent } from "../../interfaces/subscriptions";
import { bounty } from "../../interfaces/queries/bounty";

/**
 * Subscribe to get bounties in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @return {Channel} The channel the subscription is running on
 */
export default async function bountySubscription(this: Kit, event: subscriptionEvent, callback: Function) {
    if (!this.apiKey) throw new Error('SubscriptionService: Cannot make a call without an API key!');

    const channelName = JSON.parse(await (await fetch(`https://api.politicsandwar.com/subscriptions/v1/subscribe/bounty/${event}?api_key=${this.apiKey}`, {
        method: 'GET',
    })).text()).channel;

    const pusher = new Pusher("a22734a47847a64386c8", {
        cluster: 'us2',
        wsHost: "socket.politicsandwar.com",
        disableStats: true,
        authEndpoint: "https://api.politicsandwar.com/subscriptions/v1/auth",
    });

    const channel = pusher.subscribe(channelName);

    channel.bind(`BULK_BOUNTY_${event.toUpperCase()}`, function (data: bounty[]) {

        callback(data);
        return;
    });

    return channel;
}