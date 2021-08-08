import React, { Component } from 'react';

class List extends Component {


    countryInfo =(countryDatac)=>{

        return <option>{countryData}</option>
    }
    render() {

        const country = ["BAN","AUS","PAK", "SRI"];

        //method one of rendering child 
        // const myCountry = country.map((countryData) => {
        //     return <option>{countryData}</option>
        // })

        //method 2 of rendering child
        const myCountry = country.map(this.countryInfo);

        return (
            <div>
                <select>
                    {myCountry}
                </select>
            </div>
        );
    }
}

export default List;