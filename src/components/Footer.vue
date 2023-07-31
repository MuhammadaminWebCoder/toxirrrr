<template>
      <div class="footer" v-if="$route.path == '/' || $route.path == '/seecategory' ||  $route.path == '/changecategory' || $route.path == '/productadd'">
           <div :class="{'bg-white': $route.path == '/'}" class="fotage">
            <div class="container p-0 d-flex align-items-center justify-content-between">
                  <a href="#" class="kiwi w-26 align-items-center d-flex link">
                              <div class="rounded-circle d-flex align-items-center justify-content-center
                        nav-logo purple">
                        <img src="/icons/kivi (1).svg" alt="">
                        </div>
                        <div class="p-2 w-75 text-white">
                              <span class="fw-bold ms-3 fs-15 w-100 d-block">Продай, найди, купи <br>все что ты пожелаешь</span>
                        </div> 
                  </a>
                  <span class="span w-51 fs-15"><span v-if="$route.path !='/'">Веб сайт бесплатных обьявлений | на базе <br>имеется 234 944 999 шт обяления</span></span>

                  <div class="d-flex w-26">
                        <img class="me-2" src="./icon-res/Button - Android.svg">
                        <img src="./icon-res/Button - App Store.svg">
                  </div>
            </div>
           </div>
           <div class="footer-text py-5" v-if="$route.path != '/changecategory'">
                  <div class="container text-white mx-auto row mt-5 px-0 py-5">
                        <div class="col-3 fs-15">
                              <span class="d-block mb-2"><i class="fal me-2 fa-chevron-right r"></i> Автомобили</span>
                              <a v-for="link in links" href="#" class="link my-1 d-block span">{{ link.item }}</a>
                              <span class="d-block mb-2 mt-5"><i class="fal me-2 fa-chevron-right g"></i> Автомобили</span>
                              <a v-for="link in links" href="#" class="link my-1 d-block span">{{ link.item }}</a>
                        </div>
                        <div class="col-3 fs-15">
                              <span class="d-block mb-2"><i class="fal me-2 fa-chevron-right y"></i> Автомобили</span>
                              <a v-for="link in links" href="#" class="link my-1 d-block span">{{ link.item }}</a>
                              <span class="d-block mb-2 mt-5"><i class="fal me-2 fa-chevron-right p"></i> Автомобили</span>
                              <a v-for="link in links" href="#" class="link my-1 d-block span">{{ link.item }}</a>
                        </div>
                        <div class="col-3 fs-15">
                              <span class="d-block mb-2"><i class="fal me-2 fa-chevron-right r"></i> Автомобили</span>
                              <a v-for="link in links" href="#" class="link my-1 d-block span">{{ link.item }}</a>
                              <span class="d-block mb-2 mt-5"><i class="fal me-2 fa-chevron-right lb"></i> Автомобили</span>
                              <a v-for="link in links" href="#" class="link my-1 d-block span">{{ link.item }}</a>
                        </div>
                        <div class="col-3 fs-15">
                              <span class="d-block mb-2"><i class="fal me-2 fa-chevron-right o"></i> Автомобили</span>
                              <a v-for="link in links" href="#" class="link my-1 d-block span">{{ link.item }}</a>
                              <span class="d-block mb-2 mt-5"><i class="fal me-2 fa-chevron-right b"></i> Автомобили</span>
                              <a v-for="link in links" href="#" class="link my-1 d-block span">{{ link.item }}</a>
                        </div>
                        <a href="#" class="link mt-5 span text-center mb-5 pb-5">Покозать еще <i class="fal ms-2 fa-chevron-down"></i></a>
                        <hr>
                        <div class="d-flex justify-content-between px-0 pt-5">
                              <a href="#" class="link hov-gr span">Подать Объявления</a>
                              <a href="#" class="link hov-gr span">объявление</a>
                              <a href="#" class="link hov-gr span">Магазины</a>
                              <a href="#" class="link hov-gr span">Помощь</a>
                              <a href="#" class="link hov-gr span">Безопасность</a>
                              <a href="#" class="link hov-gr span">Реклама на сайте</a>
                              <a href="#" class="link hov-gr span">О компании</a>
                        </div>
                  </div>
                  
           </div>
      </div>
</template>

<script>
export default{
      data() {
            return{
                  links:[
                  {item: ' Легковые авто'},
                  {item: 'Мото'},
                  {item: 'Автобусы'},
                  {item: 'Грузовые авто'},
                  {item: 'Сельхозтехника'},
                  {item: 'Запчасти и Аксессуары'},
                  {item: 'Прицепы и Спецтехника'},
                  {item: 'Водный и Другой транспортa'},
            ]
            }
      }
}
</script>