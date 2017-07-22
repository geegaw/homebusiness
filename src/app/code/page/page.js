import Vue from "vue";
import template from "../../components/templates/page/index.tpl";
import clients from "../clients/form";

export default Vue.component("app-page", {
    template,
    props: {
        currentPage: String,
    },
});
