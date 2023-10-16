import styled from 'styled-components';


export const Container = styled.header`
  padding-left: 5vw;
  padding-right: 5vw;
  height: 120px;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: rgba(0,0,0,0.5);
  z-index: 3;
  transition-duration: 1s;
  display: flex;
  align-items: center;
  width: 100%;
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  cursor: pointer;
  vertical-align: middle;
`;

export const Link = styled.a`    
  text-decoration: none;
  color: #ccc;
  text-transform: uppercase;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  list-style: none;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const Logo = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 0.5vw;
  gap: 0.5vw;
  & > p {
    background: linear-gradient(180deg,#0a1556 2%,#9649d1 80%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 24px;
    cursor: pointer;
    margin: 0;
    & > a {
      all: unset;
      text-transform: none;
      color: #fff;
      font-size: 24px;
      border-radius: 7px;
    }
  }
`;

export const ContainerButtons = styled(Logo)``;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
`;

export const Anchor = styled.a`
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  margin: 2% 0 0 1%;
  padding: 5px 1vw;
  border: 0.4vh solid rgba(255, 255, 255, 0.4);
  border-right: 0.1vh solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.1vh solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  transition: 0.6s;
  overflow: hidden;
  font-weight: bold;
  font-size: 14px;
  width: max-content;
  height: max-content;
  text-decoration: none;
  color: #ccc;

  &:hover{
    font-size: 16px;
    color: #9649d1;
  }

  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100px;
    background: rgba(255, 255, 255, 0.5);
    transform: skew(45deg) translateX(190px);
    transition: 0.5s;
    display: initial;
  }

  &:hover::before{
    transform: skew(45deg) translateX(-150px);
  }
`;