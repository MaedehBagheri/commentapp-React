import http from "./httpService";

export function getAllComments() {
  console.log(http.get("/comments"), "comments");
  return http.get("/comments");
}