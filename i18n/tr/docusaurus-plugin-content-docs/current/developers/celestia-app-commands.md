- - -
yardımcı CLI komutları
- - -

# Yardımcı CLI komutları

Tüm seçenekleri görüntüleyin:

```console
$ celestia-appd --help
Start celestia app

Usage:
  celestia-appd [command]

Available Commands:
  add-genesis-account Add a genesis account to genesis.json
  collect-gentxs      Collect genesis txs and output a genesis.json file
  config              Create or query an application CLI configuration file
  debug               Tool for helping with debugging your application
  export              Export state to JSON
  gentx               Generate a genesis tx carrying a self delegation
  help                Help about any command
  init                Initialize private validator, p2p, genesis, 
  and application configuration files
  keys                Manage your application's keys
  migrate             Migrate genesis to a specified target version
  query               Querying subcommands
  rollback            rollback tendermint state by one height
  rollback            rollback cosmos-sdk and tendermint state by one height
  start               Run the full node
  status              Query remote node for status
  tendermint          Tendermint subcommands
  tx                  Transactions subcommands
  validate-genesis    validates the genesis file at the default 
  location or at the location passed as an arg
  version             Print the application binary version information
```

## Cüzdan Oluşturma

```sh
celestia-appd config keyring-backend test
```

`keyring-backend` configures the keyring's backend, where the keys are stored.

Options are: `os|file|kwallet|pass|test|memory`.

## Anahtar yönetimi (Key Management)

```sh
# Anahtarları görüntüleme
celestia-appd keys list

# Anahtar ekleme
celestia-appd keys add <KEY_NAME>

# Anahtar silme
celestia-appd keys delete <KEY_NAME>

# Anahtarı yeniden adlandırma
celestia-appd keys rename <CURRENT_KEY_NAME> <NEW_KEY_NAME>
```

### Anahtarları içe ve dışa aktarma

Yerel anahtar tabanına şifreli ve ASCII zırhlı bir özel anahtarı içe aktarın.

```sh
celestia-appd keys import <KEY_NAME> <KEY_FILE>
```

Örnek kullanım:

```sh
celestia-appd keys import amanda ./keyfile.txt
```

Yerel Keyringten şifreli ve ASCII zırhlı biçimde bir özel anahtarı dışa aktarın:

```sh
celestia-appd keys export <KEY_NAME>

# ardından şifreli özel anahtar için bir parola belirlemeniz istenecektir:
Enter passphrase to encrypt the exported key:
```

Bir şifre belirledikten sonra şifreli anahtarınız görüntülenecektir.

## Alt komutları sorgulama

Kullanım:

```sh
celestia-appd query <FLAGS> | <COMMAND>

# alias q
celestia-appd q <FLAGS> | <COMMAND>
```

Tüm opsiyonları görmek için:

```sh
celestia-appd q --help
```

## Token yönetimi

Token balansı öğrenme:

```sh
celestia-appd q bank balances <ADDRESS> --node <NODE_URI>
```

Örnek kullanım:

```sh
celestia-appd q bank balances celestia1czpgn3hdh9sodm06d5qk23xzgpq2uyc8ggdqgw \
--node https://rpc-mamaki.pops.one
```

Tokenleri bir cüzdandan diğerine aktarın:

```sh
celestia-appd tx bank send <FROM_ADDRESS> <TO_ADDRESS> \
<amount> --node <NODE_URI> --chain-id <CHAIN_ID>
```

Örnek kullanım:

```sh
celestia-appd tx bank send <FROM_ADDRESS> <TO_ADDRESS> \
19000000utia --node https://rpc-mamaki.pops.one/ --chain-id mamaki
```

To see options:

```sh
celestia-appd tx bank send --help
```

## Governance

You can vote on a governance proposal with the following command:

```sh
celestia-appd tx gov vote <proposal id> <yes or no> --from <wallet> --chain-id <chain-id>
```

## Claim validator rewards

You can claim your validator rewards with the following command:

```sh
celestia-appd tx distribution withdraw-rewards <validator valoper>\
    --commission --from=<validator wallet> --chain-id <chain-id> --gas auto -y
```

## Delegate & undelegate tokens

You can `delegate` your tokens to a validator with the following command:

```sh
celestia-appd tx staking delegate <validator valoper> <amount>\
    --from <wallet> --chain-id <chain-id>
```

You can undelegate tokens to a validator with the `unbond` command:

```sh
celestia-appd tx staking unbond <validator valoper> <amount>\
    --from <wallet> --chain-id <chain-id>
```

## Unjailing the validator

You can unjail your validator with the following command:

```sh
celestia-appd tx slashing unjail --from <validator wallet>\
    --chain-id <chain-id> --gas auto -y
```

## How to export logs with SystemD

You can export your logs if you are running a SystemD service with the following command:

```sh
sudo journalctl -u <your systemd service> -S yesterday > node_logs.txt
sudo journalctl -u <your systemd service> -S today > node_logs.txt
# This command outputs the last 1 million lines!
sudo journalctl -u <your systemd service> -n 1000000 > node_logs.txt
```