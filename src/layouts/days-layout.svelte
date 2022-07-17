<script>
    import { abbreviatedDays, firstCharDays } from "../utils/time.js";
    export let event;
    export let section;
    export let month;
    const days = section === "month" ? abbreviatedDays : firstCharDays;
    section = section === "month" ? true : false;
</script>

<section>
    <section
        class={`grid grid-cols-7  ${section ? 'place-items-center m-3' : 'font-bold place-items-end'}`}>
        {#each days as day}
            <div>{day}</div>
        {/each}
    </section>
    {#if event}
        <div on:click={event} id={month}>
            <slot />
        </div>
    {:else}
        <slot />
    {/if}
</section>
