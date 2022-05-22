import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsProducts() {
  return (
    <div className='cards'>
      <h1>¡Productos ofertados!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/circuito.png'
              text='Es la combinación e interconexión de destinos separados geográficamente que al agruparse constituyen una oferta única de servicios turísticos. Son excursiones organizadas a diversas ciudades con salidas regulares que facilitan la preparación de itinerarios para los viajeros. Un circuito turístico comienza y termina en un mismo punto y no pasa dos veces por el mismo sitio.'
              label='Circuitos turísticos'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/excursiones.jpg'
              text='Son viajes organizados y preestablecidos que incluyen un recorrido por una o varias ciudades, así como diversos servicios turísticos. Son comercializados a un precio fijo y normalmente incluyen el traslado, hospedaje, comidas y visitas a atractivos turísticos.'
              label='Excursiones'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/wedding.jpg'
              text='En español: “planificador de bodas”. Al igual que el servicio de excursiones, son viajes organizados con todo lo necesario para planear una boda: desde el traslado, el hospedaje, la noche de bodas, el armado del evento, la recepción de invitados, el servicio de comida, etc.'
              label='Wedding planner'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/paquetes.jpg'
              text='Conjunto de dos o más servicios turísticos demandados por el cliente. Puede ser traslado + hospedaje, comidas + atracciones turísticas, visitas de ciudad + hospedaje, etc. Al adquirirlos de manera conjunta, el precio puede ser más económico.'
              label='Paquetes turísticos'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cruceros.jpg'
              text='En sí, es un tipo de paquete turístico. Son viajes sobre mar, normalmente dentro de una zona territorial (varios países) a bordo de un crucero con todos los servicios necesarios para permanecer dentro de él (hospedaje, alimentos y atracciones). Durante el recorrido se permanece por lapsos de tiempo en puertos dentro del destino turístico visitado para que el viajero tenga la posibilidad de bajarse y conocerlo  si es de su agrado.'
              label='Cruceros'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/congresos.jpg'
              text='Eventos en los cuales las agencias de viajes pueden intervenir desde la organización y coordinación de los servicios turísticos, tales como transportación, hospedaje, alimentación y renta de salones hasta le venta y ofrecimiento de recorridos turísticos dentro o cerca de la localidad donde se llevaran a cabo dichos eventos.'
              label='Congresos, seminarios y convenciones'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsProducts;
