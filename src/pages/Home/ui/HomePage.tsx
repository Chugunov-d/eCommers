import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Button } from "@/shared/ui/Button/Button";
import styles from './HomePage.module.scss';

const HomePage = () => {
    const {t} = useTranslation();
    const [error, setError] = useState(false);

    useEffect(()=>{
        if (error) throw new Error();
    }, [error])

    return (
        <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.content}>
            <Button onClick={() => setError(true)}>Click</Button>
        </main>
        <Footer />
        </div>
    );
}

export default HomePage;
    