---
title: 15. 繼承
---

# 15. 繼承
## 繼承
  YY網站所賣的商品，分成三類商品，`一般商品`、`筆電`、`食品` 每種商品會有共通的特性 (名稱、價錢) 也有會屬於自己的特性，例如：筆電商品多了『 保固期限 』，食品則有『 保存期限 』的特性。

  ```java {2-5}
  public class Product {
    // 商品名稱
    public String name;
    // 商品價錢
    public int price;
  }
  ```

  ```java {2-5}
  public class Notebook {
    // 商品名稱
    public String name;
    // 商品價錢
    public int price;

    // 保固期限 (天)
    public int warranty;
  }
  ```

  ```java {2-5}
  public class Food {
    // 商品名稱
    public String name;
    // 商品價錢
    public int price;

    // 過期日
    public String expireDate;
  }
  ```

  - 繼承的第一個目的：`提高程式的重複使用性`。
  - `DRY原則`：`Don't repeat yourself`

## 繼承 extends
  - 透過 `繼承` 機制，將共通的資料 (屬性)、方法寫在 `父類別` 中，繼承的稱為『 `子類別` 』，被繼承的稱為『 `父類別` 』。
  - 語法： `class <子類別名稱> extends <父類別名稱>`

  ```java {2-5}
  public class Product {
    // 商品名稱
    public String name;
    // 商品價錢
    public int price;
  }
  ```

  ```java
  public class Notebook extends Product {
    // 保固期限 (天)
    public int warranty;
    public Notebook(String name, int price, int warranty) {
      this.name = name;
      this.price = price;
      this.warranty = warranty;
    }
  }
  ```

  1. 一個類別，只能繼承一個父類別。 `[註]` 但可以實作多個介面。
  2. 兩者之間的關係： `Notebook『 is a 』(是一種) Product`。
  3. `子類別(Notebook)`，可以使用 `父類別(Product)` 中繼承而來的成員，例如在 `Notebook` 中使用繼承來的 `name` 屬性，可以用 `this.name`。

## 父類別存取權限 (Access Control) - private
  - `父類別` 也有可能不希望其它物件直接存取其屬性，而改以封裝的形式。
  - 下面例子中，因為父類別的屬性 `name`、`price` 被封裝起來，且為 `private`，所以 `Notebook` 類別並無法直接繼承，只能透過開放出來的 `public` 方法，子類別只能透過方法來 設定 (`setXXX`) 或 取用(`getXXX`) 屬性的值。
    
    ```java
    public class Product {
      private String name;
      private int price;

      public String getName() {
        return name;
      }
      public void setName(String name) {
        this.name = name;
      }
      public void setPrice(int price) {
        this.price = price;
      }
      ...
    }
    ```
    ```java
    public class Notebook extends Product {
      // 建構方法 Constructor
      public Notebook(String name, int price, int warranty) {
        setName(name);  // 無法直接使用 name 屬性，只能呼叫 setName
        setPrice(price);
        this.warranty = warranty;
      }
    }
    ```

## 父類別存取權限 (Access Control) - protected
  - `protected` 修飾子：只有 `同一個 package` 或者 `子類別` 才能看到該屬性及方法。
  - 父類別可以利用 `protected` 來限制，只有子類別能繼承其屬性，而其它物件無法存取其屬性。
  - 父類別的屬性 `name`、`price`，雖然被封裝，但因為屬性用 `protected` 修飾，所以 `Notebook` 類別可以直接繼承，也可以透過開放出來的 `public` 方法。

    ```java
    public class Product {
      protected String name;
      protected int price;

      public String getName() {
        return name;
      }
      public void setName(String name) {
        this.name = name;
      }
      public int getPrice() {
        return price;
      }
      ...
    }
    ```
    ```java
    public class Notebook extends Product {
      // 建構方法 Constructor
      public Notebook(String name, int price, int warranty) {
        this.name = name;
        this.price = price;
        this.warranty = warranty;
      }
    }
    ```

## 父類別存取權限 (Access Control) - 預設 (no modifier)
  - 父類別如果在其屬性上沒有加上任何修飾，則表示為同一個 `package` 的物件可以存取，不同 `package` 則不行。
    ```java
    package a;
    public class Product {
      String name;
      int price;
      public String getName() {
        return name;
      }
      public void setName(String name) {
        this.name = name;
      }
      public int getPrice() {
        return price;
      }
      ...
    }
    ```
    ```java
    package b;
    public class Notebook extends Product {
      // 建構方法 Constructor
      public Notebook(String name, int price, int warranty) {
        this.name = name;             // 錯誤，同一個 package 才能使用屬性
        this.price = price;           // 錯誤，同一個 package 才能使用屬性
        this.warranty = warranty;
      }
    }
    ```

