import Pusher from "pusher-js";
import { Kit } from "../..";

/**
 * Subscribe to get treasure trades in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {subscriptionFilters} filters Filter the treasure trades
 * @return {channelSubscription} The channel the subscription is running on
 */
export default async function treasureSubscription(this: Kit, channel: string, event: string, callback: Function): Promise<void> {

    const pusher = new Pusher("a22734a47847a64386c8", {
        cluster: 'us2',
        wsHost: "socket.politicsandwar.com",
        disableStats: true,
        authEndpoint: "https://api.politicsandwar.com/subscriptions/v1/auth",
    });

    const newChannel = pusher.subscribe(channel);

    newChannel.bind(`BULK_TREASURE_TRADE_${event.toUpperCase()}`, callback);

    return;
}