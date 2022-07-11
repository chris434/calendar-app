<script>
    import { push, location } from "svelte-spa-router";
    import NavBar from "../components/nav-bar.svelte";
    import MounthSection from "../components/mounth-section.svelte";
    import { currentCalendarSection } from "../stores/time-store.js";

    export let params;

    let locationValue;
    location.subscribe((value) => (locationValue = value));
    const calendarSectionValue = locationValue.split("/")[3];

    console.log(params);
    let sections = ["day", "month", "year", "week"];
    let comp = [MounthSection];

    let currentCalendarSectionValue;
    currentCalendarSection.subscribe(
        (value) => (currentCalendarSectionValue = value)
    );
    console.log(currentCalendarSectionValue);
    if (sections.indexOf(currentCalendarSectionValue.toLowerCase()) === -1) {
        push("/not-found");
    }

    if (calendarSectionValue !== currentCalendarSectionValue) {
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
    <svelte:component
        this={comp[sections.indexOf(currentCalendarSectionValue.toLowerCase()) - 1]} />
</div>
