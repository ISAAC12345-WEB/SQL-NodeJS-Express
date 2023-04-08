-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-04-2023 a las 23:43:46
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `producto_moda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zapatillas`
--

CREATE TABLE `zapatillas` (
  `id_zapatilla` int(11) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `colores` varchar(50) NOT NULL,
  `talla` int(11) NOT NULL,
  `genero` varchar(50) NOT NULL,
  `pais` varchar(50) NOT NULL,
  `precio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `zapatillas`
--

INSERT INTO `zapatillas` (`id_zapatilla`, `modelo`, `colores`, `talla`, `genero`, `pais`, `precio`) VALUES
(1, 'Adidas', 'Rojo', 39, 'masculino', 'Argentina', 153.97),
(2, 'Vans', 'Negro', 42, 'femenino', 'Uruguay', 350.9),
(3, 'Adidas', 'Negro', 45, 'masculino', 'Peru', 230.5),
(7, 'Reebook', 'Azul', 42, 'femenino', 'España', 270.5),
(21, 'converse', 'blanco', 45, 'masculino', 'EE.UU', 450),
(22, 'Puma', 'Negro', 43, 'Femenino', 'Argentina', 500.99);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `zapatillas`
--
ALTER TABLE `zapatillas`
  ADD PRIMARY KEY (`id_zapatilla`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `zapatillas`
--
ALTER TABLE `zapatillas`
  MODIFY `id_zapatilla` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
