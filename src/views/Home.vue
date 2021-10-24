<template>
	<!-- Left sidebar & main wrapper -->
	<div class="flex-1 min-w-0 bg-white xl:flex">
		<!-- Account profile -->
		<div
			class="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white"
		>
			<div class="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
				<div class="flex items-center justify-between">
					<div class="flex-1 space-y-8">
						<div
							class="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8"
						>
							<!-- Action buttons -->
							<div class="flex flex-col sm:flex-row xl:flex-col">
								<button
									type="button"
									@click="showUploadForm = true"
									class="inline-flex items-center justify-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md xl:w-full"
									:class="
										showUploadForm
											? 'border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
											: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									"
								>
									Upload a CV
								</button>
								<button
									type="button"
									@click="showUploadForm = false"
									class="mt-3 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 inline-flex items-center justify-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md xl:w-full"
									:class="
										showUploadForm
											? 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
											: 'border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									"
								>
									List CVs
								</button>
							</div>
						</div>
						<!-- Meta info -->
						<div class="flex flex-col space-y-6 sm:flex-row xl:flex-col ">
							<div class="flex space-y-5 flex-col">
								<p class="text-md text-gray-900">
									CV Example :
								</p>
								<div class="flex items-center space-x-2">
									<svg
										class="h-5 w-5 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
										/>
									</svg>
									<span class="text-sm text-gray-500 font-medium">
										Mamy Razafintsialonina Ny Andrianina
									</span>
								</div>
								<div class="flex items-center space-x-2">
									<svg
										class="h-5 w-5 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
										/>
									</svg>
									<span class="text-sm text-gray-500 font-medium">
										Willyan LIN
									</span>
								</div>
							</div>
							<div class="flex space-y-5 flex-col">
								<p class="text-md text-gray-900">
									Search keywords example :
								</p>
								<span class="text-sm text-gray-500 font-medium">
									Java
								</span>
								<span class="text-sm text-gray-500 font-medium">
									React,Typescript
								</span>
								<span class="text-sm text-gray-500 font-medium">
									Chinois
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<template v-if="!showUploadForm">
			<List />
		</template>
		<template v-else>
			<Form />
		</template>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import List from './List.vue';
import Form from './Form.vue';

export default defineComponent({
	components: {
		List,
		Form,
	},
	data: () => ({
		showUploadForm: false,
	}),
});
</script>
