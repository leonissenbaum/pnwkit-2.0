import Pusher from "pusher-js";
import { Kit } from "../..";

/**
 * Subscribe to get war attacks in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {subscriptionFilters} filters Filter the war attacks
 * @return {channelSubscription} The channel the subscription is running on
 */
export default async function warAttackSubscription(this: Kit, channel: string, event: string, callback: Function): Promise<void> {

    const pusher = new Pusher("a22734a47847a64386c8", {
        cluster: 'us2',
        wsHost: "socket.politicsandwar.com",
        disableStats: true,
        authEndpoint: "https://api.politicsandwar.com/subscriptions/v1/auth",
    });

    const newChannel = pusher.subscribe(channel);

    newChannel.bind(`BULK_WARATTACK_${event.toUpperCase()}`, callback);

    return;
}