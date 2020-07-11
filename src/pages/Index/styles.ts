import styled from 'styled-components';
import Typing from 'react-typing-animation';

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
`
