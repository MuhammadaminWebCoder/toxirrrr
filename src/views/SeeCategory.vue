<template>
      <div class="seeCat bg-light pb-5">
            <div class="container py-5 mx-auto row p-0">
                  <div class="links mt-5 p-0 d-flex align-items-center">
                        <a href="#" class="link span me-3">Объявления</a>
                        /
                        <a href="#" class="link span mx-3">Ташкент Недвижимость</a>
                        /
                        <a href="#" class="link span mx-3">Ташкент Квартиры</a>
                        /
                        <a href="#" class="link span mx-3">Ташкент Продажа</a>
                        /
                        <a href="#" class="link span mx-3">Новостройки Ташкент</a>
                  </div>
                  <p class="display-6 pe-4 pb-5 fw-500"></p>

                  <h1>{{ firstProduct.title }}</h1>
                  <div class="col-6 d-flex img-child">
                        <div class="images me-4" style="width: 15%;">
                              <img width="100%" class="d-block my-2" :src="firstProduct.image">
                              <img width="100%" class="d-block my-2" :src="firstProduct.image">
                              <img width="100%" class="d-block my-2" :src="firstProduct.image">
                              <img width="100%" class="d-block my-2" :src="firstProduct.image">
                              <img width="100%" class="d-block my-2" :src="firstProduct.image">
                        </div>
                        <img style="width: 80%; height: fit-content;" class="mt-2" :src="firstProduct.image">
                  </div>
                  <div class="col-6">
                        <div class="d-flex justify-content-between">
                              <span class="d-block">Артикул: 4418970</span>
                              <span class="d-block">обновлено: 28.04.17 добавлено: 28.04.17 </span>
                        </div>
                        <div class="display-6 fw-500 my-3">{{ firstProduct.price + ' sum' }}</div>
                        <a href="#">Ташкент, Ташкентская область, Юнусабадский район</a>
                        <div class="br p-0 ps-4 fs-17 w-content mt-3 d-flex align-items-center btn btn-yelgren">
                              <span>99891 166</span> <p class="m-0 pt-1 ms-1 me-4">****</p>
                              <div class="btn btn-gren br">Покозать польностю</div>
                        </div>
                        <div class="br p-0 ps-4 fs-17 w-content mt-3 d-flex align-items-center btn btn-yelgren">
                              <span>99891 166</span> <p class="m-0 pt-1 ms-1 me-4">****</p>
                              <div class="btn btn-gren br">Покозать польностю</div>
                        </div>
                        <span class="fs-15 mx-1 d-block mt-2 mb-5">Автор обьявлении: <a href="#" class="text-success fs-15">Зухриддин Темиров</a></span>
                        <button class="btn btn-primary br py-3 fs-15 px-5">Написать автору</button>
                        <button class="btn btn-prima br py-3 fs-15 ms-4 px-5">Предложить свою цену</button>
                        <div class="row my-5">
                              <div class="col-4 p-3 border-end border-start fw-400">Количество комнат: <br> <span class="fs-4">6</span></div>
                              <div class="col-4 p-3 border-end fw-400">Общая площадь:<br> <span class="fs-4">40 м2</span></div>
                              <div class="col-4 p-3 fw-400">Этаж:<br> <span class="fs-4">32</span></div>
                              
                              <div class="col-4 p-3 border-end border-start border-top fw-400">Этажность дома:<br> <span class="fs-4">6</span></div>
                              <div class="col-4 p-3 border-end border-top fw-400">Состояние квартиры:<br> <span class="fs-5">Первая сдача </span></div>
                              <div class="col-4 p-3 border-top fw-400">Этаж:<br> <span class="fs-4">32</span></div>
                              
                              <div class="col-4 p-3 border-end border-start border-top fw-400">Планировка<br> <a href="#" class="fs-5">Раздельная</a></div>
                              <div class="col-4 p-3 border-end border-top fw-400">Год постройки/сдачи<br> <a href="#" class="fs-5">Сдача в 2017</a></div>
                              <div class="col-4 p-3 border-top fw-400">Ремонт<br> <span class="fs-5">Авторский проект</span></div>

                              <div class="col-4 p-3 border-end border-bottom border-start border-top fw-400">Санузел<br> <a href="#" class="fs-5">2 санузла и более</a></div>
                              <div class="col-4 p-3 border-end border-bottom border-top fw-400">Меблирована<br> <a href="#" class="fs-5">Да</a></div>
                              <div class="col-4 p-3 border-top border-bottom fw-400">Высота потолков<br> <span class="fs-4">32</span></div>
                              <div class="col-12 p-3 border-start fw-400">Рядом есть<br> <a href="#" class="fs-5">Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе</a></div>
                        </div>
                        <span class="d-block fw-400 span fs-5">{{ firstProduct.description }}</span>
                        <div class="d-flex mt-3 fw-400">
                              <div class="w-50 fs-15">Пожаловатся</div>
                        <div class="w-50 text-danger fs-15">Пожаловатся</div>
                        </div>
                  </div>
            </div>
            
      </div>
</template>

<script>
export default {
  data() {
    return {
      firstProduct: {},
      productId: '',
    }
  },
  async created() {
    await this.getCategory();
  },
  methods: {
    async getCategory() {
      const data = await fetch(`https://fakestoreapi.com/products/${this.$route.path.split('/seecategory')[1]}`);
      const json = await data.json();
      this.firstProduct = json;
    }
  }
}
</script>