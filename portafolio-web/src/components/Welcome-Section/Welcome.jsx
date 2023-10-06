import {
  WelcomeContainer,
  HeaderContainer,
  NavContainer,
  NavTitle,
  NavTools,
  NavToolsButton,
  MainContainer,
  MainContent,
  MainAvatar,
  MainAvatarImg,
  MainInfo,
  MainLinks,
  FooterContainer,
  FooterText,
} from "./Welcome.Styled";
import { WelcomeConstants } from "../../constants/constant";

const Welcome = () => {
  const constants = WelcomeConstants.find(
    (id) => id.id === "welcome-constants"
  );

  return (
    <WelcomeContainer>
      <HeaderContainer aria-label="Header Section">
        <NavContainer>
          <NavTitle href="/" draggable="false">
            {constants.title_nav}
          </NavTitle>
          <NavTools>
            <NavToolsButton
              type="button"
              aria-label="Switch to English"
              data-tooltip="Switch to English"
              data-tooltip-bottom
              draggable="false"
            >
              <i className="fa-solid fa-earth-americas fa-lg"></i>
            </NavToolsButton>
            <NavToolsButton
              type="button"
              aria-label="Toggle Light Theme"
              data-tooltip="Theme"
              data-tooltip-bottom
              draggable="false"
            >
              <i className="fa-solid fa-circle-half-stroke fa-lg"></i>
            </NavToolsButton>
          </NavTools>
        </NavContainer>
      </HeaderContainer>

      <MainContainer aria-label="Main Section">
        <MainContent>
          <MainAvatar>
            <MainAvatarImg
              src={constants.image_avatar}
              alt="Image Avatar"
              draggable="false"
            />
          </MainAvatar>
          <MainInfo>Info</MainInfo>
          <MainLinks>Links</MainLinks>
        </MainContent>
      </MainContainer>

      <FooterContainer aria-label="Footer Section">
        <FooterText>{constants.footer_text}</FooterText>
      </FooterContainer>
    </WelcomeContainer>
  );
};

export default Welcome;
