---
title: Remove the path with a nginx proxy_pass
date: 2022-09-14
categories: ["web-server"]
tags: ["web-server"]
---

```conf
location /en/ {
    proxy_pass http://example.com/;  # note the trailing slash here, it matters!
}
```
