<script>
    import { onMount } from "svelte";
    import { push, location } from "svelte-spa-router";
    import NavBar from "../components/nav-bar.svelte";
    import MounthSection from "../components/mounth-section.svelte";
    import { currentCalendarSection } from "../stores/time-store.js";
    export let params = {};

    let locationValue;

    location.subscribe((value) => (locationValue = value));
    $: calendarSectionValue = locationValue.split("/")[3];

    let sections = ["day", "month", "year", "week"];
    let comp = [MounthSection];

    let currentCalendarSectionValue;
    currentCalendarSection.subscribe(
        (value) => (currentCalendarSectionValue = value)
    );

    if (calendarSectionValue !== currentCalendarSectionValue.toLowerCase()) {
        console.log(calendarSectionValue);
        push(
            locationValue.replace(
                calendarSectionValue,
                currentCalendarSectionValue.toLowerCase()
            )
        );
    }
</script>

<div>
    <NavBar />
    <svelte:component this={comp[sections.indexOf(calendarSectionValue) - 1]} />
</div>
