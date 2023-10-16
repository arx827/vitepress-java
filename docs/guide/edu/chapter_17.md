---
title: 17. 多型
---

# 17. 多型 (Polymorphism)
  `POLY`：多
  `MORPHOLOGY`：型態
## 多型 (Polymorphism)
  - 一個物件可以使用多種型態來表示或操作，稱之為多型。
    - `Notebook`『 是一種 』`Product` 的型態 (因為繼承)。因此我們在操作物件時，除了利用本身型別 (`Notebook`) 外，也可以利用 `Product` 的型別來操作。
    - 通常使用時機：用父類別的『 方法 』操作不同型態的子物件。

  ```java
  Notebook notebook = new Notebook("Asus Notebook", 50000, 365);
  Product item = notebook; // Notebook 是一種 Product，所以可以轉成 Product 型別
  String info = item.desc(); // 用父類別的『 方法 』操作子類別物件
  System.out.println(info);
  ```

  - [注意]：雖然程式看起來是呼叫 `Product` 型別的 `description` 方法，但因為實際被操作的物件是 `Notebook`，真正被呼叫的方法是定義在 `Notebook` 中的 `desc()`，而不是 `Product` 中的 `desc()`。

## 使用時機
  - 多型的使用時機
    - 利用父類別型別來操作子類別的方法。
    - 好處：即便再有新的子類別，程式碼也無需修改。

  ```java
  Product item1 = new Notebook("Asus Notebook", 50000, ...);
  Product item2 = new Food("肉鬆", 100, ...);

  Product[] items = new Product[]{item1, item2};
  for (Product eachItem: items) {
    System.out.println(eachItem.desc());
  }
  ```

  ```java
  Notebook item3 = (Notebook) item1;  // 強制轉型，保證一定是 Notebook，編譯器就不會報錯。
  // 然而轉型成子類別時，因為 Product 不一定是 Notebook，所以這裡必須使用『 強制轉型 』。
  Food item4 = (Food) item1; // 執行上則會發生錯誤。
  ```

## 多型
  - `多型` 是物件導向語言中，非常重要的一個特性，允許使用『 `共通` 』的父類別來定方法 (開規格)，而子類別可以自行決定實作內容。單一窗口，多重實作。
  - 多型的特性，可以讓程式碼變得更簡潔 (因為使用父類別型態來表達，所以程式碼不需要強制轉換成子類別而變得簡潔)，重覆使用性提高 (因為繼承了父類別的方法，可以直接使用)。
  - `Override (覆寫)` 是 Java 中實現多型的其中一種機制，另一種更重要的機制是 `介面`。

## instanceof
  - 利用 `instanceof` 來判斷該物件是否具備某種型態，如果實際物件為 `instanceof` 右方指定型態，則回傳 true。

  ```java
  System.out.println(item1 instanceof Notebook);
  System.out.println(item2 instanceof Food);
  System.out.println(item1 instanceof Food);
  ```