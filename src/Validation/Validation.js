import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text long enough'

    if (props.inputLength < 5) {
        validationMessage = 'Text too short'
    }
    return (
        <div>

                <p>{validationMessage}</p>

            {/* { the below is terniary example to achieve same as above. 
                props.inputLength > 5 ? 
                    <p>Text long enough!</p> :
                    <p>Text too short!</p>
            } */}
        </div>
    )
}


export default validation