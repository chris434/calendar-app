<script>
    import { FontAwesomeIcon as Icon } from "fontawesome-svelte";
    export let icon,
        text,
        id,
        onClick,
        styles,
        textColor = "text-white",
        color = "bg-blue-600";
</script>

<button
    id={id ? id : null}
    class={`${color} ${textColor} text-white p-2  ${styles}`}
    on:click={onClick}>{text ? text : ''}
    <Icon class="pointer-events-none" {icon} /></button>
