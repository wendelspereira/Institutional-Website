import styles from "../styles/Features.module.scss";
import Layout from "../components/Layout/index";
import getContent from "../Utils/getContent";
import Markup from "../Utils/Markut/index";
import Indice from "../components/Indice";
import { Divider } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import MoboIndice from "../components/DrawerMoboMenu/Features";
import Dev from "../components/Dev"

export async function getServerSideProps() {
  const query = `
    {
        feature {
            title
            subtitle
            body
            featuresList {
              id
              title
              resume
              description
            }
        }
    }
    `;
  const data = await getContent(query);

  return {
    props: { data },
  };
}

export default function Feature({ data }) {
  try {
    const router = useRouter();
    const { id } = router.query;
    const { title, featuresList } = data.feature;
    const selectedFeature = featuresList.find((item) => item.id === id);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(selectedFeature || featuresList[0]);

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.moboIndice}>
            <MoboIndice items={featuresList} setState={setState} />
          </div>
          <div className={styles.layout}>
            <div className={styles.indice}>
              <Indice
                asideTitle={title}
                items={featuresList}
                setState={setState}
              />
            </div>
            <div className={styles.divider}>
              <Divider orientation="vertical" />
            </div>
            <div className={styles.description}>
              <Markup htmlStr={state.description} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    return <Dev msg="Conteúdo em edição" />;
  }
}

Feature.layout = Layout;
