import superagent from "superagent";
import { Kit } from "../..";
import { messageResult } from "../../interfaces/v2/sendMessage";


export default async function sendMessage(this: Kit, recipientID: number, subject: string, message: string): Promise<messageResult> {
    if (!this.apiKey) throw new Error('SuperAgent: Cannot make a call without an API key!');

    const res = await superagent.post(`https://politicsandwar.com/api/send-message/`)
        .query({
            'key': `${this.apiKey}`,
        })
        .field('to', `${recipientID}`)
        .field('subject', `${subject}`)
        .field('message', `${message}`)
        .accept('json')
        .then()
        .catch((e: Error) => {
            throw new Error(`SuperAgent: Failed to make api call, ${e}`);
        });

    if (!res.body.success) throw new Error(`SuperAgent: Received no data from API call, ${JSON.stringify(res.body)}`);

    return res.body;
}