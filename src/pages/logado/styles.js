import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 700px;
  max-height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #f83f2c;
    font-size: 40px;
    font-weight: 600;
    margin: 0px;
    font-family: "Kdam Thmor Pro", sans-serif;
  }

  img {
    width: 50%;
    height: 50%;
  }

  button {
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
