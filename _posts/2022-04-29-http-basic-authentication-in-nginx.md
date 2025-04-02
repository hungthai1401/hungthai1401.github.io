---
title: HTTP Basic Authentication in Nginx
date: 2022-04-29
categories: ["web-server"]
tags: ["web-server"]
---

- Install `apache2-utils` (Debian, Ubuntu) or httpd-tools (CentOS)
- Run:

```sh
htpasswd -c /etc/nginx/.htpasswd [USER]
```

and type password for this user

- Update nginx location config:

```
location /admin {
    auth_basic "Administrator’s Area";
    auth_basic_user_file /etc/nginx/.htpasswd;
}

location /not_admin {
    auth_basic off;
}
```

- Reload nginx:

```sh
nginx -s reload
```
