# DayDesign

极简的组件库。

## Why

大多数用于 Web UI 的组件库，都追求简洁高效的风格。这对于一般的 Web App 来说很好，但不是我的博客想要传达的感受。
因此，在写我自己的博客前端 Daydreamer 的时候，我选择不使用现有的组件库，用 Tailwind 自己设计所有组件。
而这也带来了样式耦合、难复用等问题。

所以，我将 Daydreamer 前端里的组件做成了组件库，叫做 DayDesign。

## Usage

```bash
npm i daydesign
```

由于有大量 mixins，需要配合 Sass 使用。在 Sass 中 use `daydesign/dist/global.scss` 即可使用所有 mixins。

## Layout

- container
  - container--wide
- content

## Colors

以下均为 Sass 的 mixins，可以直接 include。

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
