import React from 'react'

import { useState } from "react";


const EditProfile = () => {


    const [file, setFile] = useState('');

  return (
    <div id='editProfile'>
      
      <div>
            <div >
                <img src=
                {file ? URL.createObjectURL(file) : ""} alt="NO IMAGE" />
            </div>
        </div>

        <div >
            <form>
                <div >
                    <p>Choose File:</p>
                    <label htmlFor="file">
                    <img src={choose_file} alt="Choose_file" className="icon" />
                    </label>
                    <input style={{display:'none'}} onChange={e=>setFile(e.target.files[0])} type="file" name="" id="file" />
                </div>
            </form>
        </div>
    </div>
  )
}


export default EditProfile
