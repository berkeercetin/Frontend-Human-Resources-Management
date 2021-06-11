import axios from "axios"

export default class JobSeekerGithubAdressService{
    getJobSeekerGithubAdress(){
        return axios.get("")
    }

    addJobSeekerGithubAdress(jobSeekerGithubAdress){
        return axios.post("", jobSeekerGithubAdress)
    }
}
