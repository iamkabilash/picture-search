import axios from "axios";

const searchImages = async(term) => {
    const response =  await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID AodnPcSXjK0TfPX7tYJkkbUYGXQLaGmIgOXzbP_d4ak"
        },
        params: {
            query: term
        }
    });
    console.log(response.data.results);
    return response.data.results;
}

export default searchImages;