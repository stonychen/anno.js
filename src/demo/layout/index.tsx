import { Component, Vue } from 'vue-property-decorator'
//import style from './layout.module.scss'

@Component
export default class Layout extends Vue {
  private render() {
    return (
      <div class="demo-layout">
        this is demo layout
        <router-view></router-view>
      </div>
    )
  }
}
