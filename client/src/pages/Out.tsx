import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyAppContext } from "contexts/ThemeContext";


export default function Out(){
    const navigate = useNavigate()
    const { userOut } = useContext<any>(MyAppContext);
    userOut();
    navigate(-1);
    return (<>Chiqiw amalga oshirilmoqda</>)
}