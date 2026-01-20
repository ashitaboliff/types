# @ashitaboliff/types 仕様書 (v2.4.5)

## 目的と範囲
- 本書は packages/types 配下 (src/modules/*, src/shared/*) で提供される Zod スキーマと推論型・定数をモジュール別に整理する。
- バージョン: package.json より 2.4.5 時点の実装を対象。
- 実装差分が発生した場合は本書を更新し、スキーマ → 型 → 契約の順で整合性を取ること。
- OpenAPI の metadata は packages/types には含めず、バックエンド側で定義する。
- 例データ (example) は backend 側で管理し、packages/types には含めない。

## 共通 (shared)
- SortOrderSchema: enum `new | old`。一覧系クエリの既定ソート。
- UserIdParamSchema: path param `{ userId: string(min 1) }`。

## 認証 (auth)
- PadlockCreateRequestSchema (POST body): `{ name: 1..255, password: min4 }`。
- PadlockIdParamSchema: `{ padLockId: string(min1) }`。
- PadlockSchema: `{ id, name, createdAt, updatedAt, isDeleted }`。
- PadlockVerifyRequestSchema: `{ password: min1 }`。
- PadlockVerifyResponseSchema:
  - `status: ok | locked | invalid`
  - `minutesRemaining?: int>0`, `attemptsRemaining?: int>=0`
  - `token?: string`, `expiresAt?: ISO string`。
- 型: `Padlock`。

## バンド (band)
- Path: BandIdParamSchema, BandMemberIdParamSchema ともに `string(min1)`。
- BandMemberSchema: `{ id, bandId, userId, part(UserPart), createdAt, updatedAt, user:{ id, name?, image?, profile?{ id, name?, studentId?, expected?, role, part?[] } } }`。
- BandSchema: `{ id, name, createdAt, updatedAt, isDeleted, members: BandMember[] }`。
- BandListResponseSchema: Band[]。
- Create/Update:
  - BandCreateRequestSchema `{ name: 1..100 }` → BandCreateResponseSchema `{ id }`
  - BandUpdateRequestSchema `{ name: 1..100 }`
  - BandMemberCreateRequestSchema `{ userId: min1, part: UserPart }`
  - BandMemberUpdateRequestSchema `{ part: UserPart }`
- 検索: BandSearchQuerySchema `{ query?: string, part?: UserPart }` ／ 結果: BandSearchResponseSchema (id/name/image/profile 部分)。
- エラー: BandErrorResponseSchema `{ error: string }`。
- 型: `Band`, `BandMember`, `BandListResponse`, `BandSearchQuery`, `BandSearchResponse`, `BandCreateRequest`, `BandUpdateRequest`, `BandMemberCreateRequest`, `BandMemberUpdateRequest`。

## 予約 (booking)
- 定数: `BookingTime` (8 枠 `9:00~10:30`..`19:30~21:00`), `DENIED_BOOKING = "DeniedBooking"`。
- Path: BookingIdParamSchema `{ bookingId: string(min1) }`。
- 取得クエリ: BookingRangeQuerySchema `{ start, end: YYYY-MM-DD }`。
- BookingSchema (内部): `{ id, userId, bookingDate, bookingTime:int, registName, name, createdAt, updatedAt, isDeleted, password }`。
- BookingPublicSchema: BookingSchema から password を除外。
- BookingCalendarResponseSchema: `Record<date, Record<slotIndexString, BookingPublic|null>>`。
- 作成: BookingCreateRequestSchema `{ userId, bookingDate:YYYY-MM-DD, bookingTime:int>=0, registName:1..255, name:1..255, password:min1, today:YYYY-MM-DD }` → BookingCreateResponseSchema `{ id: uuid }`。
- 更新: BookingUpdateRequestSchema `{ bookingDate, bookingTime:int>=0, registName, name, today, authToken?: string }`。
- 削除: BookingDeleteRequestSchema `{ authToken?: string }` (デフォルト空オブジェクト)。
- ユーザー別一覧: BookingUserListQuerySchema `{ sort:new|old=default new, page:int>0=1, perPage:int 1..50=10 }`。
- パスワード送信: BookingPasswordVerifyRequestSchema `{ password:min1 }`。
- アクセストークン: BookingAccessTokenResponseSchema `{ token:min1, expiresAt: ISO string }`。
- ログ: BookingLogsResponseSchema = BookingPublic[]。
- ユーザー別取得: BookingUserListResponseSchema `{ bookings: BookingPublic[], totalCount:int>=0 }`。
- BookingIdsResponseSchema: `uuid[]`。
- エラー: BookingErrorResponseSchema `{ error:string }`。

### 予約禁止 (denied)
- Path: DeniedBookingIdParamSchema `{ deniedBookingId: string(min1) }`。
- DeniedBookingSortSchema: enum `new | old | relativeCurrent`。
- DeniedBookingSchema: `{ id, startDate, startTime, endTime|null, description, createdAt, updatedAt, isDeleted }`。
- DeniedBookingAdminQuerySchema: `{ sort:enum=default new, page:int>0=1, perPage:int 1..100=10, today:YYYY-MM-DD default today }`。
- DeniedBookingCreateRequestSchema: `{ startDate: string| string[] (YYYY-MM-DD), startTime:int>=0, endTime?:int>=0, description:min1 }`。
- DeniedBookingAdminListResponseSchema: `{ data: DeniedBooking[], totalCount:int>=0 }`。
- 型: `BookingPublic`, `BookingCalendarResponse`, `BookingRangeQuery`, `BookingCreateRequest`, `BookingUpdateRequest`, `BookingDeleteRequest`, `BookingUserListQuery`, `BookingUserListResponse`, `BookingCreateResponse`, `BookingAccessTokenResponse`, `BookingIdsResponse`, `BookingPasswordVerifyRequest`, `DeniedBooking`, `DeniedBookingAdminListResponse`, `DeniedBookingAdminQuery`, `DeniedBookingSort`, `DeniedBookingCreateRequest`。

## ガチャ (gacha)
- GachaRaritySchema: `COMMON | RARE | SUPER_RARE | SS_RARE | ULTRA_RARE | SECRET_RARE`。
- GachaSortOrderSchema: `new | old | rare | notrare`。
- GachaListQuerySchema: `{ sort=default new, page:int>0=1, perPage:int 1..100=10 }`。
- GachaSchema: `{ id, userId, gachaVersion, gachaRarity, gachaSrc, signedGachaSrc?, createdAt, updatedAt, isDeleted }`。
- GachaListResponseSchema: `{ gacha: GachaSchema[], totalCount:int>=0 }`。
- GachaCreateRequestSchema `{ userId, gachaRarity, gachaVersion, gachaSrc }`。
- GachaCreateWithOverrideRequestSchema: 上記 + `ignoreLimit?: boolean`。
- GachaSourceQuerySchema `{ gachaSrc:min1 }`。
- GachaBySourceResponseSchema `{ gacha: GachaSchema|null, totalCount:int>=0 }`。
- 画像プロキシ: Request `{ keys: string(min1)[] 1..50 }` ／ Response `{ urls: Record<string, string(url)> }`。
- エラー: GachaErrorResponseSchema `{ error:string }`。
- 型: `Gacha`, `GachaListResponse`, `GachaListQuery`, `GachaSortOrder`, `GachaCreateRequest`, `GachaCreateWithOverrideRequest`, `GachaSourceQuery`, `GachaBySourceResponse`, `GachaImageProxyRequest`, `GachaImageProxyResponse`, `GachaRarity`。

## ユーザー (user)
- Enum:
  - UserAccountRoleSchema: `TOPADMIN | ADMIN | USER`
  - UserPartSchema: `VOCAL | BACKING_GUITAR | LEAD_GUITAR | BASS | DRUMS | KEYBOARD | OTHER`
  - UserRoleSchema: `GRADUATE | STUDENT`
- UserSchema: `{ id, name?, userId?, password?, email?, emailVerified?, image?, role:UserAccountRole, createdAt, updatedAt }`。
- ProfileSchema: `{ id, userId, name 1..255 nullable, studentId <=255 nullable, expected <=255 nullable, role:UserRole, part: UserPart[] nullable, createdAt, updatedAt, isDeleted }`。
- ProfileUpsertRequestSchema: Profile から `id,userId,createdAt,updatedAt,isDeleted` を除外。
- ProfileResponseSchema: Profile。
- UserSelectItemSchema: `{ id, name?, image?, profile?{ name?, part?: UserPart[] } }` ／ UserSelectResponseSchema = 配列。
- UserListQuerySchema: `{ sort:new|old=default new, page:int>0=1, perPage:int 1..100=10 }`。
- UserRoleUpdateRequestSchema: `{ role: UserAccountRole }`。
- AdminUserDetailSchema: `{ id, name?, fullName?, studentId?, expected?, image?, createdAt, updatedAt, accountRole:UserAccountRole|null, role?:UserRole|null, part?:UserPart[]|null }`。
- AdminUserListResponseSchema: `{ users: AdminUserDetail[], totalCount:int>=0 }`。
- エラー: UserErrorResponseSchema `{ error:string }`。
- 型: `UserAccountRole`, `UserRole`, `UserPart`, `UserModel`, `ProfileModel`, `UserWithProfile`, `UserSelectItem`, `UserSelectResponse`, `AdminUserDetail`, `AdminUserListResponse`, `ProfileUpsertRequest`, `ProfileResponse`, `UserListQuery`, `UserRoleUpdateRequest`。

## 動画検索 (video)
- Path: PlaylistIdParamSchema, VideoIdParamSchema (string min1)。
- Enum: VideoSearchTargetSchema = `live | band`。
- VideoSearchQuerySchema:
  - `{ liveOrBand, bandName?: string, liveName?: string, sort:new|old=default new, page:int>0=1, videoPerPage:int 1..200=10 }`
  - `live` はプレイリスト検索、`band` は動画検索。
- ドキュメント:
  - PlaylistDocSchema `{ type:'playlist', playlistId, title, link, liveDate, videoId, createdAt, updatedAt }`
  - VideoDocSchema `{ type:'video', videoId, title, link, liveDate, playlistId, playlistTitle, createdAt, updatedAt }`
- 詳細: PlaylistDetailResponseSchema = PlaylistDoc + `videos: VideoDoc[]` ／ VideoDetailResponseSchema = VideoDoc。
- 同期 API (管理):
  - VideoAdminSyncRequestSchema `{ playlistIds?: string[] max100 }` (default `{}`)
  - VideoAdminSyncResponseSchema `{ ok:true, playlists:int>=0, videos:int>=0 }`
  - VideoAdminSyncQueuedResponseSchema `{ status:'queued', message:string }`
- 検索結果: VideoSearchResponseSchema `{ items: discriminatedUnion('type', [PlaylistDoc, VideoDoc]), total:int>=0 }`。
- プレイリスト動画取得: PlaylistVideosQuerySchema `{ page:int>0=1, videoPerPage:int 1..50=10 }` → PlaylistVideosResponseSchema `{ items: VideoDoc[], total:int>=0 }`。
- ID 取得: VideoIdsQuerySchema `{ type?: 'video' | 'playlist' }` → VideoIdsResponseSchema `string[]`。
- 型: `PlaylistDoc`, `VideoDoc`, `PlaylistDetail`, `VideoDetail`, `VideoItem`, `PlaylistItem`, `VideoSearchQuery`, `VideoSearchResponse`, `SearchResult<T>`, `YoutubeIdType`, `SyncJobRecord`, `PlaylistSnippet`, `PlaylistVideoSnippet`, `PlaylistRaw`, `VideoSyncQueueItem`, `VideoAdminSyncRequest`, `VideoAdminSyncResponse`, `VideoAdminSyncQueuedResponse`, `PlaylistVideosQuery`, `PlaylistVideosResponse`, `VideoIdsQuery`, `VideoIdsResponse`。

## 付記
- スキーマ変更時は `/package/types` 配下を先に更新し、FR/BE 側の依存コードへ波及させる。
- CI 想定順序: `check` → `test` → `ts` → `build`。ローカルでも同順を推奨。
- 本書は実装ソースを一次情報としており、生成物 (dist) は参照していない。実装更新時に必ず本書の追従を確認すること。
