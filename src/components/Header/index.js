import { Container, Content } from "./styles";
import logoImg from '../../assets/logo.png'


export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
      </Content>
    </Container>
  )
}