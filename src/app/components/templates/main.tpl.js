export default `
<main>
    <main-nav v-on:change:page="changePage"/>
    <app-page :currentPage="currentPage"/>
    <clock/>
</main>
`;
