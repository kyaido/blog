---
title: 複数行レイアウトでflexboxを使う場合の注意点
description: 複数行レイアウトでflexboxを使う場合の注意点の話。
date: 2015-02-25
tags: web
---

flexbox、素晴らしいですね。  
解説記事も多くありますし、面倒くさい構文の書き分けもautoprefixerなどを通せば意識することなく使用することができます。

ただ1点、複数行のレイアウトでflexboxを使用する場合は注意が必要です。  
複数行のレイアウトを実現するには`flex-wrap`プロパティを`wrap`か`wrap-reverse`に指定する必要がありますが、Androidの4.3以下が`flex-wrap`に対応していません。

代替となるプロパティも存在していないようなので、

* Android4.3以下対応
* `flex-wrap`を使用して複数行のレイアウトにする

場合には、適切なフォールバックを指定する必要があります。

## 参考

[http://caniuse.com/#search=flex](http://caniuse.com/#search=flex)