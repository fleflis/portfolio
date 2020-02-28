import React from 'react';
import Typing from 'react-typing-animation';

import { TerminalWindow, Menu, Fechar, Minimizar, Maximizar, Terminal, Command } from './styles';

export default function Index() {
  return (
    <TerminalWindow>
      <Menu>
        <Fechar />
        <Minimizar />
        <Maximizar />
      </Menu>
      <Terminal>
        <Command>
          <Command.Delay ms={350} />
          <span className="command">pm2</span> <span className="complement">start</span> fleflis-portfolio
          <br/>
          <br/>
          <br/>
          <Command.Delay ms={1500} />
          Bem vindo ao portfolio do <b>Christian Sanches</b>.
        </Command>
      </Terminal>
    </TerminalWindow>
  );
}
