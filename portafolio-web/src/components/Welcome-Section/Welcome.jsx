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
  MainInfoTitle1,
  MainInfoTitle2,
  MainInfoTitle3,
  MainInfoText,
  MainInfoEmailText,
  MainInfoEmailLink,
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
          <MainInfo>
            <MainInfoTitle1>{constants.title_info1}</MainInfoTitle1>
            <MainInfoTitle2>{constants.title_info2}</MainInfoTitle2>
            <MainInfoTitle3>{constants.title_info3}</MainInfoTitle3>
            <MainInfoText>{constants.text_info}</MainInfoText>
            <MainInfoEmailText>
              <i className="fa-solid fa-envelope fa-lg"></i>
              {constants.text_email1}
              <MainInfoEmailLink
                type="email"
                href="mailto:ocamporodriguezbrayan@gmail.com"
                draggable="false"
              >
                {constants.text_email2}
              </MainInfoEmailLink>
            </MainInfoEmailText>
          </MainInfo>
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
