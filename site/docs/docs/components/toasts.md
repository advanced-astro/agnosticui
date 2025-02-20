# Toast

The `Toast` component is a type of alert dialog either appears for a finite period of time (e.g. 10 seconds) and then is dismissed, or, it may be <span class="quoted">sticky</span> until dismissed by user clicking a close button.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<ToastExamples />

<script setup>
import ToastExamples from '../../components/ToastExamples.vue'
import { Alert } from "agnostic-vue";
</script>

<div class="mbe32"></div>

## Usage

<div class="flex items-center mbs40 mbe24">
  <a href="https://astro.build/" class="astro-logo-usage-wrap" target="_blank"><img class="astro-logo-usage" src="/images/astro-logo-light.svg" alt="astro logo"></a>
  <p class="mis16">React, Vue, and Svelte examples on a single playground page 🚀 💥</p>
</div>
<div class="playgrounds flex mbe32">
  <a class="btn btn-rounded" style="background-color: var(--agnostic-dark); color: var(--agnostic-light)" href="https://codesandbox.io/s/github/AgnosticUI/agnosticui/tree/master/playgrounds/Toasts?file=/README.md" target="_blank">
    <img src="/images/codesandbox.svg" alt="codesandbox logo" class="mie8"> View in CodeSandbox
  </a>
  <a class="btn btn-rounded" style="background-color: var(--agnostic-primary); color: var(--agnostic-light)" href="https://stackblitz.com/github/AgnosticUI/agnosticui/tree/master/playgrounds/Toasts?file=/README.md" target="_blank">
    <img src="/images/stackblitz.svg" alt="Stackblitz logo" class="mie4"> View in Stackblitz
  </a>
</div>

<div class="flex">
  <h3 id="react" tabindex="-1">
    <img src="/images/React-icon.svg" alt="react logo">React
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```jsx
import { useState } from 'react';
import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import { Close, Toasts, Toast } from "agnostic-react";

const getColor = (type) => {
  switch (type) {
    case 'warning':
      return 'var(--agnostic-warning-border-accent)';
    case 'info':
      return 'var(--agnostic-primary-dark)';
    case 'success':
      return 'var(--agnostic-action-dark)';
    case 'error':
      return 'var(--agnostic-error-dark)';
    default:
      return 'var(--agnostic-gray-mid-dark)';
  }
};
const ToastDemoIcon = ({ type, utilityClasses }) => {
  return (
    <svg
      className={utilityClasses}
      style={{ color: getColor(type) }}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  );
};

export const YourComponent = () => {
  const [timedToastOpen, setTimedToastOpen] = useState(true);
  const [toastIsOpen1, setToastIsOpen1] = useState(true);
  const [toastIsOpen2, setToastIsOpen2] = useState(true);
  const [toastIsOpen3, setToastIsOpen3] = useState(true);

  useEffect(() => {
    const tout = setTimeout(() => setTimedToastOpen(false), 5000)
    return () => {
      clearTimeout(tout)
    }
  }, [timedToastOpen, setTimedToastOpen]);

  return (
    <>
      <Toasts verticalPosition="top" horizontalPosition="end">
        <Toast type="dark">Toast top end. Sticky.</Toast>
        <div className="mbe14" />
        <Toast type="dark">Toast 2 top end. Sticky.</Toast>
      </Toasts>
      <Toasts verticalPosition="top" horizontalPosition="center">
        <Toast isOpen={timedToastOpen} icon={<ToastDemoIcon type="dark" utilityClasses="mie8" />} type="dark">
          Toast custom icon dark (5 seconds)
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={timedToastOpen} icon={<ToastDemoIcon type="success" utilityClasses="mie8" />} type="success">
          Toast custom icon success (5 seconds)
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={timedToastOpen} icon={<ToastDemoIcon type="warning" utilityClasses="mie8" />} type="warning">
          Toast custom icon warning (5 seconds)
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={timedToastOpen} icon={<ToastDemoIcon type="info" utilityClasses="mie8" />} type="info">
          Toast custom icon info (5 seconds)
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={timedToastOpen} icon={<ToastDemoIcon type="error" utilityClasses="mie8" />} type="error">
          Toast custom icon error (5 seconds)
        </Toast>
        <div className="mbe14" />
      </Toasts>
      <Toasts verticalPosition="bottom" horizontalPosition="center">
        <Toast isOpen={toastIsOpen1} isAnimationSlideUp icon={<ToastDemoIcon type="dark" utilityClasses="mie8" />} type="dark">
          <div className="flex-fill">Closable via close button.</div>
          {/* Close SVG uses fill="currentColor" so we can set as follows */}
          <Close style={{ color: 'var(--agnostic-light)' }} onClick={() => setToastIsOpen1(false)} />
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={toastIsOpen2} isAnimationSlideUp icon={<ToastDemoIcon type="success" utilityClasses="mie8" />} type="success">
          <div className="flex-fill">Closable via close button.</div>
          <Close style={{ color: 'var(--agnostic-action-dark)' }} onClick={() => setToastIsOpen2(false)} />
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={toastIsOpen3} isAnimationSlideUp icon={<ToastDemoIcon type="info" utilityClasses="mie8" />} type="info">
          <div className="flex-fill">Closable via close button.</div>
          <Close style={{ color: 'var(--agnostic-primary-dark)' }} onClick={() => setToastIsOpen3(false)} />
        </Toast>
      </Toasts>   
    </>
    );
  )
```
</details>

