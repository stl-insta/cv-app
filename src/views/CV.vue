<template>
	<main>
		<h2
			class="text-4xl font-extrabold leading-10 tracking-tight text-center text-gray-900"
		>
			Choose a cv
		</h2>
		<div class="flex flex-row flex-wrap mt-5">
			<div class="p-6 my-6 border">
				<router-link to="/cv/all">
					All
				</router-link>
			</div>
			<div
				class="p-6 my-6 border"
				v-for="lang in $store.state.cvs"
				v-bind:key="lang"
			>
				<router-link :to="'/cv/' + lang">
					{{ lang }}
				</router-link>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch('fetchCVs');
	},
};
</script>
