import Link from "next/link";
import {
  RiGithubLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiLinkedinLine,
} from "react-icons/ri";

import { AiOutlineMail } from "react-icons/ai";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        target="_blank"
        href={"https://github.com/AndreyBernardoni"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        target="_blank"
        href={"https://whatsa.me/5551986073146"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/andreyfialho/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        target="_blank"
        href={"mailto:andreyfialho@outlook.com"}
        className="hover:text-accent transition-all duration-300"
      >
        <AiOutlineMail />
      </Link>
      <Link
        target="_blank"
        href={"https://www.instagram.com/andrey.fialho/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
