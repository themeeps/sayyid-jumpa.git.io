<template>
  <div class="forgot-page">

    <div class="container">
      <div class="card rounded shadow">

        <div class="container my-4">
          <div class="title-forgot">
            Lupa PIN?
          </div>
          <div class="image-card m-4">
            <img src="../assets/undrawlogo.png" class="card-img-top">
          </div>
          <div class="card-body">
            <div class="subtitle-forgot">
              Masukkan email yang terkait dengan akun Anda
            </div>
            <form>
              <div class="mb-3 mx-4">
                <input type="email" class="form-control mb-2" placeholder="Masukkan Email Anda">
                <button type="button" class="btn btn-sendlink mb-2"> SEND LINK </button>
                <router-link type="button" class="btn btn-outline-light btn-back" :to="{ name: 'views.login' }">Kembali</router-link>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'forgot',
}
</script>