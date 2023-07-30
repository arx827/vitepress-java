---
title: 13. 封裝
---

# 13. 封裝
## 封裝
  - `封裝` 的目的為隱藏目前設計類別的資訊。凡該類別中有不適合其他類別直接存取的屬性，都可以利用「 `封裝` 」來保護。
    ```java
    Car car = new Car();
    car.model = "Prius";
    car.price = 100000;
    System.out.println("售出" + car.model + "," + car.price);
    ```

    | 車款 | Yaris  | Prius   |
    |-----|--------|---------|
    | 售價 | 575000 | 1099000 |

    當外部類別能設定 `car.price` 時，售價就會無法控制，必須把價錢給封裝起來。
  
## 存取控制
  | 層級                | 類別內 | 同一套件 | 子類別 | 其他類別 | 備註                    |
  |--------------------|-------|---------|-------|--------|-------------------------|
  | `public`           | ✓     | ✓       | ✓     | ✓       | 宣告 `public`，表示其他類別都可以看到該屬性或者方法            |
  | `protected`        | ✓     | ✓       | ✓     |         | 只有同一個類別或者自類別或者同一 `package`，可以看到該屬性及方法 |
  | `no modifier` 預設 | ✓      | ✓       |       |         | 任何修飾子都沒有加，同一個 `package` 才能看到該屬性及方法     |
  | `private`          | ✓     |         |       |         | 只有該類別本身才能看到該屬性及方法                 |

  物件屬性預設值為0

  `封裝` 的過程，屬性通常設定為 `private`，防止其他物件直接存取，再透過 `public` 的『 `方法` 』開放屬性的資料，`TestCar` 就無法直接利用 `點(.)` 來存取 `Car` 的屬性，如果 `區域變數` 名稱與 `實體變數` 一樣，利用 `this.xxx` 來表示實體變數，`this` 表示目前的物件，其實也就是目前物件的記憶體位置。

  ```java
  // Car.java
  public class Car {
    private String model;
    private int price;

    public String getModel() {
      return model;
    }

    public void setModel(String model) {
      this.model = model;
      // 這裡一定要用 this.model 來取得實體變數，因為跟區域變數同名
    }

    public int getPrice() {
      return this.price;
      // 這裡可以用 price 來代替 this.price，因為沒有變數同名的問題
    }
  }
  ```

  ```java
  // TestCar.java
  public static void main(String[] args) {
    Car car = new Car();
    car.setModel("Yaris");
    System.out.println(car.getModel() + "," + car.getPrice());
  }
  ```

  方法中，如果有 `區域變數` 跟 `屬性` 同名，區域變數權重比較高，會蓋掉屬性。

## Eclipse getter & setter
  - `按右鍵 / Source / Generate Getter and Setter`

  ![edu-chapter-13-1](/edu/edu-chapter-13-1.png)

  - 勾選 設定要產生的屬性

  ![edu-chapter-13-2](/edu/edu-chapter-13-2.png)

  - 在方法中可以加入其他的邏輯
    ```java
    public class Car {
      private String model;
      private int price;

      public String getModel() {
        return model;
      }

      public void setModel(String model) {
        this.model = model;
        if(model.equals("Yaris")) {
          this.price = 575000;
        }else if(model.equals("Prius")) {
          this.price = 1099000;
        }else{
          System.out.println("錯誤的型號");
        }
      }

      public int getPrice() {
        return this.price;
      }
    }
    ```

    ```java
    public static void main(String[] args) {
      Car car = new Car();
      car.setModel("Yaris");
      System.out.println("售出" + car.getModel() + "，" + car.getPrice())
    }
    ```
  
## 方法中使用實體變數
  在 `getPrice` 的方法內，要使用實體變數 `price`，有以下三種方式。
  - 1. 可以直接使用 `price`。
  - 2. 可以使用 `this.price`，`this` 表示目前物件，表示目前物件『 的 』`price` 實體變數。
  - 3. 也可以使用 `Car.this.price`，`lambda or anonymous class` 中才有機會用到。

  ```java
  public class Car {
    private int price;

    public String getPrice() {
      return price;
      return this.price;      // 這種寫法比較常見
      return Car.this.price;
    }
  }
  ```

## 封裝
  - 通常設計上會將屬性設定為 `private`，將需要開放出去的屬性，改用 `public` 方法，讓其他類別可以存取。
  - 這些 `public` 的方法，可以加入適當的邏輯，以防止其他類別不當操作 (例如：設定不對的值)。

## Variable Scope 變數有效範圍
  ```java
  public class Car {
    private String model;       // 實體變數，model、price 有效範圍達整個 class
    private int price;

    public String getModel() {
      return model;
    }

    public void setModel(String model) {
      this.model = model;     // 區域變數，model 有效範圍只有在前後大括號
      ...
    }

    public int getPrice() {
      return this.price;
    }
  }
  ```