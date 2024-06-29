import { useTranslations } from "next-intl"

export const APP_SAVE_KEY = {
    LOCALE: process.env.NEXT_PUBLIC_APP_NAME + "::locale",
    ROLE: process.env.NEXT_PUBLIC_APP_NAME + '::role',
    TOKEN_KEY: process.env.NEXT_PUBLIC_APP_NAME + '::token_key',
    LOGIN_STATUS: process.env.NEXT_PUBLIC_APP_NAME + '::login_status',
    USER_DATA: process.env.NEXT_PUBLIC_APP_NAME + ':user_data',
    USER_ID: process.env.NEXT_PUBLIC_APP_NAME + ':user_id',
}
export const URL_API = {
    CATEGORY_COURSE: "https://api.avocaapp.com/v1/api/education/courses-categories/",
    DETAILS_COURSE: "https://api.avocaapp.com/v1/api/education/courses",
}
export function dumpMenu() {
    const t = useTranslations('LandingPage')
    return [
        {
            title: t("menu.fat1000"),
            link: "/"
        },
        {
            title: t("menu.aiAppstore"),
            link: "/"
        },
        {
            title: t("menu.projectsOpening"),
            link: "/"
        },
        {
            title: t("menu.hiring"),
            link: "/"
        },
        {
            title: t("menu.becomeInstructor"),
            link: "/"
        }
    ]
}