const baseUrl = "https://restogjavadr20230327122701.azurewebsites.net/api/Records"

Vue.createApp({
    data(){
        return{
            Records: [],
            artistToGetBy: "",
        }
    },
    methods: {
        getAllRecords(){
            this.helperGetAndShow(basesUrl)
        },
<<<<<<< HEAD
        getByArtist(){
            const url = baseUrl + "?vendor=" + vendor
            this.helperGetAndShow(url)
=======
        getByArtist(artist){
            const url = baseUrl +"?artist=" + artist
            this.helperGetAndShow(url)
            
>>>>>>> c7165184a407f87db5d52b91c566f91aeaf5ccc2
        },
        async helperGetAndShow(url){
            try {
                const response = await axios.get(url)
                this.Records = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        }
    }



}).mount("#app")