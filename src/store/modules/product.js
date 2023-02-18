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
  ADD_PRODUCT(state) {
  }
  // UPDATE_STUFF(state, payload) {
  //   state.staffs = state.staffs.map((x) => {
  //     if (x.id == payload.id) return payload;
  //     else return x;
  //   });
  // },
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
          commit("ADD_PRODUCT");
      })
      .catch(error => {
        console.log(error);
      });
  },

  // updateProduct({commit}, payload) {
  //   axios
  //     .put(`http://localhost:3000/employees/${payload.id}`, payload)
  //     .then((res) => {
  //       commit("UPDATE_STAFF", res.data);
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
