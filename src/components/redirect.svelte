<script>
    import { currentCalendarSection } from "../stores/time-store.js";
    import { push, location } from "svelte-spa-router";
    currentCalendarSection.set("Month");
    localStorage.setItem("currentSection", JSON.stringify("Month"));

    let locationValue;
    location.subscribe((value) => (locationValue = value));
    console.log(locationValue);
    push(`${locationValue}/month`);
</script>
