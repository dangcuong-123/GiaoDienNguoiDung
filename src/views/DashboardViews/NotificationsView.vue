<template>
  <v-container>
    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Danh sách công việc</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical>
        <v-tab>
          <v-icon left> mdi-account </v-icon>
          Công việc chưa giao
        </v-tab>
        <v-tab>
          <v-icon left> mdi-lock </v-icon>
          Công việc đã giao
        </v-tab>

        <v-tab-item>
          <v-data-table
            :headers="headers"
            :items="res"
            class="elevation-23"
          >
            <template v-slot:item.path="{ item }">
              <v-select :items="item.path"></v-select>
            </template>
          </v-data-table>
        </v-tab-item>
        <v-tab-item>
          <v-data-table
            :headers="headers"
            :items="res2"
            class="elevation-23"
          >
          </v-data-table>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      expanded: [],
      singleExpand: false,
      cSel: "A",
      res: [
        {
          fullName: "Dọn vườn cam",
          med: "Vườn cam số 1",
          startDate: "2022/07/20 10:00",
		  endDate: "2022/07/20 11:00",
		  detail: "Dọn sạch sẽ",
          path: ["Dang Duy Cuong", "Cao Minh Hieu", "Nguyen Duy Khanh", "Nguyen Quoc Dat", "Duong Van Bach"],
        },
		{
          fullName: "Dọn chuồng lợn",
          med: "Chuồng lợn số 2",
          startDate: "2022/07/20 16:00",
		  endDate: "2022/07/20 17:00",
		  detail: "Dọn sạch sẽ",
          path: ["Dang Duy Cuong", "Cao Minh Hieu", "Nguyen Duy Khanh", "Nguyen Quoc Dat", "Duong Van Bach"],
        },
		{
          fullName: "Cho lợn ăn",
          med: "Chuồng lợn số 3",
          startDate: "2022/07/20 11:00",
		  endDate: "2022/07/20 12:00",
		  detail: "Ăn lá chuối",
          path: ["Dang Duy Cuong", "Cao Minh Hieu", "Nguyen Duy Khanh", "Nguyen Quoc Dat", "Duong Van Bach"],
        },
		{
          fullName: "Tưới vườn cam",
          med: "Vườn cam số 1",
          startDate: "2022/07/20 02:00",
		  endDate: "2022/07/20 03:00",
          path: ["Dang Duy Cuong", "Cao Minh Hieu", "Nguyen Duy Khanh", "Nguyen Quoc Dat", "Duong Van Bach"],
        },
      ],
	  res2: [
			{
          fullName: "Dọn vườn cam",
          med: "Vườn cam số 1",
          startDate: "2022/07/20 10:00",
		  endDate: "2022/07/20 11:00",
		  detail: "Dọn sạch sẽ",
          path: ["Dang Duy Cuong"],
        },
		{
          fullName: "Dọn chuồng lợn",
          med: "Chuồng lợn số 2",
          startDate: "2022/07/20 16:00",
		  endDate: "2022/07/20 17:00",
		  detail: "Dọn sạch sẽ",
          path: ["Cao Minh Hieu"],
        },
		{
          fullName: "Cho lợn ăn",
          med: "Chuồng lợn số 3",
          startDate: "2022/07/20 11:00",
		  endDate: "2022/07/20 12:00",
		  detail: "Ăn lá chuối",
          path: ["Nguyen Duy Khanh"],
        },
		{
          fullName: "Tưới vườn cam",
          med: "Vườn cam số 1",
          startDate: "2022/07/20 02:00",
		  endDate: "2022/07/20 03:00",
          path: ["Nguyen Quoc Dat"],
        },
	  ],
      totalRes: 0,
      search: "",
      loading: false,
      options: {
        page: 1,
        itemsPerPage: 40,
      },
      headers: [
        { text: "Tên công việc", value: "fullName" },
        { text: "Địa điểm", value: "med" },
        { text: "Thời gian bắt đầu", value: "startDate" },
		{ text: "Thời gian kết thúc", value: "endDate" },
		{ text: "Chi tiết công việc", value: "detail" },
        { text: "Người phụ trách", value: "path", width: "200" },
      ],
    };
  },
};
</script>
