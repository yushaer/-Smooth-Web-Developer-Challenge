import { useSelector } from 'react-redux';
import { useState } from 'react';
import Table from '../styles/Table.style';
import { Link } from 'react-router-dom'

/**
 * Component that renders the business table
 * @returns {JSX}    
 */
const Businesses = () => {
    const [loaded, setLoaded] = useState(false);


    const { isLoading, businesses } = useSelector((state) => state);

    if (isLoading) return 'Loading...';// if the state is loading, display loading
    else if (!businesses?.length && !isLoading) return 'No businessess';// if the state is not loading and there are no businesses, display no businesses
    else {
        return (// if the state is not loading and there are businesses, display the businesses
            <>
                <h1>Businesses</h1>
                <div style={{ 'overflowX': 'auto' }} >
                    <Table >



                        <thead>
                            <tr>
                                <th>Business ID</th>
                                <th>Business Name</th>
                                <th>Website</th>
                                <th>Address</th>
                            </tr>

                        </thead>
                        <tbody>
                            {businesses.map((business, idx) => (
                                <tr key={idx}>
                                    <td>{business.id}</td>
                                    <td><Link to={`/business/${business.id}`}>{business.company_name}</Link></td>
                                    <td><a href={business.website}>{business.website}</a></td>
                                    <td>{business.address}</td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </div>
            </>)
    }


}
export default Businesses;