React: [Toasts](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Toasts.tsx) and [Toast](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/Toast.tsx) components.

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<script setup>
import "agnostic-vue/dist/common.min.css";
// Components CSS
import "agnostic-vue/dist/index.css";
import { Close, Toasts, Toast } from "agnostic-vue";
import ToastIconExample from "./ToastIconExample.vue";
import { ref } from "vue";
const timedToast = ref(true);
setTimeout(() => {
  timedToast.value = false;
}, 10000);

const toast1IsOpen = ref(true);
const close1Toast = () => {
  toast1IsOpen.value = false;
};
const toast2IsOpen = ref(true);
const close2Toast = () => {
  toast2IsOpen.value = false;
};
</script>
<template>
  <Toasts
    vertical-position="top"
    horizontal-position="end"
  >
    <Toast
      :is-open="timedToast"
      type="info"
    >
      <ToastIconExample
        icon-type="info"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      Self timed toast that will close in 10 seconds.
    </Toast>
    <Toast
      :is-open="timedToast"
      type="success"
    >
      <ToastIconExample
        icon-type="success"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      <div class="flex-fill">
        Self timed toast that will close in 10 seconds.
      </div>
    </Toast>
  </Toasts>
  <Toasts
    vertical-position="top"
    horizontal-position="center"
  >

    <Toast
      :is-open="timedToast"
      type="error"
    >
      <ToastIconExample
        icon-type="error"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      Error toast with &nbsp;<code>aria-live</code>&nbsp;
      <span class="quoted">assertive</span> (10 seconds)
    </Toast>
  </Toasts>
  <Toasts
    vertical-position="bottom"
    horizontal-position="end"
  >
    <Toast
      :is-open="toast1IsOpen"
      type="dark"
    >
      <ToastIconExample
        icon-type="dark"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      <div class="flex-fill">
        This is a closable toast message
      </div>
      <Close
        @click="close1Toast()"
        :style="{ 'color': 'var(--agnostic-light)' }"
      />
    </Toast>
    <div className="mbe14" />
    <Toast
      :is-open="toast2IsOpen"
      type="warning"
    >
      <ToastIconExample
        icon-type="warning"
        utility-classes="mie8"
      >
        <template #icon />
      </ToastIconExample>
      <div class="flex-fill">
        This is a closable toast message
      </div>
      <Close
        @click="close2Toast()"
        :style="{ 'color': 'var(--agnostic-warning-dark)' }"
      />
    </Toast>
  </Toasts>
