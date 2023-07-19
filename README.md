# todo
# 图书管理系统

这个项目的目标是创建一个简单的图书管理系统的后端API，使用Node.js、Express框架和MySQL数据库编写。您将为应用程序的关键功能（如图书的增删改查等）编写API接口，以确保它们的正确性和性能。

## 技术栈

- Node.js
- Express
- MySQL

## 项目细节

1. 使用express框架搭建后端服务，mysql模块连接MySQL数据库。
2. 项目提供了RESTful API接口来实现书籍的增删改查功能。
3. 在每个API接口的实现中，都有对数据库操作错误的处理。当数据库操作出现错误时，服务器会返回HTTP状态码500，并附带一个JSON对象，其中包含一个error字段，用于描述错误信息。
4. 服务器使用Express框架搭建，监听3000端口。在服务器启动时，会尝试连接MySQL数据库，并在控制台输出连接状态信息。
5.使用工具Postman测试图书管理API的功能。

安装依赖项：
$ npm install

启动服务器：
$ npm start

查看网站： http://localhost:3000
