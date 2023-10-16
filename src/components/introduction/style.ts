import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 5vw;
  padding-right: 5vw;
  position: absolute;
  width: 100%;
  height: 90vh;
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    color: white;
  }
`;

export const SpanText = styled.span`
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.4;
    }
  }

  text-align: center;
  animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) 4s both;
  font-size: 8rem;
  font-weight: bold;
  background: linear-gradient(to bottom, #9649d1 1%, #040431 65%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const Heading1 = styled.h1`
  @keyframes fade-in-top {
    0% {
      transform: translateY(-50vh);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  font-size: 10rem;
  text-transform: uppercase;
  text-align: center;
  animation: fade-in-top 5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  margin-top: -10vh;
  -webkit-text-stroke: 1px #fff;
  background: linear-gradient(to left, #0a1556 40%, #9649d1 60%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0a1556', endColorstr='#9649d1',GradientType=0 );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const Heading4 = styled.h4`
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
`;
// export const tal = styled.``;