<template>
    <div class="filter_main">
        <div class="backgrnd">
        <div class="header_part">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M14.4382 16.0009L21.0379 22.6005L19.1523 24.4861L10.667 16.0009L19.1523 7.51562L21.0379 9.40124L14.4382 16.0009Z" fill="#171717"/>
</svg>
        </div>
        <div class="txt_crm">CRM</div>
        <div class="white_box"></div>
    </div>

    <div class="search_fltr_sect">
        <div class="inpt_box_main">
            <svg class="search_icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.0262 13.8474L18.5951 17.4163L17.4166 18.5948L13.8477 15.0259C12.5644 16.0525 10.937 16.6667 9.16699 16.6667C5.02699 16.6667 1.66699 13.3067 1.66699 9.16669C1.66699 5.02669 5.02699 1.66669 9.16699 1.66669C13.307 1.66669 16.667 5.02669 16.667 9.16669C16.667 10.9367 16.0528 12.5641 15.0262 13.8474ZM13.3542 13.229C14.3732 12.1789 15.0003 10.7464 15.0003 9.16669C15.0003 5.94377 12.3899 3.33335 9.16699 3.33335C5.94408 3.33335 3.33366 5.94377 3.33366 9.16669C3.33366 12.3896 5.94408 15 9.16699 15C10.7467 15 12.1792 14.3729 13.2293 13.3539L13.3542 13.229Z" fill="#171717"/>
</svg><input class="inpt_box" type="text" placeholder="Search leads">
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M18 26H22V24H18V26ZM11 14V16H29V14H11ZM14 21H26V19H14V21Z" fill="black"/>
</svg>
        </div>   
    </div>
    <!--  -->
    <div class="day_dtls_sect">
        <div class="txt_month_day">Wednesday, Oct 04</div>
        <div class="today_box">
            <div class="txt_tdy">Today</div>
        </div>
    </div>
    <!--  -->
    <div class="option_div">
        <div class="sect_one">
            <div class="main_txt">Car wash</div>
            <div class="sub_txt">Octopus Car Spa</div>
        </div>
        <div class="sect_two">
            <div class="txt_new">New</div>
            <div class="txt_time">1  Hour ago</div>
        </div>
    </div>
    <!-- 2 -->
    <div class="option_div">
        <div class="sect_one">
            <div class="main_txt">Car wash</div>
            <div class="sub_txt">JP Car & Bike Wash</div>
        </div>
        <div class="sect_two">
            <div class="txt_new">New</div>
            <div class="txt_time">1  Hour ago</div>
        </div>
    </div>
    <!-- 3 -->
    <div class="option_div">
        <div class="sect_one">
            <div class="main_txt">Car wash</div>
            <div class="sub_txt">Hermosa Car spa & cafe</div>
        </div>
        <div class="sect_two">
            <div class="txt_new">New</div>
            <div class="txt_time">1  Hour ago</div>
        </div>
    </div>
    <!-- 4 -->
    <div class="option_div">
        <div class="sect_one">
            <div class="main_txt">Car wash</div>
            <div class="sub_txt">JP Car & Bike Wash</div>
        </div>
        <div class="sect_two">
            <div class="txt_new">New</div>
            <div class="txt_time">1  Hour ago</div>
        </div>
    </div>
    <!-- & -->
</div>
<div class="flter_box">
    <div class="top_bar"></div>
    <div class="inner_fltr_box">
        <div class="fltr_header">
            <div class="txt_filter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="#171717"/>
</svg>
                Note</div>
            <div class="close_div">
                    <svg class="close_icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <circle cx="18" cy="18" r="18" fill="#D9D9D9"/>
</svg>
<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="black"/>
</svg>   
            </div>
        </div>
        <!--  --> 
        <div class="add_note_box">
            <div><input type="text" placeholder="Add your note"></div>
            <div class="box_head">
                <div class="txt_box_head">Enter Description</div>
            </div>
        </div>      
        <!-- update-btn -->
        <router-link :to="{ name: 'home'}">  <button class="update_btn">Save note</button></router-link>
    </div>
</div>
    </div>
</template>

<style>
@import './style/addnotestyle.css';
</style>