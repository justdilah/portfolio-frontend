import React  from 'react';
function Option(props) {
    return (
        <div className="option-div">
            {props.option}
        </div>
    );
}

export default Option;