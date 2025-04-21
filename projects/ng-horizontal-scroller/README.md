# NgHorizontalScroller

ng-horizontal-scroller is a lightweight, fully customizable, and responsive horizontal infinite scroller component for Angular. It’s perfect for displaying logos, images, or content in a smooth and continuous loop.

![NPM Version](https://img.shields.io/npm/v/ng-horizontal-scroller)
<img src="https://img.shields.io/badge/angular-component-blue" alt="angular cmp" height="18">

- 👉 [live demo](https://horizontal-scroller-blue.vercel.app/)

### Installation
```bash
npm i ng-horizontal-scroller
```

### Usage

Import the Component (Standalone or NgModule)

```bash
import { HorizontalScrollerComponent } from 'ng-horizontal-scroller';
```

```bash
<ng-horizontal-scroller
  [items]="logos"
  [speed]="25"
></ng-horizontal-scroller>

```

### Inputs

<table>
  <tr>
    <th>Input</th>
    <th>Type</th>
    <th>Default</th>
     <th>Description</th>
  </tr>
  <tr>
    <td>`items`</td>
    <td>`Array<{ thumbnail: string; description?: string; url?: string }>`</td>
    <td>`[]`</td>
    <td>Array of items to display</td>
  </tr>
  <tr>
    <td>`speed`</td>
    <td>`number` </td>
    <td>`20` </td>
    <td>Animation speed (e.g., '20s', '40s')</td>
  </tr>
</table>

#### Example Data

Define your array like this for example
```bash
logos = [
  {
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    description: 'Angular',
    url: 'https://angular.io'
  },
  {
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
    description: 'Vue.js',
    url: 'https://vuejs.org'
  },
  {
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    description: 'React',
    url: 'https://react.dev'
  }
];

```

### ⚠️ Tailwind CSS Requirement
This library (ng-horizontal-scroller) uses Tailwind CSS for styling. If you're using Tailwind v4+ with Angular and encounter issues where styles from the component are not being applied, we recommend using Tailwind `@source` directive to explicitly specify source files that aren't picked up by Tailwind's automatic content detection:

✅ Quick Fix, use @source in your global styles

```bash
@import "tailwindcss";
@source  "../node_modules/ng-horizontal-scroller/";
```

[@source](https://tailwindcss.com/docs/functions-and-directives#:~:text=variables%20documentation.-,%40source,-Use%20the%20%40source)

<br>

🛠️ for integrating tailwind in your angular project, follow these steps
[official documentation](https://tailwindcss.com/docs/installation/framework-guides/angular)


#### Contributuion
Contributions are welcome and appreciated! If you'd like to improve this component, fix a bug, or add new features, feel free to open an issue or submit a pull request.