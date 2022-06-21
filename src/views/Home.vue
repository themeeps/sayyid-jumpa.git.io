<template>
  <div class="home-page">

    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <h1>Data Semua Rapat</h1>
      <div class="ml-auto" id="navbarText">
        <router-link type="button" class="btn btn-danger" :to="{ name: 'views.login' }">Keluar</router-link>
      </div>
      </div>
    </nav>

    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <span></span>
        <div class="ml-auto" id="navbarText">
          <form role="search" style="display:flex">
            <div class="subtitle-home">
              Pencarian:
            </div>
            <input class="form-control me-2" type="search">
          </form>
        </div>
      </div>
    </nav>

    <div v-for="meeting in meetings" v-bind:key="meeting.id" class="card mx-5" style="background-color:#001B1C">
      <div class="card-header">
        <div class="id-rapat">
          ID Rapat : {{meeting.rapat_id}}
        </div>
        <div class="status">
          {{meeting.status}}
        </div>
      </div>

      <div class="card-body">
        <div class="subject">
          Subjek Rapat : {{meeting.subject}}
        </div>
        <div class="tipe">
          Tipe : {{meeting.tipe}}
        </div>
        <div class="penyelenggara">
          Penyelenggara : {{meeting.penyelenggara}}
        </div>
        <div class="time">
          Berlangsung : {{meeting.time}}
        </div>
      </div>

      <div class="card-footer">
        <div class="card-btn">
          <div class="card-detail">
            <router-link class="btn btn-outline-success" :to="{ name: 'views.detail'}" style="border-radius:10px; font-size: 10px;">Detail</router-link>
          </div>
          <div class="card-join">
            <button class="btn btn-join">Gabung</button>
          </div>
        </div>
      </div>
    </div>

    <div class="divider">
      <app-footer />
    </div>
    


  </div>
</template>

<script>
import AppFooter from '../components/AppFooter.vue';

export default {
  name: 'home',
  components: { 
    AppFooter 
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
        { 
          id: 2,
          rapat_id: '678932',
          status: 'Terjadwal',
          subject: 'Test Meeting',
          tipe: 'Rapat Reguler',
          penyelenggara: 'Sugiono (sugiono@jumpa.id)',
          time: '14:30',
          aktif: false
        },
      ],
    };
  }
}
</script>