-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2019 at 08:39 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `home_chef`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Dairy', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(2, 'Vegetables', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(3, 'Fruits', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(4, 'Baking & Grains', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(5, 'Added Sweeteners', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(6, 'Spices', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(7, 'Meats', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(8, 'Fish', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(9, 'Seafood', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(10, 'Condiments', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(11, 'Oils', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(12, 'Seasonings', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(13, 'Sauces', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(14, 'Legumes', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(15, 'Alcohol', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(16, 'Soups', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(17, 'Nuts', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(18, 'Dairy Alternatives', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(19, 'Desserts & Snacks', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(20, 'Beverages', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`id`, `name`, `categoryId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Potato', 2, '2019-06-29 00:00:00', '2019-06-29 00:00:00', NULL),
(2, 'Tomato', 2, '2019-06-29 00:00:00', '2019-06-29 00:00:00', NULL),
(3, 'Butter', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(4, 'Egg', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(5, 'Milk', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(6, 'Parmesan', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(7, 'Cheddar', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(8, 'American cheese', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(9, 'Sour cream', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(10, 'Cream cheese', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(11, 'Mozzarella', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(12, 'Yogurt', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(13, 'Cream', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(14, 'Evaporated milk', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(15, 'Whipped cream', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(16, 'Feta', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(17, 'Monterey jack cheese', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(18, 'Condensed milk', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(19, 'Cottage cheese', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(20, 'Ice cream', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(21, 'Swiss cheese', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL),
(22, 'Velveeta', 1, '2019-06-30 00:00:00', '2019-06-30 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `createdBy` int(11) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `title`, `description`, `createdBy`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'QUICK HASH BROWNS', 'The number of potatoes simply depends upon the number of people you are feeding.\r\nWash and do not peel the potatoes. Microwave on high until mostly done. If using 2-3 small red potatoes for two servings this will be about 2 1/2 minutes.\r\nWhile microwaving the potatoes fill a bowl with iced water. When potatoes are done drop them into the ice water and cut them lengthwise in half to expedite cooling.\r\nWhen just cool enough to handle shred each half without peeling. Keep the peel against your palm while shredding and most of the peel will remain in your hand. Discard the peel and continue with recipe.\r\nPlace shredded potatoes in skillet sprayed with vegetable spray and cook over medium heat until well browned. Flip and repeat.\r\n(I don\'t use salt and pepper, I had to include something else here or the system would not let me publish this. Add it if you would like.).\r\nNOTE: If you want to add other items to these then shred them onto a plate first, add the other items and them place in fry pan. You might want to add some diced onion, bacon or bacon bits, shredded cheese, chives or whatever you might imagine.', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(2, 'RESTAURANT STYLE BAKED POTATOES', 'Preheat oven to 400º.\r\nWash the potatoes well and while still damp, rub it with plenty of salt.\r\nPierce the potatoes with a fork all over.\r\nBake at 400º for 40- 60 minute or until tender. When a knife inserted into the center of the potato comes out with no resistance, they are done.\r\nThe result is a crispy exterior with a fluffy interior.', 1, '2019-06-29 00:00:00', '2019-06-29 00:00:00', NULL),
(3, 'This is 3rd recipe', 'Preheat oven to 400º.\r\nWash the potatoes well and while still damp, rub it with plenty of salt.\r\nPierce the potatoes with a fork all over.\r\nBake at 400º for 40- 60 minute or until tender. When a knife inserted into the center of the potato comes out with no resistance, they are done.\r\nThe result is a crispy exterior with a fluffy interior.', 1, '2019-06-29 00:00:00', '2019-06-29 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `recipe_ingredients`
--

CREATE TABLE `recipe_ingredients` (
  `id` int(11) NOT NULL,
  `recipeId` int(11) DEFAULT NULL,
  `ingredientId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe_ingredients`
--

INSERT INTO `recipe_ingredients` (`id`, `recipeId`, `ingredientId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recipeId` (`recipeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD CONSTRAINT `ingredients_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  ADD CONSTRAINT `recipe_ingredients_ibfk_1` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
