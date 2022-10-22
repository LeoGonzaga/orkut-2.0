import React from "react";
import Forms from "./components/Forms";
import BG from "@/assets/bg.svg";
import Logo from "@/assets/logo.svg";

import { Styles } from "./styles";

export const Login: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.LeftColumn>
        <Styles.Logo>
          <img src={Logo} height="30px" />
        </Styles.Logo>
        <Styles.Content>
          <h1>
            CONECTE-SE, <br />
            CONHEÇA E
            <br />
            COMPARTILHE
          </h1>

          <p>
            Conecte-se aos seus <strong>amigos</strong> e{" "}
            <strong>familiares</strong> usando recados e mensagens instantâneas
          </p>
          <p>
            Conheça <strong>novas pessoas</strong> através de amigos de seus
            amigos e comunidades
          </p>
          <p>
            Compartilhe seus vídeos, fotos e <strong>paixôes</strong> em um só
            lugar
          </p>
        </Styles.Content>
        <img src={BG} />
      </Styles.LeftColumn>
      <Forms />
    </Styles.Container>
  );
};
