
<template>
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.5.0/dist/css/bootstrap.min.css" rel="stylesheet"> -->
    <div class="contact_main">
    <div v-for="(banner, index) in bannerList">
        <img class="gif_image" :src="banner.banner_image" alt="Story Photo">
    </div>
       
        <img class="gif_image_mob" src="/wss_img/mob_img.png" alt="">
        <div class="main_rect"></div>
        <div class="top_logo_box">
            <div class="inner_logo">
                <img class="logo_img" src="/wss_img/Logo-dark.png" alt="">
                <!-- <div class="green_rect"></div> -->
            </div>
        </div>
        <!-- nav -->
        <!-- mob_nav -->
       <div v-if="show_sidebar">
        <sidebar/>
       </div>
       <div class="mob_nav_menu"  @click="show_sidebar=!show_sidebar">
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 28 28" fill="none">
        <path d="M3.5 4.66669H24.5V7.00002H3.5V4.66669ZM3.5 12.8334H24.5V15.1667H3.5V12.8334ZM3.5 21H24.5V23.3334H3.5V21Z" fill="#FEFAE0"/>
      </svg>
    </div>
   
        <!-- end of mob_menu -->
        <div class="top_nav_bar">
            <div class="nav_menu_div">
                <router-link
    v-for="(name, index) in menuItems"
   
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
        <!-- banner_txts -->
        <div class="banner_txt_div"  v-for="(banner, index) in bannerList">
            <div class="txt_1">{{ banner.title }}</div>
            <div  class="txt_2">{{ banner.description }}</div>

            <div class="mute_knwmre_div">
                <div class="mute_div">
                    <img src="/wss_img/Mute x3.png" alt="">
                </div>
                <button class="know_more_btn">Know more</button>
            </div>
        </div>
        <!--  -->
        <!-- breking-stories -->
        <div class="story_box_div">
            <div class="story_boxes" :class="{ 'hide-scrollbar': hideScrollbar }">
            <div class="story_box1" v-for="(story, index) in storyList" >
                <div><img class="story1_img" :src="story.photo" alt="Story Photo"></div>
                <div class="story_dtls">
                    <div class="story_txt1_div">
                        <div class="story_txt1">{{ story.title }}</div>
                        <div class="posted_dtls">
                            <button class="btn_latest">Latest</button>
                            <div class="date_div">{{ story.date }}</div>
                            <div>
                                <svg style="margin-left: 75px;" xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 46 47" fill="none">
  <path d="M25.3664 10.0539C25.2996 10.1207 25.2466 10.2 25.2104 10.2872C25.1742 10.3745 25.1556 10.468 25.1556 10.5625C25.1556 10.6569 25.1742 10.7505 25.2104 10.8377C25.2466 10.925 25.2996 11.0042 25.3664 11.071L37.0766 22.7812H7.18742C6.9968 22.7812 6.81398 22.8569 6.67919 22.9917C6.5444 23.1265 6.46867 23.3093 6.46867 23.5C6.46867 23.6906 6.5444 23.8734 6.67919 24.0082C6.81398 24.143 6.9968 24.2187 7.18742 24.2187H37.0766L25.3664 35.929C25.2996 35.9957 25.2467 36.075 25.2105 36.1623C25.1744 36.2495 25.1558 36.343 25.1558 36.4375C25.1558 36.5319 25.1744 36.6254 25.2105 36.7127C25.2467 36.7999 25.2996 36.8792 25.3664 36.946C25.4332 37.0128 25.5125 37.0657 25.5997 37.1019C25.687 37.138 25.7805 37.1566 25.8749 37.1566C25.9694 37.1566 26.0629 37.138 26.1501 37.1019C26.2374 37.0657 26.3167 37.0128 26.3834 36.946L39.3209 24.0085C39.3878 23.9417 39.4408 23.8625 39.4769 23.7752C39.5131 23.688 39.5317 23.5944 39.5317 23.5C39.5317 23.4055 39.5131 23.312 39.4769 23.2247C39.4408 23.1375 39.3878 23.0582 39.3209 22.9915L26.3834 10.0539C26.3167 9.98712 26.2374 9.93411 26.1502 9.89794C26.0629 9.86177 25.9694 9.84315 25.8749 9.84315C25.7805 9.84315 25.6869 9.86177 25.5997 9.89794C25.5124 9.93411 25.4332 9.98712 25.3664 10.0539Z" fill="#283618"/>
</svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
             <!--  -->
            <div class="story_header">Breaking Stories</div>
        </div>
        <!--  -->

        <!-- about-us -->
        <div class="about_div">
            <div class="head_prjct">
                <div>
                <div class="txt_projects">Projects</div>
                <img  src="/wss_img/Glow.png" alt="">
                </div>
                <router-link :to="{ name: 'projects_details'}"><div class="txt_view_more">View More</div></router-link>
            </div>

            <div class="projct_contnr">
            <router-link v-for="project in projectList"  :to="{ name: 'project', params: { id: project.id }}">
            <div class="projct_pstr_div">
                <div class="poster_div">
                    <img :src="project.photo" alt="Project Photo">
                    <div class="postr_dtls">
                        <div class="pstr_txt">{{ project.title }}</div>
                        <div class="pstr_date">{{ project.date }}</div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>

            <!-- mob-version-poster -->
            <div class="projct_pstr_div_mob">
                <div class="poster_div">
                    <img src="/wss_img/prjct.png" alt="">
                    <div class="postr_dtls">
                        <div class="pstr_txt">WSSS IS FORMING 200 JOINT <br> LIABILITY GROUPS (JLGS)..</div>
                        <div class="pstr_date">2022-01-25</div>
                    </div>
                </div>
                <!-- 2 -->
                <div class="poster_div2">
                    <img class="" src="/wss_img/prjct.png" alt="">
                    <div class="postr_dtls">
                        <div class="pstr_txt">WSSS IS FORMING 200 JOINT <br> LIABILITY GROUPS (JLGS)..</div>
                        <div class="pstr_date">2022-01-25</div>
                    </div>
                </div>
                <!-- 3 -->
                <div class="poster_div2">
                    <img class="" src="/wss_img/prjct.png" alt="">
                    <div class="postr_dtls">
                        <div class="pstr_txt">WSSS IS FORMING 200 JOINT <br> LIABILITY GROUPS (JLGS)..</div>
                        <div class="pstr_date">2022-01-25</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- updates-div -->
        <div class="update_div">
            <div class="updte_txt_div">
                <div class="txt_updates_evnts">Updates & Events</div>
                <router-link :to="{ name: 'events_details'}"><div class="txt_view_more">View More</div></router-link>
            </div>

            <div class="projct_contnr">
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
        </div>
                <!-- mob-mission -->
                <div class="vision_mob_div">
            <div class="mob_visin_div1">
                <div class="mob_dtls_div">
                    <div>(1)</div>
                    <div class="mob_txt_visin">Our vision</div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
  <path d="M22.0417 23.9583H11.5V22.0417H22.0417V11.5H23.9583V22.0417H34.5V23.9583H23.9583V34.5H22.0417V23.9583Z" fill="#283618"/>
</svg>
                </div>
            </div>
            <!-- 2 -->
            <div class="mob_visin_div1_grn">
                <div class="mob_dtls_div">
                    <div>(1)</div>
                    <div class="mob_txt_visin_grn">Our vision</div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
  <path d="M22.0417 23.9583H11.5V22.0417H22.0417V11.5H23.9583V22.0417H34.5V23.9583H23.9583V34.5H22.0417V23.9583Z" fill="#FEFAE0"/>
</svg>
                </div>
            </div>
            <!-- 3 -->
            <div class="mob_visin_div1">
                <div class="mob_dtls_div">
                    <div>(1)</div>
                    <div class="mob_txt_visin">Our vision</div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
  <path d="M22.0417 23.9583H11.5V22.0417H22.0417V11.5H23.9583V22.0417H34.5V23.9583H23.9583V34.5H22.0417V23.9583Z" fill="#283618"/>