</template>
```
</details>

Vue 3: [Toasts](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Toasts.vue) and [Toast](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Toast.vue) components.

<div class="mbe24"></div>

<div class="flex">
  <h3 id="svelte" tabindex="-1">
    <img src="/images/Svelte-icon.svg" alt="Svelte logo">Svelte
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<script>
  import 'agnostic-svelte/css/common.min.css';
  import { Close, Toasts, Toast } from "agnostic-svelte";

  // If you'd like, you can optionally project any icon you choose
  import ToastIconExample from "./components/ToastIconExample.svelte";

  let toastMessage = 'Toasts should be used for timely information.';

  let isToast1Open = true;
  const closeToast1 = () => isToast1Open = false
  let isToast2Open = true;
  const closeToast2 = () => isToast2Open = false
  let isToast3Open = true;
  const closeToast3 = () => isToast3Open = false
  let isToast4Open = true;
  const closeToast4 = () => isToast4Open = false
  let timedToast = true;
  setTimeout(() => {
    timedToast = false;
  }, 10000);
</script>
<Toasts portalRootSelector="body" horizontalPosition="center" verticalPosition="top">
  <Toast isOpen={timedToast} type="dark">
    <ToastIconExample type="dark" utilityClasses="mie8" />
    <p>This toast will close in 10 seconds</p>
  </Toast>
  <div class="mbe14" />
  <Toast isOpen type="info">
    <ToastIconExample type="info" utilityClasses="mie8" />
    <p>{toastMessage}</p>
  </Toast>
</Toasts>
<Toasts portalRootSelector="body" horizontalPosition="end" verticalPosition="top">
  <Toast isOpen={isToast1Open} type="info">
    <ToastIconExample type="info" utilityClasses="mie8" />
    <p>{toastMessage}</p>
    <Close color="var(--agnostic-primary-dark)" on:click={closeToast1} />
  </Toast>
  <div class="mbe14" />
  <Toast isOpen={isToast2Open} type="success">
    <ToastIconExample type="success" utilityClasses="mie8" />
    <p>{toastMessage}</p>
    <Close color="var(--agnostic-action-dark)" on:click={closeToast2} />
  </Toast>
  <div class="mbe14" />
  <Toast isOpen={isToast3Open} type="warning">
    <ToastIconExample type="warning" utilityClasses="mie8" />
    <p>{toastMessage}</p>
    <Close color="var(--agnostic-warning-dark)" on:click={closeToast3} />
  </Toast>
  <div class="mbe14" />
  <Toast isOpen={isToast4Open} type="error">
    <ToastIconExample type="error" utilityClasses="mie8" />
    <p>{toastMessage}</p>
    <Close color="var(--agnostic-error-dark)" on:click={closeToast4} />
  </Toast>
</Toasts>
<Toasts portalRootSelector="body" horizontalPosition="start" verticalPosition="top">
  <Toast isOpen={timedToast} type="dark">
    <ToastIconExample type="dark" utilityClasses="mie8" />
    <p>This toast will close in 10 seconds</p>
  </Toast>
</Toasts>
<Toasts portalRootSelector="body" horizontalPosition="start" verticalPosition="bottom">
  <Toast isOpen={timedToast} type="dark">
    <ToastIconExample type="dark" utilityClasses="mie8" />
    <p>This toast will close in 10 seconds</p>
  </Toast>
</Toasts>
<Toasts portalRootSelector="body" horizontalPosition="center" verticalPosition="bottom">
  <Toast isOpen={timedToast} type="dark">
    <ToastIconExample type="dark" utilityClasses="mie8" />
    <p>This toast will close in 10 seconds</p>
  </Toast>
</Toasts>
<Toasts portalRootSelector="body" horizontalPosition="end" verticalPosition="bottom">
  <Toast isOpen type="dark">
    <ToastIconExample type="dark" utilityClasses="mie8" />
    <p>{toastMessage}</p>
  </Toast>
</Toasts>
```
</details>

<div class="mbe32"></div>

<div class="flex mbe16">
  <h3 id="angular" tabindex="-1">
    <img src="/images/Angular-icon.svg" alt="Angular logo">Angular (Experimental)
  </h3>
</div>

<div class="mbe16"></div>

<Alert type="error">The Angular Toast component is still in development</Alert>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

In your Angular configuration (likely `angular.json`) ensure you're including
the common AgnosticUI styles:

<div class="mbe16"></div>

` "styles": ["agnostic-angular/common.min.css"],`

<div class="mbe24"></div>

Add AgnosticUI's `AgModule` module:

```js{3,9}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgModule } from 'agnostic-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Now you can use in your components:

```js
import { Component } from '@angular/core';

