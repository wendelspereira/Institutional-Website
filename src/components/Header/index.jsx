/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import styles from "./styles.module.scss"
import Link from "next/link"
import Menu from "../Menu/index"
import Drawer from "../DrawerMoboMenu/HeaderAndFooter/index"

export default function Header() {
    const router = useRouter()

    return (
        <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <Link href="/" >
                            <a href="" style={{ cursor: "pointer" }}>
                                <img src="/images/logo_full.png" alt="Cartório Glória do Goitá" />
                            </a>
                        </Link>
                    </div>

                    {/* Para larguras de tela superiores a 1024px */}
                    <div className={styles.painel}>
                        <div className={styles.menu}>
                            <Menu config={{
                                name: "home",
                                label: "INÍCIO",
                                customOnClick: () => router.replace('/'),
                                items: []
                            }} />

                            <Menu config={{
                                name: "features",
                                label: "SERVIÇOS",
                                customOnClick: () => router.replace('/features'),
                                items: []
                            }} />

                            <Menu config={{
                                name: "legislation",
                                label: "LEGISLAÇÃO",
                                customOnClick: () => { },
                                items: [
                                    { label: "Legislação", customOnClick: () => router.replace('/legislation') },
                                    { label: "Links úteis", customOnClick: () => router.replace("/links") },
                                ]
                            }} />

                            <Menu config={{
                                name: "institutional",
                                label: "INSTITUCIONAL",
                                customOnClick: () => { },
                                items: [
                                    { label: "Transparência", customOnClick: () => router.replace("/transparence") },
                                    { label: "Privacidade", customOnClick: () => router.replace("/privacy") },
                                    { label: "Fale conosco", customOnClick: () => router.replace("/contact") },
                                ]
                            }} />
                        </div>
                        <div className={styles.menuResponsive}>
                            <Drawer color="var(--text-primary)"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}
