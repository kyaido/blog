---
title: table要素の中でpositionがabsoluteな要素の挙動について調べた
description: table要素の中でpositionがrelativeな要素の挙動について調べたの話。
date: 2015-03-23
tags: web
published: false
---

[CSS再入門 - display: tableの活用 3 \| CodeGrid](https://app.codegrid.net/entry/css-table-3)  

CodeGridの上記の記事を見返していたら、table関連の要素に対する`position: relative;`の仕様がCSS3で変わったとあったので、自分なりに調べてみました。  


## 経緯

### CSS2.1

[W3Cの仕様書](http://www.w3.org/TR/CSS21/visuren.html#choose-position)を見ると以下の記述があります。  

> The effect of 'position:relative' on table-row-group, table-header-group, table-footer-group, table-row, table-column-group, table-column, table-cell, and table-caption elements is undefined.


[CSS Level 2に基づいたMDNの日本語解説](https://developer.mozilla.org/ja/docs/Web/CSS/position)でも

> position:relative の効果は、table-*-group 、 table-row 、table-column 、 table-cell 、 table-caption 要素では未定義です。

と記述されています。  
そのため、css2.1に基づいて実装されているブラウザではtable関連の要素への`position: relative;`の指定は無効となり、table内で絶対配置した要素の起点とすることはできません。


### CSS3

[W3CのCSS Positioned Layout Module Level 3](http://www.w3.org/TR/css3-positioning/#valdef-position-positionfake-maybe-placeholderrelative-fake-maybe-placeholder)には


> * table-row-group, table-header-group, table-footer-group and table-row offset relative to its normal position within the table. If table-cells span multiple rows, only the cells originating in the relative positioned row is offset.
> * table-column-group, table-column do not offset the respective column and has no visual affect when position: relative is applied.
> * table-caption and table-cell offset relative to its normal position within the table. If a table cell spans multiple columns or rows the full spanned cell is offset.

と記述されています。  
正直言ってよくわかりませんが、table-cellの場合は通常通り起点が作成されるよということでいいんじゃないでしょうか。


## 現在の実際のところ

ということで、CSS3に基づいているブラウザであれば、table内での絶対配置も問題ないはずです。  
実際に各ブラウザで検証してみました。

検証には下記のHTMLを使用しました。

<iframe width="100%" height="300" src="//jsfiddle.net/kyaido/nn4uw8pf/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


### Google Chrome 41

問題なし


### firefox 36

問題あり（後述）


### IE11

問題なし


### IE10

問題なし


### IE9

問題なし


### IE8

CODEPENがIE8に未対応のため検証できず…


### mobile safari (iOS 7.1.2)

問題なし


### Android Browser (Android 4.1.1 Genymotion)

問題なし


### Android Browser (Android 2.3.7 Genymotion)

問題なし
