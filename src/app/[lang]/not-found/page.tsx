import "@/public/styles/globals.css";

import Link from "next/link";
import Header from "../../../components/includes/header";

function NotFound() {
  return (
    <div>
      {/* <Header lang="en"></Header> */}
      <main
        className={` ${mainDivWidth} font-semibold bg-background flex items-center justify-center
             text-text duration-300 glow5 h-[calc(100vh-4rem)]`}
      >
        <div className=" flex flex-col justify-center items-center gap-4 text-[1.5rem]">
          <div>freddiego.404</div>
          <div>Oops, something went wrong :(</div>
          <Link href={"/"}>
            <button
              className="shadow-[0_0_0_3px_#000000_inset] px-6 py-4 
              bg-transparent border border-primary w-fit
              text-primary rounded-lg font-bold transform 
              hover:-translate-y-1 transition duration-400"
            >
              Back to the good freddiego.dev
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFound;

const mainDivWidth = `
sm:px-[min(calc((100%-36rem)/2),4rem)] 
md:px-[min(calc((100%-40rem)/2),8rem)]
lg:px-[min(calc((100%-48rem)/2),10rem)]
xl:px-[calc((100%-60rem)/2)]
`;
