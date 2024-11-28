# pnwkit-2.0
A new 2.0 version that was made using code from pnwkit 1.0 with some modifications and additions.


## Authors

- [@darkblade](https://github.com/darkblade1078)

## Special Thanks

- [@Henrik](https://github.com/icehenrik)
- [@Doctor](https://github.com/BlackAsLight)
- [@Village](https://github.com/mrvillage)
- [@leonissenbaum](https://github.com/leonissenbaum)
- [@Sol](https://github.com/S0l4RIS9uk)


## Installation

Install pnwkit 2.0 with npm

```bash
  npm install pnwkit-2.0
```
    
## Usage/Examples

### Queries
Call whatever data you want with queries
```javascript
pnwkit.setKeys('api key');

const nations = await pnwkit.nationQuery({id: [100541], first: 1}, `name`);

console.log(`Nation name: ${nations[0].name}`);
```

### Mutations
Use mutations to handle bank transactions and other things
```javascript
pnwkit.setKeys('api key', 'bot key');

const bankDeposit = await pnwkit.bankDepositMutation({ money: 1, note: 'works' }, `date`);

console.log(`Deposit Date: ${bankDeposit.date}`);
```

### Subscriptions
Subscriptions can give you data in real time
```javascript
  pnwkit.setKeys('api key');

  const channel = await kit.subscriptionChannel(subscriptionModel.WAR, subscriptionEvent.CREATE);

  await kit.alliancePositionSubscription(channel, subscriptionEvent.UPDATE, callback);

  console.log(channel);

  function callback(data: war[]) {
    console.log(data);
   }
```

### Utilities
Utilities are here to help calculate data
```javascript
pnwkit.setKeys('api key');

  const cityCost = pnwkit.utilities.cityCost(30, 31, true, true, true, true, true);

  console.log(cityCost);
```


## Supported API Features
Here is a list of all the quries, mutations, and subscriptions that are supported by pnwkit 2.0 as of now.
### Queries
- activityStatsQuery
- allianceQuery
- apiKeyDetailsQuery
- bankRecordsQuery
- baseballGameQuery
- bannedNationQuery
- baseballPlayerQuery
- baseballTeamQuery
- bountyQuery
- cityQuery
- colorQuery
- customQuery (for those who want to run custom GraphQL queries)
- emabrgoQuery
- gameInfoQuery
- nationQuery
- nationResourceStatQuery
- resourceStatsQuery
- topTradeInfoQuery
- tradePricesQuery
- tradeQuery
- treasureQuery
- treasureTradeQuery
- warAttackQuery
- warQuery
- bulletinQuery
- bulletinRepliesQuery

### Mutations
- acceptPersonalTradeMutation
- declinePersonalTradeMutation
- approveTreatyMutation
- proposeTreatyMutation
- cancelTreatyMutation
- assignAlliancePositionMutation
- editAlliancePositionMutation
- assignTaxBracketMutation
- editTaxBracketMutation
- deleteTaxBracketMutation
- bankDepositMutation
- bankWithdrawMutation
- createAlliancePositionMutation
- deleteAlliancePositionMutation

### Subscriptions
- alliancePositionSubscription
- allianceSubscription
- bankRecSubscription
- baseballGameSubscription
- baseballTeamSubscription
- bountySubscription
- citySubscription
- embargoSubscription
- nationSubscription
- TaxBracketSubscription
- tradeSubscription
- treasureTradeSubscription
- treatySubscription
- warAttackSubscription
- warSubscription

### V2
- sendMessage
