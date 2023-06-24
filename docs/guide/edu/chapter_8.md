---
title: 8. Package套件 & JAR
---

# 8. Package套件 & JAR
## Package 套件
  - 目的：類別越來越多時，除了變得難以管理外，還有可能造成有命名上的衝突 (一樣的 class 名稱，但用途不同)，Java 則提供「 `package` 」功能來管理類別。
  - 相同的 `package` 的 `java` 檔案，會放在同一個資料夾中，`package` 名稱也就是 `目錄名稱`。
    - `compile` 完後的 `class`，也會放置在相對應的目錄下。
  - 宣告方式 `package <packageName>`；
  - `package` 通常是網域名稱翻過來，以防止命名衝突，並且可以宣告很多層，例如：`com.xxx.yyy`，表示有三層目錄。
    - 範例：
      ```java
      package category;
      public class Item {
        public String name;
        public static void main(String[] args) {
          System.out.println("Item 在 category 套件中");
        }
      }
      ```

      類別 `Item` 位於 `category` 的套件中，類別 Item 的名稱會變成 `category.Item`，`Item.class` 也會放在 `category` 目錄下。

## import 引用其他套件的類別
  - 關鍵字 `import` 可以用來指示當前的類別，使用其他 `package` 中的單一類別，也可以引用指定 `package` 中的所有類別。
    - ```java
      import category.Item;   // 只引用單一類別
      ````
    - ```java
      import category.*;    // 引用 package 中的所有類別
      ```
    - 如果沒有 `import` 指令，必須在 `class` 前面加上 `package 名稱`
      - ```java
        category.Item item = new category.Item();
        ```
  - `java` 執行時，會自動 `import` 以下兩個預設的 `package`，不虛要利用 `import` 指定
    - `java.lang.*`：此 `package` 包含了 `Java` 提供大量基本類別。
    - 目前類別所屬的 `pavkage`：例如：`category.*`
## import
  ```java
  import category.Item;
  public class TestPackage {
    public static void main(String[] args){
      Item item = new Item();
      item.name = "notebook";
      System.out.println("Hello World TestPackage:" + item.name);
    }
  }
  ```

  註：如果沒有 `import`，必須用全名
  ```java
  category.Item item = new category.Item();
  ```

## 執行 Java
  - 執行有 `package` 的 `class`，`classpath` 設定中必須包含 `class` 的根目錄。
  - 語法：
    ```sh
    java -cp {class 根目錄}{packageName.ClassName:類別全名}
    ```
    - [注意]必須使用全名 (`package.className`) 來指定類別。
  - 例如：
    ```sh
    java -cp c:\classes category.Item
    ```
  - 例如：
    ```sh
    java -cp c:\classes TestPackage  # (註：`TestPackage` 沒有 package)
    ```

  > [注意] `-cp`，表示 後面將指定 `class 根目錄`

## JAR
  - `jar` 是將多個 `class` 檔案 `zip` 起來。執行時只需要一個 `jar` 檔。
  - `jar` 包含以下兩個內容
    - 所有的 `classes`，必須依照 `package` 的階層擺放 (例如： `item.class` 必須放在 `category` 目錄下)。
    - `META-INF/MANIFEST.MF` 檔案，`jar` 的描述檔，檔案內容記載哪一個 `class` 中的 `main` 為 `Java` 應用程式的進入點 (例如： `TestPackage`)

## 產生「 可執行 」JAR
  - `Eclipse` 匯出功能可以產生出可執行 `Jar`
    - Step 1. 專案右鍵，選 `Export`
      ![edu-chapter-8-1](/edu/edu-chapter-8-1.png)
    - Step 2. `Java` 下，選擇 `JAR file`
      ![edu-chapter-8-2](/edu/edu-chapter-8-2.png)
    - Step 3. 勾選要匯出的類別，這裡我們只勾選 `default package` 下的 `TestPackage.jsva` 以及 `category` 套件。
    - Step 4. 選擇匯出的位置以及 `jar` 檔名稱，例如： `c:\Java\Hello.jar`
    - Step 5. `Next`

    - Step 6. 選擇要執行的 `class`，按下 `Finish`

## 執行 JAR
  執行 `jar` 指令 `java -jar <jar檔名稱>`
  - Step 1. 打開命令提示字元 (終端機)
  - Step 2. 切換至 `c:\java` 目錄
    ```sh
    cd c:\java
    ```
  - Step 3. 執行 `java -jar <jar檔名稱>`

## 專案中使用其他的 jar
  - 專案開發過程中，常會用到第三方 (其他人) 提供的 `class`，通常都為 `jar` 的形式。
  - 實務上，會集中放在專案下的 `lib` 目錄，再透過設定，讓專案中的程式可以使用 `jar` 中，所包含的 `class`。

## 設定使用其他的 jar
  在專案 `JavaLab` 上，案右鍵，選 `Properties`

## Libraries 中加入 Add Jars
  - 1. `Java Build Path`
  - 2. `Libraries`
  - 3. 選擇 要匯入的 `Libraries` 後
  - 4. 右方選單選擇 `Add JARs`

## Libraries 中加入 Jar 等於 classpath 中設定 jar
  - 把 `jar` 複製到 `lib` 目錄下
  - `Java Build Path` 就可找到該 `Libraries`。

