import TODOsLogo from "assets/logo.svg";

import { Container, Logo, LogoContainer, Title } from "./styled";

const Header = () => (
  <Container>
    <LogoContainer href="/">
      <Logo alt="TODOs logo" src={TODOsLogo} />
    </LogoContainer>
    <Title>TODOs</Title>
  </Container>
);

export default Header;
