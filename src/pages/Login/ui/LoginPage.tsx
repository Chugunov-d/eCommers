import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const LoginPage = () => {
    const {t} = useTranslation("login");
    return (
        <div>
            {t('login')}
            <Link to={'/'}>Home</Link>           
        </div>
    );
}

export default LoginPage;
