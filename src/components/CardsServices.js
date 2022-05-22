import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsServices() {
  return (
    <div className='cards'>
      <h1>¡Servicios ofertados!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/alojamiento.jpg'
              text='Se refiere al lugar donde una persona se hospeda durante sus viajes y que sirve de refugio, hogar, techo y/o espacio de descanso. Dentro de este servicio encontramos: hoteles, moteles, posadas, albergues, campamentos, condominios, tiempos compartidos y casas particulares.'
              label='Alojamiento'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/transportacion.png'
              text='Si se viaja a lugares cercanos al lugar de origen, muy probablemente tomar un autobús será suficiente, si se viaja por mar, definitivamente un barco o crucero y si se busca llegar a lugares por ejemplo, entre dos continentes, el medio de transporte indicado sería el avión. Todos estos son tipos de transportación que una agencia de viajes está capacitada para conseguir, englobadas en: marítima, aérea, ferroviaria, terrestre.'
              label='Transportación'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/alimentos.jpg'
              text='Los alimentos pueden estar incluidos en el hospedaje, de otra manera, las agencias de viajes pueden tener contacto con restaurantes y será su labor recomendar al viajero el lugar ideal. Se incluyen dentro de estos: desayunos, comidas, cenas (en diferentes planes) almuerzos, o recesos para tomar café.'
              label='Alimentos'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/traslados.png'
              text='Puesto que el viajero no está del todo familiarizado con el destino visitado, es imprescindible contar con información referente a los traslados dentro de él. Están incluidos los traslados en la ciudad, entre el hotel y el aeropuerto,  desembarcaderos, puertos y estaciones de tren.'
              label='Traslados'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/renta.jpg'
              text='También se incluyen camionetas o camiones equipados con camas y aditamentos en general para acampar y motocicletas para actividades de ocio.
              Cuando se organizan viajes grupales, las agencias de viajes tienen la facilidad de conseguir autobuses con espacio completo. Los hay de una gran cantidad de modelos, precios y características.'
              label='Renta de vehículos'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/seguroviaje.jpg'
              text='Es una especie de contrato en la que se obliga a la agencia de viajes a cubrir los gastos en caso de un incidente: desde accidentes físicos, pérdida de equipaje, problemas de salud y pérdida del vuelo. Son una manera de brindar seguridad al cliente.'
              label='Seguros de viaje'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/visa.jpg'
              text='Son servicios que se tramitan para entrar a otros países. Aunque este tipo de servicios son tramitados directamente por las secretarias de relaciones exteriores o consulados internacionales, las agencias de viajes pueden ser un medio de información y enlace para obtenerlas de manera más inmediata.'
              label='Visas y permisos'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/espectaculos.jpeg'
              text='Servicios que pueden incluirse en excursiones, circuitos y paquetes; o bien, vender las entradas, en la mayoría de los casos al turismo receptivo.'
              label='Espectáculos, eventos culturales, deportivos ferias y exposiciones'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/estudios.jpg'
              text='Son servicios de carácter social, educativo y cultural, enfocados principalmente a jóvenes  para realizar estudios de idiomas o especialidad en los países con lengua natal que se pretende aprender.'
              label='Estudios en el extranjero o intercambios juveniles'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsServices;
