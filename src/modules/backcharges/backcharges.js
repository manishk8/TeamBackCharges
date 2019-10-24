import React from 'react'
import Table from './table';
import './backcharges.css';

export default function Backcharges() {
    return (
        <div className="inner-content">
            <div className="top-block row">
                <div className="filter-block col-sm-6">
                    <div>Search by</div>
                    <div class="btn-group btn-select">
                        <button type="button" class="btn">ALL</button>
                        <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                            <span class="caret"></span>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">FPO</a>
                            <a class="dropdown-item" href="#">AMOUNT</a>
                        </div>
                    </div>
                    <div className="serach-block">
                        <input class="form-control" type="text" /><img src="/images/icons/search.svg" />
                    </div>
                </div>
                <div className="export-block col-sm-6">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="blueBlock"></div><span>= NEW</span>
                        </div>
                        <div className="col-sm-3">
                            <div className="grayBlock"></div><span>= OLD</span>
                        </div>
                        <div className="col-sm-6 exportBtn">
                            <div className="exportGreen"><img src="/images/icons/export.svg" /></div><span>EXPORT</span>
                        </div>
                    </div>
                </div>
            </div>
            <Table />
        </div>
    )
}
