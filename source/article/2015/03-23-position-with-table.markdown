---
title: table関連の要素に対するposition:relative;の挙動について調べた
description: table関連の要素の中での絶対配置された要素の起点がどこになるかを調べた話。
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
各セルのボーダーの内側上下左右に赤色のボックスが絶対配置されているのが望ましい挙動になります。

<iframe width="100%" height="300" src="//jsfiddle.net/kyaido/nn4uw8pf/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Google Chrome 41

問題なし


### Firefox 36

問題あり（後述）  
topとleftの値を0にしていても、ボーダーとの間が1px空いてしまう  
border-collapseの指定をseparateにすると直る


### IE11

問題なし


### IE10

問題なし


### IE9

問題なし


### IE8

問題あり  
topとleftの値を0にしていても、ボーダーの上にボックスが重なってしまう  
border-collapseの指定をseparateにすると直る


### mobile safari (iOS 7.1.2)

問題なし


### Android Browser (Android 4.1.1, Genymotion)

問題なし


### Android Browser (Android 2.3.7, Genymotion)

問題あり  
CSS2.1の仕様に則った挙動

---

## 雑感

対応ブラウザに注意は必要ですが、table内での絶対配置は問題なく使用できそうです。  

IE8とAndroid 2.3.7に関しては、対応しなくてもよい環境も多いと思うのでとりあえず無視します。  
問題となるのはFirefoxの挙動ですが、検証のコードではtableの要素に`border-collapse: collapse`を指定しています。  
この指定を`border-collapse: separate`に変更すれば期待通りの位置に絶対配置されるようなので、一応の対応にはなります。  

このあたりのFirefoxの挙動は、別途調査が必要そうです。