-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: javier20220130
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `tresource`
--

DROP TABLE IF EXISTS `tresource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tresource` (
  `idResource` int NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT NULL,
  `descrip` varchar(200) DEFAULT NULL,
  `idResourceType` int DEFAULT NULL,
  PRIMARY KEY (`idResource`),
  KEY `idResourceType_idx` (`idResourceType`),
  CONSTRAINT `idResourceType` FOREIGN KEY (`idResourceType`) REFERENCES `tresource_type` (`idResourceType`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tresource`
--

LOCK TABLES `tresource` WRITE;
/*!40000 ALTER TABLE `tresource` DISABLE KEYS */;
INSERT INTO `tresource` VALUES (1,'2022-01-31 00:21:24','Introducción a GO',1),(2,'2022-01-31 00:22:22','El mundo de node.js',2),(3,'2022-01-31 00:22:58','Ejercicios de react',4),(4,'2022-01-31 00:23:59','POO con java',2),(5,'2022-01-31 00:24:46','Los inicios de Amazon',1),(6,'2022-01-31 00:25:22','Seguridad informatica',2),(7,'2022-01-31 00:40:53','Manual de css',3);
/*!40000 ALTER TABLE `tresource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tresource_type`
--

DROP TABLE IF EXISTS `tresource_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tresource_type` (
  `idResourceType` int NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT NULL,
  `descrip` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idResourceType`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tresource_type`
--

LOCK TABLES `tresource_type` WRITE;
/*!40000 ALTER TABLE `tresource_type` DISABLE KEYS */;
INSERT INTO `tresource_type` VALUES (1,'2022-01-31 00:17:16','Video'),(2,'2022-01-31 00:17:55','PDF Documentación'),(3,'2022-01-31 00:18:12','PDF Enunciado'),(4,'2022-01-31 00:18:23','PDF Solución');
/*!40000 ALTER TABLE `tresource_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-31  0:58:24
