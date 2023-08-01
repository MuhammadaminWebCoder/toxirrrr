<template>
      <div class="shop">
            <div class="container my-300">
                  <div class="d-flex align-items-center">
                        <div>
                        <div class="form-floating">
                        <input type="text" v-model="uzs" class="form-control forms" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Username</label>
                        </div>
                        </div>
                        <select name="name" v-model="sum" class="mt-5 pb-3" id="select">
                              <option value="sum">sum &#8744;</option>
                              <option value="dol">dol</option>
                              <option value="uzs">uzs</option>
                              <option value="ass">ass</option>
                        </select>
                        <input class="form-check-input mt-5 me-3 ms-5 fs-5" v-model="dogcheck" type="checkbox" id="flexCheckDefault">
                         <label class="form-check-label mt-5" for="flexCheckDefault">Договорная</label>
                  </div>
                  <div class="d-flex">
                        <div class="form-floating">
                        <input type="text" v-model="kolicomand" class="form-control forms" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Username</label>
                        </div>
                        <div class="form-floating ms-4">
                        <input type="text" v-model="kolicomand1" class="form-control forms" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Username</label>
                        </div>
                        <div class="form-floating ms-4">
                        <input type="text" v-model="kolicomand2" class="form-control forms" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Username</label>
                        </div>
                  </div>
                  <span class="d-block mt-5 pt-5">Расположение*</span>
                  <div class=" d-flex">
                        <div class="col-4">
                        <div class="mb-2" v-for="us in 3">
                              <input v-model="kolicomands1" class="form-check-input mt-5 me-3 fs-5" type="checkbox" id="flexCheckDefault">
                         <label class="form-check-label mt-5" for="flexCheckDefault">Договорная</label>
                        </div>
                        </div>
                        <div class="col-4">
                        <div class="mb-2" v-for="us in 3">
                              <input v-model="kolicomands2" class="form-check-input mt-5 me-3 fs-5" type="checkbox" id="flexCheckDefault">
                         <label class="form-check-label mt-5" for="flexCheckDefault">Договорная</label>
                        </div>
                        </div>
                        <div class="col-4">
                        <div class="mb-2" v-for="us in 2">
                              <input v-model="kolicomands3" class="form-check-input mt-5 me-3 fs-5" type="checkbox" id="flexCheckDefault">
                         <label class="form-check-label mt-5" for="flexCheckDefault">Договорная</label>
                        </div>
                        </div>

                  </div>
                  <div class="d-flex">
                        <div class="form-floating">
                        <input v-model="inps1" type="text" class="form-control forms" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Username</label>
                        </div>
                        <div class="form-floating ms-4">
                        <input v-model="inps2" type="text" class="form-control forms" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Username</label>
                        </div>
                        <div class="form-floating ms-4">
                        <input v-model="inps3" type="text" class="form-control forms" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Username</label>
                        </div>
                  </div>
                  <div class="mt-5 d-flex">
                        <div class="col-4">
                        <div class="mb-2" v-for="us in 3">
                              <input v-model="checksost" class="form-check-input mt-5 me-3 fs-5" type="checkbox" id="flexCheckDefault">
                         <label class="form-check-label mt-5" for="flexCheckDefault">Договорная</label>
                        </div>
                        </div>
                        <div class="col-4">
                        <div class="mb-2" v-for="us in 3">
                              <input v-model="checksost1" class="form-check-input mt-5 me-3 fs-5" type="checkbox" id="flexCheckDefault">
                         <label class="form-check-label mt-5" for="flexCheckDefault">Договорная</label>
                        </div>
                        </div>
                        <div class="col-4">
                        <div class="mb-2" v-for="us in 2">
                              <input v-model="checksost1" class="form-check-input mt-5 me-3 fs-5" type="checkbox" id="flexCheckDefault">
                         <label class="form-check-label mt-5" for="flexCheckDefault">Договорная</label>
                        </div>
                        </div>

                  </div>     
                  <div class="mb-5 d-flex">
                        <div class="form-floating">
                        <input v-model="inpss1" type="text" class="form-control forms" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Username</label>
                        </div>
                        <div class="form-floating ms-4">
                        <input v-model="inpss2" type="text" class="form-control forms" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Username</label>
                        </div>
                        <div class="form-floating ms-4">
                        <input v-model="inpss3" type="text" class="form-control forms" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Username</label>
                        </div>
                  </div>
                  <span>Отопление</span>
                  <div class="d-flex">
                        <div class="col-4">
                        <div class="mb-2" v-for="us in 3">
                              <input class="form-check-input mt-5 me-3 fs-5" type="checkbox" id="flexCheckDefault">
                         <label class="form-check-label mt-5" for="flexCheckDefault">Договорная</label>
                        </div>
                        </div>
                        <div class="col-4">
                        <div class="mb-2" v-for="us in 3">
                              <input class="form-check-input mt-5 me-3 fs-5" type="checkbox" id="flexCheckDefault">
                         <label class="form-check-label mt-5" for="flexCheckDefault">Договорная</label>
                        </div>
                        </div>
                        <div class="col-4">
                        <div class="mb-2" v-for="us in 2">
                              <input v-model="inl" class="form-check-input mt-5 me-3 fs-5" type="checkbox" id="flexCheckDefault">
                         <label class="form-check-label mt-5" for="flexCheckDefault">Договорная</label>
                        </div>
                        </div>

                  </div>  
                  <span class="d-block my-5">Отопление</span>
                  <p class="m-0 fw-400">Есть возможность подключения</p>
                  <textarea v-model="textare" class="pl w-100 form-control mt-4"></textarea>
                  <span class="span">9000 знаков осталос</span>
            </div>
            <div class="d-flex mt-5 pt-5 container ms-30">
                  <v-file-input v-for="user in 5" variant="outlined" v-model="selectedFile" accept="image/*"></v-file-input>
            </div>
            <div class="d-flex container ms-30">
                  <v-file-input v-for="user in 5" variant="outlined" v-model="selectedFile" accept="image/*"></v-file-input>
            </div>
            <div class="container my-300">
                  <h5 class="pt-0 mb-3">Местоположение объекта</h5>
                  <select name="name" v-model="sumin" class="mt-5 pb-3 w-25" id="select">
                              <option value="sum">sum &#8744;</option>
                              <option value="dol">dol</option>
                              <option value="uzs">uzs</option>
                              <option value="ass">ass</option>
                  </select>
                  <select name="name" v-model="sumin" class="mt-5 pb-3 w-50 mb-5" id="select">
                        <option value="sum">sum &#8744;</option>
                              <option value="dol">dol</option>
                              <option value="uzs">uzs</option>
                              <option value="ass">ass</option>
                  </select>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11983.499894830706!2d69.18970026138913!3d41.33333199090478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c06e7b6690f%3A0x87a75a649b84e040!2zQWstVGVwZSwg0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1690741776404!5m2!1sru!2s" class="border-0 w-75 d-flex justify-content-center px-5 container " height="400px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="container my-300 pt-0">
                  <div class="w-50 mb-5 mt-5">
                        <div class="form-floating">
                        <input v-model="tels" type="text" class="form-control forms" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Username</label>
                        </div>
                        <div class="form-floating">
                        <input v-model="tels1" type="text" class="form-control forms" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Username</label>
                        </div>
                        <div class="form-floating">
                        <input v-model="tels2" type="text" class="form-control forms" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Username</label>
                        </div>
                  </div>
                  <div class="d-flex mt-5 align-items-center fs-17">
                        <button @click="dobavit()" class="btn me-5 py-3 px-5 fw-bold fs-17 btn-gren">Добавить обьявления бесплатно</button>
                        <a href="#">Предпросмотр</a>
                  </div>
            </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
      sum :'',uzs :'',dogcheck :'',kolicomand :'',kolicomand1 :'',kolicomand2 :'',inps1 :'',inps2 :'',inps3 :'',
      checksost :'', checksost1 :'',checksost2 :'',inpss1 :'',inpss2 :'',inpss3 :'',inl :'',
      textare :'',sumin :'',tels :'',tels2 :'',tels3 :'',
    };
  },
  methods: {
      dobavit() {
                  console.log(this.sum);console.log(this.uzs);console.log(this.dogcheck);console.log(this.kolicomand);
            console.log(this.kolicomand1);console.log(this.kolicomand2);console.log(this.inps1);console.log(this.inps2);console.log(this.inps3);
            console.log(this.checksost);console.log(this.checksost1);console.log(this.checksost2);console.log(this.inpss1);console.log(this.inpss2);console.log(this.inps3);
            console.log(this.inl);console.log(this.textare);console.log(this.sumin);console.log(this.tels);console.log(this.tels2);console.log(this.tels3);
      }
  }
};
</script>

<style>
.v-file-input {
  background-image: url('../components/icon-res/Group 21.svg');
}
</style>