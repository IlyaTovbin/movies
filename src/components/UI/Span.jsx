const Span = props => {
    const { content, color } = props
    return (
        <span className={color} >{content}</span>
    )
}

export default Span;