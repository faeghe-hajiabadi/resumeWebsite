import axios from "axios";

const api = {
    fetchCat: (action) => {
        let url =
            action.order ? `https://api.thecatapi.com/v1/images/search?limit=10&page=` + action.data + `&category_ids=` + action.order
                : `https://api.thecatapi.com/v1/images/search?limit=10&page=` + action.data


        return axios({
            method: "get",
            url:
                url
        });
    }
}
export default api