---
title: 13. 分頁物件 Page 的實作與應用
---

# 13. 分頁物件 Page 的實作與應用
## 分頁功能的物件 `PagingAndSortingRepository`
  ```java
  public interface PagingAndSortingRepository<T, ID> extends CrudRepository<T, ID> {
    Iterable<T> findAll(Sort sort);
    Page<T> findAll(Pageable pageable);
  }
  ```
  - `Sort` 可以決定 `降冪` 或 `升冪` 排序：
    - `Sort.Direction.DESC` 為 降冪排序
    - `Sort.Direction.ASC` 為 升冪排序

## Pageable 物件的使用
  - 分頁功能常用的方式：
    - 透過 `PageRequest.of` 拿到 `Pageable` 物件：
  - `Pageable request = PageRequest.of` (從第幾頁開始(0)、一頁幾筆資料、排序方式、根據 `Entity` 哪一個屬性排序)；
    - 例如：
      ```java
      Pageable request = PageRequest.of(0, 3, Sort.Direction.DESC, "added");
      ```
    - 表示從第 0 頁開始，根據 `added` 屬性 降冪排序。
  - 拿到 `Pageable` 物件後，就可以使用 `PagingAndSortingRepository` 內的 `findAll(Pageable pageable)` 方法取得 `Page` 物件。

## Page 物件常用的方法
  - 取得 `Page` 物件內的總頁數
    - `int getTotalPages();`
  - 取得 `Page` 物件元素的總數 (幾筆資料)
    - `long getTotalElements();`
  - 取得目前的頁數 (Page 繼承的 Slice 物件內的方法)
    - `int getNumber();`
  - 取得 `Page` 物件內的資料
    - `List<T> getContent();`

  > 若在 `jsp` 內使用 `Page` 物件，記得使用 `物件.屬性` 的方式拿到屬性內的值：
  > 例如：
  > `${page.totalPages}`，`${page.content}`，`${page.number}`