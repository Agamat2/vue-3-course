import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
const app=createApp(App)

components.forEach(components => {
    app.component(component.name, componentsgit)
});
app.mount('#app');
