---
title: 10. 陣列
---

# 10. 陣列
## 陣列
  - `陣列` 為一群有「 `順序` 」，且相同「 `資料型態` 」組合而成的一種資料結構。陣列中每個元素可以是「 `基本資料型別` 」或者「 `物件參考變數` 」。
    - 基本資料型別陣列：`int[] age` 或 `int age[]`
    - 物件參考變數陣列：`Employee[] employees`
  - `陣列` 本身是「 `物件` 」，在產生陣列時，必須使用 `new 關鍵字`，並指定陣列大小，大小指定後不可變更。
    - 使用 `new`
      - 範例：
        ```java
        int[] ages = new int[10];   // 10 表示陣列中元素的總個數
        ```
    - 使用大括號產生陣列並指定初值
      - 範例：
        ```java
        int[] ages = {1, 2, 3};
        ```

  - `屬性 length`：取得陣列長度
    - 例如：`ages.length`，注意：`length` 為陣列屬性，並不是方法
  - 陣列元素
    - 取得陣列元素 `變數名稱[index]`，注意：陣列的第一個元素 `索引值(index)` 為0，並不是1，例如： `ages[0]`
    - 取出陣列元素或者指定其值
      - e.g. 取出元素 `System.out.println(ages[0])`
      - e.g. 指定元素的值 `age[1] = 2`
      - 使用超過陣列個數的 `index`，系統會發生 `ArrayIndexOutOfBoundsException`，會停止運作。
  - 陣列 `new` 完後，每個元素都會有初值，如果為 `物件變數陣列`，初值為 `null`

## 基本資料型別陣列
  ```java
  int[] ages = new int[3];
  ages[0] = 10;
  ages[1] = 20;
  ages[2] = 18;
  ```

  - ### stack
    |ages|08000800|
    |---|---|
  - ### heap
    |08000800|10|
    |---|---|
    ||20|
    ||18|

  ```java
  int[] ages = new int[3];
  ...
  ages = null;
  // 陣列本身為物件，使用 null
  ```

  - ### stack
    |ages||
    |---|---|
  - ### heap
    |08000800|10|
    |---|---|
    ||20|
    ||18|

## 物件參考變數陣列 - 1
  產生一個可以放 2 個 Employee 物件的陣列，一開始是空的

  ```java
  Employee[] employees = new Employee[2];

  Employee emp1 = new Employee();
  emp1.name = "Vincent";
  emp1.empno = 1001;
  employees[0] = emp1;

  Employee emp2 = new Employee();
  emp2.name = "David";
  emp2.empno = 1002;
  employees[1] = emp2;
  ```

  - ### stack
    |employees|08000800|
    |---|---|
    |emp1|08000900|
    |emp2|08001000|
  - ### heap
    |08000800|08000900|
    |---|---|
    ||08001000|

    |08000900|
    |---|
    |name = "Vincent"<br>empno = 1001|

    |08001000|
    |---|
    |name = "David"<br>empno = 1002|

## 物件參考變數陣列 - 2
  - `物件陣列`，因為放在陣列中的型別已經固定，可以直接使用 `.` 來指定該物件屬性的值。

    ```java
    Employee[] employees = new Employee[2];

    employees[0] = new Employee();
    employees[0].name = "Vincent";
    employees[0].empno = 1001;
    ```

## 物件參考變數陣列 - 3
  ```java
  Employee[] emps = new Employee[2];

  emps[0] = new Employee();
  emps[0].name = "Vincent";
  emps[0].empno = 1001;

  emps[1] = new Employee();
  emps[1].name = "David";
  emps[1].empno = 1002;

  for(int i = 0; i < emps.length; i++) {
    System.out.println(emps[i].name);   // Vincent  David
  }
  ```

  - ### stack
    |employees|08000800|
    |---|---|
  - ### heap
    |08000800|08000900|
    |---|---|
    ||08001000|

    |08000900|
    |---|
    |name = "Vincent"<br>empno = 1001|

    |08001000|
    |---|
    |name = "David"<br>empno = 1002|

## 多維陣列
  - `多維陣列` 即 陣列中的每個元素也是一個陣列
    - `int[][] x = new int[5][4]`
    - 第一個數字代表 `列數`，第二個代表 `行數`
    - `x.length` 表示列數，回傳 `5`
    - `x[i].length` 表示第 `i` 列有幾行。回傳 `4`

      | x[0][0] | x[0][1] | x[0][2] | x[0][3] |
      |---------|---------|---------|---------|
      | x[1][0] |         |         |         |
      | x[2][0] |         |         |         |
      | x[3][0] |         | x[3][2] |         |
      | x[4][0] |         |         | x[4][3] |

      > 取值或給值時，利用 `x[i][j]`，`i` 表示列，`j` 表示行

  - 直接給定初值
    - ```java
      int[][] x = { {1, 2, 3}, {4, 5, 6} };
      ```
      | 1 | 2 | 3 |
      |---|---|---|
      | 4 | 5 | 6 |

## 雙層迴圈
  - 列印二維陣列
    ```java
    int[][] x = { {1, 2, 3}, {4, 5, 6}};
    for (int i = 0; i < 2; i++) {
      for (int j = 0; j < 3; j++) {
        System.out.println(x[i][j]);    // 1 2 3 4 5 6
      }
    }
    ```

    | 1 | 2 | 3 |
    |---|---|---|
    | 4 | 5 | 6 |

  - 列印二維陣列，注意第二列少一個元素
    ```java
    int[][] x = { {1, 2, 3}, {4, 5}};
    for (int i = 0; i < x.length; i++) {
      for (int j = 0; j < x[i].length; j++) {
        System.out.println(x[i][j]);
      }
    }
    ```

    | 1 | 2 | 3 |
    |---|---|---|
    | 4 | 5 |   |

## Lab
  - 一個陣列為 `double[] x = {1.1, 2.0, 1.2, 1.4, 0.5, 6.0};`
  - 列印出陣列中的 `最大值` 及 `最小值` 及 `平均值`

  - 畫出 4 層聖誕樹，第一層 `1` 顆，第二層 `3` 顆，第三層 5 顆，第四層 7 顆
    ```java
        *
       ***
      *****
     *******
    *********
    ```
    :::details 練習
    ```java
    public class ChristmasTreeLab {
      public static void main(String[] args) {
        int num = 7;
        for(int i = 0; i <= num +1; i+=2) {
          for(int j = num; j > i; j=j-2) {
            System.out.print(" ");
          }
          for(int k = 0; k <= i; k++) {
            System.out.print("*");
          }
          System.out.println();
        }
      }
    }
    ```
    :::