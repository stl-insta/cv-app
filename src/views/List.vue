<template>
	<!-- CVs List -->
	<div class="bg-white lg:min-w-0 lg:flex-1">
		<div
			class="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0"
		>
			<div class="flex items-center">
				<h1 class="flex-1 text-lg font-medium">
					Curriculum Vitae
					<div class="text-sm font-normal" v-show="this.query != ''">
						Searching for : {{ this.query }} (please take your time,
						because the request is very long)
					</div>
				</h1>
				<div class="relative">
					<button
						type="button"
						@click="showSort = !showSort"
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
						v-show="showSort"
						class="origin-top-right z-10 absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
								>ID
							</a>
							<a
								href="#"
								class="text-gray-700 block px-4 py-2 text-sm"
								role="menuitem"
								tabindex="-1"
								id="sort-menu-item-1"
								>Name
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<ul
			role="list"
			class="relative z-0 divide-y divide-gray-200 border-b border-gray-200"
			v-for="cv in results"
			:key="cv.id"
		>
			<li class="relative pl-4 pr-6 py-5 hover:bg-gray-100">
				<div class="flex items-center justify-between space-x-4">
					<div class="min-w-0 space-y-3">
						<div class="text-sm text-gray-500">ID : {{ cv.id }}</div>
						<div class="relative group flex items-center space-x-2.5">
							<template v-if="cv.type == '_doc'">
								<svg
									version="1.1"
									class="flex-shrink-0 w-6"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									viewBox="0 0 512 512"
								>
									<path
										style="fill:#2D527C;"
										d="M438.558,512H19.786c-8.214,0-14.876-6.66-14.876-14.876V256.916c0-8.216,6.661-14.876,14.876-14.876
	s14.876,6.66,14.876,14.876v225.332h389.021v-32.833c0-8.216,6.661-14.876,14.876-14.876c8.214,0,14.876,6.66,14.876,14.876v47.709
	C453.434,505.34,446.773,512,438.558,512z"
									/>
									<g>
										<polygon
											style="fill:#CEE8FA;"
											points="19.786,177.122 19.786,172.332 175.581,14.876 175.581,177.122 	"
										/>
										<rect
											x="196.155"
											y="219.435"
											style="fill:#CEE8FA;"
											width="296.061"
											height="163.65"
										/>
									</g>
									<g>
										<path
											style="fill:#2D527C;"
											d="M492.216,204.559h-38.782V14.876C453.434,6.66,446.773,0,438.558,0H175.581
		c-0.18,0-0.359,0.021-0.537,0.027c-0.171,0.006-0.341,0.013-0.51,0.025c-0.641,0.046-1.279,0.118-1.904,0.244
		c-0.013,0.003-0.025,0.007-0.039,0.01c-0.62,0.126-1.224,0.306-1.821,0.51c-0.153,0.052-0.305,0.107-0.457,0.165
		c-0.589,0.223-1.169,0.472-1.727,0.769c-0.015,0.007-0.03,0.013-0.045,0.021c-0.571,0.306-1.114,0.663-1.642,1.044
		c-0.132,0.095-0.263,0.193-0.394,0.295c-0.522,0.403-1.029,0.829-1.499,1.303L9.21,161.868c-0.35,0.353-0.678,0.721-0.988,1.104
		c-0.207,0.254-0.388,0.521-0.576,0.784c-0.092,0.131-0.195,0.256-0.283,0.388c-0.213,0.323-0.403,0.656-0.588,0.991
		c-0.048,0.085-0.103,0.167-0.147,0.253c-0.181,0.344-0.339,0.695-0.491,1.047c-0.039,0.089-0.085,0.174-0.12,0.263
		c-0.138,0.338-0.253,0.68-0.364,1.025c-0.037,0.116-0.083,0.229-0.119,0.345c-0.094,0.315-0.165,0.634-0.238,0.954
		c-0.036,0.155-0.08,0.305-0.11,0.461c-0.057,0.292-0.091,0.586-0.131,0.881c-0.025,0.186-0.06,0.37-0.077,0.558
		c-0.027,0.286-0.031,0.573-0.043,0.86c-0.006,0.183-0.027,0.364-0.027,0.547v4.792c0,8.216,6.661,14.876,14.876,14.876H175.58
		c8.214,0,14.876-6.66,14.876-14.876V29.752h233.226v174.807H196.156c-8.214,0-14.876,6.66-14.876,14.876v163.644
		c0,8.216,6.661,14.876,14.876,14.876h296.059c8.215,0,14.876-6.66,14.876-14.876V219.435
		C507.092,211.219,500.43,204.559,492.216,204.559z M160.705,162.246H50.692l56.297-56.896l53.718-54.29v111.186H160.705z
		 M477.34,368.203H211.032V234.311H477.34V368.203z"
										/>
										<path
											style="fill:#2D527C;"
											d="M274.984,253.911c17.246,0,30.74,7.997,30.74,29.49v32.364c0,21.493-13.494,29.49-30.74,29.49
		h-22.116c-5.123,0-8.497-2.749-8.497-5.873v-79.598c0-3.124,3.374-5.873,8.497-5.873L274.984,253.911L274.984,253.911z
		 M263.863,270.906v57.356h11.121c6.998,0,11.248-3.999,11.248-12.496v-32.364c0-8.497-4.249-12.496-11.248-12.496H263.863z"
										/>
										<path
											style="fill:#2D527C;"
											d="M317.093,316.515v-33.114c0-21.493,13.37-29.49,30.615-29.49c17.244,0,30.74,7.997,30.74,29.49
		v33.114c0,21.493-13.495,29.49-30.74,29.49C330.464,346.005,317.093,338.008,317.093,316.515z M358.956,283.401
		c0-8.622-4.249-12.496-11.248-12.496c-6.999,0-11.121,3.874-11.121,12.496v33.114c0,8.622,4.122,12.496,11.121,12.496
		c6.999,0,11.248-3.874,11.248-12.496V283.401z"
										/>
										<path
											style="fill:#2D527C;"
											d="M420.683,270.906c-7.123,0-11.246,3.999-11.246,12.496v33.114c0,8.497,4.122,12.496,11.371,12.496
		c9.998,0,10.623-7.622,10.998-12.496c0.375-4.623,4.622-5.873,9.622-5.873c6.748,0,9.872,1.749,9.872,9.247
		c0,16.619-13.495,26.116-31.364,26.116c-16.369,0-29.99-7.997-29.99-29.49v-33.114c0-21.493,13.62-29.49,29.99-29.49
		c17.869,0,31.364,8.997,31.364,24.867c0,7.497-3.124,9.247-9.747,9.247c-5.248,0-9.497-1.375-9.747-5.873
		C431.681,278.903,431.306,270.906,420.683,270.906z"
										/>
									</g>
								</svg>
							</template>
							<template v-else>
								<svg
									class="flex-shrink-0 w-6"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									viewBox="0 0 56 56"
								>
									<g>
										<path
											style="fill:#E9E9E0;"
											d="M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074
		c0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z"
										/>
										<polygon
											style="fill:#D9D7CA;"
											points="37.5,0.151 37.5,12 49.349,12 	"
										/>
										<path
											style="fill:#CC4B4C;"
											d="M19.514,33.324L19.514,33.324c-0.348,0-0.682-0.113-0.967-0.326
		c-1.041-0.781-1.181-1.65-1.115-2.242c0.182-1.628,2.195-3.332,5.985-5.068c1.504-3.296,2.935-7.357,3.788-10.75
		c-0.998-2.172-1.968-4.99-1.261-6.643c0.248-0.579,0.557-1.023,1.134-1.215c0.228-0.076,0.804-0.172,1.016-0.172
		c0.504,0,0.947,0.649,1.261,1.049c0.295,0.376,0.964,1.173-0.373,6.802c1.348,2.784,3.258,5.62,5.088,7.562
		c1.311-0.237,2.439-0.358,3.358-0.358c1.566,0,2.515,0.365,2.902,1.117c0.32,0.622,0.189,1.349-0.39,2.16
		c-0.557,0.779-1.325,1.191-2.22,1.191c-1.216,0-2.632-0.768-4.211-2.285c-2.837,0.593-6.15,1.651-8.828,2.822
		c-0.836,1.774-1.637,3.203-2.383,4.251C21.273,32.654,20.389,33.324,19.514,33.324z M22.176,28.198
		c-2.137,1.201-3.008,2.188-3.071,2.744c-0.01,0.092-0.037,0.334,0.431,0.692C19.685,31.587,20.555,31.19,22.176,28.198z
		 M35.813,23.756c0.815,0.627,1.014,0.944,1.547,0.944c0.234,0,0.901-0.01,1.21-0.441c0.149-0.209,0.207-0.343,0.23-0.415
		c-0.123-0.065-0.286-0.197-1.175-0.197C37.12,23.648,36.485,23.67,35.813,23.756z M28.343,17.174
		c-0.715,2.474-1.659,5.145-2.674,7.564c2.09-0.811,4.362-1.519,6.496-2.02C30.815,21.15,29.466,19.192,28.343,17.174z
		 M27.736,8.712c-0.098,0.033-1.33,1.757,0.096,3.216C28.781,9.813,27.779,8.698,27.736,8.712z"
										/>
										<path
											style="fill:#CC4B4C;"
											d="M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z"
										/>
										<g>
											<path
												style="fill:#FFFFFF;"
												d="M17.385,53h-1.641V42.924h2.898c0.428,0,0.852,0.068,1.271,0.205
			c0.419,0.137,0.795,0.342,1.128,0.615c0.333,0.273,0.602,0.604,0.807,0.991s0.308,0.822,0.308,1.306
			c0,0.511-0.087,0.973-0.26,1.388c-0.173,0.415-0.415,0.764-0.725,1.046c-0.31,0.282-0.684,0.501-1.121,0.656
			s-0.921,0.232-1.449,0.232h-1.217V53z M17.385,44.168v3.992h1.504c0.2,0,0.398-0.034,0.595-0.103
			c0.196-0.068,0.376-0.18,0.54-0.335c0.164-0.155,0.296-0.371,0.396-0.649c0.1-0.278,0.15-0.622,0.15-1.032
			c0-0.164-0.023-0.354-0.068-0.567c-0.046-0.214-0.139-0.419-0.28-0.615c-0.142-0.196-0.34-0.36-0.595-0.492
			c-0.255-0.132-0.593-0.198-1.012-0.198H17.385z"
											/>
											<path
												style="fill:#FFFFFF;"
												d="M32.219,47.682c0,0.829-0.089,1.538-0.267,2.126s-0.403,1.08-0.677,1.477s-0.581,0.709-0.923,0.937
			s-0.672,0.398-0.991,0.513c-0.319,0.114-0.611,0.187-0.875,0.219C28.222,52.984,28.026,53,27.898,53h-3.814V42.924h3.035
			c0.848,0,1.593,0.135,2.235,0.403s1.176,0.627,1.6,1.073s0.74,0.955,0.95,1.524C32.114,46.494,32.219,47.08,32.219,47.682z
			 M27.352,51.797c1.112,0,1.914-0.355,2.406-1.066s0.738-1.741,0.738-3.09c0-0.419-0.05-0.834-0.15-1.244
			c-0.101-0.41-0.294-0.781-0.581-1.114s-0.677-0.602-1.169-0.807s-1.13-0.308-1.914-0.308h-0.957v7.629H27.352z"
											/>
											<path
												style="fill:#FFFFFF;"
												d="M36.266,44.168v3.172h4.211v1.121h-4.211V53h-1.668V42.924H40.9v1.244H36.266z"
											/>
										</g>
									</g>
								</svg>
							</template>

							<span class="text-sm text-gray-900">
								{{ cv.name }}
							</span>
						</div>
					</div>
					<div class="flex flex-col flex-shrink-0 items-end space-y-3">
						<p class="flex items-center space-x-4">
							<a
								:href="'http://localhost:8000/' + cv.url"
								class="relative text-sm text-indigo-500 hover:text-indigo-900 font-medium"
							>
								Open CV
							</a>
						</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		query: String,
	},
	data: () => ({
		showSort: false,
		results: [],
		cvs: '',
	}),
	mounted() {
		fetch('http://localhost:8000/cv/list', {
			headers: { 'Content-type': 'application/json' },
		})
			.then((res) => res.json())
			.then((response) => {
				this.cvs = response.data;
			})
			.catch((error) => {
				this.cvs = error;
			});
	},
	methods: {
		search: function() {
			if (this.query == '') {
				this.results = this.cvs;
			} else {
				fetch('http://localhost:8000/cv/search?keywords=' + this.query, {
					headers: { 'Content-type': 'application/json' },
				})
					.then((res) => res.json())
					.then((response) => {
						this.results = response.data;
					})
					.catch((error) => {
						this.results = error;
					});
			}
		},
	},
	watch: {
		// Watch for change in the query string and recall the search method.
		query: function() {
			this.search();
		},
	},
});
</script>
