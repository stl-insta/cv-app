<template>
	<div>
		<!-- Background color split screen for large screens -->
		<div
			class="fixed top-0 left-0 w-1/2 h-full bg-white"
			aria-hidden="true"
		></div>
		<div
			class="fixed top-0 right-0 w-1/2 h-full bg-gray-50"
			aria-hidden="true"
		></div>
		<div class="relative min-h-full flex flex-col">
			<!-- Navbar -->
			<nav class="flex-shrink-0 bg-indigo-600">
				<div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
					<div class="relative flex items-center justify-between h-16">
						<!-- Logo section -->
						<div class="flex items-center px-2 lg:px-0 xl:w-64">
							<div class="flex-shrink-0">
								<img
									class="h-8 w-auto"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
									alt="Workflow"
								/>
							</div>
						</div>

						<!-- Search section -->
						<div class="flex-1 flex justify-center lg:justify-end">
							<div class="w-full px-2 lg:px-6">
								<label for="search" class="sr-only">Search CVs</label>
								<div
									class="relative text-indigo-200 focus-within:text-gray-400"
								>
									<div
										class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
									>
										<!-- Heroicon name: solid/search -->
										<svg
											class="h-5 w-5"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
									<input
										id="search"
										name="search"
										class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
										placeholder="Search CVs"
										type="search"
									/>
								</div>
							</div>
						</div>
						<!-- Links section -->
						<div class="hidden lg:block lg:w-80">
							<div class="flex items-center justify-end">
								<div class="flex">
									<a
										href="https://github.com/stl-insta/cv-app"
										class="relative group flex items-center space-x-2"
									>
										<svg
											class="flex-shrink-0 w-5 h-5 text-white group-hover:text-white"
											viewBox="0 0 18 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372 16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761 13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487 4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408 11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97 0 8.99917 0Z"
												fill="currentcolor"
											/>
										</svg>
										<span
											class="text-sm text-white group-hover:text-gray-900 font-medium truncate"
										>
											Frontend
										</span>
									</a>
									<a
										href="https://github.com/stl-insta/cv-index-search-api"
										class="relative group flex items-center space-x-2 pl-5"
									>
										<svg
											class="flex-shrink-0 w-5 h-5 text-white group-hover:text-white"
											viewBox="0 0 18 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372 16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761 13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487 4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408 11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97 0 8.99917 0Z"
												fill="currentcolor"
											/>
										</svg>
										<span
											class="text-sm text-white group-hover:text-gray-900 font-medium truncate"
										>
											Backend
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<!-- 3 column wrapper -->
			<div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	data: () => ({
		showMenu: false,
		showProfileMenu: false,
	}),
});
</script>
