---
title: 4. 流程控制
---

# 4. 流程控制
## Block
  用大括號 `{ 程式 1; 程式 2; }` 夾在一起的多個程式，稱為一個 `block`，最後的大括號後不用再加分號。程式 `Statement` 一定都是被「 `對稱` 」的大括號夾在一起。
  ```java
  {
    System.out.println("Hello World !=");
    System.out.println("Hello World !=");
    System.out.println("Hello World !=");
  }
  ```

## 流程控制
  - 程式中的流程控制有以下幾種：
    - `if else 敘述`
      ```java
      if( 判斷式1 ){
        // 如果 判斷式1 為 true，則執行這裡的程式，不再執行其他 if 判斷
      }else if( 判斷式2 ){
        // 如果 判斷式1 為 false，判斷式2 為 true，則執行這裡的程式，不再執行其他 if 判斷
      }else{
        // 上述的判斷式皆為 false，則執行 else 這裡的程式
      }
      ```

    - `switch statement`
      
## if else statement
  ```java
  // 如果 > 18，則成年
  int age = 20;
  if( age >= 18 ){
    System.out.println("成年");
  }
  ```
  ```java
  // 若 if 中只有單一敘述，則大括號可以省略
  int age = 20;
  if( age >= 18 ) System.out.println("成年");
  ```
  ```java
  // 如果 > 18，則成年，否則未成年
  if ( age >= 18 ){
    System.out.println("成年");
  }else{
    System.out.println("未成年");
  }
  ```
  ```java
  if ( age >= 30 ){
    System.out.println("壯年");
  }else if ( age >= 18 ){
    System.out.println("成年");
  }else {
    System.out.println("未成年");
  }
  ```

## 巢狀 if 敘述
  ```java
  if ( age >= 18 ){
    System.out.println("成年");
    if ( age >= 30 ){
      System.out.println("壯年");
    }
  }else{
    System.out.println("未成年");
  }
  ```

  > `format (整理格式)`： `ctrl` + `shift` + `f`

## switch
  - switch case 只能區分「 `整數` 」、「 `字元` 」或「 `字串` 」。
  - 用在判斷式選擇有限的情況下。
  - 括號中的 `expression` 會與 `value1`、`value2` 作比較，如果相等則會進行 `case` 內的程式運算，每一個 `case` 的最後一定要加上 `break`。如果沒有加上 `break`，則會繼續往下執行。

  ```java
  switch( expression ){
    case value1:
      // 程式;
      break;
    case value2:
      // 程式;
      break;
    default:
      // 程式;
  }
  ```
  ```java
  int classroom = 204;
  switch( classroom ){
    case 204:
      System.out.println("人數 大於等於 30人");
      break;
    case 305:
      System.out.println("人數 小於 30 大於等於 20人");
      break;
    default:
      System.out.println("default 其他");
  }
  ```