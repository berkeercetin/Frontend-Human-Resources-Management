import axios from "axios"

export default class TechnologyService{
    getTechnologys(){
        return axios.get("")
    }

    addTechnology(technology){
        return axios.post("", technology)
    }
}