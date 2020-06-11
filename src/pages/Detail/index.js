import React, {useEffect, useState} from 'react'

import {doGet} from '../../helper/ApiHelper';
import {useParams} from 'react-router-dom'

const Detail = () => {
    const {id} = useParams();

    const [person, setPerson] = useState(null);

    useEffect(() => {
        doGet(`/people/${id}`).then(setPerson)
    }, [id])

    if(!person){ 
        return <h1>Loadin...</h1>
    }

    return (
        <h1>{person.name}</h1>
    );
}

export default Detail;