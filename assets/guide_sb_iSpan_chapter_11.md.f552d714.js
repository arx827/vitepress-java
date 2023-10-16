import{_ as e,c as a,o,a as c}from"./app.b24c6e2d.js";const x=JSON.parse('{"title":"11. Ajax 非同步請求搭配 Restful API","description":"","frontmatter":{"title":"11. Ajax 非同步請求搭配 Restful API"},"headers":[{"level":2,"title":"用 Ajax 實現非同步請求 (Asynchronous Request)","slug":"用-ajax-實現非同步請求-asynchronous-request","link":"#用-ajax-實現非同步請求-asynchronous-request","children":[]},{"level":2,"title":"使用 AJAX 提高使用者體驗","slug":"使用-ajax-提高使用者體驗","link":"#使用-ajax-提高使用者體驗","children":[]}],"relativePath":"guide/sb_iSpan/chapter_11.md"}'),d={name:"guide/sb_iSpan/chapter_11.md"},r=c('<h1 id="_11-ajax-非同步請求搭配-restful-api" tabindex="-1">11. Ajax 非同步請求搭配 Restful API <a class="header-anchor" href="#_11-ajax-非同步請求搭配-restful-api" aria-hidden="true">#</a></h1><h2 id="用-ajax-實現非同步請求-asynchronous-request" tabindex="-1">用 Ajax 實現非同步請求 (Asynchronous Request) <a class="header-anchor" href="#用-ajax-實現非同步請求-asynchronous-request" aria-hidden="true">#</a></h2><ul><li>在非同步請求 (Asynchronous Request) 還沒被開發之前，如果要瀏覽一則留言，就必須向 <code>Server</code> 重新 <code>request</code> 一個完整的頁面。等待頁面切換的這段時間畫面往往會卡住不動，直到接收 <code>response</code>，才會重新渲染 (<code>render</code>) 畫面。</li><li>而 <code>Ajax</code> 技術的出現，讓瀏覽器可以向 <code>Server</code> 請求資料而不需費時等待。當瀏覽器接收到 <code>response</code> 之後，新的內容就會即時地添入原本網頁。這也是為什麼當瀏覽 <code>Facebook</code>、<code>Twitter</code> 內容時，不會看見整個網頁一直重新整理。</li></ul><h2 id="使用-ajax-提高使用者體驗" tabindex="-1">使用 AJAX 提高使用者體驗 <a class="header-anchor" href="#使用-ajax-提高使用者體驗" aria-hidden="true">#</a></h2><ul><li>在一般的情境下，瀏覽器每次發出請求，都會接收到一個完整的 <code>HTML 網頁</code>，而伺服器回傳新網頁、瀏覽器重新演算網頁的過程，有一小段空白的等待時間。若使用者在網路不穩定的地方連線，或者傳遞的資料量龐大時，這一小段的空白時間就會嚴重影響到使用者體驗。</li><li>另外，從效率考量，有些請求/回應，其實只更新了局部的畫面，不需要每次都重新載入一個全新的網頁。因此，為了提升使用者體驗，並提高網頁的效率，而有了 <code>AJAX</code> 技術。透過 <code>AJAX</code> 技術，<code>client</code> 可以向 <code>server</code> 發出非同步請求，索取局部內容的資料進行抽換，大幅度降低每次請求與回應的資料量，從而提高了瀏覽速度。</li><li>使用 <code>AJAX</code> 不僅可以讓使用者在不刷新畫面的情況下繼續操作，不會有在操作途中「 <code>中斷</code> 」與「 <code>等候</code> 」的時間，創造了更佳的使用者體驗。</li></ul>',5),s=[r];function t(n,i,l,u,h,_){return o(),a("div",null,s)}const p=e(d,[["render",t]]);export{x as __pageData,p as default};
