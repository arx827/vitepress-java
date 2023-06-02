---
title: 3. Spring Boot 組態檔設定
---

# 3. Spring Boot 組態檔設定
## 觀察 Spring Boot 的 Maven 設置
  - `Spring Starter` 專案內的 `pom.xml` 都參考一個父專案。
    ```xml
    ...
    <parent>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-parent</artifactId>
      <version>2.x.x.RELEASE</version> <!-- 只有此標籤需要加上版本號 -->
      <relativePath />
    </parent>
    ...
    ```

  - ### `spring-boot-starter-parent`
    為所有 `Spring Boot Starter` 專案的父專案。
    父專案存在的目的不在編寫程式，其目的之一在 `定義一組可讓多個專案使用的依賴標籤`，以及 `此組標籤之間的版本搭配`。

  - `spring-boot-starter-parent` 的父專案：
    ```xml
    ...
    <parent>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-dependencies</artifactId>
      <version>2.x.x.RELEASE</version>
      <relativePath />
    </parent>
    ...
    ```

  - `spring-boot-dependencies` 專案的 `pom.xml` 在 `<properties>` 群組中定義近 200(199) 個依賴 `<dependency>` 的版本，以及數百個依賴標籤。它們經過嚴格的測試，可以同時用於一個專案內。我們的專案繼承這樣的父專案後，只要是父專案定義過的依賴，都不需要另外定義，也無須擔心不同依賴間的版本搭配問題。

  - `spring-boot-dependencies` 專案 `統一管理子專案之依賴的版本` 與 `無須定義就可使用依賴`。

  - Spring Boot 提供的啟動器 (Starter)：
    - [資料來源](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#using.build-systems.starters)
        | Name                                            | Description                                                                                                                          |
        |-------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
        | spring-boot-starter                             | Core starter, including auto-configuration support, logging and YAML                                                                 |
        | spring-boot-starter-activemq                    | Starter for JMS messaging using Apache ActiveMQ                                                                                      |
        | spring-boot-starter-amqp                        | Starter for using Spring AMQP and Rabbit MQ                                                                                          |
        | spring-boot-starter-aop                         | Starter for aspect-oriented programming with Spring AOP and AspectJ                                                                  |
        | spring-boot-starter-artemis                     | Starter for JMS messaging using Apache Artemis                                                                                       |
        | spring-boot-starter-batch                       | Starter for using Spring Batch                                                                                                       |
        | spring-boot-starter-cache                       | Starter for using Spring Framework’s caching support                                                                                 |
        | spring-boot-starter-data-cassandra              | Starter for using Cassandra distributed database and Spring Data Cassandra                                                           |
        | spring-boot-starter-data-cassandra-reactive     | Starter for using Cassandra distributed database and Spring Data Cassandra Reactive                                                  |
        | spring-boot-starter-data-couchbase              | Starter for using Couchbase document-oriented database and Spring Data Couchbase                                                     |
        | spring-boot-starter-data-couchbase-reactive     | Starter for using Couchbase document-oriented database and Spring Data Couchbase Reactive                                            |
        | spring-boot-starter-data-elasticsearch          | Starter for using Elasticsearch search and analytics engine and Spring Data Elasticsearch                                            |
        | spring-boot-starter-data-jdbc                   | Starter for using Spring Data JDBC                                                                                                   |
        | spring-boot-starter-data-jpa                    | Starter for using Spring Data JPA with Hibernate                                                                                     |
        | spring-boot-starter-data-ldap                   | Starter for using Spring Data LDAP                                                                                                   |
        | spring-boot-starter-data-mongodb                | Starter for using MongoDB document-oriented database and Spring Data MongoDB                                                         |
        | spring-boot-starter-data-mongodb-reactive       | Starter for using MongoDB document-oriented database and Spring Data MongoDB Reactive                                                |
        | spring-boot-starter-data-neo4j                  | Starter for using Neo4j graph database and Spring Data Neo4j                                                                         |
        | spring-boot-starter-data-r2dbc                  | Starter for using Spring Data R2DBC                                                                                                  |
        | spring-boot-starter-data-redis                  | Starter for using Redis key-value data store with Spring Data Redis and the Lettuce client                                           |
        | spring-boot-starter-data-redis-reactive         | Starter for using Redis key-value data store with Spring Data Redis reactive and the Lettuce client                                  |
        | spring-boot-starter-data-rest                   | Starter for exposing Spring Data repositories over REST using Spring Data REST                                                       |
        | spring-boot-starter-freemarker                  | Starter for building MVC web applications using FreeMarker views                                                                     |
        | spring-boot-starter-graphql                     | Starter for building GraphQL applications with Spring GraphQL                                                                        |
        | spring-boot-starter-groovy-templates            | Starter for building MVC web applications using Groovy Templates views                                                               |
        | spring-boot-starter-hateoas                     | Starter for building hypermedia-based RESTful web application with Spring MVC and Spring HATEOAS                                     |
        | spring-boot-starter-integration                 | Starter for using Spring Integration                                                                                                 |
        | spring-boot-starter-jdbc                        | Starter for using JDBC with the HikariCP connection pool                                                                             |
        | spring-boot-starter-jersey                      | Starter for building RESTful web applications using JAX-RS and Jersey. An alternative to spring-boot-starter-web                     |
        | spring-boot-starter-jooq                        | Starter for using jOOQ to access SQL databases with JDBC. An alternative to spring-boot-starter-data-jpa or spring-boot-starter-jdbc |
        | spring-boot-starter-json                        | Starter for reading and writing json                                                                                                 |
        | spring-boot-starter-mail                        | Starter for using Java Mail and Spring Framework’s email sending support                                                             |
        | spring-boot-starter-mustache                    | Starter for building web applications using Mustache views                                                                           |
        | spring-boot-starter-oauth2-authorization-server | Starter for using Spring Authorization Server features                                                                               |
        | spring-boot-starter-oauth2-client               | Starter for using Spring Security’s OAuth2/OpenID Connect client features                                                            |
        | spring-boot-starter-oauth2-resource-server      | Starter for using Spring Security’s OAuth2 resource server features                                                                  |
        | spring-boot-starter-quartz                      | Starter for using the Quartz scheduler                                                                                               |
        | spring-boot-starter-rsocket                     | Starter for building RSocket clients and servers                                                                                     |
        | spring-boot-starter-security                    | Starter for using Spring Security                                                                                                    |
        | spring-boot-starter-test                        | Starter for testing Spring Boot applications with libraries including JUnit Jupiter, Hamcrest and Mockito                            |
        | spring-boot-starter-thymeleaf                   | Starter for building MVC web applications using Thymeleaf views                                                                      |
        | spring-boot-starter-validation                  | Starter for using Java Bean Validation with Hibernate Validator                                                                      |
        | spring-boot-starter-web                         | Starter for building web, including RESTful, applications using Spring MVC. Uses Tomcat as the default embedded container            |
        | spring-boot-starter-web-services                | Starter for using Spring Web Services                                                                                                |
        | spring-boot-starter-webflux                     | Starter for building WebFlux applications using Spring Framework’s Reactive Web support                                              |
        | spring-boot-starter-websocket                   | Starter for building WebSocket applications using Spring Framework’s MVC WebSocket support                                           |

  - 定義一組特定功能所需要的相關依賴(`Dependencies`)，需要此特定功能的 `Spring Boot` 專案，只需要引入此特定功能對應的 `Starter` 而不需自行定義，啟動器為各種 `Spring` 特定功能提供 `一站式` (`one-stop-shop`) 的服務，大幅提升系統的初始的建置效率。啟動器自動幫專案加入一組相關的 `jars` 檔到專案的類別路徑。(常命名為 `spring-boot-starter-xxx`)。

  - 對於開發任何大型應用系統而言，依賴管理至關重要。由於使用依賴的數量之多，以及不同依賴之間的版本搭配，以人工來手動管理並不理想。您花在此事的時間越多，意味花在專案開發的時間就越少。啟動器就是來解決這樣的問題。每個啟動器都由一組相關且實用的依賴標籤(`<dependency>`)組成，可在自己的專案中引用它。

  - `Spring Boot` 可以直接指定 `Java` 版本 (當然要有 `JRE`)
    ```xml {15}
    ...
    <modelVersion>4.0.0</modelVersion>
    <parent>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-parent</artifactId>
      <version>2.5.6</version>
      <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.example</groupId>
    <artifactId>springbootdemo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>springbootdemo</name>
    <description>Demo project for Spring Boot</description>
    <properties>
      <java.version>11</java.version>
    </properties>
    ...
    ```

  - 一些 `maven pom` 的設定
    ```xml
    <properties>
      <java.version>11</java.version>
    </properties>
    <dependencies>
      <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
      </dependency>

      <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <scope>runtime</scope>
        <optional>true</optional>
      </dependency>

      <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-srarter-test</artifactId>
        <scope>test</scope>
      </dependency>
    </dependencies>
    ```

  - 啟動器搭配 `Spring Boot` 的自動配置 (`Auto Configuration`)，使得系統可以在不需要 (或最少量的) 配置就可執行。
  - 假設專案將使用 `Spring Web` 功能，可在專案內的 `pom.xml` 中使用 `spring-boot-starter-web` 依賴標籤，專案就會引入一組與 `Spring Web` 有關且版本完全搭配的 `Jar 檔`。
  - 專案若需要使用 `Thymeleaf` (類似模板) 來作為產生 HTML 文件的模板引擎，只要在 `pom.xml` 中使用 `spring-boot-starter-thymeleaf` 依賴標籤，專案就會引入一組與 `thymeleaf` 相關且版本完全搭配 `Spring` 版本的 `Jar 檔`。

## 專案屬性設置
  - 使用 `application.properties` (src/main/resources) 檔案
  - `properties` 檔，是一個 key-value 配對的資料型態 (屬性=值)
  - 例如：設定 Base Url：
    ```
    server.servlet.context-path = /my-app;    # (預設為 '/')
    ```
  - 常用設定請參考官網提供的參考文件
    (或 搜尋 `Spring application properties`)：https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html

### 本課程專案屬性設置
  ```
  # 記得改 properties 為 UTF-8
  # port.config (預設本來就是 8080，若須修改可以從這裡)
  server.port=8080

  # connection information
  spring.datasource.driverClassName=com.microsoft.sqlserver.jdbc.SQLServerDriver
  spring.datasource.url=jdbc:sqlserver://localhost;databaseName=SpringBootDB
  srping.datasource.username=sa
  spring.datasource.password=password!
  ```
  > - `#` 為註解，後面必須有一個空格
  > - `=` 前後不須空格

  ```
  ## jpa config
  spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.SQLServer2012Dialect
  spring.jpa.show-sql=true
  spring.jpa.properties.hibernate.format_sql=true
  spring.jpa.hibernate.ddl-auto=update

  # 不強制使用 Hibernate 的命名規則
  spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl

  #JSP Config
  spring.mvc.view.prefix:/WEB-INF/jsp/  # (使用等號或冒號都可以)
  spring.mvc.view.suffix:.jsp
  ```

## Spring Boot 的 View (視圖) 常見種類
  1. `Thymeleaf`：`Spring Boot` 官方範例用的模板引擎 (`template engine`)
  2. `Jsp`：透過 `Servlet` 編譯後的視圖頁面
  3. `不負責 View 端`：屬於前後端分離的架構 (`Ajax` + `Restful`)，單純用 `JSON` 溝通前後端資訊。前端通常使用目前 `JS 三大框架`的其中之一 (`Angular`、`React`、`Vue`)

  > 前兩種為 MVC 架構，第三種為前後端完全分離的架構
