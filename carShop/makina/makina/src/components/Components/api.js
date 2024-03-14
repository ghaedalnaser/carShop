import { useEffect, useState } from "react";

const getReq = new XMLHttpRequest();
getReq.open('GET','https://api');
getReq.send();


const postReq = new XMLHttpRequest();
postReq.open('POST','https://api');
postReq.send();


const req = new XMLHttpRequest();
req.open('DELETE','https://api');
req.send();


/*       */


const [mydata, setMydata] = useState('');
const [errMsg, setErrMsg] = useState(null);


useEffect(()=>{
    fetch('http://')
    .then((res)=>{
        if (!res.ok){
            throw Error('NOT FOUND');
        }
        return res.json();
    })
    .then((data)=>{
        setMydata(data)
    }).catch((err)=>{
        <div className="error">{err}</div>
    })
},[]);