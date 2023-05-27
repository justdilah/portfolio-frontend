import {baseURL} from "../services/Constants";
export async function getAllProjects() {
    try{
        const response = await fetch(baseURL + '/projects');
        // returns json object
        return await response.json();
    }catch(e) {
        return [];
    }
}


