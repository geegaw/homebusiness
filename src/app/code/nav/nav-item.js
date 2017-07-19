import Vue from "vue";
import template from "../../components/templates/nav/nav-item.tpl";

export default Vue.component("nav-item", {
    template,
    props: {
        page: Object,
    },
    methods: {
        changePage() {
            this.$emit("change:page", this.page.id);
        },
    }
});
