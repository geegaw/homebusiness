import Vue from "vue";
import navItem from "./nav-item";
import template from "../../components/templates/nav/nav.tpl";

export default Vue.component("main-nav", {
    template,
    data() {
        return {
            pages: {
                clients: {
                    id: "clients",
                    label: "Clients",
                    isActive: false,
                },
                coming_soon: {
                    id: "coming_soon",
                    label: "coming soon",
                    isActive: false,
                },
            },
            active: null,
        };
    },
    methods: {
        changePage(id) {
            if (this.active) {
                this.pages[this.active].isActive = false;
            }
            this.active = id;
            this.pages[id].isActive = true;
        },
    },
    components: {
        navItem,
    }
});
