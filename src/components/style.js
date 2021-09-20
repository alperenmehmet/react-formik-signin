import styled from 'styled-components';

export const Form = styled.div`
  // line-height: 1;
  border: 1px solid;
  padding: 1rem;
  width: 400px;
  height: 500px;
  display: grid;
  gap: 0.5em;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 10px 10px 5px #aaaaaa;
  border-radius: 5px;
  border-color: #e9ecef;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 5px 12px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  background-color: #4361ee;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  :hover {
    background-color: #3740ff;
  }
`;
