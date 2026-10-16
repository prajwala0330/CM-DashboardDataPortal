import React from 'react';
import { clickableProps } from '../Common/keyboard';

/** Sortable projects table of the Nodal Dashboard (nodal-dashboard.component.html). */
const NodalProjectsTable = ({ pagedProjects, sortBy, sortIcon, slNoFor, openProject }) => (
    <div className="cms-table-scroll">
        <table className="cms-table cms-nodal-table">
            <thead>
                <tr>
                    <th style={{ width: '60px' }} className="cms-th-sortable" onClick={() => sortBy('slNo')} {...clickableProps(() => sortBy('slNo'), null)}>
                        Sl.No
                    </th>
                    <th style={{ width: '56px' }}>Logo</th>
                    <th className="cms-th-sortable" onClick={() => sortBy('adminDeptName')} {...clickableProps(() => sortBy('adminDeptName'), null)}>
                        Department <i className={sortIcon('adminDeptName')}></i>
                    </th>
                    <th className="cms-th-sortable" onClick={() => sortBy('nameEn')} {...clickableProps(() => sortBy('nameEn'), null)}>
                        Mission's <i className={sortIcon('nameEn')}></i>
                    </th>
                    <th style={{ width: '130px' }} className="cms-th-sortable" onClick={() => sortBy('status')} {...clickableProps(() => sortBy('status'), null)}>
                        Status <i className={sortIcon('status')}></i>
                    </th>
                    <th style={{ width: '180px' }} className="cms-th-sortable" onClick={() => sortBy('physicalTarget')} {...clickableProps(() => sortBy('physicalTarget'), null)}>
                        Physical Target <i className={sortIcon('physicalTarget')}></i>
                    </th>
                    <th style={{ width: '180px' }} className="cms-th-sortable" onClick={() => sortBy('financialTarget')} {...clickableProps(() => sortBy('financialTarget'), null)}>
                        Financial Target <i className={sortIcon('financialTarget')}></i>
                    </th>
                    <th className="cms-th-actions cms-th-nowrap" style={{ width: '80px' }}> View Details</th>
                </tr>
            </thead>
            <tbody>
                {pagedProjects.map((p, i) => (
                    <tr key={`${p.projectId}-${i}`} className="cms-nodal-table-row" onClick={() => openProject(p.projectId)}>
                        <td className="cms-td-slno">{slNoFor(i)}</td>
                        <td>
                            <div className="cms-card-logo cms-home-table-logo">
                                {p.logo && <img src={'data:image/png;base64,' + p.logo} alt="" />}
                                {!p.logo && <i className="fa fa-university"></i>}
                            </div>
                        </td>
                        <td>{p.adminDeptName}</td>
                        <td>
                            <div className="cms-home-table-title">{p.nameEn}</div>
                            {p.titleEn && <div className="cms-card-tagline">{p.titleEn}</div>}
                        </td>
                        <td>
                            <div className="cms-badge" style={{ background: p.statusMeta.bg, color: p.statusMeta.color }}>
                                <span className="cms-badge-dot" style={{ background: p.statusMeta.color }}></span>
                                {p.statusMeta.label}
                            </div>
                        </td>
                        <td className="cms-target-cell">{p.physicalTarget}</td>
                        <td className="cms-target-cell">{p.financialTarget}</td>
                        <td>
                            <button type="button" className="cms-footer-icon-btn cms-footer-icon-btn-light" title="Open project"
                                onClick={(e) => { e.stopPropagation(); openProject(p.projectId); }}>
                                <i className="fa fa-angle-right"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default NodalProjectsTable;
