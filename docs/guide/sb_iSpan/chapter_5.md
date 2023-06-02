---
title: 5. Spring MVC 實作及常用方法
---

# 5. Spring MVC 實作及常用方法
## Spring MVC 架構
  - `Spring Boot` 開發 `Web` 應用程式主要使用 `MVC 模式`。`MVC` 是 `Model (模型)`、`View (視圖)`、`Controller (控制器)` 的縮寫。
  - `Model`：`模型`，單純存取資料的物件或 `POJO` (`Plain Old Java Objects`，簡單的 Java 物件)
  - `View`：`視圖`，主要用來解析、處理、顯示內容。
  - `Controller`：`控制器`，用來處理視圖中的回應。它決定如何呼叫 `Model`、如何呼叫 `業務層 (Service)` 的資料增加、刪除、修改和查詢等業務操作，以及如何將結果傳回`視圖`。盡量不要在控制器中放入業務邏輯。
    > `MVC` 只是一種常用的架構，可能會因為需求不同改用其他模式。
  - `Spring MVC` 主要透過 `DispatcherServlet` 物件封裝 `Servlet` 相關的功能，例如：http 請求 (`Controller`, `HandlerMapping`)，view 的處理 (`View Resolver`) 等功能。
  - 再加上業務邏輯的 `Service`、掌控資料庫的 `DAO` (`Repository`)，一起交由 `spring` 控管，這種架構的專案就稱為 `Spring MVC` 架構。

## Spring MVC 主要流程
  - `Spring MVC` 主要的流程如下：
    - 使用者由瀏覽器發出請求，由 `Tomcat` 接收並轉交給 `DispatcherServlet` 處理。
    - `DispatcherServlet` 比對控制器中設定的對應路徑，進行下一步處理。
    - `ViewResolver` 將 `ModelAndView` 或 `Exception` 解析成 `View`，且根據 `ModelAndView` 中的資料渲染頁面。

## Spring MVC 與 三層式架構
  - 三層式架構分為：`表現層 (UI)`、`業務邏輯層 (Service)`、`資料存取層 (DAO 或 Repository)`，
    詳細分層說明如下：
    - `表現層`：`Controller` (和頁面)，管理請求的送出和接收
    - `資料存取層`：與資料庫進行互動的持久層，在 `Spring Data JPA` 中，透過 `Hibernate` 來實作。
    - `業務邏輯層`：是三層架構的服務層，負責處理業務邏輯，通常會呼叫 `DAO` 幫忙做事情。
