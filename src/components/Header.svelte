<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import DropDown from './DropDown.svelte';

	const { session } = $page.data;
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<h1 class="flex items-center gap-4">
			<img src="/logo.png" alt="app logo" class="w-14" />
			<a href="/" class="text-3xl">Granny Chandra</a>
		</h1>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<nav class="flex items-center gap-4">
			<LightSwitch height="h-6" rounded="rounded-full" />
			{#if session?.user}
				<a href="/tales/new">Write</a>
				<DropDown image={session?.user?.image} />
			{:else}
				<a href="/login" class="btn bg-primary-500">Login</a>
			{/if}
		</nav>
	</svelte:fragment>
</AppBar>
