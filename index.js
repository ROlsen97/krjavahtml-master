const baseUrl = "https://restogjavadr20230327122701.azurewebsites.net/api/Records"

Vue.createApp({
    data(){
        return{
            Records: []
        }
    },
    methods: {
        getAllRecords(){
            this.helperGetAndShow(baseUrl)
        },
        getByArtist(){
            
        },
        async helperGetAndShow(baseUrl){
            try {
                const response = await axios.get(baseUrl)
                this.Records = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        }
    }



}).mount("#app")