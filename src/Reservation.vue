
<template>
    <div class="globalreservation">
        <AppBar></AppBar>
        <div class="reservationcontent">
            <p>Accueil/Réservation</p>
            <h1>Réservation</h1>
            <h3>Service gratuit - confirmation immédiate</h3>   
        </div>
        <div class="contentReservation">
            <el-calendar v-model="calendarvalue" @click.native.prevent="isSelectedHandler" />

            <el-form v-model="formData">
                <div class="timechoice">
                    <div class="timerone">
                        <h1>Déjeuner</h1>
                            <el-checkbox :checked="!isChecked" v-model="checkDejeunercomputed" v-if="iscalendarselected" size="large"></el-checkbox> 

                            <el-form-item style="width: 50%;" v-if="!isChecked">
                                <el-select v-model="formData.timechoiceDejeuner" style="display: table-cell;" filtrable placeholder="Choisis l'horaire">
                                    <el-option v-for="item in SelectedDejeuner"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.label"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                    </div>

                    <div class="timertwo">
                        <h1>Dîner</h1>
                            <el-checkbox :checked="isChecked" v-model="checkDinercomputed" v-if="iscalendarselected" size="large"></el-checkbox>

                            <el-form-item style="width: 50%;" v-if="isChecked">
                                <el-select  v-model="formData.timerchoiceDiner" style="display: table-cell;" filtrable placeholder="Choisis l'horaire">
                                    <el-option v-for="item in SelectedDiner"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.label"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                    </div>
                </div>

                <div class="usernumberchoice" v-if="calendarvalue" style="margin-left: 13%;">
                    <h1>Nombre de personnes</h1>
                    <el-form-item style="width: 50%; ">
                        <el-select  v-model="formData.userchoice" style="display: table-cell;" filtrable placeholder="Choisis l'horaire">
                            <el-option v-for="item in SelectPerson"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </el-form>

            <div class="validationbttn">
                <el-button size="large" :plain="true" type="success" @click="sendDataReservation">Valider</el-button>
            </div>
        </div>

        <FooterComponent></FooterComponent>

    </div>
</template>

<script >


import AppBar from '../src/components/AppBar.vue'
import FooterComponent from '../src/components/FooterBody.vue'
import VueTableObject from '../src/dblogic/model/models.js'

export default {
    'name': 'ReservationComponent', 
    components: {
      AppBar,
      FooterComponent
  },
  computed: {
    checkDejeunercomputed: {
        get() {
            return !this.isChecked
        },
        set(value) {
            this.isChecked = !value
        }
    }, 
    checkDinercomputed: {
        get() {
            return this.isChecked
        },
        set(value) {
            this.isChecked = value
        }    
    }, 
},

  created() {
    this.isChecked = false;
  },
  data() {
    return {
        calendarvalue: new Date(), 
        iscalendarselected: true, 
        isChecked: false,  
        formData: {
            timechoiceDejeuner: "",
            timerchoiceDiner: "",
            userchoice: "",
        }, 

        SelectedDejeuner: [
            {value: '1', label: '12:00'}, 
            {value: '2', label: '12:30'},
            {value: '3', label: '13:00'},
            {value: '4', label: '13:30'},
            {value: '5', label: '14:00'},
            {value: '6', label: '14:30'},

        ], 
        SelectedDiner: [
            {value: '1', label: '19:00'},
            {value: '2', label: '19:30'},
            {value: '3', label: '20:00'},
            {value: '4', label: '20:30'},
            {value: '5', label: '21:00'},
            {value: '6', label: '21:30'},
        ], 

        SelectPerson: [
            {value: '1'},
            {value: '2'},
            {value: '3'},
            {value: '4'},
            {value: '5'},
            {value: '6'},
            {value: '7'},
            {value: '8'},
        ],
    }
  },

  methods: {
    isSelectedHandler() {
        return this.iscalendarselected  = !this.iscalendarselected;
    }, 

    convertStringtoTimer(stringref) {
        try {
            const [hour, minute] = stringref.split(":").map(Number)
            return new Date(0, 0, 0, hour, minute)
        } catch(error) {
            console.log("erreur traitement donnée", error)
            throw error;
        }
    },

    async sendDataReservation() {
        try {
            const dataVerification = this.convertStringtoTimer(this.formData.timechoiceDejeuner || this.formData.timerchoiceDiner)
            if (dataVerification) {
                const instanceAdd = await VueTableObject.create({
                    reservationTimer: dataVerification
                })
                return instanceAdd;
            } 
        } catch(error) {
            console.log("erreur traitement donnée", error)
            throw error;
        }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
.globalreservation {
  font-family: 'Quicksand', sans-serif;
}

.reservationcontent {
    width: 90%;
    margin: auto;
    border-radius: 10px;
    background-image: url("./assets/carouselimg/img1.avif");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.reservationcontent p, 
.reservationcontent h1, 
.reservationcontent h3 {
    color: white; 
    position: relative;
    top: 45%;
    margin-left: 13%;
    font-size: 25px;
}
.reservationcontent h1 {
    font-size: 40px;
}
/* element ui part */
.contentReservation {
    margin-top: 100px;
    width: 100%;
    height: auto;
}
.timechoice h1 {
    color: rgb(48, 48, 48);
}
.timechoice {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.timerone {
    width: 400px;
}
.timertwo {
    width: 400px;
}
.usernumberchoice {
    margin: 20px;
}
.validationbttn {
    display:flex;
    flex-direction: row;
    padding: 25px;
    margin-left: 12%;
}
</style>