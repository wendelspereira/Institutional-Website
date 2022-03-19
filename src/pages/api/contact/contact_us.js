import transporter from "../mail/config"

const secret = process.env.RECAPTCHA_SECRET;
const user = process.env.ZOHO_USER

async function validateHuman(token) {
    const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
        {
            method: "POST",
        }
    );
    const data = await response.json();
    return data.success;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    try {
        const { data, token, emailTo } = req.body
        const {
            subject,
            message,
            name,
            lastName,
            phone,
            email
        } = data

        const human = await validateHuman(token);
        if (!human) {
            res.status(400).json({ errors: "You're not fooling us, bot." });
            return;
        }

        transporter.sendMail({
            to: emailTo,
            from: user,
            subject: subject,
            text: message,
            html: `
        <h1>Contato através do site</h1>
        <h2>De ${name} ${lastName}</h2>
        <h3>Assunto: ${subject}</3>
        </br>
        <h4>Mensagem: ${message}</h4>
        </br>
        </br>
        <p>Contatos do visitante</p>
        <p>E-mail: ${email}</p>
        <p>Telefone: ${phone}</p>
        `
            // template: 'auth/visitor_msg',
            // context: { ...data }
        }, (err) => {
            if (err) {
                return res.status(500).send({ error: "Message no has been sent" })
            } else {
                return res.status(200).send({ success: "Message has been sent" })
            }
        })
    } catch (err) {
        return res.status(500).send({ error: "Message no has been sent" })
    }
}


