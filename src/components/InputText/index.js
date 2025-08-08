import './InputText.css';

const InputText = (props) => {



    const onDigited = (event) => {
        props.onAltered(event.target.value)
    }

    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input value={props.value} onChange={onDigited} required={props.required} placeholder={props.placeholder}/>
        </div>
    )

}

export default InputText