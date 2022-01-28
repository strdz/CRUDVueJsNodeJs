import ReceitaServico from '../../../services/Servico';

export default {
  name: 'ListaReceitaComponente',
  data() {
    return {
      receitas: [],
    };
  },
  mounted() {
    this.listarReceitas();
  },
  methods: {
    async listarReceitas() {
      const response = await ReceitaServico.getReceitas();
      this.receitas = response;
    },

    async removeEmployee(id) {
      this.$swal({
        title: 'Tem certeza que deseja remover a receita?',
        text: 'A receita vai ser removida de vez.',
        icon: 'warning',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok!',
      }).then(async (result) => {
        if (result.value) {
          await ReceitaServico.deletaReceita(id);
          this.$swal('Deleted', 'Successfully deleted', 'success');
          this.listarReceitas();
        } else {
          this.$swal('Cancelled', 'Cancel deletion', 'info');
        }
      });
    },
  },
};
