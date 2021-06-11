import axios from "axios"

export default class LanguageService{
    getLanguage(){
        return axios.get("")
    }

    addLanguage(language){
        return axios.post("", language)
    }
}