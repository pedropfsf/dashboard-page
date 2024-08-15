import styled from "styled-components";
import { theme } from "@src/theme/globals";

export const Container = styled.div`
  display: flex;
`;

export const PageContainer = styled.div`
  padding: ${theme.space["2xl"]};
  background-color: ${theme.colors.light[2]};
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;
