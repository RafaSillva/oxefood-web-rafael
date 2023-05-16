import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from "../util/constante";


const ufList = [
	{ key: 'o', text: 'Alagoas', value: 'AL' },
	{ key: 'f', text: 'Paraíba', value: 'PB' },
	{ key: 'm', text: 'Pernambuco', value: 'PE' },
  ]

class FormEntregador extends React.Component{
    
	state = {

		nome: null,
		cpf: null,
        rg:null,
		dataNascimento: null,
		foneCelular: null,
		foneFixo: null,
        qtdEntregasRealizadas:null,
        valorFrete:null,
        enderecoRua:null,
        enderecoNumero:null,
        enderecoBairro:null,
        enderecoCidade:null,
        enderecoCep:null,
        enferecoUf: null,
        enderecoComplemento: null,
        ativo: null
	}

    salvar = () => {

		let EntregadorRequest = {

			nome: this.state.nome,
			cpf: this.state.cpf,
            rg: this.state.rg,
			dataNascimento: this.state.dataNascimento,
			foneCelular: this.state.foneCelular,
			foneFixo: this.state.foneFixo,
            qtdEntregasRealizadas: this.state.qtdEntregasRealizadas,
            valorFrete: this.state.valorFrete,
            enderecoRua: this.state.enderecoRua,
            enderecoNumero:this.state.enderecoNumero,
            enderecoBairro:this.state.enderecoBairro,
            enderecoCidade: this.state.enderecoCidade,
            enderecoCep: this.state.enderecoCep,
            enderecoUf: this.state.enferecoUf,
            enderecoComplemento: this.state.enderecoComplemento,
            ativo: this.state.ativo
		}
	
		axios.post(ENDERECO_API + "api/entregador", EntregadorRequest)
		.then((response) => {
			console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um Entregador.')
		})
	}

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

                                <Form.Input

										required
										fluid
										label='Nome:'
										placeholder="Maria de Lourdes"
										maxLength="100"
										value={this.state.nome}
			                           onChange={e => this.setState({nome: e.target.value})}
									/>

									<Form.Input
									    required
										fluid
										label='CPF:'>
										<InputMask 
										mask="999.999.999-99"
										placeholder="150.456.879-09"
										value={this.state.cpf}
										onChange={e => this.setState({cpf: e.target.value})} 
										/> 
									</Form.Input>
							

                                    <Form.Input
									    required
										fluid
										label='RG:'>
                                      
										<InputMask 
										mask="999.999.999"
										placeholder="123.444-09"
										value={this.state.rg}
										onChange={e => this.setState({rg: e.target.value})} 
										/> 
									</Form.Input>


                                    </Form.Group>
								
                                    <Form.Group>
                                    <Form.Input
									    required
                                        fluid
                                        label='Data de Nascimento:'
                                        width={6}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
                                        	value={this.state.dataNascimento}
										onChange={e => this.setState({dataNascimento: e.target.value})} 
                                        /> 
                                    </Form.Input>

                                    <Form.Input
									    required
										fluid
										label='Fone Celular:'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 
										placeholder="(81) 9 8765-2134"
										value={this.state.foneCelular}
										onChange={e => this.setState({foneCelular: e.target.value})} 
										/> 
									</Form.Input>

									<Form.Input
									    required
										fluid
										label='Fone Fixo:'
                                        width={6}>
										<InputMask 
										mask="(99) 9999.9999" 		
										placeholder="(81) 9 8765-2134"

										value={this.state.foneFixo}
										onChange={e => this.setState({foneFixo: e.target.value})} 
										/> 
									</Form.Input>

                                    </Form.Group>

                                    <Form.Group>

                                    <Form.Input
                                        required
										fluid
										label='Quantidade de Entregas Realizadas:'
                                        width={6}
								        maxLength="3"		
										placeholder="12" 
                                        value={this.state.qtdEntregasRealizadas}
										onChange={e => this.setState({qtdEntregasRealizadas: e.target.value})} 
                                     >
									</Form.Input>

                                    <Form.Input
                                        required
										fluid
										label='Valor do Frete:'
                                        width={6}
                                        maxLength = "3"
										 placeholder="R$ 99.99"
                                        value={this.state.ValorFrete}
										onChange={e => this.setState({ValorFrete: e.target.value})} 
                                      >
									</Form.Input>
                                    
                                    <Form.Input
										required
										fluid
										label='Endereço da Rua:'
										width={6}
										maxLength="100"
										placeholder="Rua  Joaquim"
										value={this.state.enderecoRua}
			                           onChange={e => this.setState({enderecoRua: e.target.value})}
									/>
                            </Form.Group>
                            <Form.Group>
                                    <Form.Input
                                        required
										fluid
										label='Endereço do Número:'
                                        width={6}
										>
										<InputMask 
										mask="99" 
										placeholder="215"
                                        value={this.state.enderecoNumero}
										onChange={e => this.setState({enderecoNumero: e.target.value})} 
                                        /> 
									</Form.Input>

                                    <Form.Input
										required
										fluid
										label='Endereço do Bairro:'
										width={6}
										placeholder="Vila-Rica"
										maxLength="100"
										value={this.state.enderecoBairro}
			                           onChange={e => this.setState({enderecoBairro: e.target.value})}
									/>
                            
                                    <Form.Input
										required
										fluid
										label='Endereço da Cidade:'
										width={6}
										placeholder="Jaboatão"
										maxLength="100"
										value={this.state.enderecoCidade}
			                           onChange={e => this.setState({enderecoCidade: e.target.value})}
									/>
                                </Form.Group>
                                <Form.Group>
                                     <Form.Input
                                        required
										fluid
										label='Endereço do Cep:'
										width={6}
										>
										<InputMask 
										mask="99999-999" 
										placeholder="12344-786"
                                        value={this.state.enderecoCep}
										onChange={e => this.setState({enderecoCep: e.target.value})} 
                                        /> 
									</Form.Input>
                             
                                     
                                    <Form.Input
										required
										fluid
										label='Endereço Uf:'
										width={6}
										maxLength="2"
										placeholder="PE"
										value={this.state.enferecoUf}
			                           onChange={e => this.setState({enferecoUf: e.target.value})}
									/>
										
								<Form.Select
									fluid
									label='UF'
									options={ufList}
									placeholder='Selecione'
									value={this.state.enderecoEstado}
									onChange={(e,{value}) => {
										this.setState({enderecoEstado: value})
									}}
								/>
                                    
                                       <Form.Input
										required
										fluid
										label='Endereço de Complemento:'
										width={6}
										placeholder="Perto do Hospital"
										maxLength="100"
										value={this.state.enderecoComplemento}
			                           onChange={e => this.setState({enderecoComplemento: e.target.value})}
									/>
                            
                                   </Form.Group>
                      
								   <Form.Group inline>

                               <label>Ativo: </label>

                               <Form.Radio
	                            label='Sim'
	                            checked={this.state.ativo}
	                            onChange={e => this.setState({
		                        ativo: true
	                                 })}
                                  />

                              <Form.Radio
	                            label='Não'
	                            checked={!this.state.ativo}
	                            onChange={e => this.setState({
		                        ativo: false
	                                         })}
                                               />
 
                                     </Form.Group> 
								
							

                             
  
                             
							

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

								  <Link to={'/list-entregador'}>
									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
										>
										<Icon name='reply' />
									 	Voltar
									</Button></Link>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}
}

export default FormEntregador;