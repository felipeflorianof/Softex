CREATE DATABASE  IF NOT EXISTS `exerciciosoftex` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `exerciciosoftex`;
-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: exerciciosoftex
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aluno`
--

DROP TABLE IF EXISTS `aluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aluno` (
  `id` int(11) NOT NULL,
  `nome` varchar(40) NOT NULL,
  `matricula` int(11) NOT NULL,
  `email` varchar(70) NOT NULL,
  `endereco` varchar(70) NOT NULL,
  `contato` varchar(25) DEFAULT NULL,
  `data_nascimento` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`matricula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluno`
--

LOCK TABLES `aluno` WRITE;
/*!40000 ALTER TABLE `aluno` DISABLE KEYS */;
INSERT INTO `aluno` VALUES (1,'João Carlos',1234,'Jcarlos@gmail.com','Rua 13 de maio','1178254489',NULL),(2,'José Vitor',2345,'Jvitor@gmail.com','Rua da Saudade','1178256589',NULL),(3,'Paulo André',3456,'Pandr@gmail.com','Rua do Sol','1178254495',NULL);
/*!40000 ALTER TABLE `aluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emprestimo`
--

DROP TABLE IF EXISTS `emprestimo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emprestimo` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `data_hora` datetime NOT NULL,
  `matric_aluno` int(11) NOT NULL,
  `data_devolucao` date NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `matric_aluno` (`matric_aluno`),
  CONSTRAINT `emprestimo_ibfk_1` FOREIGN KEY (`matric_aluno`) REFERENCES `aluno` (`matricula`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emprestimo`
--

LOCK TABLES `emprestimo` WRITE;
/*!40000 ALTER TABLE `emprestimo` DISABLE KEYS */;
INSERT INTO `emprestimo` VALUES (1,'2022-03-12 15:25:00',1234,'2022-03-15'),(2,'2022-03-15 14:32:00',3456,'2022-03-18'),(3,'2022-03-20 03:51:00',2345,'2022-03-23');
/*!40000 ALTER TABLE `emprestimo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livro`
--

DROP TABLE IF EXISTS `livro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `livro` (
  `cod_livro` int(11) NOT NULL,
  `titulo` varchar(30) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL,
  `cod_sessao` int(11) DEFAULT NULL,
  PRIMARY KEY (`cod_livro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livro`
--

LOCK TABLES `livro` WRITE;
/*!40000 ALTER TABLE `livro` DISABLE KEYS */;
INSERT INTO `livro` VALUES (1,'Modelo Conceitual e Diagramas ','Pressman, Roger S.',3),(2,'Modelo Relacional e Álgebra Re','Heuser, Carlos Alberto',1),(3,'Linguagem SQL','Beighley, Lynn',2);
/*!40000 ALTER TABLE `livro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livro_emprestimo`
--

DROP TABLE IF EXISTS `livro_emprestimo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `livro_emprestimo` (
  `cod_livro` int(11) NOT NULL,
  `cod_emprestimo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livro_emprestimo`
--

LOCK TABLES `livro_emprestimo` WRITE;
/*!40000 ALTER TABLE `livro_emprestimo` DISABLE KEYS */;
INSERT INTO `livro_emprestimo` VALUES (3,1),(1,3),(2,2);
/*!40000 ALTER TABLE `livro_emprestimo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessao`
--

DROP TABLE IF EXISTS `sessao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessao` (
  `codigo` int(11) NOT NULL,
  `descricao` varchar(30) NOT NULL,
  `localizacao` varchar(30) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessao`
--

LOCK TABLES `sessao` WRITE;
/*!40000 ALTER TABLE `sessao` DISABLE KEYS */;
INSERT INTO `sessao` VALUES (1,'Sessao1','Partilheira1'),(2,'Sessao2','Partilheira2'),(3,'Sessao3','Partilheira3');
/*!40000 ALTER TABLE `sessao` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-24 19:02:06
