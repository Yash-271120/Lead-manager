import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchLeads, deleteLead } from "../../features/leadsSlice";

const Leads = () => {
  const dispatch = useDispatch();
  const leads = useSelector((state) => state.leads.leads);
  useEffect(() => {
    dispatch(fetchLeads());
  }, []);

  const deleteLeadHandler = (id) => {
    dispatch(deleteLead(id));
  };

  return (
    <>
      <h2>Leads</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {leads &&
            leads.map((lead) => {
              return (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteLeadHandler(lead.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Leads;
