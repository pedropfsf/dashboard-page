import styled from "styled-components";

import { theme } from "@src/theme/globals";
import logo from "@src/assets/logo.svg";

export const Container = styled.div`
  background-color: ${theme.colors.dark[1]};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.space.sm};
`;

export const Logo = styled.img.attrs({ src: logo, alt: "Logo" })`
  margin-bottom: 38px;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  cursor: pointer;
`;
