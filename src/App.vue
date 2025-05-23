<script>
import FooterContent from "@/public/components/footer-content.component.vue";
import LanguageSwitcher from "@/public/components/language-switcher.component.vue";

export default {
  name: 'App',
  components: {FooterContent,LanguageSwitcher},
  data() {
    return {
      drawer: false,
      items: [
        {label: 'option.home', to: '/home'},
        {label: 'option.delivery', to: '/last-mile/deliveries/new'},
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }

}
</script>

<template>
  <pv-toast/>
  <pv-confirm-dialog/>
  <header>
    <pv-toolbar class="w-full fixed top-0 left-0 z-50 h-50">
      <template #start>
        <pv-button class="p-button-text block lg:hidden" icon="pi pi-bars" @click="toggleDrawer"/>
        <h3 class="ml-2">PayPal</h3>
      </template>
      <template #center>
        <div class="hidden lg:flex gap-3">
          <pv-button v-for="item in items"
                     :key="item.label"  >
            <router-link

                :to="item.to"
                class="text-sm font-medium text-gray-700 hover:text-black"
            >
              {{ $t(item.label) }}
            </router-link>
          </pv-button>

        </div>
      </template>
      <template #end>
        <LanguageSwitcher/>
      </template>
    </pv-toolbar>
    <pv-drawer v-model:visible="drawer" position="left" modal>
      <div class="p-4 flex flex-column gap-4">
        <pv-button v-for="item in items" :key="item.label">
          <router-link  :to="item.to" class="text-base font-semibold hover:text-black" @click="drawer = false"
          >{{ $t(item.label) }}</router-link>
        </pv-button>
      </div>
    </pv-drawer>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    <footer-content/>
  </footer>
</template>

<style scoped>
header {
  flex: 0 0 auto;
}
.p-toolbar {
  background-color: #ffffff !important;
  color: #212121 !important;
  border-bottom: 1px solid #ddd;

}

main {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 64px;
}
</style>
