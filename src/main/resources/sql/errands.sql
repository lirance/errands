
------------------------------------
DROP TABLE IF EXISTS `user_order`;
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `order`;

------------------------------------
--user table
CREATE TABLE `user` (
  `userId` int(20) NOT NULL AUTO_INCREMENT,
  `userName` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL unique ,
  `address` varchar(255) NOT NULL,
  `rateNumber` int(20) NOT NULL ,
  `averageRate` float (7,2),
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

------------------------------------
--order table

CREATE TABLE `order` (
  `orderId` int(20) NOT NULL AUTO_INCREMENT,
  `itemList` varchar(255) NOT NULL,
  `storeAdd` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `timeLimit` int(255) DEFAULT 1,
  `tip` float (7,2) NOT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-------------------------------------
--user_order table

CREATE TABLE `user_order` (
  `userId` int(20) NOT NULL,
  `orderId` int(20) NOT NULL,
  `rateFlag` boolean DEFAULT 0,
  `orderMaker` boolean DEFAULT 1,
  `rate`  float (7,2),
CONSTRAINT PK_UO PRIMARY KEY (`orderId`,`userId`),
FOREIGN KEY fk_oId(orderId) REFERENCES `order`(orderId),
FOREIGN KEY fk_uId(userId) REFERENCES `user`(userId)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8;


