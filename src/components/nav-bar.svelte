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

    library.add(faCalendar, faChevronRight, faChevronLeft, faPencil, faBars);
    let options = ["Year", "Month", "Week", "Day"];

    let togglesValue;
    toggles.subscribe((value) => {
        togglesValue = value;
    });
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
            textColor="text-black"
            color="bg-transparent"
            icon={faChevronLeft} />
        <div>December 2022</div>
        <Button
            icon={faChevronRight}
            color="bg-transparent"
            textColor="text-black" />
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
