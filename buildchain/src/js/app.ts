import Snowf from 'vue-snowf';
import '@/css/app.css';

// App main
const main = async () => {
  // Async load the vue module
  const {default: Vue} = await import(/* webpackChunkName: "vue" */ 'vue');
  // Async load the vue module
  const {mixin: VueClickaway} = await import(/* webpackChunkName: "vueclickaway" */ 'vue-clickaway');
  const {default: VueTyper} = await import(/* webpackChunkName: "vuetyper" */ 'vue-typer');
  Vue.use(VueTyper);
  // Create our vue instance
  new Vue({
    el: '#page-header',
    delimiters: ['${', '}'],
    components: {
      Snowf,
    },
    mixins: [VueClickaway],
    data: () => ({
      menuOpen: false,
    }),
    methods: {
      // Pre-render pages when the user mouses over a link
      // Usage: <a href="" @mouseover="prerenderLink">
      prerenderLink: function (e: Event) {
        const head = document.getElementsByTagName("head")[0];
        const refs = head.childNodes;
        const ref = refs[refs.length - 1];

        const elements = head.getElementsByTagName("link");
        Array.prototype.forEach.call(elements, function (el) {
          if (("rel" in el) && (el.rel === "prerender")) {
            el.parentNode.removeChild(el);
          }
        });

        if (ref.parentNode && e.currentTarget) {
          const target: HTMLAnchorElement = <HTMLAnchorElement>e.currentTarget;
          const prerenderTag = document.createElement("link");
          prerenderTag.rel = "prerender";
          prerenderTag.href = target.href;
          ref.parentNode.insertBefore(prerenderTag, ref);
        }
      },
      away: function () {
        this.menuOpen = false;
      },
      toggle: function () {
        this.menuOpen = !this.menuOpen;
      },
    },
  });
};
// Execute async function
main().then(() => {
  console.log();
});

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR")
  });
}
