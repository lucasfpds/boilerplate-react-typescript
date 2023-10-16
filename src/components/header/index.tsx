import React from 'react';
// import "./header.css";
import cifrao from '../../assets/cifrao.svg';
import { Container, Nav, Image, Ul, Logo, Link, ContainerButtons, Button, Anchor } from './style';
import { useIsDesktop, /* useImages */ } from '../../hooks';

export const Header: React.FC = () => {
  const { isDesktop } = useIsDesktop();
  // const { img } = useImages();
  // const { img, handleOpenClose } = useUser();
  // fix bug for firefox a::before
  // getBrowserInfo() === "firefox" &&
  //     (document.styleSheets[3].cssRules[123].style.display = "none");

  return (
    <Container>
      <Nav>
        {!isDesktop && <Image
          // onClick={handleOpenClose}
          // src={img}
          alt="Abrir e Fechar Menu"
        />}
        <Ul>
          <Logo>
            <p>
              &lt;<a href="#root">Lucas</a>/&gt;
            </p>
          </Logo>
          {isDesktop &&
            <ContainerButtons>
              <Button>
                <Anchor href="#aboutMe">Quem sou</Anchor>
              </Button>
              <Button>
                <Anchor href="#cases">Cases</Anchor>
              </Button>
            </ContainerButtons>
          }
        </Ul>

        {!isDesktop &&
          <Link
            target="_blank"
            rel="noreferrer"
            href="mailto:lucas@lucasfernandesdev.com.br?subject=Me envie um orçamento??&body=Olá, gostaria de um orçamento para desenvolver um site. Meu nome é..."
          >
            <Image src={cifrao} alt="orçamento por email" />
          </Link>
        }
      </Nav>
    </Container>
  );
}
