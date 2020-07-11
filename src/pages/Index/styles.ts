import styled from 'styled-components';
import Typing from 'react-typing-animation';
import { Link } from 'react-router-dom';

export const TerminalWindow = styled.div`
  width: 70rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  background: #fff;
  border-radius: 4px;

  height: 70rem;
  max-height: 90%;

  box-shadow: 4px 5px 5px 0px rgba(0,0,0,0.5);
`;

export const Menu = styled.div`
  background: #bbb;
  display: flex;
  flex-direction: row;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 100%;
  padding: .3rem .5rem;
`;

const Button = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  border: 1px solid #000;
  margin-right: .4rem;
`

export const Fechar = styled(Button)`
  background-color: #ff3b47;
  border-color: #9d252b;
`;

export const Minimizar = styled(Button)`
  background-color: #ffc100;
  border-color: #9d802c;
`;

export const Maximizar = styled(Button)`
  background-color: #00d742;
  border-color: #049931;
`;

export const Terminal = styled.div`
  padding: 1rem;
  font-family: 'Fira Code', monospace;
  background: #151515;
  color: white;
  height: 100%;
  font-size: .9rem;
`;

export const Command = styled(Typing)`
  &::before {
    content: 'fleflis@endless-point01 $ ';
    color: #dedede;
  }

  span {
    font-weight: bold;
    &.command {
      color: #007700
    }
    &.complement {
      color: #cece00;
    }
  }
`;

export const ContainerSelect = styled.div`
  width: 100%;
  height: 30rem;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InternalLink = styled(Link)`
  font-family: 'Fira Code', monospace;
  font-weight: bold;
  text-decoration: none;
  color: white;
  display: flex;

  span {
    color: transparent;
  }

  &:focus, &:hover {
    text-decoration: none;
    color: white;

    span {
      margin-left: .2rem;
      color: white;
    }
  }
`;

export const ExternalLink = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer"
}))`
  font-family: 'Fira Code', monospace;
  font-weight: bold;
  text-decoration: none;
  color: white;
  display: flex;

  span {
    color: transparent;
    margin-right: .4rem;
  }

  &:focus, &:hover {
    text-decoration: none;
    color: white;

    span {
      color: white;
    }
  }
`;

export const ContainerLinks = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;
`;
