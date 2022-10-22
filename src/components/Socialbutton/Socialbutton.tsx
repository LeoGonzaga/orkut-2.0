import { Styles } from "./styles";
import Facebook from "@/assets/facebook.svg";
import Google from "@/assets/google.svg";
import Twitter from "@/assets/twitter.svg";
import React from "react";

const SOCIAL: Record<string, any> = {
  facebook: Facebook,
  google: Google,
  twitter: Twitter,
};

type SocialButttonProps = {
  value: string;
};
export const Socialbutton = ({ value }: SocialButttonProps): JSX.Element => {
  return (
    <Styles.Container>
      <img src={SOCIAL[value]} alt="" />
    </Styles.Container>
  );
};
