- - -
sidebar_label : Повна нода консенсусу
- - -

# Встановлення повної ноди консенсусу Celestia
<!-- markdownlint-disable MD013 -->

Повні ноди консенсусу дозволяють синхронізувати історію блокчейну на рівні консенсусу Celestia.

## Вимоги до обладнання

Для роботи повної ноди консенсусу є такі мінімальні вимоги до обладнання:

* Розмір оперативної пам’яті: 8 GB
* CPU: Quad-Core
* Розмір пам’яті на диску: 250 GB
* Пропускна здатність: 1 Gbps для скачування/100 Mbps для вивантаження

## Налаштування вашої повної ноди консенсусу

Цей туторіал виконано на машині з Ubuntu Linux 20.04 (LTS) x64.

### Встановлення залежностей

Дотримуйтесь інструкцій щодо встановлення залежностей [тут](../developers/environment.md).

## Запуск додатку celestia

У цьому розділі описано першу частину налаштування повної ноди консенсусу Celestia: запуск Celestia App daemon із внутрішньою нодою Celestia Core.

> Примітка. Переконайтеся, що у вас є принаймні 100+ Гб вільного місця для безпечного встановлення та запуску повної ноди консенсусу.

### Встановлення додатку celestia

Дотримуйтесь туторіала зі встановлення додатку Celestia [тут](../developers/celestia-app.md).

### Налаштування мережі P2P

Для цього розділу туторіала виберіть мережу, до якої потрібно підключитися:

* [Mamaki](./mamaki-testnet.md#setup-p2p-network)

Після цього, ви можете продовжити йти по туторіалу.

### Налаштування стиснення даних

Для меншого використання дискового простору ми рекомендуємо налаштувати стиснення даних за допомогою наведених нижче конфігурацій. Ви можете змінити це на власні конфігурації стиснення даних, якщо хочете:

```sh
PRUNING="custom"
PRUNING_KEEP_RECENT="100"
PRUNING_INTERVAL="10"

sed -i -e "s/^pruning *=.*/pruning = \"$PRUNING\"/" $HOME/.celestia-app/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \
\"$PRUNING_KEEP_RECENT\"/" $HOME/.celestia-app/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \
\"$PRUNING_INTERVAL\"/" $HOME/.celestia-app/config/app.toml
```

### Перезавантаження мережі

Це видалить усі папки з даними, щоб ми могли почати заново:

```sh
celestia-appd tendermint unsafe-reset-all --home $HOME/.celestia-app
```

### Додатково: швидка синхронізація із snapshot

Синхронізація з Genesis може зайняти багато часу, в залежності від вашого обладнання. Використовуючи цей метод, ви можете дуже швидко синхронізувати свою ноду Celestia, завантаживши останній snapshot блокчейну. Якщо ви хочете синхронізувати з Genesis, ви можете пропустити цю частину.

Якщо ви хочете використовувати snapshot, визначте мережу, з якою ви бажаєте синхронізувати, зі списку нижче:

* [Mamaki](./mamaki-testnet.md#quick-sync-with-snapshot)

### Запуск celestia-app

Щоб запустити повну ноду консенсусу, виконайте наступне:

```sh
celestia-appd start
```

Це дозволить вам синхронізувати історію блокчейну Celestia.

### Додатково: налаштуйте кінцеву точку RPC

Ви можете налаштувати повну ноду консенсусу як загальнодоступну кінцеву точку RPC і прослуховувати будь-які підключення від нод доступності даних, щоб обслуговувати запити для API доступності даних [тут](../developers/node-tutorial.md).

Будьте уважні, для цього потрібно переконатися, що порт 9090 відкритий.

Виконайте такі команди:

```sh
EXTERNAL_ADDRESS=$(wget -qO- eth0.me)
sed -i.bak -e "s/^external-address = \"\"/external-address = \"$EXTERNAL_ADDRESS:26656\"/" $HOME/.celestia-app/config/config.toml
sed -i 's#"tcp://127.0.0.1:26657"#"tcp://0.0.0.0:26657"#g' ~/.celestia-app/config/config.toml
```

Перезапустіть `celestia-appd` на попередньому кроці, щоб завантажити ці конфігурації.

### Запуск додатку Celestia за допомогою SystemD

Дотримуйтеся [цього](./systemd.md#start-the-celestia-app-with-systemd) туторіала з налаштування додатку Celestia як фонового процесу за допомогою SystemD.