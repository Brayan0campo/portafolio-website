import {
  WelcomeContainer,
  HeaderContainer,
  NavContainer,
  NavTitle,
  NavTools,
  NavToolsButton,
  MainContainer,
  FooterContainer,
  FooterText,
} from "./Welcome.Styled";

const Welcome = () => {
  return (
    <WelcomeContainer>
      <HeaderContainer aria-label="Header Section">
        <NavContainer>
          <NavTitle href="/" draggable="false">
            Brayan | Ocampo
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

      <MainContainer aria-label="Main Section"></MainContainer>
      <FooterContainer>
        <FooterText>
          ©2023 Brayan Ocampo | Made with ❤ in Medellin - Colombia
        </FooterText>
      </FooterContainer>
    </WelcomeContainer>
  );
};

export default Welcome;
