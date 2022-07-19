<template>
	<v-navigation-drawer
		v-model="drawerShown"
		:temporary="alwaysClosed"
		app
		color="grey lighten-3"
		clipped
		height="100%"
	>
		<v-list dense height="100%">
			<v-img :src="image" height="100%">
				<MaterialfyUserSnippet :showBottom="false" />
				<v-row>
					<v-divider class="mb-2" />
					<!-- this section builds the links by use a for loop and iterating through links section
            the v-for iterates through the links in data(), i stands for index
            we use the paths in the links array-->
					<v-list-item
						v-for="(link, i) in links"
						:key="i"
						:to="link.to"
						
						:active-class="activeColor"
						class="ms-4 tertiary--text"
					>
						<!-- this builds the list of links by iterating, uses it to get correct icons/text too -->
						<v-list-item-action>
							<v-icon>{{ link.icon }}</v-icon>
						</v-list-item-action>

						<v-list-item-title v-text="link.text" class="tertiary--text"  />
					</v-list-item>
					<v-divider class="mt-2" />
					<v-list-item class="ms-2">
						<v-switch
							v-model="alwaysClosed"
							:label="alwaysClosed ? 'Temp Drawer on' : 'Persistant Drawer on'"
						>
							<template v-slot:label>
								<span>
									{{ alwaysClosed ? "Floating Drawer" : "Persistant Drawer" }}
								</span>
							</template>
						</v-switch>
					</v-list-item>
				</v-row>
			</v-img>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "SideDrawer",
	data() {
		return {
			group: false,
			drawerShown: false, /* controls the opening and closing of drawer */
			drawer: this.drawerState, /* this is just here for the watcher to wrok */
			colorWatch: this.color, /* this is just here for the color watcher to wrok */
			activeColor: "primary",
			alwaysClosed: true, /* controls if side drawer is in temp mode or not */
			links: [
				/* builds the list of links using v-for and this array */
				{
					to: "/",
					icon: "mdi-view-dashboard",
					text: "Dash board",
				},
				{
					to: "/data-tables",
					icon: "mdi-application",
					text: "Giao việc",
				},
				{
					to: "/table-list",
					icon: "mdi-application-cog",
					text: "KPI",
				},
				{
					to: "/cardsview",
					icon: "mdi-badge-account-horizontal-outline",
					text: "Quản lý nhân sự",
				},
				{
					to: "/notifications",
					icon: "mdi-bell",
					text: "Giao Việc (tổ trưởng)",
				},
				{
					to: "/user",
					icon: "mdi-account",
					text: "User Profile",
				},
				{
					to: "/maps",
					icon: "mdi-map-marker",
					text: "Maps",
				},
			],
		};
	},

	watch: {
		/* watches for changes in drawerState, you cant watch state directly, 
		its assigned to drawer as a work around to indriectly watch the state.
		once it updates, you update drawerShown which is used in v-model for drawer opening/closing */
		drawerState: function () {

			this.drawerShown = this.drawerState;

			
		},
		/* this watches the Vuex state color, which is assigned to colorWatch which allows you to watch color state indirectly */
		colorWatch: function () {
			this.activeColor = this.color;
		},
		/* when the drawer closes it emits am event with a value of false, that updates drawerShown,
		 which causes this to run. its used to udpate vuex state back to false */
		drawerShown() {
			/* this should be replaced with a mutation*/
			this.$store.state.drawertoggle.drawerState = this.drawerShown;
		},
	},
	computed: {
		/* this was used to check state with a getter and setter. Now its used in watcher */
		...mapState("drawertoggle", ["drawerState", "image", "color"]),
	},
	methods: {
		persistantDrawer() {
			this.alwaysClosed = !this.alwaysClosed;
		},
	},
};
</script>

<style></style>
