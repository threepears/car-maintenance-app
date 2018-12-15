import React from 'react'

const renderUserData = (inputInfo, i) => console.log("index number", i) || ( 
    <React.Fragment key={i}>
      <label>
        {inputInfo.label}
      </label>
      <input type="text" name={inputInfo.name} />
    </React.Fragment>
  )

const inputForm = ({ userCarInfo }) => {

  return (
    <form className='input-form'>
      {userCarInfo.map(renderUserData)}

      <input type="submit" value="Submit" />
    </form>
  )
}

export default inputForm
