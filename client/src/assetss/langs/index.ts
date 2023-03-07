import { useContext } from 'react';
import { MyAppContext } from './../../contexts/ThemeContext';
// deno-lint-ignore-file
import OZ from "./oz.json"
import RU from "./ru.json"

//const { lang } = useContext<any>(MyAppContext);

  let $current_lang:any
  const lang = localStorage.getItem('lang')
  if(lang=='oz'){
    $current_lang = OZ
  }else if(lang=='ru'){
    $current_lang = RU
  }else{
    $current_lang = OZ
  }
  
  export default $current_lang
