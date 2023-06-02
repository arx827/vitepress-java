---
title: 1. Java 簡介
---

# 1. Java 簡介
## Java語言的特性
  - ### 簡單
    - Java 是 `C like` 語言，表示很多語法是繼承C的精神，但是 Java 不採用C的指標來操控記憶體位置。
    - C 語言中記憶體的使用宣告及釋放必須完全由程式控制，Java 則採用了「 Garbage Collection 」來回收不需使用的記憶體。

  - ### 物件導向
    『 **繼承** 』、『 **封裝** 』、『 **多型** 』

  - ### 跨平台性
    Java 可以在不同的作業系統上執行，而且『 無需重新編譯 』。

## Java技術種類
  - ### Java SE
    Java Standard Edition **標準版**
    通常用來開發桌上型視窗程式或者簡易的指令程式。
  - ### Java EE
    Java Enterprise Edition **企業版**
    主要用來開發網站伺服器端程式。
  - ### Java ME
    Java Micro Edition **開發手持設備**
    在實用性上無法跟 Android 比。

## Compile 編譯
  - 利用 `%JAVA_HOME%/bin/jabac.exe` 進行編譯
  - 步驟
    - 開啟 `cmd.exe`
    - 進入 `HelloWorld.java` 的目錄，例如 `cd C:\Java`
    - 語法： `Javac source_file`
    - 範例： `Javac HelloWorld.java`
  - 編譯完會產生 `HelloWorld.class`
    - C 語言編譯完直接產生 `machine code` ，可以直接在作業系統上執行，但不同作業系統則需 『 重新編譯 』。
    - `Java` 編譯產生副檔名為 `class` 的檔案，並不能直接在作業系統上執行，class檔中含有俗稱的 `bytecodes`，為一種可以在 `JVM` 特殊環境中被執行的碼， `Oracle` 針對不同作業系統有提供相對應的JVM環境可以執行 class。
  - 可以指定產生 `class` 的目錄
    - 例如：`javac -d C:\compile HelloWorld.java` ，表示產生的 class 會在 `C:\compile\HelloWorld.class`。

## 執行Java
  - 執行Java指令：`java {main方法的類別名稱}`
    - 範例：java HelloWorld ~~.java~~ [註]沒有.java，執行時是類別名稱。
      
      如果 `HelloWorld.class` 在目前的cmd的當前目錄下，可以不用加任何參數。
  
  - 如果 `HelloWorld.class` 並不在目前的cmd的當前目錄下，可以利用 `-cp` 指定class位置，例如：class 位置在 C:\java\HelloWorld.class
    ```java
    java -cp c:\Java Hello World
    ```

    - -cp：為 `-classpath` 的縮寫，表示 class 的路徑 ( path )，也就是指定class檔案的目錄，如果有多個class且散在不同目錄下，可以用 `;` 區隔 ( linux上為`:`)，如果省略則預設為當前 cmd 中的目錄。

    - `HelloWorld` 為 class的名稱，『 無需加上`.class`，或者`.java` 』

## JRE ( Java Runtime Environment )
  **JDK 一定會包含一個 JRE**
  - `JRE` 包含一個 Java 虛擬機器 `JVM` ( Java Virtual Machine )，以及標準的類別函式庫 ( Java SE API，ex: System.out.printIn )。
  - 不同的作業系統中執行必須安裝相對應的 `JVM` 版本，class檔案則可以在 `JVM` 中執行。以達到 `Write once run anywhere`

## 標準的類別函式庫 (Java SE API)
  - 標準函式庫由 `Oracle` 工程師開發，提供程式語言基本的型別及類別，讓開發人員可以馬上利用，加速程式開發。
  - 通常在描述函式庫，有一些別名，意思都是相近
    - API ( Application Programming Interface )
    - Library
    - Framework
    - SDK

## 程式基本架構
  每個類別中，可以定義自己的屬性及方法
  ```java
    public class HelloWorld {
      public static void main(String[] args) {
        System.out.println("Hello World");
      }
    }
  ```
  - **public**：modifier：公開給其他類存取
  - **HelloWorld**：類別名稱
  - **void**：無回傳值
  - **main**：方法名稱
  - **args**：方法參數

## 註解
  - 程式中可以利用以下方式做註解，註解通常用來說明程式，註解部分不會被編譯、不為程式邏輯的一部分。
    ```java 
    // 雙斜線，單行註解
    ```
    ```java
    /*
      斜線星號開頭，星號斜線結尾 為 多行註解
    */
    ```

## 程式執行
  - `JVM` 啟動執行時，會執行命令列中的 `class` ( HelloWorld.class )，並尋找 class 中的 `public static void main` 方法，執行方法中的程式。
  - main 方法包含兩個重要的 `modifier` ( 修飾詞 ) public static，缺一不可。
  - main 方法無回傳值，`void` 表示無回傳值。
  - 每一隻Java程式 (.java)
    - **類別名稱必須跟檔名一致**
    - **不一定會有 main 方法**
    - 多個Java程式可以組合成一個應用程式，執行時會只有於指令列中指定的類別 ( java HelloWorld ) 中的 `main()` 會被執行，作為整個應用程式的起點。