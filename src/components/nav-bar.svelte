<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import {
        faCalendar,
        faChevronLeft,
        faChevronRight,
        faPencil,
        faBars,
    } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon as Icon } from "fontawesome-svelte";
    import Button from "./button.svelte";
    import { toggles, updateToggle } from "../stores/toggle-store.js";
    import { currentMonth, currentYear } from "../stores/time-store.js";
    import { months } from "../utils/time.js";
    import { getSectionName, push } from "../utils/location.js";
    import { getLocalStorage } from "../utils/local-storage.js";
    library.add(faCalendar, faChevronRight, faChevronLeft, faPencil, faBars);
    let options = ["Year", "Month", "Week", "Day"];
    let sectionValue;
    let calendarValue;

    let section = getSectionName();

    let togglesValue;
    toggles.subscribe((value) => (togglesValue = value));

    let currentMonthValue;
    currentMonth.subscribe((value) => (currentMonthValue = value));

    let currentYearValue;
    currentYear.subscribe((value) => (currentYearValue = value));
    switch (section) {
        case "Month":
            sectionValue = `${
                months[getLocalStorage("month") || currentMonthValue]
            } ${currentYearValue}`;
            calendarValue = currentMonthValue;
            break;
        case "Year":
            sectionValue = currentYearValue;
            calendarValue = currentYearValue;
            break;
    }

    const changeMonth = (e) => {
        const { id: changeValue } = e.target;

        if (changeValue) {
            calendarValue += 1;
        } else {
            calendarValue -= 1;
        }

        switch (section) {
            case "Month":
                if (calendarValue === 12) {
                    currentYear.update((value) => value + 1);
                    calendarValue = 0;
                } else if (calendarValue === -1) {
                    calendarValue = 11;
                    currentYear.update((value) => value - 1);
                }
                currentMonth.set(calendarValue);
                sectionValue = `${months[currentMonthValue]} ${currentYearValue}`;

                break;
            case "Year":
                currentYear.set(calendarValue);
                sectionValue = currentYearValue;
                break;

            default:
                break;
        }
    };
    const changeCalendarSection = (e) => {
        e.preventDefault();
        const { value } = e.target;
        push(value.toLowerCase());
    };
</script>

<style>
    .posision-bottom-name {
        bottom: -50px;
    }
    .posision-bottom-menu {
        bottom: -100px;
    }
    input {
        width: 100px;
    }
</style>

<nav class="relative items-center flex justify-between border-b-2 border-black">
    <Button
        id="nameToggle"
        styles="sm:hidden"
        textColor="text-black"
        color="bg-transparent"
        onClick={updateToggle}
        icon={faPencil} />

    <div
        class={` items-center sm:static gap-3 p-3 sm:bg-transparent bg-neutral-200 posision-bottom-name ${togglesValue.nameToggle ? 'absolute sm:flex' : 'sm:flex hidden'}`}>
        <div class="sm:block hidden">
            <Icon icon={faPencil} />
        </div>
        <input type="text" value="My Calendar" placeholder="Calendar name" />
    </div>

    <div class="flex items-center ">
        <Button
            id={false}
            textColor="text-black"
            color="bg-transparent"
            icon={faChevronLeft}
            onClick={changeMonth} />
        <div>{sectionValue}</div>
        <Button
            id={true}
            icon={faChevronRight}
            color="bg-transparent"
            textColor="text-black"
            onClick={changeMonth} />
    </div>
    <div
        class={`sm:static sm:flex-row right-0 p-3 flex flex-col posision-bottom-menu sm:bg-transparent bg-neutral-200   gap-3 ${togglesValue.menuToggle ? 'absolute' : 'sm:flex hidden'}`}>
        <select
            class="block"
            value={section}
            name=""
            id=""
            on:change={changeCalendarSection}>
            {#each options as option}
                <option value={option}>{option}</option>
            {/each}
        </select>
        <Button text="switch calendar" icon={faCalendar} />
    </div>

    <Button
        id="menuToggle"
        styles=" sm:hidden"
        color="bg-transparent"
        textColor="text-black"
        onClick={updateToggle}
        icon={faBars} />
</nav>
