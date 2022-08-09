import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 20px;
  gap: 15px;
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  h3 {
    margin: 0px;
    font-size: 40px;
    color: #f83f2c;
    font-family: "Kdam Thmor Pro", sans-serif;
  }
  div {
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      height: 35px;
      width: 250px;
      max-width: 250px;
      padding-left: 10px;
      border-radius: 8px;
      border: 2px solid #f83f2c;
      background-color: #fdcfca;
      color: #f83f2c;
      font-weight: 600;
      font-size: 16px;
    }
    span {
      color: #f83f2c;
      font-size: 14px;
      font-weight: 600;
      max-width: 380px;
      width: 380px;
    }
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
    margin-top: 20px;
  }
`;
