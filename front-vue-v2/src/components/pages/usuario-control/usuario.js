import swal from 'sweetalert';
import { required } from 'vuelidate/lib/validators';
import LoginService from '@/services/UsuarioService';

const user = localStorage.getItem('usuario');

export default {
  name: 'UsuarioComponent',
  data() {
    return {
      usuario: user,
      loginForm: {
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    loginForm: {
      email: { required },
      password: { required },
    },
  },
  methods: {
    loginSubmitUserForm() {},

    async submitLoginUser() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios!',
            icon: 'error',
          });
          return;
        }

        await LoginService.loginUser(this.loginForm);
        this.$router.push('/');
      } catch (error) {
        swal({
          title: 'Senha Incorreta!',
          text: 'Digite a senha cadastrada!',
          icon: 'error',
        });
      }
    },
  },
};
