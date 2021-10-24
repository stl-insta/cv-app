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
		<form class="mt-8 space-y-3" action="#" method="POST">
			<!-- <div class="grid grid-cols-1 space-y-2">
				<label class="text-sm font-bold text-gray-500 tracking-wide"
					>Name</label
				>
				<input
					class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
					type=""
					placeholder="mail@gmail.com"
				/>
			</div> -->
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
								<div
									class="cursor-pointer text-blue-600 hover:underline"
								>
									select one or multiple files
								</div>
								from your computer
							</div>
						</div>
						<input type="file" multiple class="w-full" />
					</label>
				</div>
			</div>
			<p class="text-sm text-gray-500">
				<span>File type: doc, pdf, types of images</span>
			</p>
			<div>
				<button
					type="submit"
					class="my-5 w-full flex justify-center bg-indigo-500 text-gray-100 p-4 rounded-md tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
				>
					Upload
				</button>
			</div>
		</form>
	</div>
</template>
