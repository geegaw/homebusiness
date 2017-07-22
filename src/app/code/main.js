import Vue from "vue";
import nav from "./nav/nav";
import page from "./page/page";
import clock from "./clock/clock";
import template from "../components/templates/main.tpl";

const app = new Vue({
    template,
    el: "main",
    data: {
        currentPage: null,
    },
    methods: {
        changePage(id) {
            this.currentPage = id;
        },
    },
});

export default app;
