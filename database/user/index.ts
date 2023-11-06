import { ImageProps, StatProps, RoleProps, MetadataProps } from "../utils";
import { PreviousNamesProps, UserOptions } from "./lib";

/** 
 * Propiedades del usuario en la base de datos 
 **/
export default interface UserProps extends MetadataProps.default {
    objectId: number;
    name: string;
    about?: string;
    avatar?: ImageProps.default;
    bannerImage?: ImageProps.default;
    options: UserOptions;
    statistics: StatProps.UserStatsProps;
    unreadNotificationsCount: number;
    siteURL: string;
    donationTier: number;
    donatorBadge: string;
    roles: RoleProps.default;
    previousNames: PreviousNamesProps[]
};