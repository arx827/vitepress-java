---
title: 附錄一：JDK安裝
---

# 附錄一：JDK 安裝
## Open JDK
  - ### Redhat網站下載
    google redhat openjdk download
  - ### https://developers.redhat.com/products/openjdk/download/

## Open JDK 其他選擇
  - ### Zulu OpenJDK
  - ### ojdkbuild
    https://github.com/ojdkbuild/ojdkbuild

## 解壓縮至 C:\Program Files
  1. 解壓縮全部
  2. 選 C:\Program Files

## 修改資料夾名稱為 `JDK8`

## 系統環境變數
  1. 控制台 > 系統及安全性 > 系統
  2. 進階系統設定
  3. 環境變數

## 設定 `JAVA_HOME`
  1. 新增系統變數
  2. 變數名稱(N)：`JAVA_HOME`
  3. 變數值(V)：`C:\Program Files\JDK8`

## 設定 `JAVA_HOME/bin` 到 `Path` 變數
  1. 系統變數
  2. 編輯 Path (Path變數為系統搜尋執行檔的位置)
  3. 變數值：
    新增 `%JAVA_HOME%\bin` (注意前後有%)

## java - version
  - 打開 `cmd.exe` 執行 `java-version` 檢查版本
  - 打開 `cmd.exe` 執行 `where java` 檢查Java路徑

## 顯示副檔名
  取消 『 **隱藏已知檔案類型的副檔名** 』
  1. 檢視
  2. 選項
  3. 檢視 > 取消勾選 隱藏已知檔案類型的副檔名
  4. 套用