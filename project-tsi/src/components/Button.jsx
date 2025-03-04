import React from 'react'

const Button = (props) => {
    const {size, color, title} = props;
    const defaultClass = "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2";
    return <div className = {defaultClass + " " + classes.sizes[size] + " "}>Button</div>;
}

export default Button