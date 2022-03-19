/* eslint-disable react-hooks/rules-of-hooks */
import styles from "../styles/Transparence.module.scss";
import Table from "../components/Table";
import Layout from "../components/Layout/index";
import { useState } from "react";
import SelectYear from "../components/SelectYear/index";
import getContent from "../Utils/getContent/index";
import Dev from "../components/Dev";

export async function getServerSideProps() {
  const query = `{
    transparence {
      title
      description
      years {
        id
        yearRef
        months {
          id
            ref
            emol
            desp
          }
        }
      }
    }
    `;
  const data = await getContent(query);
  return {
    props: { data },
  };
}

export default function Transparence({ data }) {
  try {
    const { title, description, years } = data.transparence;
    //Lista de anos que possuem registro
    const yearsNumbers = years.map((item) => item.yearRef);
    //Filtra ano mais recent registrado
    const recentYear = Math.max(...yearsNumbers);
    const [curYear, setYear] = useState(recentYear);
    //Registros mensais para referêntes ao ano selecionado
    const { months } = years.find((year) => year.yearRef === curYear);

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.description}>
            <span>{title}</span>
            <p>{description}</p>
          </section>

          <section className={styles.information}>
            <div className={styles.select}>
              <SelectYear
                curYear={curYear}
                setYear={setYear}
                yearsNumbers={yearsNumbers}
              />
            </div>

            <div className={styles.table}>
              <Table rows={months} />
            </div>
          </section>
        </div>
      </div>
    );
  } catch (err) {
    return <Dev msg="Conteúdo em edição" />;
  }
}

Transparence.layout = Layout;
