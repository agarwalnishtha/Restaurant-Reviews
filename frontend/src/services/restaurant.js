//use axios for get,post,put/patch and delete requests
import http from "../http-common";

// inside the below class we are going to make all the functions that are going to make api calls and return the info from the
//api calls 
class RestaurantDataService {
    getAll(page = 0) {
        return http.get(`restaurants?page=${page}`); //this url is added to the base url of the http-commom
      }
    
      get(id) {
        return http.get(`restaurants/id/${id}`);
      }
    
      find(query, by = "name", page = 0) {
        return http.get(`restaurants?${by}=${query}&page=${page}`);
      } 
    
      createReview(data) {
        return http.post("restaurants/review", data);
      }
    
      updateReview(data) {
        return http.put("restaurants/review", data);
      }
    
      deleteReview(id, userId) {
        return http.delete(`restaurants/review?id=${id}`, {data:{user_id: userId}});
      }
    
      getCuisines(id) {
        return http.get(`restaurants/cuisines`);
      }
}

export default new RestaurantDataService();