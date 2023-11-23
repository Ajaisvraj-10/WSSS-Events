<template>
    <div class="event_dtls_main">
      <div class="top_nav_div">
    <div class="top_logo_box">
            <div class="inner_logo">
                <img class="logo_img" src="/wss_img/Logo-white.png" alt="">
            </div>
        </div>
        <!-- navbar -->
        <div class="top_nav_bar">
            <div class="nav_menu_div">
                <router-link
    v-for="(name, index) in menuItems"
    :key="index"
    :to="{ name: name.toLowerCase().replace(/\s+/g, '-') }"
    class="nav_home"
    @mouseover="hoveredItem = index"
    @mouseout="hoveredItem = null"
    >
    {{ name }}
    <div class="underline" :class="{ active: hoveredItem === index }"></div>
    </router-link>
            </div>
            <button class="btn_donate">Donate</button>
        </div>
        <!--  -->
    </div>
      <div class="title_prjcts">Events</div>
        <div class="update_div_more">
          <router-link v-for="event in eventList" :to="{ name: 'empty', params: { id: event.id }}"> 
            <div class="update_pstr_div">
                <div class="updt_pstr">
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
          </router-link>
        </div>

               <!--  -->

       <div class="footer_div">
        <div class="footer_sect1_div">
            <div class="inner_div1">
                <div class="txt_gt_tch">Get in touch</div>
                <div class="inner_txt2">Wayanad Social Service Society (WSSS) is a registered charitable society and a 
                    secular voluntary organization established in the year 1974. It is the official social
                     service organization of the Catholic Diocese of Mananthavady.
                </div>
            </div>
            <div class="inner_div2" v-for="(banner, index) in bannerList">
                <div class="txt_adrss">Address</div>
                <div class="inner_txt4">{{ banner.address }}</div>
            </div>
        </div>
        <div class="footer_sect2_div">
            <div class="inner_ftr2">
                <div><img class="footer_img" src="/wss_img/Logo-white.png" alt=""></div>
                <div class="ftr2_txt_dtls">
                    <div class="txt_ftr">Would you like to speak <br> to us? We’re listening.</div>
                    <div class="contct_div">
                        <div class="cntct_btn">Contact us
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <path d="M9.9258 4.23836C9.89965 4.26448 9.8789 4.2955 9.86475 4.32964C9.85059 4.36378 9.84331 4.40038 9.84331 4.43734C9.84331 4.4743 9.85059 4.5109 9.86475 4.54505C9.8789 4.57919 9.89965 4.61021 9.9258 4.63633L14.5081 9.21859H2.81228C2.73769 9.21859 2.66615 9.24822 2.61341 9.30097C2.56066 9.35371 2.53103 9.42525 2.53103 9.49984C2.53103 9.57444 2.56066 9.64597 2.61341 9.69872C2.66615 9.75146 2.73769 9.78109 2.81228 9.78109H14.5081L9.9258 14.3634C9.89966 14.3895 9.87894 14.4205 9.86479 14.4547C9.85065 14.4888 9.84337 14.5254 9.84337 14.5623C9.84337 14.5993 9.85065 14.6359 9.86479 14.67C9.87894 14.7042 9.89966 14.7352 9.9258 14.7613C9.95193 14.7875 9.98295 14.8082 10.0171 14.8223C10.0512 14.8365 10.0878 14.8438 10.1248 14.8438C10.1617 14.8438 10.1983 14.8365 10.2325 14.8223C10.2666 14.8082 10.2976 14.7875 10.3238 14.7613L15.3863 9.69883C15.4124 9.67271 15.4332 9.64169 15.4473 9.60755C15.4615 9.5734 15.4688 9.5368 15.4688 9.49984C15.4688 9.46288 15.4615 9.42628 15.4473 9.39214C15.4332 9.358 15.4124 9.32698 15.3863 9.30086L10.3238 4.23836C10.2976 4.21221 10.2666 4.19146 10.2325 4.17731C10.1983 4.16316 10.1617 4.15587 10.1248 4.15587C10.0878 4.15587 10.0512 4.16316 10.0171 4.17731C9.98293 4.19146 9.95192 4.21221 9.9258 4.23836Z" fill="#FEFAE0"/>
</svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="inner_ftr4">
                <div class="fter_txt">
                    <div class="txt_prvcy_plcy">Privacy and policy  •  Terms and conditions</div>
                    <div class="txt_prvcy_plcy2">Copyright 2023 WSSS LTD. All rights reserved.</div>
                </div>
                <div class="logo_footer">
                    <img class="sc_media" src="/wss_img/ri_linkedin-fill.png" alt="">
                    <img class="sc_media" src="/wss_img/ic_baseline-facebook.png" alt="">
                    <img class="sc_media" src="/wss_img/mdi_instagram.png" alt="">
                    <img class="sc_media" src="/wss_img/pajamas_twitter.png" alt="">
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
    bannerList : [],
    menuItems: [
    "Home",
    "ProjectsDetails",
    "About us",
    "Awards",
    "Gallery",
    "Activities",
    "Empty",
    ],
hoveredItem: null,

      }
    },
    mounted(){
      this.fetchEvents();
      this.fetchBanners();
    },
    methods: {
  async fetchEvents() {
  try {
      const response = await axios.get('http://api.wsss.capcee.com/api/adminevent/');
      this.eventList = response.data;
  } catch (error) {
      console.error('Error fetching event data:', error);
  }
  },
  async fetchBanners() {
    try {
        const response = await axios.get('http://api.wsss.capcee.com/api/adminbanner/');
        this.bannerList = response.data;
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