<template>
      <div class="product-add">
           <div class="container mt-5 pt-5">
            <div class="d-flex">
                  <button class="btn btn-primary py-0 me-3 fs-15">Интерсное</button>
                  <button class="btn btn-primary py-0 me-3 fs-15">Топ</button>
                  <button class="btn btn-primary py-0 me-3 fs-15">Отличные предложение</button>
                  <button class="btn btn-primary py-0 me-3 fs-15">Супер цена</button>
                  <button class="btn btn-primary py-0 me-3 fs-15">г.Ташкент</button>
                  <button class="btn btn-primary py-0 me-3 fs-15">г.Термез</button>
                  <button class="btn btn-primary py-0 me-3 fs-15">г.Самарканд</button>
           </div>
           <v-app>
    <v-content>
      <v-container>
        <v-range-slider
          v-model="selectedRange"
          :min="4000"
          :max="20000000"
          :step="1000"
          thumb-label="always"
          label="Price Range"
        ></v-range-slider>
      </v-container>
      <v-select
    v-model="value"
    :items="items"
    chips
    label="Chips"
    multiple
  ></v-select>
    </v-content>
  
</v-app>
<div class="shadow pb-5">
                  <div class="container mx-auto px-3 row">
                  <div v-for="category in products" key="category.id" class="col-3">
                  <div @click="catId(category.id)" class="col-12 p-0">
                        <img class="rounded w-100" style="height: 360px;" :src="category.image">
                        <p class="fw-bold fs-17 h-80 mt-2 mb-0">{{ category.title }}</p>
                        <p class="fw-bold fs-5"></p>
                  </div>
                  </div>
                  <div :class="{add: drawer === true}" v-for="category in categories" key="category.id" class="col-3" style="display: none;">
                  <div class="col-12 p-0">
                        <img class="rounded w-100" :src="category.image">
                        <p class="fw-bold fs-17 h-80 mt-2 mb-0">{{ category.title }}</p>
                        <span class="d-block span">{{ category.day }}</span>
                        <p class="fw-bold fs-5">{{ category.price }}</p>
                  </div>
                  </div>
                  <hr>
                  <button @click="drawer = true"  :class="{'d-none': drawer === true}" class="silka text-primary text-center mb-5 pb-5">Покозать еще <i class="fal ms-2 fa-chevron-down"></i></button>
            </div>
            </div>
            <div class="container mt-5">
                  <div class="pages d-flex">
                  <div :class="{active: $route.path == '/'}" class="new-refresh span fs-5 fw-bold position-relative me-5">
                        Новые объявления
                        <span class="liner"></span>
                  </div>
                  <div :class="{active: $route.path == '/login'}"  class="hot-category span fw-bold fs-5 position-relative mx-5">
                        Лучщие предложение
                        <span class="liner"></span>
                  </div>
                  <div :class="{active: $route.path == '/login'}"  class="hot-category span fw-bold fs-5 position-relative ms-5">
                        Лучщие предложение
                        <span class="liner"></span>
                  </div>
            </div>
            <hr>

            <div class="container mx-auto px-3 row">
                  <div v-for="category in products" class="col-3">
                  <div class="col-12 p-0">
                        <img class="rounded w-100" style="height: 360px;" :src="category.image">
                        <p class="fw-bold fs-17 h-80 mt-2 mb-0">{{ category.title }}</p>
                        <span class="d-block span">{{ category.days }}</span>
                        <p class="fw-bold fs-5">{{ category.price }}</p>
                  </div>
                  </div>
                  <hr>
                  <button @click="drawer = true" class="silka text-primary text-center mb-5 pb-5">Покозать еще <i class="fal ms-2 fa-chevron-down"></i></button>
            </div>  
      </div>
           </div>
      </div>
</template>
<script>
  export default {
    data () {
      return {
            selectedRange: [40000, 20000000],
            items: ['foo', 'bar', 'fizz', 'buzz'],
      value: ['foo', 'bar', 'fizz', 'buzz'],
      products: [],
      drawer: false,
      }
    },
    async created() {
    await this.getCategory();
  },
methods: {
      catId(category){
            // this.$router.push(`/seecategory${category}`)
      },
      async getCategory() {
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();
      this.products = json;
    }
},
  }
</script>

