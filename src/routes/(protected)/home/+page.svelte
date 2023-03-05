<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="">
	<h1>Home page</h1>
	{#if $page.data.session}
		<p>{$page.data.session?.user.username}</p>
	{/if}
</section>
