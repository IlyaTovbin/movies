const Title = (props) => {
    return(
        <div>
            <h1 className={ props.class ?? '' }>{props.title}</h1>
        </div>
    )
}

export default Title;