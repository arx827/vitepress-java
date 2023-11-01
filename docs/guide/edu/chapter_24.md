---
title: 24. IO
---

# 24. IO
## File
  - `list` 過濾目錄
  - 路徑都用 `/` 表示分隔符號
  - `getName`
  - `getParent` 目錄
  - `exists()` 是否存在
  - `isFile()` 目錄為 `false`

## Stream IO
  - `File` 物件可以代表檔案或者目錄
  - 常用方法：
    - `String getName()`，取得檔案名稱。
    - `String[] list()`，可以回傳該目錄下所有檔案或目錄名稱。
    - `File[] listFiles()`，回傳 `File` 陣列，比較方面。
    - `boolean mkdir()`，產生目錄，產生成功則回傳 `true`。
    - `isDirectory()`，判斷是否為目錄。
    - `lastModified()`，回傳修改時間，為一個 `long`。
    - `canRead()`，回傳 `boolean`，是否可讀。
    - `canWrite()`，回傳 `boolean`，是否可寫。

  - 四個主要『 `抽象類別` 』
    - `java.io.InputStream`
    - `java.io.OutputStream`
    - `java.io.Reader`
    - `java.io.Writer`
  - `InputStream`、`OutputStream` 是用來處理『 `byte (二進位資料)` 』以及任何型態的物件，用途較廣。
  - `Reader`、`writer` 是專門用來處理 `character (字元)`。
  - IO 類別分成兩大類：
    - `Node Stream`『 節點資料流 』：這類的類別通常會連結著檔案或者網路節點，為 `low-level (低階)` 的 IO，所有的 IO 處理都會先取得節點資料流。
      - 例如： `FileInputStream`、`FileOutputStream`、`FileReader`、`FileWriter`
    - `Filter Stream` 『 加工資料流 』：這類高階 IO 必須『 串接 』上述的 `Node Stream`，通常具有加速處理的能力 或者 過濾的功能。
      - 例如： `BufferedInputStream`、`BufferedOutputStream`、`BufferedReader`、`BufferedWriter`

## FileInputStream
  - `FileInputStream` 繼承 `InputStream`，專門用來讀取檔案。為 `Node Stream`。
  - 建議方法中，如果找不到指定檔案，會丟出 `FileNotFoundException`
    - `new FileInputStream (String 檔案路徑);`
    - `new FileInputStream (File 檔案物件);`
  - 常用方法
    - `int available()`：取得剩下還有多少 `byte` 可以讀。
    - `int read()`：讀一個 `byte`，如果回傳 `-1`，表示已經到讀完。
    - `int read(byte[])`：一次讀多個 `byte`，回傳讀多少 `byte` 進傳入的 `byte[]`，如果回傳 `-1` 表示已經讀完。
    - `close()`：使用完關閉 `inputStream`，使用完一定要關閉。

  ```java
  FileInputStream fis = null;
  try {
    fis = new FileInputStream("xxx.txt");
    char c = (char) fis.read();
    System.out.println("第一個 byte 為：" + c);
  } catch (FileNotFoundException e) {
    e.printStackTrace();
  } catch (IOException e) {
    e.printStackTrace();
  } finally {
    try {
      if (fis != null) {
        fis.close();
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
  ```

## try with resource
  有 `AutoCloseabled` 的型態才會 自動關閉。
  - `Java 7` 後，為了簡化物件的 `close()` 的程式碼，提供新的 `try with resource` 機制，凡是有實作 `AutoCloseable` 介面的『 `物件宣告` 』可以利用這個機制，會在 `try` 執行完時 (在 `catch` 任何 `Exception` 之前)『 `自動` 』執行物件的 `close` 方法，無須處理 `Exception`，大幅簡化了程式。
    - `AutoCloseable` 介面只定義了一個 `close()` 方法。
  - `InputStream`、`OutputStream` 都實作了 `AutoCloseable` 介面，可以利用這個機制。
  - 語法：`try (FileInputStream fis = new FileInputStream(file)){ ... }`，宣告在這裡的物件於 `try` 執行完，會自動被 `close`，無需手動呼叫 `close()` 方法。
    - 多個需要 `close` 物件用分號 `；` 隔開，最後一組宣告可以不用分號。
    - ```java
      try (FileInputStream fis = new FileInputStream(file); FileInputSteam fis1 = new FileInputStream(file1)){
        ...
      };
      ```

  利用 `try-with-resource` 簡化 `try catch close` 流程
  ```java
  try ( FileInputStream fis = new FileInputStream("xxx.txt")) {
    char c = (char) fis.read();
    System.out.println("第一個 byte 為：" + c);
  } catch (FileNotFoundException e) {
    e.printStackTrace();
  } catch (IOException e) {
    e.printStackTrace();
  }
  ```

