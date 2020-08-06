import { Component, Vue } from 'vue-property-decorator'
import Bar from './components/bar'
import style from './index.module.scss'



@Component
export default class FooBar extends Vue {

  private render(h: CreateElement, context: any) {
    return (
      <div class={style.container}>
        This is page FooBar
        {h(Bar, {})}
      </div>
    )
  }
}
