import Vue from "vue";
import axios from "axios";
import api from "../api";
import template from "../../components/templates/clients/list.tpl";
import item from "./item";

export default Vue.component("clients-list", {
    template,
    data() {
        return {
            clients: {},
        };
    },
    computed: {
        list() {
            return Object.values(this.clients) || [];
        },
    },
    mounted() {
        this.fetch();
    },
    methods: {
        fetch() {
            const url = api.api.clients + "/list";
            return axios.get(url).then(response => {
                this.clients = response.data;
            }).catch(console.error);
        }
    }
});
