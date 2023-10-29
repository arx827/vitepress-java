---
title: 21. 例外處理
---

# 21. 例外處理 EXCEPTION
  ```java
  package exception;

  public class TestException {
    public static void main(String[] args) {
      int a = 1;
      int b = a/0; // 除以0會引發異常
      System.out.println("b=" + b);
    }
  }
  ```

  ```java
  Exception in thread "main" java.lang.ArithmeticException:/by zero at exception.Exception1.main(TestException.java:5);
  ```

  - `java.lang.ArithmeticException`：Exception 名稱。
  - `/by zero at exception.`：Exception 說明。
  - `TestException.java:5`：發生程式位置及行數。

## Exception
  - 程式執行時，可能會發生異常例外 (例如：除以0)，可以利用 `Exception` 機制來處理發生異常時的流程。
  - `Throwable` 是所有 `Exception` 的父類別，以下分兩大類：
    - `Error`：系統執行環境本身發生嚴重錯誤，無法修復，例如：記憶體不足。
    - `Exception`：再分兩類
      - 一類是 `RunTimeException` 及其子類別，可以在程式中選擇不處理這類 `Exception`。
      - 其他 `Exception`，這類的 `Exception` 必須被程式『 明確處理 』。

  ![edu-chapter-21-1](/edu/edu-chapter-21-1.svg)

  ```java
  try {
    // 1 產生例外的程式
  }catch (發生的 Exception 類別 ex) {
    // 2 發生 Exception 後要執行的程式
  }finally {
    // 3 最後執行的程式碼
  }
  ```

  範例：
  ```java
  try {
    int a = 1;
    int b = a/0;
    System.out.println("注意這行不會執行：發生 Exception 以下的程式，不會被執行");
  }catch (ArithmeticException ex) {
    System.out.println("錯誤：除以0發生問題");
  }finally {
    System.out.println("『 鐵定 』『 最後 』會執行的程式區域");
  }
  ```

  - 1. 發生 `Exception` 以下的程式不會被執行。
  - 2. 可以接多組 `catch exception`。
  - 3. `finally` 不一定要有，不需要可以省略，通常用來作為關閉資源，例如：關閉檔案、關閉資料庫連線。

## 多重catch
  - `多重catch`：如果同時有多種 Exception 必須處理，例如：
    - `java.lang.Exception`
    - `java.lang.ArrayIndexOutOfBoundsException`
    - `java.lang.ArithmeticException`

  - `catch` 有順序之分，因為 `Exception` 為 `ArithmeticException` 的父類別，父類別 `Exception` 必須放在後面，否則會有 `compile error`。

  - 實務上，我們也常將 `java.lang.Exception` 放在最後一個 `catch`，以便攔下各種其他類型的錯誤
    ```java
    try {
      // xxx
    }catch (ArithmeticException ex) {
      // [注意] 子類別例外要放在前面
    }catch (Exception ex) {
      // ...
    }
    ```

## 多重例外處理流程
  ```java
  try {
    ...
  }catch (ArithmeticException ex){
    System.out.println("1");
  }catch (ArrayIndexOutOfBoundsException ex){
    System.out.println("2");
  }catch (Exception ex){
    System.out.println("3");
  }finally{
    System.out.println("4");
  }
  System.out.println("5");
  ```

  如果 `try` 中程式，
  - 發生 `ArithmeticException`，則印出 1,4,5
  - 發生 `ArrayIndexOutOfBoundsException`，則印出 2,4,5
  - 發生上述之外的 `Exception`，則印出 3,4,5

## RuntimeException
  - `RuntimeException` 的子類別，也稱 `Unchecked Exception`，`Unchecked` 表示 `Compiler` 不檢查，即便沒有使用 `try catch` 語法抓取可能發生的錯誤，`compile` 時也不會報錯，以下僅列舉常見的一部分。

  | 類別名稱                         | 說明                |
  |---------------------------------|--------------------|
  | `ArrayIndexOutOfBoundException` | 存取陣列時超過索引值  |
  | `IllegalArgumentException`      | 參數傳入錯誤         |
  | `NullPointException`            | 操作空的物件參數      |
  | `ArithmeticException`           | 計算 `/0` 錯誤      |

## Checked Exception
  `Checked Exception` 表示受編譯器檢查，一定要用程式 `try catch` 處理。
  
  ```java
  import java.io.File;
  import java.io.FileInputStream;

  public class CheckException {
    public static void main(String[] args) {
      FileReader fr = new FileReader("c:\\aaa.txt");
      // 會丟出 FileNotFoundException 為 Check Exception，一定要處理，
      // 因為不是 RuntimeException，Eclipse 中可以利用 ctrl + 1 協助
    }
  }
  ```

