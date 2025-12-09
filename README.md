# @ashitaboliff/types

あしたぼのフロントエンド・バックエンド間で共有する Zod スキーマ / 推論型 / @hono/zod-openapi の契約定義をまとめたパッケージです。

## インストール

```bash
pnpm add @ashitaboliff/types zod @hono/zod-openapi
```

## 使い方

```ts
import * as contract from '@ashitaboliff/types/modules/auth/contract'

...
```

## スクリプト

- `pnpm run dev` : tsdown のウォッチビルド
- `pnpm run build` : dist 生成（CJS/ESM/型定義）
- `pnpm run test` : vitest でスキーマ・契約を検証
- `pnpm run check` : biome lint/format チェック
- `pnpm run ts` : TypeScript 型チェック（noEmit）

## 開発の流れ
1. `pnpm install`（ルートで）
2. 変更後は `pnpm run check` / `test` / `ts` / `build` を実行
3. PR/CI は lint→test→build の順で実行されます

## 配布について（GitHub Packages）

`publishConfig.registry` を `https://npm.pkg.github.com` に設定しています。GitHub Packages への publish には `GITHUB_TOKEN`（packages:write 権限）が必要です。

## バージョニングとリリース運用
- バージョン更新: `pnpm bumpp patch` などで `package.json` を更新しコミット。
- タグ命名: `types-v1.2.3` のように `types-v` プレフィックスでタグを打つと Release Workflow が発火して publish されます。
- 手動公開: `pnpm publish --access restricted`（`NPM_TOKEN` 必須）。
- CI/Release で走る前提スクリプト: `check` → `test` → `ts` → `build`。

## FE/BE でローカル開発リンク
別リポジトリのフロント・バックエンドからローカルの types を使う場合は pnpm のグローバルリンクを利用します。

1. types リポジトリで公開: `pnpm --filter @ashitaboliff/types run link:global`
2. FE/BE リポジトリで取得: `pnpm link --global @ashitaboliff/types`
3. ウォッチ反映: `pnpm --filter @ashitaboliff/types run dev`
4. 解除: `pnpm unlink --global @ashitaboliff/types`（types 側は `pnpm --filter @ashitaboliff/types run unlink:global`）

詳細手順: `packages/types/DEV-LINK.md` を参照。
