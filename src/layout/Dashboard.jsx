import React from 'react'
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
                    <JobAdsActivatedAllsList/>
                </GridRow>


            </Grid>


            
            
        </div>
    )
}
