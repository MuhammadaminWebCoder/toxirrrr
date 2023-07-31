<template>
      <div class="home mt-5 pt-5">
            <div class="d-flex mt-5 mb-5 justify-content-center align-items-center">
                  <i class="far me-5 rounded-circle avatar shadow d-flex align-items-center text-center fa-long-arrow-left"></i>
                  <div class="icon w-180 text-center">
                  <img class="b" src="../components/icon-res/Airplane.svg">
                  <span class="d-block mt-2">Автомобили</span>
                  </div>
                  <div class="icon w-180 text-center">
                  <img class="lb" src="../components/icon-res/Store (1).svg">
                  <span class="d-block mt-2"> Недвижимость</span>
                  </div>
                  <div class="icon w-180 text-center">
                  <img class="r" src="../components/icon-res/Terminal.svg">
                  <span class="d-block mt-2"> Электроника</span>
                  </div>
                  <div class="icon w-180 text-center">
                  <img class="y" src="../components/icon-res/Briefcase.svg">
                  <span class="d-block mt-2"> Работа</span>
                  </div>
                  <div class="icon w-180 text-center">
                  <img class="p" src="../components/icon-res/Gifts.svg">
                  <span class="d-block mt-2">Личные вещи</span>
                  </div>
                  <div class="icon w-180 text-center">
                  <img class="lb" src="../components/icon-res/Challenge.svg">
                  <span class="d-block mt-2"> Дом и Сад</span>
                  </div>
                  <div class="icon w-180 text-center">
                  <img class="b" src="../components/icon-res/In Maintenance.svg">
                  <span class="d-block mt-2">Стройка и ремонт</span>
                  </div>
                  <div class="icon w-180 text-center">
                  <img class="p" src="../components/icon-res/Gaming.svg">
                  <span class="d-block mt-2"> Хобби и Спорт</span>
                  </div>
                  <div class="icon w-180 text-center">
                  <img class="r" src="../components/icon-res/Man.svg">
                  <span class="d-block mt-2"> Бизнес и услуги</span>
                  </div>
                  <i class="far ms-5 rounded-circle avatar shadow d-flex align-items-center text-center fa-long-arrow-right"></i>
            </div>
            <div class="container">
                  <div class="pages d-flex">
                  <div :class="{active: $route.path == '/'}" class="new-refresh span fs-5 fw-bold position-relative me-5">
                        Новые объявления
                        <span class="liner"></span>
                  </div>
                  <div :class="{active: $route.path == '/login'}" class="hot-category span fw-bold fs-5 position-relative ms-5">
                        Лучщие предложение
                        <span class="liner"></span>
                  </div>
            </div>
            <hr>
            </div>
            <div class="shadow pb-5">
                  <div class="container mx-auto px-3 row">
                  <div v-for="category in products" key="category.id" class="col-3">
                  <div @click="catId(category)" class="col-12 p-0">
                        <img class="rounded w-100" style="height: 360px;" :src="category.image">
                        <p class="fw-bold fs-17 h-80 mt-2 mb-0">{{ category.title }}</p>
                        <p class="fw-bold fs-5">{{ category.id }} {{ category.price }}</p>
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
</template>

<script>
export default{
      data() {
  return {
      products: [],
      drawer: false,
  };
},
async created() {
    await this.getCategory();
  },
methods: {
      catId(category){
            this.$router.push(`/seecategory${category}`)
      },
      async getCategory() {
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();
      this.products = json;
    }
},
}
</script>