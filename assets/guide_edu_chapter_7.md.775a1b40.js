import{_ as s,c as a,o as n,a as l}from"./app.b24c6e2d.js";const A=JSON.parse('{"title":"7. 類別Class 及 物件Object","description":"","frontmatter":{"title":"7. 類別Class 及 物件Object"},"headers":[{"level":2,"title":"類別及物件","slug":"類別及物件","link":"#類別及物件","children":[]},{"level":2,"title":"類別Class及物件","slug":"類別class及物件","link":"#類別class及物件","children":[]},{"level":2,"title":"實體變數 Instance Variable","slug":"實體變數-instance-variable","link":"#實體變數-instance-variable","children":[]},{"level":2,"title":"物件形式變數 Reference Variable","slug":"物件形式變數-reference-variable","link":"#物件形式變數-reference-variable","children":[]},{"level":2,"title":"記憶體位址","slug":"記憶體位址","link":"#記憶體位址","children":[]},{"level":2,"title":"== 相等","slug":"相等","link":"#相等","children":[]},{"level":2,"title":"Heap","slug":"heap-2","link":"#heap-2","children":[]},{"level":2,"title":"null (清空值)","slug":"null-清空值","link":"#null-清空值","children":[]},{"level":2,"title":"main 方法結束","slug":"main-方法結束","link":"#main-方法結束","children":[]},{"level":2,"title":"Garbage Collection","slug":"garbage-collection","link":"#garbage-collection","children":[]}],"relativePath":"guide/edu/chapter_7.md"}'),e={name:"guide/edu/chapter_7.md"},o=l(`<h1 id="_7-類別class-及-物件object" tabindex="-1">7. 類別Class 及 物件Object <a class="header-anchor" href="#_7-類別class-及-物件object" aria-hidden="true">#</a></h1><h2 id="類別及物件" tabindex="-1">類別及物件 <a class="header-anchor" href="#類別及物件" aria-hidden="true">#</a></h2><ul><li><code>Java</code> 是 <code>物件導向 (object-oriented)</code> 語言，提供以物件方式進行程式設計，<code>類別 (class)</code> 則代表了物件的藍圖。 <ul><li>例如：設計師規劃了藍圖，說明房子中有幾房幾廳。而遵循藍圖蓋出來的房子則為蓋出來的實體物件，一張設計圖 (<code>類別</code>) 可以蓋出很多一樣的房子 (<code>物件</code>)。</li></ul></li><li>程式中的物件可以有 <code>屬性</code> 及 <code>方法</code>，<code>屬性</code> 好比物件「 <code>擁有</code> 」的東西，而 <code>方法</code> 則表示該物件能執行的「 <code>行為或功能</code> 」。屬性及方法都必須定義在 <code>類別</code> 中。 <ul><li>例如：車子擁有輪胎 (<code>屬性</code>) 可以跑 (<code>方法</code>)。</li></ul></li><li><code>類別</code> 可以想像成一個自定義的資料型態，來擴充原本基本資料型別。</li></ul><h2 id="類別class及物件" tabindex="-1">類別Class及物件 <a class="header-anchor" href="#類別class及物件" aria-hidden="true">#</a></h2><ul><li>類別中定義物件擁有的 <code>屬性</code> 及 <code>方法</code>，例如：員工會有編號 empno 會有姓名 name。</li><li>「 重要 」類別的名稱，如果為 <code>Employee</code>，則檔案名稱必須為 <code>Employee.java</code>，類別的命名首字大寫。</li><li>使用「 <code>new</code> 」關鍵字來「 <code>產生</code> 」一個實際可操作的「 <code>物件</code> 」並指定變數。 <ul><li>所謂產生就是在 <code>記憶體</code> 中畫出一塊區域來儲存這個物件所需要的資料。</li></ul></li><li>物件宣告方式 <ul><li><code>類別名稱 變數名稱 = new 類別名稱();</code><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Employee</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> empno</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 員工編號     (屬性，又稱為實體變數)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 員工姓名     (屬性，又稱為實體變數)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TestEmployee</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 記憶體的區塊，new 才會有記憶體空間，才能放資料。</span></span>
<span class="line"><span style="color:#A6ACCD;">    emp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Vincent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    emp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">empno </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li></ul></li></ul><h2 id="實體變數-instance-variable" tabindex="-1">實體變數 Instance Variable <a class="header-anchor" href="#實體變數-instance-variable" aria-hidden="true">#</a></h2><ul><li><code>實體變數</code> 為定義在類別內，宣告在方法外 <ul><li>例如： <code>int empno; // 員工編號</code></li><li>每一個物件 (<code>new Employee()</code>) 都會擁有屬於該物件的<code>實體變數</code>，跟隨著該物件。</li><li><code>實體變數</code> 是一種「 <code>擁有</code> 」的概念，使用 <code>.</code> 即可指定或者取得實體變數的值。 <ul><li>例如： <code>employeeA.name</code></li></ul><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">emp1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vincent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// emp1 物件有自己的實體變數</span></span>
<span class="line"><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">emp2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Andy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// emp2 物件也會有自己的實體變數</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul></li></ul><h2 id="物件形式變數-reference-variable" tabindex="-1">物件形式變數 Reference Variable <a class="header-anchor" href="#物件形式變數-reference-variable" aria-hidden="true">#</a></h2><ul><li>在 <code>Java</code> 中，除了基本型別所定義的變數之外 (例如： <code>int a = 1;</code> )，其他類別形式的變數 (例如： <code>Employee emp = new Employee()</code>)，變數的內容都為該物件在「 <code>記憶體中的位址</code> 」，稱為「 <code>物件參考變數</code> 」，<code>(物件)參考變數中的值，為該物件位於記憶體中的位址</code>。</li><li>物件產生時，存放在記憶體的「 <code>heap</code> 」區塊，而非 <code>stack</code> 區。</li><li>在其他語言中，就是 <code>指標</code>。</li></ul><h2 id="記憶體位址" tabindex="-1">記憶體位址 <a class="header-anchor" href="#記憶體位址" aria-hidden="true">#</a></h2><ul><li><code>物件</code> 在記憶體中，必須有 <code>記憶體的位址</code> 才能找到。</li><li><code>物件參考變數</code>，存放的是該物件的記憶體「 <code>位址</code> 」。</li><li><code>基本型別變數</code>，存放在實際上的「 <code>值</code> 」。</li></ul><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// stack</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// heap</span></span>
<span class="line"><span style="color:#A6ACCD;">  emp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Vincent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  emp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">empno </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><h3 id="stack" tabindex="-1">stack <a class="header-anchor" href="#stack" aria-hidden="true">#</a></h3></li></ul><table><thead><tr><th>a</th><th>1</th></tr></thead><tbody><tr><td>emp</td><td>10080004 ( <code>對應 heap 記憶體位址</code> )</td></tr></tbody></table><ul><li><h3 id="heap" tabindex="-1">heap <a class="header-anchor" href="#heap" aria-hidden="true">#</a></h3></li></ul><table><thead><tr><th>10080004</th><th>Employee</th></tr></thead><tbody><tr><td></td><td><code>name = &quot;Vincent&quot;</code><br><code>empno = 1</code></td></tr></tbody></table><h2 id="相等" tabindex="-1">== 相等 <a class="header-anchor" href="#相等" aria-hidden="true">#</a></h2><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">  emp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Vincent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  emp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">empno </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">  emp2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">empno </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">emp </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> emp2</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><h3 id="stack-1" tabindex="-1">stack <a class="header-anchor" href="#stack-1" aria-hidden="true">#</a></h3></li></ul><table><thead><tr><th>emp</th><th>10080004 ( <code>對應 heap 記憶體位址</code> )</th></tr></thead><tbody><tr><td>emp2</td><td>10080020 ( <code>對應 heap 記憶體位址</code> )</td></tr></tbody></table><ul><li><h3 id="heap-1" tabindex="-1">heap <a class="header-anchor" href="#heap-1" aria-hidden="true">#</a></h3></li></ul><table><thead><tr><th>10080004</th><th>Employee</th></tr></thead><tbody><tr><td></td><td><code>name = &quot;Vincent&quot;</code><br><code>empno = 1</code></td></tr><tr><td>10080020</td><td>Employee</td></tr><tr><td></td><td><code>name = </code><br><code>empno = 2</code></td></tr></tbody></table><p><code>==</code> 在 <code>Java</code> 中比較的是 <code>變數中存放的 值</code>，而 <code>emp</code>、<code>emp2</code> 中存放的為 <code>記憶體的位址</code>，因此記憶體位址不同，答案則為 <code>false</code></p><h2 id="heap-2" tabindex="-1">Heap <a class="header-anchor" href="#heap-2" aria-hidden="true">#</a></h2><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">PUblic</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> voie </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">  emp2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">empno </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  emp2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> emp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">emp </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> emp2</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 比較記憶體位址</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>當 <code>物件參考變數</code> 給予新的值時，原本的物件 <code>emp2</code> 會因為沒有被「 <code>參考</code> 」到，會被 <code>Java</code> 的 <code>Garbage collection</code> 機制所回收，以釋放記憶體。</p><ul><li><h3 id="stack-2" tabindex="-1">stack <a class="header-anchor" href="#stack-2" aria-hidden="true">#</a></h3></li></ul><table><thead><tr><th>emp</th><th>10080004 ( <code>對應 heap 記憶體位址</code> )</th></tr></thead><tbody><tr><td>emp2</td><td>1008004 ( <code>對應 heap 記憶體位址</code> )</td></tr></tbody></table><ul><li><h3 id="heap-3" tabindex="-1">heap <a class="header-anchor" href="#heap-3" aria-hidden="true">#</a></h3></li></ul><table><thead><tr><th>10080004</th><th>Employee</th></tr></thead><tbody><tr><td></td><td><code>name = &quot;Vincent&quot;</code><br><code>empno = 1</code></td></tr><tr><td>10080020</td><td>Employee (<code>會被消除</code>)</td></tr><tr><td></td><td><code>name = </code><br><code>empno = 2</code></td></tr></tbody></table><h2 id="null-清空值" tabindex="-1">null (清空值) <a class="header-anchor" href="#null-清空值" aria-hidden="true">#</a></h2><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">  emp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">  emp2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">  System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">emp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// Exception</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>當 <code>物件參考變數</code> 被給予 <code>null</code> 值時，等於清空 <code>emp</code> 及 <code>emp2</code> 變數中的值 (<code>位址</code>)，沒有被變數參考到的物件，就會等待被 <code>回收 (GC)</code>。</p><ul><li><h3 id="stack-3" tabindex="-1">stack <a class="header-anchor" href="#stack-3" aria-hidden="true">#</a></h3></li></ul><table><thead><tr><th>emp</th><th>null ( <code>斷連 記憶體位址</code> )</th></tr></thead><tbody><tr><td>emp2</td><td>null ( <code>斷連 記憶體位址</code> )</td></tr></tbody></table><ul><li><h3 id="heap-4" tabindex="-1">heap <a class="header-anchor" href="#heap-4" aria-hidden="true">#</a></h3></li></ul><table><thead><tr><th>10080004</th><th>Employee (<code>會被消除</code>)</th></tr></thead><tbody><tr><td></td><td><code>name = &quot;Vincent&quot;</code><br><code>empno = 1</code></td></tr><tr><td>10080020</td><td>Employee (<code>會被消除</code>)</td></tr><tr><td></td><td><code>name = </code><br><code>empno = 2</code></td></tr></tbody></table><h2 id="main-方法結束" tabindex="-1">main 方法結束 <a class="header-anchor" href="#main-方法結束" aria-hidden="true">#</a></h2><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>當 <code>main</code> 方法結束時，<code>stack</code> 區中 <code>main</code> 方法所使用的記憶體，也會整個被清除，進而造成 <code>Heap</code> 區的物件沒有被參考到，也會被回收。</p><h2 id="garbage-collection" tabindex="-1">Garbage Collection <a class="header-anchor" href="#garbage-collection" aria-hidden="true">#</a></h2><ul><li><code>Garbage Collection</code> 為一個 <code>Java</code> 清理記憶體機制，掃描 <code>heap</code> 區塊，如果有物件沒有被變數參考到，則會被釋放出來，簡稱「 <code>GC</code> 」。</li><li><code>GC</code> 執行時間不定，通常在記憶體不足時，<code>GC</code> 會啟動。</li><li><code>Garbage Collection</code> 執行時，需要消耗較大的計算，早期 <code>JVM</code> 在執行 <code>GC</code> 時，會暫停所有在執行作業，造成程式執行停頓。近幾年有所謂的 <code>Parallel GC</code>，利用平行運算，大幅減少了 <code>GC</code> 所需要的時間。</li></ul>`,42),p=[o];function c(t,r,i,d,y,D){return n(),a("div",null,p)}const F=s(e,[["render",c]]);export{A as __pageData,F as default};
