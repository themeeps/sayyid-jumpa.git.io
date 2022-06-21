<template>
  <div class="detail-page">

    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <h1>Detail Rapat</h1>
      <div class="ml-auto" id="navbarText">
        <router-link type="button" class="btn btn-danger" :to="{ name: 'views.login' }">Keluar</router-link>
      </div>
      </div>
    </nav>

    <div class="container my-5">
      <router-link type="button" class="btn btn-outline-light btn-back" :to="{ name: 'views.home' }">Kembali</router-link>
    </div>

    <div class="container">
      <div v-for="meeting in meetings" v-bind:key="meeting.id" class="card" style="background-color:#001B1C; width:100%; text-align: center; margin:0rem; margin-top:2rem">
        <div class="row" style="margin:2rem">
          <div class="col">
            <div>
              ID Rapat : 
            </div>
            <div class="subtitle">
              {{meeting.rapat_id}}
            </div>
          </div>
          <div class="col">
            <div>
              Subjek Rapat : 
            </div>
            <div class="subtitle">
              {{meeting.subject}}
            </div>
          </div>
          <div class="col">
            <div>
              Tipe Rapat : 
            </div>
            <div class="subtitle">
              {{meeting.tipe}}
            </div>
          </div>
        </div>

        <div class="row" style="margin:2rem">
          <div class="col">
            <div>
              Penyelenggara : 
            </div>
            <div class="subtitle">
              {{meeting.penyelenggara}}
            </div>
          </div>
          <div class="col">
            <div>
              Waktu Mulai : 
            </div>
            <div class="subtitle">
              {{'2021-08-25 12:58 WIB'}}
            </div>
          </div>
          <div class="col">
            <div>
              Durasi : 
            </div>
            <div class="subtitle">
              {{'1 Jam'}}
            </div>
          </div>
        </div>

        <div class="mb-4">
          <button class="btn btn-join" style="width:4rem">Gabung</button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'detail',
  components: { 
  },
  data() {
    return {
      meetings:[
        { 
          id: 1,
          rapat_id: '123456',
          status: 'Berlangsung',
          subject: 'Test Meeting',
          tipe: 'Rapat Reguler',
          penyelenggara: 'Rapi Ahmat (rapiahmat@jumpa.id)',
          time: '02:28',
          aktif: true
        },
      ],
    };
  }
}
</script>