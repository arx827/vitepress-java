---
title: 22. 集合 Collection
---

# 22. 集合 Collection
## 集合
  - 存放大量資料時，第一個想到的是 `陣列`，陣列可以存放大量資料，但陣列大小無法變更，其次在某些應用過程中，會有需要存放 `key value` 型式的資料，例如：身份證字號對應到某個人，或者存放資料中，不能重複的需求 (投票不能重複)，就需要利用 `集合`。

  - `java` 存放大量資料的型式，分成兩大介面：
    - 第一類是 `java.util.Collection`，有兩個子介面：
      - `java.util.Set`，可以物件，但放在 `Set` 中的物件不能重複。
      - `java.util.List`，依『 `加入的順序` 』排列存放的物件。
    - 第二類介面 `java.util.Map`
      - 透過特定的 `key-value` 存放物件，`會員代號1`(key) 為 `林xx`(value)，`會員代號2` 為 `王xx`
      - 沒有順序。

  ![edu-chapter-22-1](/edu/edu-chapter-22-1.png)

## ArrayList 為 List 介面中最常用的類別
  | 方法                          | 說明                     | 回傳                                    |
  |------------------------------|--------------------------|----------------------------------------|
  | `add(Object obj)`            | 新增物件obj，不能放基本型別  | boolean<br>新增是否成功                  |
  | `add(int index, Object obj)` | 新增物件obj在指定的位置     | boolean<br>新增是否成功                  |
  | `get(int index)`             | 取得指定位置物件           | 該位置的物件                             |
  | `remove(Object obj)`         | 移除List中指定物件         | 如果物件在list中，<br>回傳true否則為false  |
  | `indexOf(Object obj)`        | 取得物件的順序             | int位置                                 |
  | `set(int index, Object obj)` | 設定指定位置上的物件        | 原本該位置上的物件                        |
  | `size()`                     | 取得總數                  | 回傳總數                                 |

## ArrayList
  ```java
  public static void main(String[] args) {
    List list = new ArrayList();
    list.add("Hello");
    list.add("World");
    list.add(3.0);

    System.out.println("個數 = " + list.size());
    System.out.println("index 0 為 " + list.get(0));
    System.out.println("index 1 為 " + list.get(1));

    // 利用 for 迴圈 以及 get(int) 訪問所有元素範例
    for (int i = 0; i < list.size(); i++) {
      Object item = list.get(i);
      System.out.println(item);
    }
  }
  ```

  > 不用宣告大小，隨著加入物件，會自動變大容量。

## Wrapper classes
  `Java` 中除了基本型別外，其他都是物件，如果需要將基本型別轉成物件，必須透過 `Wrapper class`。

  | 基本型別 (非物件) | 包裝類別 (物件)       | 基本型別 (非物件) | 包裝類別 (物件)         |
  |---------------- |---------------------|----------------|-----------------------|
  | `byte`          | `java.lang.Byte`    | `float`        | `java.lang.Float`     |
  | `short`         | `java.lang.Short`   | `double`       | `java.lang.Double`    |
  | `int`           | `java.lang.Integer` | `char`         | `java.lang.Character` |
  | `long`          | `java.lang.Long`    | `boolean`      | `java.lang.Boolean`   |

  - `boxing`： 把基本型別包裝成物件
    - ```java
      Integer a = new Integer(1);
      ```
  - `unboxing`： 取出基本型別的值
    - ```java
      int x = a.intValue();
      ```
  - `Autoboxing`： 在需要物件的地方，直接用基本型態，會自動轉換成相對應的物件型態，(`JDK 1.5`)
    - ```java
      Integer a = 1; //自動轉換成 wrapper 型態
      ```
    - ```java
      int x = new Integer(1);
      ```
  - 文字轉數字 `Integer.valueOf`、`Double.valueOf`、`Float.valueOf`
    - ```java
      Integer x = Integer.valueOf("1");
      ```
    - ```java
      int x = Integer.parseInt("1");
      ```

    ```java
    List list = new ArrayList();
    list.add(3.0);  // autoboxing
    list.add(new Double(3.0));
    list.add(Double.valueOf(3.0));
    list.add(Double.valueOf("3.0"));
    ```

## Iterable & Iterator
  - `Iterable` 為 `Collection` 的父介面，而 `Collection` 又為 `List` 的父介面，其中 `Iteratable` 介面的 `Iterator()` 方法，會回傳 `Iterator` 物件。此物件可以利用 `while` 迴圈搭配以下方法達成訪問集合中的各元素。
    - `hasNext()`，如果游標的下方有物件，則回傳 `true`，如果無物件，則回傳 `false`。
    - `next()`，將游標往下，回傳游標指向的物件。
  - `Collection` 子類別 (`List`、`Set`) 都有這種方法，都可以透過 `iterator` 機制來訪問所有元素。
  - 有實作 `Iterable` 的物件，同時還可以利用 `For-each loop` 來訪問所有元素。

## ArrayList iterator & foreach

## HashSet

## 有順序的 Set SortedSet

## HashMap

## java.util.HashMap keySet()

## Map.Entry

## Lab

## Collection

## Map