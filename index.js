const baseUrl = "https://restogjavadr20230327122701.azurewebsites.net/api/Records"

Vue.createApp({
    data(){
        return{
            Records: [],
            artistToGetBy: "",
            titleToGetBy: "",
        }
    },
    methods: {
        getAllRecords(){
            this.helperGetAndShow(baseUrl)
        },
        getByArtist(artist){
            const url = baseUrl +"?artist=" + artist
            this.helperGetAndShow(url)
        },
        getByTitle(title){
            const url = baseUrl +"?title=" + title
            this.helperGetAndShow(url)
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