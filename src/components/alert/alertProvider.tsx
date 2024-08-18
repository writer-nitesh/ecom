'use client'
import useStore from '@/data/store'
import React from 'react'
import Alert from './alert'

export default function AlertProvider() {

    const { alert } = useStore()


    return (
        <div>
            {
                alert && <Alert message={alert.message} type={alert.type} />
            }
        </div>
    )
}
