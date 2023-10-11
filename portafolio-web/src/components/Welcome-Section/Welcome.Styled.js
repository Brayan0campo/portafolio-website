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
  padding: 0 6rem;
  align-items: center;
  justify-content: center;
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
    transform: scale(1.26) translateX(-0.1875rem) translateY(-2.26rem);
  }
`;

export const MainInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const MainInfoTitle1 = styled.h2`
  width: max-content;
  border-radius: 0.4rem;
  color: ${colors.clr_bg};
  padding: 0.25rem 0.75rem;
  font: bold 1.1em/1.3 ${fonts.ff_text};
  background-color: ${colors.clr_details};
`;

export const MainInfoTitle2 = styled.h3`
  font: bold 3.2em/1.3 ${fonts.ff_text};
`;

export const MainInfoTitle3 = styled.h1`
  margin-bottom: 1.5rem;
  color: ${colors.clr_details};
  font: bold 2.5em ${fonts.ff_text};
`;

export const MainInfoText = styled.p`
  text-align: justify;
  margin-bottom: 2rem;
  color: ${colors.clr_text};
  font: 500 1.09em ${fonts.ff_text};
`;

export const MainInfoEmailText = styled.p`
  font: 500 0.99em ${fonts.ff_mono};
`;

export const MainInfoEmailLink = styled.a`
  color: ${colors.clr_details};
`;

export const MainLinks = styled.div`
  gap: 2.1rem;
  display: flex;
  margin: 0 6rem 0 4rem;
  align-items: center;
  flex-direction: column;
`;

export const MainLink = styled.a`
  color: ${colors.clr_text};
  transition: 0.5s;

  &:hover {
    transform: scale(1.12);
    color: ${colors.clr_details};
  }

  &#notion {
    width: 1.8125rem;
    text-align: center;
    color: ${colors.clr_bg};
    border-radius: 0.125rem;
    font: bold 1.4375em ${fonts.ff_text};
    background-color: ${colors.clr_text};

    &:hover {
      background-color: ${colors.clr_details};
    }
  }
`;

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