# Steps to create a raw transaction on bitcoin testnet using console
## Prerequisite 

- Installing bitcoin core 
- Downloading and getting up to date with blockchain (Could take a while and take up a lot of space)
- At least one bitcoin address on the bitcoin testnet



## Creating the transaction

- Create a receiving wallet with following command <getnewaddress MyReceivingWallet> (Will create a address) 
- Copy this address to be used later 
- To view all utxo type in <listunspent> in console 
- The output for <listunspent> will be an array of utxo's with txid's this can be used when building up a raw transaction
- To get information about a specific transaction you can use the <gettxout <TXID> <VOUT>> txid and vout can be found by referencing the <listunspent> command output
- To create a raw transaction you can use the <createrawtransaction> command the output of this will be a hash. Reference transaction1.txt for detail on raw transaction
- To inspect raw tranaction and verify that everything worked as expected use the <decoderawtransaction> command with the hex output of previous step
- To sign transaction before submitting we can use the <signsignrawtransactionwithwallet> command coupled with the hash from <createrawtransaction> we received as earlier 
- This will output a hex value
- <decoderawtransaction> with hex output from signing (when i did this nothing visibily changed)
- <sendrawtransaction> hex 
- <gettransaction> hash