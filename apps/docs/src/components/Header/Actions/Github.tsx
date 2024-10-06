import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Github = () => {
  return (
    <Link
      href="https://github.com/unisol1020/nativecn"
      className="flex items-center justify-center"
      target="_blank"
    >
      <FontAwesomeIcon className="h-[1.2rem] w-[1.2rem]" icon={faGithub} />
    </Link>
  );
};

export default Github;
