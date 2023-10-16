import{_ as s,c as n,o as a,a as l}from"./app.b24c6e2d.js";const u=JSON.parse('{"title":"9. String字串","description":"","frontmatter":{"title":"9. String字串"},"headers":[{"level":2,"title":"java.lang.String","slug":"java-lang-string","link":"#java-lang-string","children":[]},{"level":2,"title":"字串內容比較","slug":"字串內容比較","link":"#字串內容比較","children":[]},{"level":2,"title":"String 常用的方法","slug":"string-常用的方法","link":"#string-常用的方法","children":[]}],"relativePath":"guide/edu/chapter_9.md"}'),e={name:"guide/edu/chapter_9.md"},o=l(`<h1 id="_9-string字串" tabindex="-1">9. String字串 <a class="header-anchor" href="#_9-string字串" aria-hidden="true">#</a></h1><h2 id="java-lang-string" tabindex="-1">java.lang.String <a class="header-anchor" href="#java-lang-string" aria-hidden="true">#</a></h2><ul><li><code>String</code> 類別是 <code>Java</code> 中用來處理文字。相對於基本型別的 <code>char</code> 只能存單一字元，而 <code>String</code> 可以存多個字元 (字串)，使用 <code>雙引號 &quot;</code> 表示字串。</li><li><code>String</code> 在產生時，可以直接使用 <code>雙引號</code> 指定文字內容，在產生後是不能修改其內容的文字 (<code>immutable</code>)。產生方式有以下兩種。 <ul><li><code>String name = &quot;vincent&quot;;</code></li><li><code>String name = new String(&quot;vincent&quot;);</code></li></ul></li><li>為了效能，在上述第一種 雙引號的用法上，<code>Java</code> 使用了 <code>String pool</code>，將雙引號中的 <code>String</code> 放在池中，無論程式使用幾次，都是指向同一個物件，可以重覆使用，如果使用第二種 <code>new</code> 的方式，則會是新的物件。</li></ul><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 雙引號時，直接使用 String pool，如果 pool 中沒有，則會產生新的，如果已經存在，則回傳既有的</span></span>
<span class="line"><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vincent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vincent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> name1</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// new String</span></span>
<span class="line"><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">String</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vincent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> name2</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>「 <code>==</code> 」並不是比較兩個字串是否相等，而是比較變數中的值 (<code>記憶體位址</code>) 是否一樣。</p></blockquote><h2 id="字串內容比較" tabindex="-1">字串內容比較 <a class="header-anchor" href="#字串內容比較" aria-hidden="true">#</a></h2><ul><li>比較字串是否相同，使用的是 <code>String</code> 物件提供的方法，叫 <code>equals</code>。</li><li>比較字串時，「 <code>不能使用</code> 」等於 (<code>==</code>)，「 <code>等於</code> 」在 <code>Java</code> 中比較的是物件在 <code>記憶體中</code> 的「 <code>位址</code> 」。<div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vincent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vincent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">String</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vincent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name1</span><span style="color:#89DDFF;">));</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name2</span><span style="color:#89DDFF;">));</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><blockquote><p>用到 <code>方法</code> 都會有括號，沒有括號為 <code>屬性</code>，e.g.： <code>length()</code></p></blockquote><h2 id="string-常用的方法" tabindex="-1">String 常用的方法 <a class="header-anchor" href="#string-常用的方法" aria-hidden="true">#</a></h2><ul><li><h3 id="int-length" tabindex="-1"><code>int length()</code> <a class="header-anchor" href="#int-length" aria-hidden="true">#</a></h3> 回傳字串的長度。 <ul><li><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">資策會</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">());</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li><li><h3 id="int-indexof-string" tabindex="-1"><code>int indexOf(string)</code> <a class="header-anchor" href="#int-indexof-string" aria-hidden="true">#</a></h3> 判斷字串中是否包含指定的字，回傳符合的位置，從 <code>0</code> 起算，<code>-1</code> 表示找不到。 <ul><li><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">資策會305</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">305</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">));</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li><li><h3 id="string-substring-int-beginindex" tabindex="-1"><code>String substring(int beginIndex)</code> <a class="header-anchor" href="#string-substring-int-beginindex" aria-hidden="true">#</a></h3> 從 <code>beginIndex</code> 開始截字 <ul><li><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">資策會305</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substring</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">));</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 305</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li><li><h3 id="string-substring-int-beginindex-int-endindex" tabindex="-1"><code>String substring(int beginIndex, int endIndex)</code> <a class="header-anchor" href="#string-substring-int-beginindex-int-endindex" aria-hidden="true">#</a></h3> 取 <code>beginIndex</code> 至 <code>endIndex</code> 中的字，<br>注意：<code>endIndex</code> 上的字不取 <ul><li><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">資策會305</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substring</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">));</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 30</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li></ul>`,10),p=[o];function t(c,r,i,D,d,y){return a(),n("div",null,p)}const A=s(e,[["render",t]]);export{u as __pageData,A as default};
