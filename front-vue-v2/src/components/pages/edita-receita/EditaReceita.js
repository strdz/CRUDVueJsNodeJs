import ReceitaServico from '../../../services/Servico';

export default {
  name: 'EditaReceitaComponente',
  data() {
    return {
      receitaForm: {
      },
    };
  },

  mounted() {
    this.getReceitaId();
  },

  methods: {
    async getReceitaId() {
      const { id } = this.$route.params;
      const response = await ReceitaServico.getReceitasId(id);
      console.log(response);
      this.receitaForm = { ...response };
    },

    async atualizaReceita() {
      await ReceitaServico.atualizaReceita(this.receitaForm);
      this.$swal({
        title: 'Receita updated successfully!',
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
    },
  },
};
