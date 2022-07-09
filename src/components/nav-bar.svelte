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
    library.add(faCalendar, faChevronRight, faChevronLeft, faPencil, faBars);
    let options = ["Year", "Month", "Week", "Day"];

    let togglesValue;
    toggles.subscribe((value) => (togglesValue = value));

    let currentMonthValue;
    currentMonth.subscribe((value) => (currentMonthValue = value));

    let currentYearValue;
    currentYear.subscribe((value) => (currentYearValue = value));

    const changeMonth = (e) => {
        const { id: changeValue } = e.target;

        if (changeValue) {
            currentMonthValue += 1;
        } else {
            currentMonthValue -= 1;
        }

        if (currentMonthValue === 12) {
            currentYear.update((value) => value + 1);
            currentMonth.set(0);
            console.log(currentMonthValue);
            return;
        }
        if (currentMonthValue === -1) {
            currentMonth.set(11);
            currentYear.update((value) => value - 1);
            return;
        }

        currentMonth.set(currentMonthValue);
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
        <div>{`${months[currentMonthValue]} ${currentYearValue}`}</div>
        <Button
            id={true}
            icon={faChevronRight}
            color="bg-transparent"
            textColor="text-black"
            onClick={changeMonth} />
    </div>
    <div
        class={`sm:static sm:flex-row right-0 p-3 flex flex-col posision-bottom-menu sm:bg-transparent bg-neutral-200   gap-3 ${togglesValue.menuToggle ? 'absolute' : 'sm:flex hidden'}`}>
        <select class="block" value="Month" name="" id="">
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
