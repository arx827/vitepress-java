---
title: 14. JpaRepository 的 Query
---

# 14. JpaRepository 的 Query
## JpaRepository 的 Query 方法
  - 即 `HQL`，在 `SpringJpa` 內 `Hibernate` 交由 `Spring` 控管，因此使用的是 `JPA` 的 `API` 名稱： `JPQL (Java Persistence Query Language)`，用法與 `HQL (Hibernate Query Language)` 相同，是操作 `Entity` 內的屬性，而非 `Table` 中的欄位。 
  - `JpaRepository` 在寫 `HQL`，當需要參數時，有比較方便的編寫方式。

## JpaRepository 的 HQL 中參數的寫法
  - 1. 根據參數位置 (第幾個問號對應底下方法第幾個參數)
    ```java
    @Query(value = "from customer where name = ?1")
    Person findCustomerByName(String Name);
    ```
  - 2. 用 `:` 及 `@Raram` 做對應
    ```java
    @Query("from Customer where name = :name")
    public List<Customer> findByName(@Param(value = "name") String name);
    ```

## JpaRepository 中寫原生 SQL 的寫法
  若要使用原生 `SQL` 做查詢，須在後面加上 `nativeQuery = true`。
  ```java
  @Query(value = "SELECT * FROM Customer WHERE name = :name", nativeQuery = true)
  public List<Customer> findByName2(@Param(value = "name") String name);
  ```

  > 用 `原生 SQL 查詢` `(nativeQuery = true)` 就不是對 `Entity` 操作了，會變為對 `Table` 操作，因此操作的屬性就變為 `table` 裡的屬性。

## JpaRepository 中 @Query 須注意
  用 `@Query` 做查詢時，若是需要 修改資料 或 刪除資料 的情況，須在 `@Query` 上方加入 `@Modifying` 標註，如：
  - 預設為 `@Transational(ReadOnly = true)`
  - 故需要加 `@Transational` 覆蓋原預設設定
  ```java
  @Modifying
  @Query(value = "delete from customer where id = ?1", nativeQuery = true)
  void delAccount(int id);
  ```

## JpaRepository 中直接透過方法名稱查詢
  `Spring` 提供了一套可以透過命名規則進行查詢。這套機制會把方法過濾一些關鍵字，比如： `find...By`, `read...By`, `query...By`, `count...By` 和 `get... By`。
  - [官方參考文件 (搜尋 `Keyword Sample JPQL snippet`)](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation)

  | Keyword            | Sample                                                  | JPQL snippet                                                   |
  |--------------------|---------------------------------------------------------|----------------------------------------------------------------|
  | `Distinct`           | `findDistinctByLastnameAndFirstname`                      | `select distinct …​ where x.lastname = ?1 and x.firstname = ?2`  |
  | `And`                | `findByLastnameAndFirstname`                             | … `where x.lastname = ?1 and x.firstname = ?2`                   |
  | `Or`                 | `findByLastnameOrFirstname`                               | … `where x.lastname = ?1 or x.firstname = ?2`                    |
  | `Is`, `Equals`         | `findByFirstname`,`findByFirstnameIs`,`findByFirstnameEquals` | … `where x.firstname = ?1`                                       |
  | `Between`            | `findByStartDateBetween`                                  | … `where x.startDate between ?1 and ?2`                          |
  | `LessThan`           | `findByAgeLessThan`                                       | … `where x.age < ?1`                                             |
  | `LessThanEqual`      | `findByAgeLessThanEqual`                                  | … `where x.age <= ?1`                                            |
  | `GreaterThan`        | `findByAgeGreaterThan`                                    | … `where x.age > ?1`                                             |
  | `GreaterThanEqual`   | `findByAgeGreaterThanEqual`                               | … `where x.age >= ?1`                                            |
  | `After`              | `findByStartDateAfter`                                    | … `where x.startDate > ?1`                                       |
  | `Before`             | `findByStartDateBefore`                                   | … `where x.startDate < ?1`                                      |
  | `IsNull`, `Null`       | `findByAge(Is)Null`                                       | … `where x.age is null`                                         |
  | `IsNotNull`, `NotNull` | `findByAge(Is)NotNull`                                    | … `where x.age not null`                                        |
  | `Like`               | `findByFirstnameLike`                                     | … `where x.firstname like ?1`                                   |
  | `NotLike`            | `findByFirstnameNotLike`                                  | … `where x.firstname not like ?1`                                |
  | `StartingWith`       | `findByFirstnameStartingWith`                             | … `where x.firstname like ?1 (parameter bound with appended %)`  |
  | `EndingWith`         | `findByFirstnameEndingWith`                               | … `where x.firstname like ?1 (parameter bound with prepended %)` |
  | `Containing`         | `findByFirstnameContaining`                               | … `where x.firstname like ?1 (parameter bound wrapped in %)`     |
  | `OrderBy`            | `findByAgeOrderByLastnameDesc`                            | … `where x.age = ?1 order by x.lastname desc`                    |
  | `Not`                | `findByLastnameNot`                                       | … `where x.lastname <> ?1`                                       |
  | `In`                 | `findByAgeIn(Collection<Age> ages) `                      | … `where x.age in ?1`                                            |
  | `NotIn`              | `findByAgeNotIn(Collection<Age> ages) `                   | … `where x.age not in ?1`                                        |
  | `True`               | `findByActiveTrue()`                                      | … `where x.active = true`                                        |
  | `False`              | `findByActiveFalse() `                                    | … `where x.active = false`                                      |
  | `IgnoreCase`         | `findByFirstnameIgnoreCase `                              | … `where UPPER(x.firstname) = UPPER(?1)`                         |