<!-- @format -->

<template>
	<v-container fluid :style="$vuetify.breakpoint.mdAndUp ? 'width: 1660px' : 'width: 100%' ">
		<!-- Used named slots and props to overide the default card content below -->
		<v-row class="d-flex align-start justify-center mb-2">
			<!-- FIRST COLOR CARD with default content -->
			<v-col md="4">
				<MaterialfyColorCard
					cardMaxWidth="500"
					cardInnerText=""
					:cardShowDivider="false"
					:cardShowActions="false"
					cardColor="blue-grey darken-2"
				>
					<template v-slot:crdInner>
						<materialfy-apex-polar-map />
					</template>
				</MaterialfyColorCard>
			</v-col>
			<!-- SECOND COLOR CARD with secondary color -->
			<v-col md="4">
				<MaterialfyColorCard
					cardMaxWidth="500"
					cardInnerText=""
					:cardShowDivider="false"
					:cardShowActions="false"
					cardColor="blue-grey darken-2"
				>
					<template v-slot:crdInner>
						<materialfy-apex-donut />
					</template>
				</MaterialfyColorCard>
			</v-col>
			<v-col md="4">
				<MaterialfyColorCard
					cardMaxWidth="500"
					cardInnerText="User Engagement"
					:cardShowDivider="false"
					:cardShowActions="false"
					:cardShowInnerText="false"
					cardColor="blue-grey darken-2"
				>
					<template v-slot:crdInner>
						<materialfy-apex-multiple-radial-bars />
					</template>
				</MaterialfyColorCard>
			</v-col>
		</v-row>

		<!-- THIRD ROW -->
		<!-- Used named slots and props to overide the default card content below -->
		<v-row class="d-flex align-start mb-2">
			<v-col>
				<MaterialfyColorCard cardInnerText="" 
				:cardShowDivider="false" 
				:cardShowActions="false"
				cardColor="blue-grey darken-2"
				>
					<template v-slot:crdInner>
						<materialfy-apex-y-axis />
					</template>
				</MaterialfyColorCard>
			</v-col>
			<v-col>
				<MaterialfyColorCard
					cardInnerText=""
					:cardShowDivider="false"
					:cardShowActions="false"
					cardColor="blue-grey darken-2"
				>
					<template v-slot:crdInner>
						<materialfy-apex-line-graph />
					</template>
				</MaterialfyColorCard>
			</v-col>
		</v-row>
		<!-- FOURTH ROW with calendar -->
		<v-row class="ma-3 d-flex align-start justify-center">
			<v-col md="9">
				<v-responsive :aspect-ratio="16 / 9">
					<MaterialfyCalendar />
				</v-responsive>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

	export default {
		methods: {
			throwError: function () {
				throw new Error('Sentry Error')
			},
		},
	}
</script>

<style>
@media only screen and (min-width: map-get($grid-breakpoints, 'xl')) {
.container {
max-width: 1440px !important;
}
}
</style>
