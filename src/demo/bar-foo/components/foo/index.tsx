import { Component, Prop, Vue } from 'vue-property-decorator'
import style from './index.module.scss'
import uuid from '@/app/utils/uuid'

@Component
export default class Foo extends Vue {
  @Prop({ default: 'foo' }) public foo!: string

  private render(h: CreateElement, context: any) {
    let id = uuid()

    const linkTo = {
      path: '/demo/foo-bar',
      query: { from: 'from foo-bar' + id }
    }

    return (
      <div class={style.container} >
        This is component Foo, I wanna go to <router-link to={linkTo}>foo bar</router-link>
      </div >
    )
  }
}
