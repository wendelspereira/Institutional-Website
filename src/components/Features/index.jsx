/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styles from "./styles.module.scss"
import Button from "../../Utils/Buttons"
import { useRouter } from "next/router"

export default function Features({ feature }) {
    const router = useRouter()
    const { title, body, featuresList } = feature
    const cards = featuresList.map(item => {
        const { id, title, resume } = item

        return (
            <Link exact key={item.id} href={`/features?id=${id}`} passHref>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <img src="/icons/paper.svg" alt="icone" />
                    </div>
                    <div className={styles.texts}>
                        <strong>{title}</strong>
                        <p>{resume}</p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className={styles.container}>
            <span>{title}</span>
            <p>{body}</p>

            <div className={styles.cardsContainer}>
                {cards}
            </div>

            <div className={styles.btn}>
                <Button type={["seeAll"]} func={() => router.push("/features")} />
            </div>
        </div>
    )
}