

# Vue

[[toc]]

## Annotation

In this project, we use annotations widely to replace traditional Vue components, as below.

foo-bar/components/bar/index.tsx
``` tsx
import { Component, Prop, Vue } from 'vue-property-decorator'
import style from './index.module.scss'

@Component
export default class Bar extends Vue {
  @Prop({ default: 'foo' }) public foo!: string

  private render(h: CreateElement, context: any) {
    return <div class={style.container} > This is a bar. </div>
  }
}
```

For more details, refer to [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator).

## Component

A sample component `Bar`, as below. Note that we capitalized the first letter for a component name.

foo-bar/components/bar/index.tsx
``` tsx
import { Component, Prop, Vue } from 'vue-property-decorator'
import style from './index.module.scss'

@Component
export default class Bar extends Vue {
  @Prop({ default: 'foo' }) public foo!: string

  private render(h: CreateElement, context: any) {
    return (
      <div class={style.container} >
        <div class={style.box}> This is a bar.</div>
      </div>
    )
  }
}
```

foo-bar/components/bar/index.module.scss
``` scss
.container {
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
  }
}

```

## Page

A page is actually a component. In the sample page, we consumed the component `Bar`. Note that we capitalized the first letter for a page name. 

foo-bar/index.tsx
```tsx
import { Component, Vue } from 'vue-property-decorator'
import Bar from './components/bar'
import style from './index.module.scss'

@Component
export default class FooBar extends Vue {

  private render(h: CreateElement, context: any) {
    return (
      <div class={style.container}>
        <Bar></Bar>
        {/* or consume a component with h() function */}
        {h(Bar, {})}
      </div>
    )
  }
}
```