@Component({
  selector: 'your-component',
  template: `
  <ag-toasts horizontalPosition="end"
             verticalPosition="top">
    <ag-toast [isAnimationSlideUp]="true"
              [isBorderAll]="true"
              type="success">
      Success. Bordered. Animated
    </ag-toast>
    <div class="mbe14"></div>
    <ag-toast [isAnimationSlideUp]="true"
              [isBorderAll]="true"
              type="info">Info. Bordered. Animated</ag-toast>
    <div class="mbe14"></div>
    <ag-toast [isAnimationSlideUp]="true"
              [isBorderAll]="true"
              type="warning">Warning. Bordered. Animated</ag-toast>
    <div class="mbe14"></div>
    <ag-toast [isAnimationSlideUp]="true"
              [isBorderLeft]="true"
              type="info">
      <ag-example-icon iconType="info"
                        utilityClasses="mie8"></ag-example-icon>
      Info. Border left. Animated. Icon projected.
    </ag-toast>
  </ag-toasts>
  <ag-toasts horizontalPosition="start"
              verticalPosition="top">
    <ag-toast type="warning"
              [isOpen]="toast1IsOpen">
      <ag-example-icon iconType="warning"
                        utilityClasses="mie12"></ag-example-icon>
      <p class="flex-fill">Warning toast w/projected icon</p>
      <ag-close (click)="toast1IsOpen = false"
                color="var(--agnostic-warning-dark)"></ag-close>
    </ag-toast>
    <div class="mbe14"></div>
    <ag-toast type="info"
              [isOpen]="toast2IsOpen">
      <ag-example-icon iconType="info"
                        utilityClasses="mie12"></ag-example-icon>
      <p class="flex-fill">Info toast with projected icon</p>
      <ag-close (click)="toast2IsOpen = false"
                color="var(--agnostic-primary-dark)"></ag-close>
    </ag-toast>
    <div class="mbe14"></div>
    <ag-toast [isOpen]="toast3IsOpen"
              type="success">
      <ag-example-icon iconType="success"
                        utilityClasses="mie12"></ag-example-icon>
      <p class="flex-fill">
        Success toast w/projected icon
      </p>
      <ag-close (click)="toast3IsOpen = false"
                color="var(--agnostic-action-dark)"></ag-close>
    </ag-toast>
    <div class="mbe14"></div>
    <ag-toast type="error">
      <ag-example-icon iconType="error"
                        utilityClasses="mie12"></ag-example-icon>
      Error toast w/projected icon
    </ag-toast>
    <div class="mbe14"></div>
    <ag-toast type="dark">
      <ag-example-icon iconType="dark"
                        utilityClasses="mie12"></ag-example-icon>
      Dark toast w/projected icon
    </ag-toast>
  </ag-toasts>
  <ag-toasts horizontalPosition="center"
              verticalPosition="top">
    <ag-toast [isOpen]="timedToast">Toast will dismiss in 10 seconds</ag-toast>
  </ag-toasts>
  <ag-toasts horizontalPosition="start"
              verticalPosition="bottom">
    <ag-toast [isOpen]="timedToast">Toast start dismisses in 10 seconds</ag-toast>
  </ag-toasts>
  <ag-toasts horizontalPosition="center"
              verticalPosition="bottom">
    <ag-toast [isOpen]="timedToast">Toast bottom center dismisses in 10 seconds</ag-toast>
  </ag-toasts>
  <ag-toasts horizontalPosition="end"
              verticalPosition="bottom">
    <ag-toast [isRounded]="true">Rounded toast at bottom end</ag-toast>
    <div class="mbe14"></div>
    <ag-toast [isBorderLeft]="true">Border on left</ag-toast>
    <div class="mbe14"></div>
    <ag-toast [isBorderAll]="true"
              type="info">Border on all sides type info</ag-toast>
  </ag-toasts>
  `
})
export class YourComponent {}
```
</details>

<div class="mbe32"></div>

## Storybook

You can run the framework Storybooks and see live examples for React, Vue 3, Svelte, Astro, and Angular (experimental). The following will set up Storybook and run locally:

<details class="mbs24 mbe24 disclose disclose-bordered">
<summary class="disclose-title">How to run Storybook</summary>

```shell
git clone git@github.com:AgnosticUI/agnosticui.git
cd agnosticui/<PACKAGE_NAME> && npm i # e.g. cd agnosticui/agnostic-react && npm i
npm run storybook
```
</details>

See [Running Storybook](https://github.com/AgnosticUI/agnosticui/blob/master/CONTRIBUTING.md#usage).

