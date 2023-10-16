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

## RuntimeException

## Checked Exception

## throws

## 如果有多個 Exception 可能同時發生，throws 可以同時宣告可能丟出多個 Exception，利用 `,` 區隔

## throws 宣告丟出父類別 Exception

## throws

## throw

## throws

## Lab Exception3

## 常見 Exception

## NullPointerExeption