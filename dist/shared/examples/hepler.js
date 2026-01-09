import { USER_PARTS, USER_ROLES } from "../../modules/user/constants.js";

//#region src/shared/examples/hepler.ts
const pickRole = () => USER_ROLES[1];
const pickPart = () => USER_PARTS[2];

//#endregion
export { pickPart, pickRole };