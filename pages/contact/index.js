import { useState } from "react";
import Circles from "../../components/Circles";
import { BsArrowRight, BsRepeat } from "react-icons/bs";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const MySwal = withReactContent(Swal);

  // Função para disparar o alerta
  const showAlert = (title, text, icon, buttonText) => {
    MySwal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: buttonText,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      showAlert(
        "Erro!",
        "Todos os campos devem ser preenchidos.",
        "error",
        "Ok"
      );
      return; // Interrompe a função se algum campo estiver vazio
    } else {
      console.log("Sending");
      let data = {
        name,
        email,
        subject,
        message,
      };
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          showAlert("Sucesso!", "Sua mensagem foi enviada.", "success", "Ok");
          console.log("Response succeeded!");
          setSubmitted(true);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          showAlert(
            "Erro!",
            "Não foi possível enviar a mensagem.",
            "error",
            "Ok"
          );
        }
        console;
      });
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div
        className="container mx-auto py-32 text-center 
      xl:text-left flex items-center justify-center h-full"
      >
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="h2 text-center mb-12">
            Enviar E-mail<span className="text-accent">.</span>
          </h2>
          <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Seu Nome"
                className="input"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="nome"
              ></input>
              <input
                type="email"
                placeholder="Seu Email"
                className="input"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
              ></input>
            </div>
            <input
              type="text"
              placeholder="Assunto"
              className="input"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              name="assunto"
            ></input>
            <textarea
              placeholder="Mensagem"
              className="textarea"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name="mensagem"
            ></textarea>
            <button
              className="btn rounded-full border border-white/50 
            max-w-[170px] px-8 transition-all duration-300 flex items-center 
            justify-center overflow-hidden hover:border-accent group"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              <span
                className="group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500"
              >
                Enviar
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 
              group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100
              transition-all duration-300 absolute text-[22px]"
              />
            </button>
          </form>
        </div>
        <Circles />
      </div>
    </div>
  );
};

export default Contact;
