/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss"
import Button from "../../Utils/Buttons/index"
import Input from "../Input/index"
import { Form } from "@unform/web"
import { useState, useRef } from "react"
import * as Yup from "yup"
import Alert from "../Alert/index"
import ReCAPTCHA from "react-google-recaptcha"

export default function Contact({title, emailTo}) {
  const [sendStatus, setSendStatus] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [uncheckedCaptcha, setUncheckedCaptcha] = useState(false)

  const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE
  const link = process.env.NEXT_PUBLIC_API_SEND_EMAIL

  const formRef = useRef(null)
  const reRef = useRef(null) //CAPCHA Ref

  const handleSubmit = async (data, { reset }) => {
    
    setSubmitting(true)
    try {
      const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      formRef.current.setErrors({})
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(3, "O nome deve ter pelomenos 3 caracteres")
          .required("O nome é obrigatório"),
        lastName: Yup.string()
          .min(3, "O Sobrenome deve ter pelomenos 3 caracteres")
          .required("O sobrenome é obrigatório"),
        phone: Yup.string()
          .matches(phoneRegExp, "Telefone inválido")
          .required("O telefone é obrigatorio")
          .min(10, "Número muito pequeno")
          .max(11, "Número muito grande"),
        email: Yup.string().email().required("O e-mail é obrigatorio"),
        subject: Yup.string()
          .min(5)
          .required("O assunto é obrigatorio"),
        message: Yup.string()
          .min(10)
          .required("O mensagem é obrigatorio"),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      const token = reRef.current.getValue()

      if (!token) {
        setUncheckedCaptcha(true)
        return
      }

      setSendStatus("loading")

      const response = await fetch(link, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
          token,
          emailTo
        }),
      });

      if (response.status === 200) {
        setSendStatus("done")
        reRef.current.reset()
        setUncheckedCaptcha(false)
        reset()
        } else {
        setSendStatus("error")
        reRef.current.reset()
      }


    } catch (err) {
      const validationErrors = {}
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message
        })
        formRef.current.setErrors(validationErrors)
      } else {
        console.log(err)
      }
    }
    setSubmitting(false)
  }
  return (
    <div className={styles.container}>
      <section>
        <Form ref={formRef} onSubmit={handleSubmit}>

          <div className={styles.status}>
            {sendStatus === "loading" && (
              <Alert type="warning" msg="Enviando..." />
            )}
            {sendStatus === "done" && (
              <Alert type="success" msg="Mensagem enviada!" timeOut={5000}/>
            )}
            {sendStatus === "error" && (
              <Alert type="error" msg="Algo deu errado... Por favor tente novamente." />
            )}
          </div>

          <strong>{title ? title : 'Fale conosco'}</strong>
          <div className={styles.blockName}>
            <div className={styles.name}>
              <Input name={"name"} label="Nome" />
            </div>
            <div className={styles.lastName}>
              <Input name={"lastName"} label={"Sobrenome"} />
            </div>
          </div>
          <Input name={"email"} label={"E-mail"} />
          <Input name={"phone"} label={"Telefone"} />
          <Input name={"subject"} label={"Assunto"} />
          <Input name={"message"} multiline={true} label={"Mensagem"} />
          <div className={styles.recaptcha} >
            <ReCAPTCHA
              sitekey={key}
              ref={reRef}
            />
            {uncheckedCaptcha && <span style={{ color: "var(--error)" }}>Marque a caixa de seleção - Não sou um robô</span>}
          </div>


          <div className={styles.btn}>
            <Button type={["send"]} />
          </div>
        </Form>
      </section>
    </div>
  )
}
