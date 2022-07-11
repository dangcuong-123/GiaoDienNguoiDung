<!-- @format -->

<template>
	<v-container fluid :style="$vuetify.breakpoint.mdAndUp ? 'width: 1660px' : 'width: 100%' ">
		<!-- Used named slots and props to overide the default card content below -->
		<v-row class="d-flex align-start justify-center mb-2">
			<!-- FIRST COLOR CARD with default content -->
			<v-col md="4" class="my-2">
				<MaterialfyColorCard
					cardMaxWidth="500"
					cardInnerText="Horse Power"
					:cardShowDivider="false"
					:cardShowActions="false"
					cardColor="accent"
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
					cardInnerText="Users Usering"
					:cardShowDivider="false"
					:cardShowActions="false"
					cardColor="accent"
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
					cardColor="tertiary"
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
				<MaterialfyColorCard cardInnerText="$$$$$$$ emoji" :cardShowDivider="false" :cardShowActions="false">
					<template v-slot:crdInner>
						<materialfy-apex-y-axis />
					</template>
				</MaterialfyColorCard>
			</v-col>
			<v-col>
				<MaterialfyColorCard
					cardInnerText="User Engagement"
					:cardShowDivider="false"
					:cardShowActions="false"
					cardColor="tertiary"
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
	// this is where the line chart sparkline gets its colors
	const gradients = [
		['#222'],
		['#42b3f4'],
		['red', 'orange', 'yellow'],
		['purple', 'violet'],
		['#00c6ff', '#F0F', '#FF0'],
		['#f72047', '#ffd200', '#1feaea'],
	]
	export default {
		data: () => ({
			labels: ['Feb', 'March', 'April', '420', 'May', 'June', 'July', 'Aug'],
			sparklineValue: [200, 300, 410, 390, 420, 460, 420, 420],
			width: 2,
			radius: 10,
			padding: 8,
			lineCap: 'round',
			gradient: gradients[5],
			sparklineValue2: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 10],
			gradientDirection: 'top',
			gradients,
			fill: false,
			type: 'trend',
			autoLineWidth: false,
			tableHeaders: [
				{
					sortable: false,
					text: 'ID',
					value: 'id',
					class: 'tertiary--text text-h6',
				},
				{
					sortable: false,
					text: 'Name',
					value: 'name',
					class: 'tertiary--text text-h6',
				},
				{
					sortable: false,
					text: 'Salary',
					value: 'salary',
					align: 'float-right',
					class: 'tertiary--text text-h6',
				},
				{
					sortable: false,
					text: 'Country',
					value: 'country',
					align: 'float-right',
					class: 'tertiary--text text-h6',
				},
				{
					sortable: false,
					text: 'City',
					value: 'city',
					align: 'float-right',
					class: 'tertiary--text text-h6',
				},
			],
			tableItems: [
				{
					name: 'Dakota Rice',
					country: 'Niger',
					city: 'Oud-Tunrhout',
					salary: '$35,738',
				},
				{
					name: 'Minerva Hooper',
					country: 'Curaçao',
					city: 'Sinaai-Waas',
					salary: '$23,738',
				},
				{
					name: 'Sage Rodriguez',
					country: 'Netherlands',
					city: 'Overland Park',
					salary: '$56,142',
				},
				{
					name: 'Philip Chanley',
					country: 'Korea, South',
					city: 'Gloucester',
					salary: '$38,735',
				},
				{
					name: 'Doris Greene',
					country: 'Malawi',
					city: 'Feldkirchen in Kārnten',
					salary: '$63,542',
				},
			],
			tab: null,
			tabItems: [
				{ tab: 'Bugs', icon: 'mdi-bug' },
				{ tab: 'Server Issues', icon: 'mdi-cloud' },
				{ tab: 'Tickets', icon: 'mdi-alert' },
				{ tab: 'New Issues', icon: 'mdi-access-point' },
				{ tab: 'To-Do', icon: 'mdi-alert-box-outline' },
			],
			textList: [
				'You just read a sentence',
				'Second sentence with a lot of merit',
				'Fix bugs',
				'Look at Pull Requests',
				'Hope pull request fix bugs?',
				'Figure out some other text to put here',
			],
		}),
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
