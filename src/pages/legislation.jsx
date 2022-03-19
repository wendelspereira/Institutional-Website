/* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable @next/next/no-img-element */
import styles from "../styles/Legislation.module.scss";
import Layout from "../components/Layout/index";
import getContent from "../Utils/getContent";
import Markup from "../Utils/Markut/index";
import Indice from "../components/Indice";
import { Divider } from "@mui/material";
import { useState } from "react";
import MoboIndice from "../components/DrawerMoboMenu/Features";
import Dev from "../components/Dev"
export async function getServerSideProps() {
  const query = `
  {
    legislation {
      topics {
        id
        title
        content(markdown: false)
      }
    }
  }
  `;
  const data = await getContent(query);

  return {
    props: { data },
  };
}

export default function Legislation({ data }) {
  try {
    const { topics } = data.legislation;
    const [state, setState] = useState(topics[0]);

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.moboIndice}>
            <MoboIndice items={topics} setState={setState} />
          </div>

          <div className={styles.layout}>
            <div className={styles.indice}>
              <Indice asideTitle="Tópicos" items={topics} setState={setState} />
            </div>
            <div className={styles.divider}>
              <Divider orientation="vertical" />
            </div>
            <div className={styles.topicsContent}>
              <Markup htmlStr={state.content} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    return <Dev msg="Conteúdo em edição" />;
  }
}

Legislation.layout = Layout;
