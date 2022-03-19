import Footer from "../Footer/Footer";
import Header from "../Header"
import styles from "./styles.module.scss"

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                {children}
            </div>
            <Footer />
        </div>
    );
}