import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

function Navbar() {
    const style = "text-[14px] cursor-pointer ml-[25px]"
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] 
        flex justify-between items-center">
            {/*left div */}
        <div className="left flex flex-1 item-center">
          <div className="searchInput flex border-[2px] border-solid 
          border-lighgrey rounded-md items-center ml-[10px] p-[5px] 
            focus-within:border-[#de0e82] transition-all">
            <input className="input outline-none"
            type="text"/>
            <Search className="" style={{fontSize: '16px'}}/>
          </div>
          <div className={style}>Impresiones 3D</div>
          <div className={style}>Mates</div>
          <div className={style}>Masetas</div>
        </div>
{/* Logo */}
        <div className="center flex-1 text-center" >
            <div className="logo font-bold text-lg">Ame Tienda de Arte</div>
        </div>
        {/* Right div */}
        <div className="right flex flex-1 items-center justify-end">
            <div className={style}>Registrarse</div>
            <div className={style}>Acceder</div>
            <div className={style}>
            <Badge badgeContent={1} color='secondary'>
                <ShoppingCartOutlined/>
            </Badge>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
