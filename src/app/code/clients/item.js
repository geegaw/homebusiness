import Vue from "vue";
import axios from "axios";
import api from "../api";
import template from "../../components/templates/clients/list-item.tpl";

export default Vue.component("list-item", {
    template,
    props: {
        item: Object,
    },
    methods: {
        destroy() {
            // return axios.delete(api.api.clients).then(response => {
            //         console.log(response.data);
            // }).catch(console.error);
        },
    },
});
