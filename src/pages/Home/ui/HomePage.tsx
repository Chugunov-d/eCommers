import { Link } from "react-router-dom";
import styles from './HomePage.module.scss';
import { useTheme } from "../../../shared/config/theme/useTheme";
const HomePage = () => {
    let {toggleTheme} = useTheme();
    return (
        <>
        <button onClick={toggleTheme}>Click</button>
        <h1 className={styles.title}>HomePage</h1>
            <Link to={'/login'}>Login</Link>
        </>
    );
}

export default HomePage;
