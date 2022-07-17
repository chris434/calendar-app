<script>
    import DaysLayout from "../layouts/days-layout.svelte";
    import Month from "./month.svelte";
    import { currentYear } from "../stores/time-store.js";
    import { push } from "../utils/location.js";
    import { months } from "../utils/time.js";

    let curentYearValue;
    currentYear.subscribe((value) => (curentYearValue = value));
    const eventHandler = (e) => {
        const { id } = e.target;
        localStorage.setItem("month", JSON.stringify(id));
        push("Month");
    };
</script>

<section class="grid sm:grid-cols-4 sx text:grid-cols-2 grid-cols-1 m-5 gap-6">
    {#each months as month, monthIndex}
        <DaysLayout event={eventHandler} section="year" month={monthIndex}>
            <div class="font-bold text-center text-red-600 mb-3">{month}</div>
            <Month section="year" month={monthIndex} year={curentYearValue} />
        </DaysLayout>
    {/each}
</section>
