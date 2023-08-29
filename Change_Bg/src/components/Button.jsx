function Button(props) {
    return (
        <>
            <div className={`bg-${props.color}-300 text-${props.color}-800 px-3 py-1 rounded-md`}>
                <button onClick={props.onClick}>{props.children}</button>
            </div>
        </>
    );
}

export default Button;