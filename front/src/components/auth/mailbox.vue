<template>
  <div class="row">
    <div class="col-12 col-md-12 col-xs-12">

    <div class="absolute-center bg-transparent form-mobile">


  <div class="q-pa-md">
    <q-markup-table style="background: #08080857 important!;">
      <thead>
          <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
              <div class="text-h4 text-white">Boîte de reception</div>
            </div>
          </th>
        </tr>
        <tr class="text-white">
          <th class="text-center">Pseudo</th>
          <th class="text-center">Nom</th>
          <th class="text-center">Prénom</th>
          <th class="text-center">Sujet</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-white" v-for="mail in listMail" :key="mail.id">
          <td class="text-center">{{ mail.author }}</td>
          <td class="text-center">{{ mail.lastname }}</td>
          <td class="text-center">{{ mail.firstname }}</td>
          <td class="text-center">{{ mail.sujet }}</td>
          <td class="text-center">
            
            <q-btn dense round flat color="green-5" icon="check" @click="showModalMail(mail)">
              <q-tooltip anchor="top middle" self="center middle">
               Voir le message
                </q-tooltip>
          </q-btn>
           <q-btn type="button" dense round flat color="red-10" icon="delete" @click="submitDeleteMail(mail._id)">
              <q-tooltip anchor="top middle" self="center middle">
               Supprimer le message
                </q-tooltip>
          </q-btn>
              
                </td>
        </tr>

            <!-- Modal Mail -->
          <modalMail
            v-if='modalMail'
            :modal.sync='modalMail'
            :data='mail'
            @closeModalMail='closeModal()'
          />
          <!-- / Modal Mail -->
      </tbody>
    </q-markup-table>
  </div>

    </div>

    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import modalMail from '../modal/modalMail'
import { log } from 'util'

export default {
    name: 'mailbox',
    data () {
    return {
        modalMail: false,
        mail : null,
        userData: {
          avatar: ''
      }
      }
  },
    methods: { 
       mountedData () {

      this.userData.avatar = this.listUser.avatar

    },
      showModalMail (data) {
      this.mail = data
      this.modalMail = true
    },
    closeModal () {
      this.modalMail = false
    },
      submitDeleteMail(id) {
        this.removeMailBox(id)
    },
    checkAuth () {
      this.loggedDataUser()
      setTimeout(this.checkAuth, 2500)
    },
     ...mapActions("auth", ["getProfil"]),
    ...mapActions('auth', ['loggedDataUser']),
    ...mapActions('auth', ['removeMailBox'])
  },
  components: {
    modalMail
  },
   computed: {
    ...mapState("auth", ["listUser"])
  },
     mounted () {
    this.checkAuth()
    this.mountedData() 
  },
  props: {
    listMail: Array
  }
}
</script>