## BufferedInputStream
  - `BufferedInputStream` 會利用 `buffer (緩衝區)`，一次載入多一點資料到 `buffer` 中，減少讀取次數以加快運作效能。為 `Filter Stream (加工型資料流)`。
  - `BufferedInputStream` 建構方法有兩種，都是用來『 `串接` 』`InputStream`。
    - `BufferedInputStream(InputStream in)`
    - `BufferedInputStream(InputStream in, int size)  // 可以指定 buffer size`

  利用 `try-with-resource` 簡化 `try catch close` 流程
  ```java
  try (FileInputStream fis = new FileInputStream("xxx.txt");
       BufferedInputStream bis = new BufferedInputStream(fis);
  ) {
    char c = (char) bis.read();
    System.out.println("第一個 byte 為：" + c);
  } catch (FileNotFoundException e) {
    e.printStackTrace();
  } catch (IOException e) {
    e.printStackTrace();
  }
  ```

## FileOutputStream
  - `FileOutputStream` 繼承 `OutputStream`，用來寫入檔案。為節點資料流。
  - 建構方法：會丟出 `FileNotFoundException`：如果找不到指定檔案。
    - `new FileOutputStream(String 檔案路徑);`
    - `new FileOutputStream(File 檔案物件);`
  - `int write(byte b)` 寫一個 byte。
  - `int write(byte[])` 寫入多個 byte。
  - `int write(byte[], int offset, int length)` 寫入多個 byte，並指定從那裡開始及長度。

## BufferedOutputStream
  - `BufferedOutputStream` 會利用 `buffer (緩衝區)` 儲存要寫入的 `byte` 到 `buffer` 中，例如直到 `buffer` 滿了，才寫到檔案，減少寫出次數加快運作效能。為加工型資料流。
  - `BufferedOutputStream` 建構方法有兩種，用來串接 `OutputStream`。
    - `BufferedOutputStream(OutputStream in)`
    - `BufferedOutputStream(OutputStream in, int size)`   指定 buffer size。

  ```java
  try (
    FileOutputStream fos = new FileOutputStream("c:\\java\\io_2.txt");
    BufferedOutputStream bos = new BufferedOutputStream(fos);
  ) {
    String content = "中文Abc";
    byte buf[] = content.getBytes();
    bos.write(buf);
  } catch (FileNotFoundException e) {
    e.printStackTrace();
  } catch (IOException e) {
    e.printStacktrace();
  }
  ```

## Lab
  - 下載 `https://graph.facebook.com/AppStore/picture?type=large` 圖片到檔案。
  - 利用 `URL.openStream()` 取得 inputstream。
  - `DownloadImage.java`

## java.io.Reader & java.io.Writer
  - `Reader`、`Writer` 是專門用來處理 `character (字元)`
  - 主要的類別 `FileReader`、`FileWriter`、`Bufferedreader`、`BufferedWriter`
  - `Reader` 類的方法
    - `int read();` 一次讀一個字，回傳 `int` 後，可以轉型成 `char`，回傳 `-1` 表示結束。
    - `int read(char cbuf[]);` 一次讀到 `char[]`。
    - 子類別 `BufferedReader`：呼叫 `readLine()` 方法可以一次讀一行字 (方便)。(可搭配 `while` 迴圈)。

  ```java
  try(FileReader fr = new FileReader("C:\\java\\char_UTF8.txt")) {
    int c;
    while ((c = fr.read()) != -1) {
      System.out.println((char) c);
    }
  } catch (IOException e) {
    e.printStackTrace();
  }
  ```

