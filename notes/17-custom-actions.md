Custom Action...再利用可能なロジックを作る仕組み

||Composite Actions|  Javascript Actions|  Docker Actions| 
|---|---|---|---|
|Pros/Cons| - 最もシンプルなカスタムアクション<br> - 他のGithub Actionの組み合わせ <br> - 十分な機能を作れない場合もある|- 任意の形式のカスタムロジックを実装可能<br> - @actionsパッケージがさまざまな機能を提供してくれる <br> - Javascriptの知識が必須|- 任意のタイプのロジックを実装可能 <br> - プログラミング言語の制約がない <br> - Javascriptを使う場合よりも冗長になる可能性あり|
一般的な要件| - action.yamlファイルが必須<br> -他のリポジトリと共有したい場合は、自分自身のリポジトリで使わなければいけない | - acntion.yamlファイルが必須<br> -他のリポジトリと共有したい場合は、自分自身のリポジトリで使わなければいけない  |  - action.yamlが必須　<br> -他のリポジトリと共有したい場合は、自分自身のリポジトリで使わなければいけない|

メモ
- 処理の内容はaction.yamlに書き、using:キーワードでアクションのタイプを以下の様に指定する
  - using: composite
  - using: node<version>
  - using: 'docker'