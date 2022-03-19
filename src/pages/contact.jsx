import styles from "../styles/Contact.module.scss";
import Layout from "../components/Layout/index";
import Contact from "../components/Contact/Contact";
import getContent from "../Utils/getContent";
import Dev from "../components/Dev"

export async function getServerSideProps() {
  const query = `{
      contact {
        email
      }
    }
      `;
  const data = await getContent(query);
  return {
    props: { data },
  };
}

export default function contact({ data }) {
  try {
    const emailTo = data.contact.email;
    return (
      <div className={styles.container}>
        <Contact title="Como podemos te ajudar?" emailTo={emailTo} />
      </div>
    );
  } catch (err) {
    return <Dev msg="Conteúdo em edição" />;
  }
}

contact.layout = Layout;
