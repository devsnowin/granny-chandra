<script lang="ts">
	import ImageIcon from '../../../../components/Icons/ImageIcon.svelte';
	import { FileDropzone, SlideToggle } from '@skeletonlabs/skeleton';

	let valueChecked: boolean = false;
	let uploadImage: string;

	const handleImageUpload = (e: Event) => {
		const image = (e.target as HTMLInputElement)?.files?.[0];
		if (image) uploadImage = URL.createObjectURL(image);
	};
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<section class="-mt-28 flex min-h-screen flex-col justify-center">
	<h1 class="mx-6 mb-16">Story details</h1>
	<form class="flex h-full w-full gap-12 px-6">
		<div class="w-[40%] space-y-4">
			<label class="label">
				<span>Title</span>
				<input type="text" class={`input`} placeholder="eg: Johnny Tales" />
			</label>
			<label class="label">
				<span>Category</span>
				<select class={`select`}>
					<option value="Literature">Literature</option>
					<option value="Realism">Realism</option>
					<option value="Magical">Magical</option>
					<option value="Dystopian">Dystopian</option>
					<option value="Fantasy">Fantasy</option>
					<option value="Bildungsroman">Bildungsroman</option>
					<option value="Western">Western</option>
					<option value="Romance">Romance</option>
					<option value="Historical">Historical</option>
					<option value="Horror">Horror</option>
					<option value="Thriller">Thriller</option>
					<option value="Mystery">Mystery</option>
					<option value="Fiction">Fiction</option>
				</select>
			</label>
			<label class="label">
				<span>Cover photo</span>
				{#if uploadImage}
					<img src={uploadImage} alt="" class="" />
				{:else}
					<FileDropzone name="files" on:change={handleImageUpload}>
						<svelte:fragment slot="lead">
							<ImageIcon />
						</svelte:fragment>
						<svelte:fragment slot="message">Upload a file or drag and drop</svelte:fragment>
						<svelte:fragment slot="meta">PNG, JPG and GIF allowed</svelte:fragment>
					</FileDropzone>
				{/if}
			</label>
		</div>

		<div class="min-h-full w-[60%] space-y-4">
			<label class="label h-[60%]">
				<span>Description</span>
				<textarea class={`textarea min-h-full`} placeholder="Write something...." />
			</label>
			<label class="label flex h-[20%] w-fit items-center gap-4">
				<span class="">Mature</span>
				<SlideToggle
					name="mature"
					bind:checked={valueChecked}
					active="bg-primary-500"
					label="Mature"
				/>
			</label>
			<label class="label h-[20%]">
				<button class={`btn variant-filled-primary w-full`}>Next</button>
			</label>
		</div>
	</form>
</section>
