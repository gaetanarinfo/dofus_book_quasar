<template>
  <div class="row items-start q-gutter-md justify-center" style="margin-top: -50px;">
    <q-form
      class="q-pa-md form-mobile"
      @submit="formContact"
      @reset="onReset"
      method="post"
      style="width: 800px;"
    >
      <div
        class="col-sm-9 col-12 text-h4 font-bebas text-center text-white"
      >Envoie une demande d'assistance</div>

      <div class="col-sm-9 text-center text-white">
        <img src="images/dofus_logo.png" style="width: 279px;" />
      </div>

      <q-input
        style="padding: 16px 0 16px 0;"
        bg-color="grey-2"
        v-model="form.name"
        filled
        type="text"
        hint="Nom & Prénom valide"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Merci d\'entrer ton nom et ton prénom']"
      ></q-input>

      <q-input
        style="padding: 16px 0 16px 0;"
        bg-color="grey-2"
        v-model="form.email"
        filled
        type="email"
        hint="Email valide"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Merci d\'entrer une adresse email valide']"
      >
        <template v-slot:prepend>
          <q-icon name="mail" style="color: black !important;" />
        </template>
      </q-input>

      <q-input
        style="padding: 16px 0 16px 0;"
        bg-color="grey-2"
        v-model="form.sujet"
        filled
        type="text"
        hint="Sujet valide"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Merci d\'entrer un sujet valide']"
      ></q-input>

      <q-input
        style="padding: 16px 0 16px 0;"
        bg-color="grey-2"
        v-model="form.content"
        filled
        type="textarea"
        hint="Message valide"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Merci d\'entrer un message valide']"
      ></q-input>

      <q-toggle
        style="padding: 16px 0 16px 0;"
        v-model="form.accept"
        label="J'accepte la licence et les termes"
      />

      <div>
        <q-btn color="deep-orange" type="submit" glossy label="Valider" />
        <q-btn label="Effacer" type="reset" color="red" glossy class="q-ml-sm" />
      </div>

      <div>
        <p
          class="text-white text-center"
          style="font-size: 13px;margin: 15px 0px 0px 0px;width: 100%;letter-spacing: 1px;"
        >Dofus Book traite les données recueillies pour permettre la création, le traitement et le suivi de ta demande d’assistance. Pour en savoir plus sur la gestion de tes données et de tes droits, consulte ma Politique de confidentialité.</p>
      </div>
    </q-form>

    <q-page-scroller position="bottom-right" :scroll-offset="250" :offset="[25, 25]">
        <q-btn style="background: transparent;">
          <img src="images/dofus/little_logo.png" />
          <q-tooltip anchor="top middle" self="center middle">Remonter</q-tooltip>
        </q-btn>
     </q-page-scroller>
  </div>
</template>

<style lang="css">
.bg-grey-2 {
  background: #f5f5f55e !important;
}

@media only screen and (max-width: 600px) {
  .form-mobile {
    width: 100% !important;
  }
}
</style>

<script>
import { mapActions } from "vuex";

export default {
  name: "contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        sujet: "",
        content: "",
        accept: false
      }
    };
  },
  methods: {
    formContact() {
      if (this.form.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Tu doit d'abord accepter la licence et les conditions"
        });
      } else {
        this.contact(this.form);
      }
    },
    onReset() {
      this.form.name = null;
      this.form.email = null;
      this.form.sujet = null;
      this.form.content = null;
      this.form.accept = false;
    },
    ...mapActions("auth", ["contact"])
  },
  meta() {
    return {
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      title: "Dofus Book - Contact",
      description: {
        name: "description",
        content:
          "Plusieurs milliers de joueurs dans le monde. DOFUS est un jeu de rôle massivement multijoueur où le but est de retrouver les 6 précieux Dofus pour devenir maître d'Amakna."
      },
      keywords: {
        name: "keywords",
        content:
          "mmo, mmorpg, free mmorpg, free online mmorpg, video game, video game rental, video game system, free video game, online game, multiplayer game, free multiplayer game, dofus community, comics, pc game, pc game cheat, game, free game, online game, toy game, addicting game"
      },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    };
  }
};
</script>