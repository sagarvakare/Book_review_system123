-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: book_review_db
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'The Alchemist','Paulo Coelho','A fable about following your dreams.','https://example.com/alchemist.jpg','2025-06-20 17:51:50','2025-06-20 17:51:50'),(2,'1984','George Orwell','A dystopian novel about surveillance and control.','https://example.com/1984.jpg','2025-06-20 17:51:50','2025-06-20 17:51:50'),(3,'To Kill a Mockingbird','Harper Lee','A story about justice and race.','https://example.com/mockingbird.jpg','2025-06-20 17:51:50','2025-06-20 17:51:50'),(4,'The Alchemist','Paulo Coelho','A fable about following your dream.','https://example.com/alchemist.jpg','2025-06-20 17:56:03','2025-06-20 17:56:03'),(5,'1984','George Orwell','A dystopian novel set in totalitarian regime.','https://example.com/1984.jpg','2025-06-20 17:56:03','2025-06-20 17:56:03'),(6,'To Kill a Mockingbird','Harper Lee','Classic novel about justice and racism.','https://example.com/mockingbird.jpg','2025-06-20 17:56:03','2025-06-20 17:56:03');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (6,1,1,'Amazing book! Truly inspiring.',5,'2025-06-20 17:55:43','2025-06-20 17:55:43'),(7,2,2,'Eye-opening and terrifying at the same time.',4,'2025-06-20 17:55:43','2025-06-20 17:55:43'),(8,3,3,'A must-read classic.',5,'2025-06-20 17:55:43','2025-06-20 17:55:43'),(9,1,2,'Good read, but a bit slow.',3,'2025-06-20 17:55:43','2025-06-20 17:55:43'),(10,2,1,'Loved the message and characters.',4,'2025-06-20 17:55:43','2025-06-20 17:55:43');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Alice Johnson','alice@example.com','hashed_password_1','2025-06-20 17:52:25','2025-06-20 17:52:25'),(2,'Bob Smith','bob@example.com','hashed_password_2','2025-06-20 17:52:25','2025-06-20 17:52:25'),(3,'Charlie Ray','charlie@example.com','hashed_password_3','2025-06-20 17:52:25','2025-06-20 17:52:25');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-21  9:41:38
