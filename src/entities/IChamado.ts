export interface IChamado {
  id: number;
  descricao: string;
  grau_urgencia: string;
  setor_solicitante_id: number;
  setor_manutencao_id: number;
  gestor_id: number;
  tecnico_id: number;
  solicitante_id: number;
  status: string;
  custo: string;
  imagem: string;
  data_abertura: string;
  data_fechamento: string | null;
  data_cancelamento: string | null;
}
