---
title: SVG filterとCSS filterの対応ブラウザについて
description: SVG filterとCSS filterの対応ブラウザについての話。
date: 2015-03-02
tags: web, memo
---

画像にぼかしをかけたくて、filterの対応ブラウザについて調べたのでメモ。  

filterをかける方法は2種類あって、SVGを使う方法とCSSのみでやる方法があります。  
従来はSVGを使用する方法しかなかったが、CSSでのfilterに対応するブラウザが増えてきているので、CSS Filter Effectsを使えるものは使い、フォールバックとしてSVG filtersを使用するという認識です。

結論から言うと、IE9以下とAndroid4.3以下を無視できるのであれば問題なく使用できそうです。


## SVG filters

[SVG filters \| Can I use](http://caniuse.com/#search=svg%20filter)  
IE9以下とAndroid4.3以下が未対応。  
比較的モダンな環境であれば導入ができそう。



## CSS Filter Effects

[CSS Filter Effects \| Can I use](http://caniuse.com/#search=css%20filter)  
IEが全滅で、またもAndroid4.3以下が未対応。  



## 参考

filterの適用については下記などを参考に。

[Frosting Glass with CSS Filters \| CSS-Tricks](https://css-tricks.com/frosting-glass-css-filters/)  
[CSS と SVG で曇りガラスのような効果を作る \| Unformed Building](http://unformedbuilding.com/articles/frosted-glass-effect-with-css-and-svg/)