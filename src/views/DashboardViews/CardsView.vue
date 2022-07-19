<template>
  <v-container color="primary">
    <v-row class="mb-5" justify-md="center" wrap>
      <v-col md12>
        <v-card class="mx-auto" max-width="500">
          <v-sheet class="pa-4 primary">
            <v-text-field
              v-model="search1"
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
        <v-data-table
          :headers="headers2"
          :items="userList"
          sort-by="id"
          class="elevation-1 secondary"
          :mobile-breakpoint="0"
          :search="search2"
        >
          <template v-slot:top>
            <v-toolbar color="primary" flat>
              <v-toolbar-title>Danh sách nông dân</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>

              <v-text-field
                v-model="search2"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                class="ma-2 px-8"
                color="secondary"
              ></v-text-field>
              <!-- this dialog section controls the new item button/pop-up functionality v-model controls dialog pop up -->
              <v-dialog v-model="dialog" max-width="500px">
                <!-- controls sending and capturing 'on' event to open v-card dialog pop up -->
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Thêm thành viên
                  </v-btn>
                </template>
                <!-- this pops up after the new item button is hit, controls the editing pop up -->
                <v-card>
                  <v-card-title>
                    <!-- changes title based on formTitle index, -1 shows 'New item' any other index shows 'Edit Item' as the title -->
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>
                  <!-- you add the fields you want to edit here. the v-model needs to bind to the editedItem, 
									save() then uses the data in editedItem to create a new item or edit existing -->
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <!-- editedItem is set once you open this menu-->
                          <v-text-field
                            v-model="editedItem.name"
                            label="Họ và tên"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.ngay_sinh"
                            label="Ngày Sinh"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.nhom"
                            label="Nhóm"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.chuc_vu"
                            label="Chức vụ"
                          />
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.so_dien_thoai"
                            label="Số điện thoại"
                          />
                        </v-col>

                      </v-row>
                    </v-container>
                  </v-card-text>
                  <!--  save and cancel buttons for the new/edit dialog pop up-->
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <!-- delete dialog menu popup -->
              <!-- this does the same as my delete button below  -->
            </v-toolbar>
          </template>
          <!-- TABLE ACTIONS -->
          <!-- the v-table has slots you can use to change column content. We use this for actions column 
					this allows us to pass in the edit and delete icons to the actions column
					we then use the item object passed with scoped slot from v-table(child)-->
          <template v-slot:[`item.actions`]="{ item }">
            <!-- used Dynamic Slot Names with string template to get around linting error -->
            <!-- this is the actions edit button -->
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <!-- this is the actions delete button -->
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <template #[`item.avatar`]="{ item }">
            <v-avatar>
              <img :src="item.avatar" :alt="item.first_name" />
            </v-avatar>
          </template>
          <template v-slot:no-data>
            <!-- this is the actions reset button that shows when you delete -->
            <v-btn color="primary" @click="getusernames"> Reset </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-card>
      <v-card-title class="primary">
        Thông tin điểm danh
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
        :headers="headers1"
        :items="desserts1"
        :search="search1"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    snack: false,
    snackColor: "",
    snackText: "",
    max25chars: (v) => v.length <= 25 || "Input too long!",
    pagination: {},
    userList: [],
    apiEndpoint: "users",
    checkboxAdmin: true,
    checkboxActive: false,
    rowsAmount: [
      15,
      20,
      25,
      { text: "$vuetify.dataIterator.rowsPerPageAll", value: -1 },
    ],
    dialog: false,
    search2: "",
    // headers: [],
    headers2: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Họ và tên", value: "name" },
      { text: "Ngày Sinh", value: "ngay_sinh" },
      { text: "Nhóm", value: "nhom" },
      { text: "Chức Vụ", value: "chuc_vu" },
      { text: "Sô Điện Thoại", value: "so_dien_thoai" },
      { text: "Tùy Chỉnh", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    //this is the new item created by copying the userList item. its used in editing menu and methods
    editedItem: {
      name: "",
      ngay_sinh: "",
      nhom: "",
      chuc_vu: "",
      so_dien_thoai: "",
    },

    //second table
    dialogDelete: false,
    search1: "",
    headers1: [
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
    desserts1: [
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
    // search: null,
    caseSensitive: false,
  }),

  computed: {
    //Changes the title of the v-card based on if the editied index is the same as -1
    //the default index is -1 so it assumes if there is no item index then its a new item
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    },
  },
  watch: {
    //when dialog is updated this watcher returns the updated value only if the value is truthy, else it calls this.close() method
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    //once the table list is loaded, load the headers
    userList() {
      this.getHeaders();
    },
  },
  // called when page is created before dom to load data from api
  created() {
    this.getusernames();
    // this.$store.dispatch('autoRefreshToken')
    // .then(response => console.log(response))
    // .catch(error => console.log(error))
  },

  methods: {
    //uses axios to send get request to api in genericAPI
    getusernames() {
      this.userList = [
        {
          id: 1,
          name: "Dang Duy Cuong",
          ngay_sinh: "05/02/2000",
          nhom: "1",
          chuc_vu: "Nông dân",
          so_dien_thoai: "1234567890"
        },
        {
          id: 2,
          name: "Cao Minh Hieu",
          ngay_sinh: "05/02/2000",
          nhom: "1",
          chuc_vu: "Quản lý",
          so_dien_thoai: "1234567890"
        },
        {
          id: 3,
          name: "Nguyen Duy Khanh",
          ngay_sinh: "05/02/2000",
          nhom: "1",
          chuc_vu: "Tổ trưởng",
          so_dien_thoai: "1234567890"
        },
        {
          id: 4,
          name: "Nguyen Quoc Dat",
          ngay_sinh: "05/02/2000",
          nhom: "1",
          chuc_vu: "Nông dân",
          so_dien_thoai: "1234567890"
        },
        {
          id: 5,
          name: "Duong Van Bach",
          ngay_sinh: "05/02/2000",
          nhom: "1",
          chuc_vu: "Nông dân",
          so_dien_thoai: "1234567890"
        },
        {
          id: 6,
          name: "Nguyen Van A",
          ngay_sinh: "05/02/2000",
          nhom: "2",
          chuc_vu: "Nông dân",
          so_dien_thoai: "1234567890"
        },
        {
          id: 7,
          name: "Nguyen Van B",
          ngay_sinh: "05/02/2000",
          nhom: "2",
          chuc_vu: "Tổ trưởng",
          so_dien_thoai: "1234567890"
        },
        {
          id: 8,
          name: "Tran Van A",
          ngay_sinh: "05/02/2000",
          nhom: "3",
          chuc_vu: "Tổ trưởng",
          so_dien_thoai: "1234567890"
        },
        {
          id: 9,
          name: "Tran Van B",
          ngay_sinh: "05/02/2000",
          nhom: "3",
          chuc_vu: "Nông dân",
          so_dien_thoai: "1234567890"
        },
        {
          id: 10,
          name: "Tran Van C",
          ngay_sinh: "05/02/2000",
          nhom: "3",
          chuc_vu: "Nông dân",
          so_dien_thoai: "1234567890"
        },
      ];
    },
    //this dynamically creates the headers based off the keys of the first item in the userList array
    getHeaders() {
      const itemObject = this.userList[0];
      for (let key in itemObject) {
        let headerText = key.replace(/_/, " ").toUpperCase();
        this.headers.push({ text: headerText, value: key });
      }
    },
    // object.assign fills in the empty object with the properties of item
    editItem(item, dialogbox = true) {
      /* sets the index that controls the title text in the new item pop up
			this updates the editedIndex from being -1 to whatever the index of the table item is that you are editing
			this function is called by the @click edit icons in table actions
			*/
      this.editedIndex = this.userList.indexOf(item);
      item.isAdmin = this.checkboxAdmin;
      item.isActive = this.checkboxActive;
      // makes a new object with the same properties as the item object that is able to be accessed easily by methods and others
      this.editedItem = Object.assign({}, item);
      //opens the dialog editing box connected to v-dialog v-model="dialog"
      this.dialog = dialogbox;
    },
    /* This is a dynamic method that handles sending vuex actions to call different axios endpoints with different methods
		you get the index of the item passed in via another method, 
		you use the edited item created in the method that called this one and assign to tableITem to use later
		you then dispatch the updateTableItem action with the new edited from html item
		you then remove the item from the list as well to update the table
		 */
    //this is really only called by delete right now, to create or update we use save(). But it can be expanded with if/switch
    callTableAction(item, endpoint, method) {
      const index = this.userList.indexOf(item);
      let tableItem = this.editedItem;
      this.$store
        .dispatch("updateTableItem", { endpoint, tableItem, method })
        .then(() => {
          this.userList.splice(index, 1); //remove/delete the item from the array the table is using
          this.saveInline(); //calls snackbar noticiation
        })
        .catch((error) => {
          console.log(error);
          this.cancelInline; //calls snackbar noticiation
        });
    },
    // this sets the item, url path endpoint and the type of api method(delete) for calltableAction
    deleteItem(item) {
      //this causes config dialog with 'ok'/'cancel' and if ok is hit this runs
      if (confirm("Are you sure you want to delete this item?")) {
        this.editedItem = Object.assign({}, item);
        let endpoint = `users/delete/${this.editedItem.username}`;
        let method = "delete";
        // calls callTableActions which is a method above that handles calling axios via vuex actions
        this.callTableAction(item, endpoint, method);
      }
    },
    // closes the dialog pop up and resets index until its opened again
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1; // resets the index that controls the title text in the new item pop up
      }, 300);
    },
    save() {
      //if editedIndex is greater than -1 then the item we are trying to save is an already exisiting item, so we update the table differently
      //when you open the editItem menu it sets the index to the items index, which then is used here to determine what to do
      if (this.editedIndex > -1) {
        let tableItem = this.editedItem;
        let endpoint = `users/update/${this.editedItem.username}`;
        let method = "patch";
        this.$store
          .dispatch("updateTableItem", { endpoint, tableItem, method })
          .then(() => {
            // merge both objects to update the original object in userList to update table
            Object.assign(this.userList[this.editedIndex], this.editedItem);
            this.saveInline(); //calls snackbar noticiation
          })
          .catch((error) => {
            console.log(error);
            this.cancelInline; //calls snackbar noticiation
          });
      } else {
        //if the editedIndex isnt greater than -1 then its a new item/user so we do a different set of actions to add a new item
        let tableItem = this.editedItem;
        let endpoint = `users/new-user`;
        let method = "post";
        this.$store
          .dispatch("updateTableItem", { endpoint, tableItem, method })
          .then(() => {
            // instead of merging objects in userList we add new object to user list with .push()
            console.log("new user");
            this.userList.push(this.editedItem);
          })
          .catch((error) => {
            console.log(error);
            this.cancelInline; //calls snackbar noticiation
          });
      }
      this.close();
    },
    // toasts/snackbar/pop-up messages when you pressactions
    saveInline() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
    },
    cancelInline() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    reset() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data reset to default";
    },
    openInline() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    closeInline() {
      console.log("Dialog closed");
    },
  },
};
</script>

<style></style>
