import React from 'react'
import { Route } from 'react-router-dom'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import AddJobAdvertisement from '../pages/AddJobAdvertisement'
import EmployersList from '../pages/EmployersList'
import JobAdsActivatedAllsList from '../pages/JobAdsActivatedAllsList'
import JobSeekersList from '../pages/JobSeekersList'
import JobsList from '../pages/JobsList'
import SideBar from './SideBar'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <SideBar/>
                    </GridColumn>

                    <GridColumn width={12}>
                   </GridColumn>
                    <Route  exact path="/employers" component={EmployersList} />
                    <Route  exact path="/jobseekers" component={JobSeekersList} />
                    <Route  exact path="/jobs" component={JobsList} />
                    <Route  exact path="/" component={JobAdsActivatedAllsList} />
                    <Route  exact path="/addjobads" component={AddJobAdvertisement} />
                   
                </GridRow>


            </Grid>


            
            
        </div>
    )
}
