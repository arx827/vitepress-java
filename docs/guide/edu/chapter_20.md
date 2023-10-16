---
title: 20. Object類別
---

# 20. Object類別
## Object類別
  - `java.lang.Object` 是 `Java` 中所有的類別的『 `父類別` 』，在 `Object` 上的所有方法、所有物件都會有。
  - `public class Employee extends Object` (extends Object 可省略不寫)。
  - 任何物件都可以轉型成 `Object`，例如：`Object obj1 = notebook;`

  | 回傳       | 方法                  | 說明                                 |
  |-----------|----------------------|--------------------------------------|
  | `Class`   | `getClass()`         | 取得Class『 物件 』                    |
  | `boolean` | `equals(Object obj)` | 確認兩物件是否相同                      |
  | `int`     | `hashCode()`         | 物件的hashCode                        |
  | `String`  | `toString()`         | 描述該物件的文字，System.out.println使用 |
  | `void`    | `finalize()`         | GC清除該物件前會呼叫，利用覆寫來清除資源    |

## equals
  - `Java` 中要比較兩物件是否相同，必須使用 `equals` 方法，例如： `a.equals(b)`。
  - `==` 是比較兩物件的『 `記憶體位置` 』是否相同，例如： `a == b`。

  ```java
  public class Employee {
    private String id; // 員工編號
    public Employee(String id) {
      this.id = id;
    }
  }
  ```

  ```java
  public class EmployeeEquals {
    public static void main(String[] args) {
      Employee e1 = new Employee("001");
      Employee e2 = new Employee("001");
      System.out.println(e1.equals(e2)); // false，因為 記憶體位置不相等
    }
  }
  ```

## equals 實作與覆寫
  - `java.lang.Object` 內的預設 `equals` 實作是利用 `==`(記憶體位置)做判斷。如果必須進行『 邏輯上的物件相等 』(Logical equality)(例如：員工編號 001 就是要相等)，必須自行覆寫該類別的 `equals` 方法。
  - 在覆寫 `equals` 方法時，也必須覆寫 `hashCode` 方法，如果兩個物件使用 `equals` 測試結果為相等，兩個物件的 `hashCode` 必須相等。

  ```java
  public class Object {
    public boolean equals(Object obj) {
      return (this == obj);
    }
  }
  ```

## equals
  ```java
  public class Employee {
    private String id;
    public Employee(String id) {
      this.id = id;
    }

    public boolean equals(Object obj) {
      // 是 Employee 才能比較
      if (obj instanceof Employee) {
        Employee emp = (Employee) obj;
        // 比較 id 值，用string方式比較
        if (id != null) {
          return id.equals(emp.id);
        }
      }
      return false; // 其他情況不相等
    }

    public int hashCode() {
      return id != null ? id.hashCode() : 0;
    }
  }
  ```

## hash code
  - `Java` 執行期間，對同一物件呼叫 `hashCode()` 方法，必須回傳相同的結果。
  - `hash code` 可以想成，產生一個能代表此物件的數字。
  - 如果兩個物件使用 `equals(Object)` 測試結果為相等
    - 兩個物件的 `hashCode` 必須相同。
  - 如果兩個物件『 不相等 』(使用 equals 為 false)
    - 『 並不需要 』回傳不同的 `hashcode`。

## finalize()
  ```java
  public class Employee {
    protected void finalize() throws Throwable {
      System.out.println("Employee 被 GC 了");
    }
  }
  ```

  ```java
  Employee e1 = new Employee();
  e1 = null;
  System.gc();
  ```

## toString()
  ```java
  public class Employee extends Object {
    private String id;
    public String toString() {
      return "員工編號=" + this.id;
    }
  }
  ```

  ```java
  public class TestEquals {
    public static void main(String[] args) {
      Employee employee = new Employee("002");
      System.out.println(employee); // 印出 員工編號=002
    }
  }
  ```

