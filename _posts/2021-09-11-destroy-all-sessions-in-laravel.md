---
title: Destroy all sessions in Laravel
date: 2021-09-11
categories: ["php"]
tags: ["php"]
---

Use this peace of code:

```php
\Session::getHandler()->gc(0);
```

Refs:

- https://stackoverflow.com/questions/50732321/artisan-command-for-clearing-all-session-data-in-laravel
