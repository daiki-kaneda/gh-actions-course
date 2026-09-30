Event Filter...特定のトリガーにおける条件を指定するもの

例：
- **pushイベント**
  - branches
  - branches_ignore
  - tags
  - tags-ignore
  - paths
  - paths-ignore
  > 複数指定した場合は全てを満たす場合に実行される
```
例:
on:
    push:
      branches:
        - main
        - 'releases/**'
      paths-ignore:
        - 'docs/**'
```