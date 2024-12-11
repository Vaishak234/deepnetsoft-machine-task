import { useContext } from "react";
import { GlobalContext } from "./GlobalStateProvider";

type props = {
    content: string,
    isActive:boolean
}

const MenuBtn = ({ content ,isActive }:props) => {

  const value = useContext(GlobalContext)
  console.log(value);
  
  return (
    <button className={ ` border w-[80px] md:w-[120px]   border-blue-400  rounded-sm text-sm md:text-lg font-md py-3 px-5  text-white ${isActive ? 'bg-[#0796EF]' : 'bg-black'}`}>
        {content}
    </button>
  )
}

export default MenuBtn
