---
title: 2. 快速建立 Spring Boot 專案的方式
---

# 2. 快速建立 Spring Boot 專案的方式
  - `Spring Boot` 可根據以下方法快速建立專案。
    - 在官網 進行[設定](https://start.spring.io)，拿到 zip 壓縮檔後，在本地端解壓縮，用 `Eclipse` 匯入 `Maven` 專案。
    - 使用 `Spring Tool Suite` (也是一種 `Eclipse`) 的功能。
    - 或其他 IDE 的功能 (Intellij IDEA 付費版)

## 第一種：官方的 Spring Tools
  - ### 用 Spring Tools 快速建立 Spring Boot 專案
    - 使用官方的 [Spring Tools](https://spring.io/tools) 開啟新的 Spring Boot 專案。
      ![chapter_2-1](/sb_iSpan/chapter_2-1.png)
    - 下載 Windows 版的 `Spring Tools 4` for Eclipse
    - 這是一個 500多 MB 的 jar 壓縮檔。
      ![chapter_2-2](/sb_iSpan/chapter_2-2.png)
    - 下載下來的 jar 檔 > 按右鍵解壓縮。
    - 解壓縮後，會看到 4 個檔案。
    - 再解壓縮裡面的 `contents.zip` 檔案。
    - 在 `contents` 資料夾裡面，就會看到 `Spring Tools` 主程式。
  
  - ### 用 STS4 快速建立 Spring Boot 專案
    - 上一步解壓縮後，就會看到 `SpringToolSuite4` 主程式。
    - 這也是一個 `Eclipse` 開發環境。
    - 內建 `Java17` 的 `JRE` 環境 (可觀察 `SpringToolSuite4.ini` 檔案)

  - ### 調整 Eclipse 的環境
    - 調整 `workspace` 編碼：
      - `Window > Preference > General > Workspace > Text file encoding > UTF-8`
    - 指定 `Maven` 位置：
      - `Window > Preference > Maven > Installations > Add > Directory > 選擇 Maven 位置 > Apply`
    - 設置自訂的 `Maven User Settings`：
      - `Window > Preference > Maven > User Settings > 選擇 settings.xml 檔案 > Apply`

  - ### 創建 Spring Boot 專案
    - `File > new > Spring Sarter Project`。
    - `Name` 為專案名稱，修改時 `Artifact` 會自動更變。
    - `Package` 欄位可以設定最高層 `package`。

  - ### 選擇需要的套件
    - `Spring Boot` 快速啟動工具可以在這邊選擇所需的套件，用點選的方式就可以，不需要像之前到 `maven repository` 找套件的標籤，非常方便。
    - 被選擇的會被放在右方。
    - 選完後，按 `Finish`，Eclipse 就會透過 `Maven` 下載所需的套件。

## 第二種：藉由 Spring 官方網站的工具 製作新專案
  - ### 用官網快速建立 Spring Boot 專案
    - 請至 [Spring 官網](https://spring.io/)，選擇上列選單的 `Project > Spring Initailizr`
      ![chapter_2-7](/sb_iSpan/chapter_2-7.png)
    - 左側可以設定套件管理工具、`Spring Boot` 版本、語言、及一些自訂的 `Metadata`。
      ![chapter_2-8](/sb_iSpan/chapter_2-8.png)
    - 官網右側點選 `ADD DEPEDENCIES`
      ![chapter_2-9](/sb_iSpan/chapter_2-9.png)
      會跳出以下資訊，這邊可以選擇已經組合好的套件包。
      ![chapter_2-10](/sb_iSpan/chapter_2-10.png)
    - 點選框外可退出選擇，點選下方的 `EXPLORE` 預先查看 `pom` 檔的內容。
    - 常用的 `Spring Boot` 整合套件：
      - `Spring Wed`：可使用 `Restful`、`MVC`，且內建 `Tomcat`，預設連線池 (Connection Pool) 為 `HikariCP`。
      - `Spring Boot DevTools`：快速重啟專案的擴充功能，可以 `Live Reload` (改變程式碼時，馬上重新啟動專案)。
      - `Spring Data JPA`：與 `Spring` 整合的 `Hibernate`，可簡化 `Hibernate` 的設定。
      - `資料庫 Driver`。
    - 選好後，按下載就會得到一個專案的壓縮檔。 (不要跟 workspace 放一起)
    - 選好要放專案的位置後，將壓縮檔案移過去，解壓縮該檔案。

  - ### 調整 Eclipse 的環境
    - 調整 `workspace` 編碼：
      - `Window > Preference > General > Workspace > Text file encoding > UTF-8`
    - 指定 `Maven` 位置：
      - `Window > Preference > Maven > Installations > Add > Directory > 選擇 Maven 位置 > Apply`
    - 設置自訂的 `Maven User Settings`：
      - `Window > Preference > Maven > User Settings > 選擇 settings.xml 檔案 > Apply`
      - `Maven/conf/settings`

  - ### 用 STS4 快速建立 Spring Boot專案
    由 Eclipse 匯入 Maven 專案的步驟 (Import)
    - 1. `File > import` 找到 `Existing Maven Projects` (以專案為主)
    - 2. 看到 `src` 那一層，選擇資料夾，就可以匯入專案

  - ### SpringBoot 專案架構
    ```sh  
    ├─ src                
    │  ├─ main                          (主要程式)
    │  │  ├─ java                       (java 主程式)
    │  │  └─ resource                   (主要資源)
    │  │      ├─ static                 (靜態資源(css, js))
    │  │      ├─ templates              (模板)
    │  │      └─ application.properties (專案屬性設定檔)
    │  └─test                           (測試程式)
    └─pom.xml                           (套件管理)
    ```

    > 若使用 `jsp`，則 `靜態資源 `和 `jsp` 的檔案，還是須放在 `webapp 底下`。
