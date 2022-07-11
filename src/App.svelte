<script>
	import Router, { location, params, push } from "svelte-spa-router";
	import Header from "./components/header.svelte";
	import Calendar from "./pages/calender.svelte";
	import Page404 from "./pages/404-page.svelte";
	import Redirect from "./components/redirect.svelte";
	let locationValue;
	location.subscribe((value) => (locationValue = value));
	console.log(locationValue);

	const routes = {
		"/calender/:calenderName/day": Calendar,
		"/calender/:calenderName/week": Calendar,
		"/calender/:calenderName/month": Calendar,
		"/calender/:calenderName/year": Calendar,
		"/calender/:calenderName/": Redirect,
		"/not-found": Page404,
		"*": Page404,
	};
</script>

<main>
	<Header />
	<Router {routes} />
</main>
