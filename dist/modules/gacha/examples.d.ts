//#region src/modules/gacha/examples.d.ts
declare const buildGachaQueryExample: () => {
  sort: "rare";
  page: number;
  perPage: number;
};
declare const buildGachaItemExample: () => {
  id: string;
  userId: string;
  gachaVersion: string;
  gachaRarity: "SUPER_RARE";
  gachaSrc: string;
  signedGachaSrc: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
};
declare const buildGachaListResponseExample: () => {
  gacha: {
    id: string;
    userId: string;
    gachaVersion: string;
    gachaRarity: "SUPER_RARE";
    gachaSrc: string;
    signedGachaSrc: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
  }[];
  totalCount: number;
};
declare const buildGachaCreateExample: () => {
  userId: string;
  gachaRarity: string;
  gachaVersion: string;
  gachaSrc: string;
};
declare const buildGachaCreateWithOverrideExample: () => {
  ignoreLimit: boolean;
  userId: string;
  gachaRarity: string;
  gachaVersion: string;
  gachaSrc: string;
};
declare const buildGachaSrcQueryExample: () => {
  gachaSrc: string;
};
declare const buildGachaBySrcResponseExample: () => {
  gacha: {
    id: string;
    userId: string;
    gachaVersion: string;
    gachaRarity: "SUPER_RARE";
    gachaSrc: string;
    signedGachaSrc: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
  };
  totalCount: number;
};
declare const buildGachaErrorExample: () => {
  error: string;
};
declare const buildGachaImageProxyRequestExample: () => {
  keys: string[];
};
declare const buildGachaImageProxyResponseExample: () => {
  urls: {
    'gacha/items/mock.png': string;
    'gacha/items/mock2.png': string;
  };
};
//#endregion
export { buildGachaBySrcResponseExample, buildGachaCreateExample, buildGachaCreateWithOverrideExample, buildGachaErrorExample, buildGachaImageProxyRequestExample, buildGachaImageProxyResponseExample, buildGachaItemExample, buildGachaListResponseExample, buildGachaQueryExample, buildGachaSrcQueryExample };