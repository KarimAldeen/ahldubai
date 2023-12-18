import React from 'react'
import FormQutote from './FormQutote'

const GetQuote = () => {
  return (
    <div className='GetQuote'>
        <div className='GetQuote_Left'>
            <h1>Get A Free Quote</h1>
            <p>
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition
            </p>
           <FormQutote/>
        </div>
        <div className='GetQuote_Right'>
            <img src="https://denticare.bold-themes.com/oscar/wp-content/uploads/sites/15/2020/01/img-oscar-1280x854.jpg" alt="" />
            </div>
    </div>
  )
}

export default GetQuote