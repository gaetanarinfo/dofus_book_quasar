<template>
  <div class="row">
    <div class="col-12 col-md-12 col-xs-12">

        <div class="absolute-center bg-transparent form-mobile">

      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg"
        style="padding : 0px"
      >
        <q-tab class="text-blue" name="Profil" label="Profil" />
        <q-tab class="text-orange" name="Avatar" label="Avatar" />
      </q-tabs>

      <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
          class="text-white text-center"
          style="background-color: transparent"
        >
   
    <q-tab-panel name="Profil">

        <q-form
        transition="flip-right"
      @submit="edit"
      @reset="onReset"
    >

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white" style="padding: 20px 0px 12px;">Modifier mon profil</div>

      <q-input
      bg-color="grey-2"
      style="padding: 0 0 10px 0;"
        filled
        v-model="formEdit.lastname"
        label="Nom *"
        hint="Nom"
      />

      <q-input
      bg-color="grey-2"
      style="padding: 16px 0 10px 0;"
        filled
        v-model="formEdit.firstname"
        label="Prénom *"
        hint="Prénom"
      />

      <q-input
      bg-color="grey-2"
      style="padding: 16px 0 10px 0;"
        filled
        v-model="formEdit.pseudo"
        label="Pseudo *"
        hint="Pseudo"
      />

      <q-input
      bg-color="grey-2"
      style="padding: 16px 0px 35px;"
        filled
        v-model="formEdit.email"
        label="Email *"
        hint="Email"
      />

     <div>
        <q-btn color="deep-orange" type="submit" glossy label="Valider"/>
        <q-btn label="Effacer" type="reset" color="red" glossy class="q-ml-sm" />
      </div>

    </q-form>

    </q-tab-panel>

    <q-tab-panel name="Avatar">

    <div transition="flip-right" class="col-sm-9 col-12 text-h4 font-bebas text-center text-white" style="padding: 20px 0 10px 0px;">Modifier mon avatar</div>

      <q-uploader
      :url="userIdAvatar"
      :headers="[{name: 'X-Custom-Timestamp', value: 1550240306080}]"
      multiple
      max-files="1"
      accept=".jpg, .png, .gif, .jpeg, image/*"
      @rejected="onRejected"
      color="blue-10"
      class="q-ml-auto q-mr-auto text-center q-upload-mobile"
      label="Avatar de ton profil"
    />

    </q-tab-panel>

    </q-tab-panels>

    </div>

    </div>
  </div>
</template>

<style lang="css">
.bg-grey-2 {
    background: #f5f5f55e !important
}
</style>

<script>

import { mapActions, mapState, mapGetters } from 'vuex'
import { log } from 'util'

export default {
    name: 'edit',
    data () {
    return {
      tab: 'Profil',
      userIdAvatar: `http://127.0.0.1:8000/profil_edit_avatar/${this.$route.params.id}`,
      formEdit: {
        userId: '',
        pseudo: '',
        lastname: '',
        firstname: '',
        email: '',
      },
      userData: {
          avatar: ''
      }
      
    }
  },
    methods: { 
      mountedData () {

      this.formEdit.pseudo = this.setListUser.pseudo
      this.formEdit.lastname = this.setListUser.lastname
      this.formEdit.firstname = this.setListUser.firstname
      this.formEdit.email = this.setListUser.email
      this.userData.avatar = this.setListUser.avatar
      this.formEdit.userId = this.setListUser._id

    },
    onRejected (rejectedEntries) {
      this.$q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: `Le fichier ne respectant pas nos conditions ! Il doit être en JPG, PNG, GIF, JPEG !`
      })
    },
    edit() {

      this.editUser(this.formEdit)
       
    },
    onReset () {
      this.email = null
      this.lastname = null
      this.firstname = null
      this.pseudo = null
      this.accept = false
    },
    ...mapActions('auth', ['editUser']),
    ...mapActions('auth', ['editAvatars']),
    checkAuth () {
      this.loggedDataUser()
       this.mountedData();
      setTimeout(this.checkAuth, 1500)
    },
    ...mapActions('auth', ['loggedDataUser'])
  },
  computed: {
    ...mapGetters("auth", ["setListUser"])
  },
  mounted () {
    this.checkAuth()
    this.mountedData() 
  }
}
</script>