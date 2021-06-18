import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

import { Funcionario } from "./funcionario/Funcionario.js";
import { Diretor } from "./funcionario/Diretor.js";
import { Gerente } from "./funcionario/Gerente.js";
import { SistemaAutenticacao } from "./funcionario/SistemaAutenticacao.js";

const cliente1 = new Cliente("Gian", 333222111);

const contaCorrente = new ContaCorrente( cliente1, 711);
const contaPoupanca = new ContaPoupanca(150, cliente1, 711);
const contaSalario = new ContaSalario(cliente1)

const diretor = new Diretor("GiGiCo", 222444666, 8000)
diretor.cadastraSenha("123456") 
const gerente = new Gerente("Pipo", 444222666, 4000)
gerente.cadastraSenha("654321") 


const DiretorEstaLogado = SistemaAutenticacao.login(diretor, "123456")
const GerenteEstaLogado = SistemaAutenticacao.login(gerente, "5846")
console.log(DiretorEstaLogado)
console.log(GerenteEstaLogado)