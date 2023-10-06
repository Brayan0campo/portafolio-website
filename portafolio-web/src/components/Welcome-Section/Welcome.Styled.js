import styled from "styled-components";
import { devices } from "../../styles/responsive";
import { colors, fonts } from "../../styles/variables";

export const WelcomeContainer = styled.div`
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

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

export const MainContent = styled.div`
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainAvatar = styled.div`
  user-select: none;
  transition: all 0.5s;
  border-radius: 0.6rem;
  transform: scale(0.55);
  background-color: ${colors.clr_details};

  &:hover {
    transform: scale(0.6);
  }
`;

export const MainAvatarImg = styled.img`
  width: 100%;
  transition: all 0.5s;
  transform: scale(1.2) translateX(-0.1875rem) translateY(-1.7rem);

  &:hover {
    transform: scale(1.23) translateX(-0.1875rem) translateY(-2rem);
  }
`;

export const MainInfo = styled.div``;

export const MainLinks = styled.div``;

export const FooterContainer = styled.footer`
  text-align: center;
  background-color: ${colors.clr_bg};
  border-top: 0.0625rem solid ${colors.clr_gray_alt};
`;

export const FooterText = styled.p`
  padding: 1.7rem;
  color: ${colors.clr_gray};
  font: normal bold 0.8125em ${fonts.ff_title};
`;
