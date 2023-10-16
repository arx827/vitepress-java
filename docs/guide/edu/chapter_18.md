---
title: 18. 介面
---

# 18. 介面
## 多重繼承？
  - 例如：人是一種動物，所以人繼承動物。
  - 但是人有很多職業，律師、會計師、工程師。甚至有可能多重身份，同時為律師及會計師，怎麼表達？Java只支援『 單一繼承 』，無法同時繼承二種類別，那要如何模擬各種不同的身份？
  - Java 利用介面來達到多重繼承的概念，稱為『 `實作` 』(implement) 多個介面。

## 介面 Interface
  - 在介面中，只定義方法(規格)。
  - 介面在結構上跟 `abstract class` 很像，主要拿來開立規格，然而介面沒有 `instance variable (實體變數)`，幾乎都是抽象方法，Java 8 之前在介面中的方法甚至是沒有實作的，都是抽象的方法。
  - 介面定義語法
    ```java
    public interface 介面名稱 {
      public 方法(); // 注意：方法不用實作，且 public 也可省略
    }
    ```

    ```java
    public interface Lawyer {
      void 訴訟();
    }
    ```

  - 介面中的『 抽象方法 』預設都是 `public`，『 `public` 』在介面宣告中可以省略，然而實作類別中，不能省略 `public`。

  - 介面中的方法，除了 `default`(JDK8 新功能)，皆為抽象，子類別必須實作。

## 實作介面
  - 語法
    - ```java
      class 類別名稱 implements 介面 [,介面1] [,介面2]    // 實作多個介面時，用逗號(,)隔開
      ```
    - `implements` 用在介面，稱為實作。
    - 範例：
      ```java
      class Superman implements Lawyer {
        public void 訴訟(){...}  // 此處 public 不能省略
      }
      ```
      繼承中，我們是用『 是一種 』來描述兩者關係，在介面除了『 是一種 』關係外，還多了『 具備 』什麼『 特性 』『 擁有 』什麼『 能力 』(介面上定義的方法)，來描述兩者關係。

  - 目的
    - 賦予物件『 多個 』特性(身份、規格)：無法透過繼承的方式，賦予在物件上的特性，可以透過介面獲得解決。
    - 介面被大量的應用在多型上，`利用介面操作相同特性的物件` 取代 `父類別型態操作子類別物件`。

## 實作介面範例
  ```java
  package interFace;

  public interface Lawyer {
    void 訴訟();
  }
  ```

  ```java
  package interFace;

  public interface Accountant {
    void 報稅();
  }
  ```

  ```java
  package interFace;

  public class Superman implements Lawyer, Accountant {
    public void 訴訟();
    public void 報稅();
  }
  ```

## Lab
  - 產生 `Warrantable` 介面，定義 `int` 保固天數();
  - `Notebook` 繼承 `Product` 實作 `Warrantable` 介面。
  - 產生 `Expirable` 介面，定義 `Date` 最後使用期限()，`import java.util.Date`。
  - 產生 `Food` 類別繼承 `Product`，實作 `Expirable` 介面。
  - 產生 `SimCard` 類別，實作 `Warrantable`、`Expirable` 介面。

  > [註] 雖然 `Java` 可以使用中文方法，但不建議，這裡只是為了讓大家容易熟悉介面。

## 介面
  - 簡單來說，介面跟抽象類別很像，有以下區別。
    - 介面中所有的方法都是 `abstract`，抽象類別則可以有實作方法。
    - 另外介面不需要有建議方法，只有功能上、規格上的宣告。
    - 介面上定義的常數都為 `static final`。
  - 空介面
    - 沒有定義任何方法的介面叫 `空介面`，只是拿來標註該類別可以有某些特性。
    - `java.lang.Cloneable` 以及 `java.lang.Serializable` 是兩個空介面，完全沒有定義任何方法。`Cloneable` 表示該物件可以被複製，`Serializable` 表示可以被序列化，將物件儲存起來。

## 介面繼承
  - `extends` 進行介面繼承
    ```java
    public interface 介面3 extends 介面1, 介面2 {
      // ...
    }
    ```

    實作的類別，必須將 `介面1`、`介面2`、`介面3` 中的方法都實作出來。

## 介面常數
  - 介面主要在定義方法(特性)，也可以把常用的常數或者文字型態的 `key` 值定義在介面上。
  - 變數名稱皆為大寫，利用 `_(底線)` 區隔不同字。
  - 介面不是類別，不能 `new`，所以定義在介面上的變數，必須是 `static`。
  - 介面主要在定義規格(特性)，因此變數不能重新指定值，必須是 `final`。
  - `public static final` 可以省略

    ```java
    public interface Warrantable {
      public static final int MAX_WARRANTY = 360;
    }
    ```
    可簡化為
    ```java
    public interface Warrantable {
      int MAX_WARRANTY = 360;
    }
    ```

## default & static JDK 8
  - JDK 8 後，介面支援實作方法，利用 `default` 或者 `static` 關鍵字
    - `default`、`static` 方法替介面提供了預設可能性，功能上幾乎類似 `abstract class`。讓『 多重實作 』幾乎等於『 多重繼承 』，唯一的差異在於繼承可以繼承父類別的實體變數，但實作介面仍然只有方法。
    - `default` 方法，可以於實作時被覆蓋 (override)。
    - `static` 方法，於實作類別中，不能被覆寫。
    - `default`、`static` 二者不能同時使用。
      範例：
        ```java
        public interface Expirable {
          default Date 最後使用期限() {
            return Product.getDate(2018, 11, 31);
          }
        }
        ```

