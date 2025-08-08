import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
    const css = { backgroundColor: props.secondaryColor }

    return (
        (props.collaborators.length > 0) ? <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(colaborator => <Collaborator background={props.primaryColor} key={colaborator.name} image={colaborator.image} name={colaborator.name} position={colaborator.position} />)}
            </div>
        </section> : ''
    )
}

export default Team