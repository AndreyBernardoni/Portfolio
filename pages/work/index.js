import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WorkSlider from "../../components/WorkSlider";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              Meus Projetos<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-2-[400px] mx-auto lg:mx-0"
            >
              Alguns dos meus projetos pessoais e profissionais na área de
              desenvolvimento de software. São aplicações que envolvem
              diferentes tecnologias, linguagens e frameworks. Alguns dos
              projetos são open source e estão disponíveis no meu GitHub. Outros
              são projetos comerciais ou acadêmicos que realizo como freelancer
              ou estudante.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {" "}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Work;