## 父類別 Access Control Modifier
  | 父類別方法或屬性修飾子     |         子類別          | 說明                                              |
  |------------------------|:-----------------------:|-------------------------------------------------|
  | public                 |            ✓            | 公開                                             |
  | protected              |            ✓            | 只有同一個套件或子類別，才能看到該屬性及方法           |
  | no modifier 預設        | 必須在同一個 package 內   | 預設修飾子<br>只有同一個 package 可以看到該屬性及方法  |
  | private                |            ✕            | 只有該類別，才能看到該屬性及方法                      |

  | class、屬性、修飾子   | private | no modifier | protected | public |
  |---------------------|:-------:|:-----------:|:---------:|:------:|
  | 同一類別              |    ✓    |      ✓      |     ✓     |   ✓    |
  | 同 package 子類別     |         |      ✓      |     ✓     |   ✓    |
  | 同 package 其他類別   |         |      ✓      |     ✓     |   ✓    |
  | 不同 package 子類別   |         |             |     ✓     |   ✓    |
  | 不同 package 其他類別  |         |             |           |   ✓    |

## 覆寫 Override

  - 子類別可以增加屬於自己的屬性及方法。也可以『 `重新改寫` 』父類別的方法，賦予不同的行為，稱為 `Override`。
  - `覆寫` 父類別方法時，方法名稱、參數型別個數、回傳值都必須一模一樣。
    - 如果回傳值為類別，則可以回傳該類別的子類別。
    - 存取控制，不可小於原方法，例如：父類別為 `protected`，子類別只能使用：`protected` 或者 `public`。
    - 如果父類別有定義 `throws Exception` 時，不能丟出比 父類別定義更高階的 `Exception`。
  > 複習：`Overloading` 指的是，方法的名稱相同，但是參數的個數以及形態不同的方法。

## 父類方法 super
  - 子類別透過 `super` 關鍵字直接呼叫父類別的方法。
    - 子類別方法呼叫父類別方法，例如：Notebook 中的 `super.desc();`。
    - 子類別『 建構方法 』呼叫父類別『 建構方法 』，例如：`super(name, price);`。
  - 子類別物件產生時(`new`)，建構方法最開始一定要呼叫父類別的建構方法。
    - 重要：子類別建構方法中，如果有手動呼叫父類別的建構方法，因為要父類別建構方法先執行，所以必須`放置於建構方法中的『 第一行 』`。
    - 如果子類別建構方法中，沒有明確呼叫父類別的建構方法，編譯器會代為呼叫父類別的『 `無參數建構方法` 』，此時如果父類別無提供『 無參數建構方法 』，則編譯會有錯。


## 呼叫 super 建構方法
  ```java
  public class Product {
    ...
    public Product(String name, int price) {
      this.name = name;
      this.price = price;
    }
  }
  ```

  ```java
  public class Notebook extends Product {
    public Notebook(String name, int price, int warranty) {
      super(name, price); // 一定要在第一行
      // this.name = name; // 可以省略，因為由父類別的建構方法執行
      // this.price = price; // 可以省略，因為由父類別的建構方法執行
      this.warranty = warranty;
    }
  }
  ```

  > 註：建構方法只能 被建構方法呼叫 或者 被new時呼叫。

  ```java
  public class Product {
    ...
    // 沒有任何建構方法
  }
  ```

  ```java
  public class Notebook extends Product {
    public Notebook(String name, int price, int warranty) {
      super(); // 編譯器會自動產生，可不寫，如果有寫一定要在第一行
      // 若沒有呼叫任何的 super()，則 compiler 會自動塞第一行

      this.name = naem;
      this.price = price;
      this.warranty = warranty;
    }
  }
  ```

## 呼叫 super 一般方法，不一定要在第一行
  ```java
  public class Product {
    ...
    public String desc() {
      String description = "品名：" + name + "\r\n 價錢：" + price;
      return description;
    }
  }
  ```

  ```java
  public class Notebook extends Product {
    ...
    public String desc() {
      String description = super.desc();
      description = description + "\n 保固：" + warranty + "天";
      return description;
    }
  }
  ```

## Eclipse
  Eclipse 可以幫你快速利用屬性產生建構方法。

  在 `Generate Constructor using Fields` 視窗中。

  如果不勾選 `Omit (忽略) call to default constructor super()`，則會產生 `super()` 於程式的第一行。