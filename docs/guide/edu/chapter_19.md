---
title: 19. 匿名類別 (內部類別)
---

# 19. 匿名類別 (內部類別 Anonymous Class)
## Anonymous Class
  - `Anonymous Class` 是一種不用宣告類別名稱，只要提供缺少的實作方法的類別，通常用在實作介面或者抽象類別。常在 視窗軟體 (JavaFX、Swing) 的觸發事件中，例如：點擊按鈕使用。
  - 語法
    ```java
    介面 變數名稱 = new 介面(){
      // 實作介面方法
    }
    ```
    ```java
    抽象類別 變數名稱 = new 抽象類別(){
      // 實作抽象類別中的方法
    }
    ```

## Anonymous Calss 範例
  ```java
  package inner;

  import interFace.Expirable;
  import java.util.Date;
  import java.util.GregorianCalender;

  public class TestAnonymousClass {
    public static void main(String[] args){
      // 以下例子為 Anonymous class，利用介面的型態產生物件
      // 程式可閱讀性很高，因為都在附近
      Accountant acc = new Accountant() {
        public void 報稅() {
          System.out.println("網路申報綜所稅");
        }
      };
      acc.報稅();
    }
  }
  ```

## Anonymous Class
  ```java
  public class AnonymousClassDemo {
    public static void main(String[] args) {
      Accountant acc = new Accountant() {
        ...
      }
    }
  }
  ```

  ```tree
  | interFace
    └─ AnonymousClassDemo.class
    └─ AnonymousClassDemo$1.class
    └─ AnonymousClassDemo$2.class
  ```

  `Anonymous class` 以 `外部類別$1.class`、`外部類別$2.class`