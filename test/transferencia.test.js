const request = require ('supertest');
const{expect} = require ('chai')
require ('dotenv').config()
const{obterToken}= require('../helpers/autenticacao')

describe('transferencias', () => {
    describe('POST /transferencias', ()=> {
        it('deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$ 10,00', async() => {
            
            
            const token= await obterToken('julio.lima' , '123456')

                              const resposta = await request (process.env.BASE_URL)
                .post('/transferencias')
                .set('content-type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send({

    contaOrigem: 1,
  contaDestino: 2,
  valor: 11,
  token: ""

                })

                expect(resposta.status).to.equal(201); 

                console.log(resposta.body)
        })
          it('deve retornar falha com 422 quando o valor da transferencia for abaixo de R$ 10,00', async() => {
           const token= await obterToken('julio.lima' , '123456')

                              const resposta = await request (process.env.BASE_URL)
                .post('/transferencias')
                .set('content-type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send({

    contaOrigem: 1,
  contaDestino: 2,
  valor: 7,
  token: ""

                })

                expect(resposta.status).to.equal(422);

        })
    })
    })