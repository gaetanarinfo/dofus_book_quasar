<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar class="glossy" style="background-color: #C64F10 !important;">
        <q-btn
          flat
          dense
          round
          icon="home"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          v-if="leftDrawerOpen === false"
        >
          <q-tooltip anchor="bottom middle" self="center middle">Ouvrir</q-tooltip>
        </q-btn>

        <q-btn
          flat
          dense
          round
          icon="fas fa-times"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          v-if="leftDrawerOpen === true"
        >
          <q-tooltip anchor="bottom middle" self="center middle">Fermer</q-tooltip>
        </q-btn>

        <q-toolbar-title
          style="font-family: 'bebas';font-size: 23px;color: #d8ffe9;font-weight: 600;letter-spacing: 4px;padding: 7px 0px 0px 7px;"
        >Dofus Book</q-toolbar-title>

        <div class="q-gutter-md row desktop-only">
          <q-btn glossy color="light-green-8" label="Le jeu">
            <q-menu transition-show="flip-right" transition-hide="flip-left">
              <q-list
                style="min-width: 100px; background-color: #ffffffb5;font-weight: 400;letter-spacing: 0.5px;"
              >
                <div style="display: block">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    clickable
                    to="/download"
                  >
                    <q-avatar>
                      <img src="images/dofus/12746.w40h40.png" style="width: 40px;height: auto;" />
                    </q-avatar>

                    <q-item-section
                      style="display: inline-block;margin-left: 8px;"
                    >Télécharger le jeu</q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div style="display: block">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    tag="a"
                    href="https://www.dofus.com/fr/mmorpg/jouer"
                    target="_blank"
                  >
                    <q-avatar>
                      <img src="images/dofus/12769.w40h40.png" style="width: 40px;height: auto;" />
                    </q-avatar>

                    <q-item-section
                      style="display: inline-block;margin-left: 8px;"
                    >Créez votre compte officiel</q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div style="display: block">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    tag="a"
                    href="https://www.dofus.com/fr/mmorpg/communaute/parrainage"
                    target="_blank"
                  >
                    <q-avatar>
                      <img src="images/dofus/12764.w40h40.png" style="width: 40px;height: auto;" />
                    </q-avatar>

                    <q-item-section
                      style="display: inline-block;margin-left: 8px;"
                    >Avantages parrainage</q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div style="display: block">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    tag="a"
                    href="https://www.dofus.com/fr/mmorpg/communaute/codes"
                    target="_blank"
                  >
                    <q-avatar>
                      <img src="images/dofus/12023.w40h40.png" style="width: 40px;height: auto;" />
                    </q-avatar>

                    <q-item-section style="display: inline-block;margin-left: 8px;">Code Cadeau</q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div style="display: block">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    clickable
                    to="/encyclopedie"
                  >
                    <q-avatar>
                      <img src="images/dofus/126025.w40h40.png" style="width: 40px;height: auto;" />
                    </q-avatar>

                    <q-item-section style="display: inline-block;margin-left: 8px;">Encyclopédie</q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div style="display: block">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    tag="a"
                    href="https://www.dofus.com/fr/mmorpg/communaute/annuaires/pages-persos"
                    target="_blank"
                  >
                    <q-avatar>
                      <img src="images/dofus/12141.w40h40.png" style="width: 40px;height: auto;" />
                    </q-avatar>

                    <q-item-section style="display: inline-block;margin-left: 8px;">Annuaires</q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div style="display: block">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    tag="a"
                    href="https://www.dofus.com/fr/mmorpg/communaute/ladder"
                    target="_blank"
                  >
                    <q-avatar>
                      <img src="images/dofus/12743.w40h40.png" style="width: 40px;height: auto;" />
                    </q-avatar>

                    <q-item-section style="display: inline-block;margin-left: 8px;">Ladders</q-item-section>
                  </q-item>
                </div>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn glossy color="light-green-8" label="Transmédia">
            <q-menu transition-show="flip-right" transition-hide="flip-left">
              <q-list
                style="min-width: 100px; background-color: #ffffffb5;font-weight: 400;letter-spacing: 0.5px;"
              >
                <div style="display: block">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    tag="a"
                    href="https://www.ankama-shop.com/"
                    target="_blank"
                  >
                    <q-avatar>
                      <img src="images/dofus/16362.w40h40.png" style="width: 40px;height: auto;" />
                    </q-avatar>

                    <q-item-section
                      style="display: inline-block;margin-left: 8px;"
                    >Acheter des produits dérivés</q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div style="display: block;">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    tag="a"
                    href="https://www.ankama.com/fr/editions"
                    target="_blank"
                  >
                    <q-avatar>
                      <img src="images/dofus/17330.w40h40.png" style="width: 40px;height: auto;" />
                    </q-avatar>

                    <q-item-section style="display: inline-block;margin-left: 8px;">Editions</q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div style="display: block;">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    tag="a"
                    href="https://www.ankama.com/fr/games"
                    target="_blank"
                  >
                    <q-avatar>
                      <img src="images/dofus/9313.w40h40.png" style="width: 40px; height: auto;" />
                    </q-avatar>

                    <q-item-section style="display: inline-block;margin-left: 8px;">Jeux videos</q-item-section>
                  </q-item>
                </div>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn glossy color="light-green-8" label="Actualités officiel">
            <q-menu transition-show="flip-right" transition-hide="flip-left">
              <q-list
                style="min-width: 100px; background-color: #ffffffb5;font-weight: 400;letter-spacing: 0.5px;"
              >
                <div style="display: block">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    tag="a"
                    href="https://www.dofus.com/fr#pandala-details"
                    target="_blank"
                  >
                    <q-avatar>
                      <img src="images/dofus/23004.w40h40.png" style="width: 40px;height: auto;" />
                    </q-avatar>

                    <q-item-section
                      style="display: inline-block;margin-left: 8px;"
                    >Découvrir la dernière mise à jour</q-item-section>
                  </q-item>
                </div>

                <q-separator />

                <div style="display: block">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    clickable
                    to="/news"
                  >
                    <q-avatar>
                      <img src="images/dofus/23023.w40h40.png" style="width: 40px;height: auto;" />
                    </q-avatar>

                    <q-item-section style="display: inline-block;margin-left: 8px;">Toutes les news</q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div style="display: block">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    clickable
                  >
                    <q-avatar>
                      <img src="images/dofus/23024.w40h40.png" style="width: 40px;height: auto;" />
                    </q-avatar>

                    <q-item-section
                      style="display: inline-block;margin-left: 8px;"
                    >Tous les devblogs</q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div style="display: block">
                  <q-item
                    style="display: inline-block;margin: 0 0 0 0;width: 100% !important;"
                    clickable
                  >
                    <q-avatar>
                      <img src="images/dofus/23002.w40h40.png" style="width: 40px;height: auto;" />
                    </q-avatar>

                    <q-item-section
                      style="display: inline-block;margin-left: 8px;"
                    >Toutes les mises à jour (changelog)</q-item-section>
                  </q-item>
                </div>
              </q-list>
            </q-menu>
          </q-btn>
        </div>

        <q-toolbar
          class="q-toolbar row no-wrap items-center col-md-1 col-xs-1 col-lg-1 text-white glossy bar-mobile2"
          style="background-color: rgb(198, 79, 16) !important;align-items: center;place-content: center;width: 4.3333%;margin-right: 0;"
        >
          <q-btn
            flat
            round
            dense
            @click="$q.fullscreen.toggle()"
            :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          >
            <q-tooltip anchor="bottom middle" self="center middle">Plein écran</q-tooltip>
          </q-btn>
        </q-toolbar>

        <q-toolbar
          class="q-toolbar row no-wrap items-center col-md-1 col-xs-1 col-lg-1 text-white glossy bar-mobile"
          style="background-color: rgb(198, 79, 16) !important;align-items: center;place-content: center;width: 4.3333%;margin-right: 0;"
        >
          <q-btn flat round dense icon="favorite" @click="rating('top')">
            <q-tooltip anchor="bottom middle" self="center middle">Voté pour Dofus book</q-tooltip>
          </q-btn>
        </q-toolbar>

        <q-toolbar
          class="q-toolbar row no-wrap items-center col-md-1 col-xs-1 col-lg-1 text-white glossy"
          style="background-color: rgb(198, 79, 16) !important;align-items: center;place-content: center;width: 4.3333%;margin-right: 0px;"
        >
          <q-btn flat round dense icon="play_circle_filled" @click="open('bottom')">
            <q-tooltip anchor="bottom middle" self="center middle">Lire la musique</q-tooltip>
          </q-btn>
        </q-toolbar>

        <q-btn
          v-if="loggedIn === true"
          dense
          color="green-9"
          round
          icon="email"
          class="q-ml-md"
          to="/profil_mailbox"
        >
          <q-badge color="deep-purple-9" floating>{{ listNotif }}</q-badge>
          <q-tooltip anchor="bottom middle" self="center middle">Boîte de réception</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      content-class="text-white"
      content-style="background: rgb(62 59 58 / 39%) !important;"
      elevated
    >
      <div class="q-pt-sm q-pb-sm q-ml-auto q-mr-auto text-center">
        <q-img
          src="https://i.pinimg.com/originals/d8/4e/71/d84e71dfa4d1feae395eafa99aadad28.png"
          style="width: 76%;"
        ></q-img>
      </div>

      <q-list>
        <q-separator />

        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" color="blue" />
          </q-item-section>

          <q-item-section content-class="text-white" avatar>Accueil</q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple to="/news">
          <q-item-section avatar>
            <q-icon name="article" color="orange" />
          </q-item-section>

          <q-item-section avatar>Actus & Dev</q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple to="/download">
          <q-item-section avatar>
            <q-icon name="games" color="yellow" />
          </q-item-section>

          <q-item-section avatar>Télécharger Dofus</q-item-section>
        </q-item>

        <q-item v-if="loggedIn === false" clickable v-ripple to="/login">
          <q-item-section avatar>
            <q-icon name="login" color="green-8" />
          </q-item-section>

          <q-item-section>Se Connecter</q-item-section>
        </q-item>

        <q-separator v-if="loggedIn === false" />

        <q-item v-if="loggedIn === false" clickable v-ripple to="/register">
          <q-item-section avatar>
            <q-icon name="account_box" color="blue" />
          </q-item-section>

          <q-item-section>Crée un compte</q-item-section>
        </q-item>

        <q-separator v-if="loggedIn === true" />

        <q-item v-if="loggedIn === true" clickable v-ripple :to="`/profil`">
          <q-item-section avatar>
            <q-icon name="account_box" color="green" />
          </q-item-section>

          <q-item-section>Mon profil</q-item-section>
        </q-item>

        <q-separator v-if="loggedIn === true" />

        <q-item v-if="adminIn === true" clickable v-ripple @click="showModalCreateNews()">
          <q-item-section avatar>
            <q-icon name="add" color="green-8" />
          </q-item-section>

          <q-item-section>Crée un article</q-item-section>
        </q-item>

        <q-separator v-if="loggedIn === true" />

         <q-item v-if="adminIn === true" clickable v-ripple @click="showModalCreateImage()">
            <q-item-section avatar>
              <q-icon name="add" color="green-8" />
            </q-item-section>

            <q-item-section>Ajouter une image</q-item-section>
          </q-item>

        <q-separator v-if="loggedIn === true" />

        <q-item v-if="loggedIn === true" clickable v-ripple @click="logout()">
          <q-item-section avatar>
            <q-icon name="logout" color="red" />
          </q-item-section>

          <q-item-section>Déconnexion</q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple to="/contact">
          <q-item-section avatar>
            <q-icon name="alternate_email" color="orange-10" />
          </q-item-section>

          <q-item-section>Contactez-moi</q-item-section>
        </q-item>

        <q-separator />

        <div class="q-pt-sm q-pb-sm q-ml-auto q-mr-auto text-center">
          <q-btn
            class="glossy"
            color="brown-9"
            push
            type="a"
            href="http://dofus-book.fr/apps/Dofus_Book_linux_x64.tar.gz"
            target="_blank"
          >
            <div class="row items-center no-wrap">
              <q-icon left name="fab fa-linux" />
              <div class="text-center">Dofus Book</div>
            </div>
          </q-btn>
        </div>

        <q-separator />

        <div class="q-pt-sm q-pb-sm q-ml-auto q-mr-auto text-center">
          <q-btn
            class="glossy text-blue-8"
            color="yellow-5"
            push
            type="a"
            href="http://dofus-book.fr/apps/extension/chrome/dofus_book.crx"
            target="_blank"
          >
            <div class="row items-center no-wrap">
              <q-icon left name="fab fa-chrome" />
              <div class="text-center">Dofus Book</div>
            </div>
          </q-btn>
        </div>

        <q-separator />

        <div class="q-pt-sm q-pb-sm q-ml-auto q-mr-auto text-center">
          <q-btn
            class="glossy"
            color="pink-5"
            push
            type="a"
            href="http://dofus-book.fr/apps/dofus-book.apk"
            target="_blank"
          >
            <div class="row items-center no-wrap">
              <q-icon left name="android" />
              <div class="text-center">Dofus Book</div>
            </div>
          </q-btn>
        </div>

        <q-separator />

        <div class="q-pt-sm q-pb-sm q-ml-auto q-mr-auto text-center">
          <q-btn class="glossy" color="green-10" push @click="showModalAlmanax()">
            <div class="row items-center no-wrap">
              <q-icon left name="card_giftcard" />
              <div class="text-center">Almanax</div>
            </div>
          </q-btn>
        </div>

        <q-separator />

        <div class="q-pt-sm q-pb-sm q-ml-auto q-mr-auto text-center">
          <q-btn
            class="glossy"
            color="blue-6"
            push
            type="a"
            href="https://discord.com/oauth2/authorize?client_id=804766726079774780&permissions=0&scope=bot"
            target="_blank"
          >
            <div class="row items-center no-wrap">
              <q-icon left name="sick" />
              <div class="text-center">Bot discord</div>
            </div>
          </q-btn>
        </div>

        <q-separator />

        <div class="q-pt-sm q-pb-sm q-ml-auto q-mr-auto text-center">
          <q-btn
            glossy
            color="yellow-10"
            push
            clickable
            type="a"
            href="https://www.dofus.com/fr/achat-kamas"
            target="_blank"
          >
            <div class="row items-center no-wrap">
              <q-icon left name="shopping_cart" />
              <div class="text-center">Acheter des kamas</div>
            </div>
          </q-btn>
        </div>

        <q-separator />

        <div class="q-pt-sm q-pb-sm q-ml-auto q-mr-auto text-center">
          <q-btn
            glossy
            color="brown-8"
            clickable
            push
            type="a"
            href="https://www.dofus.com/fr/forum"
            target="_blank"
          >
            <div class="row items-center no-wrap">
              <q-icon left name="forum" />
              <div class="text-center">Forums</div>
            </div>
          </q-btn>
        </div>

        <q-separator />

        <div class="q-pt-sm q-pb-sm q-ml-auto q-mr-auto text-center">
          <q-btn
            glossy
            color="purple-8"
            clickable
            push
            type="a"
            href="https://www.dofus.com/fr/boutique"
            target="_blank"
          >
            <div class="row items-center no-wrap">
              <q-icon left name="shopping_cart" />
              <div class="text-center">Boutique</div>
            </div>
          </q-btn>
        </div>

        <q-separator />
      </q-list>
    </q-drawer>

     <!-- Modal Create Image -->
    <modalCreateImage
      v-if="adminIn === true || modalCreateImage"
      :modalCreateImage.sync="modalCreateImage"
      @closeModalCreateImage="closeModalCreateImage()"
    />
    <!-- / Modal Create Image -->

    <!-- Modal Create News -->
    <modalCreateNews
      v-if="adminIn === true || modalCreateNews"
      :modal2.sync="modalCreateNews"
      @closeModalCreateNews="closeModal2()"
    />
    <!-- / Modal Create News -->

    <!-- Modal Almanax -->
    <modalAlmanax
      v-if="modalAlmanax"
      :modal5.sync="modalAlmanax"
      @closeModalAlmanax="closeModal5()"
    />
    <!-- / Modal Almanax -->

    <!-- Audio -->
    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="dialog" :position="position">
        <q-card style="width: 450px; background: #31303096;">
          <q-linear-progress :value="1.0" color="blue" />

          <q-card-section class="row items-center no-wrap">
            <div style="width: 100%;background: transparent;">
              <q-media-player
                type="audio"
                :autoplay="true"
                style="background: transparent;"
                background-color="transparent"
                :tracks="tracks"
                no-video
                :sources="sources"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
    <!-- Audio / -->

    <!-- Rating -->
    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="ratingDialog" :position="position">
        <q-card style="width: 450px; background: #31303096;">
          <q-linear-progress :value="1.0" color="green" />

          <div
            class="text-h5 text-white"
            style="padding: 10px 10px 0 10px;text-align: center;"
          >Tu aime ? Alors vote pour Dofus-Book.</div>

          <q-card-section class="row items-center no-wrap" style="text-align: center;">
            <div style="width: 100%;background: transparent;">
              <q-rating
                v-model="ratingModel"
                name="ratingValue"
                max="5"
                size="3em"
                color="red"
                color-selected="red-9"
                icon="favorite_border"
                icon-selected="favorite"
                icon-half="favorite"
                no-dimming
                @input="ratings()"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
    <!-- Rating / -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import modalCreateNews from "../components/modal/admin/modalCreateNews.vue";
