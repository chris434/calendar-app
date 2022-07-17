import { push as spaPush, location } from "svelte-spa-router";
import { capFirstChar } from './string-helper.js'


let locationValue;
location.subscribe((value) => (locationValue = value));

export const getSectionName = () => {
    const url = window.location.href
    return capFirstChar(url.split("/")[6]);
}

export const push = (newLocation) => {
    localStorage.setItem("currentSection", JSON.stringify(newLocation));
    spaPush(
        locationValue.replace(
            getSectionName().toLowerCase(),
            newLocation.toLowerCase()
        )
    );

}