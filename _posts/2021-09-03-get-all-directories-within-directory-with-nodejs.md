---
title: Get all directories within directory with NodeJs
date: 2021-09-03
categories: ["javascript"]
tags: ["javascript"]
---

```js
const { readdirSync } = require("fs");

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
```

Refs:

- https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs
