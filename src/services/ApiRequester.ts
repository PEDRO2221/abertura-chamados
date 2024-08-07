import axios, { isCancel, AxiosError, AxiosInstance } from "axios";

export default class ApiRequester {
  protected instance : AxiosInstance;

  constructor() {
    const token = sessionStorage.getItem('authToken');
    this.instance = axios.create({
      baseURL: "http://adbchamados.localhost",
      timeout: 30000,
      headers: { "Authorization": `Bearer ${token}` },
    });

  }

  // async autenticar(email:string, senha:string){
  //   return await this.instance.post("/api/autentica/entrar", {
  //     email,
  //     password:senha,  
  //   })
  // }
  async autenticar(email:string, senha:string) {

        // Faz a requisição POST para o servidor com o email e senha
        const response = await this.instance.post("/api/autentica/entrar", {
            email: email,
            password: senha,
        });

        // Supondo que o token está no corpo da resposta
        const token = response.data.token;

        // Armazena o token no sessionStorage
        sessionStorage.setItem('authToken', token);

        // Retorna o token
        return token;
}
async listartodos() {
   return this.instance.get("/api/chamados");
}
  
  async sair(){
    await this.instance.post("/api/autentica/sair");
    sessionStorage.setItem('authToken', "");
  }
}
