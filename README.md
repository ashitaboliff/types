# @ashitaboliff/types

あしたぼのフロントエンド・バックエンド間で共有する Zod スキーマ / 推論型 をまとめたパッケージです。

## インストール

`package.json` の `dependencies` に以下を追加してください。

```bash
"@ashitabo/types": "github:ashitaboliff/types#vx.y.z",
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

## 配布について（GitHub Repo）

GitHubに/distを含めた状態でpushし、配布しています(通常はかなり有り得ないけど手間すぎるから)。

## バージョニングとリリース運用
- 変更後に必ず `pnpm run build` を実行し、`dist`を生成したのち、`package.json` の`exports`を更新。
- 変更をすべてコミット。
- バージョン更新: `pnpm bumpp` が `package.json` を更新しコミットまでしてくれる。

これでタグが切られ、使用箇所で

```
"@ashitabo/types": "github:ashitaboliff/types#vx.y.z",
```
のようにバージョン指定できます。


## FE/BE でローカル開発

### 普通に使う

普通に `pnpm install` すれば使えます。
