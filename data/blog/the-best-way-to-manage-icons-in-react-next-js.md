---
title: "The best way to manage icons in React/Nextjs"
description: "How to remove icons from JavaScript bundles without losing the flexibility of inline SVG"
slug: "the-best-way-to-manage-icons-in-react-js"
date: "Jan 20, 2024"
tags: ["SVG", "React", "Sprite"]
imageName: "svg-sprites"
---

When constructing a UI, the significance of SVG cannot be overstated. As the code base expands, the utilization of SVG also grows. In this blog, we will explore the top three methods for rendering SVG and identify the most optimal solution among them.

## The initial approach involves utilizing the image tag for SVG rendering

    ```ImageSvg.tsx
    const ImageSvg = () => <img src="path_to_svg_url.svg" />
    ```

  <Info description="This method is recommended exclusively for handling large-sized SVG files." title="Pros" iconName="checkbox-circle" color="!text-green-500"/>
  <Info description="There is a delay before it appears on the screen, and styling the SVG is not possible in this scenario." title="Corns" iconName="cross-circle" color="!text-red-500"/>

## Most common approach, we directly render the SVG as a JSX component.

1. We'll craft an SVG component named PlusSVG.tsx, allowing us to conveniently utilize this component in various locations.

   ```PlusSVG.tsx
   const PlusSVG = () => (
     <svg viewBox="0 0 50 50">
       <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
     </svg>
   );
   ```

2. We will render the previously created component in the relevant sections as needed.

   ```App.tsx
   import PlusSVG from "@/svg/PlusSvg"

   const App = () => (
     <div>
       <PlusSVG />
     </div>
   );
   ```

  <Info description="Easy to implement, customizable styling, and no flickering issues." title="Pros" iconName="checkbox-circle" color="!text-green-500"/>
  <Info description="If you use the same SVG in multiple places, it adds unnecessary weight to the DOM, leading to an increase in bundle size, especially when dealing with numerous SVGs in your project." title="Corns" iconName="cross-circle" color="!text-red-500"/>

## The ultimate and most effective method for SVG usage is through the use of sprites.

1.  Creating a reusable "Icon" component for rendering SVG icons.

    ```Icon.tsx
    import { SVGProps } from "react";

    type ISvgPropType = {
    iconName: string;
    } & SVGProps<SVGSVGElement>;

    const Icon = ({ iconName, ...props }: ISvgPropType) => (
    <svg {...props} >
        <use href={`#${name}`} />
    </svg>
    );

    export default Icon;
    ```

2.  Developing a "Sprite" component to handle all SVG icons.

```SVGSprite.tsx
const SVGSprite = () => (
<svg xmlns="http://www.w3.org/2000/svg">
    <defs>
    <symbol id="plus" viewBox="0 0 24 24">
        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
    </symbol>
    <symbol id="heart" viewBox="0 0 24 24">
        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
    </symbol>
    </defs>
</svg>
);
```

3. How to use it

```App.tsx
import SpriteSvg from "@/SpriteSvg";

const App = () => (
  <div>
    // remaining code
    <SpriteSvg />
  </div>
);
```

- Build a Sprites.svg file and preload it using html

```Sprites.svg
<!-- sprites.svg -->
<svg xmlns="http://www.w3.org/2000/svg">
  <defs>
    <symbol id="plus" viewBox="0 0 24 24">
      <path
        d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"
      ></path>
    </symbol>
    <symbol id="heart" viewBox="0 0 24 24">
      <path
        d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"
      ></path>
    </symbol>
  </defs>
</svg>
```

- Preload the sprite.svg file mentioned above.

```html
<head>
  <link rel="preload" as="image/svg+xml" href="sprite.svg" />
</head>
```
