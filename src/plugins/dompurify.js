import Vue from 'vue';
import VueDOMPurifyHTML from 'vue-dompurify-html';

Vue.use(VueDOMPurifyHTML, {
    default: {
        USE_PROFILES: {
            html: false
        }
    }
});
