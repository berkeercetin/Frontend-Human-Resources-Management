import axios from "axios"

export default class CvService{
    getCvs(){
        return axios.get("")
    }
    getCvsByEmployeeId(jobSeekerId){
        return axios.get("" + jobSeekerId)
    }

    getCvsById(cvId){
        return axios.get("" + cvId)
    }

    addCv(cv){
        return axios.post("", cv)
    }
}