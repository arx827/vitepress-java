---
title: 6. Debug
---

# 6. Debug
## Bug
  - 程式開發過程中，很容易發生語法沒有錯誤，但執行結果不正確，這種情況稱之為 `Bug`。
  - `deBug` 就是除蟲，要找到執行不正確的程式，有以下方法：
    - 利用 `System.out.println` 把執行中的結果印出來，比對是否合乎預期。
    - 藉由工具 `eclipse` 的 `debug` 功能，熟悉 `debug` 的功能是成為優秀開發人員的重要能力。

  - 範例
    ```java {2}
    for(int i = 1; i <= 9; i++){
      for (int j = 1; j <= 9; j++){
        System.out.println(i + "x" + j + "=" + (i * j));
      }
    }
    ```

## 設置中斷點 Breakpoint
  - 中斷點的設置，可以讓程式執行暫停在設定的位置。以方便我們執行以下的觀察當前變數的值。
  - 在編輯器的左方，有一條藍色的柱狀條，雙擊可以設定或取消程式暫停的位置。

    ![edu-chapter-6-1](/edu/edu-chapter-6-1.png)

## Debug
  - `debug` 過程，必須按下 `debug` 按鈕，而非一般的執行按鈕
    ![edu-chapter-6-2](/edu/edu-chapter-6-2.png)

## Debug Perspective
  ![edu-chapter-6-3](/edu/edu-chapter-6-3.png)

## 變數 Variable view
  ![edu-chapter-6-4](/edu/edu-chapter-6-4.png)

  綠色的底，即為目前程式暫停的位置。<br>
  右方 `Variables` 視窗，會顯示目前的區域 `變數名稱` 以及 `值`

## Steps
  ![edu-chapter-6-5](/edu/edu-chapter-6-5.png)

## 觀察變數 Expressions View
  - 可以將想觀察的變數或者程式指令加到 `Expressions View` 中
    - 特定變數：`i or j`
    - 程式指令：`i + "x" + j + "=" + (i * j)`

    ![edu-chapter-6-6](/edu/edu-chapter-6-6.png)

  - 可以只觀察想要看的變數或者程式指令
    - 特定變數：`i or j`
    - 程式指令：`i + "x" + j + "=" + (i * j)`

    ![edu-chapter-6-7](/edu/edu-chapter-6-7.png)