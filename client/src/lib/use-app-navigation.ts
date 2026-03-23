import { useNavigate } from "react-router-dom";

export const useAppNavigation=()=>{

    const naviagte=useNavigate();

   const goTo=(path:string)=>{
        naviagte(path);
    }

    const goBack=()=>{
        naviagte(-1);
    }
return {goBack,goTo}

}

   
