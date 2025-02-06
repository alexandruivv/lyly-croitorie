import React from 'react';

interface Props {
    label: string;
    placeholder?: string;
    type: FormFieldType,
    id: string;
}

export enum FormFieldType {
    TEXT, TEXTAREA
}

const FormField = ({label, placeholder, type, id}: Props) => {
    return (
        <p className='flex flex-col gap-2'>
            <label className='px-2 text-sm md:text-xl' htmlFor={id}>{label}</label>
            {type === FormFieldType.TEXT && (
                <input
                    id={id}
                    className='bg-peach w-full rounded shadow-lg p-2 lg:py-5 lg:px-5 text-sm md:text-xl'
                    type='text'
                    placeholder={placeholder}/>
            )}
            {type === FormFieldType.TEXTAREA && (
                <textarea
                    id={id}
                    className='bg-peach w-full rounded shadow-lg p-2 lg:py-5 lg:px-5 text-sm md:text-xl'
                    placeholder={placeholder}/>
            )}

        </p>
    );
};

export default FormField;