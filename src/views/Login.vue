<template>
  <div class="login-page">
    <div class="container">

      <div class="row align-items-center">
        <div class="col" style="text-align:center">
          <img src="../assets/menulogo.png">
        </div>
        <div class="col">
          <form>
            <div class="form-login">
              <div class="title">Portal Meeting</div>
              <div class="subtitle">
                <div>
                  Silakan isi formulir di bawah ini!
                </div>
                <div>
                  Pastikan NIP dan nomor PIN yang Anda masukkan benar
                </div>
              </div>
              <div class="mb-3">
                <label for="nip" class="form-label">NIP</label>
                <input type="email" class="form-control" placeholder="Masukkan NIP Anda" id="nip">
              </div>
              <div class="mb-3">
                <label for="pin" class="form-label">Nomor PIN</label>
                <input type="password" class="form-control" placeholder="Masukkan PIN Anda" id="pin">
              </div>
              <div class="subtitle" style="text-align:right;">
                <router-link 
                  :to="{ name: 'views.forgotkey' }"
                > Lupa PIN?
                </router-link>
                <!-- <a>Lupa PIN?</a> -->
              </div>
              <routerLink :to="{name: 'views.home'}" class="btn btn-masuk">Masuk</routerLink>
              <!-- <button  class="btn btn-masuk-shadow"></button> -->
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
    
}
</script>