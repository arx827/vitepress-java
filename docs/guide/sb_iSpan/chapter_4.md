---
title: 4. Spring Boot 的 Web 專案啟動
---

# 4. Spring Boot 的 Web 專案啟動
## Spring Boot 如何啟動專案
  - 啟動專案的方式：直接執行最高層的 `Java` 檔案
  - 須注意專案檔案層級：其他 `Java` 檔案必須在本 `package` 底下
  - 須要有 `spring-boot-starter-web` 的套件
    ```xml
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    ```
    ```java
    @SpringBootApplication
    public class SpringbootdemoApplication {
      public static void main(String[] args) {
        SpringApplication.run(SpringbootdemoApplication.class, args);
      }
    }
    ```
  - `@SpringBootApplication` 為一複合註釋，具有下列三個註釋的功能：
    - `@Configuration`：
      表示本類別為一個 Spring Boot 下的一個 `@Configuration` 類別，能以 `@Bean` 修飾的方法來提供 `Bean` 的定義。
    - `@EnableAutoConfiguration`：
      啟動自動組態配置，會根據專案的啟動套件、屬性設定檔等來源設定專案。
    - `@ComponentScan`：
      `Spring Boot` 會自動掃描主類所處之套件下的所有(廣義)子套件，因此直接或間接位於此套件之下，使用有註釋修飾的 `Bean` 是自動被 `loC 容器` 發現的。(`@Component`, `@Service`, `@Repository`, `@Bean`)

  - 若看到 `Tomcat started on port(s): 8080 (http) with context path` 字樣表示成功啟動 `Spring Boot` 囉!
    ```sh
    Adding welcome page template: index
    LiveReload server is running on port 35729
    Tomcat started on port(s): 8080 (http) with context path ''
    Started SpringbootThyApplication in 7.752 seconds (JVM running for 9.047)
    ```
