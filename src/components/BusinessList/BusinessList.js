import React from 'react';
import '../BusinessList/BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map((businessP)=>{
                        return <Business business={businessP}/>
                })
                }
            </div>
        );
    }
}

export default BusinessList;