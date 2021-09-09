import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Imagemavatar from './IMG/avatar-beleza.jpg';
import Imagedodireito from './IMG/direito-civil.jpg';
import Imagemdalabenu from './IMG/labenu.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Imagemavatar}
          nome="Allan Gilber" 
          descricao="Olá! Me chamo Allan Gilber. Sou estudante de Direito e de programação."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
        imagem="https://as1.ftcdn.net/v2/jpg/02/36/10/52/500_F_236105214_BAZwfP797jng1TdjSuEaFWpiz4HyXvzZ.jpg"
        nome="Email:"
        descricao="allan.dev@gmail.com"
        />

        <CardPequeno 
        imagem="https://image.flaticon.com/icons/png/512/45/45944.png"
        nome="Endereço:"
        descricao="Rua Labenu"
        />

        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Imagedodireito}  
          nome="Advocacia Consultiva e Contenciosa" 
          descricao="Experiência em diversos escritório de advocacia, tendo como foco principal a atuação em Contratos de Direito Civil." 
        />
        
        <CardGrande 
          imagem={Imagemdalabenu}
          nome="Labenu" 
          descricao="Estudante do curso Fullstack Web Developer." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
