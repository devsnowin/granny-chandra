<script lang="ts">
	import { page } from '$app/stores';
</script>

<form method="post" class="flex w-full max-w-xl  flex-col items-center gap-6">
	<h1 class="text-center">Choose your username</h1>
	<div class="w-full max-w-lg space-y-4">
		<label class="label">
			<span>Email</span>
			<input
				type="email"
				value={$page.data.session.user.email}
				name="email"
				class={`input`}
				placeholder="johndoe"
				disabled
			/>
		</label>
		<label class="label">
			<span>Username</span>
			<input type="text" name="username" class={`input`} placeholder="johndoe" />
		</label>
		<button class={`btn variant-filled-primary w-full`}>Let's start</button>
	</div>
</form>
