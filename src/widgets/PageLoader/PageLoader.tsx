import style from './PageLoader.module.scss';
import { useTranslation } from 'react-i18next';
import { Spinner } from '@/shared/ui/Spinner/Spinner';

const PageLoader = () => {
    const {t} = useTranslation();
    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>
                {t('pageLoader.loading')}
            </h3>
            <Spinner />
        </div>
    );
}

export default PageLoader;
