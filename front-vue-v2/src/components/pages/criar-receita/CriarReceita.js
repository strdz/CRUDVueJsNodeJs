import { required } from 'vuelidate/lib/validators';
import ReceitaServico from '../../../services/Servico';

export default {
  name: 'CriarReceitaComponente',
  data() {
    return {
      receitaForm: {
        nome: null,
        tempo_preparo: null,
        porcao: null,
        modo_preparo: null,
        ingredientes: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    receitaForm: {
      nome: { required },
      tempo_preparo: { required },
      porcao: { required },
      modo_preparo: { required },
      ingredientes: { required },
    },
  },
  methods: {
    handleSubmitForm() {},

    async submitNewReceita() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal('Oops!', 'Voce precisa incluir todos os campos', 'error');
          return;
        }

        await ReceitaServico.novaReceita(this.receitaForm);
        this.$swal({
          title: 'Receita cadastrada com sucesso!',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        }).then((data) => {
          this.$router.push({
            name: 'list',
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};

document.getElementById('nomeUsuario').innerHTML = `Olá, ${localStorage.getItem('usuario')}!`;
