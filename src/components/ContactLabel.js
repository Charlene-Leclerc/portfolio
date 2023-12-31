import React from 'react';

export const ContactLabel = ({ htmlFor, label_name, input_type, name, isRequired, placeholder }) => {
    return (
        <>
            {isRequired ?
                <div className="row">
                    <label htmlFor={htmlFor}>{`${label_name}*`}</label>
                    <div>
                        <input className="input-field" type={input_type} name={name} placeholder={placeholder} required />
                    </div>
                </div>
                :
                <div className="row">
                    <label htmlFor={htmlFor}>{label_name}</label>
                    <div>
                        <input className="input-field" type={input_type} name={name} placeholder={placeholder} />
                    </div>
                </div>
            }

        </>
    );
};


export const ContactMessage = () => {
    return (
        <>
            <label htmlFor="message">Message*</label>
            <div>
                <textarea cols="30" rows="10" name="message" placeholder="Vous avez un message? Ecrivez-moi ici!" required></textarea>
            </div>
        </>
    );
};