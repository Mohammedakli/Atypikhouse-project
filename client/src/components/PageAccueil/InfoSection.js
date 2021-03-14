import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) /2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColunmLeft = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse}) => (reverse ? '2' : '1')};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse}) => (reverse ? '1' : '2')};
    display:flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({ reverse}) => (reverse ? '2' : '1')};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }
    }
`;

const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
    return (
        <Section>
            <Container>
                <ColunmLeft>
                    <h1>Découvrez AtypikHouse !</h1>
                    <p>
                        La Société « AtypikHouse » est une nouvelle SARL au 
                        capital de 10 000€ composée de 3 associés partageant 
                        les mêmes passions pour les voyages, l‘habitat 
                        alternatif et la vie en harmonie avec la nature.
                    </p>
                    <p>
                        En réunissant leurs moyens techniques et financiers,
                         leurs compétences et leur amitié, ilsont créé leur 
                         société sur: la location d’habitations insolites, 
                         comme les cabanes dans les arbres, les yourtes ou 
                         les cabanes flottantes...
                     </p>  
                     <p>  
                         La société « AtypikHouse 
                         » est basée dans la localité de Pierrefonds, dans 
                         le département de l’Oise et cherche à mettre en 
                         place un service de location d’habitat alternatif 
                         en France et en Europe.
                    </p>
                    
                    <Button to="/home" primary='true'>{buttonLabel}</Button>
                </ColunmLeft>
                <ColumnRight reverse={reverse}>
                     <img src='./img/house-7.jpg' alt='home' />
                </ColumnRight>
            </Container>
            <Container>
                <ColunmLeft>
                    <h1>Envie de nature, de liberté...</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to="/home" primary='true'>{buttonLabel}</Button>
                </ColunmLeft>
                <ColumnRight reverse={reverse}>
                <img src='./img/house-6.jpg' alt='home' />
                </ColumnRight>  
            </Container>
            <Container>
                <ColunmLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to="/home" primary='true'>{buttonLabel}</Button>
                </ColunmLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='home' />
                </ColumnRight>  
            </Container>
        </Section>
    )
}

export default InfoSection
