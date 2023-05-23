import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormComprador extends React.Component{

	state = {

		nome: null,
		enderecoComercial: null,
		enderecoResidencial: null,
		enderecoResidencial: null,
		trabahoHomeOffice: null,
		qtdComprasMediasMes: null,
		contratadoEm: null
	}
	salvar = () => {

		let compradorRequest = {

			nome: this.state.nome,
			enderecoComercial: this.state.enderecoComercial,
			enderecoResidencial: this.state.enderecoResidencial,
			trabahoHomeOffice: this.state.trabahoHomeOffice,
			qtdComprasMediasMes: this.state.qtdComprasMediasMes,
			contratadoEm: this.state.contratadoEm
		}
	
		axios.post("http://localhost:8082/api/comprador", compradorRequest)
		.then((response) => {
			console.log('Comprador cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um comprador.')
		})
	}

	render(){

        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Comprador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Nome:'
										maxLength="100"
										placeholder="Rafael"
										value={this.state.nome}
			                           onChange={e => this.setState({nome: e.target.value})}
									/>

									<Form.Input
                                        required
										fluid
										label='enderecoComercial:'>
										<InputMask 
										value={this.state.enderecoComercial}
										onChange={e => this.setState({enderecoComercial: e.target.value})} 
										/> 
									</Form.Input>

								</Form.Group>
								
								<Form.Group>

									<Form.Input
									    required
										fluid
										label='enderecoResidencial:'
                                        width={6}>
										<InputMask 
										value={this.state.enderecoResidencial}
										onChange={e => this.setState({enderecoResidencial: e.target.value})} 
										/> 
									</Form.Input>

									<Form.Input
									    required
										fluid
										label='comissao:'
                                        width={6}>
										<InputMask 
										mask="9.9" 
										value={this.state.comissao}
										onChange={e => this.setState({comissao: e.target.value})} 
										/> 
									</Form.Input>

									<Form.Input
									    required
										fluid
										label='qtdComprasMediasMes:'
                                        width={6}>
										<InputMask 
										mask="99" 
										placeholder="000"
										value={this.state.qtdComprasMediasMes}
										onChange={e => this.setState({qtdComprasMediasMes: e.target.value})} 
										/> 
									</Form.Input>

									

									<Form.Input
									    required
                                        fluid
                                        label='Contrado Em:'
                                        width={6}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
                                        	value={this.state.contratadoEm}
										onChange={e => this.setState({contratadoEm: e.target.value})} 
                                        /> 
                                    </Form.Input>

								</Form.Group>

								<Form.Group inline>

                               <label>Tabalha em Home Office? </label>
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

								<Link to={'/list-comprador'}>
								<Button
                                  inverted
                                  circular
                                  icon
                                  labelPosition='left'
                                  color='orange'
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

export default FormComprador;