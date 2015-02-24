---
title: flexboxを使う場合の注意点
description: flexboxを使う場合の注意点の話。
date: 2015-02-25
tags: web
published: false
---

flexbox、素晴らしいですね。  
解説記事も多くありますし、面倒くさい構文の書き分けもautoprefixerなどを通せば意識することなく使用することができます。

ただ1点、複数行でflexboxを使用する場合は、対応ブラウザに注意したほうがいいです。

## flex-wrap

複数行にする場合には、`flex-wrap`プロパティを`wrap`か`wrap-reverse`に指定する必要がありますが、Androidの4.3以下が`flex-wrap`に対応していません。

[http://caniuse.com/#search=flex](http://caniuse.com/#search=flex)