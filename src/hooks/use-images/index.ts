export { };
// import { useState } from 'react';
// import hamburguer from '../../assets/hamburguer.svg';
// import close from '../../assets/close.svg';

// import illumine from '../../assets/illumine.jpg';
// import orcamentoPessoal from '../../assets/orcamento_pessoal.png';
// import appCalculadora from '../../assets/app_calculadora.png';
// import chaleHotel from '../../assets/chale_hotel.jpeg';
// import cubosFlix from '../../assets/cubos_flix.jpeg';
// import finans from '../../assets/finans.jpeg';
// import gameMataMosquito from '../../assets/game_mata_mosquito.jpeg';
// import museuNacional from '../../assets/museu_nacional.jpeg';
// import spotify from '../../assets/spotify.jpeg';
// import dindin from '../../assets/dindin.jpg';
// import apiLoja from '../../assets/api_loja.jpg';
// import apiBanco from '../../assets/api_banco.jpg';
// import kontacts from '../../assets/kontacts.jpg';
// import apiUsuarios from '../../assets/api_usuarios.jpg';
// import gelarmaq from '../../assets/gelarmaq.png';

// import illumineMobile from '../../assets/Mobile/illumineMobile.png';
// import orcamentoPessoalMobile from '../../assets/Mobile/orcamento_pessoalMobile.png';
// import appCalculadoraMobile from '../../assets/Mobile/app_calculadoraMobile.png';
// import chaleHotelMobile from '../../assets/Mobile/chale_hotelMobile.png';
// import cubosFlixMobile from '../../assets/Mobile/cubos_flixMobile.jpg';
// import finansMobile from '../../assets/Mobile/finansMobile.png';
// import gameMataMosquitoMobile from '../../assets/Mobile/game_mata_mosquitoMobile.png';
// import museuNacionalMobile from '../../assets/Mobile/museu_nacionalMobile.png';
// import spotifyMobile from '../../assets/Mobile/spotifyMobile.png';
// import dindinMobile from '../../assets/Mobile/dindinMobile.jpg';
// import apiLojaMobile from '../../assets/Mobile/api_lojaMobile.png';
// import apiBancoMobile from '../../assets/Mobile/api_bancoMobile.png';
// import kontactsMobile from '../../assets/Mobile/kontactsMobile.png';
// import apiUsuariosMobile from '../../assets/Mobile/api_usuariosMobile.png';
// import gelarmaqMobile from '../../assets/Mobile/gelarmaqMobile.png';

// export function useImages() {
//   const [modal, setModal] = useState('hidden');
//   const [img, setImg] = useState(hamburguer);
//   const [current, setCurrent] = useState(0);
//   const [caseModal, setCaseModal] = useState('none');

//   function handleOpenClose() {
//     modal === '' ? setModal('hidden') : setModal('');
//     modal === '' ? setImg(hamburguer) : setImg(close);
//   }

//   const [width, setWidth] = useState(window.innerWidth);

//   const imgsDesktop = {
//     illumine: width < 768 ? illumineMobile : illumine,
//     orcamentoPessoal: width < 768 ? orcamentoPessoalMobile : orcamentoPessoal,
//     appCalculadora: width < 768 ? appCalculadoraMobile : appCalculadora,
//     chaleHotel: width < 768 ? chaleHotelMobile : chaleHotel,
//     cubosFlix: width < 768 ? cubosFlixMobile : cubosFlix,
//     finans: width < 768 ? finansMobile : finans,
//     gameMataMosquito: width < 768 ? gameMataMosquitoMobile : gameMataMosquito,
//     museuNacional: width < 768 ? museuNacionalMobile : museuNacional,
//     spotify: width < 768 ? spotifyMobile : spotify,
//     dindin: width < 768 ? dindinMobile : dindin,
//     apiLoja: width < 768 ? apiLojaMobile : apiLoja,
//     apiBanco: width < 768 ? apiBancoMobile : apiBanco,
//     kontacts: width < 768 ? kontactsMobile : kontacts,
//     apiUsuarios: width < 768 ? apiUsuariosMobile : apiUsuarios,
//     gelarmaq: width < 768 ? gelarmaqMobile : gelarmaq,
//   };

