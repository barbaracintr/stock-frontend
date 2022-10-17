import upload from "../../assets/img/upload-icon.svg";
import policy from "../../assets/img/policy-icon.svg";
import notealt from "../../assets/img/notealt-icon.svg";

import { useState } from "react";

import { ItemNav } from "../ItemNav";

import { BoxNav } from "./styles.js"

export const NavBar = () => {

  const [ optionsMenu, setOptionsMenu ] = useState([
    { name: "Upload do Arquivo", src: "upload", icon: upload },
    { name: "Relatórios", src: "report", icon: notealt },
    { name: "Política", src: "policy", icon: policy },
  ]);

  return (
    <BoxNav open="true">
      <summary>Módulo do Sistema</summary>
      <nav>
        <ul>
          {optionsMenu.map((option, index) => (
            <ItemNav option={option} key={index} />
          ))}
        </ul>
      </nav>
    </BoxNav>
  );
};
