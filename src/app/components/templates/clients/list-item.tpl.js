export default `
<li>
    <span>{{item.name}}</span>
    <button class="edit">edit</button>
    <button class="delete" @click.prevent="destroy">delete</button>
</li>
`;
