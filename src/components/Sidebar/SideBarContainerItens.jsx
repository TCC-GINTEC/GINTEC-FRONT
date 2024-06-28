import React from "react";
import "../../app/globals.css";

const SideBarContainerItens = ({ children, url,active }) => {
  let positionClass = "";

  if(active == true){
    switch (url) {
        case "/home":
          positionClass = "position-active-0"; // Pode deixar vazio para posição padrão
          break;
        case "/sala":
          positionClass = "position-active-um";
          break;
        case "/cadastros":
          positionClass = "position-active-dois";
          break;
        case "/prazos":
          positionClass = "position-active-tres";
          break;
        case "/ranking":
          positionClass = "position-active-quatro";
          break;
        case "/notificacao":
          positionClass = "position-active-cinco";
          break;
        case "/configuracao":
          positionClass = "position-active-seis";
          break;
          
        default:
          positionClass = ""; // Pode deixar vazio para posição padrão
          break;
      }
    }else if(active == false){
        switch (url) {
            case "/home":
              positionClass = "position-false-0"; // Pode deixar vazio para posição padrão
              break;
            case "/sala":
              positionClass = "position-false-um";
              break;
            case "/cadastros":
              positionClass = "position-false-dois";
              break;
            case "/prazos":
              positionClass = "position-false-tres";
              break;
            case "/ranking":
              positionClass = "position-false-quatro";
              break;
            case "/notificacao":
              positionClass = "position-false-cinco";
              break;
            case "/configuracao":
              positionClass = "position-false-seis";
              break;
              
            default:
              positionClass = ""; // Pode deixar vazio para posição padrão
              break;
          }
    }
  

  return (
    <div className="space-y-3 flex justify-between relative">
      <div className="space-y-3">{children}</div>
      <div className="relative w-[10px] min-h-full ">
        <img
          className={`absolute right-0 transition-all duration-500 ease-in-out ${positionClass}`}
          src="images/retangulo-bg.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SideBarContainerItens;
