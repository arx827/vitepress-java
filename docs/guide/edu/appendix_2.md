---
title: 附錄二：Eclipse新版安裝
---

# 附錄二：Eclipse新版安裝
使用舊的JDK環境
## Eclipse 2020-09
  - 2020-09 之後版本的 `eclipse` 需要 `JDK11` 以上的版本才能啟動。
  - 可以使用 `Eclipse installer` 而不要下載 `zip` 檔的 `eclipse`，會自動安裝 `jre` 供 `eclipse` 啟動。但安裝時間會比較久。https://www.eclipse.org/downloads/packages/

  - 安裝時，選擇 `Eclipse IDE for Enterprise java Developers` (Enterprise版本)
    1. 選擇 JDK 版本
    2. 設定安裝 eclipse 位置
    3. 執行 `Install`

  - 安裝完後，Eclipse會預設以所選的JDK版本啟動。環境預設執行專案也是所選的JDK版本。
  - 如果要以其他JDK版本執行專案，必須再另外設定。

  - 偏好設定中 Java/Installed JREs
    要新增 JDK8 的環境，目前圖示是 eclipse 附設安裝的 jre 
    1. 開啟設定 (Preferences)
    2. Java > 
    3. Installed JREs >
    4. Add

  - 選擇 `Standard VM`
  - 選擇 `JDK8` 的目錄按下 `Finish`
    - JRE home：`C:\Program Files\JDK8`
    - JRE name：`JDK8`

  - 打勾 剛新增的 `JDK8`，表示預設使用這個版本的JDK

## 產生 Java Project
  Create a Java Project
  JRE 選擇 `Use a project specific JRE:` `JDK8`