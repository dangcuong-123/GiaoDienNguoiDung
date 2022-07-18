<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-data-table
        :headers="headers"
        :items="kpiStatus"
        item-key="name"
        class="elevation-1 pa-6"
      >
        <template v-slot:top>
          <!-- v-container, v-col and v-row are just for decoration purposes. -->
          <v-container fluid>
            <v-row>
              <v-col>
                <v-row class="pa-6">
                  <!-- Filter for dessert name-->
                  <v-text-field
                    v-model="nameGroupFilterValue"
                    type="text"
                    label="Nhóm"
                  ></v-text-field>
                </v-row>
              </v-col>

              <v-col>
                <v-row class="pa-6">
                  <!-- Filter for dessert name-->
                  <v-text-field
                    v-model="dateFilterValue"
                    type="text"
                    label="Ngày bắt đầu"
                  ></v-text-field>
                </v-row>
              </v-col>

              <v-col>
                <v-row class="pa-6">
                  <!-- Filter for workName -->
                  <v-select
                    :items="workStatus"
                    v-model="workStatusFilterValue"
                    label="Trạng thái"
                  ></v-select>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip :color="getColor(item.status)" dark>
            {{ item.status }}
          </v-chip>
        </template>
      </v-data-table>
    </v-row>

    <v-row align="center" justify="center" class="my-10">
      <v-data-table :headers="kpi" :items="kpiReport" class="elevation-1">
        <template v-slot:top>
          <!-- v-container, v-col and v-row are just for decoration purposes. -->
          <v-container fill-height fluid> </v-container>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // We need some values for our select
      workStatus: [
        { text: "Tất cả", value: null },
        { text: "Đã hoàn thành", value: "Đã hoàn thành" },
        { text: "Đang thực hiện", value: "Đang thực hiện" },
        { text: "Chờ phê duyệt", value: "Chờ phê duyệt" },
      ],
      workStatusFilterValue: null,
      // Filter models.
      nameGroupFilterValue: "",
      dateFilterValue: "",

      // Table data.
      kpiStatus: [
        {
          name: "Nhóm 1",
          workName: "Cho lợn ăn",
          location: 6.0,
          timeStart: "2022/4/11 10:10",
          timeFinish: "2022/4/11  10:11",
          workInfo: "abc",
          status: "Đã hoàn thành",
        },
        {
          name: "Nhóm 2",
          workName: "Cho lợn ăn",
          location: 9.0,
          timeStart: "2022/5/11 10:10",
          timeFinish: "2022/5/13 10:11",
          workInfo: "abc",
          status: "Đã hoàn thành",
        },
        {
          name: "Nhóm 3",
          workName: "Dọn chuồng lợn",
          location: 16.0,
          timeStart: "2022/5/12 10:10",
          timeFinish: "2022/5/13 10:11",
          workInfo: "abc",
          status: "Đã hoàn thành",
        },
        {
          name: "Nhóm 3",
          workName: "Trồng hoa",
          location: 20,
          timeStart: "2022/6/11 10:10",
          timeFinish: "2022/6/13 10:11",
          workInfo: "abc",
          status: "Đang thực hiện",
        },
        {
          name: "Nhóm 2",
          workName: "Dọn chuồng lợn",
          location: 16.0,
          timeStart: "2022/5/11 10:10",
          timeFinish: "2022/5/13 10:11",
          workInfo: "abc",
          status: "Đang thực hiện",
        },
        {
          name: "Nhóm 1",
          workName: "Dọn chuồng lợn",
          location: 0.0,
          timeStart: "2022/6/11 10:10",
          timeFinish: "2022/6/13 10:11",
          workInfo: "abc",
          status: "Đang thực hiện",
        },
        {
          name: "Nhóm 2",
          workName: "Trồng hoa",
          location: 0.2,
          timeStart: "2022/5/11 10:10",
          timeFinish: "2022/5/13 10:11",
          workInfo: "abc",
          status: "Đang thực hiện",
        },
        {
          name: "Nhóm 3",
          workName: "Trồng hoa",
          location: 3.2,
          timeStart: "2021/5/12 10:10",
          timeFinish: "2021/5/14 10:11",
          workInfo: "abc",
          status: "Chờ phê duyệt",
        },
        {
          name: "Nhóm 1",
          workName: "Tỉa cây",
          location: 25.0,
          timeStart: "2021/5/11 10:10",
          timeFinish: "2021/5/13 10:11",
          workInfo: "abc",
          status: "Chờ phê duyệt",
        },
      ],

      kpiReport: [
        {
          name: "Nhóm 1",
          workNum: 100,
          workDone: 50,
          workDoing: 20,
          workApproving: 30,
        },
        {
          name: "Nhóm 2",
          workNum: 80,
          workDone: 30,
          workDoing: 20,
          workApproving: 30,
        },
        {
          name: "Nhóm 3",
          workNum: 70,
          workDone: 50,
          workDoing: 5,
          workApproving: 15,
        },
      ],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Nhóm",
          align: "left",
          sortable: false,
          value: "name",
          filter: this.nameFilter,
        },
        {
          text: "Công việc",
          value: "workName",
        },
        { text: "Địa điểm", value: "location" },
        { text: "Thời gian bắt đầu", value: "timeStart", filter: this.dateFilter },
        { text: "Thời gian kết thúc", value: "timeFinish" },
        { text: "Chi tiết công việc", value: "workInfo" },
        { text: "Trạng thái", value: "status", filter: this.workStatusFilter },
      ];
    },
    kpi() {
      return [
        {
          text: "Nhóm",
          align: "left",
          sortable: false,
          value: "name",
          filter: this.nameFilter,
        },
        {
          text: "Tổng số công việc",
          value: "workNum",
        },
        { text: "Công việc đã hoàn thành", value: "workDone" },
        { text: "Công việc đang tiến hành", value: "workDoing" },
        { text: "Công việc chờ duyệt", value: "workApproving" },
      ];
    },
   
  },
  methods: {
    /**
     * Filter for dessert names column.
     * @param value Value to be tested.
     * @returns {boolean}
     */
    nameFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.nameGroupFilterValue) {
        return true;
      }

      // Check if the current loop value (The dessert name)
      // partially contains the searched word.
      return value.toLowerCase().includes(this.nameGroupFilterValue.toLowerCase());
    },

    dateFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.dateFilterValue) {
        return 1;
      }

      // Check if the current loop value (The dessert name)
      // partially contains the searched word.
      return value.includes(this.dateFilterValue);
    },

    /**
     * Filter for workName column.
     * @param value Value to be tested.
     * @returns {boolean}
     */
    workStatusFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.workStatusFilterValue) {
        return true;
      }

      // Check if the current loop value (The workName value)
      // equals to the selected value at the <v-select>.
      return value === this.workStatusFilterValue;
    },

    getColor(status) {
      if (status === "Đã hoàn thành") return "green";
      else if (status === "Đang thực hiện") return "red";
      else return "orange";
    },
  },
};
</script>

<style></style>
