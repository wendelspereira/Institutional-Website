/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import Link from "next/link";
import DrawerMenu from "../DrawerMoboMenu/HeaderAndFooter";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img
            src="/images/logo_light.svg"
            alt="Logo do Cartório Diva Valença"
          />
          {/* <img src="/images/copyright.svg" alt="copyright - 2021 Cartório Diva Valença " /> */}
          <p>© 2021 Lorem Ipsum</p>
        </div>

        <div className={styles.pagesLinks}>
          <Link href="/privacy">
            <a href="">Privacidade</a>
          </Link>
          <span>|</span>
          <Link href="/legislation">
            <a href="">Legislação</a>
          </Link>
          <span>|</span>
          <Link href="/links">
            <a href="">Links úteis</a>
          </Link>
          <span>|</span>
          <Link href="/contact">
            <a href="">Fale conosco</a>
          </Link>
          {/* <a className={styles.social} href={ } rel="noreferrer" target="_blank">
                        <img src={`/icons/instagram.svg`} alt={item} />
                    </a> */}
        </div>

        <div className={styles.menuResponsive}>
          <DrawerMenu color={"var(--white)"} />
        </div>
      </div>
    </div>
  );
}
