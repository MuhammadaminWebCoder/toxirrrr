<script>
export default{
  data() {
    return {
      input: '',
    inputt: ''
    }
  },
  methods: {
    login() {
      var postData = {
        username:this.input ,
        password: this.inputt,
      };
      fetch('https://crud-lffq.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
      .then(response => response.json())
      .then(data => {
        try {
          console.log(data);
          if(data.status == 200) {
            this.$router.push({path: '/'})
            const token = 'CnZuKtxmzd4GElbmWBFsqT/kiwi-(Copy)-(Copy)?type=design&node-id=1804-1262&mode=design&t=QkCn4plg4iHSkuHO-0'
            window.localStorage.setItem('token', token)
          }else {
            alert('no user')
          }
        } catch (error) {
          alert(error)
        }
      })
    }
}
}
</script>
<template>
      <div class="container justify-content-center align-items-center d-flex">
        <div style="padding: 0 20px;" class="form m-5 w-50 text-center">
          <h3>Ваша регистрация завершена!</h3>
          <a href="#" class="silka">Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в виде смс на ваше телефонный номер</a>
          <div style="width: 60%;" class="mx-auto">
            <p class="mb-0 mt-4 text-start">Введите email или номер телефона</p>
          <input v-model="input" class="form-control py-4" placeholder="99891 167 27 23" type="text">
          <p class="mb-0 mt-4 text-start">Пароль</p>
          <input v-model="inputt" class="form-control mb-3 py-4" placeholder="99891 167 27 23" type="text">
          <button @click="login" class="mt-5 py-4 w-100 btn bggreen">Giriş Yap</button>
          <div class="d-flex mt-5 span justify-content-center login-log align-items-center">
            <span></span><p>или</p><span></span>
          </div>
          <a href="#" class="silka">Восстоновить ваше пароль</a>
          </div>
        </div>
        <div class="image hh position-relative w-50">
          <img src="../assets/loginimg.svg" class="loginimg">
          <div class="imgl">
            <img src="/public/icons/kivi (2).svg">
            <span class="d-block span fw-400 py-3 fs-17">Откройте для себя <br>
            целую плошадку<br>
            для продаже</span>
            <button class="btn btn-outline-success">kak eto delat ?</button>
          </div>
        </div>
      </div>
</template>