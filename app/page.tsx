import InputForm from "@/component/inputField";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="absolute -z-10 bg-foreground/10  rounded-br-full  sm:h-dvh w-3xl"></div>
    <div className="z-30 flex min-h-screen items-center justify-center font-sans   ">
      
      <main className="flex flex-col  gap-6 w-full max-w-3xl items-center  py-24 px-6   sm:items-start sm:ml-3">
         
         <h1 className="max-w-xs text-3xl font-semibold leading-snug tracking-tight text-foregroud">
           Url shortner.
        </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                      Easily shorten long URLs and share them anywhere. 

          </p>
       
        <div className="flex flex-col items-center gap-6 text-center mt-6  sm:items-start sm:text-left">
           <InputForm/>
        </div>
      </main>
    </div>
    </>
  );
}
