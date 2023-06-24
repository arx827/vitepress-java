---
title: 7. 類別Class 及 物件Object
---

# 7. 類別Class 及 物件Object
## 類別及物件
  - `Java` 是 `物件導向 (object-oriented)` 語言，提供以物件方式進行程式設計，`類別 (class)` 則代表了物件的藍圖。
    - 例如：設計師規劃了藍圖，說明房子中有幾房幾廳。而遵循藍圖蓋出來的房子則為蓋出來的實體物件，一張設計圖 (`類別`) 可以蓋出很多一樣的房子 (`物件`)。
  - 程式中的物件可以有 `屬性` 及 `方法`，`屬性` 好比物件「 `擁有` 」的東西，而 `方法` 則表示該物件能執行的「 `行為或功能` 」。屬性及方法都必須定義在 `類別` 中。
    - 例如：車子擁有輪胎 (`屬性`) 可以跑 (`方法`)。
  - `類別` 可以想像成一個自定義的資料型態，來擴充原本基本資料型別。

## 類別Class及物件
  - 類別中定義物件擁有的 `屬性` 及 `方法`，例如：員工會有編號 empno 會有姓名 name。
  - 「 重要 」類別的名稱，如果為 `Employee`，則檔案名稱必須為 `Employee.java`，類別的命名首字大寫。
  - 使用「 `new` 」關鍵字來「 `產生` 」一個實際可操作的「 `物件` 」並指定變數。
    - 所謂產生就是在 `記憶體` 中畫出一塊區域來儲存這個物件所需要的資料。
  - 物件宣告方式
    - `類別名稱 變數名稱 = new 類別名稱();`
      ```java
      public class Employee {
        int empno;   // 員工編號     (屬性，又稱為實體變數)
        String name; // 員工姓名     (屬性，又稱為實體變數)
      }
      public class TestEmployee {
        public static void main(String[] args) {
          Employee emp = new Employee();    // 記憶體的區塊，new 才會有記憶體空間，才能放資料。
          emp.name = 'Vincent';
          emp.empno = 1;
        }
      }
      ```

## 實體變數 Instance Variable
  - `實體變數` 為定義在類別內，宣告在方法外
    - 例如： `int empno;  // 員工編號`
    - 每一個物件 (`new Employee()`) 都會擁有屬於該物件的`實體變數`，跟隨著該物件。
    - `實體變數` 是一種「 `擁有` 」的概念，使用 `.` 即可指定或者取得實體變數的值。
      - 例如： `employeeA.name`
      ```java
      Employee emp1 = new Employee();
      emp1.name = "vincent"; // emp1 物件有自己的實體變數
      Employee emp2 = new Employee();
      emp2.name = "Andy"; // emp2 物件也會有自己的實體變數
      ```

## 物件形式變數 Reference Variable
  - 在 `Java` 中，除了基本型別所定義的變數之外 (例如： `int a = 1;` )，其他類別形式的變數 (例如： `Employee emp = new Employee()`)，變數的內容都為該物件在「 `記憶體中的位址` 」，稱為「 `物件參考變數` 」，`(物件)參考變數中的值，為該物件位於記憶體中的位址`。
  - 物件產生時，存放在記憶體的「 `heap` 」區塊，而非 `stack` 區。
  - 在其他語言中，就是 `指標`。

## 記憶體位址
  - `物件` 在記憶體中，必須有 `記憶體的位址` 才能找到。
  - `物件參考變數`，存放的是該物件的記憶體「 `位址` 」。
  - `基本型別變數`，存放在實際上的「 `值` 」。

  ```java
  public static void main(String[] args){
    // stack
    int a = 1;
    Employee emp = new Employee();

    // heap
    emp.name = "Vincent";
    emp.empno = 1;
  }
  ```

  - ### stack
  |a|1|
  |---|---|
  |emp|10080004 ( `對應 heap 記憶體位址` )|

  - ### heap
  |10080004|Employee|
  |---|---|
  ||`name = "Vincent"`<br>`empno = 1`|

## == 相等
  ```java
  public static void main(String[] args){
    Employee emp = new Employee();
    emp.name = "Vincent";
    emp.empno = 1;
    Employee emp2 = new Employee();
    emp2.empno = 2;
    System.out.println(emp == emp2);   // false
  }
  ```

  - ### stack
  |emp|10080004 ( `對應 heap 記憶體位址` )|
  |---|---|
  |emp2|10080020 ( `對應 heap 記憶體位址` )|

  - ### heap
  |10080004|Employee|
  |---|---|
  ||`name = "Vincent"`<br>`empno = 1`|
  |10080020|Employee|
  ||`name = `<br>`empno = 2`|

  `==` 在 `Java` 中比較的是 `變數中存放的 值`，而 `emp`、`emp2` 中存放的為 `記憶體的位址`，因此記憶體位址不同，答案則為 `false`

## Heap
  ```java
  PUblic static voie main(String[] args){
    Employee emp = new Employee();
    ...
    Employee emp2 = new Employee();
    emp2.empno = 2;
    emp2 = emp;
    System.out.println(emp == emp2);  // 比較記憶體位址
  }
  ```

  當 `物件參考變數` 給予新的值時，原本的物件 `emp2` 會因為沒有被「 `參考` 」到，會被 `Java` 的 `Garbage collection` 機制所回收，以釋放記憶體。

  - ### stack
  |emp|10080004 ( `對應 heap 記憶體位址` )|
  |---|---|
  |emp2|1008004 ( `對應 heap 記憶體位址` )|

  - ### heap
  |10080004|Employee|
  |---|---|
  ||`name = "Vincent"`<br>`empno = 1`|
  |10080020|Employee (`會被消除`)|
  ||`name = `<br>`empno = 2`|

## null (清空值)
  ```java
  public static void main(String[] args){
    Employee emp = new Employee();
    Employee emp2 = new Employee();
    emp = null;
    emp2 = null;
    System.out.println(emp.name);   // Exception
  }
  ```

  當 `物件參考變數` 被給予 `null` 值時，等於清空 `emp` 及 `emp2` 變數中的值 (`位址`)，沒有被變數參考到的物件，就會等待被 `回收 (GC)`。

  - ### stack
  |emp|null ( `斷連 記憶體位址` )|
  |---|---|
  |emp2|null ( `斷連 記憶體位址` )|

  - ### heap
  |10080004|Employee (`會被消除`)|
  |---|---|
  ||`name = "Vincent"`<br>`empno = 1`|
  |10080020|Employee (`會被消除`)|
  ||`name = `<br>`empno = 2`|

## main 方法結束
  ```java
  public static void main(String[] args){
    Employee emp = new Employee();
    Employee emp2 = new Employee();
  }
  ```

  當 `main` 方法結束時，`stack` 區中 `main` 方法所使用的記憶體，也會整個被清除，進而造成 `Heap` 區的物件沒有被參考到，也會被回收。

## Garbage Collection
  - `Garbage Collection` 為一個 `Java` 清理記憶體機制，掃描 `heap` 區塊，如果有物件沒有被變數參考到，則會被釋放出來，簡稱「 `GC` 」。
  - `GC` 執行時間不定，通常在記憶體不足時，`GC` 會啟動。
  - `Garbage Collection` 執行時，需要消耗較大的計算，早期 `JVM` 在執行 `GC` 時，會暫停所有在執行作業，造成程式執行停頓。近幾年有所謂的 `Parallel GC`，利用平行運算，大幅減少了 `GC` 所需要的時間。
