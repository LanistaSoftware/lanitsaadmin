<template>
   <div>
       <h2> Şifre Oluştur</h2>
       <div class="input_container form-container">
           <ul>
                <li v-bind:class="{ is_valid: contains_twenty_characters }">En fazla 20 karakter olmalı.</li>
               <li v-bind:class="{ is_valid: contains_eight_characters }">En az 8 karakter olmalı.</li>
               <li v-bind:class="{ is_valid: contains_number }">Rakam içermeli.</li>
               <li v-bind:class="{ is_valid: contains_uppercase }">Büyük harf içermeli.</li>
               <li v-bind:class="{ is_valid: contains_special_character }">Özel bir karakter içermeli.</li>
               <li v-bind:class="{ is_valid: password_control }">Şifre tekrar kontrolü</li>
           </ul>
           <div class="checkmark_container" v-bind:class="{ show_checkmark: valid_password }">
               <svg width="50%" height="50%" viewBox="0 0 140 100">
                   <path class="checkmark" v-bind:class="{ checked: valid_password }" d="M10,50 l25,40 l95,-70" />
               </svg>
           </div>
              
           <input v-if="editPass" type="password" @input="checkPassword" v-model="oldpass" autocomplete="off" placeholder="Eski Şifre" />
           <input type="password" @input="checkPassword" v-model="password" autocomplete="off" placeholder="Password" />
           <input type="password" @input="checkPassword" v-model="password_two" autocomplete="off" placeholder="Password 2" />
            <button @click="sendPassword" class="btn btn-sm btn-succes">Kaydet <i class="fas fa-key"></i></button>
       </div>
   </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            password: null,
            oldpass:'',
            password_length: 0,
            contains_eight_characters: false,
            contains_twenty_characters:true,
            contains_number: false,
            contains_uppercase: false,
            contains_special_character: false,
            valid_password: false,
            password_control: false,
            password_two: null
        }
    },
    methods: {
        checkPassword() {
           
            this.password_length = this.password.length;
            // eslint-disable-next-line no-useless-escape
            const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

            if (this.password_length > 8) {
                this.contains_eight_characters = true;
            } else {
                this.contains_eight_characters = false;
            }
               if (this.password_length > 20) {
                this.contains_twenty_characters = false;
            } else {
                this.contains_twenty_characters = true;
            }

            this.contains_number = /\d/.test(this.password);
            this.contains_uppercase = /[A-Z]/.test(this.password);
            this.contains_special_character = format.test(this.password);
            if (this.password == this.password_two) {
                this.password_control = true
            } else {
                this.password_control = false
            }

            if (this.contains_eight_characters === true &&
                this.contains_twenty_characters === true &&
                this.contains_special_character === true &&
                this.contains_uppercase === true &&
                this.contains_number === true && this.password_control ===true) {
                this.valid_password = true;
            } else {
                this.valid_password = false;
            }

        },
        sendPassword(){
            if(this.valid_password ===true){
               this.$store.commit('setPassword',this.password) 
               this.$store.commit('setOldPass',this.oldpass)
            } else {
                alert('Şifre işlemleri hatalı.')
            }
        }
    },
    computed:{
        ...mapGetters({
            editPass:"editPass"
        })
    }
}
</script>
<style lang="less" scoped>
@btntextcolor:#eee;
  .form-container{
  border: 0.05rem solid @btntextcolor;
  display: inline-block;
  width: 35%;
  padding: 1rem;
  }

ul {
	padding-left: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

li { 
	margin-bottom: 8px;
	color: #525f7f;
	position: relative;
}

li:before {
  content: "";
	width: 0%; height: 2px;
	background: #2ecc71;
	position: absolute;
	left: 0; top: 50%;
	display: block;
	transition: all .6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Password Input --------- */

.input_container {
	position: relative;
	padding: 30px;
	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	border-radius: 6px;
}

input[type="password"] {
	line-height: 1.5;
	display: block;
	color: rgba(136, 152, 170, 1);
	font-weight: 300;
	width: 100%;
	height: calc(2.75rem + 2px);
	padding: .625rem .75rem;
	border-radius: .25rem;
	background-color: #fff;
	transition: border-color .4s ease;
	border: 1px solid #cad1d7;
	outline: 0;
}

input[type="password"]:focus {
	border-color: rgba(50, 151, 211, .45);
}


/* Checkmark & Strikethrough --------- */

.is_valid { color: rgba(136, 152, 170, 0.8); }
.is_valid:before { width: 100%; }

.checkmark_container {
	border-radius: 50%;
	position: absolute;
	top: -15px; right: -15px;
	background: #2ecc71;
	width: 50px; height: 50px;
	visibility: hidden;
	opacity: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity .4s ease;
}

.show_checkmark {
  visibility: visible;
  opacity: 1;
}

.checkmark {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: white;
  stroke-width: 15;
  stroke-linecap: round;
  stroke-dasharray: 180;
  stroke-dashoffset: 180;
}

.checked { animation: draw 0.5s ease forwards; }

@keyframes draw {
  to { stroke-dashoffset: 0; }
}
</style>