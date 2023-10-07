import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar px-4 sm:px-[2rem] xl:px-[8rem] bg-base-100">
        <div className="flex-1">
          <div className="btn btn-ghost normal-case  text-xl">
            <Image src={logo} className="h-full w-full" alt="wowsubs" />
          </div>
        </div>
        <div className="flex-1  sm:flex hidden justify-center italic text-xl text-[2rem] font-semibold">
          Watch Live Cricket Worldcup
        </div>
        <div className="flex-1 flex justify-end">
          <Link
            className="btn btn-ghost normal-case  text-xl "
            href={"https://umer-rauf-portfolio.netlify.app/"}
          >
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
