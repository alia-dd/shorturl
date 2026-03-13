"use client"
import handleRequest from "@/app/api/shortener_request";
import isValidUrl from "@/utils/url_validation";
import { useState } from "react";
import CopyToClip from "./clipboardUrl";


export default function InputForm(){

    const [url, setUrl] = useState("");
    const [res, setres] = useState("");
    const errormsg =  "URL domain banned or is an invalid URL."
    const handleSubmit = async (req:any) =>{
        console.log(url);
        setres("")
       req.preventDefault();
       const valid = isValidUrl(url);
        const res = valid? `${await handleRequest(url)}` : errormsg
        setres(res);
    }
    
    const handleOnChange = (e:any) =>{
        const  value  = e.target.value;
        setUrl(value);
    }
    return(
        <form className="flex flex-col gap-5" method="post" onSubmit={handleSubmit}>
            <div className="flex flex-row gap-3 items-center">
                 <input className="bg-foreground/10 h-9 w-l px-4 py-2 sm:w-sm" type="text" name="url" value={url} onChange={handleOnChange} placeholder="Past here your long url" required/>
                <button className="bg-foreground size h-10 px-4  rounded-sm text-background" type="submit">Generate</button>           
            </div>
           <span className=" text-zinc-600 ">
                    {res != "" && res != errormsg ?
                    <CopyToClip shorturl={res}/>
                    :
                      res
                    }
            </span>
        </form>
    )
}