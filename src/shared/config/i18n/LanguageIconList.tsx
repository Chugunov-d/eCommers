import type { FunctionComponent, SVGProps } from "react";
import { supportedLngs } from "./i18n";
import EnglishIcon from '@/shared/assets/icons/English.svg?react';
import RussianIcon from '@/shared/assets/icons/German.svg?react';

export type SupportedLngsTypes = (typeof supportedLngs)[number];


type LanguageIconListType = Record<SupportedLngsTypes, FunctionComponent<SVGProps<SVGSVGElement>>>

export const languageIconList: LanguageIconListType = {
    en: EnglishIcon,
    ru: RussianIcon
};