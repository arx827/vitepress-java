---
title: 3. 基本資料型別 (Primitive Data Types)
---

# 3. 基本資料型別 (Primitive Data Types)
## 整數
  |名稱  |Byte|範圍              |初值|說明                     |
  |-----|:--:|-----------------:|:-:|-----------------------:|
  |byte |1   |-2⁷ ~ ( 2⁷ - 1 )  |0  |-128 ~ 127              |
  |short|2   |-2¹⁵ ~ ( 2¹⁵ - 1 )|0  |-32768 ~ 32767          |
  |int  |4   |-2³¹ ~ ( 2³¹ - 1 )|0  |-21億 ~ 21億             |
  |long |8   |-2⁶³ ~ ( 2⁶³ - 1 )|0L |-9.2 x 10¹⁸ ~ 9.2 x 10¹⁸|

  > [註] 1 byte = 8 bit

  - ### 變數宣告
    - 變數宣告方式：
      - 方法一：宣告型態
        - `資料型態 <空格> 變數名稱`
          ```java
          long salary;
          salary = 20000;
          ```

      - 方法二：直接宣告
        - `資料型態 <空格> 變數名稱 = 值`
          ```java
          long salary = 50000;
          ```
    - 同一型態資料可連續宣告，中間用逗號區隔，分號結尾
      ```java
      int i, j, k;
      ```
      ```java
      int i = 0, j = 1, k = 2;
      ```
    - 變數都必須給值後才能使用，而且相同變數名稱不能重覆宣告。實體變數為例外，宣告後如不給值會有預設值，請見 class 章節。

  - ### 變數命名規則
    

  - ### 基本型別宣告
  - ### byte 怎麼計算？ 1 byte = 8 bit
  - ### 相加
  - ### 資料溢位 (Overflow)

## 浮點數

## char boolean
  - ### 基本型別宣告
  - ### 跳脫字元
  - ### 保留字
  - ### Local Variable (區域變數)
  - ### Operators (運算子)
  - ### 算術運算子
  - ### Binary Numeric Promotion 二元數字運算晉升
  - ### 晉升(Promotion)與型別轉換(Casting)
  - ### Comparison Operators (比較運算子)
  - ### Conditional Operators (條件運算)
  - ### 真假值
  - ### Bitwise Operators (位元運算子)
  - ### 遞增、遞減運算
  - ### Assignment Operators (指定運算)
  - ### Conditional Operator `?:` (三元運算)
  - ### 運算優先順序 (Operator Precedence)