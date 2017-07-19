export default `
<a href="#" :class={active:page.isActive} @click.prevent="changePage">{{page.label}}</a>
`;
