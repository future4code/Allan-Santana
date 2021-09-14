import React from 'react';
import styled from 'styled-components';


const OrganizacaoDosElementos = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px;
width: 100%;
text-align: center;

label{
  margin-bottom: 12px;
}

select{
  margin-bottom: 12px;
  display: flex;
  text-align: center;
  padding: 2px;
}
`
const FormDisposition = styled.div`
display:flex;
flex-direction: column;
`

class Endpage extends React.Component {

  state = {

  }


  render() {

    return <OrganizacaoDosElementos>

      <h3>O FORMULÁRIO ACABOU</h3>

      <FormDisposition>

        <p>O formulário foi preenchido e registrado! Obrigado.</p>
        
      </FormDisposition>
    </OrganizacaoDosElementos>
  }
}

export default Endpage;