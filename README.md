## AOS - Easily Animate Elements When Scrolled To

Install:

with NPM

`npm i @codedbyjordan/aos`

with Yarn

`yarn add @codedbyjordan/aos`

with CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@codedbyjordan/aos@1.1.1/dist/aos.bundle.js"></script>
<script>
  aos.init();
</script>
```

## Usage

To add an animation, initialize AOS

```js
aos.init();
```

...and give an element the `data-aos-animate` attribute

```html
<div data-aos-animate="fadeIn">
  <h1>Hello from AOS!</h1>
</div>
```

AOS uses [Animate.css](https://animate.style/), so any animation there will work.

## Custom Animations

To use custom animations with AOS, simply add one with CSS

```css
@keyframe myCustomFadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
```

And use the animation name inside of `data-aos-animate`

```html
<div data-aos-animate="myCustonFadeIn">
  <h1>Hello from AOS!</h1>
</div>
```

## All attributes

All attributes AOS currently comes with includes
`data-aos-animate` - Which animation to play when element comes into view (Default: fade)
`data-aos-duration` - Duration of animation in seconds (Default: 2s)
`data-aos-repeat` - Whether to repeat the animation on subsequent scrolls (Default: false)

Example using these attributes

```html
<h1 data-aos-animate="tada" data-aos-duration="4s" data-aos-repeat>
  Hello, world!
</h1>
```

---

This library was inspired by [AOS](https://github.com/michalsnik/aos)
