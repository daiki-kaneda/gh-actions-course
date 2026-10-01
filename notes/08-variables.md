Variables...センスティブでない値を設定、再利用する仕組み

- 単一のワークフローでの変数
  - envキーワードを使う
  - 優先順位: step > job > workflow
- 複数のワークフローでの変数
  - organization、repository, environment
  - 優先順位 environment>organization>repository