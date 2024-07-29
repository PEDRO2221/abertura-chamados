import axios, { isCancel, AxiosError, AxiosInstance } from "axios";

export default class ApiRequester {
  protected instance : AxiosInstance;

  constructor() {
    const token = "";
    this.instance = axios.create({
      baseURL: "http://adbchamados.localhost",
      timeout: 30000,
      headers: { "Authorization": `Bearer ${token}` },
    });
  }

  async autenticar(email:string, senha:string){
    return await this.instance.post("/api/autentica/entrar", {
      email,
      password:senha
    })
  }
}
