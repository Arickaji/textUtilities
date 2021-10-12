import React from 'react'

function Alert(props) {

    const Capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show my-2`} role="alert">
            <strong>{Capitalize(props.alert.type)} : </strong>{props.alert.msg}
        </div>
    )
}

export default Alert