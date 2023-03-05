<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';
	import { Avatar } from '@skeletonlabs/skeleton';

	export let image: string;
	let isOpen = false;
</script>

<div class="relative">
	<button class="btn relative z-20" on:click={() => (isOpen = !isOpen)}>
		<Avatar src={image} />
	</button>

	{#if isOpen}
		<button
			on:click={() => (isOpen = false)}
			tabindex="-1"
			class="fixed inset-0 h-full w-full cursor-default"
		/>
		<div
			class="absolute right-0 flex w-48 flex-col items-center overflow-hidden rounded-xl bg-surface-500 py-2 text-center"
		>
			<a href="/home" class="block w-full py-2 hover:bg-primary-500"> Home </a>
			<a href="/profile" class="block w-full py-2 hover:bg-primary-500"> Profile </a>
			<button on:click={() => signOut()} class="block w-full py-2 hover:bg-primary-500">
				logout
			</button>
		</div>
	{/if}
</div>
