import {Box} from  '@mui/system'
import React, {useEffect, useState} from 'react'
import { Button, Paper, Tooltip } from '@mui/material';
import { Copy, CopyCheck } from 'lucide-react';

export default function CopyToClip({shorturl}:{shorturl:string}) {

    const [copied, setCopied] = useState(false);
    const [shortUrl, setShortUrl] = useState("")
    useEffect(()=>{
        setShortUrl(shorturl)
    })
    const handelCopy = async ()=>{
        try{
            await navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            setTimeout( () => {
                setCopied(false);
               
            },1000);
        }catch(err){
            console.log("Failed to copy");
        }
    }
    return(
        <Paper className='flex flex-start justify-between px-2 max-w-sm text-lg bg-foreground/10 text-background'>
            <Box>{shortUrl}</Box>
            <Tooltip title="copy to clipboard">
                
                <Button onClick={handelCopy}>
                    { copied?  <CopyCheck className='text-green-800'/> : <Copy className='text-background'/>}
                    </Button>
            </Tooltip>
        </Paper>
    )
}