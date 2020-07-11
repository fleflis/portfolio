import React from 'react';

import {
  TerminalWindow,
  Menu,
  Fechar,
  Minimizar,
  Maximizar,
  Terminal,
  Command,
  ContainerSelect,
  ContainerLinks,
  ExternalLink
} from './styles';

export default function Index() {
  return (
    <TerminalWindow>
      <Menu>
        <Fechar />
        <Minimizar />
        <Maximizar />
      </Menu>
      <Terminal>
        <Command cursorClassName="cursor-white">
          <Command.Speed ms={15} />
          <Command.Delay ms={350} />
          <span className="command">pm2</span> <span className="complement">start</span> fleflis-portfolio
          <br />
          {/* animacao carregando terminal */}
          <br />
          <br />
          <Command.Delay ms={1500} />
          <Command.Speed ms={3} />
          <ContainerSelect>
            <p>Bem vindo ao site de portfolio do <b>Christian Sanches (Fleflis)</b>.</p>
            <p>O que gostaria de acessar?</p>
            <ContainerLinks>
              <ExternalLink href="https://linkedin.com/in/chrisgsanchesl"><span>&gt; </span>LinkedIn</ExternalLink>
              <ExternalLink href="https://github.com/fleflis"><span>&gt; </span>GitHub</ExternalLink>
              {/* <ExternalLink href="https://linkedin.com/in/chrisg.sanchesl"><span>&gt; </span>LinkedIn</ExternalLink>
              <ExternalLink href="https://linkedin.com/in/chrisg.sanchesl"><span>&gt; </span>LinkedIn</ExternalLink> */}
            </ContainerLinks>
          </ContainerSelect>
        </Command>
      </Terminal>
    </TerminalWindow>
  );
}
