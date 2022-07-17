<!-- @format -->

<template>
	<apexchart type="polarArea" height="250" :options="chartOptions" :series="series" />
</template>

<script>
	export default {
		name: 'ApexPolarMap',
		data() {
			return {
				series: [60, 40, 30],
				chartOptions: {
					labels: [
						'Hoàn Thành',
						'Đang thực hiện',
						'Chờ phê duyêt',
					],
					title: {
						text: 'Trạng Thái Công Việc',
						align: 'left',
						style: {
							color: '#FFF',
						},
					},
					chart: {
						type: 'polarArea',
						toolbar: {
							show: true,
							tools: {
								download: false,
							},
						},
					},
					stroke: {
						colors: ['#fff'],
					},
					legend: {
						labels: {
							colors: '#FFF',
						},
						offsetY: -1,
					},
					fill: {
						opacity: 0.8,
					},
					yaxis: {
						labels: {
							style: {
								colors: '#FFF',
							},
						},
					},
				},
			}
		},
	}
</script>
