Matrices...同じジョブをさまざまなバリエーションで実行する仕組み

例
```
jobs:
    backwards-compatibility:
        name: ${{matrix.os}}-${{matrix.node}}
        strategy:
            matrix:
                node: [24,26]
                os:
                    - ubuntu-latest
                    - windows-latest
        runs-on: ${{matrix.os}}
        steps: 
            - name: Setup node
              uses: actions/setup-node@v6
              with:
                node-version: ${{matrix.node}}
```
ここでは以下の組み合わせで実行される
- ubuntu-latest-24
- ubuntu-latest-26
- windows-latest-24
- windows-latest-26