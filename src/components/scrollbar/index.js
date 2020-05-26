import Scrollbar from './src/Scrollbar.vue';
import './src/index.scss';

Scrollbar.install = Vue => {
  Vue.component(Scrollbar.name, Scrollbar);
};

export default Scrollbar;