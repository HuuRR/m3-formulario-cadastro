import { StyledContainer } from "./styles";
import { useParams, useHistory } from "react-router-dom";
//import "./styles.css";
import lulao from "../../images/lulao.webp";

function Logado() {
  const params = useParams();
  const history = useHistory();

  return (
    <StyledContainer className="container">
      <h1> Obrigado por fortalecer a firma {params.id}! </h1>
      <img src={lulao} alt="" />

      <button onClick={() => history.push("/")}>Voltar</button>
    </StyledContainer>
  );
}

export default Logado;
