---
title: Check the relationship has been loaded in Laravel
date: 2020-06-08
categories: ["php"]
tags: ["php"]
---

To check the relationship has been loaded in Eloquent, use `relationLoaded()`:

```php
$users = App\User::with('profile')->first();

if ($users->relationLoaded('posts')) {
    // yes, it has been loaded
    // now, place your logic here
}
```
