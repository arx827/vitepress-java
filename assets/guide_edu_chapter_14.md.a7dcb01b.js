import{_ as s,c as n,o as a,a as l}from"./app.b24c6e2d.js";const p="/vitepress-java/edu/edu-chapter-14-1.png",e="/vitepress-java/edu/edu-chapter-14-2.png",u=JSON.parse('{"title":"14. 建構方法 Constructor","description":"","frontmatter":{"title":"14. 建構方法 Constructor"},"headers":[{"level":2,"title":"建構方法 Constructor","slug":"建構方法-constructor","link":"#建構方法-constructor","children":[]},{"level":2,"title":"Overloaded Constructors","slug":"overloaded-constructors","link":"#overloaded-constructors","children":[]},{"level":2,"title":"建構方法 存取控制","slug":"建構方法-存取控制","link":"#建構方法-存取控制","children":[]},{"level":2,"title":"Eclipse","slug":"eclipse","link":"#eclipse","children":[]}],"relativePath":"guide/edu/chapter_14.md"}'),o={name:"guide/edu/chapter_14.md"},t=l(`<h1 id="_14-建構方法-constructor" tabindex="-1">14. 建構方法 Constructor <a class="header-anchor" href="#_14-建構方法-constructor" aria-hidden="true">#</a></h1><h2 id="建構方法-constructor" tabindex="-1">建構方法 Constructor <a class="header-anchor" href="#建構方法-constructor" aria-hidden="true">#</a></h2><ul><li><p>建構方法為產生物件(<code>new</code>)時使用的方法，<code>跟類別同名，但沒有『 回傳值 』</code>，主要 <code>在物件被產生時候執行，通常用來初始化屬性的預設值</code>。</p></li><li><p>使用 <code>new</code> 呼叫建構方法，在執行時 <code>Java</code> 會分配記憶體給該物件。</p><ul><li>例如： <code>Car car = new Car();</code></li></ul></li><li><p>在預設情況(沒有手動提供任何構建方法時)，<code>compiler</code> 會自動生成一個沒有任何參數的建構方法，以供呼叫。所以我們才能使用 <code>new Car()</code>、<code>new Employee()</code>。</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Car</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Car</span><span style="color:#A6ACCD;"> car </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Car</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>等同於</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Car</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 編譯器會自動產生預設建構方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Car</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>『 注意 』一旦手動提供任何的建構方法，則 <code>compiler</code> 就不會自動生成預設建構方法。</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Car</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> model</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> price</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 新增建構方法來初始化顏色</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Car</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">color</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">color </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// TestCar.java</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Car</span><span style="color:#A6ACCD;"> car </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Car</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 編譯有錯</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Car</span><span style="color:#A6ACCD;"> car </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Car</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">w</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 這裡只能呼叫有提供的建構方法</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><h2 id="overloaded-constructors" tabindex="-1">Overloaded Constructors <a class="header-anchor" href="#overloaded-constructors" aria-hidden="true">#</a></h2><ul><li><p>類別可以宣告多個建構方法(<code>覆載</code>)，目的：</p><ul><li>利用不同的參數組合形成不同建構方法 (<code>Overloaded Constructor</code>)，來達到提供某些屬性的預設值或者預設行為。</li></ul></li><li><p>多個建構方法的情況下，可以使用 <code>this(...)</code>，來呼叫別的建構方法。</p></li><li><p>『 <code>重要</code> 』<code>this</code> 方式呼叫其他建構方法，必須放在第一行。</p></li><li><p>建構方法被呼叫的方式只有兩種</p><ol><li><code>new 建構方法()</code></li><li>其他『 建構方法 』(一般方法不行)，利用 <code>this(xxx, xxx)</code> 方式呼叫</li></ol></li></ul><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Car</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> model</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> price</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Car</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">model</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">color</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">setModel</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">color </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 多載</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Car</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">color</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Yaris</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> color</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">// 此 this() 指 Car()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">Car</span><span style="color:#A6ACCD;"> car </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Car</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">W</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// 參數不同的建構方法</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="建構方法-存取控制" tabindex="-1">建構方法 存取控制 <a class="header-anchor" href="#建構方法-存取控制" aria-hidden="true">#</a></h2><table><thead><tr><th>Modifier</th><th style="text-align:center;">Class</th><th style="text-align:center;">Package</th><th style="text-align:center;">Subclass</th><th style="text-align:center;">World</th><th>備註</th></tr></thead><tbody><tr><td>public</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td>公開，表示其他類別都可以看到該屬性或者方法</td></tr><tr><td>protected</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;"></td><td>只有同一個套件或者子類別才能看到該屬性及方法</td></tr><tr><td>no modifier 預設</td><td style="text-align:center;">✓</td><td style="text-align:center;">✓</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td>任何修飾子都沒有加，同一個package才能看到該屬性及方法</td></tr><tr><td>private</td><td style="text-align:center;">✓</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td>只有該類別才能看到該屬性及方法</td></tr></tbody></table><h2 id="eclipse" tabindex="-1">Eclipse <a class="header-anchor" href="#eclipse" aria-hidden="true">#</a></h2><p>Eclipse 可以幫你快速利用屬性產生建構方法</p><ul><li><p>程式空白處按右鍵，選 <code>Source/Generate Constructor using Fields</code></p><p><img src="`+p+'" alt="edu-chapter-14-1"></p></li><li><p>選擇要參與的屬性，先勾選 <code>Omit call to default constructor super()</code>，後面繼承章節再說明。</p><p><img src="'+e+'" alt="edu-chapter-14-2"></p></li></ul>',11),r=[t];function c(i,y,C,A,D,d){return a(),n("div",null,r)}const b=s(o,[["render",c]]);export{u as __pageData,b as default};
