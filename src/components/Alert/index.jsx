
/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import styles from "./styles.module.scss"

export default function Alert({ type, msg, timeOut = null }) {
    const [state, setState] = useState(true)

    timeOut && setTimeout(() => {
        setState(false)
    }, timeOut)

    return (
        state ? <div className={styles.container}>
            <div className={styles[type]}>
                <span className={styles.msg}>{msg}</span>
                <a onClick={() => setState(false)}>×</a>
            </div>
        </div> : <></>
    )
}