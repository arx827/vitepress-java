---
title: 12. Spring JPA 實作與應用
---

# 12. Spring JPA 實作與應用
## SpringData JPA
  - `JPA (Java Persistence API)` 是 `SUN` 針對 `ORM` 技術提出的規範，目的為簡化持久化的開發工作以及整合各家 `ORM` 技術。
  - `Spring Data JPA` 是 `Spring` 根據 `ORM 框架` 和 `JPA 規範` 而封裝的 `JPA 應用框架`，目的是降低存取資料層的工作量，讓開發人員只需寫出 `JpaRepository` 的介面，而 `Spring` 自動實作其功能，達到快速開發的效果。

## SpringData JPA 與 Spring Boot 的整合
  - 開發者可以使用 `Spring Boot` 與 `SpringData JPA` 整合好的套件，直接開發，該套件的名稱為 `spring-boot-start-data-jpa`。
  - 直接在 `Maven` 的 `pom.xml` 加入該套件，就可以使用 `SpringData JPA`。

## JpaRepository 的用法
  - 先看一下 `JpaRepository` 的介面定義
    ```java
    public interface JpaRepository<T, ID> extends PagingAndSortingRepository<T, ID>, QueryByExampleExecutor<T> {};
    ```
  - 再看 `PagingAndSortingRepository` 的介面定義
    ```java
    public interface PagingAndSortingRepository<T, ID> extends CrudRepository<T, ID> {};
    ```
  - 可以看出 `JpaRepository` 繼承了介面 `PagingAndSortingRepository` 和 `QueryByExampleExecutor`。
    而 `PagingAndSortingRepository` 又繼承了 `CrudRepository`。
    因此，`JpaRepository` 介面同時擁有基本 `DRUD` 功能，以及分頁功能。
    `QueryByExampleExecutor<T>` 則提供根據 `Entity` 查詢的功能 (其實就是 `HQL`)。

## 寫一些 `Controller` 來測試 `JpaRepository` 的功能
  - 先下載測試 `API` 工具 `PostMan`。
  - 為測試 `JapRepository` 的功能，所以先不寫 `Service` 層，記得正式開發時要補上 `Service`。
  - 首先先準備一個 `Entity` 類別 `Customer`，裡面有 `id`、`name`、`level` 三個屬性。

  - 寫一個介面 `CustomerRepository` 實作 `JpaRepository<Customer, Long>`。
  - 寫一個 `CustomerController` 測試這個介面 (搭配 `@ResponseBody` 輸出 `JSON` 格式的資料)。

## CrudRepository<T, ID> 提供的方法
  觀察一下 `CrudRepository` 有哪些內建的方法：
  - `<S extends T> S save (S entity);`

  說明：可以回傳 `T` 型別，或是被 `T` 繼承的子類別。
  - `<S extends T> lterable<S> saveAll(lterable<S>entities);`
  - `Optional<T> findById(ID id);`  => `get()`、`isPresent()`
  - `boolean existsById(ID id);`
  - `Iterable<T> findAll();`
  - `Iterable<T> findAllById(Iterable<ID> ids);`

  - `long count();`
  - `void deleteById(ID id);`
  - `void delete(T entity);`
  - `void deleteAllById(Iterable<? extends ID> ids);`
  - `void deleteAll(Iterable<? extends T> entities);`
  - `void deleteAll();`

  測試上述方法：
  - 儲存一個 `Entity` (實體類別)
    
    `<S extends T> S save(S entity);`
  
  - 儲存多個可迭代的實體類別

    `<S extends T> Iterable<S> saveAll(Iterable<S> entities);`

  - 透過 `id` 找到 `Optional` 物件

    `Optional<T> findById(ID id);`

  - `Optional` 說明：
    
    可能包含，也可能不包含的值，通常拿來代替 `null`，因為有時 `null` 的語意較含糊不清，而導致系統報錯時，有多種可能，造成 `debug` 困難。
    
    `Optional` 物件的 `isPresent()` 方法，可以判斷是否有拿到物件。
    
    `Optional` 物件的 `get()` 方法可以拿到該物件。

  - 找到本 `Entity` 全部的資料

    `Iterable<T> findAll();`

  - 透過 `ID` 刪除某資料

    `void deleteById(ID, id);`

  - 透過 `Entity` 刪除某資料

    `void delete(T entity);`