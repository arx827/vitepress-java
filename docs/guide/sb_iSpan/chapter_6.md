---
title: 6. Spring MVC 常用方法
---

# 6. Spring MVC 常用方法
## Spring MVC 常用註釋 (Annotation)
  - `@Controller`：
    - 控制器，編寫在類別上，表示是 `SpringMVC` 的 `Controller`，負責處理由 `DispatcherServlet` 接收並分發過來的請求。
  - `@RequestMapping`：
    - 寫在 `Controller` 內的方法，真正處理請求位址對應的註釋。若編寫在類別上，則該類別所有回應請求的方法都以該位址為父路徑。
  - `@PathVariable`：
    - 將請求 `URL` 中的變數對應到功能處理方法的參數上，就是取得 `URL` 中的變數作為程式的參數。
  - `@RestController`：
    - 用來標記 `RESTful` 風格的控制器類別，等於 `@Controller` 加上 `@ResponseBody`，會直接回傳字串，常用於回應 `JSON` 格式的字串。
  
### `Spring Boot` 還提供了更簡潔的 編寫 `URL` 對應的方法：
  - `@GetMapping("/")`：
    - 相當等於 `@RequestMapping(value="/", method = RequestMethod.GET)`
  - 上述方法也可以使用在以下註釋：
    - `@PostMapping`
    - `@DeleteMapping`
    - `@PutMapping`

## Spring MVC 其他請求設定
  - 正常的瀏覽器的 `FORM` 表單，只能提出 `GET` 與 `POST` 請求，並不能提出 `PUT` 與 `DELETE` 等方法， `spring 3.0` 新增一個過濾器，可以將 `POST` 請求轉換為 `PUT` 與 `DELETE` 方法。
  - `org.springframework.web.filter.HiddenHttpMethodFilter`
    - `HiddenHttpMethodFilter` 過濾器，會監看前端程式送來的請求參數中，是否含有名為 `_method` 的欄位，若有，則將請求之 `HTTP 方法` 依照此欄位的內容值來修改：
      - 若為 `PUT` (不分大小寫)，則將 `HTTP 方法` 改為 `PUT`。
      - 若為 `DELETE` (不分大小寫)，則將 `HTTP 方法` 改為 `DELETE`。
      - 提出此請求時，原始的 `HTTP 方法`，必須為 `POST`。

  - 在 `Spring Boot 2.2` 版以前不需要做任何設定，因為它會自動配置 `HiddenHttpMethodFilter`，但自 `Spring Boot 2.2` 版(含)開始，它不再自動為應用系統配置此過濾器，我們必須自行配置。
    - 有兩種方法：
      - 方法一：在 `application.properties` 內加入下列設定：
        - `spring.mvc.hiddenmethod.filter.enabled=true`
      - 方法二：以程式加入此過濾器 (非 Boot 專案時使用)
        - `Spring Boot` 提供一個 `FilterRegistrationBean`，讓應用系統加入所需的過濾器：
          ```java
          @Bean
          FilterRegistrationBean<Filter> hiddenHttpMethodFilter(){
            FilterRegistrationBean<Filter> filterBean = new FilterRegistrationBean<>();
            filterBean.setFilter(new HiddenHttpMethodFilter());
            return filterBean;
          }
          ```
        - 我們只需要在任何以 `@Configuration` 修飾的 `Java` 類別中加入上面的方法即可。

## Spring MVC 中 HTTP 常用功能
  - 處理訊息的類型 `Content Type`
    - 在 `HTTP 協定` 的 `header` 中，`Content type` 表示實際請求中的媒體類型。PC端常用的是 `text/html` 格式，手機則是使用 `JSON 格式`。
  - 比較特別且常用的格式如下：
    - `application/json`：JSON 資料格式
    - `application/pdf`：PDF 資料格式
    - `multipart/form-data`：若在表單(form)中上傳資料，需使用此格式。 
  

