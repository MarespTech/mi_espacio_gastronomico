-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2021 at 11:44 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recetario`
--

-- --------------------------------------------------------

--
-- Table structure for table `ingredientes`
--

CREATE TABLE `ingredientes` (
  `id_ingrediente` int(11) NOT NULL,
  `ingrediente` text DEFAULT NULL,
  `receta_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ingredientes`
--

INSERT INTO `ingredientes` (`id_ingrediente`, `ingrediente`, `receta_id`) VALUES
(7, '8 tomates verdes', 16),
(8, '1/4 cebollas', 16),
(9, '1 diente de ajo', 16),
(10, '4 chiles serranos', 16),
(11, 'suficiente de aceite vegetal, para freír', 16),
(12, ' 1 pechuga de pollo, cocido y deshebrado', 16),
(13, 'suficiente de crema, para acompañar', 16),
(14, 'suficiente de queso fresco, desmoronado, para acompañar', 16),
(15, 'suficiente de cebolla, fileteada', 16),
(16, '2 cucharadas de aceite vegetal', 16),
(17, '1 manojo de cilantro fresco', 16),
(18, 'suficiente de tortilla, cortadas en forma triangular, del día anterior', 16);

-- --------------------------------------------------------

--
-- Table structure for table `instrucciones`
--

CREATE TABLE `instrucciones` (
  `id_instruccion` int(11) NOT NULL,
  `instruccion` text DEFAULT NULL,
  `receta_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `instrucciones`
--

INSERT INTO `instrucciones` (`id_instruccion`, `instruccion`, `receta_id`) VALUES
(6, 'En una olla con agua hirviendo, cuece los tomates verdes, la cebolla y los chiles por 5 minutos.', 16),
(7, 'Para los totopos: primero calienta un sartén profundo y luego, calienta suficiente aceite para freír los totopos por 3 minutos.', 16),
(8, 'Para el montaje: Coloca una base con los totopos, el pollo deshebrado y agrega la salsa caliente encima. Acompaña con crema, queso y cebolla fileteada. Disfruta.', 16),
(9, 'Muele los ingredientes que cociste junto con el ajo y el cilantro, hasta que obtengas una textura tersa.', 16);

-- --------------------------------------------------------

--
-- Table structure for table `recetas`
--

CREATE TABLE `recetas` (
  `id` int(11) NOT NULL,
  `name_recipe` varchar(255) DEFAULT NULL,
  `difficult_recipe` varchar(50) DEFAULT NULL,
  `sender_name` varchar(100) DEFAULT NULL,
  `sender_last_name` varchar(100) DEFAULT NULL,
  `sender_email` varchar(150) DEFAULT NULL,
  `description_recipe` text DEFAULT NULL,
  `principal_picture` text DEFAULT NULL,
  `url_recipe` text DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recetas`
--

INSERT INTO `recetas` (`id`, `name_recipe`, `difficult_recipe`, `sender_name`, `sender_last_name`, `sender_email`, `description_recipe`, `principal_picture`, `url_recipe`, `date`) VALUES
(15, 'Filete Mignon', 'Intermediario', 'Martin Mateo', 'Gómez', 'martin.m.espericueta@gmail.com', 'Descripcion', 'uploads/1609200260358_unnamed.gif', 'Filete-Mignon', '2020-12-29 00:04:20'),
(16, 'Chilaquiles Verdes', 'Facil', 'Martin', 'Espericueta', 'martin@gmail.com', 'Chilaquiles Mexicanos caseros', 'uploads/1613278386262_descarga.jpg', 'Chilaquiles-Verdes', '2021-02-14 04:53:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`id_ingrediente`);

--
-- Indexes for table `instrucciones`
--
ALTER TABLE `instrucciones`
  ADD PRIMARY KEY (`id_instruccion`);

--
-- Indexes for table `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ingredientes`
--
ALTER TABLE `ingredientes`
  MODIFY `id_ingrediente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `instrucciones`
--
ALTER TABLE `instrucciones`
  MODIFY `id_instruccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `recetas`
--
ALTER TABLE `recetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
