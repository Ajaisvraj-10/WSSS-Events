<template>
    <div class="project_dtls_main">
        <div class="title_prjcts">Projects</div>
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
    </div>
</template>


<script>
import axios from 'axios';
export default {
data() {
return {

    hideScrollbar: true,
hoveredItem: null,
projectList : [],
}
},

mounted(){
this.fetchProjects();
},

methods: {
    async fetchProjects() {
    try {
    const response = await axios.get('http://127.0.0.1:8000/api/adminproject/');
    this.projectList = response.data;
    } catch (error) {
    console.error('Error fetching project data:', error);
    }
},  

},
};
</script>




<style>
@import './style/projectsdetailsstyle.css';
</style>