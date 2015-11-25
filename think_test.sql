/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.6.26-log : Database - think_test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`think_test` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `think_test`;

/*Table structure for table `think_article` */

DROP TABLE IF EXISTS `think_article`;

CREATE TABLE `think_article` (
  `uid` int(10) DEFAULT NULL,
  `aid` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

/*Data for the table `think_article` */

insert  into `think_article`(`uid`,`aid`,`title`,`content`,`author`,`create_time`) values (4,11,'呵呵呵','呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵','t','2015-11-24 10:14:39'),(5,12,'啊啊啊啊啊啊','啪啪啪啪啪啪啪啪啪啪啪啪啪啪啪啪啪啪啪','y','2015-11-24 10:32:28');

/*Table structure for table `think_user` */

DROP TABLE IF EXISTS `think_user`;

CREATE TABLE `think_user` (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `user` char(255) DEFAULT NULL,
  `pass` char(255) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `think_user` */

insert  into `think_user`(`uid`,`user`,`pass`) values (1,'li','202cb962ac59075b964b07152d234b70'),(2,'hehe','202cb962ac59075b964b07152d234b70'),(3,'a','202cb962ac59075b964b07152d234b70'),(4,'t','c4ca4238a0b923820dcc509a6f75849b'),(5,'y','c4ca4238a0b923820dcc509a6f75849b');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
