import { LanguageProps } from "../../utils";
import { NotificationOptionProps } from "./NotificationOption";

export default interface UserOptions {
    titleLanguage: LanguageProps.WrittingProps;
    displayAdultContent: boolean;
    profileColor: string;
    notificationOptions: NotificationOptionProps[];
    airingNotifications: boolean;
    timezone: string;
    staffNameLanguage: LanguageProps.WrittingProps;
    restrictMessagesToFollowing: boolean;
}