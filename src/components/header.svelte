<script>
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
    import { faLock } from "@fortawesome/free-solid-svg-icons";
    import Button from "./button.svelte";

    library.add(faFacebook, faGoogle, faLock);
    let user;
    let toggle;
    let loginBntText = "login with";

    const toggleVisable = () => {
        toggle ? (toggle = false) : (toggle = true);
    };
</script>

<style>
    @media (max-width: 640px) {
        .posision-bottom {
            bottom: -127px;
        }
    }
</style>

<header class="p-2 bg-sky-400 flex justify-between items-center relative">
    <div class="flex">
        <img class="sm:w-12 w-8" src="images/calendar-icon.png" alt="" />
        <h1 class="sm:text-2xl text-xl text-white place-self-center">
            <b class="text-red-500">ONE</b>-endar
        </h1>
    </div>

    {#if user}
        <img src="" alt="" />
    {:else}
        <div>
            <Button
                styles="sm:hidden block"
                color="bg-blue-600"
                text="login"
                icon={faLock}
                onClick={toggleVisable} />

            <div
                class={`sm:static right-0 p-3 sm:bg-transparent bg-neutral-200 posision-bottom z-10 sm:flex ${toggle ? ' absolute' : 'hidden'}`}>
                <Button
                    color="bg-red-500"
                    text={loginBntText}
                    icon={faGoogle} />
                <div class="text-center place-self-center">
                    <b class="mx-2.5 sm:text-white">or</b>
                </div>
                <Button text={loginBntText} icon={faFacebook} />
            </div>
        </div>
    {/if}
</header>
