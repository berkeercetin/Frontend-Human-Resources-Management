import React, { useState,useEffect } from 'react'
import JobService from '../services/jobService'
import { Table,Menu,Icon} from 'semantic-ui-react'


export default function JobsList() {

    const [jobs, setjobs] = useState([])

    useEffect(() => {
        let jobsService = new JobService()
        jobsService.getJobs().then(result => setjobs(result.data.data))
    }, [])

    return (
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobs.map(job => (<Table.Row key={job.id}>
                            <Table.Cell>{job.title}</Table.Cell>
                            
                        </Table.Row>))

                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