//   window.addEventListener('resize', function () {
//     setWidth(window.innerWidth);
//   });

//   const SliderData = [
//     {
//       image: imgsDesktop.gelarmaq,
//       title: 'GelarmaqBH',
//       stack: 'Html | Css | JavaScript | React',
//       text: 'Site responsivo construido em react para cliente no segmento de assistência técnica de geladeiras e máquinas.',
//       link: 'https://www.gelarmaqbh.online/',
//       alt: 'Site gelarmaq',
//     },
//     {
//       image: imgsDesktop.apiUsuarios,
//       title: 'Api Usuarios',
//       stack:
//         'JavaScript | NodeJS | Express | JWT | BCRYPT | PostgreSQL | Knex | Yup',
//       text: 'REST API onde é possível obter e fazer alterações em um banco de dados relacional utilizando token, encriptação de senha, e auxílio do knex e yup para um clean code ainda melhor.',
//       link: 'https://api-usuarios-beta.herokuapp.com/docs/',
//       repo: 'https://github.com/lucasfpds/api-usuarios',
//       alt: 'Site Api Usuarios',
//     },
//     {
//       image: imgsDesktop.kontacts,
//       title: 'KONTACTS',
//       stack: 'Html | Css | JavaScript | React',
//       text: 'Single page em React utilizando hooks personalizados e próprios do React, Bibliotecas, requisições assíncronas com uso de token, API de contexto, roteamento de páginas, componentes estilizados e responsividade.',
//       link: 'https://kontacts-red.vercel.app/',
//       repo: 'https://github.com/lucasfpds/kontacts',
//       alt: 'Site app kontacts',
//     },
//     {
//       image: imgsDesktop.apiLoja,
//       title: 'API Mercado',
//       stack: 'JavaScript | NodeJS | Express | JWT | BCRYPT | PostgreSQL',
//       text: 'O projeto visa a construção de uma REST API onde seria possível cadastrar usuários para uma loja, e que esses usuários pudessem fazer login para cadastrar, visualizar, editar e excluir produtos em um banco de dados relacional.',
//       link: 'https://apimarketcubos.herokuapp.com/docs/',
//       repo: 'https://github.com/lucasfpds/api-mercado',
//       alt: 'API Mercado',
//     },
//     // {
//     //   image: imgsDesktop.illumine,
//     //   title: "Illumine",
//     //   stack: "Html | Css | JavaScript | Bootstrap",
//     //   text: "Landing page para um site de produtos de cuidados com a pele. Utilizado Bootstrap, SASS e responsividade.",
//     //   link: "https://illumine.vercel.app/",
//     //   repo: "https://github.com/lucasfpds/illumine ",
//     //   alt: "Site Illumine",
//     // },
//     {
//       image: imgsDesktop.cubosFlix,
//       title: 'Cubos Flix',
//       stack: 'Html | Css | JavaScript',
//       text: 'Aplicação para um serviço de streaming. Possui ferramentas para ver os lançamentos mais recentes, pesquisa de filmes, sinopses e trailers. O conteúdo deste projeto abordou a propagação de eventos e alteração de propriedades com eventos através do DOM, formulários, requisições em consumo de API de forma assíncrona e, o HTML e CSS dinâmico.',
//       link: 'https://cubos-flix.vercel.app',
//       repo: 'https://github.com/lucasfpds/cubos-flix',
//       alt: 'Site Cubos Flix',
//     },
//     {
//       image: imgsDesktop.apiBanco,
//       title: 'API Banco',
//       stack: 'JavaScript | NodeJS | Express',
//       text: 'API REST utilizando configuração de rotas, controladores, framework e módulos para o NodeJS. Tudo com uso de programação assíncrona, integração de api externa e codificação JSON e Swagger.',
//       link: 'https://apicubosbank.herokuapp.com/docs/',
//       repo: 'https://github.com/lucasfpds/api-bank',
//       alt: 'API Banco',
//     },
//     {
//       image: imgsDesktop.spotify,
//       title: 'Clone Spotify',
//       stack: 'Html | Css | JavaScript | Bootstrap',
//       text: 'Utilizando Bootstrap fiz um espelho da antiga página do Spotify com responsividade, com auxílio do boostrap fiz o uso além da responsividade o  carrossel e colapso de botões.',
//       link: 'https://clone-spotify-alpha.vercel.app/',
//       repo: 'https://github.com/lucasfpds/clone-spotify',
//       alt: 'Site Clone Spotify',
//     },
//     {
//       image: imgsDesktop.finans,
//       title: 'Finans',
//       stack: 'Html | Css | JavaScript | Bootstrap',
//       text: 'Neste Projeto a construção visava fazer uma single page aplicando responsividade utilizando media queries e mais algumas facilidades do CSS e também do Bootstrap.',
//       link: 'https://finans-jade.vercel.app/',
//       repo: 'https://github.com/lucasfpds/finans',
//       alt: 'Site Finans',
//     },
//     {
//       image: imgsDesktop.appCalculadora,
//       title: 'App Calculadora',
//       stack: 'Html | Css | JavaScript | Bootstrap',
//       text: 'Esta foi uma simples aplicação de uma calculadora usando técnicas simples de JS e DOM no front combinado ao uso da lógica de programação.',
//       link: 'https://app-calculadora.vercel.app',
//       repo: 'https://github.com/lucasfpds/app-calculadora',
//       alt: 'Site App Calculadora',
//     },
//     {
//       image: imgsDesktop.gameMataMosquito,
//       title: 'Game Mata Mosquito',
//       stack: 'Html | Css | JavaScript | Bootstrap',
//       text: 'Aplicação web de um mini jogo usando o JS, HTML, DOM e o CSS com um código bem limpo e muito funcional com responsividade.',
//       link: 'https://game-mata-mosquito-jade.vercel.app/',
//       repo: 'https://github.com/lucasfpds/Game_Mata_Mosquito',
//       alt: 'Site Game Mata Mosquito',
//     },
//     {
//       image: imgsDesktop.orcamentoPessoal,
//       title: 'Orçamento Pessoal',
//       stack: 'Html | Css | JavaScript | Bootstrap',
//       text: 'Aplicação web com a finalidade de ser um controlador de despesas pessoais podendo criar e deletar despesas cadastradas. Foi utilizado JS, ES6, POO, HTML e CSS.',
//       link: 'https://app-orcamento-pessoal-three.vercel.app/',
//       repo: 'https://github.com/lucasfpds/app-orcamento-pessoal',
//       alt: 'Site Orçamento Pessoal',
//     },
//     {
//       image: imgsDesktop.museuNacional,
//       title: 'Museu Nacional',
//       stack: 'Html | Css | JavaScript | Bootstrap',
//       text: 'Single page de um layout com estilização de tabelas e formulários, marcação de página, e layout líquido com CSS e HTML.',
//       link: 'https://museu-nacional-six.vercel.app/',
//       repo: 'https://github.com/lucasfpds/museu_nacional',
//       alt: 'Site Museu Nacional',
//     },
//     {
//       image: imgsDesktop.chaleHotel,
//       title: 'Chalé Hotel',
//       stack: 'Html | Css | JavaScript | Bootstrap',
//       text: 'Single page com um layout fluido. Usei estilização de tabelas e formulários, marcação de página, e o layout líquido com CSS e HTML.',
//       link: 'https://chale-hotel.vercel.app/',
//       repo: 'https://github.com/lucasfpds/chale_hotel',
//       alt: 'Site Chalé Hotel',
//     },
//   ];

//   return {
//     modal,
//     setModal,
//     img,
//     setImg,
//     width,
//     SliderData,
//     handleOpenClose,
//     current,
//     setCurrent,
//     caseModal,
//     setCaseModal,
//   };
// }
