<template>
  <div class="q-pa-md q-gutter-sm">

      <q-dialog v-model="modal2" persistent>
      <q-card style="background: #535658bf !important; color: white; width: 700px; max-width: 80vw;">
        <q-toolbar>
          <q-avatar>
            <img src='https://styles.redditmedia.com/t5_2sl1e/styles/communityIcon_w2pemjj4a7b21.png?width=256&s=2388bd09a659c346fce7c8d5eb82143a1ebf4a72'>
          </q-avatar>

          <q-toolbar-title><span class="text-weight-bold">Crée un article</span></q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup @click="$emit('closeModalCreateNews')">
            <q-tooltip anchor="top middle" self="center middle">
               Fermer
                </q-tooltip>
          </q-btn>    
 
        </q-toolbar>

        <q-card-section>
           <q-form
           style="margin-top : 0px !important; background-color: #acb5aec7;"
      @submit="send"
      @reset="onReset"
    >
        <q-input
        style="padding: 16px 0 16px 0;"
            filled
            req
            v-model="form.title"
            label="Titre de l'article *"
            hint="Titre de l'article"
            lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter un titre']"
        />

    <q-file
    style="margin: 16px 0 16px 0;"
        type="file"
        v-model="form.files"
        label="Image de l'article"
        hint="Image de l'article"
        filled
        counter
        :counter-label="counterLabelImage"
        max-files="1"
        multiple
        @change="uploadFile"
        lazy-rules :rules="[ val => val && val.length > 0 || 'Merci de choisir une image']"
      >
        <template v-slot:prepend>
          <q-icon name="image" />
        </template>
      </q-file>

    <q-input
     style="margin: 16px 0 0 0;"
      v-model="form.content"
      filled
      label="Description de l'article *"
     hint="Description de l'article"
      type="textarea"
      lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter une description']"
    />

    <q-input
    style="margin: 16px 0 16px 0;"
      v-model="form.url"
      filled
      label="Url de l'article *"
     hint="Url de l'article"
     lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter un url']"
    />

     <q-select
     filled
        v-model="form.cat"
        :options="form.optionsCat"
        label="Catégorie"
         hint="Catégorie"
        color="orange"
        clearable
        options-selected-class="grey-9"
        lazy-rules :rules="[ val => val && val.length > 0 || 'Merci de choisir une catégorie']"
     >
        <template v-slot:option="scope">
          <q-item
          style="background: #ffffffcc !important;"
            v-bind="scope.itemProps"
            v-on="scope.itemEvents"
          >
            
            <q-item-section>
              <q-item-label v-html="scope.opt.label"></q-item-label>
            </q-item-section>

             <q-item-section avatar>
              <q-icon :name="scope.opt.icon"></q-icon>
            </q-item-section>

          </q-item>
        </template>
      </q-select>

      <q-select
      style="margin: 16px 0 0 0;"
        filled
        v-model="form.categorie"
        :options="form.optionsCategorie"
        label="Image Catégorie"
         hint="Image Catégorie"
        color="orange"
        clearable
        options-selected-class="grey-9"
        lazy-rules :rules="[ val => val && val.length > 0 || 'Merci de choisir une image de catégorie']"
      >
        <template v-slot:option="scope">
          <q-item
          style="background: #ffffffcc !important;"
            v-bind="scope.itemProps"
            v-on="scope.itemEvents"
          >
            
            <q-item-section>
              <q-item-label v-html="scope.opt.label"></q-item-label>
              <q-item-label caption>{{ scope.opt.description }}</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-icon :name="scope.opt.icon"></q-icon>
            </q-item-section>
          </q-item>
        </template>
      </q-select>

        <div style="padding: 16px 0 0 0;">
            <q-btn color="green-8" type="submit" glossy label="Valider"/>
            <q-btn label="Effacer" type="reset" color="yellow-10" glossy class="q-ml-sm" />
        </div>

    </q-form>
        </q-card-section>

      </q-card>
    </q-dialog>

  </div>
</template>

<script>

import { mapActions } from 'vuex'
import axios from "axios";
import { log } from 'util'

export default {
    data() {
        return {
            form : {
                title : "",
                content : "",
                url : "",
                cat : "",
                files: null,
                optionsCat: [
                {
                  label: 'Event',
                  value: 'Event',
                  icon: 'api'
                },
                {
                  label: 'Shop',
                  value: 'Shop',
                  icon: 'api'
                },
                {
                  label: 'Info',
                  value: 'Info',
                  icon: 'api'
                },
                {
                  label: 'Communauté',
                  value: 'Communauté',
                  icon: 'api'
                }
              ],
                category : null,
                optionsCategorie: [
                {
                  label: 'Event',
                  value: 'https://gaetan.store/images/dofus/news/cat/419540.png',
                  description: 'Event',
                  icon: 'api'
                },
                {
                  label: 'Shop',
                  value: 'https://gaetan.store/images/dofus/news/cat/419540.png',
                  description: 'Shop',
                  icon: 'api'
                },
                {
                  label: 'Info',
                  value: 'https://gaetan.store/images/dofus/news/cat/419540.png',
                  description: 'Info',
                  icon: 'api'
                },
                {
                  label: 'Communauté',
                  value: 'https://gaetan.store/images/dofus/news/cat/420041.png',
                  description: 'Communauté',
                  icon: 'api'
                }
              ]
            }
        }
    },
  components: {

  },
  methods: {
       counterLabelImage ({ totalSize, filesNumber, maxFiles }) {
            return `${filesNumber} fichier sur ${maxFiles} | ${totalSize}`
        },
      uploadFile (event) {
        this.files = event.target.files
        },
      send() { 

        this.postNews(this.form)
       
    },
    onReset () {
      this.files = null
      this.title = "",
      this.content = "",
      this.url = "",
      this.cat = "",
      this.category = ""
    },
    ...mapActions('news', ['postNews']),
  },
  props: {
    modal2: {
      default: false
    }
  }
}
</script>