-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-02-2021 a las 18:00:24
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recetario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotos`
--

CREATE TABLE `fotos` (
  `id` int(11) NOT NULL,
  `id_receta` int(11) NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes`
--

CREATE TABLE `ingredientes` (
  `id_ingrediente` int(11) NOT NULL,
  `ingrediente` text NOT NULL,
  `receta_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ingredientes`
--

INSERT INTO `ingredientes` (`id_ingrediente`, `ingrediente`, `receta_id`) VALUES
(30, '2 tazas de harina de trigo', 25),
(31, '2 cucharadas de azucar', 25),
(32, '4 cucharadas de mantequilla', 25),
(33, 'Fruta fresca (Opcional)', 25),
(34, 'Dulce de leche (Opcional)', 25),
(35, '1 cucharadita de vainilla', 25),
(36, '3 tazas de leche', 25),
(37, '6 huevos', 25),
(38, 'Nutella (Opcional)', 25),
(39, 'Helado (Opcional)', 25),
(40, '1 taza de harina', 26),
(41, '1 cucharada de azúcar', 26),
(42, '2 cucharaditas de polvo para hornear', 26),
(43, '1/4 cucharaditas de sal', 26),
(44, '2 cucharadas de mantequilla, derretida', 26),
(45, '1 huevo', 26),
(46, '1 taza de leche de vaca, Lala', 26);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instrucciones`
--

CREATE TABLE `instrucciones` (
  `id_instruccion` int(11) NOT NULL,
  `instruccion` text NOT NULL,
  `receta_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `instrucciones`
--

INSERT INTO `instrucciones` (`id_instruccion`, `instruccion`, `receta_id`) VALUES
(14, 'Ponga la harina, los huevos, el azúcar, la vainilla, y 1 taza de leche en un tazón grande.', 25),
(15, 'Use una cuchara sopera grande (o media taza de medir) para verter la masa en la sartén con una mano, mientras sostiene la sartén con la otra mano, luego rápidamente vaya inclinando la sartén los lados para que la masa de la crepa quede distribuida en toda la superficie plana de la sartén.', 25),
(16, 'Se cocina el primer lado de la crepa durante aproximadamente un minuto o hasta que los bordes de la crepa se empiezan a dorar. Use una espátula plana para verificar y voltear la crepa. Deslice la espátula plana suavemente debajo de la crepa, voltéela (use su mano con cuidado si es necesario para ayudar a darle vuelta) y cocínela en el otro lado durante unos 15 a 25 segundos. Retire la crepa de la sartén y póngala en un plato. Repita el proceso hasta que haya terminado con toda la masa.', 25),
(17, 'Caliente la sartén a fuego medio. Cada estufa y sartén son diferentes, así que cada quien tiene que encontrar el nivel ideal de la temperatura. Generalmente, para una estufa de gas es entre el 50% y el 75% del máximo.', 25),
(18, 'En la sartén que va a utilizar para los crepes o crepas, derrita la mantequilla a fuego lento. A continuación, vierta la mantequilla derretida en un tazón pequeño y deje que se enfríe un poco. Luego agrega esta mantequilla a la masa de las crepas y mezcle bien. Su sartén quedará engrasada y lista para cocinar la primera crepa.', 25),
(19, 'Añada las 2 tazas restantes de leche y mezcle hasta que la masa quede sin grumos. Si esta preparando la masa de las crepas de antemano en este momento se puede refrigerar hasta el momento de cocinar las crepas. Se agrega la mantequilla derretida y se vuelve a mezclar (con una cuchara) justo al empezar a cocinarlas.', 25),
(20, 'Las crepas se pueden servir inmediatamente con su elección de rellenos.', 25),
(21, 'Utilice un batidor de mano, una batidora eléctrica, una licuadora normal o de inmersión para combinar y mezclar todos los ingredientes hasta que tenga una masa suave.', 25),
(22, 'En un tazón combinar la harina, azúcar, polvo de hornear y sal.', 26),
(23, 'Poner la mezcla de leche al tazón de la harina y revolver con un batidor de globo. La pasta deberá quedar con unos grumos pequeños.', 26),
(24, 'En otro tazón mezclar la mantequilla, leche y huevo.', 26),
(25, 'Calentar un sartén grande a que esté bien caliente y luego hacer los pancakes poniendo la pasta con una cuchara grande sobre el sartén a que queden del tamaño deseado.', 26),
(26, 'Voltearlos con una espátula cuando empiecen a salir burbujitas, para cocinar del otro lado. Servir acompañados de mantequilla y miel de maple.', 26);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas`
--

CREATE TABLE `recetas` (
  `id` int(11) NOT NULL,
  `name_recipe` varchar(255) NOT NULL,
  `difficult_recipe` varchar(50) NOT NULL,
  `sender_name` varchar(100) NOT NULL,
  `sender_last_name` varchar(100) NOT NULL,
  `sender_email` varchar(150) NOT NULL,
  `description_recipe` text NOT NULL,
  `principal_picture` text NOT NULL DEFAULT 'uploads/no-image.jpeg',
  `url_recipe` text NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `recetas`
--

INSERT INTO `recetas` (`id`, `name_recipe`, `difficult_recipe`, `sender_name`, `sender_last_name`, `sender_email`, `description_recipe`, `principal_picture`, `url_recipe`, `date`) VALUES
(25, 'Crepas Dulces', 'Facil', 'Martin Mateo', 'Espericueta Gomez', 'martin.m.espericueta@gmail.com', 'Crepas dulces faciles de hacer', 'uploads/1612543593108_Receta-casera-de-crepas-dulces.jpg', 'Crepas-Dulces', '2021-02-05 16:46:33'),
(26, 'Pancakes', 'Facil', 'Martin Mateo', 'Gómez', 'martin.m.espericueta@gmail.com', 'Receta sencilla para hacer unos tacos de pancakes para 2 personas', 'uploads/1612544352098_download.jpg', 'Pancakes', '2021-02-05 16:59:12');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`id_ingrediente`);

--
-- Indices de la tabla `instrucciones`
--
ALTER TABLE `instrucciones`
  ADD PRIMARY KEY (`id_instruccion`);

--
-- Indices de la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `fotos`
--
ALTER TABLE `fotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  MODIFY `id_ingrediente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `instrucciones`
--
ALTER TABLE `instrucciones`
  MODIFY `id_instruccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `recetas`
--
ALTER TABLE `recetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
