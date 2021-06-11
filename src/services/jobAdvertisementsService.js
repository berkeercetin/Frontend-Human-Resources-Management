import axios from "axios"

export default class JobAdvertisementsService{
    getActivatedJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/activatedall")
    }

    
    getJobAdvertisementsWithActiveBySorted(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getbysorteddate")
    }
    
    getJobAdvertisementsWithCompany(companyName){
        return axios.get("http://localhost:8080/api/jobadvertisements/getbycompanyjobs?companyName="+companyName)
    }
    addJobAdvertisements(jobAdvertisements){
        return axios.post("", jobAdvertisements)
    }
}