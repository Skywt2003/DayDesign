# DayDesign

一个简洁优雅的 React 组件库。

## Why

大多数流行的 Web 组件库，都追求**高效**、**明快**的风格。这对于一般的 Web App 来说很好，但不是我的网站想要传达的感受。

因此，我用 Tailwind 创造了自己的组件库，名为 DayDesign，用于我的网站 [skywt.cn](https://skywt.cn)。

## Usage

建议配合**思源宋体**使用。

```bash
npm i daydesign remixicon
```

```js
import "remixicon/fonts/remixicon.css";
import "daydesign/dist/styles.css";
```

如果需要使用 mixins，可以使用 DayDesign 提供的 mixins.scss：

```scss
@use "daydesign/dist/mixins" as *;
```

## Layout

- container
  - container--wide
- content

## Colors

以下均为 Sass 的 mixins，可以 include。

- text-primary：一级文字颜色，最醒目
- text-secondary：二级文字颜色
- text-tertiary：三级文字颜色，最不醒目
- bg-back：全局背景色
- bg-front：前景色（卡片、按钮等）
- bg-front-hover：前景 hover 时的颜色
- bg-front-active：前景 active（按钮按下）的颜色
- shadow-on-back：前景物体在背景上显示出的阴影颜色
- border-on-back：前景物体在背景上应添加的边框颜色
- border-on-front：前景物体上的物体应添加的边框颜色
- border-hover：物体 hover 时的边框颜色

## Components

- Navbar
- Card
- Tabs
- Icon
- Input
- Textarea
- Button
- Rate
