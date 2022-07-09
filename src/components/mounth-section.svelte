<script>
    import {
        currentMonth,
        currentYear,
        currentDay,
    } from "../stores/time-store.js";
    import {
        abbreviatedDays,
        getFullMonth,
        getFistIndex,
        isWeekend,
    } from "../utils/time.js";

    let currentMonthValue;
    currentMonth.subscribe((value) => (currentMonthValue = value));

    let currentYearValue;
    currentYear.subscribe((value) => (currentYearValue = value));

    let currentDayValue;
    currentDay.subscribe((value) => (currentDayValue = value));
</script>

<section>
    <section class="flex justify-between p-3 sm:text-lg text-xs ">
        {#each abbreviatedDays as abbreviatedDay}
            <div>{abbreviatedDay}</div>
        {/each}
    </section>
    <section class="grid grid-cols-7 days grid-rows-7  sm:text-lg text-xs">
        <div
            class={`col-span-${getFistIndex(currentMonthValue, currentYearValue) - 1} sm:h-24 h-16`} />
        {#each getFullMonth(currentMonthValue, currentYearValue) as day}
            <div
                class={`${isWeekend(day, currentMonthValue, currentYearValue) ? 'bg-neutral-400' : ''} ${isWeekend(day, currentMonthValue, currentYearValue) ? 'bg-slate-200' : ''} sm:h-24 h-16 border border-neutral-400 p-2 flex items-start`}>
                <div
                    class={`sm:px-2 px-1 ${currentDayValue === `${day}/${currentMonthValue + 1}/${currentYearValue}` ? 'text-white bg-red-600' : '34'} rounded-full`}>
                    {day}
                </div>
            </div>
        {/each}
    </section>
</section>
