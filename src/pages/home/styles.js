import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  p {
    color: #f83f2c;
    font-size: 24px;
    font-weight: 600;
    margin: 0px;
    font-family: "Kdam Thmor Pro", sans-serif;
  }

  .pastel {
    font-size: 40px;
  }
  .button-login {
    cursor: not-allowed;
    width: 200px;
    height: 50px;
    border-radius: 8px;
    background-color: #fa7f72;
    color: #f83f2c;
    font-weight: 600;
    font-size: 18px;
    box-sizing: border-box;
    border: 1px solid #f83f2c;
    opacity: 30%;
  }

  .button-cadastro {
    cursor: pointer;
    width: 200px;
    height: 50px;
    border-radius: 8px;
    background-color: #fa7f72;
    color: #f83f2c;
    font-weight: 600;
    font-size: 18px;
    box-sizing: border-box;
    border: 1px solid #f83f2c;
  }
`;
