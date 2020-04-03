import React from 'react';


class searchCorona extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            coronaResults : [],
            searchResults : ""
        }
        
    }

    componentDidMount = (params) => {
        let url = 'https://corona.lmao.ninja/states';
        fetch(url)
            .then(response => {
                return response.json()
                
            })
            
            .then(data => {
                this.setState({
                    coronaResults : data
                })
            })
    }
    handleChange = (e) => {
        this.setState({
            searchResults : e.target.value
        })
    }
    
    
    render() {
        let {coronaResults, searchResults} = this.state;

        let filteredData = coronaResults.filter((data, index)=>{
            return data.state.toLowerCase().includes(searchResults.toLowerCase())
        })
        
        let stateList = filteredData.map((data, index)=>{
            return <li>
                        <h4>{data.state}</h4><br/>
                        <div>Number of Cases: {data.cases}</div>
                        <div>Number of Today's Cases: {data.todayCases}</div>
                        <div>Number of Deaths: {data.deaths}</div>
                        <div>Number of Today's Deaths: {data.todayDeaths}</div>
                        <div>Number of Active Cases: {data.active}</div>
                        <div><b>Percentage of Deaths: {Math.round(data.todayCases / data.todayDeaths)}% </b></div>
                </li>
        })
        
        return (
            <>
                <input type="text" onChange={this.handleChange}/>
                <ul>
                    {stateList}
                </ul>
            </>
        );
    }
}




export default searchCorona
