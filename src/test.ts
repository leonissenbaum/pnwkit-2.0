import pnwkit from './index';
import { war } from './interfaces/queries/war';
import { subscriptionEvent } from './interfaces/subscriptions';
pnwkit.setKey(`c17ef28f1a6636`);

(async () => {
    let subscription = await pnwkit.warSubscription(subscriptionEvent.CREATE, bob,
        {
            att_alliance_id: [619, 3683],
            def_alliance_id: [619, 3683]
        });
})();

function bob(data: war[]) {

    for(let i = 0; i < data.length; i++) {

        console.log(data[i])
    }
}