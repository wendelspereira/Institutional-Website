import styles from "../styles/Privacy.module.scss";
import Layout from "../components/Layout/index";
import Contact from "../components/Contact/Contact";
import Markup from "../Utils/Markut/index";
import getContent from "../Utils/getContent";
import Dev from "../components/Dev"

export async function getServerSideProps() {
  const query = `{
            privacy {
              content(markdown: true)
            }
            contact {
                emaillgpd
            }
      }
      `;
  const data = await getContent(query);
  return {
    props: { data },
  };
}

export default function Privacy({ data }) {
  try {
    const { privacy, contact } = data;
    const html = privacy.content;
    const emailTo = contact.emaillgpd;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <Markup htmlStr={html} />
        </div>
        <div className={styles.contact}>
          <Contact emailTo={emailTo} />
        </div>
      </div>
    );
  } catch (err) {
    return <Dev msg="Conteúdo em edição" />;
  }
}

Privacy.layout = Layout;
