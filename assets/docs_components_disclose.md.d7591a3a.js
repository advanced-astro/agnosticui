import{_ as u,a as k,b as g,c as d}from"./Angular-icon.63775078.js";import{_ as m,m as h,r as f,o as p,c as l,a as e,e as n,w as a,F as y,b as s,u as w,A as b,d as o}from"./app.eae8984b.js";import"./index.56618267.js";const v={name:"DiscloseExamples",components:{Disclose:h}},q=e("h3",null,"Disclose default",-1),_=s(" Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia). "),A=s(" Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia). "),S=s(" Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and Serena Williams (Wikipedia). "),D=s(" Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win four Australian Open singles titles in the Open Era (Wikipedia). "),x={class:"mbe48"},G=e("h3",null,"Disclose with background",-1),N=e("p",{class:"mbs16 mbe24"},[s("The earlier example favors using a \u201Cclean\u201D if minimalist style. However, there may be use cases that that require a stronger visual affordance for the disclose elements themeselves. If that's the case, you can utilize the "),e("code",null,"isBackground"),s(" prop which achieves the following:")],-1),W=s(" Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia). "),T=s(" Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia). "),R=s(" Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and Serena Williams (Wikipedia). "),M=s(" Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win four Australian Open singles titles in the Open Era (Wikipedia). ");function O(c,i,r,H,U,V){const t=f("Disclose");return p(),l(y,null,[e("section",null,[q,n(t,{"is-open":"",title:"Roger Federer"},{default:a(()=>[_]),_:1}),n(t,{title:"Serena Williams"},{default:a(()=>[A]),_:1}),n(t,{title:"Stefi Graf"},{default:a(()=>[S]),_:1}),n(t,{title:"Andre Agassi"},{default:a(()=>[D]),_:1})]),e("section",x,[G,N,n(t,{isBackground:"",title:"Roger Federer"},{default:a(()=>[W]),_:1}),n(t,{isBackground:"",title:"Serena Williams"},{default:a(()=>[T]),_:1}),n(t,{isBackground:"",title:"Stefi Graf"},{default:a(()=>[R]),_:1}),n(t,{isBackground:"",title:"Andre Agassi"},{default:a(()=>[M]),_:1})])],64)}var C=m(v,[["render",O]]);const E=o('<h1 id="disclose" tabindex="-1">Disclose <a class="header-anchor" href="#disclose" aria-hidden="true">#</a></h1><p>The <code>Disclose</code> component is often used as a supplemental button to Disclose things.</p><div class="mbs24"></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><div class="mbe24"></div>',5),I=o('<div class="mbe32"></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="flex"><h3 id="react" tabindex="-1"><img src="'+u+`" alt="react logo">React </h3></div><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-react/dist/esm/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Disclose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">YourComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span>
      <span class="token attr-name">is-open</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Roger Federer<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Roger Federer is a Swiss professional tennis player. 
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Serena Williams<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Serena Jameka Williams is an American professional tennis
      player who has won 23 Grand Slams.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Stefi Graf<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Stefanie Maria Graf is a former professional tennis
      player who won 22 Grand Slams.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Andre Agassi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Andre Kirk Agassi is an American former world No. 1
      tennis player who has won 8 Grand Slams. 
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe48<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Roger Federer<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Roger Federer is a Swiss professional tennis player.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Serena Williams<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Serena Jameka Williams is an American professional tennis player.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Stefi Graf<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Stefanie Maria Graf is a German former professional tennis player.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Disclose</span></span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Andre Agassi<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Andre Kirk Agassi is an American former world No. 1 tennis player.
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Disclose</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span>
</code></pre></div><p>React: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Disclose.tsx" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/stories/Disclose.stories.tsx" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe32"></div><div class="flex"><h3 id="vue-3" tabindex="-1"><img src="`+k+`" alt="Vue 3 logo">Vue 3 </h3></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// Import AgnosticUI global common &amp; component CSS</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/common.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;agnostic-vue/dist/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Disclose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;DiscloseExamples&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Disclose<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Disclose default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span>
      <span class="token attr-name">is-open</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Roger Federer<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Roger Federer is a Swiss professional tennis player. 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Serena Williams<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Serena Jameka Williams is an American professional tennis
      player who has won 23 Grand Slams.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Stefi Graf<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Stefanie Maria Graf is a former professional tennis
      player who won 22 Grand Slams.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Andre Agassi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Andre Kirk Agassi is an American former world No. 1
      tennis player who has won 8 Grand Slams. 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe48<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Disclose with background<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>The earlier example favors using
      a <span class="token entity named-entity" title="\u201C">&amp;ldquo;</span>clean<span class="token entity named-entity" title="\u201D">&amp;rdquo;</span> if minimalist style. However, there
      may be use cases that that require a stronger visual affordance
      for the disclose elements themeselves. If that&#39;s the case, you
      can utilize the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>isBackground<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> prop which achieves
      the following:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Roger Federer<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Roger Federer is a Swiss professional tennis player.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Serena Williams<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Serena Jameka Williams is an American professional tennis player.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Stefi Graf<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Stefanie Maria Graf is a German former professional tennis player.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span>
      <span class="token attr-name">isBackground</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Andre Agassi<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      Andre Kirk Agassi is an American former world No. 1 tennis player.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Vue 3: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Disclose.vue" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Disclose.stories.js" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe24"></div>`,10),B=s("Note: Vue 2 is not supported"),F=o('<div class="mbe32"></div><div class="flex"><h3 id="svelte" tabindex="-1"><img src="'+g+`" alt="Svelte logo">Svelte </h3></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token string">&#39;agnostic-svelte/css/common.min.css&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Disclose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;agnostic-svelte&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs16 mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Disclose default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span>
    <span class="token attr-name">is-open</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Roger Federer<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the
    Association of Tennis Professionals. He has won 20 Grand Slam men<span class="token entity named-entity" title="&#39;">&amp;apos;</span>s singles titles, an
    all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Serena Williams<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam
    singles titles, the most by any player in the Open Era, and the second-most of all time behind
    Margaret Court. The Women<span class="token entity named-entity" title="&#39;">&amp;apos;</span>s Tennis Association ranked her singles world No. 1 on eight
    separate occasions between 2002 and 2017.(Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Stefi Graf<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1
    for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since
    the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and
    Serena Williams (Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Andre Agassi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major
    champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam
    tournaments. Agassi was the first man to win four Australian Open singles titles in the Open
    Era (Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbs24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mbe24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Disclose with background<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">isBackground</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Roger Federer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the
    Association of Tennis Professionals. He has won 20 Grand Slam men<span class="token entity named-entity" title="&#39;">&amp;apos;</span>s singles titles, an
    all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">isBackground</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Serena Williams<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam
    singles titles, the most by any player in the Open Era, and the second-most of all time behind
    Margaret Court. The Women<span class="token entity named-entity" title="&#39;">&amp;apos;</span>s Tennis Association ranked her singles world No. 1 on eight
    separate occasions between 2002 and 2017.(Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">isBackground</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Stefi Graf<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1
    for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since
    the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and
    Serena Williams (Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disclose</span> <span class="token attr-name">isBackground</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Andre Agassi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major
    champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam
    tournaments. Agassi was the first man to win four Australian Open singles titles in the Open
    Era (Wikipedia).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disclose</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Svelte: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Disclose/Disclose.svelte" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-svelte/src/lib/components/Disclose/Disclose.stories.js" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="flex"><h3 id="angular" tabindex="-1"><img src="`+d+`" alt="Angular logo">Angular (Experimental) </h3></div><p>In your Angular configuration (likely <code>angular.json</code>) ensure you&#39;re including the common AgnosticUI styles:</p><div class="mbe16"></div><p><code> &quot;styles&quot;: [&quot;agnostic-angular/common.min.css&quot;],</code></p><div class="mbe24"></div><p>Add AgnosticUI&#39;s <code>AgModule</code> module:</p><div class="language-js"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/platform-browser&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;agnostic-angular&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AppComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.component&#39;</span><span class="token punctuation">;</span>

@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">declarations</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>BrowserModule<span class="token punctuation">,</span> AgModule<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bootstrap</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>Now you can use in your components:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;your-component&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  &lt;div class=&quot;mbe48&quot;&gt;
    &lt;h3&gt;Multiple Disclose&lt;/h3&gt;
    &lt;p class=&quot;mbs16 mbe24&quot;&gt;Multiple disclose elements can be stacked to achieve a
      progressively disclosed pattern that resembles an Accordion pattern. Further,
      individual disclosed elements may be open by default if we supply the
      &lt;code&gt;isOpen&lt;/code&gt; prop as we do in the first disclose element below:
    &lt;/p&gt;
    &lt;ag-disclose isOpen
                  title=&quot;Roger Federer&quot;&gt;
      Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of
      Tennis
      Professionals. He has won 20 Grand Slam men&#39;s singles titles, an all-time record shared with Rafael Nadal and
      Novak
      Djokovic (Wikipedia).
    &lt;/ag-disclose&gt;
    &lt;ag-disclose title=&quot;Serena Williams&quot;&gt;
      Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the
      most
      by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women&#39;s Tennis
      Association
      ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia).
    &lt;/ag-disclose&gt;
    &lt;ag-disclose title=&quot;Stefi Graf&quot;&gt;
      Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377
      weeks
      and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968
      and
      third-most of all-time behind Margaret Court and Serena Williams (Wikipedia).
    &lt;/ag-disclose&gt;
    &lt;ag-disclose title=&quot;Andre Agassi&quot;&gt;
      Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996
      Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to
      win
      four Australian Open singles titles in the Open Era (Wikipedia).
    &lt;/ag-disclose&gt;
  &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">YourComponent</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>Angular: <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/disclose.component.ts" target="_blank" rel="noopener noreferrer">component source</a>, <a href="https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-angular/libs/ag/src/lib/disclose.component.stories.ts" target="_blank" rel="noopener noreferrer">storybook tests</a></p><div class="mbe32"></div><h2 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-hidden="true">#</a></h2><p>You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, and Angular (experimental). The following will set this up locally:</p><div class="language-shell"><pre><code><span class="token function">git</span> clone git@github.com:AgnosticUI/agnosticui.git
<span class="token builtin class-name">cd</span> agnosticui/<span class="token operator">&lt;</span>PACKAGE_NAME<span class="token operator">&gt;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> i <span class="token comment"># e.g. cd agnosticui/agnostic-react &amp;&amp; npm i</span>
<span class="token comment"># You can then run any of the top-level scripts:</span>
<span class="token function">npm</span> run start:react <span class="token comment"># or cd agnostic-react &amp;&amp; npm run storybook</span>
<span class="token function">npm</span> run start:vue <span class="token comment"># or cd agnostic-vue &amp;&amp; npm run storybook</span>
<span class="token function">npm</span> run start:angular <span class="token comment"># or cd agnostic-angular &amp;&amp; npm run storybook</span>
<span class="token function">npm</span> run start:svelte <span class="token comment"># or cd agnostic-angular &amp;&amp; npm run storybook</span>
</code></pre></div><p>See <a href="https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#usage" target="_blank" rel="noopener noreferrer">Running Storybook</a>.</p>`,19),$='{"title":"Disclose","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Storybook","slug":"storybook"}],"relativePath":"docs/components/disclose.md","lastUpdated":1648766934340}',j={},Y=Object.assign(j,{setup(c){return(i,r)=>(p(),l("div",null,[E,n(C),I,n(w(b),{type:"warning"},{default:a(()=>[B]),_:1}),F]))}});export{$ as __pageData,Y as default};
