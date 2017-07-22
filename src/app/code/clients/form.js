import Vue from "vue";
import axios from "axios";
import api from "../api";
import template from "../../components/templates/clients/form.tpl";

export default Vue.component("client-form", {
    template,
    data() {
        return {
            client:{
                id: null,
                name: null,
                tel: null,
                email: null,
                address: null,
            }
        }
    },
    methods: {
        save() {
            const method = this.id ? "put" : "post";
            const url = api.api.clients + (this.id ? "/" + this.id : "");
            console.log("save", this.client, method, url);
            axios[method](url, this.client).then(function(response){
                console.log(response);
            }).catch(console.error);
        },
    }
});
