import axios from 'axios';


const getAllGists = async (user) => {
    try {
        const baseUrl = `https://api.github.com/users`;
        const response = await axios.get(`${baseUrl}/${user}/gists`);
        const data = await response.data;
        return data;
    } catch(error){
        console.log("error", error);
    }
}

const getLatestForkers = async (gistId) => {
    try {
        const forkUrl = `https://api.github.com/gists/${gistId}/forks`;
        const response = await axios.get(forkUrl);
        const data = response.splice(3);
        return data;

    }catch(err){
        console.log(err);
    }
}


export { getAllGists, getLatestForkers };