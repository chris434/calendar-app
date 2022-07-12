<script>
	import { onMount } from "svelte";
	import Router, { location, params, push } from "svelte-spa-router";
	import Header from "./components/header.svelte";
	import Calendar from "./pages/calender.svelte";
	import Page404 from "./pages/404-page.svelte";
	import Redirect from "./components/redirect.svelte";
	let url = "";
	let l;
	$: locationValue = window.location.href;
	location.subscribe((value) => (locationValue = value));
	console.log(locationValue);

	onMount(() => console.log(window.location.href));
	console.log(url);
	const routes = {
		"/calender/:calenderName/day": Calendar,
		"/calender/:calenderName/week": Calendar,
		"/calender/:calenderName/month": Calendar,
		"/calender/:calenderName/year": Calendar,
		"/calender/:calenderName/": Redirect,
		"/not-found": Page404,
		"/:calenderName": Calendar,
		"*": Page404,
	};
</script>

<main>
	<Header />
	<Router {routes} />
</main>
