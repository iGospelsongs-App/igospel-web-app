import React from 'react'

const ErrorTextComp = ({ errorCondition }: { errorCondition: string }) => {
    if (!errorCondition) return null;
    else
        return (
            <div className='font-sf-reg text-red-500 text-sm mt-2 text-left'>
                {errorCondition}
            </div>
        )
}

export default ErrorTextComp