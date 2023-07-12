import axios from 'axios';
// categories
// Latest
// Now Playing
// Popular
// Top Rated
// Upcoming

export const categoryMovies = async (API_URL) =>{
    try{
        let response = await axios.get(API_URL);
        return response.data;
    }catch(error){
        console.log("Error getting categoryAPI", error.message); 
        return error.response.data;
    }
}
