/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Feature from "../components/Features/index";
import Welcome from "../components/Welcome";
import Location from "../components/Location/Location";
import Aboult from "../components/Aboult";
import getContent from "../Utils/getContent";
import Layout from "../components/Layout";
import Dev from "../components/Dev";

export default function Home({ data }) {
  try {
    const { siteInfo, welcome, feature, about, address, openingHour, contact } =
      data;

    return (
      <div className={styles.container}>
        <Head>
          <title>{siteInfo.pageTitle}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <main>
          <section>
            <Welcome {...welcome} />
          </section>

          <section>
            <Feature feature={feature} />
          </section>

          <section>
            <Aboult {...about} />
          </section>

          <section>
            <Location
              address={address}
              openingHour={openingHour}
              contact={contact}
              geoPosition={address.geoPosition}
              
            />
          </section>
        </main>
      </div>
    );
  } catch (err) {
    return <Dev msg="Conteúdo em edição" />;
  }
}

Home.layout = Layout;

export async function getServerSideProps() {
  const query = `{
    siteInfo {
      pageTitle
      copyright
    }
    welcome {
      title
      subtitle
      body
    }
    feature {
      title
      subtitle
      body
      featuresList {
        id
        title
        resume
      }
    }
    about {
      title
      body
    }
    address {
      title
      street
      number
      district
      city
      uf
      cep
      geoPosition {
        longitude
        latitude
      }
    }
    contact {
      mainPhone
      phone2
      phone3
      whatsapp
      email
      emaillgpd
    }
    openingHour {
      plain
      openingHours {
        id
        days
        hourInterval
      }
    }
  }
    `;
  const data = await getContent(query);
  return {
    props: { data },
  };
}
