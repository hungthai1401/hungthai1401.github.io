---
title: Match whitespaced but not newlines
date: 2021-09-21
categories: ["regular-expression"]
tags: ["regular-expression"]
---

Use a double-negative:

```
/[^\S\r\n]/
```

or use negative lookbehind:

```
/\s(?<!\n)/
```
