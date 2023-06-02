---
title: 9. JSON
---

# 9. JSON
## JSON 格式
  - `JSON` 是目前最流行的一種資料交換格式。
  - 基礎結構為 `鍵` 與 `值` 的配對 (`key-value`)。
  - 雖然 `JSON` 是以 `JavaScript` 語法為基礎，但可獨立使用，且許多程式設計環境亦可讀取 (解析) 並產生 `JSON`。
  - `JSON` 可能是物件或字串。當你想從 `JSON` 中讀取資料時，`JSON` 可作為 `物件`；當要跨網路傳送 `JSON` 時，就會是 `字串`。
  - 更詳細的說明，可參考 [`MDN`](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Objects/JSON) 網站的 `JSON` 章節。
  ```json
  {
    "brand": "Toyota",
    "color": "Pink",
    "year": 3
  }
  ```

  - `JSON` 物件，可儲存於檔案中，副檔名為 `.json` 的文字檔案。
  - `JSON` 是單純的資料格式，僅具備 `鍵` 與 `值` (`key-value`)，而無函式。
  - `JSON` 的 `MINE 型別` (`MIME Type`) 為 `application/json`。
  ```json
  {
    "firstName": "John",
    "lastName": "Smith",
    "sex": "male",
    "age": 25,
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "poostalCode": "10021"
    },
    "phoneNumber": [
      {
        "type": "home",
        "number": "212 555-1234"
      },
      {
        "type": "fax",
        "number": "646 555-4567"
      }
    ]
  }
  ```

  - 在 `JSON` 的鍵值配對 (key-value) 中，值可以是 `整數`、`浮點數`、`字串`、`布林值`。
  - `JSON` 使用 `冒號 (:)` 來分隔 `key` 與 `value`，名稱永遠在左側，而值永遠在右側。

  ::: tip 注意：
  - 所有的 `key` 一定要有 `雙引號 (")` 包起來。
  - 無雙引號 => JavaScript 物件
  :::

## `JSON 格式` 與 `Java 物件` 對應關係
  - 在 `JSON` 的環境中，通常使用 `Java POJO` 的屬性與值，對應到 `JSON` 的鍵與值。
    ```java
    public class Users {
      private int id;
      private String username;
      private String userPassword;
      // ...
    }
    ```

    ```json
    {
      "id": 1,
      "username": "Metro",
      "userPassword": "qwert"
    }
    ```

## JSON 與 前後端分離的開發模式
  - 前端：
    - 網頁(html)
    - Android 手機
    - IOS 手機
    - 其他介面裝置

  ↿⇂ JSON ↿⇂

  - 後端：
    - Server(Servlet, Spring Boot, asp.net, Go, NodeJS ...) 產生的 RESTful API
    - Database

  > `JSON 格式` 有非常明顯的優勢：「 `跨平台` 」，因此 `JSON` 為網路上最常使用的交換資訊格式。