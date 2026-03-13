'use server'
import { BACKEND_URL } from "@/utils/constants";
import { Alert } from "@mui/material";

export default async function handleRequest(url:string){
    const res = await fetch(`${BACKEND_URL}/shorten/`,
       {
         method:'POST',
         body: JSON.stringify({
             url:url,
         }),
         headers:{
           "Content-Type": "Application/JSON",
         }
       }
    );
    const data = await res.json(); 
    console.log(data.alias);
    const shorturl = `${BACKEND_URL}/${data.alias}`;
    return shorturl;
}