</svg>
                </div>
            </div>
            <!--  -->
                </div>
        <!-- end -of mob-mission -->
       
        <!--  -->

        <!-- mission-vision-div -->
        <div class="mission_vision_div">
            <div class="img_sect_div">
                <div><img src="/wss_img/mission_wsss.png" alt=""></div>
                <div class="txt_mision">The Society has its Vision stated as “Self reliant and vibrant human communities living in a sustainable environment cherishing human
                 values of love, justice, solidarity and human dignity as well as their equity in the social capital ascertained.
                </div>
            </div>
            <!--  -->
            <div class="detail_sect_div">
                <div class="vision_div">
                    <div class="txt_sect">
                        <div class="si_no">(1)</div>
                        <div class="visn_txt_dtls">
                            <div class="vision_1">Our vision</div>
                            <div class="vision_2">
                                Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 2 -->
                <div class="vision_div">
                    <div class="txt_sect">
                        <div class="si_no">(2)</div>
                        <div class="visn_txt_dtls">
                            <div class="vision_1">Our mission</div>
                            <div class="vision_2">
                                Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 3 -->
                <div class="vision_div">
                    <div class="txt_sect">
                        <div class="si_no">(3)</div>
                        <div class="visn_txt_dtls">
                            <div class="vision_1">Our objective</div>
                            <div class="vision_2">
                                Society's Vision: Self-reliant, vibrant, just, dignified human communities sustainably living in love, solidarity, and equity.
                            </div>
                        </div>
                    </div>
                </div>
                <!--  -->
            </div>
        </div>
        <!-- mob-version-donate -->
        <img class="mob_dnte_gif" src="/wss_img/wass_gif2.gif" alt="">

        <!-- end -of mob-donate -->

        <!-- donate-sect -->

        <div class="donate_gif_div">
            <img class="dnate_gif" src="/wss_img/wass_gif2.gif" alt="">
        </div>
        <div class="main_rect_2"></div>
        <div class="gif2_txt_div">
            <div class="gif2_main_txt">Let’s end poverty. 
                 For good.</div><br>
            <div class="gif2_txt2">By supporting our work, you are helping women and their families access <br> opportunity and build financial security.</div>
            <button class="btn_donate_gif">Donate</button>
        </div>
       <!-- footer -->

       <!-- mob_footer -->
       <div class="mob_footer_div">
        <div class="mob_sect1">
            <div class="mob_txt1">Get in touch</div>
            <div class="mob_txt2">Wayanad Social Service Society (WSSS) is a registered 
                charitable society and a secular voluntary organization 
                established in the year 1974. It is the official social 
                service organization of the Catholic Diocese of Mananthavady.
            </div>
        </div>
       
        <div class="mob_sect2">
            <div class="mob_txt_addrs">Address</div>
            <div class="mob_txt_addrs_2">WSSS P.B.No.16, Mananthavady-670645, Wayanad,Kerala,India</div>
        </div>

        <div class="mob_lst_sect_div">
            <div class="last_sect1">
                <img class="mob_footer_img" src="/wss_img/Logo-white.png" alt="">
                <div class="mob_txt_sect1_ftr">
                    <div class="last_sect_txt2">Would you like to speak to us? We’re listening.</div>
                    <div class="mob_contct_div">
                        <div class="mob_cntct_btn">Contact us
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <path d="M9.9258 4.23836C9.89965 4.26448 9.8789 4.2955 9.86475 4.32964C9.85059 4.36378 9.84331 4.40038 9.84331 4.43734C9.84331 4.4743 9.85059 4.5109 9.86475 4.54505C9.8789 4.57919 9.89965 4.61021 9.9258 4.63633L14.5081 9.21859H2.81228C2.73769 9.21859 2.66615 9.24822 2.61341 9.30097C2.56066 9.35371 2.53103 9.42525 2.53103 9.49984C2.53103 9.57444 2.56066 9.64597 2.61341 9.69872C2.66615 9.75146 2.73769 9.78109 2.81228 9.78109H14.5081L9.9258 14.3634C9.89966 14.3895 9.87894 14.4205 9.86479 14.4547C9.85065 14.4888 9.84337 14.5254 9.84337 14.5623C9.84337 14.5993 9.85065 14.6359 9.86479 14.67C9.87894 14.7042 9.89966 14.7352 9.9258 14.7613C9.95193 14.7875 9.98295 14.8082 10.0171 14.8223C10.0512 14.8365 10.0878 14.8438 10.1248 14.8438C10.1617 14.8438 10.1983 14.8365 10.2325 14.8223C10.2666 14.8082 10.2976 14.7875 10.3238 14.7613L15.3863 9.69883C15.4124 9.67271 15.4332 9.64169 15.4473 9.60755C15.4615 9.5734 15.4688 9.5368 15.4688 9.49984C15.4688 9.46288 15.4615 9.42628 15.4473 9.39214C15.4332 9.358 15.4124 9.32698 15.3863 9.30086L10.3238 4.23836C10.2976 4.21221 10.2666 4.19146 10.2325 4.17731C10.1983 4.16316 10.1617 4.15587 10.1248 4.15587C10.0878 4.15587 10.0512 4.16316 10.0171 4.17731C9.98293 4.19146 9.95192 4.21221 9.9258 4.23836Z" fill="#FEFAE0"/>
</svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="last_sect2">
                <div class="mob_prvcy_plcy_div">
                    <div class="mob_cpy_txt">Copyright 2023 WSSS LTD. All rights reserved.</div>
                    <div class="mob_prvcy_txt">Privacy and policy  •  Terms and conditions</div>
                </div>

                <div class="mob_sc_media_div">
                    <img class="mob_sc_media" src="/wss_img/ri_linkedin-fill.png" alt="">
                    <img class="mob_sc_media" src="/wss_img/ic_baseline-facebook.png" alt="">
                    <img class="mob_sc_media" src="/wss_img/mdi_instagram.png" alt="">
                    <img class="mob_sc_media" src="/wss_img/pajamas_twitter.png" alt="">
                </div>
            </div>
        </div>
       </div>


    <!-- end -of mob-footer -->

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
            show_sidebar: false,
            menuItems: [
        "Home",
        "Project",
        "About us",
        "Awards",
        "Gallery",
        "Activities",
        "Empty",
      ],
      hoveredItem: null,
      storyList : [],
      projectList : [],
      eventList : [],
      bannerList : [],

           
        }
      },
      mounted(){
        this.fetchStory();
        this.fetchProjects();
        this.fetchEvents();
        this.fetchBanners();
      },
      methods: {
        async fetchStory() {
        try {
          const response = await axios.get('http://api.wsss.capcee.com/api/adminstory/');
          this.storyList = response.data;
        } catch (error) {
          console.error('Error fetching story data:', error);
        }
      },
      async fetchProjects() {
    try {
        const response = await axios.get('http://api.wsss.capcee.com/api/adminproject/');
        this.projectList = response.data;
    } catch (error) {
        console.error('Error fetching project data:', error);
    }
    },
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
  @import './style/homestyle.css';
  </style>
  
  