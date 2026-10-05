**Artifact**...ワークフロー内で生成されたデータを枠フロー外に保存する仕組み
以下のアクション使用
- actions/upload-artifact
- actions/download-artifact

メモ
- Cache vs Artifact: キャッシュは基本的にワークフロー内でのみ使うデータ（依存関係）などに対して、アーティファクトはワークフロー外でも使うビルド結果などに対して使う