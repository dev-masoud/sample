<template>
  <v-app id="inspire">
    <v-app-bar app color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Servers</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4 text-center"
      color="blue lighten-5"
      mini-variant
      mini-variant-width="160px" >

      <v-avatar v-for="i in menu" :key="i"  rounded size="96">
        <div class="product">
          <img :src="i.url" />
          <p class="nav-par">{{i.text}}</p>
        </div>
      </v-avatar>

      
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
            <v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="200"  transition="fade-transition" >

      <v-container>


        <v-row>
          <div class="row-title"><p>Deploy Server</p></div>
        </v-row>
        <v-row>
            <v-col v-for="i in servers" :key="i" cols="3">
                <v-card class="server-card" height="300px"   max-width="344" :class="{ selected: server === i.id }"  @click="setserver(i.id)">
                   <div :class="{ lilcheck: server1 === i.id }" >
                <div id="tickmark" :class="{ tickmark: server2 === i.id }" ></div>
              </div>
                </v-card>
            </v-col>
        </v-row>



        <v-row
          ><div class="row-title" @click="bloop"><p>Choose country</p></div></v-row
        >

        <v-row>
                    <v-col v-for="i in location" :key="i" cols="3">
              <v-card class="server-card"      max-width="344"  :class="{ selected: contr === i.id }"  @click="setcontr(i.id)">
                              <div :class="{ lilcheck: contr1 === i.id }" >
                <div id="tickmark" :class="{ tickmark: contr2 === i.id }" ></div>
              </div>
    <v-list-item three-line>
            <v-list-item-avatar
        tile
        size="80"
      >
      <img  :src="i.url" alt="">
      </v-list-item-avatar>
      
      <v-list-item-content>

        <v-list-item-title class="text-h5 mb-1">
              <div  v-for="(value, key) in 1">
                <p >{{ i.city }}</p></div>
        </v-list-item-title>
        <v-list-item-subtitle>
              <div  v-for="(value, key) in 1">
                <p >{{ i.country }}</p></div></v-list-item-subtitle>
      </v-list-item-content>


      
    </v-list-item>
  
  </v-card>
          </v-col>
        </v-row>
          <!-- /////////// -->
        <v-row>
          <div class="row-title"><p>Server size</p></div>
        </v-row>


                

        <v-row>
          <v-col v-for="i in size" :key="i" cols="3">
            <v-card
              class="server-card"
              height="300px"
              max-width="344"
              :class="{ selected: current === i.id }"
              @click="setCurrent(i.id)"
            >
              <div :class="{ lilcheck: current1 === i.id }" >
                <div id="tickmark" :class="{ tickmark: current2 === i.id }" ></div>
              </div>

              <div class="server" v-for="(value, key) in 1">
                <p class="text1">{{ i.nvm }} GB NVMe</p>
              </div>
              <div class="server month" v-for="(value, key) in 1">
                <p class="text2-num">${{ i.paym }}</p>
                <p class="text2-w">/mon</p>
              </div>
              <div class="server" v-for="(value, key) in 1">
                <p class="text3-num">${{ i.payh }}/h</p>
              </div>

                <div class="server-line" v-for="(value, key) in 1">

                </div>

              <div class="server" v-for="(value, key) in 1">
                <p class="text4-num">{{ i.cpu }}</p>
                <p class="text4-w">CPU</p>
              </div>
              <div class="server" v-for="(value, key) in 1">
                <p class="text5-num">{{ i.memory }}</p>
                <p class="text5-w">Memory</p>
              </div>
              <div class="server" v-for="(value, key) in 1">
                <p class="text6-num">{{ i.band }}GB</p>
                <p class="text6-w">Bandwidth</p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
            </v-lazy>

    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      current: null,
      current1:null,
      current2: null,
      contr:null,
      contr1:null,
      contr2:null,
      server:null,
      server1:null,
      server2:null,
      isActive: false,


        menu:[
          {id:1, text:"product", url:("https://img.icons8.com/nolan/96/box.png")},
          {id:2, text:"Billing", url:("https://img.icons8.com/nolan/96/briefcase.png")},
          {id:3, text:"Support", url:("https://img.icons8.com/nolan/96/support.png")},
          {id:4, text:"About Us", url:("https://img.icons8.com/nolan/96/about.png")},
          {id:5, text:"About Us", url:("https://img.icons8.com/nolan/96/about.png")}

        ],

         servers:[
        {id:1},
        {id:2},
        {id:3},
        {id:4},

      ],

      location:[
        {id:1 ,country: "Sweden", city:"Stockholm" ,url:require('./flags/sweflag.svg')},
        {id:2 ,country: "United Kingdom", city:"London" ,url:require('./flags/kingdom.svg') },
        {id:3 ,country: "Netherlands", city:"Amsterdam" ,url:require('./flags/Netherlands.svg') },
        {id:4 ,country: "Germany", city:"Frankfurt" , url:require('./flags/germany.svg')},
        {id:5 ,country: "France", city:"Paris" ,url:require('./flags/france.svg') },
        {id:6 ,country: "United States", city:"Miami" ,url:require('./flags/united.svg') },
        {id:7 ,country: "United States", city:"Atlanta" ,url:require('./flags/united.svg') },
        {id:8 ,country: "United States", city:"Chicago" ,url:require('./flags/united.svg') },
        {id:9 ,country: "United States", city:"Dallas" ,url:require('./flags/united.svg') },
        {id:10 ,country: "United States", city:"Los Angeles" ,url:require('./flags/united.svg') },
        {id:11 ,country: "United States", city:"New York (NJ)" ,url:require('./flags/united.svg') },
        {id:12 ,country: "United States", city:"Seattle" ,url:require('./flags/united.svg') },
        {id:13 ,country: "United States", city:"Silicon Valley" ,url:require('./flags/united.svg') },
        {id:14 ,country: "Canada", city:"Toronto" ,url:require('./flags/canada.svg') },
        {id:15 ,country: "Japan", city:"Tokyo" ,url:require('./flags/japan.svg') },
        {id:16 ,country: "South Korea ", city:"Seoul" ,url:require('./flags/korea.svg') },
      ],



      size: [
        {id: 1, nvm: "32", paym: "6", payh: "0.009", cpu: "1", memory: "1", band: "1",},
        {id: 2, nvm: "64", paym: "12", payh: "0.018", cpu: "1", memory: "2", band: "2",},
        {id: 3, nvm: "80", paym: "18", payh: "0.027", cpu: "2", memory: "2", band: "3",},
        {id: 4, nvm: "128", paym: "24", payh: "0.036", cpu: "2", memory: "4", band: "3",},
        {id: 5, nvm: "256", paym: "48", payh: "0.071", cpu: "3", memory: "8", band: "4",},
        {id: 6, nvm: "384", paym: "96", payh: "0.143", cpu: "4", memory: "16", band: "5",},
        {id: 7, nvm: "448", paym: "144", payh: "0.214", cpu: "6", memory: "24", band: "6",},
        {id: 8, nvm: "512", paym: "192", payh: "0.286", cpu: "8", memory: "32", band: "7",},
        {id: 9, nvm: "768", paym: "256", payh: "0.381", cpu: "12", memory: "48", band: "8",},
      ],










  
    };
  },
  components: {

  },
  methods: {

         setserver(id){
      this.server=id;
      this.server1=id;
      this.server2=id;
    },

    setcontr(id){
      this.contr=id;
      this.contr1=id;
      this.contr2=id;
    },


    setCurrent(id) {
      this.current = id;
      this.current1 = id;
      this.current2 = id;
    },

  bloop(){
    location[0]=!location[0];
  }

   

   

    
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");

.product {
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 6px;
  margin-bottom: 6px;
  transition: 0.5s ease-in-out;

}

.nav-par {
  color: rgb(66, 66, 66);
  font-size: 16px;
  font-family: "Oswald", sans-serif;
}


.product:hover {
  width: 70px;
  color: rgb(0, 0, 0);


}


.lilcheck {
  background-color: transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid blue;
  border-left: 20px solid transparent;
  border-top: 20px solid blue;
  position: absolute;
  right: 0px;
  width: 0;
  height: 0;
}

.tickmark {
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  bottom: 0px;
  left: -5px;
}

.tickmark::before {
  position: absolute;
  left: 0;
  top: 50%;
  height: 50%;
  width: 3px;
  background-color: #ffffff;
  content: "";
  transform: translateX(10px) rotate(-45deg);
  transform-origin: left bottom;
}

.tickmark::after {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  background-color: #ffffff;
  content: "";
  transform: translateX(10px) rotate(-45deg);
  transform-origin: left bottom;
}

.row-title p {
  color: rgb(27, 27, 27);
  font-size: 20px;
  font-family: "Oswald", sans-serif;
  padding: 10px;
}

.server p {
  display: inline;
}

.server {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.text1 {
  color: black;
  font-size: 17px;
  font-weight: bold;
  padding: 0 0 10px;
  margin-top: 10px;
}
.text2-num {
  color: #0051ff;
  font-size: 28px;
  font-weight: 500;
}
.text2-w {
  color: #0051ff;
  font-size: 21px;
}
.month {
  display: flex;
  align-items: center;
}
.text3-num,
.text3-w {
  color: grey;
  font-size: 13px;
}

.text4-num {
  color: black;
  font-weight: bold;
  line-height: 24px;
  font-size: 15px;
}
.text4-w {
  color: black;
  font-weight: 400;
  line-height: 24px;
  padding-left: 5px;
}

.text5-num {
  color: black;
  font-weight: bold;
  line-height: 24px;
}
.text5-w {
  color: black;
  font-weight: 400;
  line-height: 24px;
  padding-left: 5px;
}

.text6-num {
  color: black;
  font-weight: bold;
  line-height: 24px;
}
.text6-w {
  color: black;
  font-weight: 400;
  line-height: 24px;
  padding-left: 5px;
}
.server-card {
  background-color: #e0e0e0 !important;
  border:1px solid rgb(192, 192, 192) !important;
  box-shadow: 0px 0px 0px 0px !important;
  transition: 0.3s ease-in-out;
}
.server-card:hover{
  border: 1px solid rgb(75, 75, 75) !important;
}
.server-card:focus{
    background-color: #ffffff !important;
}


.selected {
  background-color: #ffffff !important;
  box-shadow: 0px 0px 60px 0px rgb(168, 168, 168) !important;
}
.selected:hover{
  border:1px solid rgb(192, 192, 192) !important;

}
.ttt{
  width: 80px;
}
.server-line{
  width: 30px;
  height: 2px;
  background-color: blue;
  margin:10px auto;
}

</style>




