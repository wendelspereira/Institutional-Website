/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss"

export default function Welcome({ title, subtitle, body }) {
    return (
        <div className={styles.container}>
            <span>{title}</span>
            <div/>
            <p>{body}</p>
            <img className={styles.workspace} src="images/workspace.png" alt="Ambiente de trabalho" />
        </div>
    )
}