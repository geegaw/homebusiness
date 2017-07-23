export default `
<ul>
    <list-item v-for="item in list" :item="item" :key="item._id" />
</ul>
`;
