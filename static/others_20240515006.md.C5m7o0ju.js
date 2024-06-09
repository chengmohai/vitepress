import{_ as s,a as n,o as a,aQ as e}from"./chunks/framework.e2Sa0dFk.js";const _=JSON.parse('{"title":"HomeBrew 换国内源","description":"","frontmatter":{},"headers":[],"relativePath":"others/20240515006.md","filePath":"others/20240515006.md","lastUpdated":1717904896000}'),p={name:"others/20240515006.md"},r=e(`<h1 id="homebrew-换国内源" tabindex="-1">HomeBrew 换国内源 <a class="header-anchor" href="#homebrew-换国内源" aria-label="Permalink to &quot;HomeBrew 换国内源&quot;">​</a></h1><h2 id="设置-homebrew-安装源为阿里源" tabindex="-1">设置 homebrew 安装源为阿里源 <a class="header-anchor" href="#设置-homebrew-安装源为阿里源" aria-label="Permalink to &quot;设置 homebrew 安装源为阿里源&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="拷贝代码" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 临时替换</span></span>
<span class="line"><span>export HOMEBREW_INSTALL_FROM_API=1</span></span>
<span class="line"><span>export HOMEBREW_API_DOMAIN=&quot;https://mirrors.aliyun.com/homebrew-bottles/api&quot;</span></span>
<span class="line"><span>export HOMEBREW_BREW_GIT_REMOTE=&quot;https://mirrors.aliyun.com/homebrew/brew.git&quot;</span></span>
<span class="line"><span>export HOMEBREW_CORE_GIT_REMOTE=&quot;https://mirrors.aliyun.com/homebrew/homebrew-core.git&quot;</span></span>
<span class="line"><span>export HOMEBREW_BOTTLE_DOMAIN=&quot;https://mirrors.aliyun.com/homebrew/homebrew-bottles&quot;</span></span>
<span class="line"><span>brew update</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 永久替换</span></span>
<span class="line"><span></span></span>
<span class="line"><span># bash 用户</span></span>
<span class="line"><span>echo &#39;export HOMEBREW_API_DOMAIN=&quot;https://mirrors.aliyun.com/homebrew-bottles/api&quot;&#39; &gt;&gt; ~/.bash_profile</span></span>
<span class="line"><span>echo &#39;export HOMEBREW_BREW_GIT_REMOTE=&quot;https://mirrors.aliyun.com/homebrew/brew.git&quot;&#39; &gt;&gt; ~/.bash_profile</span></span>
<span class="line"><span>echo &#39;export HOMEBREW_CORE_GIT_REMOTE=&quot;https://mirrors.aliyun.com/homebrew/homebrew-core.git&quot;&#39; &gt;&gt; ~/.bash_profile</span></span>
<span class="line"><span>echo &#39;export HOMEBREW_BOTTLE_DOMAIN=&quot;https://mirrors.aliyun.com/homebrew/homebrew-bottles&quot;&#39; &gt;&gt; ~/.bash_profile</span></span>
<span class="line"><span>source ~/.bash_profile</span></span>
<span class="line"><span>brew update</span></span>
<span class="line"><span></span></span>
<span class="line"><span># zsh 用户</span></span>
<span class="line"><span>echo &#39;export HOMEBREW_API_DOMAIN=&quot;https://mirrors.aliyun.com/homebrew-bottles/api&quot;&#39; &gt;&gt; ~/.zshrc</span></span>
<span class="line"><span>echo &#39;export HOMEBREW_BREW_GIT_REMOTE=&quot;https://mirrors.aliyun.com/homebrew/brew.git&quot;&#39; &gt;&gt; ~/.zshrc</span></span>
<span class="line"><span>echo &#39;export HOMEBREW_CORE_GIT_REMOTE=&quot;https://mirrors.aliyun.com/homebrew/homebrew-core.git&quot;&#39; &gt;&gt; ~/.zshrc</span></span>
<span class="line"><span>echo &#39;export HOMEBREW_BOTTLE_DOMAIN=&quot;https://mirrors.aliyun.com/homebrew/homebrew-bottles&quot;&#39; &gt;&gt; ~/.zshrc</span></span>
<span class="line"><span>source ~/.zshrc</span></span>
<span class="line"><span>brew update</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="恢复默认配置" tabindex="-1">恢复默认配置 <a class="header-anchor" href="#恢复默认配置" aria-label="Permalink to &quot;恢复默认配置&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="拷贝代码" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>unset HOMEBREW_BREW_GIT_REMOTE</span></span>
<span class="line"><span>git -C &quot;$(brew --repo)&quot; remote set-url origin https://github.com/Homebrew/brew</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unset HOMEBREW_API_DOMAIN</span></span>
<span class="line"><span>unset HOMEBREW_CORE_GIT_REMOTE</span></span>
<span class="line"><span>BREW_TAPS=&quot;$(BREW_TAPS=&quot;$(brew tap 2&gt;/dev/null)&quot;; echo -n &quot;\${BREW_TAPS//$&#39;\\n&#39;/:}&quot;)&quot;</span></span>
<span class="line"><span>for tap in core cask{,-fonts,-versions} command-not-found services; do</span></span>
<span class="line"><span>    if [[ &quot;:\${BREW_TAPS}:&quot; == *&quot;:homebrew/\${tap}:&quot;* ]]; then</span></span>
<span class="line"><span>        brew tap --custom-remote &quot;homebrew/\${tap}&quot; &quot;https://github.com/Homebrew/homebrew-\${tap}&quot;</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>brew update</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,5),l=[r];function t(o,i,c,b,u,m){return a(),n("div",null,l)}const E=s(p,[["render",t]]);export{_ as __pageData,E as default};
