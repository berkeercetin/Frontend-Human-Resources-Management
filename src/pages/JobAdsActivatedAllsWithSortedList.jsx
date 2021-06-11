import React, { useState,useEffect } from 'react'
import JobAdvertisementsService from '../services/jobAdvertisementsService'
import { Table,Menu,Icon} from 'semantic-ui-react'


export default function JobAdsActivatedAllsList() {

    const [jobAdsActivatedBySorteds, setJobAdsActivatedBySorted] = useState([])

    useEffect(() => {
        let jobAdsActivatedService = new JobAdvertisementsService()
        jobAdsActivatedService.getJobAdvertisementsWithActiveBySorted().then(result =>  setJobAdsActivatedBySorted(result.data.data))
    }, [])
    return (
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Açık yer sayısı</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>Maaş</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdsActivatedBySorteds.map(jobAdsActivated => (<Table.Row key={jobAdsActivated.id}>
                            <Table.Cell>{jobAdsActivated.job?.title}</Table.Cell>
                            <Table.Cell>{jobAdsActivated.openPosition}</Table.Cell>
                           <Table.Cell>{jobAdsActivated.city?.cityName}</Table.Cell>
                            <Table.Cell>
                                {jobAdsActivated.salary}
            </Table.Cell>
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
