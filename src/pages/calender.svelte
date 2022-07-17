<script>
    import NavBar from "../components/nav-bar.svelte";
    import MounthSection from "../components/mounth-section.svelte";
    import YearSection from "../components/year-section.svelte";
    import { getSectionName } from "../utils/location.js";
    export let params = {};
    console.log(params);

    let calendarSectionValue = getSectionName().toLowerCase();

    let sections = ["day", "month", "year", "week"];
    let comp = [MounthSection, YearSection];
</script>

<div>
    <NavBar />
    <svelte:component this={comp[sections.indexOf(calendarSectionValue) - 1]} />
</div>
