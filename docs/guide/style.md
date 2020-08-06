
# Style

[[toc]]

In the project, we recommend `Sass` as default CSS extension language. Considering of that `Antdv` uses `Less`, `Less` is also supported in the project.

## Sass
For more details about Sass, refer to [https://sass-lang.com](https://sass-lang.com/)

## Module Style
Considering of huge mixed dirty class names in a big project, we use module style. The class name will be hashed to make our style to be local scope. The scss file name should be end with `.module.scss`. If the file name is not end with `module.scss`, we regard the style as non-module style. 

index.tsx
``` js
import { Component, Vue } from 'vue-property-decorator'
import style from './index.module.scss'

@Component
export default class App extends Vue {
  private render(h: CreateElement, context: RenderContext) {

    return (
      <div class={style.container}>
        <div class={style.box}></div>
      </div>
    )
  }
}
```

index.module.scss
``` scss
.container {
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
  }
}
```


The style in development mode will be output to 
``` css
.index-module_container_qyh5h .index-module_box_2JAxU {
  width: 100px;
  height: 100px;
  background-color: red;
}
```



The style in production mode will be output to 
``` css
._13LGdX8RMStbBE9w-t0gZ1 ._23_aKvs-b8bW2Vg3fwHozO {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

If we want to switch between local scope and global scope in a module scss file. We can use `:global`. For more details about module style and webpack related, refer to [css-loader](https://webpack.js.org/loaders/css-loader/#modules).

## Non-module Style

If we don't want to use module style, the file name doesn't need to be end with `.module.scss`, just like `foo.scss`. the class name also won't be hashed. We just import like `import style from './index.module.scss'`.

