
import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'


function TeacherItem(){
  return(
    <article className="teacher-item">

      <header>
        <img src="https://avatars0.githubusercontent.com/u/61117949?s=460&u=888fe00af41466dfa53396ef9a32d052a56b4927&v=4" alt="Priscila Pinheiro"/>
        <div>
          <strong>Priscila Pinheiro</strong>
          <span>Química</span>
          </div>
      </header>

      <p>
        Entusiasta da melhores tecnologias de Química.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <footer>
        <p>
          Preço/hora 
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>

    </article>

  );
}

export default TeacherItem;