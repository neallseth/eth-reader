# eth-reader
REST API to retrieve basic information from the Ethereum blockchain.  Designed for deployment with Vercel's Serverless Functions.

## Endpoints

### getBalance
*Returns the current balance of an address*
```
/api/get-balance/<address>
```

### transactionCount
*Returns the number of transactions an address has ever sent*
```
/api/transaction-count/<address>
```
### resolveENS
*Looks up the address of name. If the name is not owned, or does not have a Resolver configured, or the Resolver does not have an address configured, null is returned.*
```
/api/resolve-ens/<ens>
```
