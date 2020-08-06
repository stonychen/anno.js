import { Component, Vue } from 'vue-property-decorator'

//import style from './index.module.scss'

@Component({})
export default class Layout extends Vue {

  private render() {
    return (
      <div class="app-layout">
        404, page is not found or system error. return to <router-link to="/">home page</router-link>
      </div>
    )
  }
}

