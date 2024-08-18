import React, { useEffect } from 'react';
import { AlertProps } from "@/utils/types";
import useStore from '@/data/store';


const Alert: React.FC<AlertProps> = ({ message, type = 'info' }) => {

    const { setAlert, alert } = useStore()

    const baseStyles = 'p-4 rounded-md shadow-md flex items-center';
    const typeStyles = {
        success: 'bg-black text-white border',
        error: 'bg-red-100 text-red-800',
        warning: 'bg-yellow-100 text-yellow-800',
        info: 'bg-blue-100 text-blue-800',
    };

    function handleClose() {
        setAlert(null)
    }

    // Automatically close the alert after 2 seconds
    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                setAlert(null)
            }, 2000);

            // Clear the timer if the component is unmounted before 2 seconds
            return () => clearTimeout(timer);
        }
    }, [alert]);

    return (
        <div className={`absolute flex items-center top-10 w-full justify-center z-20`}>
            <div className={`${baseStyles} ${typeStyles[type]} w-96 capitalize`}>
                <span className="flex-1 text-xs">{message}</span>
                {alert && (
                    <button
                        onClick={handleClose}
                        className="ml-4 bg-transparent text-xl font-semibold leading-none outline-none"
                    >
                        &times;
                    </button>
                )}
            </div>
        </div>
    );
};

export default Alert;
