---
title: 14. 建構方法 Constructor
---

# 14. 建構方法 Constructor
## 建構方法 Constructor
  - 建構方法為產生物件(`new`)時使用的方法，`跟類別同名，但沒有『 回傳值 』`，主要 `在物件被產生時候執行，通常用來初始化屬性的預設值`。
  - 使用 `new` 呼叫建構方法，在執行時 `Java` 會分配記憶體給該物件。
    - 例如： `Car car = new Car();`
  - 在預設情況(沒有手動提供任何構建方法時)，`compiler` 會自動生成一個沒有任何參數的建構方法，以供呼叫。所以我們才能使用 `new Car()`、`new Employee()`。

    ```java
    public class Car {
      ...
    }
    public static void main(String[] args) {
      Car car = new Car();
    }
    ```
    等同於
    ```java
    public class Car {
      // 編譯器會自動產生預設建構方法
      public Car() {
        ...
      }
    }
    ```

  - 『 注意 』一旦手動提供任何的建構方法，則 `compiler` 就不會自動生成預設建構方法。
    ```java
    public class Car {
      private String model;
      private int price;
      private char color;
      // 新增建構方法來初始化顏色
      public Car(char color) {
        this.color = color;
      }
      ...
    }
    ```
    ```java
    // TestCar.java
    public static void main(String[] args) {
      Car car = new Car();    // 編譯有錯
      Car car = new Car('w');   // 這裡只能呼叫有提供的建構方法
    }
    ```

## Overloaded Constructors
  - 類別可以宣告多個建構方法(`覆載`)，目的：
    - 利用不同的參數組合形成不同建構方法 (`Overloaded Constructor`)，來達到提供某些屬性的預設值或者預設行為。

  - 多個建構方法的情況下，可以使用 `this(...)`，來呼叫別的建構方法。

  - 『 `重要` 』`this` 方式呼叫其他建構方法，必須放在第一行。

  - 建構方法被呼叫的方式只有兩種
    1. `new 建構方法()`
    2. 其他『 建構方法 』(一般方法不行)，利用 `this(xxx, xxx)` 方式呼叫

  ```java
  public class Car {
    private String model;
    private int price;
    private char color;

    public Car(String model, char color) {
      setModel(model);
      this.color = color;
    }

    // 多載
    public Car(char color) {
      this("Yaris", color);       // 此 this() 指 Car()
    }
  }

  Car car = new Car('W');     // 參數不同的建構方法
  ```

## 建構方法 存取控制
  | Modifier         | Class | Package | Subclass | World | 備註                                            |
  |------------------|:-----:|:-------:|:--------:|:-----:|-------------------------------------------------|
  | public           |   ✓   |    ✓    |    ✓     |   ✓   | 公開，表示其他類別都可以看到該屬性或者方法             |
  | protected        |   ✓   |    ✓    |    ✓     |       | 只有同一個套件或者子類別才能看到該屬性及方法           |
  | no modifier 預設  |   ✓   |    ✓    |          |       | 任何修飾子都沒有加，同一個package才能看到該屬性及方法  |
  | private          |   ✓   |         |          |       | 只有該類別才能看到該屬性及方法                       |

## Eclipse
  Eclipse 可以幫你快速利用屬性產生建構方法

  - 程式空白處按右鍵，選 `Source/Generate Constructor using Fields`

    ![edu-chapter-14-1](/edu/edu-chapter-14-1.png)

  - 選擇要參與的屬性，先勾選 `Omit call to default constructor super()`，後面繼承章節再說明。

    ![edu-chapter-14-2](/edu/edu-chapter-14-2.png)