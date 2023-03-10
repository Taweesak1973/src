import {FC} from'react';
interface props{
    text: string;


}
const BigText:FC<props>=({text})=>{
    return <h1>{text}</h1>;
}

export {BigText};