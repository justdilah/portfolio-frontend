export async function getAllProjects() {
    try{
        const response = await fetch('/projects');
        // returns json object
        return await response.json();
    }catch(e) {
        return [];
    }
}


