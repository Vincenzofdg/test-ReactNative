import { Nav, Title, Btn, TitleBtn } from '../css/Home';

function Home() {
  return (
    <Nav>
      <Title>Olá, seja bem vindo</Title>
      <Btn accessibilityLabel="Status"><TitleBtn>Status</TitleBtn></Btn>
    </Nav>
  );
}

export default Home;