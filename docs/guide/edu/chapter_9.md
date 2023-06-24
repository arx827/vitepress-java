---
title: 9. String字串
---

# 9. String字串
## java.lang.String
  - `String` 類別是 `Java` 中用來處理文字。相對於基本型別的 `char` 只能存單一字元，而 `String` 可以存多個字元 (字串)，使用 `雙引號 "` 表示字串。
  - `String` 在產生時，可以直接使用 `雙引號` 指定文字內容，在產生後是不能修改其內容的文字 (`immutable`)。產生方式有以下兩種。
    - `String name = "vincent";`
    - `String name = new String("vincent");`
  - 為了效能，在上述第一種 雙引號的用法上，`Java` 使用了 `String pool`，將雙引號中的 `String` 放在池中，無論程式使用幾次，都是指向同一個物件，可以重覆使用，如果使用第二種 `new` 的方式，則會是新的物件。

  ```java
  // 雙引號時，直接使用 String pool，如果 pool 中沒有，則會產生新的，如果已經存在，則回傳既有的
  String name = "vincent";
  String name1 = "vincent";
  System.out.println(name == name1);  // true

  // new String
  String name2 = new String("vincent");
  System.out.println(name == name2);  // false
  ```

  > 「 `==` 」並不是比較兩個字串是否相等，而是比較變數中的值 (`記憶體位址`) 是否一樣。

## 字串內容比較
  - 比較字串是否相同，使用的是 `String` 物件提供的方法，叫 `equals`。
  - 比較字串時，「 `不能使用` 」等於 (`==`)，「 `等於` 」在 `Java` 中比較的是物件在 `記憶體中` 的「 `位址` 」。
    ```java
    String name = "vincent";
    String name1 = "vincent";
    String name2 = new String("vincent");
    System.out.println(name.equals(name1));   // true
    System.out.println(name.equals(name2));   // true
    ```

  > 用到 `方法` 都會有括號，沒有括號為 `屬性`，e.g.： `length()`

## String 常用的方法
  - ### `int length()`
    回傳字串的長度。
    - ```java
      System.out.println("資策會".length());  // 3
      ```
  - ### `int indexOf(string)`
    判斷字串中是否包含指定的字，回傳符合的位置，從 `0` 起算，`-1` 表示找不到。
    - ```java
      System.out.println("資策會305".indexOf("305"));   // 3
      ```
  - ### `String substring(int beginIndex)`
    從 `beginIndex` 開始截字
    - ```java
      System.out.println("資策會305".substring(3));   // 305
      ```
  - ### `String substring(int beginIndex, int endIndex)`
    取 `beginIndex` 至 `endIndex` 中的字，<br>注意：`endIndex` 上的字不取
    - ```java
      System.out.println("資策會305".substring(3,5));   // 30
      ```
