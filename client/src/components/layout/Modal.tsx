import React, { useState } from 'react';

const Modal: React.FC<{
    modalText: string;
    actionText: string;
    actionHandler?: () => void;
}> = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,.555)',
                display: !isClicked ? 'block' : 'none',
            }}>
            <div
                style={{
                    position: 'fixed',
                    width: '30%',
                    padding: '30px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    borderRadius: '15px',
                }}>
                <span
                    style={{
                        display: 'block',
                        marginBottom: '20px',
                        fontSize: '17px',
                    }}>
                    {props.modalText}
                </span>
                <button
                    onClick={
                        !props.actionHandler
                            ? () => setIsClicked(true)
                            : props.actionHandler
                    }
                    style={{
                        fontSize: '14px',
                        backgroundColor: '#555',
                        color: '#fff',
                        marginLeft: 'calc(100% - 60px)',
                    }}>
                    {props.actionText}
                </button>
            </div>
        </div>
    );
};

export default Modal;
