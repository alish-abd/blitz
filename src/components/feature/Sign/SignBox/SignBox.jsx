import React, {useState} from 'react'
import { SignIn, SignUp } from '@components/feature'
import './SignBox.scss'


export default function SignBox() {

    const [activeTab, setActiveTab] = useState('signIn');


  return (
    <div className='sign__box'>
            <div className="sign__box-tabs">
                <button onClick={() => setActiveTab('signIn')} className={ `sign__tab ${activeTab === 'signIn' ? 'sign__active' : 'sign__nonactive'}`}>
                    Sign In
                </button>
                <button onClick={() => setActiveTab('signUp')} className={`sign__tab ${activeTab === 'signUp' ? 'sign__active' : 'sign__nonactive'}`}>
                    Sign Up
                </button>
            </div>

            {activeTab === 'signIn' ? <SignIn /> : <SignUp />}

            {/* {activeTab === 'signIn' ? <div></div> : <SignUp />} */}

            
        </div>
  )
}
