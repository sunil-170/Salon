import React from 'react'

const Book_button = (props) => {
    return (
        <div>
            <a className=' ff_Poppins fw_700 fs_md black button_bg d-inline-block' href="#">
                {props.any_text}
            </a>
        </div>
    )
}

export default Book_button