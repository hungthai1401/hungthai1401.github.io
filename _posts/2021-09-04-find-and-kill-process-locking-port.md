---
title: Find and kill process locking port
date: 2021-09-04
categories: ["linux"]
tags: ["linux"]
---

### Find PID of process locking port:

```sh
sudo lsof -t -i :<PORT>
```

### Kill process:

```sh
kill -9 <PID>
```
