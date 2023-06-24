---
title: 2. Java程式語法簡介
---

# 2. Java程式語法簡介
## 2.1 Java程式語言的特色
  - ### 1. 跨平台
    Java 不只能在 Windows 上執行，還能在其他平台作業執行。

  - ### 2. 簡單
    開發 Java 程式比 C++ 簡單。Java 移除了複雜的指標使用，用介面代替多重繼承，而記憶體管理也改為自動管理，不需人為操作。

  - ### 3. 物件導向
    Java 是標準的物件導向程式語言，和 C++ 一樣擁有繼承、多型、封裝等3大特色。

  - ### 4. 安全
    Java 具有可以調整的安全性設定，也可以簽署數位簽名。

  - ### 5. 穩定的
    - Java 語言對型態的檢查十分地嚴格，是一個非常重視型別 (strong-type) 的程式語言，可以使用如列舉型別 (enum)、泛型 (generic) 等功能在程式編譯時即檢查出型態問題，避免可能發生的錯誤。
    - Java 語言不支援指標，可以避免因為記憶體控制不當所引起的問題；提供記憶體回收的功能，因此扣除程式對物件的不當使用，較不會有 OutOfMemory 的狀況。
    - Java 語言提供例外處理 (exception handling) 以防止程式因例外而異常終止。
  
  - ### 6. 多執行緒
    Java 具備同時執行多項工作能力，例如可以同時網路下載影片和放映。對 Java 而言多執行緒是自動控制的。

## 2.2 Java的跨平台運行
  - ### 程式大略分為『系統程式』與『應用程式』。
    - #### 系統程式
      管理硬體資源，大多時候不是針對特定目的而撰寫。如 Windows、Mac、Linux 等。
    
    - #### 應用程式
      針對某些特定目的而撰寫，大多時候運行在系統程式之上。如 Java 程式、Office、Firefox 等。

  - ### 程式語言可分成幾大類：
    - #### 機器語言
      機器語言 (Machine Language) 是電腦可以直接執行的語言，它的語言指令是由一連串 0 與 1 所排列組合而成的。

    - #### 組合語言
      機器語言的指令是由 0 與 1 組成，對人類來講很難辨識。於是便將機器語言基本指令用符號來幫助人類記憶，這些符號就稱為記憶符號；所有的記憶符號就組成了組合語言 (Assembly Language)。組合語言是一種以符號來代替機器語言的程式語言，因此也是最接近機器語言的程式語言。

    - #### 高階語言
      具有機器無關 (machine independence) 的特性。在某一種電腦上所撰寫的高階語言程式，如果設計結構良好，通常不需要太多的修改就能挪到別種電腦上使用，這種特色又稱 跨平台(cross platform) 或 可攜性 (portability)。

  電腦硬體真正可以看得懂的是`機器碼`，只有以機器碼撰寫的檔案才可以被電腦執行 (稱為 `執行檔`)，因此必須將程式設計師撰寫的程式碼透過一連串的流程轉變成執行檔。大體上透過兩種方式進行：
  - #### 1. 編譯器
    `編譯` 是先將程式全部翻譯成機器碼後，電腦一口氣執行這些機器碼；以後再執行程式，只要執行機器碼，不需要重新編譯。
  - #### 2. 直譯器
    `直譯` 則是每翻譯完一段程式，電腦就執行一段機器碼，接著再繼續翻譯下一段，直到結束為止。每次電腦重新執行程式都要再經過直譯的過程。

  Java 不同於一般的編譯語言和直譯語言。它首先將原始碼 (Source Code) 編譯成位元組碼 (Byte Code)，副檔名為 *.class，然後依賴各種不同平台上的 「`Java虛擬機器 (Virtual Machine)：JVM`」來解釋執行該 *.class 檔案，從而實作了「`一次編寫，到處執行 (Write once, run anywhere)`」的跨平台特性。

## 2.3 JDK、JRE 和 JVM 的差別
  - SDK (Software Development Kit，軟體開發工具包)：用於幫助開發人員提高工作效率。
  - JDK (Java Development Kit)：也稱 Java Software Development Kit，是 Java 開發工具包，主要用於構建在 Java 平台上執行的應用程式。可以到 Oracle 官網上選擇適合的作業系統進行[下載](https://www.oracle.com/tw/java/technologies/downloads/)、[Java SE8](https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html)。
  - JRE (Java Runtime Environment，Java執行環境)，也就是 Java 平台。所有的 Java 程式都要在 JRE 下才能執行。開發Java程式才需要JDK，如果只是要執行 Java 的程式或遊戲，只要裝 JRE 就可以了。

  <table>
    <tr>
      <td rowspan="5" style="vertical-align: initial; width: 100px; background: #152b24;">JDK</td>
      <td colspan="2">程式語言主體 (Java Language)</td>
    </tr>
    <tr>
      <td colspan="2">開發工具 (Tools & Tool APIs)</td>
    </tr>
    <tr>
      <td rowspan="3" style="vertical-align: middle; width: 100px; background: #152b24;">JRE</td>
      <td>部署技術 (Deployment)</td>
    </tr>
    <tr>
      <td>Java SE API</td>
    </tr>
    <tr>
      <td style="background: #152b24;">JVM</td>
    </tr>
  </table>

## 2.4 Java 整合開發工具 (IDE) 介紹
  比較常見的開發工具有：
  - 1. Oracle 公司的 `NetBeans IDE`
  - 2. Oracle 公司的 `JDeveloper`
  - 3. IBM 公司的` Eclipse`

  - ### 2.4.1 下載 Eclipse 作為開發工具
    [下載 Eclipse](http://www.eclipse.org/downloads/)

    可以選擇要下載「 `Java EE Developers 版` 」或是「 `Java Developers 版` 」的工具。後者指的就是「 `Java SE Developers 版` 」。
    「 `Java EE Developers 版` 」好處是支援 `Java EE 規格`，所以可以開發如網站等 EE 範圍的 `Java` 程式；壞處是比較佔空間。

    下載完成後，可移動到欲放置的空間，Eclipse 的特色之一就是不用安裝，直接點擊 eclipse.exe 即可開始使用。

  - ### 2.4.2 建立 Eclipse 專案，並開發、執行 Java 程式
    - #### step 01
      輸入 `工作空間 (Workspace)`。
      顧名思義，接下來所有在 Eclipse 裡生成的專案或是程式檔案，都會放置在該路徑下。

    - #### step 02
      首次使用會出現 `歡迎(Welcome)` 畫面，點選左上角「 X 」按鍵，關閉該畫面。
    
    - #### step 03
      在左側空白的「 `Project Explorer` 」處，點選滑鼠右鍵，選擇「 `New` 」，再選擇「 `Java Project` 」，建立新專案。

    - #### step 04
      輸入 `專案名稱 (Project Name)`，並選擇合適的 `JRE 版本`。 如：jdk 1.8.0_45

    - #### step 05
      專案建立完成後，左側的「 `Project Explorer` 」內，將出現 `剛剛建立的專案名稱`，點選該專案，點擊滑鼠右鍵，選擇「 `New` 」，再選擇「 `Class` 」，建立新類別。

    - #### step 06
      在彈出的「 `New Java Class` 」視窗裡，輸入 `類別 (class) 名稱`，這裡用「 HelloWorld 」，再勾選「 `public static void main(String[] arg)` 」的核取方格。

    - #### step 07
      