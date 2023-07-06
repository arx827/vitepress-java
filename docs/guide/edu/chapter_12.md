---
title: 12. Pass By Value Or by Reference
---

# 12. Pass By Value Or by Reference
## Pass By Value 傳值
  ```java
  // PassValueTest.java
  public class PassValueTest {
    public static void main(String[] args) {
      int a = 10;
      System.out.println("呼叫 print 前 a值 =" + a);
      print(a);
      System.out.println("呼叫 print 後 a值 =" + a);
    }

    public static void print(int aa) {
      aa = aa + 1;
      System.out.println("印出 print 方法中的 aa =" + aa);
    }
  }
  ```

## Pass By Value 物件
  ```java
  // PassObjectTest.java
  public static void main(String[] args) {
    Employee employee = new Employee();
    employee.empno = 1001;
    employee.name = "David";
    employee.age = 20;
    System.out.println("更新前 年紀為 = " + employee.age);
    update(employee);
    System.out.println("更新後 年紀為 = " + employee.age)
  }

  public static void update(Employee emp) {
    emp.age = 18;
  }
  ```

## Pass By Reference
  - `Pass by reference` 指的是，將物件參考本身的記憶體位址傳入方法中，方法中可以指定物件參考指向新的物件。`Java` 並不支援此種傳址的形式。`C`、`C++`支援。

## 結論
  - `Java`『 只有 』`Pass by Value`
  - `基本型別` 當參數傳入時，其值並不會受到另一個方法的影響。
  - `物件型別` 當參數傳入時，會受到影響，因為傳入的是 `記憶體位址`，修改時會修改到 `原本的物件` (唯一的例外為 `String`)。
    - `String` 雖然為物件，但傳入方法中，並不會受到影響。
    - `String` 在 `Java` 中，是 `immutable` (無法修改)，而且是利用 `pool` 概念。
    - 當將變數指定另一個字串時，等於是重新取得 `pool` 中的另一個新的 `string`，並取得其位址放在變數上。