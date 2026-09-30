Activity Types...どのタイプのトリガーがワークフローを実行するかを指定するもの

例
**pull_requestイベント**
- opened
- synchronize
- closed
- assigned
- labeled
- edited
- ...

例
```
on:
    pull_request:
        types: [opened, synchronize]
        branches:
            - main
            - 'release/**'
```