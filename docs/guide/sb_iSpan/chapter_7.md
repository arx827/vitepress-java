---
title: 7. Spring Boot 中常用的取得參數方式
---

# 7. Spring Boot 中常用的取得參數方式
## 取得路徑中的值
  - `http://localhost:80080/getProduct/{id}`
  ```java
  @GetMapping("/getProduct/{id}")
  public String getProduct1(@PathVariable int productId) {
    // ... find product code
    return "some-page";
  }
  ```

  - `http://localhost:8080/getProduct/?productId=5`
  ```java
  @GetMapping("/getProduct")
  public String getProduct1(int productId) {
    // ... find product code
    return "some-page";
  }
  ```

## 用 `@ModelAttribute` 取得 Model 參數
  用於從 `Form`、`Model` 請求參數中取得屬性值
  ```java
  @PostMapping("/postProduct")
  public String sendProduct(@ModelAttribute ProductModel product) {
    // ... find product code
    return "some-page";
  }
  ```

## 用 `HttpServletRequest` 接收參數
  ```java
  @PostMapping("/login")
  public String checkLogin(HttpServletRequest request) {
    String username = request.getParameter("username");
    String password = request.getParameter("password");
    // ...
  }
  ```
  > 可以用 `getParameter` 方法從 `form` 的 `name` 屬性拿到對應的值。

## 用 `@RequestParam` 導入參數
  ```java
  @GetMapping("/getProduct")
  public String getProduct2(@RequestParam(value = "id", required = false) int id) {
    // ... find product code
    return "some-page";
  }
  ```
  > 當請求參數不存在時不想報錯，可以使用 `required = false` 來指定該參數不是必須的。

## 用 `@RequestBody` 導入參數
  `@RequestBody` 用來接收格式為 `JSON` 的資料
  ```java
  @PostMapping("/ajaxLogin")
  public String sheckLoginWithAjax(@RequestBody LoginAjaxDto loginDto) {
    String username = loginDto.getLoginUserName();
    String password = loginDto.getLoginPassword();
    // ...
  }
  ```

