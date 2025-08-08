import './Collaborator.css';

const Collaborator = ({name, image, position, background}) => {
    return (
        <div className='collaborator'>
            <div className='header' style={{ backgroundColor: background }}>
                <img src={image} alt={name} />
            </div>

            <div className='content'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Collaborator;