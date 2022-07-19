<!-- https://vuetifyjs.com/en/api/v-data-table/#api-props  -->
<template>
  
  <v-container fill-height>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-sheet color="background">
          <header>
            <span class="text-h3 text-uppercase d-flex text-center" style="color: #ffc107"
              >Giao Việc
            </span>
          </header>
        </v-sheet>
      </v-col>
    </v-row>
    <iframe class="my-10" src="https://clickermonkey.github.io/dayspan-vuetify/example/" width="100%" height="700px"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
    ></iframe>

    
 
  </v-container>
</template>


<style>
table.v-table thead tr {
  color: red !important;
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
