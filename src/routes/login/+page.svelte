<!-- svelte-ignore a11y-label-has-associated-control -->
<script>
	import GoogleIcon from '../../components/Icons/GoogleIcon.svelte';
	import { signIn } from '@auth/sveltekit/client';
</script>

<form class="flex w-full max-w-md flex-col gap-2">
	<h1 class="my-4 text-center">Sign in to your account</h1>
	<div class="space-y-4">
		<label class="label">
			<span>Email</span>
			<input type="email" class={`input`} placeholder="johndoe@gmail.com" />
		</label>
		<button class={`btn variant-filled-primary w-full`}>Login</button>
	</div>
	<p class="text-center font-bold">or</p>
	<button on:click={() => signIn('google')} class="btn variant-ringed-primary">
		<span>
			<GoogleIcon />
		</span>
		<span> Sign In With Google </span>
	</button>
</form>
