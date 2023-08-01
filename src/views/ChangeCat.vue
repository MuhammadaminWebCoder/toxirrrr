<template>
      <div class="bg-light pb-5 w-100">
            <div class="container">
                  <div class="py-2 d-flex">
                        <span class="d-block me-5 ms-3">Foto</span>
                        <span class="d-block me-14">nazivanie</span>
                        <span class="d-block me-8">sena</span>
                        <span class="d-block me-8">data</span>
                        <span class="d-block me-8">deystvie</span>
                  </div>
                        <div v-for="user in 3">
                              <div class="d-flex bg-white py-5 align-items-center w-100">
                              <div class="avatar ms-3 me-5 rounded-circle">
                                    <img src="/public/icons/Oval 2.svg">
                              </div>
                              <div class="fs-17 me-5">Срочно нужен программист yii2</div>
                              <div class="changeCat-prod-uzs fs-17">2 000 000 <br>6 000 000 сум</div>
                              <div class="changeCat-prod-uzs fs-17"># 345 002 <br> С: 28 июнь <br> По: 28 июль</div>
                              <a href="#" class="export me-5"><i class="far fa-light fa-long-arrow-up"></i> Поднять</a>
                              <a href="#" class="export me-5  border-primary"><i class="far bg-primary fa-light fa-long-arrow-up"></i> Рекламировать</a>
                              <i class="fas fa-ellipsis-h ms-5 d-flex align-items-center shadow avatar"></i>
                        </div>
                        <div class="d-flex bg-white mt-1 mb-4 py-3 ps-3">
                              <p class="m-0 me-4 text-primary">Статистика</p>
                              <p class="m-0 me-4">Статистика</p>
                              <p class="m-0 me-4">Статистика</p>
                              <p class="m-0 me-4">Статистика</p>
                        </div>
                        </div>
            </div>
      </div>
</template>