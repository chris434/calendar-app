<script>
    import { FontAwesomeIcon as Icon } from "fontawesome-svelte";
    export let color, icon, text, onClick, styles;
</script>

<button
    class={`${color} text-white p-2 ${styles}`}
    on:click={onClick}>{text ? text : 'login with'}
    <Icon {icon} /></button>
