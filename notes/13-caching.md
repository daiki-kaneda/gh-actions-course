Caching...ファイルをキャッシュすることで、ワークフローの実行スピードを向上させる仕組み

- キーによってキャッシュが識別される
- steps.<step-id>.outputs.cache-hit != 'true'はキャッシュヒットしなかったということ

```
jobs:
    test:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/cache@v3
              id: cache
              with:
                path: node_modules
                key: ${{ hashFiles('**/package-lock.json')}}
            - name: Install Dependencies
              if: steps.cache.outputs.cache-hit != 'true'
              run: npm ci
            - name: Lint and Test
              run: |
                npm run lint
                npm run test
```

Version updateメモ
node-version: '20.x' -> node-version: '24.x'

using: node20 -> using: node24

18.x, 20.x, and 21.x -> 24.x and 26.x

actions/checkout@v4 -> actions/checkout@v7

actions/setup-node@v4 -> actions/setup-node@v6

actions/cache@v3 -> actions/cache@v6

actions/upload-artifact@v4 -> actions/upload-artifact@v7

actions/download-artifact@v4 -> actions/download-artifact@v8

