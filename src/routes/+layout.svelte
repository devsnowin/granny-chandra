<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '../components/Header.svelte';
	import Seo from '../components/Seo.svelte';
</script>

<Seo title="Granny" />
<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<!-- Router Slot -->
	<main class="container mx-auto px-8">
		<slot />
	</main>
</AppShell>
