<script>
    import Month from "./month.svelte";
    import DaysLayout from "../layouts/days-layout.svelte";
    import { currentMonth, currentYear } from "../stores/time-store.js";
    import { getLocalStorage } from "../utils/local-storage.js";
    localStorage.removeItem("month");
    let currentMonthValue;
    currentMonth.subscribe((value) => (currentMonthValue = value));

    let currentYearValue;
    currentYear.subscribe((value) => (currentYearValue = value));
</script>

<DaysLayout section="month">
    <Month section="month" month={currentMonthValue} year={currentYearValue} />
</DaysLayout>
