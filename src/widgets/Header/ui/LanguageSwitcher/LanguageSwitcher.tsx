import { languageIconList, type SupportedLngsTypes } from '@/shared/config/i18n/LanguageIconList';
import { AppIcon, Button } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const {i18n} = useTranslation();
    const currentLanguage = i18n.language as SupportedLngsTypes;

    const toggleLanguage = () => {
        i18n.changeLanguage(currentLanguage === 'en' ? 'ru' : 'en');
    };

    return (
        <Button onClick={toggleLanguage} theme='ghost'>
            <AppIcon Icon={languageIconList[currentLanguage]}/>
        </Button>
    );
}

export default LanguageSwitcher;