## java.io.Reader & 預設編碼
  - `Reader` 的子類別有一個缺陷，大部分子類別都無法指定文字的編碼 (Windows 作業系統中文編碼是 `MS950`，網頁大多為 `UTF-8` 編碼)，執行過程中會自動使用 `Java` 環境預設的編碼，反而容易造成錯誤，子類別中只有『 `InputstreamReader` 』可以指定編碼，實務上讀取檔案時有可能有各式各樣的編碼，建議使用 `InputStreamReader` 強制指定檔案編碼。
  - 設定 `JVM` 預設編碼：`Java` 在啟動時，利用 `java -Dfile.encoding=utf-8` 可以指定 `JVM` 預設編碼。如果沒有指定會使用作業系統預設 (`Windows` 作業系統 中文編是 `MS950`，`Linux` 可能為 `UTF8`)。
  - 取得執行時期編碼：利用 `System.getProperty("file.encoding")` 或者 `Charset.defaultCharset()` 可取得目前 `Java` 執行環境的編碼。

## Lab
  - 測試 `ReadByFileReader.java`
    - `Charset.defaultCharset()` 顯示 `JVM` 編碼
    - 利用 `FileReader` 直接讀取 `char_MS950.txt` 以及 `char_UTF8.txt`

## 指定編碼的 Reader
  - `java.io.InputStreamReader` 是 `Reader` 類別中唯一能指定編碼的 `Reader`。
  - [注意] `java.io.InputStreamReader` 於建構方法串接 `InputStream` (例如 `FileInputStream`)，指定編碼，而非串接 `Reader`。為 `byte` 轉 `char` 的重要類別。

  範例：
    ```java
    FileInputStream fis = new FileInputStream("xxx/char_MS950.txt");
    InputStreamReader isr = new InputstreamReader(fis, "MS950");
    ```

## 系統換行符號
  - 換行符號在不同系統 不一樣。
    - `windows`： `\r\n`
    - `Unix`、`Mac`： `\n`
  - `System.getProperty("line.separator")`  可取得系統的換行符號。
  - `JDK7` 後，可直接使用 `System.lineSeparator()`

## 指定編碼的 Writer
  - `java.io.OutputStreamWriter` 是唯一能指定編碼的 `Writer`。
  - `java.io.OutputstreamWriter` 可以於建構方法串接 `OutputStream` 時，指定編碼。為 `char` 轉 `byte` 的重要類別。
  - 一般常用的編碼取得，`UTF-8`、`UTF16`、`ISO_8859_1`、`ASCII` 可以透過 `StandardCharsets` 常數取得。
    - 不在 `StandardCharsets` 常數上的如 `MS950`，可以利用 `Charset.forName("MS950")` 指定。
  
  範例：
    ```java
    FileOutputStream fis = new FileOutputStream("C:/xxxx/char_1.txt");
    OutputStreamWriter isr = new OutputStreamWriter(fis, "UTF8");
    isr.write("測試中文");
    isr.flush();    // 內建 8192 byte buffer
    ```

## BufferedReader、BufferedWriter
  - `java.io.BufferedReader`、`java.io.BufferedWrite` 也是用來加速處理效能。
  - 作法上也是一樣，串接 `InputStreamReader` 以及 `OutputStreamWriter`。
    ```java
    FileInputStream fis = new FileInputStream("xxx/char_1.txt");
    InputStreamReader isr = new InputStreamReader(fis, "MS950");
    BufferedReader br = new BufferedReader(isr);
    ```

    ```java
    Fileoutputstream fis = new FileOutputStream("/xxx/char_2.txt");
    outputStreamWriter osw =new OutputStreamWriter(fis, "MS950");
    BufferedWriter bw = new BufferedWriter(osw);
    ```

## Stream Base IO 總結 處理 byte
  ![edu-chapter-24-1](/edu/edu-chapter-24-1.png)

## Character Base IO 總結 處理文字
  ![edu-chapter-24-2](/edu/edu-chapter-24-2.png)