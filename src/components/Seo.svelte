<script lang="ts">
	import { seo } from '$lib/stores/seo';
	import { onMount } from 'svelte';

	export const { title } = $seo;
	export const { description } = $seo;

	const loadSeo = () => {
		seo.set({
			title,
			description,
		});
	};

	loadSeo();

	onMount(() => {
		loadSeo();
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta name="keywords" content="listd, youtube, channels, lists, app" />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://listd.tv" />

	<meta property="twitter:url" content="https://listd.tv" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />

	<link rel="shortcut icon" href="logo.png" type="image/png" />
</svelte:head>
