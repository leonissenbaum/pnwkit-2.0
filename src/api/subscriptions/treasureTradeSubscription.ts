import Pusher, { Channel } from "pusher-js";
import { Kit } from "../..";
import { subscriptionEvent, treasureTradeSubscriptionFilters } from "../../interfaces/subscriptions";
import { treaty } from "../../interfaces/queries/treaty";
import { treasureTrade } from "../../interfaces/queries/treasureTrade";

/**
 * Subscribe to get treasure trades in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {warSubscriptionFilters} filters Filter the treasure trades
 * @return {Channel} The channel the subscription is running on
 */
export default async function treasureSubscription(this: Kit, event: subscriptionEvent, callback: Function, filters?: treasureTradeSubscriptionFilters) {
    if (!this.apiKey) throw new Error('SubscriptionService: Cannot make a call without an API key!');

    let linkFilter = ``;

    if (filters) {
        let k: keyof typeof filters;
        for (k in filters) {

            (Array.isArray(filters[k])) ? linkFilter += `&${k}=${filters[k]?.toString()}` : linkFilter += `&${k}=${filters[k]}`
        }
    }

    const channelName = JSON.parse(await (await fetch(`https://api.politicsandwar.com/subscriptions/v1/subscribe/treasure_trade/${event}?api_key=${this.apiKey}${linkFilter}`, {
        method: 'GET',
    })).text()).channel;

    const pusher = new Pusher("a22734a47847a64386c8", {
        cluster: 'us2',
        wsHost: "socket.politicsandwar.com",
        disableStats: true,
        authEndpoint: "https://api.politicsandwar.com/subscriptions/v1/auth",
    });

    const channel = pusher.subscribe(channelName);

    channel.bind(`BULK_TREASURE_TRADE_${event.toUpperCase()}`, function (data: treasureTrade[]) {

        callback(data);
        return;
    });

    return channel;
}