-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-florrodriguez.alwaysdata.net
-- Generation Time: Jun 29, 2024 at 07:38 PM
-- Server version: 10.6.17-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `florrodriguez_g18`
--

-- --------------------------------------------------------

--
-- Table structure for table `pasteleria`
--

CREATE TABLE `pasteleria` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `dificultad` varchar(50) NOT NULL,
  ` ingredientes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `pasteleria`
--

INSERT INTO `pasteleria` (`id`, `nombre`, `dificultad`, ` ingredientes`) VALUES
(1, 'budin de pan', 'baja', 6),
(2, 'chipa', 'media', 6),
(3, 'pancitos de leche', 'media', 8),
(4, 'Pan integral', 'baja', 10),
(5, 'pancitos rellenos de jyq', 'baja', 8),
(6, 'Paneton', 'alta', 12);

-- --------------------------------------------------------

--
-- Table structure for table `platos principales`
--

CREATE TABLE `platos principales` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `dificultad` varchar(30) NOT NULL,
  `ingredientes` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `platos principales`
--

INSERT INTO `platos principales` (`id`, `nombre`, `dificultad`, `ingredientes`) VALUES
(1, 'estofado de carne', 'media', '8'),
(2, 'guiso de lentejas', 'baja', '15'),
(3, 'milanesa a la napolitana', 'baja', '6'),
(4, 'pastel de papa', 'baja', '12'),
(5, 'sopa de pollo', 'media', '5'),
(6, 'asado al horno', 'media', '9'),
(7, 'ñoquis', 'alta', '7'),
(8, 'fideos con salsa bolognesa', 'media', '6');

-- --------------------------------------------------------

--
-- Table structure for table `postres`
--

CREATE TABLE `postres` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `dificultad` varchar(30) NOT NULL,
  `ingredientes` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `postres`
--

INSERT INTO `postres` (`id`, `nombre`, `dificultad`, `ingredientes`) VALUES
(1, 'chocotorta', 'baja', '4'),
(2, 'flan', 'media', '9'),
(3, 'helado', 'media', '8'),
(4, 'pastelitos', 'baja', '9'),
(5, 'tarta de ricota', 'baja', '10'),
(6, 'Layer cake', 'alta', '15');

-- --------------------------------------------------------

--
-- Table structure for table `recetas`
--

CREATE TABLE `recetas` (
  `nombre` varchar(100) NOT NULL,
  `tipo` tinyint(4) NOT NULL,
  `porciones` int(10) UNSIGNED NOT NULL,
  `id` tinyint(3) UNSIGNED NOT NULL,
  `ingredientes` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `recetas`
--

INSERT INTO `recetas` (`nombre`, `tipo`, `porciones`, `id`, `ingredientes`) VALUES
('bondiola de cerdo', 1, 5, 1, 8),
('canelones', 1, 4, 2, 15),
('estofado de carne', 1, 5, 3, 8),
('guiso de lentejas', 1, 5, 4, 15),
('milanesa a la napolitana', 1, 3, 6, 6),
('pastel de papa', 1, 8, 7, 12),
('sopa de pollo', 1, 4, 8, 5),
('asado al horno', 1, 5, 9, 9),
('ñoquis', 1, 3, 10, 7),
('fideos con salsa bolognesa', 1, 5, 11, 6),
('chocotorta', 2, 6, 12, 4),
('flan', 2, 6, 13, 9),
('helado', 2, 6, 14, 8),
('pastelitos', 2, 8, 15, 9),
('Tarta de ricota', 2, 8, 16, 10),
('Layer cake', 2, 8, 17, 15),
('Budin de pan', 3, 12, 18, 6),
('Chipa', 3, 10, 19, 6),
('pancitos de leche', 3, 12, 20, 8),
('Pan integral', 3, 5, 21, 10),
('Pancitos rellenos de jyq', 3, 10, 22, 8),
('Paneton', 3, 8, 23, 12);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `Nombre` varchar(30) NOT NULL,
  `Apellido` varchar(30) DEFAULT NULL,
  `Correo Electronico` varchar(60) NOT NULL,
  `Edad` tinyint(3) UNSIGNED DEFAULT NULL,
  `fecha de nacimiento` date DEFAULT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pasteleria`
--
ALTER TABLE `pasteleria`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `platos principales`
--
ALTER TABLE `platos principales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `postres`
--
ALTER TABLE `postres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Nombre`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pasteleria`
--
ALTER TABLE `pasteleria`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `platos principales`
--
ALTER TABLE `platos principales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `postres`
--
ALTER TABLE `postres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `recetas`
--
ALTER TABLE `recetas`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
