/*
Ser autenticável significa ter o método autenticar

ducky type -> Não olha para o tipo, olha para os métodos de cada tipo
*/
export class SistemaAutenticacao{
  static login(autenticavel, senha){
    if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
      return autenticavel.autenticar(senha);
    }
      return false;
  }

  static ehAutenticavel(autenticavel) {
    return "autenticar" in autenticavel && 
      autenticavel.autenticar instanceof Function
  }
}