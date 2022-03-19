import Map from "../Map";
import GoogleMap from "../Map";
import styles from "./styles.module.scss";

export default function Location({ address, openingHour, contact, geoPosition }) {
  const { title, street, number, district, city, uf, cep } = address;
  const { openingHours } = openingHour;
  const { mainPhone, whatsapp, email } = contact;
  
  const {longitude, latitude} = geoPosition
  
  return (
    <div className={styles.container}>
      <span>{title}</span>

      <div className={styles.content}>
        <section>
          <div className={styles.map}>
           <Map latitude={latitude} longitude={longitude} />
          </div>
        </section>

        <section>
          <div className={styles.contactAndAdress}>
            <span>
              <b>{`Contatos`}</b>
            </span>
            <br />
            <span>{`${mainPhone}`}</span>
            <br />
            <span>{`Whatsapp ${whatsapp}`}</span>
            <br />
            <span>{`${email}`}</span>
            <p />
            <span>
              <b>{`Endereço`}</b>
            </span>
            <br />
            <span>{`${street}, nº ${number} - ${district}`}</span>
            <br />
            <span>{`${city}-${uf}. CEP: ${cep}`}</span>
            <p />
            <span>
              <b>{`${openingHour.plain}`}</b>
            </span>
            <br />
            {openingHours.map((item) => {
              return (
                <span key={item.id}>
                  <span>{`${item.days} das ${item.hourInterval}`}</span>
                  <br />
                </span>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
