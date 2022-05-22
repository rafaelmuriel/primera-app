import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsNews() {
  return (
    <div className='cards'>
      <h1>¡Noticias, actualidad, ideas y soluciones para Agencias de Viajes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/google-immersive-view.jpeg'
              text='¿Cómo puede ayudarte Google Maps a vender destinos turísticos?'
              label='Conecta Turismo'
              path='/news'
            />
            <CardItem
              src='images/importancia-agencias-receptivas.jpg'
              text='La importancia de las agencias receptivas o DMCs'
              label='Tecnología Turística'
              path='/news'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tendencias-viajes-2022.jpg'
              text='Nuevas tendencias de viajes en 2022'
              label='Agencias de Viajes Online'
              path='/news'
            />
            <CardItem
              src='images/metaverso-sector-turistico.jpg'
              text='El Metaverso en el sector turístico'
              label='Tecnología Turística'
              path='/news'
            />
            <CardItem
              src='images/optimismo-2022.jpg'
              text='Optimismo sobre la recuperación del sector turístico para 2022'
              label='Touroperadores'
              path='/news'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/agencias-de-viajes-online.png'
              text='¿Sabes todo lo que necesitas para que la web de tu agencia de viajes aparezca en Google?'
              label='Formación para agencias de viajes'
              path='/news'
            />
            <CardItem
              src='images/reserva-de-viajes.jpg'
              text='La contratación a través de agencias como una de las tendencias en la reserva de viajes en 2022'
              label='Agencias de Viajes Online'
              path='/news'
            />
            <CardItem
              src='images/software-agencias-viajes.jpg'
              text='Optimismo sobre la recuperación deSoftware para Agencias de Viajes: importancia y fortalezas'
              label='Tecnología Turística'
              path='/news'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsNews;
