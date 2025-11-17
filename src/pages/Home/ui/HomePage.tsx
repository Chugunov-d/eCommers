import { Link } from "react-router-dom";
import styles from './HomePage.module.scss';
import { useTheme } from "@/shared/config/theme/useTheme";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui";
import GermanyIcon from '@/shared/assets/icons/German.svg?react';

const HomePage = () => {
    let {toggleTheme} = useTheme();
    const {t, i18n} = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }
    return (
        <>
        <Button  onClick={toggleTheme}>Click</Button>
        <Button  theme="outline" onClick={changeLanguage}>
            {i18n.language}
            <GermanyIcon />
        </Button>
        <h1 className={styles.title}>{t('hello')}</h1>
            <Link to={'/login'}>Login</Link>
        </>
    );
}

export default HomePage;
