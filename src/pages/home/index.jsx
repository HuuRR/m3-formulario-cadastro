import { useHistory } from "react-router-dom";
import { StyledDiv } from "./styles";

function Home() {
  const history = useHistory();
  const logar = () => {
    history.push(`/cadastro`);
  };
  return (
    <StyledDiv>
      <p className="pastel">Olá </p>
      <p>cadastre-se ou faça o login</p>
      <button className="button-login" disabled>
        Login
      </button>
      <button className="button-cadastro" onClick={logar}>
        Cadastrar
      </button>
    </StyledDiv>
  );
}

export default Home;
