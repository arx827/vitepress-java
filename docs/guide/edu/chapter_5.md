---
title: 5. 迴圈
---

# 5. 迴圈
## 迴圈
  - 程式中，常需要重複執行某些指令，例如：從 1 加到 100，常會應用迴圈，分成以下幾種
    - `for 迴圈`
    - `while 迴圈`
    - `do while 迴圈`
  - `break`、`continue` 使用

## for 迴圈
  - `for 迴圈` 為三種迴圈中最常使用的迴圈，主要用來執行重複的程式。例如：從 1 加到 10。
    ```java
    for(初值設定; 判斷條件; 次數控制){
      // 重複執行的程式
    }
    ```

    執行順序
    1. `初值設定`，例如 `int i = 0`
    2. `判斷條件`，判斷是否為真，如果為真，則執行 大括號中的程式，否則迴圈結束
    3. 執行 `次數控制`，例如 i++
    4. `判斷條件`，判斷是否為真，如果為真，則 執行 `次數控制`，否則迴圈結束
    (持續 3 -> 4 -> 3 -> ...)

    ```java
    for(int i = 1; i <= 100; i++){
      System.out.println(i);
    }
    ```

    初始化計數器 `i = 1`<br>
    判斷 `i` 是否 `小於等於 100`，如果是則執行 內部程式 `System.out.println(i)`，<br>
    執行 `i++`，`i` 為 `2`<br>
    `2 <= 100`，執行 內部程式，<br>
    ...<br>
    ，直到 `i <= 100` 為 `false`，則迴圈停止<br>

## Lab
  - 計算 `1` 加到 `100` 的總和
  - 計算 `1` 到 `100` 中，所有奇數的總和

  ```java
  int sum = 0;
  for(int i = 1; i <= 100; i++){
    sum = sum + i;
  }
  System.out.println("總和= " + sum);
  ```

## break、continue
  - 迴圈中可以使用 `break` 跳出迴圈
  - 迴圈中可以使用 `continue` 跳過下方的程式，繼續迴圈的下一次執行。

  ```java
  int sum = 0;
  for(int i = 1; i <= 100; i++){
    // 如果是偶數則跳過
    if(i % 2 == 0){
      continue;
    }
    if(i >= 50) break; // 加到超過 50 就停止
    System.out.println("i =" + i);
    sum = sum + i;
  }
  System.out.println(sum);
  ```

## while 迴圈
  ```java
  while( 判斷條件 ){
    // 重複執行的程式
  }
  ```

  只要 `判斷條件` 為真，就會一直執行。

  - 範例
    ```java
    int i = 1;
    int sum = 0;
    while( i <= 100){
      sum = sum + i;
      i++;
    }
    System.out.println(sum);
    ```

## do while 迴圈
  ```java
  do {
    // 執行的程式
  }while( 判斷條件 )
  ```

  `do while` `至少` 會執行括號中的程式 `一次`

  - 範例
    ```java
    int i = 1;
    int sum = 0;
    do {
      sum = sum + i;
      i++;
    }while( i <= 100)
    System.out.println(sum);
    ```

## Lab 雙層迴圈
  - 印出 9 x 9 乘法表
    ```java
    for(int i = 1; i <= 9; i++){
      for(int j = 1; j <= 9; j++){
        System.out.print(i + "x" + j + "=" + (i*j) + " ");
      }
      System.out.println();
    }
    ```
