import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "../Global/variable";

export const NavFrame = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  z-index: 1;
  background-color: ${color.blue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LinkFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const NavLink = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 40px;
`;
