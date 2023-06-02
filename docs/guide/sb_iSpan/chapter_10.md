---
title: 10. RESTful API
---

# 10. RESTful API
## API 簡介
  - `API` 稱為應用程式介面。
  - 原文：`Application Programming Interface`。
  - 這裡的介面指的不是 `Java` 的抽象介面，是使用應用程式的一種方法。
  - 工程師寫好一個程式，提供給他人使用，並提供一個介面給他人，這個介面就稱為 `API`。
  - 在網路應用程式中，`API` 會是一個網址，且會搭配說明文件，說明該 `API` 的用法與需要的參數、會回傳的資訊等。

## RESTful API 簡介
  - `RESTful API` 中文為表現層狀態轉換 (原文：`Representational State Transfer`，縮寫：`REST`) 是 `Roy Thomas Fielding` 提出來的一種全球資訊網軟體架構風格。
  - 因每位工程師開發出來的 `API` 規格不一致，導致應用他人的 `API` 時，容易造成混亂，因此才有了 `RESTful API`。
  - `RESTful API` 為一種開發風格，經過長時間的試煉，成為許多工程師公認目前最好的 `API` 風格。

## RESTful API 與 RESTful 風格
  - `RESTful` 風格：用約定成俗的方式排列透過 `URL` 發出 `http` 的請求，`http` 回應可以是頁面或 `JSON` 格式的資料。
  - `RESTful API`：符合上述條件，而且 `Http` 回應 (`Response Body`) 為 `JSON` 格式 (早期用 `XML`)。

  | http method | 動作 (可帶參數) |
  |-------------|---------------|
  | POST        | 新增資料        |
  | PUT         | 修改資料        |
  | DELETE      | 刪除資料        |
  | GET         | 查詢資料        |

  > 嚴格棶說，若回應的資料不是 `JSON`，不能說這是 `RESTful api`，只能說他是一般的 `REST` 風格。

## RESTful 風格
  - 用 `http` 的 `method` 表示動作。
  - 透過 `url` 路徑，可以知道資源間的階層關係。

  | http method | 動作 (可帶參數) |
  |-------------|---------------|
  | POST        | 新增資料        |
  | PUT         | 修改資料        |
  | DELETE      | 刪除資料        |
  | GET         | 查詢資料        |

  | http url                | 說明                                     |
  |-------------------------|-----------------------------------------|
  | GET /post               | 取得所有文章                              |
  | GET /post/99            | 取得 id 為 99 的文章                      |
  | GET /post/99/comments   | 取得 id 為 99 的文章的所有留言              |
  | GET /post/99/comments/2 | 取得 id 為 99 的文章的留言 id 為 2 的留言   |
  | GET /post/99/like       | 取得 id 為 99 的文章的按讚數                |

## RESTful 風格的 RESTful API
  - 用 `http` 的 `method` 表示動作。
  - 透過 `url` 路徑，可以知道資源間的階層關係。
  - `Http` 回應 (`Response Body`) 為 `JSON` 格式 (早期用 `XML`)。

  ```
  GET  https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY
  ```

  ```javascript
  {
    status: "ok",
    totalResults: 70,
    articles: [
      {
        source: {
          id: "cnn",
          name: "CNN"
        },
        author: "Sean Lyngass, CNN Business",
        title: "Russian group that hacked SolarWinds is still attacking America's computer networks - CNN",
        description: "",
      },
      {
        source: {
          id: "null",
          name: "CNN"
        },
        author: "Sean Lyngass, CNN Business",
        title: "Russian group that hacked SolarWinds is still attacking America's computer networks - CNN",
        description: "",
      },
      // ...
    ]
  }
  ```

## RESTful API 如何在 Spring Boot 中實作
  - 傳統網路應用系統和 `REST API` 之間的根本差別在於，網路應用系統送給前端瀏覽器的回應，通常是一份含有 `HTML`、`CSS`、`JavaScript` 的 `HTML 文件`，而 `REST API` 則是送回 `JSON` 格式的資料。
  - 這種差異正反映在 `@Controller` 和 `@RestController` 兩個註釋中。`@Controller` 的工作是彙整要送回給客戶端的資料，並存入屬性物件內，然後傳回一個視圖的邏輯名稱，但 `@RestController` 只返回物件，此物件會自動轉換為 `JSON` 格式的資料。因為 `Spring` 提供的 `HTTP message converter` 會自動呼叫 `MappingJackson2Http-MessageConverter` 將 `POJO` 轉換為 `JSON` 格式的字串。
  - `@RestController` 是 `Spring 4.0` 新增的註釋，為類別層級的註釋，其作用為標示類別為控制器類別，其內的所有方法會傳回 `POJO` 物件而非視圖的邏輯名稱。它為 `@Controller` 與 `@ResponseBody` 註釋的簡寫。