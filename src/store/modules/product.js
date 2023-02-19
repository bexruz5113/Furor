import axios from "axios";

const state = () => ({
  product: [],
});

const getters = {
  product(state) {
    return state.product;
  },
};

const mutations = {
  SET_PRODUCT(state, payload) {
    state.product = payload
  },
  DELETE_PRODUCT(state, id) {
    state.product = state.product.filter((x) => x.id != id);
  },
  ADD_PRODUCT(state, data) {
    console.log(data);
    state.product.push(data);
  },
  UPDATE_PRODUCT(state, payload) {
    state.product = state.product.map((x) => {
        if (x.id == payload.id) return payload;
         else return x;
    });
  },
};
const actions = {
  getProduct({ commit }) {
    axios
      .get("http://94.158.54.194:9092/api/product")
      .then(response => {
        commit("SET_PRODUCT", response.data);
      })
      .catch(error =>{
       console.log(error)
      });
  },

  deleteProduct({ commit }, id) {
    axios
      .delete(`http://94.158.54.194:9092/api/product/${id}`)
      .then(response => {
        commit("DELETE_PRODUCT", id);
      })
      .catch(err => {
        console.log(err);
      });
  },

  addProduct({ commit }, data) {
    axios
      .post("http://94.158.54.194:9092/api/product", data)
      .then(response => {
        console.log(response);
          commit("ADD_PRODUCT", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },

  updateProduct({commit}, payload) {
    console.log(payload.data);
    axios
      .put(`http://94.158.54.194:9092/api/product?id=${payload.id}`, payload.data)
      .then((response) => {
        console.log(response);
        commit("UPDATE_PRODUCT", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
