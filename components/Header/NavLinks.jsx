import Link from "next/link";
import {
  FaGithub,
  FaGithubAlt,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const NavLinks = () => {
  return (
    <div className="flex flex-row gap-5">
      <Link href={"/"}>
        <FaGithub size={23} />
      </Link>
      <Link href={"/"}>
        <FaTwitter size={23} />
      </Link>
      <Link href={"/"}>
        <FaLinkedin size={23} />
      </Link>
      <Link href={"/"}>
        <FaInstagram size={23} />
      </Link>
    </div>
  );
};

export default NavLinks;
