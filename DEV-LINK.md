# @ashitabo/types を FE / BE ローカル開発でリンクする手順

FE, BE, types, 親リポジトリが別管理の場合でも、pnpm のグローバルリンクで開発同期できます。

## 前提
- pnpm v10.12.4
- types リポジトリの依存をインストール済み（`pnpm install`）

## 手順
1. **types リポジトリでリンク公開**
   ```bash
   pnpm --filter @ashitabo/types run build   # 一度ビルド（初回のみ推奨）
   pnpm --filter @ashitabo/types run link:global
   ```
   - `node_modules/.pnpm-global` 配下に @ashitabo/types が公開されます。

2. **FE / BE 各リポジトリでリンクを取得**
   ```bash
   pnpm link --global @ashitabo/types
   pnpm install  # リゾルブ確認のため推奨
   ```
   - package.json に `@ashitabo/types` がある前提。無い場合は `pnpm add @ashitabo/types` してからリンク。

3. **開発中の反映**
   - types 側: `pnpm --filter @ashitabo/types run dev` で tsdown ウォッチビルド
   - FE/BE 側: ホットリロードがあればそのまま反映。なければ再起動。

4. **リンク解除**
   - FE/BE 側: `pnpm unlink --global @ashitabo/types`
   - types 側: `pnpm --filter @ashitabo/types run unlink:global`

## トラブルシュート
- 解決できない場合は一度 FE/BE の `node_modules` を削除して `pnpm install`。 
- pnpm のグローバルディレクトリは `pnpm config get global-dir` で確認できます。
- ESM/CJS 両方を出力しているため、Node16 以前の環境だと CJS 側を利用してください（engines>=18 推奨）。
