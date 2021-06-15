import React from 'react'
import { Route } from 'react-router-dom'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
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
                    <Route  path="/employers" component={EmployersList} />
                    <Route  path="/jobseekers" component={JobSeekersList} />
                    <Route  path="/jobs" component={JobsList} />
                    <Route  path="/jobads" component={JobAdsActivatedAllsList} />
                </GridRow>


            </Grid>


            
            
        </div>
    )
}
