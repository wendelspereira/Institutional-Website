import transporter from "./mail/config";
const user = process.env.ZOHO_USER;

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const info = req.body;

    transporter.sendMail(
      {
        to: "projetos@netalcode.com",
        from: user,
        subject: "Crash Aplication",
        text: `Error na aplicação do cliente: `,
        html: `
                <h1>Crash on Aplication</h1>
                <h3>Client: ${user}</h3>
                <p>Message_error: ${info.err}</p>
            `,
      },
      (err) => {
        return res.status(500).send(err);
      }
    );

    res.status(200).send();
  } catch (err) {
    return res
      .status(500)
      .send({ error: "Error on end point 'crash_reporter'" });
  }
};
