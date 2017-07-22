export default `
<form v-on:submit.prevent="save">
    <input type="text" v-model="client.id" style="display:none" />
    <input type="text" v-model="client.name" placeholder="client name" required/>
    <input type="tel" v-model="client.tel" placeholder="tel"/>
    <input type="email" v-model="client.email" placeholder="email"/>
    <textarea v-model="client.address" placeholder="address"></textarea>
    <input type="reset" value="cancel" />
    <input type="submit" value="save" />
</form>
`;
