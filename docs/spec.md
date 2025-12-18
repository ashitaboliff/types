# @ashitaboliff/types 仕様書 (v2.4.5)

## 目的と範囲
- 本書は packages/types 配下 (src/modules/*, src/shared/*) で提供される Zod スキーマと推論型・定数をモジュール別に整理する。
- バージョン: package.json より 2.4.5 時点の実装を対象。
- 実装差分が発生した場合は本書を更新し、スキーマ → 型 → 契約の順で整合性を取ること。

## 共通 (shared)
- SortSchema: enum `new | old`。一覧系クエリの既定ソート。
- UserIdParam: path param `{ userId: string(min 1) }` を OpenAPI パラメータ付きで提供。
- 例時計ユーティリティ: `createExampleClock()` (日付・時刻の相対生成) ／ ヘルパー: `pickRole()`, `pickPart()` が user 定数からサンプル値を返す。

## 認証 (auth)
- PadLockCreateSchema (POST body): `{ name: 1..255, password: min4 }`。
- PadLockIdParam: `{ padLockId: string(min1) }`。
- PadLockSchema: `{ id, name, createdAt, updatedAt, isDeleted }`。
- PadlockRequestSchema: `{ password: min1 }`。
- PadlockResponseSchema:
  - `status: ok | locked | invalid`
  - `minutesRemaining?: int>0`, `attemptsRemaining?: int>=0`
  - `token?: string`, `expiresAt?: ISO string`。
- 型: `PublicPadLock` = infer PadLockSchema。

## バンド (band)
- Path: `BandIdParam`, `BandMemberIdParam` ともに `string(min1)`。
- BandMemberSchema: `{ id, bandId, userId, part(UserPart), createdAt, updatedAt, user:{ id, name?, image?, profile?{ id, name?, studentId?, expected?, role, part?[] } } }`。
- BandSchema: `{ id, name, createdAt, updatedAt, isDeleted, members: BandMember[] }`。
- BandListSchema: Band[]。
- Create/Update:
  - BandCreateSchema `{ name: 1..100 }` → BandCreateResponseSchema `{ id }`
  - BandUpdateSchema `{ name: 1..100 }`
  - BandMemberCreateSchema `{ userId: min1, part: UserPart }`
  - BandMemberUpdateSchema `{ part: UserPart }`
- 検索: BandSearchQuerySchema `{ query?: string, part?: UserPart }` ／ 結果: BandSearchResultSchema (id/name/image/profile 部分)。
- エラー: BandErrorResponseSchema `{ error: string }`。
- 型: `Band`, `BandMember`, `BandList`, `BandSearchQuery`, `BandSearchResult`, `BandCreate`, `BandUpdate`, `BandMemberCreate`。

## 予約 (booking)
- 定数: `BookingTime` (8 枠 `9:00~10:30`..`19:30~21:00`), `DENIED_BOOKING = "DeniedBooking"`。
- Path: BookingIdParam `{ bookingId: string(min1) }`。
- 取得クエリ: GetBookingQuerySchema `{ start, end: YYYY-MM-DD }`。
- BookingSchema (内部): `{ id, userId, bookingDate, bookingTime:int, registName, name, createdAt, updatedAt, isDeleted, password }`。
- PublicBookingSchema: BookingSchema から password を除外。
- BookingResponseSchema: `Record<date, Record<slotIndexString, PublicBooking|null>>`。
- 作成: BookingCreateSchema `{ userId, bookingDate:YYYY-MM-DD, bookingTime:int>=0, registName:1..255, name:1..255, password:min1, today:YYYY-MM-DD }` → BookingCreateResponseSchema `{ id: uuid }`。
- 更新: BookingUpdateSchema `{ bookingDate, bookingTime:int>=0, registName, name, today, authToken?: string }`。
- 削除: BookingDeleteSchema `{ authToken?: string }` (デフォルト空オブジェクト)。
- ユーザー別一覧: BookingUserQuerySchema `{ sort:new|old=default new, page:int>0=1, perPage:int 1..50=10 }`。
- パスワード送信: BookingPasswordSchema `{ password:min1 }`。
- アクセストークン: BookingAccessTokenResponseSchema `{ token:min1, expiresAt: ISO string }`。
- ログ: BookingLogsResponseSchema = PublicBooking[]。
- ユーザー別取得: BookingByUserResponseSchema `{ bookings: PublicBooking[], totalCount:int>=0 }`。
- BookingIdsSchema: `uuid[]`。
- エラー: BookingErrorResponseSchema `{ error:string }`。

### 予約禁止 (denied)
- Path: DeniedBookingIdParam `{ deniedBookingId: string(min1) }`。
- AdminDeniedSortSchema: enum `new | old | relativeCurrent`。
- DeniedBookingSchema: `{ id, startDate, startTime, endTime|null, description, createdAt, updatedAt, isDeleted }`。
- AdminDeniedBookingQuerySchema: `{ sort:enum=default new, page:int>0=1, perPage:int 1..100=10, today:YYYY-MM-DD default today }`。
- AdminDeniedBookingCreateSchema: `{ startDate: string| string[] (YYYY-MM-DD), startTime:int>=0, endTime?:int>=0, description:min1 }`。
- AdminDeniedBookingResponseSchema: `{ data: DeniedBooking[], totalCount:int>=0 }`。
- 型: `PublicBooking`, `BookingResponse`, `BookingRange`, `DeniedBooking`, `AdminDeniedBookingResponse`, `AdminDeniedBookingQuery`, `AdminDeniedSort`。

## ガチャ (gacha)
- GachaRarityEnum: `COMMON | RARE | SUPER_RARE | SS_RARE | ULTRA_RARE | SECRET_RARE`。
- GachaSortSchema: `new | old | rare | notrare`。
- GachaQuerySchema: `{ sort=default new, page:int>0=1, perPage:int 1..100=10 }`。
- GachaResponseSchema: `{ id, userId, gachaVersion, gachaRarity, gachaSrc, signedGachaSrc?, createdAt, updatedAt, isDeleted }`。
- GachaListResponseSchema: `{ gacha: GachaResponse[], totalCount:int>=0 }`。
- GachaCreateSchema `{ userId, gachaRarity, gachaVersion, gachaSrc }`。
- GachaCreateWithOverrideSchema: 上記 + `ignoreLimit?: boolean`。
- GachaSrcQuerySchema `{ gachaSrc:min1 }`。
- GachaBySrcResponseSchema `{ gacha: GachaResponse|null, totalCount:int>=0 }`。
- 画像プロキシ: Request `{ keys: string(min1)[] 1..50 }` ／ Response `{ urls: Record<string, string(url)> }`。
- エラー: GachaErrorResponseSchema `{ error:string }`。
- 型: `Gacha`, `GachaListResponse`, `GachaQuery`, `GachaSort`, `GachaCreate`, `GachaCreateWithOverride`, `GachaBySrcResponse`, `GachaImageProxyRequest`, `GachaImageProxyResponse`, `RarityType`。

## スケジュール (schedule)
- Path: ScheduleIdParam `{ scheduleId: string(min1) }`。
- ScheduleCreateSchema:
  - `{ id?: uuid, userId:min1, title:min1, description?: string|null, dates:[YYYY-MM-DD]+, mention:string[] default [], timeExtended:boolean default false, deadline:YYYY-MM-DD }`。
- ScheduleResponseSchema: `{ id, userId, title, description?, startDate, endDate, mention?:string[]|null, timeExtended, deadline, createdAt, updatedAt }`。
- ユーザー情報: ScheduleUserResponseSchema `{ id, name?, image? }`／List = ScheduleUserListSchema。
- 作成結果: ScheduleCreatedResponseSchema `{ id }`。
- エラー: ScheduleErrorResponseSchema `{ error:string }`。
- 型: `UserWithName`, `ScheduleInput`, `Schedule`。

## ユーザー (user)
- Enum:
  - UserAccountRoleSchema: `TOPADMIN | ADMIN | USER`
  - UserPartSchema: `VOCAL | BACKING_GUITAR | LEAD_GUITAR | BASS | DRUMS | KEYBOARD | OTHER`
  - UserRoleSchema: `GRADUATE | STUDENT`
- UserSchema: `{ id, name?, userId?, password?, email?, emailVerified?, image?, role:UserAccountRole, createdAt, updatedAt }`。
- ProfileSchema: `{ id, userId, name 1..255 nullable, studentId <=255 nullable, expected <=255 nullable, role:UserRole, part: UserPart[] nullable, createdAt, updatedAt, isDeleted }`。
- ProfilePayloadSchema: Profile から `id,userId,createdAt,updatedAt,isDeleted` を除外。
- ProfileResponseSchema: Profile。
- UserSelectItemSchema: `{ id, name?, image?, profile?{ name?, part?: UserPart[] } }` ／ UserSelectListSchema = 配列。
- UserQuerySchema: `{ sort:new|old=default new, page:int>0=1, perPage:int 1..100=10 }`。
- UpdateUserRoleSchema: `{ role: UserAccountRole }`。
- UserDetailForAdminSchema: `{ id, name?, fullName?, studentId?, expected?, image?, createdAt, updatedAt, accountRole:UserAccountRole|null, role?:UserRole|null, part?:UserPart[]|null }`。
- UserListForAdminResponseSchema: `{ users: UserDetailForAdmin[], totalCount:int>=0 }`。
- エラー: UserErrorResponseSchema `{ error:string }`。
- 定数: `USER_ROLES`, `USER_PARTS` (上記 enum と同値配列)。
- 型: `UserAccountRole`, `UserRole`, `UserPart`, `UserModel`, `ProfileModel`, `UserWithProfile`, `UserForSelect`, `UserSelectList`, `UserForAdmin`, `UserListForAdmin`, `ProfileInput`, `ProfileResponse`, `UserQuery`, `UpdateUserRole`。

## 動画検索 (video)
- Path: PlaylistIdParam, VideoIdParam (string min1)。
- Enum: `liveOrBandSchema` = `live | band`。
- YoutubeSearchQuerySchema:
  - `{ liveOrBand, bandName?: string, liveName?: string, sort:new|old=default new, page:int>0=1, videoPerPage:int 1..200=10 }`
  - `live` はプレイリスト検索、`band` は動画検索。
- ドキュメント:
  - PlaylistDocSchema `{ type:'playlist', playlistId, title, link, liveDate, videoId, createdAt, updatedAt }`
  - VideoDocSchema `{ type:'video', videoId, title, link, liveDate, playlistId, playlistTitle, createdAt, updatedAt }`
- 詳細: PlaylistDetailSchema = PlaylistDoc + `videos: VideoDoc[]` ／ VideoDetailSchema = VideoDoc。
- 同期 API (管理):
  - AdminSyncPayloadSchema `{ playlistIds?: string[] max100 }` (default `{}`)
  - AdminSyncResponseSchema `{ ok:true, playlists:int>=0, videos:int>=0 }`
  - AdminSyncQueuedResponseSchema `{ status:'queued', message:string }`
- 検索結果: SearchResponseSchema `{ items: discriminatedUnion('type', [PlaylistDoc, VideoDoc]), total:int>=0 }`。
- プレイリスト動画取得: PlaylistVideosQuerySchema `{ page:int>0=1, videoPerPage:int 1..50=10 }` → PlaylistVideosResponseSchema `{ items: VideoDoc[], total:int>=0 }`。
- ID 取得: VideoIdsQuerySchema `{ type?: 'video' | 'playlist' }` → VideoIdsResponseSchema `string[]`。
- 型: `PlaylistDoc`, `VideoDoc`, `PlaylistDetail`, `VideoDetail`, `VideoItem`, `PlaylistItem`, `YoutubeSearchQuery`, `SearchResponse`, `SearchResult<T>`, `YoutubeIdType`, `SyncJobRecord`, `PlaylistSnippet`, `PlaylistVideoSnippet`, `PlaylistRaw`, `VideoSyncQueueItem`, `AdminSyncPayload`, `AdminSyncResponse`, `AdminSyncQueuedResponse`, `PlaylistVideosQuery`, `PlaylistVideosResponse`, `VideoIdsQuery`, `VideoIdsResponse`。

## 付記
- スキーマ変更時は `/package/types` 配下を先に更新し、FR/BE 側の依存コードへ波及させる。
- CI 想定順序: `check` → `test` → `ts` → `build`。ローカルでも同順を推奨。
- 本書は実装ソースを一次情報としており、生成物 (dist) は参照していない。実装更新時に必ず本書の追従を確認すること。
