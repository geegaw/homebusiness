export default `
<section>
    <main-nav v-on:change:page="changePage"/>
    <app-page :currentPage="currentPage"/>
    <clock/>
</section>
`;
