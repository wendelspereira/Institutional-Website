import styles from "../styles/Links.module.scss";
import Layout from "../components/Layout/index";
import getContent from "../Utils/getContent";
import Markup from "../Utils/Markut/index";
import { Divider } from "@mui/material";
import Dev from "../components/Dev"


export async function getServerSideProps() {
  const query = `
    {
        ultilLink {
            links {
              id
              title
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

export default function Links({ data }) {
  try {
    const { links } = data.ultilLink;
    if(links.length === 0){
      throw new Error("Void Content")
    }
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          {links.map((link, index) => {
            return (
              <div key={index.toString} className={styles.links}>
                <Markup htmlStr={link.description} />
                <Divider />
              </div>
            );
          })}
        </div>
      </div>
    );
  } catch (err) {
    return <Dev msg="Conteúdo em edição" />;
  }
}

Links.layout = Layout;
