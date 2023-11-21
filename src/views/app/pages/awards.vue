<template>
    <div class="awards_main">
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
        <router-link :to="{ name: 'sidebar'}"> <div class="mob_nav_menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 28 28" fill="none">
  <path d="M3.5 4.66669H24.5V7.00002H3.5V4.66669ZM3.5 12.8334H24.5V15.1667H3.5V12.8334ZM3.5 21H24.5V23.3334H3.5V21Z" fill="#FEFAE0"/>
</svg>
        </div></router-link>
        <!-- end of mob_menu -->
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
            <div class="story_box1">
                <div><img class="story1_img" src="/wss_img/story1.png" alt=""></div>
                <div class="story_dtls">
                    <div class="story_txt1_div">
                        <div class="story_txt1">ASHAKIRANAM DRESS BANK – A <br> PHILANTHROPIC MOVEMENT</div>
                        <div class="posted_dtls">
                            <button class="btn_latest">Latest</button>
                            <div class="date_div">02/03/2023</div>
                            <div>
                                <svg style="margin-left: 75px;" xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 46 47" fill="none">
  <path d="M25.3664 10.0539C25.2996 10.1207 25.2466 10.2 25.2104 10.2872C25.1742 10.3745 25.1556 10.468 25.1556 10.5625C25.1556 10.6569 25.1742 10.7505 25.2104 10.8377C25.2466 10.925 25.2996 11.0042 25.3664 11.071L37.0766 22.7812H7.18742C6.9968 22.7812 6.81398 22.8569 6.67919 22.9917C6.5444 23.1265 6.46867 23.3093 6.46867 23.5C6.46867 23.6906 6.5444 23.8734 6.67919 24.0082C6.81398 24.143 6.9968 24.2187 7.18742 24.2187H37.0766L25.3664 35.929C25.2996 35.9957 25.2467 36.075 25.2105 36.1623C25.1744 36.2495 25.1558 36.343 25.1558 36.4375C25.1558 36.5319 25.1744 36.6254 25.2105 36.7127C25.2467 36.7999 25.2996 36.8792 25.3664 36.946C25.4332 37.0128 25.5125 37.0657 25.5997 37.1019C25.687 37.138 25.7805 37.1566 25.8749 37.1566C25.9694 37.1566 26.0629 37.138 26.1501 37.1019C26.2374 37.0657 26.3167 37.0128 26.3834 36.946L39.3209 24.0085C39.3878 23.9417 39.4408 23.8625 39.4769 23.7752C39.5131 23.688 39.5317 23.5944 39.5317 23.5C39.5317 23.4055 39.5131 23.312 39.4769 23.2247C39.4408 23.1375 39.3878 23.0582 39.3209 22.9915L26.3834 10.0539C26.3167 9.98712 26.2374 9.93411 26.1502 9.89794C26.0629 9.86177 25.9694 9.84315 25.8749 9.84315C25.7805 9.84315 25.6869 9.86177 25.5997 9.89794C25.5124 9.93411 25.4332 9.98712 25.3664 10.0539Z" fill="#283618"/>
</svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 2 -->
            
            <div class="story_box1">
                <div><img class="story1_img" src="/wss_img/story2.png" alt=""></div>
                <div class="story_dtls">
                    <div class="story_txt1_div">
                        <div class="story_txt1">ASHAKIRANAM DRESS BANK – A <br> PHILANTHROPIC MOVEMENT</div>
                        <div class="posted_dtls">
                            <button class="btn_latest">Latest</button>
                            <div class="date_div">02/03/2023</div>
                            <div>
                                <svg style="margin-left: 75px;" xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 46 47" fill="none">
  <path d="M25.3664 10.0539C25.2996 10.1207 25.2466 10.2 25.2104 10.2872C25.1742 10.3745 25.1556 10.468 25.1556 10.5625C25.1556 10.6569 25.1742 10.7505 25.2104 10.8377C25.2466 10.925 25.2996 11.0042 25.3664 11.071L37.0766 22.7812H7.18742C6.9968 22.7812 6.81398 22.8569 6.67919 22.9917C6.5444 23.1265 6.46867 23.3093 6.46867 23.5C6.46867 23.6906 6.5444 23.8734 6.67919 24.0082C6.81398 24.143 6.9968 24.2187 7.18742 24.2187H37.0766L25.3664 35.929C25.2996 35.9957 25.2467 36.075 25.2105 36.1623C25.1744 36.2495 25.1558 36.343 25.1558 36.4375C25.1558 36.5319 25.1744 36.6254 25.2105 36.7127C25.2467 36.7999 25.2996 36.8792 25.3664 36.946C25.4332 37.0128 25.5125 37.0657 25.5997 37.1019C25.687 37.138 25.7805 37.1566 25.8749 37.1566C25.9694 37.1566 26.0629 37.138 26.1501 37.1019C26.2374 37.0657 26.3167 37.0128 26.3834 36.946L39.3209 24.0085C39.3878 23.9417 39.4408 23.8625 39.4769 23.7752C39.5131 23.688 39.5317 23.5944 39.5317 23.5C39.5317 23.4055 39.5131 23.312 39.4769 23.2247C39.4408 23.1375 39.3878 23.0582 39.3209 22.9915L26.3834 10.0539C26.3167 9.98712 26.2374 9.93411 26.1502 9.89794C26.0629 9.86177 25.9694 9.84315 25.8749 9.84315C25.7805 9.84315 25.6869 9.86177 25.5997 9.89794C25.5124 9.93411 25.4332 9.98712 25.3664 10.0539Z" fill="#283618"/>
</svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 3 -->
            <div class="story_box1">
                <div><img class="story1_img" src="/wss_img/story1.png" alt=""></div>
                <div class="story_dtls">
                    <div class="story_txt1_div">
                        <div class="story_txt1">ASHAKIRANAM DRESS BANK – A <br> PHILANTHROPIC MOVEMENT</div>
                        <div class="posted_dtls">
                            <button class="btn_latest">Latest</button>
                            <div class="date_div">02/03/2023</div>
                            <div>
                                <svg style="margin-left: 75px;" xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 46 47" fill="none">
  <path d="M25.3664 10.0539C25.2996 10.1207 25.2466 10.2 25.2104 10.2872C25.1742 10.3745 25.1556 10.468 25.1556 10.5625C25.1556 10.6569 25.1742 10.7505 25.2104 10.8377C25.2466 10.925 25.2996 11.0042 25.3664 11.071L37.0766 22.7812H7.18742C6.9968 22.7812 6.81398 22.8569 6.67919 22.9917C6.5444 23.1265 6.46867 23.3093 6.46867 23.5C6.46867 23.6906 6.5444 23.8734 6.67919 24.0082C6.81398 24.143 6.9968 24.2187 7.18742 24.2187H37.0766L25.3664 35.929C25.2996 35.9957 25.2467 36.075 25.2105 36.1623C25.1744 36.2495 25.1558 36.343 25.1558 36.4375C25.1558 36.5319 25.1744 36.6254 25.2105 36.7127C25.2467 36.7999 25.2996 36.8792 25.3664 36.946C25.4332 37.0128 25.5125 37.0657 25.5997 37.1019C25.687 37.138 25.7805 37.1566 25.8749 37.1566C25.9694 37.1566 26.0629 37.138 26.1501 37.1019C26.2374 37.0657 26.3167 37.0128 26.3834 36.946L39.3209 24.0085C39.3878 23.9417 39.4408 23.8625 39.4769 23.7752C39.5131 23.688 39.5317 23.5944 39.5317 23.5C39.5317 23.4055 39.5131 23.312 39.4769 23.2247C39.4408 23.1375 39.3878 23.0582 39.3209 22.9915L26.3834 10.0539C26.3167 9.98712 26.2374 9.93411 26.1502 9.89794C26.0629 9.86177 25.9694 9.84315 25.8749 9.84315C25.7805 9.84315 25.6869 9.86177 25.5997 9.89794C25.5124 9.93411 25.4332 9.98712 25.3664 10.0539Z" fill="#283618"/>
</svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 4 -->
            <div class="story_box1">
                <div><img class="story1_img" src="/wss_img/story2.png" alt=""></div>
                <div class="story_dtls">
                    <div class="story_txt1_div">
                        <div class="story_txt1">ASHAKIRANAM DRESS BANK – A <br> PHILANTHROPIC MOVEMENT</div>
                        <div class="posted_dtls">
                            <button class="btn_latest">Latest</button>
                            <div class="date_div">02/03/2023</div>
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
        <!-- awards-sect -->

        <div class="awards_div">
            <div class="header_sect">Awards & Recognitions</div>

            <div class="award_dtls_sect_div">
                <div class="award_div1">
                    <div class="img_award"><img src="/wss_img/award x1.png" alt=""></div>
                    <div class="dtl_txt_div">
                        <div class="awrd_txt_1">SPECIAL CONSULTATIVE STATUS FOR WSSS WITH THE UNITED NATIONS  ECONOMIC AND SOCIAL COUNCIL (ECOSOC)</div>
                        <div class="awrd_txt2">The Wayanad Service Society (WSSS), the official social work wing of the Mananthavady Diocese, has been accorded special consultative status with 
                            the United Nations Economic and Social Council (ECOSOC).The recognition was a testimony to the dedicated efforts that the organization has been 
                            making since its inception in 1974.This consultative status will enable the organization to actively engage with ECOSOC and its subsidiary bodies, UN 
                            secretariat, programmes, projects and funds in a number of ways. Wayanad Social Service Society started the process of interaction and procedures 
                            of project application with UN since 2015. It is a great achievement that the organization gained this successful international development platform 
                            which will definitely make conducive atmosphere with the Sustainable Development Goals (SDG 2030).
                        </div>
                    </div>
                </div>
                <!-- 2 -->
                <div class="award_div1">
                    <div class="img_award"><img src="/wss_img/award x1.png" alt=""></div>
                    <div class="dtl_txt_div">
                        <div class="awrd_txt_1">BEST PFA (NABARD WADI PROJCET)</div>
                        <div class="awrd_txt2">Wayanad Social Service Society has been selected as the best Program Facilitating Agency in the State for NABARD Integrated Tribal Development Project (WADI). During the function held at Thiruvanathapuram, Rev.Fr. Jinoj Palathadathil (Associate Director, WSSS) and P.A.Jose (Program Officer, WSSS) were accepted Award from Sri.V.S.Anilkumar, Minister for Agriculture, Kerala State. NABARD is implementing the Integrated Tribal Development Project (WADI) in various districts of Kerala. The project is being implemented by various Program Facilitating Agencies (PFAs).

                        </div>
                    </div>
                </div>
                <!-- 3 -->
                <div class="award_div1">
                    <div class="img_award"><img src="/wss_img/award x1.png" alt=""></div>
                    <div class="dtl_txt_div">
                        <div class="awrd_txt_1">PARISTHITHI MITHRA</div>
                        <div class="awrd_txt2">Paristhithi Mithra is an award instituted by the CEERD, St. Stephen’s College, Uzhavoor every year on June 5th Environment Day. The award is given in recognition of the outstanding contribution towards the promotion of environmental protection, conservation and preservation in the State of Kerala. On this special day Mr.P.A.Jose, Program Officer, WSSS received the Paristhithi Mitra Award from Sri. Mons Joseph MLA at St. Stephen College, Uzhavoor for raising the awareness level and encouraging positive actions for the environment, galvanizing individual actions into a collective power that generates an exponential positive impact. The award marks the importance of World Environment Day on 5 June and celebrates innovative and outstanding environmental programs and initiatives in and around Kerala, as well as the critical work of environmental leaders.
                        </div>
                    </div>
                </div>
                <!-- 4 -->
                <div class="award_div1">
                    <div class="img_award"><img src="/wss_img/award x1.png" alt=""></div>
                    <div class="dtl_txt_div">
                        <div class="awrd_txt_1">SPECIAL APPRECIATION AWARD - 2019</div>
                        <div class="awrd_txt2">WSSS got Special Appreciation award from World Malayalee Association for Environment Conservation Projects. Mr.Pradeep Kumar, WSSS received the Special Appreciation Award from Sri. Pinarai Vijayan, Chief Minister of Kerala
                        </div>
                    </div>
                </div>
                <!--  -->
            </div>
        </div>
        <!-- footer -->

       <!-- mob_footer -->
       <div class="mob_footer_div">
        <div class="mob_sect1">
            <div class="mob_txt1">Get in touch</div>
            <div class="mob_txt2">Wayanad Social Service Society (WSSS) is a registered 
                charitable society and a secular voluntary organization 
                established in the year 1974. It is the official social 
                service organization of the Catholic Diocese of 
                Mananthavady.
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
            <div class="inner_div2">
                <div class="txt_adrss">Address</div>
                <div class="inner_txt4">WSSS P.B.No.16,<br> Mananthavady-670645,<br> Wayanad,Kerala,India</div>
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
        const response = await axios.get('http://127.0.0.1:8000/api/adminstory/');
        this.storyList = response.data;
      } catch (error) {
        console.error('Error fetching story data:', error);
      }
    },
    async fetchProjects() {
  try {
      const response = await axios.get('http://127.0.0.1:8000/api/adminproject/');
      this.projectList = response.data;
  } catch (error) {
      console.error('Error fetching project data:', error);
  }
  },
  async fetchEvents() {
  try {
      const response = await axios.get('http://127.0.0.1:8000/api/adminevent/');
      this.eventList = response.data;
  } catch (error) {
      console.error('Error fetching event data:', error);
  }
  },
  async fetchBanners() {
  try {
      const response = await axios.get('http://127.0.0.1:8000/api/adminbanner/');
      this.bannerList = response.data;
  } catch (error) {
      console.error('Error fetching event data:', error);
  }
  },
},
};
</script>

<style>
@import './style/awardsstyle.css';
</style>