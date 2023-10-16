import{_ as s,c as a,o as t,a as l}from"./app.b24c6e2d.js";const A=JSON.parse('{"title":"16. 修飾子","description":"","frontmatter":{"title":"16. 修飾子"},"headers":[{"level":2,"title":"Afccess Control Modifier 使用的位置","slug":"afccess-control-modifier-使用的位置","link":"#afccess-control-modifier-使用的位置","children":[]},{"level":2,"title":"final 修飾子","slug":"final-修飾子","link":"#final-修飾子","children":[]},{"level":2,"title":"static 修飾子","slug":"static-修飾子","link":"#static-修飾子","children":[]},{"level":2,"title":"static final","slug":"static-final","link":"#static-final","children":[]},{"level":2,"title":"static block","slug":"static-block","link":"#static-block","children":[]},{"level":2,"title":"abstract 修飾子","slug":"abstract-修飾子","link":"#abstract-修飾子","children":[]},{"level":2,"title":"final、static、abstract 使用的位置","slug":"final、static、abstract-使用的位置","link":"#final、static、abstract-使用的位置","children":[]}],"relativePath":"guide/edu/chapter_16.md"}'),n={name:"guide/edu/chapter_16.md"},e=l(`<h1 id="_16-修飾子" tabindex="-1">16. 修飾子 <a class="header-anchor" href="#_16-修飾子" aria-hidden="true">#</a></h1><h2 id="afccess-control-modifier-使用的位置" tabindex="-1">Afccess Control Modifier 使用的位置 <a class="header-anchor" href="#afccess-control-modifier-使用的位置" aria-hidden="true">#</a></h2><table><thead><tr><th></th><th>類別*</th><th>建構方法</th><th>屬性實體變數</th><th>方法</th></tr></thead><tbody><tr><td>public</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>protected</td><td></td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>no modifier 預設</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>private</td><td>**Inner class 可用</td><td>✓</td><td>✓</td><td>✓</td></tr></tbody></table><h2 id="final-修飾子" tabindex="-1">final 修飾子 <a class="header-anchor" href="#final-修飾子" aria-hidden="true">#</a></h2><ul><li><code>final</code> 可以用在類別、方法、變數以及物件參考。 <ul><li><code>類別</code>：表示該類別無法被繼承，不會有子類別。</li><li><code>方法</code>：表示該方法不能被覆寫(Override)改變其行為。</li><li><code>變數</code>：final 變數再給定值後，不能再利用等於(=)指定另外的值。 <ul><li><code>物件參考</code>：無法指定為另外的物件，不能再利用等於(=)指定為其他物件。</li></ul></li></ul></li></ul><h2 id="static-修飾子" tabindex="-1">static 修飾子 <a class="header-anchor" href="#static-修飾子" aria-hidden="true">#</a></h2><ul><li>類別中的方法或者屬性如果宣告為 <code>static</code>。 <ul><li>表示此方法或屬性為類別等級，又稱為類別(靜態)屬性(變數)以及類別(靜態)方法。</li><li>[重點] 不用物件即可呼叫 <code>static</code> 方法或者屬性。</li></ul></li><li>類別本身在 <code>JVM</code> 啟動時，自動被載入至 <code>Heap 記憶體</code> 中，<code>static</code> 變數及方法也一併隨著類別被載入。 <ul><li><code>static</code> 方法不能呼叫 <code>non-static</code> 方法(一般方法)及屬性，因為一般方法及屬性都需要先有物件才能使用。</li><li><code>static</code> 方法中，也不能使用 <code>this 關鍵字</code>，因為 <code>static</code> 是 <code>class</code> 等級不需要的物件， <code>this</code> 指的是物件本身。</li></ul></li></ul><h2 id="static-final" tabindex="-1">static final <a class="header-anchor" href="#static-final" aria-hidden="true">#</a></h2><ul><li>系統中常利用 <code>static final</code> 來定義系統常數，例如：圓周率，優點是節省記憶體，定義為類別常數時，不會因為每產生一個物件就多一個實體變數(屬性) <ul><li>例如：<code>public static final double TAX = 0.5;</code></li></ul></li></ul><h2 id="static-block" tabindex="-1">static block <a class="header-anchor" href="#static-block" aria-hidden="true">#</a></h2><ul><li><code>static</code> 區塊會隨著類別被載入記憶體時執行，只會『 執行一次 』。<div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Product</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> TAX</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    TAX </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">static block</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TestStatic</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Calculator</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tax</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li></ul><h2 id="abstract-修飾子" tabindex="-1">abstract 修飾子 <a class="header-anchor" href="#abstract-修飾子" aria-hidden="true">#</a></h2><ul><li><code>abstract</code> 為抽象，用在類別及方法的修飾子上。 <ul><li><ol><li><code>abstract 方法</code>，該方法沒有實作，只有方法上的定義，通常是留給子類別實作，也就是父類別並不提供基本行為。</li></ol><ul><li><code>public abstract void calculate(int price);</code></li></ul></li><li><ol start="2"><li><code>abstract 類別</code>，一旦該類別中有任何一個方法為 <code>abstract</code>，則該類別稱為『 抽象類別 abstract class 』，必須於 class 前加上 <code>abstract</code> 修飾。例如：<code>public abstract class Product</code></li></ol><ul><li>[注意] 抽象類別無法用 <code>new</code> 來產生物件，既然有方法沒有實作，如果可以產生物件呼叫到該方法時，就會有問題。</li><li>類別中就算沒有抽象方法，也是可以加上 <code>abstract</code> 變成抽象類別，不希望該類別用來產生物件時，可以利用 <code>abstract</code>。</li></ul></li></ul></li><li>使用時機：利用抽象類別將方法定義好，實作留給『 <code>子類別</code> 』來發揮。</li></ul><h2 id="final、static、abstract-使用的位置" tabindex="-1">final、static、abstract 使用的位置 <a class="header-anchor" href="#final、static、abstract-使用的位置" aria-hidden="true">#</a></h2><table><thead><tr><th></th><th>類別</th><th>屬性</th><th>方法</th><th>建構方法</th></tr></thead><tbody><tr><td>final</td><td>✓<br>不可繼承</td><td>✓<br>不可改變</td><td>✓<br>不可覆寫</td><td></td></tr><tr><td>static</td><td>inner class 才有可能</td><td>✓<br>class等級</td><td>✓<br>class等級</td><td></td></tr><tr><td>abstract</td><td>✓<br>抽象類別</td><td></td><td>✓<br>抽象方法</td><td></td></tr></tbody></table>`,15),c=[e];function o(i,r,p,d,b,h){return t(),a("div",null,c)}const y=s(n,[["render",o]]);export{A as __pageData,y as default};
