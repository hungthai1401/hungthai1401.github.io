---
title: Install a specific nodejs version using n
date: 2021-09-10
categories: ["docker"]
tags: ["docker"]
---

```sh
ENV NODE_VERSION 6.9.1

RUN curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n \
    && bash n ${NODE_VERSION} \
    && node --version
```

Refs:

- https://github.com/tj/n
