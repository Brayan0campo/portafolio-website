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
  padding: 1rem 2.5rem;
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
  gap: 1rem;
  display: flex;
  padding: 0 5rem;
  align-items: center;
  justify-content: space-between;
`;

export const MainAvatar = styled.div`
  user-select: none;
  transition: all 0.5s;
  border-radius: 0.6rem;
  transform: scale(0.5);
  background-color: ${colors.clr_details};

  &:hover {
    transform: scale(0.52);
  }
`;

export const MainAvatarImg = styled.img`
  width: 100%;
  transition: all 0.5s;
  transform: scale(1.23) translateX(-0.1875rem) translateY(-2.03rem);

  &:hover {
    transform: scale(1.27) translateX(-0.1875rem) translateY(-2.32rem);
  }
`;

export const MainInfo = styled.div`
  width: 50%;
  gap: 0.3rem;
  display: flex;
  flex-direction: column;
`;

export const MainInfoTitle1 = styled.h2`
  width: max-content;
  border-radius: 0.25rem;
  color: ${colors.clr_bg};
  padding: 0.25rem 0.75rem;
  font: bold 1em/1.3 ${fonts.ff_title};
  background-color: ${colors.clr_details};
`;

export const MainInfoTitle2 = styled.h3`
  font: bold 3em ${fonts.ff_text};
`;

export const MainInfoTitle3 = styled.h1`
  margin-bottom: 1rem;
  color: ${colors.clr_details};
  font: bold 2.5em ${fonts.ff_text};
`;

export const MainInfoText = styled.p`
  text-align: justify;
  margin-bottom: 1.5625rem;
  font: 500 1em ${fonts.ff_text};
`;

export const MainInfoEmailText = styled.p`
  font: normal 0.875em ${fonts.ff_title};
`;

export const MainInfoEmailLink = styled.a`
  color: ${colors.clr_details};
  font: normal 1.1em ${fonts.ff_title};
`;

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
