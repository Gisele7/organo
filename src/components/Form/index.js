import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import InputText from '../InputText';
import './Form.css';

const Form = (props) => {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onCollaboratorRegistered({
            name,
            position,
            image,
            team
        })
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText
                    required={true}
                    label='Nome'
                    placeholder="Digite seu nome"
                    value={name}
                    onAltered={value => setName(value)}
                />
                <InputText 
                    required={true}
                    label='Cargo'
                    placeholder="Digite seu cargo"
                    value={position}
                    onAltered={value => setPosition(value)}    
                />
                <InputText 
                    label='Imagem'
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    onAltered={value => setImage(value)}    
                />
                <Dropdown 
                    required={true} 
                    label="Time" 
                    itens={props.teams} 
                    value={team}
                    onAltered={value => setTeam(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;