# Зарезервированные идентификаторы пространства имен

Это таблица зарезервированных идентификаторов пространства имен в сети Celestia.

<!-- markdownlint-disable MD013 -->
| имя                                     | тип           | значение             | описание                                                                                                   |
| --------------------------------------- | ------------- | -------------------- | ---------------------------------------------------------------------------------------------------------- |
| `TRANSACTION_NAMESPACE_ID`              | `NamespaceID` | `0x0000000000000001` | Транзакции: запросы, которые изменяют состояние.                                                           |
| `INTERMEDIATE_STATE_ROOT_NAMESPACE_ID`  | `NamespaceID` | `0x0000000000000002` | Корни промежуточного состояния, фиксируемые после каждой транзакции.                                       |
| `EVIDENCE_NAMESPACE_ID`                 | `NamespaceID` | `0x0000000000000003` | Доказательства: мошеннические доказательства или другие доказательства слэш действий.                      |
| `TAIL_TRANSACTION_PADDING_NAMESPACE_ID` | `NamespaceID` | `0x00000000000000FF` | Заполнение хвоста для транзакций: заполнение после всех транзакций, но перед сообщениями.                  |
| `TAIL_PADDING_NAMESPACE_ID`             | `NamespaceID` | `0xFFFFFFFFFFFFFFFE` | Заполнение хвоста для сообщений: заполнение после всех сообщений, чтобы заполнить исходный квадрат данных. |
| `PARITY_SHARE_NAMESPACE_ID`             | `NamespaceID` | `0xFFFFFFFFFFFFFFFF` | Паритетные доли: расширенные доли в матрице имеющихся данных.                                              |
<!-- markdownlint-enable MD013 -->