import { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, GridItem } from '../styles/Grid.styled';
/**
 * 
 *  Component that renders the business details
 */
const Businessdetails = () => {
    const { id } = useParams()// get the id from the url
    const businessID = parseInt(id) - 1;// convert the id to a number
    const { isLoading, businesses } = useSelector((state) => state);
    if (isLoading) return 'Loading...';
    else if (!businesses?.length && !isLoading) return 'No businessess';
    else {

        return (
            <>
                <h1>Business Details</h1>
                <Grid>
                    <GridItem>
                        <img src={businesses[businessID].image} alt="" />
                    </GridItem>
                    <GridItem >
                        <p><b>Business Name:</b>{businesses[businessID].company_name}</p>
                        <p><b>Address:</b>{businesses[businessID].address}</p>
                        <p><b>Website:</b>{businesses[businessID].website} </p>
                        <p><b>Hours:</b> {businesses[businessID].hours.map((hour, idx) => (
                            <React.Fragment key={idx}><span key={idx}>{hour.day}: {hour.open} - {hour.close}</span><br></br></React.Fragment>
                        ))

                        }</p>

                    </GridItem>

                </Grid>

            </>
        )
    }


}
export default Businessdetails;