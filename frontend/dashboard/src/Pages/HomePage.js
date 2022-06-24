import React from 'react';
import DisplayCertificates from '../Components/DisplayCertificates/DisplayCertificates';
const HomePage = (props) => {
    return ( 
        <div>
            <DisplayCertificates certificates={props.certificates} />
        </div>
     );
}
 
export default HomePage;