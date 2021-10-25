<template>
	<div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10 my-0 mx-auto">
		<div class="text-center">
			<h2 class="mt-5 text-3xl font-bold text-gray-900">
				Upload a CV
			</h2>
			<p class="mt-2 text-sm text-gray-400">
				Don't forget to rename your file.
			</p>
		</div>
		<div class="grid grid-cols-1 space-y-2">
			<label class="text-sm font-bold text-gray-500 tracking-wide">
				Attach Document
			</label>
			<div class="flex items-center justify-center w-full">
				<label
					class="flex flex-col rounded-lg border-4 border-dashed w-full p-10 group text-center"
				>
					<div
						class="h-full w-full text-center flex flex-col items-center justify-center items-center  "
					>
						<div class="flex flex-auto space-y-1 text-center">
							<svg
								class="mx-auto h-12 w-12 text-gray-400"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 48 48"
								aria-hidden="true"
							>
								<path
									d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
						<div class="pointer-none text-gray-500 ">
							<span class="text-sm">Drag and drop</span> files here
							<br />
							or
							<div class="cursor-pointer text-blue-600 hover:underline">
								select one or multiple files
							</div>
							from your computer
						</div>
					</div>
					<input
						id="select-files"
						type="file"
						multiple
						class="sr-only"
						@change="handleFilesUpload($event)"
					/>
					<div
						v-for="(file, key) in files"
						:key="'file-' + key"
						class="file-listing"
					>
						{{ file.name }}
					</div>
				</label>
			</div>
		</div>
		<p class="text-sm text-gray-500 mt-4">
			File type: doc, pdf, types of images
		</p>
		<template v-if="this.message">
			<div class="p-2 rounded-lg bg-green-400 shadow-lg sm:p-3">
				<div class="flex items-center justify-between flex-wrap">
					<div class="w-0 flex-1 flex items-center">
						<span class="flex p-2 rounded-lg bg-green-500">
							<svg
								class="h-6 w-6 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
								/>
							</svg>
						</span>
						<p class="ml-3 font-medium text-white truncate">
							<span class="hidden md:inline">
								CV added successfully !
							</span>
						</p>
					</div>
				</div>
			</div>
		</template>
		<template v-else-if="this.message == false && this.message !== ''">
			<div class="p-2 rounded-lg bg-red-400 shadow-lg sm:p-3">
				<div class="flex items-center justify-between flex-wrap">
					<div class="w-0 flex-1 flex items-center">
						<span class="flex p-2 rounded-lg bg-red-500">
							<svg
								class="h-6 w-6 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
								/>
							</svg>
						</span>
						<p class="ml-3 font-medium text-white truncate">
							<span class="hidden md:inline">
								Failed to add CV.
							</span>
						</p>
					</div>
				</div>
			</div>
		</template>
		<button
			@click="submitFiles()"
			type="submit"
			class="my-5 w-full flex justify-center bg-indigo-500 text-gray-100 p-4 rounded-md tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
		>
			Upload
		</button>
	</div>
</template>
<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
	data: () => ({
		files: [],
		message: '',
	}),
	methods: {
		submitFiles() {
			const formData = new FormData();

			for (var i = 0; i < this.files.length; i++) {
				let file = this.files[i];
				formData.append('cvs', file);
			}
			axios
				.post('http://localhost:8000/cv', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				.then(() => {
					this.message = true;
				})
				.catch((error) => {
					this.message = false;
					console.log(error);
				});
		},
		handleFilesUpload(event) {
			this.files = event.target.files;
		},
	},
});
</script>
