---
title: Copy a file to clipboard on macOS
date: 2022-02-21
categories: ["linux"]
tags: ["linux"]
---

Open a terminal and run:

```sh
cat ~/Desktop/foo.html | pbcopy
```

The file is now in your clipboard.

To put it somewhere else (i.e. paste it) run:

```sh
pbpaste > ~/Documents/bar.html
```

Now you should have a copy of `foo.html` sitting in ~/Documents.

Refs:

- https://apple.stackexchange.com/questions/15318/how-to-use-terminal-to-copy-a-file-to-the-clipboard
