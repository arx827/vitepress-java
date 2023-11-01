---
title: 23. 泛型 Generic
---

# 23. 泛型 Generic
## 泛型 (Generic) 型態參數化
  - 泛型主要將『 型態參數化 』(Parameterized types)，`JDK 1.5` 後提供功能。
  - 在實務上，`Collection(List, Set)` 中通常會收集『 `特定型態` 』的物件。並不會文字、數字夾雜在一個集合中。利用泛型可以限制集合中為『 `特定型態` 』的物件。
    - 可以在 `Compile` 時期，就提早發現錯誤。
    - 在取出時，也無需進行强制轉換。
  - 語法：宣告時利用 `<T>` 來指定， `T` 稱為型態參數 (`Type Parameter`)。
    - `List<Product> list = new ArrayList<Product>();` JDK1.5、1.6 new時需要 `<>` 中再指定型態。
    - `List<Product> list = new ArrayList<>();` JDK7 後可以省略後方的型態參數。
    - 泛型只能用在物件型態，要使用基本型態 (`int`, `double`, `float` ...)於泛型上，必須使用 `Wrapper class`。

## 比較
  `List` 中可以放入任何物件。
  ```java
  List list = new ArrayList<>();
  list.add("Hello");
  list.add("World");
  list.add(3.0);  // compile 不會報錯

  for (int i = 0; i < list.size(); i++) {
    // 取出時為 Object 型態
    Object item = list.get(i);
    System.out.println(item);
  }
  ```

  ---

  宣告 `List` 中只能放入 `String`
  ```java
  List<String> list = new ArrayList<>();
  list.add("Hello");
  list.add("World");
  list.add(3.0);  // compile 會報錯

  for (int i = 0; i < list.size(); i++) {
    // 取出時已為 String 型態，不用轉換
    String item = list.get(i);
    System.out.println(item);
  }
  ```

## Map & Set
  ```java
  Set<String> set = new HashSet<>();
  set.add("Hello");
  set.add("World");

  for (String item: set) {
    System.out.println(item);
  }
  ```

  ---

  ```java
  Map<String, Integer> map = new HashMap<>();
  map.put("John", 2000);
  map.put("David", 1000);
  map.put("Tom", 5000);

  Set<String> keys = map.keySet();
  for(String key: keys) {
    System.out.println("name = " + key + ", salary = " + map.get(key));
  }
  ```
