import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Github = () => {
  return (
    <Link href="https://github.com/unisol1020/nativecn" target="_blank">
      <FaGithub className="h-[1.2rem] w-[1.2rem]" />
    </Link>
  );
};

export default Github;
