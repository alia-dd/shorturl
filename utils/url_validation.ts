import { BACKEND_URL } from "./constants";

export default function isValidUrl(url:string){
    try{
        new URL(url);
    }catch(e){
        console.error(e);
        return false;
    }
    return true;
}