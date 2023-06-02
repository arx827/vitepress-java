---
title: 8. Spring Boot 使用 JSP 時需要的設定
---

# 8. Spring Boot 使用 JSP 時需要的設定
## Spring Boot 使用 JSP 時需要的設定
  - 因 `Spring Boot` 開始流行的年代 (約 2017 左右)，網路應用程式開發剛好流行「 `前後端分離` 」的模式，所以 `Spring` 本身不建議開發者使用 `JSP` 或模板引擎 (`Thymeleaf`、`FreeMaker`、...等)。
  - 但後來技術者們發現，在有些沒有那麼大的專案其實沒有必要做前後端分離，有時候也不需要那麼專業的前端技術 (也可能為了省前端工程師的成本)，所以原本 `MVC 模式` 的開發還是很流行，只是有些功能會混合使用 `ajax` + `restful api`。
  - 因上述歷史背景，`Spring Boot` 若要使用 `JSP`，則需要以下額外設定。
  
  `application.properties` 中需要的設定：
  - `spring.mvc.view.prefix=/WEB-INF/jsp/`
    - 它的路徑如下：
      - `\src\main\webapp\WEB-INF\jsp`
  - `spring.mvc.view.suffix=.jsp`

  `pom.xml` 中需要增加兩個套件的標籤：
  
  ```xml
  <dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
  </dependency>

  <dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <!-- 解析 jsp -->
    <artifactId>tomcat-embed-jasper</artifactId>
    <!-- provided => 交給 SpringBoot 自行尋找版本 -->
    <scope>provided</scope>
  </dependency>
  ```