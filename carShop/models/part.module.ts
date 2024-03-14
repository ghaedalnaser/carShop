import {objectify} from '../utils/objectify';

export  interface  Part{
    id?:string,
    name:string,
    year:string,
    photo:string,
    model_id:string,
    store_id:string,
    price:string
}

const  defaultPart : Part = {
    id:'',
    name:'',
    year:'',
    photo:'',
    model_id:'',
    store_id:'',
    price:''
}
 export const getDefaultPart = ()=>{
     return objectify(defaultPart);
 }