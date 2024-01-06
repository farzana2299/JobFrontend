import React from 'react'
import LHeader from '../../common/LHeader'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function AppliedJobs() {
    return (
        <div>
            <LHeader></LHeader>
            <div className='pt-5 container'>
            <Link style={{ textDecoration: 'none' }} to={'/user-home'}><i class="fa-solid fa-backward fa-beat-fade"></i> Back to Home</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>TITLE</th>
                            <th>COMAPANY NAME</th>
                            <th>SALARY</th>
                            <th>LOCATION</th>
                            <th>JOB TYPE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default AppliedJobs