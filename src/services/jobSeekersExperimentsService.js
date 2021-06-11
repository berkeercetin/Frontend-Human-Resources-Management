import axios from "axios"

export default class JobSeekersExperimentsService{
    getJobSeekersExperiments(){
        return axios.get("")
    }

    addJobSeekersExperiment(jobSeekersExperiment){
        return axios.post("", jobSeekersExperiment)
    }
}