import styled from "styled-components";
import { devices } from "../../styles/responsive";
import { colors, fonts } from "../../styles/variables";

export const WelcomeContainer = styled.div``;

export const HeaderContainer = styled.header`
  padding: 1rem 1.5rem;
  background-color: ${colors.clr_bg};
  border-bottom: 0.0625rem solid ${colors.clr_gray_alt};
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavTitle = styled.a`
  color: ${colors.clr_details};
  font: bold 1.1em ${fonts.ff_title};
  text-shadow: 0 0 0.1rem ${colors.clr_details};
`;

export const NavTools = styled.div`
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavToolsButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 0.95em;
  transition: all 0.5s;
  color: ${colors.clr_text};
  background-color: transparent;

  &:hover {
    color: ${colors.clr_details};
  }
`;

export const MainContainer = styled.main``;
