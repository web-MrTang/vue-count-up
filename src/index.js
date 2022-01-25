import VueCountUp from './VueCountUp';
export default VueCountUp;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-count-up', VueCountUp);
}