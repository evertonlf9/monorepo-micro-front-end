import React from 'react';

import Image404 from './image404.svg';
// import './styles.scss';

const NotPage: React.FC = () => {
  return (
    <div className="container">
      <img src={Image404} alt="404" />
      <h2>Pagina não encontrada</h2>
      <p>Desculpe, mas não encontramos o que você procura!</p>
      <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  );
};

export default NotPage;
