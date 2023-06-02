---
title: 2. Eclipse 開發工具的介紹與使用
---

# 2. Eclipse 開發工具的介紹與使用
## 下載 Eclipse zip
  - http://www.eclipse.org/downloads/eclipse-packages/
    - 下載 `Eclipse IDE for Java Developers`
    - 如果後面課程有教授 `Servlet` 、 `Jsp` 才下載 `Java EE Developers`
    - 解壓縮至 `c:\eclipse`
    - [註]課堂我們使用 `OpenJDK8` 跟 2020-06 版本。如果要裝最近的 `Eclipse`，請參考附錄2

## Workspace
  - 一個 `workspace` 為一個實體目錄。可以建置多個專案。
  - 相關的 Java 專案可以放在同一個 `workspace` 中。
  - 左下角的 Use this as default xxx，不要勾，方便切換至其他目錄。

## 設定 Source
  - 開發過程中我們會需要快速查詢使用的 `JDK` 程式，可以在 `eclipse` 中設定 `Source` 來源，方便切換至 `JDK` 的原始碼。
  - `JDK` 安裝中有附 `src.zip`，包含了『 `java 原始碼` 』及 `javadoc`。
  - 預設位置 `C:\Program Files\JDK8\src.zip`

## 設定編碼
  `Preferences` > `General` > `Workspace`
  
  `Text file encoding` 選 `Other` `UTF-8`

## 產生 Java Project
  `File` > `New` > `Java Project`

## 確認使用正確的 JavaSE xx 版本，按下 Finish
  - `Create a Java Project`
  - 輸入 `Project name`
  - `JRE` 選擇 Use an execution environment JRE: `JavaSE-1.8`

## 新增 class
  - 找到 `New Java Class` 按鈕
  - 輸入 `class Name`
  - 勾選 `Public static void main(String[] args)`，產生 `main` 方法

## 執行 Java 程式
  - 程式檔案上 `按右鍵` > `Run As` > `Java Application`。
  - Toolbar 上按 `執行鍵`，選擇要執行的應用程式。

## Perspective
  - 開發過程中可以透過不同『 `視角` 』來檢視檔案，常用的有兩個
    - `Java perspective`
    - `Debug perspective`

## 重設 Perspective 視窗排列
  - 每一個 `Perspective` 會有自己的視窗棑列
  - 可以自行移除或者重新編排 `Perspective` 中的視窗
  - 如果編排過程中有問題，可以 `Reset` 回復原始設定集值

## Java Perspective
  - 主要用來編輯Java程式
  - `alt + /` 可以用來輔助程式開發的提示，
    - 例如 main (`alt + /`)可以帶出main方法
    - sysout 可以帶出 `System.out.println()`
  - `ctrl + /` 註解該行程式
  - `alt + 上 下`，搬動程式上下移動
  - `ctrl + alt + 下` 複製該行程式
  - 執行main方法，`ctrl + F11`

## Java Compile
  - `eclipse` 會自動 compile java 程式，class 檔 預設會放在專案下的 `bin 目錄`。
    - 例如 `bin/HelloWorld.class`
  - 可以利用專案偏好設定修改輸出位置，位於 `Java Build Path`。
  - 匯出檔案：`File` > `expert` > `選擇要匯出的檔案 (preferences)` > `選擇資料夾`

## Java 編輯字型修改
  - 系統偏好設定中可以設定字型
  - 編輯區文字大小設定，輸入 `font`，在 `Java/ java Editor Text Font`
  - `Window` > `Preferences` > 搜尋 `font` > `Colors and Fonts` > `Java` > `java Editor Text Font`

## Console 字型修改
  - 系統偏好設定中可以設定字型
  - 編輯區文字大小設定，輸入 `font`，在 `Debug/ Console font`
  - `Window` > `Preferences` > 搜尋 `font` > `Colors and Fonts` > `Debug` > `Console font`

## 『重要』Auto Completion
  - `Eclipse` 會幫助編輯程式，自動帶出符合的程式，稱為 `Auto Completion`
  - `Windows` > `Preferences` > `Java` > `Editor` > `Content Assist` 中設定以下字觸發自動完成
    - 在 Auto Activation
      - 勾選 Enable auto activation
      - 在 Auto activation triggers for Java 輸入
        `.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_`