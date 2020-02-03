import React, { useEffect } from 'react';

const NoticeTest = ({ notice, error, loading })=>{
    //const { userId, id, title, body } = notice;
    const data = JSON.stringify(notice);

    if(loading || !notice){
        return null;
    }

    const { userId, id, title, body } = notice;

    console.log(title);

    return (
        <div>
            {data}
        </div>
    );
}

export default NoticeTest;