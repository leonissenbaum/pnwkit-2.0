import { Kit } from "../..";
import { subscriptionFilters, subscriptionEvent, subscriptionModel } from "../../interfaces/subscriptions";
import GraphQL from "../../services/GraphQL";

/**
 * get a subscription channel
 * @param {subscriptionModel} model What model is the channel
 * @param {subscriptionEvent} event What type of event you want
 * @param {subscriptionFilters} filters Filters for the channel
 * @return {void}
 */
export default async function subscriptionChannel(this: Kit, model: subscriptionModel, event: subscriptionEvent, filters?: subscriptionFilters): Promise<string> {
    if (!this.apiKey) throw new Error('SubscriptionService: Cannot make a call without an API key!');

    let linkFilter = ``;

    if (filters) {
        let k: keyof typeof filters;
        for (k in filters) {
            (Array.isArray(filters[k])) ? linkFilter += `&${k}=${filters[k]?.toString()}` : linkFilter += `&${k}=${filters[k]}`
        }
    }

    const res = await GraphQL.makeChannelCall(model, event, this.apiKey, linkFilter);

    return res.channel;
}