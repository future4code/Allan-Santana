import React from 'react';
import styled from 'styled-components';

const SmallcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 4px 4px;
    height: 40px;
    margin: auto auto 10px auto;

    div {
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    align-items: center;
    justify-content: center;
}

img{
    width: 28px;
    margin-right: 4px;
    border-radius: 50%;
    height: 28px;
}

h4 {
    margin-right: 4px;
}
`


function CardPequeno(props) {
    return (
        <SmallcardContainer>
            <div>
                <img src={ props.imagem } />
                <div>
                    <h4>{ props.nome }</h4>
                    <p>{ props.descricao }</p>
                </div>
            </div>
        </SmallcardContainer>
    )
}

export default CardPequeno;