**Actions**...繰り返し使う、複雑なタスクを実行するアプリケーション
- コードの重複を防ぎ、ミスを減らす
- ```with```とキーバリューペアで詳細設定できる
- public,privateなカスタムなアクションを作れる

メモ
- ```uses: actions/checkout@v7```でリポジトリのコードをランナーにチェックアウトする
- ジョブの場合、```defaults: run: working-directory: xxx```,ステップの場合,```working-directory: xxx```でコマンドを実行するワーキングディレクトリを指定できる