# @ashitabo/types

あしたぼのフロントエンド・バックエンド間で共有する Zod スキーマ / 推論型 / @hono/zod-openapi の契約定義をまとめたパッケージです。

## インストール

```bash
pnpm add @ashitabo/types zod @hono/zod-openapi
```

## 使い方

```ts
import { userSchema, authContract } from '@ashitabo/types'

const user = userSchema.UserSchema.parse(payload)
const route = authContract.PostAuthPadlock
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

## 配布について

publishConfig は private (`access: restricted`) を前提にしています。Release 用 GitHub Actions で npm token を用意してください。

## バージョニングとリリース運用
- バージョン更新: `pnpm bumpp patch` などで `package.json` を更新しコミット。
- タグ命名: `types-v1.2.3` のように `types-v` プレフィックスでタグを打つと Release Workflow が発火して publish されます。
- 手動公開: `pnpm publish --access restricted`（`NPM_TOKEN` 必須）。
- CI/Release で走る前提スクリプト: `check` → `test` → `ts` → `build`。
