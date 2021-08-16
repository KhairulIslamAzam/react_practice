import React, {useState} from 'react';

const HocksUseState = () => {
    const [name, setName] = useState({
        country: "Bangladesh"
    })

    const onChangeCountry = () => {
        setName({country:"America"})
    }
    return (
        <div>
            <h1>{name.country}</h1>
            <button onClick={()=>setName({country:"Pakistan"})}>change name</button>
            <button onClick={onChangeCountry}>change name</button>
        </div>
    );
};

export default HocksUseState;