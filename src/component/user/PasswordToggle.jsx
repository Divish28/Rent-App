import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faLock,faEnvelope ,faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faEnvelope, faLock,faEye,faEyeSlash)
const PasswordToggle = () => {
    const[validate,setValidate]=useState(false)
    const Icon =""
  return (
    <div>
        
    </div>
  )
}
export default PasswordToggle