---
title: 11. 方法
---

# 11. 方法
## 方法
  - 程式語言設計中，將可重覆執行的程式碼群組起來，變成方法
  - 例如：`Java` 程式的進入點
    - `public static void main(String[] args)`
      - `public static`：修飾存取
      - `void`：回傳值
      - `main`：方法名稱
      - `(String[] args)`：(傳入參數1, 傳入參數2, ...)

## 方法範例
  - 方法的參數傳入可以有多組，以 `逗號` 分開
  - 無回傳值方法上，宣告 `void`
  - 方法的回傳值，只能有一個，利用 `return` 回傳。
    ```java
    public class FuncTest{
      public static void main(String[] args){
        int sum = add(1, 2);
        System.out.println(sum);
      }

      public static int add(int a, int b){
        int sum = a + b;
        return sum;
      }
    }
    ```

## 物件方法範例
  `類別` 可以定義 `方法`，但一定要有物件實體 (要 `new`) 才能呼叫其方法，而且可以使用物件屬性。
  ```java
  public class People{
    double height;
    double weight;

    // BMI = 體重 (公斤) / 身高 (公尺) 平方
    public double getBMI() {
      return weight / (height * height);
    }
  }
  ```

  ```java
  public class PeopleTest {
    public static void main(String[] args) {
      People p = new People();  // 要先有物件實體，才能使用
      p.height = 1.7;
      p.weight = 70;
      double BMI = p.getBMI();
      System.out.println("BMI = " + BMI);
    }
  }
  ```

## static 類別成員
  ```java
  People p1 = new People();
  p1.height = 1.7;
  p1.weight = 70;
  People p2 = new People();
  p2.height = 1.8;
  p2.weight = 75;
  ```
  | Heap | class People | `double height;`<br>`double weight;`<br>`double overWeightBMI = 24;` |
  |------|--------------|----------------------------------------------------------------------|
  |      | p1           | `height = 1.7;`<br>`weight = 70;`<br>`overWeightBMI = 24;`           |
  |      | p2           | `height = 1.8;`<br>`weight = 75;`<br>`overWeightBMI = 24;`           |

  - 一般屬性在 `new` 物件時，會在記憶體中產生相對應屬性的空間。以 `overWeightBMI` 屬性來說，其實是個固定的常數，每次產生物件如果都額外產生一個空間，則十分浪費。可以利用 `static` 關鍵字來改善這個問題。
  - `static` 關鍵字，表示該屬性屬於類別，為類別成員。建立多個物件並不會額外產生多個 `overWeightBMI` 存放空間。
  
  ```java
  People p1 = new People();
  p1.height = 1.7;
  p1.weight = 70;
  People p2 = new People();
  p2.height = 1.8;
  p2.weight = 75;
  System.out.println(People.overWeightBMI);
  ```
  | Heap | class People | `double height;`<br>`double weight;`<br>`static double overWeightBMI = 24;` |
  |------|--------------|-----------------------------------------------------------------------------|
  |      | p1           | `height = 1.7;`<br>`weight = 70;`                                           |
  |      | p2           | `height = 1.8;`<br>`weight = 75;`                                           |

  - `static` 關鍵字，表示該屬性屬於 `類別`。為類別成員。建立多個物件並不會額外產生。存取時利用 `<類別名稱>.<屬性>`
  - 例如：`People.overWeightBMI` 即可取得。

## static (靜態) 方法
  - `static` 方法，綁在類別上，不需要物件即可呼叫。
  - 方法上加上 `static` 修飾字，表示該方法是隨著「 `類別` 」存在，「 `不需要` 」物件實體，即可使用，只要利用 `<類別名稱>.<方法>()` 即可呼叫，也稱為 `類別方法 (Class method)`，靜態方法要寫在類別內。
  - 靜態方法「 `不需要` 」物件實體，使用簡單方便。計算上所需要的資訊皆透過參數傳入(`w h`)。因為沒有物件實體，無法使用物件的屬性(`height`, `weight`)。
  - 靜態方法因為方便，常被使用在不需太多參數的簡單計算。例如：`Math.pow()`、`Math.sqrt()`。
  - 靜態方法只能存取靜態屬性 (`People.overWeightBMI`) 或靜態方法。

  ```java
  public class People{
    static double overWeightBMI = 24;
    public static BMI(double h, double w) {
      return w / h * h;
    }
  }
  ```

  ```java
  public class PeopleTest{
    public static void main(String[] args) {
      // 使用靜態方法不需物件實體，有 類別名稱.方法() 就可以呼叫
      double BMI = People.BMI(1.7, 70.0);
      System.out.println("BMI = " + BMI);
    }
  }
  ```

  - 靜態方法，除了可以透過類別直接呼叫外，其實也可以透過實體物件呼叫，但是 `不建議`，因為容易讓人誤以為是一般的物件方法。

  ```java
  public class PeopleTest{
    public static void main(String[] args) {
      People p = new People();
      p.height = 1.7;
      p.weight = 70;
      double BMI = p.BMI(1.7, 70.0);
      // 靜態方法也可以透過物件呼叫，但不建議
      System.out.println(BMI);
    }
  }
  ```

  - `static` 方法，因為不需要物件即可呼叫，`不可以使用該類別「 非靜態 」的方法以及屬性`，因為一般的方法及屬性是建立在有物件才存在。
  - `static 方法可以呼叫 static 方法`

    ```java
    public class People {
      double height;
      double weight;
      public static double BMI() {
        return weight / (height * height);    // 此處無法使用「 非靜態 」的方法以及屬性
      }
    }
    ```

  - 一般方法呼叫 `static` 方法是沒問題的，因為靜態方法被呼叫並沒有什麼限制。
    ```java
    public class People {
      double height;
      double weight;

      // BMI = 體重 (公斤) / 身高平方
      public double getBMI() {
        double BMI = People.BMI(height, weight);
        return BMI;
      }

      public static double BMI(double h, double w) {
        return w / (h * h);
      }
    }
    ```

## String static method
  ![edu-chapter-11-1](/edu/edu-chapter-11-1.png)
  `static 方法`，通常拿來當做常用的工具程式，其結果回傳只跟傳入參數有關
  ```java
  String joinString = String.join(",", "a", "b", "c"); // 回傳 a, b, c
  ```

## String instance method
  ![edu-chapter-11-2](/edu/edu-chapter-11-2.png)
  `instance method`，為需要物件才能呼叫，其結果回傳跟資料本身有關。

  ```java
  String aString = "Vincent";
  int index = aString.indexOf("t");   // 回傳 6
  ```

## Overloading (覆載)
  - `Overloading` 指的是方法的名稱相同，但是參數的個數或形態不同。
    - 例如：`System.out.print` 能印各種資料，是因為 `overloading` 中有各種參數。
      - `System.out.println(boolean b)`
      - `System.out.println(String s)`
      - `System.out.println(int i)`
      - `System.out.println(long l)`

  - 範例
    ```java
    public class Calculator {
      public int add(int a, int b) {
        int sum = a + b;
        return sum;
      }

      public double add(double a, double b) {
        double sum = a + b;
        return sum;
      }

      public float add(float a, float b) {
        float sum = a + b;
        return sum;
      }
    }
    ```

  - 限制：無法利用不同的回傳值型態來達到 `overloading`
    ```java
    // 編譯會有錯，因為僅有回傳值型態不同
    public int add(int a, int b) {
      int sum = a + b;
      return sum;
    }
    public long add(int a, int b) {
      long sum = a + b;
      return sum;
    }
    ```

