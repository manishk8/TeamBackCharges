import React, { Component } from 'react';
import $ from 'jquery';
import DataTable from 'datatables.net';
import { data } from '../../data';

export default class Table extends Component {
    componentDidMount() {
        $(document).ready(function () {
            // $('#dtBasicExample').DataTable();
            $('.dataTables_length').addClass('bs-select');
        });
    }
    render() {
        console.log("data", data);
        return (<table id="dtBasicExample" className="table table-sm table-responsive-sm" cellSpacing="0" width="100%">
            <thead>
                <tr>
                    <th></th>
                    <th className="th-sm">fpo</th>
                    <th className="th-sm">created</th>
                    <th className="th-sm">amount</th>
                    <th className="th-sm">division</th>
                    <th className="th-sm">address</th>
                    <th className="th-sm">builder</th>
                    <th className="th-sm">reason</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((data, index) =>
                        <tr key={index} >
                            <td className={data.type === "new" ? "newType" : "oldType"}></td>
                            <td className="nowrapText">{data.fpo}</td>
                            <td className="nowrapText">{data.created}</td>
                            <td className="nowrapText">{data.amount}</td>
                            <td className="nowrapText">{data.division}</td>
                            <td className="nowrapText addressWrap">
                                <div>{data.address.addressNo}</div>
                                <div className="overflowText greenText" title={data.address.addressDetail}>{data.address.addressDetail}</div>
                            </td>
                            <td className="nowrapText">
                                <div>{data.builder.name}</div>
                                <div>{data.builder.phone}</div>
                            </td>
                            <td><i className="fas fa-align-left"></i></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        )
    }
}
