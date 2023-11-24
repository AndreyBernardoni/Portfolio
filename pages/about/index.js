import React, { useState } from "react";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaWindows,
  FaAws,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiDotnet,
  SiFirebase,
  SiFlutter,
  SiLinux,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiDart,
  SiAzuredevops,
  SiPostgresql,
  SiMysql,
  SiMacos,
  SiOracle,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "Habilidades",
    info: [
      {
        title: "Desenvolvimento Web",
        icons: [
          <SiDotnet />,
          <FaJs />,
          <FaReact />,
          <FaNodeJs />,
          <SiNextdotjs />,
        ],
      },
      {
        title: "Desenvolvimento Mobile",
        icons: [<SiFirebase />, <SiDart />, <SiFlutter />],
      },
      {
        title: "Versionamento de Código",
        icons: [<FaGit />, <FaGithub />, <SiAzuredevops />],
      },
      {
        title: "Bancos de dados",
        icons: [
          <SiMicrosoftsqlserver />,
          <SiMongodb />,
          <SiPostgresql />,
          <SiMysql />,
        ],
      },
      {
        title: "Sistemas Operacionais",
        icons: [<FaWindows />, <SiLinux />, <SiMacos />],
      },
      {
        title: "Provedores em nuvem",
        icons: [<SiMicrosoftazure />, <FaAws />, <SiOracle />],
      },
    ],
  },
  {
    title: "Formação",
    info: [
      {
        title: "Ensino médio - Instituto Federal Sul-rio-grandense",
        stage: "2020-2023",
      },
      {
        title:
          "Téc. em Informática para internet - Instituto Federal Sul-rio-grandense",
        stage: "2020-2023",
      },
    ],
  },
  {
    title: "Experiência",
    info: [
      {
        title: "Estagiário de TI - Android Industries",
        stage: "04/23 - 12/23",
      },
      {
        title: "Aprendiz de TI - Android Industries",
        stage: "05/22 - 04/23",
      },
    ],
  },
  {
    title: "Certificações",
    info: [
      {
        title: "Azure Fundamentals | AZ900 - Microsoft",
        stage: "2023",
      },
      {
        title:
          "Security, Compliance, and Identity Fundamentals | SC-900 - Microsoft",
        stage: "2023",
      },
      {
        title: "Oracle Cloud Infraestructure Foundations Associate - Oracle",
        stage: "2023",
      },
    ],
  },
  {
    title: "Palestras",
    info: [
      {
        title:
          "Computação em Nuvem com Azure. Conceitos e Aplicação Prática de Escalabilidade - Instituto Federal Sul-rio-grandense",
        stage: "2023",
      },
    ],
  },
];

import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      />
      <div
        className="container mx-auto h-full flex 
      // flex-col items-center xl:flex-row gap-x-6 md:overflow-y-scroll lg:overflow-hidden"
      >
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Problemas <span className="text-accent">desafiadores</span> geram
            soluções inovadoras<span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >
            4 anos atrás, iniciei meu curso técnico em programação. Desde então,
            me dediquei à criação de soluções digitais para web e mobile,
            trabalhando e desenvolvendo produtos para uso empresarial e pessoal.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[60%] h-[480px]"
        >
          <div className=":overflow-x-scroll lg:overflow-hidden">
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${
                      index === itemIndex &&
                      "text-accent after:w-[100%] after:bg-accent after:duration-300"
                    }cursor-pointer capitalize xl:text-lg relative after:w-8 
                  after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 
          items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
