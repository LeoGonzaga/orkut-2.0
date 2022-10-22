import Button from "@/components/Button";
import Line from "@/components/Line";
import Socialbutton from "@/components/Socialbutton";
import React from "react";
import Input from "../../../../components/Input";
import { Styles } from "./styles";

export const Forms: React.FC = () => {
  return (
    <Styles.Container>
      <form action="">
        <p>Junte-se a mais de 20 milhões de pessoas</p>
        <span>Ja tem conta? Só preencher e entrar</span>
        <Input placeholder="Digite seu email" />
        <Input placeholder="Digite sua senha" />
        <Button />
        <div>
          <a href="">Esqueci minha senha</a>
        </div>
        <Line />
        <Styles.Social>
          <Socialbutton value="google" />
          <Socialbutton value="twitter" />
          <Socialbutton value="facebook" />
        </Styles.Social>
        <div>
          <a href="">
            Ainda não tem conta? <span>Clique aqui</span>
          </a>
        </div>
      </form>
    </Styles.Container>
  );
};
