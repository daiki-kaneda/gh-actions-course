Functions...${{}}内部で使える組み込み関数
例
- 汎用関数
  - contains()
  - startsWith()
  - endsWith()
  - fromJson()
  - toJson()
  - ...
- ステータスチェック関数...直前のワークフロー、ジョブ、ステップの状態を取得
  - success()
  - failure()
  - always()
  - cancelled
  - ...

メモ
- fromJson()は文字列からさまざまな形式の値に変換可能
- !cancelled()は直前のジョブやステップが失敗したとしても、キャンセルする時のみ処理を止めたい場合に使う