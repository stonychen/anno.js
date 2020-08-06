import { Component, Vue } from 'vue-property-decorator'

//import style from './index.module.scss'
//import style from '@'

@Component({})
export default class Layout extends Vue {
  private render() {
    return <div class="app-layout">This is demo home page</div>
  }
}
