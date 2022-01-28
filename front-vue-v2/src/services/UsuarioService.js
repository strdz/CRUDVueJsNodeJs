import swal from 'sweetalert';
import Api from './Api';

export default {

  async loginUser(user) {
    try {
      const response = await Api().post('/login', user);
      const LOGIN = response.data[0].NOME;
      localStorage.setItem('usuario', response.data[0].NOME);

      if (LOGIN) {
        swal({
          title: 'Sucesso!',
          text: 'Usuário(a) logado com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Alguma coisa deu errado aqui!',
        icon: 'error',
      });
      this.$router.push('/');
    }
  },

  async registerNewUser(newUser) {
    try {
      const response = await Api().post('/register', newUser);
      if (response.data) {
        swal({
          title: 'Excelente!',
          text: 'Usuário(a) cadastrado com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Alguma coisa deu errado aqui!',
        icon: 'error',
      });
    }
  },
};
