import Pusher from "pusher-js";
import { Kit } from "../..";
import {subscriptionCluster} from "../../interfaces/subscriptions";

/**
 * Subscribe to get alliance positions in real time
 * @param channel The channel to subscribe to
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {subscriptionCluster} [cluster=subscriptionCluster.OHIO] The location of the subscription server
 * @return {void}
 */
export default async function allianceSubscription(this: Kit, channel: string, event: string, callback: Function, cluster: subscriptionCluster = subscriptionCluster.OHIO): Promise<void> {

    const pusher = new Pusher("a22734a47847a64386c8", {
        cluster: cluster,
        wsHost: "socket.politicsandwar.com",
        disableStats: true,
        authEndpoint: "https://api.politicsandwar.com/subscriptions/v1/auth",
    });

    const newChannel = pusher.subscribe(channel);

    newChannel.bind(`BULK_ALLIANCE_${event.toUpperCase()}`, callback);

    return;
}
