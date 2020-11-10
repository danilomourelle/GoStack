import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import githubLogo from '../../assets/github-icon.svg';
import { Form, Repositories, Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={githubLogo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/59848875?s=460&u=47f31197624ea195a858abc5eed72f6ddc8ba11f&v=4"
            alt="Danilo Mourelle"
          />
          <div>
            <strong> Titulo do Repo </strong>
            <p>Descrição do Repositório</p>
          </div>
          <FiChevronRight size={25} />
        </a>
        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/59848875?s=460&u=47f31197624ea195a858abc5eed72f6ddc8ba11f&v=4"
            alt="Danilo Mourelle"
          />
          <div>
            <strong> Titulo do Repo </strong>
            <p>Descrição do Repositório</p>
          </div>
          <FiChevronRight size={25} />
        </a>
        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/59848875?s=460&u=47f31197624ea195a858abc5eed72f6ddc8ba11f&v=4"
            alt="Danilo Mourelle"
          />
          <div>
            <strong> Titulo do Repo </strong>
            <p>Descrição do Repositório</p>
          </div>
          <FiChevronRight size={25} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
