<script>
    import { currentDay } from "../stores/time-store.js";
    import { getFullMonth, getFistIndex, isWeekend } from "../utils/time.js";

    let currentDayValue;
    currentDay.subscribe((value) => (currentDayValue = value));

    export let section;
    section = section === "month" ? true : false;
    export let month;
    export let year;
    console.log(month);
</script>

<section class={section ? 'sm:text-lg text-xs' : 'text-xs pointer-events-none'}>
    <section
        class={`grid grid-cols-7 grid-rows-7 ${section ? '' : ' pointer-events-none'}`}>
        <div
            class={`col-span-${getFistIndex(month, year) - 1} ${section ? 'sm:h-24 h-16' : 'pointer-events-none'}`} />
        {#each getFullMonth(month, year) as day}
            <div
                class={`${isWeekend(day, month, year) && section ? 'bg-slate-200' : ''} ${section ? 'sm:h-24 h-16 border border-neutral-400 p-2 flex items-start cursor-pointer' : 'justify-end pointer-events-none'}   py-2 flex items-start`}>
                <div
                    class={`px-1 ${currentDayValue === `${day}/${month + 1}/${year}` ? 'text-white bg-red-600' : ''} ${section ? 'sm:px-2 px-1' : 'text-end'} rounded-full pointer-events-none`}>
                    {day}
                </div>
            </div>
        {/each}
    </section>
</section>
