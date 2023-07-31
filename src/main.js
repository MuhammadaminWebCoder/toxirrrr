import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'

const app = createApp(App)
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

app.use(vuetify)
app.use(router)

app.mount('#app')
