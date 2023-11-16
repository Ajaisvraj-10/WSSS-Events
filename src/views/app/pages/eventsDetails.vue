<template>
    <div class="event_dtls_main">
        <div class="update_div">
            <div class="update_pstr_div">
                <div class="updt_pstr" v-for="(event, index) in eventList" :key="index">
                    <div class="updt_pstr_dtls">
                        <img :src="event.photo" alt="Event Photo">
                        <div class="updt_txt1">{{ event.title }}</div>
                        <div class="updt_txt2">{{ event.description }}</div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <path d="M30.8807 11.6309C30.7994 11.7122 30.7348 11.8087 30.6908 11.9149C30.6468 12.0211 30.6241 12.135 30.6241 12.25C30.6241 12.365 30.6468 12.4789 30.6908 12.5851C30.7348 12.6913 30.7994 12.7878 30.8807 12.8691L45.1367 27.125L8.7498 27.125C8.51773 27.125 8.29518 27.2172 8.13108 27.3813C7.96699 27.5454 7.8748 27.7679 7.8748 28C7.8748 28.2321 7.96699 28.4546 8.13108 28.6187C8.29518 28.7828 8.51773 28.875 8.7498 28.875H45.1367L30.8807 43.1309C30.7994 43.2122 30.735 43.3087 30.691 43.415C30.647 43.5212 30.6243 43.635 30.6243 43.75C30.6243 43.865 30.647 43.9788 30.691 44.085C30.735 44.1913 30.7994 44.2878 30.8807 44.3691C30.962 44.4504 31.0585 44.5148 31.1648 44.5588C31.271 44.6028 31.3848 44.6255 31.4998 44.6255C31.6148 44.6255 31.7286 44.6028 31.8348 44.5588C31.9411 44.5148 32.0376 44.4504 32.1189 44.3691L47.8689 28.6191C47.9502 28.5378 48.0148 28.4413 48.0588 28.3351C48.1028 28.2289 48.1255 28.115 48.1255 28C48.1255 27.885 48.1028 27.7712 48.0588 27.6649C48.0148 27.5587 47.9502 27.4622 47.8689 27.3809L32.1189 11.6309C32.0376 11.5496 31.9411 11.485 31.8349 11.441C31.7286 11.397 31.6148 11.3743 31.4998 11.3743C31.3848 11.3743 31.271 11.397 31.1647 11.441C31.0585 11.485 30.962 11.5496 30.8807 11.6309Z" fill="#283618"/>
</svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import sidebar from './sidebar.vue';
export default {
  components: {
  sidebar,
},
    data() {
      return {
    hideScrollbar: true,
    eventList : [],
      }
    },
    mounted(){
      this.fetchEvents();
    },
    methods: {
  async fetchEvents() {
  try {
      const response = await axios.get('http://127.0.0.1:8000/api/adminevent/');
      this.eventList = response.data;
  } catch (error) {
      console.error('Error fetching event data:', error);
  }
  },

},
};
</script>


<style>
@import './style/eventsdetailsstyle.css';
</style>