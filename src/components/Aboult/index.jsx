/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss"

export default function Aboult({ title, body }) {
    return (
        <div className={styles.container}>
            <span>{title}</span>
            <p>{body}</p>
        </div>
    )
}