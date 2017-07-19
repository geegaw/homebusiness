export default `
<nav class="main-nav">
    <nav-item  v-for="page in pages" :page="page" v-on:change:page="changePage" :key="page.id"/>
</nav>
`;
