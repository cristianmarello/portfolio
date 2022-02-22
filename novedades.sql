-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 22-02-2022 a las 23:19:16
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `portfolio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Berlanga reinterpretado por cinco premios nacionales de diseño con vistas a los Goya', 'Javier Mariscal, Daniel Nebot, Nacho Lavernia, Marisa Gallén y Pepe Gimeno recrean los carteles de ‘Plácido’, ‘Bienvenido Mr. Marshall’, ‘El verdugo’, ‘La escopeta nacional’ y ‘La vaquilla’', 'La influencia del cine de Luis García Berlanga en el imaginario colectivo español es indudable, sobre todo para las generaciones que han crecido viendo sus películas. Como la talentosa generación de los cinco premios nacionales de diseño, nacidos a lo largo de la década de los cincuenta en la Comunidad Valenciana, que ahora se han prestado a reinterpretar cinco carteles de otras tantas películas, las más icónicas, del cineasta fallecido en 2010. Javier Mariscal, Daniel Nebot, Nacho Lavernia, Marisa Gallén y Pepe Gimeno emprendieron sus primeros pasos en el oficio bajo el yugo de la dictadura franquista, que de manera incisiva y esperpéntica radiografió Berlanga', 'kskwgkzviuprwdy6xk0s');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
