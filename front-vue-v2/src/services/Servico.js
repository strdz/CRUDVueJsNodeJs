import Api from './Api';

export default {

  async novaReceita(receita) {
    try {
      const response = await Api().post('/receitas', receita);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async getReceitas() {
    try {
      const response = await Api().get('/receitas');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async getReceitasId(id) {
    try {
      const response = await Api().get(`/receitas/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async atualizaReceita(receita) {
    try {
      const id = receita.id;
      const response = await Api().put(`/receitas/${id}`, receita);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async deletaReceita(id) {
    try {
      const response = await Api().delete(`/receitas/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};
