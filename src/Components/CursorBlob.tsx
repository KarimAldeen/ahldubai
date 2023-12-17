import React, { useEffect } from 'react';

const CursorBlob = () => {
    
    useEffect(() => {
        const blob = document.getElementById('Blob');
        const blob3 = document.getElementById('Blob3');

    const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    if(blob){

        blob.style.top =`${clientY+ scrollTop}px` ;
        blob.style.left =`${clientX +scrollLeft}px` ;
        blob.style.zIndex ="9999999999"

    }
    blob3 && blob3.animate(
        {
            top: `${clientY + scrollTop}px`,
            left: `${clientX + scrollLeft}px`,
        },
        { duration: 6000, fill: "forwards" }
    );
};

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <>
    
    <div id='Blob' className='Blob2'></div>
    <div id='Blob3' className='Blob3'></div>
    </>;
};

export default CursorBlob;