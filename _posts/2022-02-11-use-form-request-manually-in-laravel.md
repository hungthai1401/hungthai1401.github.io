---
title: Use form request manually in Laravel
date: 2022-02-11
categories: ["php"]
tags: ["php"]
---

```php
request()->merge([
    'for' => 'bar',
    ...
]);

// Resolve the form request through the IOC
app(\App\Http\Requests\ExampleRequest::class);
```
