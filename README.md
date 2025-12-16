# @ashitaboliff/types

あしたぼのフロントエンド・バックエンド間で共有する Zod スキーマ / 推論型 をまとめたパッケージです。

## インストール

```bash
pnpm add @ashitaboliff/types @hono/zod-openapi
```

## 使い方

1. バックエンドでAPI契約のためにスキーマを利用したい場合

```ts
// 例: 認証モジュールのスキーマをインポート
import * as schema from '@ashitaboliff/types/modules/auth/schema'
import { createRoute } from '@hono/zod-openapi'

export const verifyPadlockPassword = createRoute({
	method: 'post',
	path: '/padlock',
	summary: '部室鍵認証のパスワード検証',
	request: {
		body: {
			content: {
				'application/json': { schema: schema.PadlockRequestSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: 'パスワードが正しい場合のレスポンス',
			content: {
				'application/json': { schema: schema.PadlockResponseSchema },
			},
		},
		[HTTP_STATUS.BAD_REQUEST]: {
			description: 'パスワードが間違っている場合のレスポンス',
			content: {
				'application/json': { schema: schema.PadlockResponseSchema },
			},
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: '試行回数超過でロックされた場合のレスポンス',
			content: {
				'application/json': { schema: schema.PadlockResponseSchema },
			},
		},
	},
})

...
```

2. フロントエンドでAPIを呼び出す際にスキーマ、型定義を利用したい場合

```ts
import { UserQuery, UserListForAdmin } from '@ashitaboliff/types/modules/user/type'
import { UserQuerySchema, UserListForAdminResponseSchema } from '@ashitaboliff/types/modules/user/schema'

export const getUserDetailsListAction = async ({
	page,
	perPage,
	sort,
}: UserQuery): Promise<ApiResponse<UserListForAdmin>> => {
  // Server ActionsでAPIを叩く際にschemasを指定できる神の仕様、あり
	const res = await apiGet('/users/admin', {
		searchParams: { page, perPage, sort },
		next: {
			revalidate: 7 * 24 * 60 * 60,
			tags: ['users', `users-page-${page}-perPage-${perPage}-sort-${sort}`],
		},
		schemas: {
			searchParams: UserQuerySchema,
			response: UserListForAdminResponseSchema,
		},
	})

	return okResponse(res.data)
}
```

## スクリプト

- `pnpm run dev` : tsdown のウォッチビルド
- `pnpm run build` : dist 生成（CJS/ESM/型定義）
- `pnpm run test` : vitest でスキーマ・契約を検証
- `pnpm run check` : biome lint/format チェック
- `pnpm run check:fix` : biome lint/format チェック (自動修正)
- `pnpm run ts` : TypeScript 型チェック（noEmit）

## 開発の流れ
1. `pnpm install`（ルートで）
2. 変更後は `pnpm run check:fix` / `test` / `ts` / `build` を実行
3. PR/CI は lint→test→build の順で実行されます
4. CI で組み込みたいですが、現状は手動で@/docs/spec.mdの更新をお願いします

## 配布について（GitHub Packages）

`publishConfig.registry` を `https://npm.pkg.github.com` に設定しています。

## バージョニングとリリース運用
- バージョン更新: `pnpm bumpp` で `package.json` を更新しコミット。
- タグを打つと Release Workflow が発火して publish されます。手動ダメ絶対
- CI/Release で走る前提スクリプト: `check` → `test` → `ts` → `build`。

## FE/BE でローカル開発

### 普通に使う

あなたがashitaboliffのメンバーであれば利用できます。まずはGitHubを開いて右上のアイコンから「Settings」→「Developer settings」→「Personal access tokens」→「Tokens (classic)」で「Generate new token」を押して、必要な権限（packages:read）を付与してトークンを発行してください。

FE/BE で通常通り `pnpm i` をする前に
```bash
export NPM_TOKEN=ghp_xxxxyyyzzzz # GitHub Packages の読み取り権限付きトークン
```

を設定してから `pnpm i` を実行してください。`.npmrc` に自動でトークンが設定され、GitHub Packages から `@ashitaboliff/types` を取得できるようになります。

### pnpm グローバルリンクを使う
別リポジトリのフロント・バックエンドからローカルの types を使う場合は pnpm のグローバルリンクを利用します。

1. types リポジトリで公開: `pnpm --filter @ashitaboliff/types run link:global`
2. FE/BE リポジトリで取得: `pnpm link --global @ashitaboliff/types`
3. ウォッチ反映: `pnpm --filter @ashitaboliff/types run dev`
4. 解除: `pnpm unlink --global @ashitaboliff/types`（types 側は `pnpm --filter @ashitaboliff/types run unlink:global`）

詳細手順: `packages/types/DEV-LINK.md` を参照。
