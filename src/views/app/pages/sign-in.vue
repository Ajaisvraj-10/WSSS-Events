
<template>
  <div class="main-content">
    <main >
      <div class="sign-in">
        <div class="header2">
          <div style="width:50px;">
            <router-link to="/">
              <img src="/images/back.png" width="26">
            </router-link>
          </div>
          <div class="w-100 text-center">
            <h6 class="text-20 m-0 font-weight-600">Sign Up</h6>
          </div>
          <div style="width:50px;">
           
          </div>
        </div>
        <div class="main-body3 p-3">
          <div class="signin-tabs" >
            <div class="signin-tab" @click="crnt_tab='tab1'" :class="crnt_tab=='tab1'?'active_signin_btn':''"><span>1</span></div>
            <div class="signin-tab" @click="crnt_tab='tab2'" :class="crnt_tab=='tab2'?'active_signin_btn':''"><span>2</span></div>
          </div>
          <div class="signin-tab-container" v-if="crnt_tab=='tab1'">
            <div style="height: calc(100vh - 235px);overflow:auto;">
              <div class="mb-4">
                <h6>Sign Up with your Mobile Number</h6>
                <input placeholder="mobile number" class="signin-input">
              </div>
              <div class="mb-4">
                <h6>Sign Up with your Google Account</h6>
                  <div class="signin-input">
                    <i class="fa fa-google"></i>
                    <h6>Sign Up with your Google Account</h6>
                  </div>
              </div>
            </div>
            <div class="signin-footer" @click="crnt_tab='tab2'">
              <button class="next-btn">Next</button>
            </div>
          </div>
          <div class="signin-tab-container" v-if="crnt_tab=='tab2'">
            <div style="height: calc(100vh - 235px);overflow:auto;">
              <div class="mb-4 text-center">
                <h6 class="font-weight-600 text-16 mb-3">Verify it's You</h6>
                <h6 class="text-14">We have sent a 6-digit code to verify your mobile number. please enter the code below.</h6>

                <div class="d-flex align-items-center justify-content-center my-4" style="gap:20px;">
                  <input class="otp-input">
                  <input class="otp-input">
                  <input class="otp-input">
                  <input class="otp-input">
                </div>
                  
                
                <h6 class="text-14">Code willexpire in 00:59 sec</h6>
                <h6 class="text-14">Didn't get the code? <span class="text-danger">Resend</span></h6>


              </div>
            </div>
            <div class="signin-footer" >
              <router-link to="/" class="w-100">
                <button class="next-btn disable-btn">Sign Up</button>
              </router-link>
            </div>

          </div>
        </div>
        
      </div>

   

    </main>






  </div>
</template>
<script>

export default {
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
      crnt_tab:'tab1',
    };
  }
};
</script>
<style scoped>

@import './style/style.css';
  
</style>
<style>
  .sign-in-bottom .number-form input {


    background-color: initial;
}
</style>
