import { Component, Vue } from 'vue-property-decorator'

import style from './index.module.scss'

@Component({})
export default class NoAccess extends Vue {

  private render() {
    return (
      <div class={style.container}>
        You have no permission to access this page.
        return to <router-link to="/">home page</router-link>
      </div>
    )
  }
}

