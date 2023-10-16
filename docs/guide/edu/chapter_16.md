---
title: 16. 修飾子
---

# 16. 修飾子
## Afccess Control Modifier 使用的位置
  |                  | 類別*               | 建構方法  | 屬性實體變數   | 方法 |
  |------------------|--------------------|----------|--------------|------|
  | public           | ✓                  | ✓        | ✓            | ✓    |
  | protected        |                    | ✓        | ✓            | ✓    |
  | no modifier 預設 | ✓                  | ✓        | ✓            | ✓    |
  | private          | **Inner class 可用 | ✓        | ✓            | ✓    |

## final 修飾子
  - `final` 可以用在類別、方法、變數以及物件參考。
    - `類別`：表示該類別無法被繼承，不會有子類別。
    - `方法`：表示該方法不能被覆寫(Override)改變其行為。
    - `變數`：final 變數再給定值後，不能再利用等於(=)指定另外的值。
      - `物件參考`：無法指定為另外的物件，不能再利用等於(=)指定為其他物件。

## static 修飾子
  - 類別中的方法或者屬性如果宣告為 `static`。
    - 表示此方法或屬性為類別等級，又稱為類別(靜態)屬性(變數)以及類別(靜態)方法。
    - [重點] 不用物件即可呼叫 `static` 方法或者屬性。
  - 類別本身在 `JVM` 啟動時，自動被載入至 `Heap 記憶體` 中，`static` 變數及方法也一併隨著類別被載入。
    - `static` 方法不能呼叫 `non-static` 方法(一般方法)及屬性，因為一般方法及屬性都需要先有物件才能使用。
    - `static` 方法中，也不能使用 `this 關鍵字`，因為 `static` 是 `class` 等級不需要的物件， `this` 指的是物件本身。

## static final
  - 系統中常利用 `static final` 來定義系統常數，例如：圓周率，優點是節省記憶體，定義為類別常數時，不會因為每產生一個物件就多一個實體變數(屬性)
    - 例如：`public static final double TAX = 0.5;`

## static block
  - `static` 區塊會隨著類別被載入記憶體時執行，只會『 執行一次 』。
    ```java
    public class Product {
      public static double TAX;
      static {
        TAX = 0.5;
        System.out.println("static block");
      }
    }

    public class TestStatic {
      public static void main(String[] args) {
        System.out.println(Calculator.tax);
      }
    }
    ```

## abstract 修飾子
  - `abstract` 為抽象，用在類別及方法的修飾子上。
    - 1. `abstract 方法`，該方法沒有實作，只有方法上的定義，通常是留給子類別實作，也就是父類別並不提供基本行為。
      - `public abstract void calculate(int price);`
    - 2. `abstract 類別`，一旦該類別中有任何一個方法為 `abstract`，則該類別稱為『 抽象類別 abstract class 』，必須於 class 前加上 `abstract` 修飾。例如：`public abstract class Product`
      - [注意] 抽象類別無法用 `new` 來產生物件，既然有方法沒有實作，如果可以產生物件呼叫到該方法時，就會有問題。
      - 類別中就算沒有抽象方法，也是可以加上 `abstract` 變成抽象類別，不希望該類別用來產生物件時，可以利用 `abstract`。
  - 使用時機：利用抽象類別將方法定義好，實作留給『 `子類別` 』來發揮。

## final、static、abstract 使用的位置
  |          | 類別                | 屬性           | 方法           | 建構方法 |
  |----------|--------------------|----------------|--------------|----------|
  | final    | ✓<br>不可繼承        | ✓<br>不可改變  | ✓<br>不可覆寫  |          |
  | static   | inner class 才有可能 | ✓<br>class等級 | ✓<br>class等級 |          |
  | abstract | ✓<br>抽象類別        |                | ✓<br>抽象方法  |          |
