import axios from "axios"

export default class SchoolService{
    getSchools(){
        return axios.get("")
    }

    addSchool(school){
        return axios.post("", school)
    }
}