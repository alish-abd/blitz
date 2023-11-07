import { BtnLoader } from '@components/common';
import { SignBox } from '@components/feature'
import React from 'react'
import { useSelector } from "react-redux";
import './SignPage.scss'

export default function SignPage() {
  const {isAuthLoading} = useSelector(state => state.auth)
  return (
    <div className='sign'>
     {isAuthLoading ? <BtnLoader className={'btn-loader-bg-large'} /> : <SignBox />}
    </div>
  )
}
