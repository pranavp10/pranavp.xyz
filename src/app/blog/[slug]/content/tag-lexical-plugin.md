---
title: "How to add mention functionality in lexical editor"
description: "Test for blog."
slug: "tag-lexical-plugin"
date: "Jan 16, 2024"
tags: ["Lexical", "React", "Editor"]
imageName: "lexical"
---

it took me a lot of time to figure out how how to implement "@" functionality in lexical its already exist in the [lexical playground]('https://playground.lexical.dev/')

## Installation

```Terminal.sh
npm i lexical @lexical/react
```

## Config for Lexical

```lexicalConfig.ts
export const lexical = {
  namespace: "mention-editor",
  theme: { paragraph: "editor-paragraph" },
  onError: (error: Error) => console.log(error),
  nodes: [],
};
```

## Creating node for Mention

```tsx
const a = "";
```
