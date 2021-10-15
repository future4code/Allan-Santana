import React from "react";
import { useHistory } from "react-router";
import Header from "../../SharedContent/Header";
import { ApplicationPageStyle, CheckBoxStyle } from "../../SharedContent/StyleConfiguration";

const ApplicationFormPage = () => {
  return (
    <ApplicationPageStyle>
      <Header />
      <form>
        <div>
          <div>
            <label>Nome:</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Profissão:</label>
            <input type="text"></input>
          </div>
          <div>
          <CheckBoxStyle>
            <label>Forma de Pagamento:</label>
            <div>
            <label>Cartão</label>
            <input type="radio" id="Cartão"/>
            <label for="dinheiro">Dinheiro</label>
            <input type="radio" id="Dinheiro"/>
            </div>
          </CheckBoxStyle>
          </div>
        </div>
        <div>
          <div>
            <label>Carta de Aplicação:</label>
            <input type="text"></input>
          </div>
        </div>
      </form>
    </ApplicationPageStyle>
  );
};

export default ApplicationFormPage;
