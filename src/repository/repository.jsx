import axios from "axios";

export const baseDomain = "https://jeval.com.au/collections/hair-care/products.json?page=1";

const clinet = axios.create({
  baseURL: baseDomain,
  headers: "Header"
});

export default clinet;
