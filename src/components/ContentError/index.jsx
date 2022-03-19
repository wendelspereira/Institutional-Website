/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import styles from "./styles.module.scss";

export default function Alerts({
    msg = "Erro ao carregar o conteúdo",
    info = {},
}) {
    const [state, setState] = useState(false);
    useEffect(() => {
        async function fet() {
            const res = await fetch("/api/crash_reporter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),
            });

            if (res.status === 200) {
                setState(
                    "Mensagem de erro enviada para o administrador do site"
                );
            }
        }

        fet();
    }, []);

    return (
        <div className={styles.container}>
            <Stack spacing={2}>
                <Alert severity="error">{msg}</Alert>
                {state && <Alert severity="warning">{state}</Alert>}
            </Stack>
        </div>
    );
}