## throws
  如果選擇不在目前方法中處理 `Exception`，也可以利用 `throws` 把 `Exception` 往外拋出，由呼叫者(此例為 `JVM` 負責處理)。

  ```java
  public class CheckException {
    public static void main(String[] args) throws FileNotFoundException {
      FileReader fr = new FileReader("c:\\aaa.txt");
      System.out.println("Finish");  // 不會被執行
    }
  }
  ```

## 如果有多個 Exception 可能同時發生，throws 可以同時宣告可能丟出多個 Exception，利用 `,` 區隔
  ```java
  public class CheckException {
    public static void main(String[] args) throws FileNotFoundException, ZipException {
      FileReader fr = new FileReader("c:\\aaa.txt");
      System.out.println("Finish");  // 不會被執行
    }
  }
  ```

## throws 宣告丟出父類別 Exception
  ```java
  public class CheckException {
    public static void main(String[] args) throws FileNotFoundException, IOException {
      // IOException 為 FileNotFoundException 的父類別
      FileReader fr = new FileReader("c:\\aaa.txt");
      System.out.println("Finish");  // 不會被執行
    }
  }
  ```

  此例中 `IOException` 為 `FileNotFoundException`、`ZipException` 的父類別。
  故 `FileNotFoundException` 可省略。

## throws
  方法上必須宣告有可能拋出的 `Exception`。
  如果拋出的 `Exception` 為 `RuntimeException` 類，則可以不用宣告 `throws`。

  ```java
  /**
   * 方法中如果會拋出 Exception，必須用 throws 宣告
   */
  public static void checkFile(String filePath) throws FileNotFoundException {
    ...
  }
  ```

## throw
  - Java 程式可以『 主動 』在程式邏輯中，透過 `throw` 關鍵字丟出 `Exception`。
    - 範例：`throw new FileNotFoundException("找不到檔案");`

  ```java
  // CheckException.java

  public static void checkFile(String filePath) throws FileNotFoundException {
    File file = new File(filePath);
    if (!file.exists()) {
      throw new FileNotFoundException("找不到檔案");
    }
  }  
  ```

  > [註]：`exists()` 為 `File` 上的一個方法，用來檢查檔案是否存在。

## throws
  ```java
  public static void main(String[] args) throws FileNotFoundException{
    checkFile();    // 如果方法不想處理例外，也可以利用 throws 往外丟
  }

  public static void checkFile() throws FileNotFoundException {
    File file = new File("c:\\aaa.txt");
    if (!file.exists()) {
      throw new FileNotFoundException("找不到檔案");
    }
  }
  ```

  ```java
  public static void main(String[] args) throws Exception {
    try {
      checkFile(1, 0);            // 方法選擇處理例外，就不需要宣告 throws
    }catch(FileNotFoundException ex) {
      ...
    }
  }

  public static void checkFile() throws FileNotFoundException {
    File file = new File("c:\\java.txt");
    if (!file.exists()) {
      throw new FileNotFoundException("找不到檔案");
    }
  }
  ```

## Lab Exception3
  ```java
  public static void main(String[] args) {
    try {
      calculate();
      System.out.println(5);
    } catch (Exception e) {
      e.printStackTrace();
      System.out.println(6);
    }
    System.out.println(7);
  }

  public static void calculate() throws Exception {
    try {
      System.out.println("1");
      if (true) {
        throw new Exception();
      }
    } catch (Exception ex) {
      System.out.println(3);
      throw ex;
    }
    System.out.println(4);
  }
  ```

  - 請問列印出的數字為何？
    `1, 3, 6, 7`

## 常見 Exception
  - `FileNotFoundException`，無法取得檔案。
  - `SQLException`，資料庫操作錯誤。
  - `NullPointerException`，對空物件操作，導致異常。
  - `IllegalArgumentException`，導入錯誤參數。
  - `ArrayIndexOutOfBoundsException`，取用陣列元素超過陣列大小。
  - `Exception`，當然可以利用 `if else` 加入判斷，避免發生錯誤產生，例如：先判斷取用陣列時，索引值是否超過陣列大小，但過多的判斷會造成程式過於複雜，而不易維護，利用『 `例外處理` 』可以簡化程式。

## NullPointerException
  - `Java` 開發者最常遇見的 `Exception`。
  - 屬於 `RuntimeException` 的子類別。
  - 發生情況：物件參考變數，並沒有指定真正的物件，也就是其值為 `null` 時，表示並沒有指向記憶體的任何物件，對其變數操作就會發生此 `Exception`。

    ```java
    public static void main (String[] args) {
      Employee employee = null;
      System.out.println("employee.name = " + employee.name);
    }
    ```

    ```java
    Exception in thread "main" java.lang.NullPointerException
    at exception.NullException.main(NullException.java:10)
    ```