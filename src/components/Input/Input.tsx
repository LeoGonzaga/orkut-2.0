import { Styles } from "./styles";

type InputProps = {
  placeholder: string;
};

export const Input = ({ placeholder }: InputProps): JSX.Element => {
  return <Styles.Container placeholder={placeholder} />;
};
