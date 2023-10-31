<template>
    <div class="failed_main">
        <div class="failed_img_div">
            <img src="/lead_finder/close-circle-fill.png" alt="">
        </div>
        <div class="payment_fail_dtls">
            <div class="fail_txt1">Payment Failed</div>
            <div class="fail_txt2">We can’t process your payment. Check your <br> internet connection and try again</div>
        </div>
        <div class="starter_plan_box">
            <div class="box1">
                <div class="txt_strter">Starter</div>
                <div> <span>$9 USD</span><span class="txt_prmnth"> Per month</span></div>
                <div class="plan_limt">2500 leads limit</div>
            </div>
            <button class="slctd_plan">Selected Plan</button>
        </div>

        <div class="tryagn_cancel_box">
            <button class="btn_tryagain">Try Again</button>
            <router-link :to="{ name: 'account'}">   <div class="cancel_div">Cancel</div> </router-link>
        </div>
    </div>
</template>

<style>
@import './style/failedstyle.css';
</style>