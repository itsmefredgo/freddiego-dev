import Link from "next/link";

function NonFound() {
  return (
    <body>
      <main
        className={` ${mainDivWidth} p-2 pt-24 font-semibold pr-[2rem] bg-[#0c0e12]
            pl-[2.5rem] pb-24 text-[#d3defd] duration-300 glow5 h-[calc(100vh-3rem)]`}
      >
        <div className=" flex flex-col justify-center items-center h-full gap-4 text-[1.5rem]">
          <div>freddiego.404</div>
          <div>Oops, something went wrong :(</div>
          <Link href={"/"}>
            <button
              className="shadow-[0_0_0_3px_#000000_inset] px-6 py-4 
              bg-transparent border border-[#d3defd] w-fit
            text-[#d3defd] rounded-lg font-bold transform 
              hover:-translate-y-1 transition duration-400"
            >
              Back to main page
            </button>
          </Link>
        </div>
      </main>
    </body>
  );
}

export default NonFound;
const mainDivWidth = `
sm:px-[min(calc((100%-36rem)/2),4rem)] 
md:px-[min(calc((100%-40rem)/2),8rem)]
lg:px-[min(calc((100%-48rem)/2),10rem)]
xl:px-[calc((100%-60rem)/2)]
`;
