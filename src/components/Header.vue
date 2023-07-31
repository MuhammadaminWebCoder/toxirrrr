<script>
export default {
  data() {
    return {
      hasToken: false
    }
  },
  created() {
      this.checkToken();
  },
  methods: {
    checkToken() {
      const token = window.localStorage.getItem('token');
      this.hasToken = token !== null;
    },
    remove(){
      window.localStorage.removeItem('token');
      setTimeout(() => {
            location.reload();
      }, 300);
    }
  }
}
</script>
<template>
      <div class="navbar pt-0 shadow" :class="{opacity: $route.path == '/shop'}">
            <div class="p-0 container">
            <div class="d-flex w-100 align-items-center justify-content-between">
                  <a href="#" class="kiwi w-26 align-items-center d-flex link">
                        <div class="rounded-circle d-flex align-items-center justify-content-center
                        nav-logo">
                        <img src="/icons/kivi (1).svg" alt="">
                        </div>
                        <div class="p-2 w-75">
                              <span class="fw-bold w-100 d-block">Продай, найди, купи все что пожелаешь…</span>
                        </div>      
                  </a>
                  <ul class="d-flex w-51 mb-0 justify-content-between">
                        <li class="nav-item"><router-link to="/productadd" class="link fw-400" href="#">obyavleniya</router-link></li>
                        <li class="nav-item"><a class="link fw-400" href="#">obyavleniya</a></li>
                        <li class="nav-item"><a class="link fw-400" href="#">obyavleniya</a></li>
                        <li class="nav-item"><a class="link fw-400" href="#">obyavleniya</a></li>
                  </ul>
                  <div class="language-register justify-content-between ps-5 w-26 d-flex">
                        <div class="d-flex ms-5 align-items-center"><span>uzb</span><div class="mx-3 hr"></div><span>rus</span> </div>
                        <div v-if="!hasToken" class="d-flex align-items-center fw-400"><span class="sil-col"><router-link to="/login">Vhod</router-link></span><div class="mx-4 hr bg-col"></div><span><router-link to="/">Register</router-link></span></div>
                        <div v-if="hasToken">
                              <div @click="remove()" class="avatar rounded-circle bg-light">
                        </div>
                        </div>
                  </div>
            </div>
            <div v-if="$route.path == '/changecategory' || $route.path == '/login' || $route.path == '/shop' || $route.path == '/productPlus' || $route.path == '/seecategory'" class="nav w-100 my-2 d-flex justify-content-between">
                  <div class="kategory-serch w-78 d-flex br-5">
                               
                        <div class="bg-succes px-5 h-5">nayti</div>
                  </div>
                  <div class="plus-category w-22 bg-succes pe-5 d-flex align-items-center">
                        <div class="rounded-circle bg-success avatar">
                              <i class="fas fa-plus"></i>
                        </div>
                        <div class="text bg-succes ms-5">Добавить обьявления</div>
                  </div>
            </div>
            <div v-if="$route.path == '/changecategory'" style="display: flex;" class="nav w-100 my-2 justify-content-between">
            
            </div>
      </div>
      </div>
</template>

<style scoped>

</style>