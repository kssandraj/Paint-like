-- DROP ALL TABLE

DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `drawing`;

-- TABLE STRUCTURE FOR `user`

CREATE TABLE `user` (
    `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
);

-- TABLE STRUCTURE FOR `drawing`

CREATE TABLE `drawing` (
    `id` int NOT NULL AUTO_INCREMENT,
    `imgName` VARCHAR(100) NOT NULL,
    `userId` int NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (userId)  
    REFERENCES user(id)
);

-- CREATING TWO USERS

INSERT INTO user (username, password) VALUES ('user1', 'user1');
INSERT INTO user (username, password) VALUES ('user2', 'user2');
