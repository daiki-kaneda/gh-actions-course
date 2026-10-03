Outputs...ジョブから生成される値で、後続のジョブに渡されるもの

**アウトプットを取得するためのフロー**
1. 値を生成するstepにidを付与する
   1. ```id: step1```
2. $GITHUB_OUTPUTに、キーバリューペアをechoする
   1. ```run: echo "NAME=Daiki" >> $GITHUB_OUTPUT```
3. ジョブにoutputsセクションを明示する
   1. ```outputs:```
   2. ```name: ${{steps.step1.outputs.NAME}}```
   3. ```steps:```
   4. ```...```
4. needsキーワードでジョブ間の依存関係を作る。欲しいoutputsを持つjobに依存する様にする.
   1. ```needs: job1```
5. outputsをneedsコンテキストでアクセスする
   1. ```run: echo "This is output: ${{needs.job1.outputs.name}}```


メモ
- inputsの値で使用できるchoiceは文字列の選択とみなすとわかりやすい