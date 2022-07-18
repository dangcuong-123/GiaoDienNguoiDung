<template>
  <v-container color="primary">
    <v-row justify-md="center" wrap>
      <v-col md12>
        <v-card class="mx-auto" max-width="500">
          <v-sheet class="pa-4 primary">
            <v-text-field
              v-model="search"
              label="Tìm Nhóm"
              dark
              flat
              solo-inverted
              hide-details
              clearable
              clear-icon="mdi-close-circle-outline"
            ></v-text-field>
            <v-checkbox
              v-model="caseSensitive"
              dark
              hide-details
              label="Phân biệt hoa thường"
            ></v-checkbox>
          </v-sheet>
          <v-card-text>
            <v-treeview
              :items="items"
              :search="search"
              :filter="filter"
              :open.sync="open"
              :input="hander"
              
            >
              <template v-slot:prepend="{ item }">
                <v-icon
                  v-if="item.children"
                  v-text="
                    `mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`
                  "
                ></v-icon>
              </template>
            </v-treeview>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md12>
        <v-card>
          <v-card-title class="primary">
            FARM HUMAM
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search1"
              append-icon="mdi-magnify"
              label="Tìm kiếm"
              single-line
              hide-details
              dark
              flat
              solo-inverted
              clearable
              clear-icon="mdi-close-circle-outline"
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search1"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    search1: "",
    headers: [
      {
        text: "Họ và Tên",
        align: "start",
        value: "name",
      },
      { text: "Ngày Sinh", value: "ngay_sinh" },
      { text: "Nhóm", value: "nhom" },
      { text: "Thời Gian In", value: "thoi_gian_in" },
      { text: "Thời Gian Out", value: "thoi_gian_out" },
      { text: "Chi Tiết", value: "chi_tiet" },
    ],
    desserts: [
      {
        name: "Cao Minh Hieu",
        ngay_sinh: "01/01/2000",
        nhom: 1,
        thoi_gian_in: "08:00 18/07/2022",
        thoi_gian_out: "17:00 18/07/2022",
        // chi_tiet: '1%',
      },
      {
        name: "Cao Minh Hieu",
        ngay_sinh: "01/01/2000",
        nhom: 1,
        thoi_gian_in: "08:00 18/07/2022",
        thoi_gian_out: "17:00 18/07/2022",
        // chi_tiet: '1%',
      },
      {
        name: "Cao Minh Hieu",
        ngay_sinh: "01/01/2000",
        nhom: 1,
        thoi_gian_in: "08:00 17/07/2022",
        thoi_gian_out: "17:00 17/07/2022",
        // chi_tiet: '1%',
      },
      {
        name: "Cao Minh Hieu",
        ngay_sinh: "01/01/2000",
        nhom: 1,
        thoi_gian_in: "08:00 16/07/2022",
        thoi_gian_out: "17:00 16/07/2022",
        // chi_tiet: '1%',
      },
      {
        name: "Cao Minh Hieu",
        ngay_sinh: "01/01/2000",
        nhom: 1,
        thoi_gian_in: "08:00 15/07/2022",
        thoi_gian_out: "17:00 15/07/2022",
        // chi_tiet: '1%',
      },
      {
        name: "Nguyen Van A",
        ngay_sinh: "05/02/1999",
        nhom: 2,
        thoi_gian_in: "08:00 18/07/2022",
        thoi_gian_out: "17:00 18/07/2022",
        // chi_tiet: '1%',
      },
      {
        name: "Nguyen Van A",
        ngay_sinh: "05/02/1999",
        nhom: 2,
        thoi_gian_in: "08:00 17/07/2022",
        thoi_gian_out: "17:00 17/07/2022",
        // chi_tiet: '1%',
      },
      {
        name: "Nguyen Van A",
        ngay_sinh: "05/02/1999",
        nhom: 2,
        thoi_gian_in: "08:00 16/07/2022",
        thoi_gian_out: "17:00 16/07/2022",
        // chi_tiet: '1%',
      },
      {
        name: "Tran Van A",
        ngay_sinh: "06/08/1995",
        nhom: 2,
        thoi_gian_in: "08:00 18/07/2022",
        thoi_gian_out: "17:00 18/07/2022",
        // chi_tiet: '1%',
      },
      {
        name: "Tran Van A",
        ngay_sinh: "06/08/1995",
        nhom: 2,
        thoi_gian_in: "08:00 17/07/2022",
        thoi_gian_out: "17:00 17/07/2022",
        // chi_tiet: '1%',
      },
      {
        name: "Tran Van A",
        ngay_sinh: "06/08/1995",
        nhom: 2,
        thoi_gian_in: "08:00 16/07/2022",
        thoi_gian_out: "17:00 16/07/2022",
        // chi_tiet: '1%',
      },
      {
        name: "Tran Van A",
        ngay_sinh: "06/08/1995",
        nhom: 2,
        thoi_gian_in: "08:00 15/07/2022",
        thoi_gian_out: "17:00 15/07/2022",
        // chi_tiet: '1%',
      },
      {
        name: "Tran Van A",
        ngay_sinh: "06/08/1995",
        nhom: 2,
        thoi_gian_in: "08:00 18/07/2022",
        thoi_gian_out: "17:00 18/07/2022",
        // chi_tiet: '1%',
      },
    ],

    headers2: [
      {
        text: "ID",
        align: "start",
        // sortable: false,
        value: "id",
      },
      { text: "Nhóm", value: "nhom" },
      { text: "Công Việc", value: "cong_viec" },
      { text: "Địa điểm", value: "dia_diem" },
      { text: "Thời gian bắt đầu", value: "bat_dau" },
      { text: "Thời gian kết thúc", value: "ket_thuc" },
      { text: "Chi tiết công việc", value: "chi_tiet" },
      { text: " ", value: "actions", sortable: false },
      // { text: "Active", value: "isActive" },
      // { text: "Active", value: "isActive" },
    ],
    items: [
      {
        id: 1,
        name: "Farm Human Resources",
        children: [
          {
            id: 2,
            name: "Nhóm 1",
            children: [
              {
                id: 201,
                name: "Dang Duy Cuong",
              },
              {
                id: 202,
                name: "Cao Minh Hieu",
              },
              {
                id: 203,
                name: "Nguyen Duy Khanh",
              },
              {
                id: 204,
                name: "Nguyen Quoc Dat",
              },
              {
                id: 205,
                name: "Duong Van Bach",
              },
            ],
          },
          {
            id: 3,
            name: "Nhóm 2",
            children: [
              {
                id: 301,
                name: "Nguyen Van A",
              },
              {
                id: 302,
                name: "Nguyen Van B",
              },
            ],
          },
          {
            id: 4,
            name: "Nhóm 3",
            children: [
              {
                id: 401,
                name: "Tran Van A",
              },
              {
                id: 402,
                name: "Tran Van B",
              },
              {
                id: 403,
                name: "Tran Van C",
              },
            ],
          },
        ],
      },
    ],
    open: [1, 2],
    search: null,
    caseSensitive: false,
  }),
  
  computed: {
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    },
    handler() {
      alert(123)
      return 123
    },
  },
};
</script>

<style></style>
