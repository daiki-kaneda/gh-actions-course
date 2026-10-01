Expressions...ワークフロー内で動的な値や式を扱うためのもの

- 文法:```${{式}}```
- リテラル
  - string
  - number
  - boolean
  - null
- コンテキストの値
- 組み込み関数
- 演算子
  - ```!,>,<,!=,&&,||```

例
```
steps:
    - if: ${{github.event_name}} == "push"
    - name: xxx
    - run: xxx
```
> ifを使いすぎると可読性が低くなるので注意する

**メモ**
- ```<truthy value> && x```はxになる
- ```<falthy value> || x ```はxになる