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
									class="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
								>
									Upload CV
								</button>
								<button
									type="button"
									class="mt-3 inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full"
								>
									<router-link to="/cv">List CVs</router-link>
								</button>
							</div>
						</div>
						<!-- Meta info -->
						<div
							class="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6"
						>
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
					</div>
				</div>
			</div>
		</div>

		<!-- CVs List -->
		<div class="bg-white lg:min-w-0 lg:flex-1">
			<div
				class="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0"
			>
				<div class="flex items-center">
					<h1 class="flex-1 text-lg font-medium">Curriculum Vitae</h1>
					<div class="relative">
						<button
							type="button"
							class="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							id="sort-menu-button"
							aria-expanded="false"
							aria-haspopup="true"
						>
							<svg
								class="mr-3 h-5 w-5 text-gray-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
								/>
							</svg>
							Sort
							<svg
								class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
						<!-- Dropdown menu, show/hide based on menu state. -->
						<div
							class="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="sort-menu-button"
							tabindex="-1"
						>
							<div class="py-1" role="none">
								<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
								<a
									href="#"
									class="text-gray-700 block px-4 py-2 text-sm"
									role="menuitem"
									tabindex="-1"
									id="sort-menu-item-0"
									>Name
								</a>
								<a
									href="#"
									class="text-gray-700 block px-4 py-2 text-sm"
									role="menuitem"
									tabindex="-1"
									id="sort-menu-item-1"
									>Date created
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ul
				role="list"
				class="relative z-0 divide-y divide-gray-200 border-b border-gray-200"
			>
				<li
					class="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
				>
					<div class="flex items-center justify-between space-x-4">
						<!-- Repo name and link -->
						<div class="min-w-0 space-y-3">
							<div class="flex items-center space-x-3">
								<span
									class="h-4 w-4 bg-green-100 rounded-full flex items-center justify-center"
									aria-hidden="true"
								>
									<span
										class="h-2 w-2 bg-green-400 rounded-full"
									></span>
								</span>

								<span class="block">
									<h2 class="text-sm font-medium">
										<a href="#">
											<span
												class="absolute inset-0"
												aria-hidden="true"
											></span>
											Workcation <span class="sr-only">Running</span>
										</a>
									</h2>
								</span>
							</div>
							<a
								href="#"
								class="relative group flex items-center space-x-2.5"
							>
								<svg
									class="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
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
									class="text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate"
								>
									debbielewis/workcation
								</span>
							</a>
						</div>
						<div class="sm:hidden">
							<!-- Heroicon name: solid/chevron-right -->
							<svg
								class="h-5 w-5 text-gray-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<!-- Repo meta info -->
						<div
							class="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3"
						>
							<p class="flex items-center space-x-4">
								<a
									href="#"
									class="relative text-sm text-gray-500 hover:text-gray-900 font-medium"
								>
									Visit site
								</a>
								<button
									type="button"
									class="relative bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									<span class="sr-only">Add to favorites</span>
									<!--
                      Heroicon name: solid/star

                      Starred: "text-yellow-300 hover:text-yellow-400", Not Starred: "text-gray-300 hover:text-gray-400"
                    -->
									<svg
										class="text-yellow-300 hover:text-yellow-400 h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
										/>
									</svg>
								</button>
							</p>
							<p class="flex text-gray-500 text-sm space-x-2">
								<span>Laravel</span>
								<span aria-hidden="true">&middot;</span>
								<span>Last deploy 3h ago</span>
								<span aria-hidden="true">&middot;</span>
								<span>United states</span>
							</p>
						</div>
					</div>
				</li>

				<!-- More projects... -->
			</ul>
		</div>
	</div>
	<!-- Recently activity -->
	<div
		class="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0"
	>
		<div class="pl-6 lg:w-80">
			<div class="pt-6 pb-2">
				<h2 class="text-sm font-semibold">Recently activity</h2>
			</div>
			<div>
				<ul role="list" class="divide-y divide-gray-200">
					<li class="py-4">
						<div class="flex space-x-3">
							<div class="flex-1 space-y-1">
								<div class="flex items-center justify-between">
									<p class="text-sm text-gray-500">
										22/10/2021 à 15:13
									</p>
								</div>
								<p class="text-sm text-gray-900">
									Hitorique de recherche ou log
								</p>
							</div>
						</div>
					</li>

					<!-- More items... -->
				</ul>
				<div class="py-4 text-sm border-t border-gray-200">
					<a
						href="#"
						class="text-indigo-600 font-semibold hover:text-indigo-900"
					>
						View all activity <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
