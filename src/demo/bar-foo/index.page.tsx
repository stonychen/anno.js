import { Component, Vue } from 'vue-property-decorator'
import Foo from './components/foo'
import style from './index.module.scss'

@Component
export default class BarFoo extends Vue {
  private created() {
    console.log('this.$route.params', this.$route.params)
    console.log('this.$route.query', this.$route.query)
  }
  private render(h: CreateElement, context: any) {

    return (
      <div class={style.container}>
        This is page BarFoo dd s
        {h(Foo, {})}
      </div>
    )
  }
}