import modalCreateImage from "../components/modal/admin/modalCreateImage.vue";
import modalAlmanax from "../components/modal/modalAlmanax.vue";
import { mapState, mapActions } from "vuex";
import { log } from "util";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      userId: "",
      userPseudo: "",
      modalCreateImage: false,
      dialog: false,
      ratingDialog: false,
      modalCreateNews: false,
      modalAlmanax: false,
      leftDrawerOpen: false,
      ratingModel: 0,
      position: "bottom",
      tracks: [
        {
          kind: "subtitles",
          srclang: "fr",
          label: "Français"
        }
      ],
      sources: [
        {
          src: "http://dofus-book.fr/music/dofus-retro.mp3",
          type: "music/mp3"
        }
      ]
    };
  },
  methods: {
    ratings() {
      this.$q.loading.show({
        spinnerColor: "green",
        spinnerSize: 100
      });

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        fetch("https://api64.ipify.org?format=json")
          .then(x => x.json())
          .then(({ ip }) => {
            const dataRating = [
              {
                ratingNumber: this.ratingModel.valueOf(),
                ip: ip
              }
            ];
            this.postRating(dataRating);
          });
        this.timer = void 0;
      }, 1500);
    },
    beforeDestroy() {
      if (this.timer !== void 0) {
        clearTimeout(this.timer);
        this.$q.loading.hide();
      }
    },
    ...mapActions("general", ["postRating"]),
    mountedData() {
      this.userId = this.listUser._id;
    },
    open(position: any) {
      this.position = position;
      this.dialog = true;
    },
    rating(position: any) {
      this.position = position;
      this.ratingDialog = true;
    },
    checkNotif() {
      this.userPseudo = this.listUser.pseudo;
      this.getMailNotif(this.listUser._id);
      setTimeout(this.checkNotif, 500);
    },
    checkRating() {
      this.getRating();

      if (this.listRatings === null) {
      } else {
        this.ratingModel = this.listRatings;
      }

      setTimeout(this.checkRating, 500);
    },
    ...mapActions("auth", ["getMailNotif"]),
    ...mapActions("general", ["getRating"]),
    logout() {
      this.logoutUser(this.userPseudo);
    },
    ...mapActions("auth", ["logoutUser"]),
    showModalCreateNews() {
      this.modalCreateNews = true;
    },
    closeModal2() {
      this.modalCreateNews = false;
    },
    showModalAlmanax() {
      this.modalAlmanax = true;
    },
    closeModal5() {
      this.modalAlmanax = false;
    },
    showModalCreateImage() {
      this.modalCreateImage = true;
    },
    closeModalCreateImage() {
      this.modalCreateImage = false;
    },
  },
  components: { modalCreateNews, modalAlmanax, modalCreateImage },
  computed: {
    ...mapState("auth", ["loggedIn"]),
    ...mapState("auth", ["adminIn"]),
    ...mapState("auth", ["listNotif"]),
    ...mapState("general", ["listRatings"]),
    ...mapState("auth", ["listUser"])
  },
  setup() {},
  mounted() {
    this.checkNotif();
    this.checkRating();
    this.mountedData();
  }
});
</script>
