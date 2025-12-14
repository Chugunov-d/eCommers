import styles from './ErrorPage.module.scss';
import { useTranslation } from 'react-i18next';
import PageErrorIcon from "@/shared/assets/icons/PageError.svg?react";
import { Button } from '@/shared/ui';

const ErrorPage = () => {
    const { t } = useTranslation();
    const handleClick = () => {
        location.reload();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <PageErrorIcon className={styles.icon} />
                <h3 className={styles.title}>{t('errorPage.title')}</h3>
                <p className={styles.description}>{t('errorPage.description')}</p>
                <Button theme='primary' form='rounded' className={styles.button} onClick={handleClick}>{t('errorPage.reload')}</Button>
            </div>
        </div>
    );
}

export default ErrorPage;
