import axios from "axios";

export const getProducts = (callback) => {
    return axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            if (callback) callback(res.data);
            return res.data;
        })
        .catch((err) => {
            if (callback) callback(null, err);
            return Promise.reject(err);
        });
};

export const getDetailProducts = (id, callback) => {
    return axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
            if (callback) callback(res.data);
            return res.data;
        })
        .catch((err) => {
            if (callback) callback(null, err);
            return Promise.reject(err);
        });
};
