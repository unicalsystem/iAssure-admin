import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditAudit() {
  const { id } = useParams();
  const [auditData, setAuditData] = useState({});
  const [cancellationReason, setCancellationReason] = useState('');
  const [updatedDate, setUpdatedDate] = useState('');

  useEffect(() => {
    const dynamicData = [
      {
        auditId: 1,
        location: 'Location 1',
        periodicity: 'Weekly',
        auditDate: '2024-02-29',
        auditor: 'Auditor 1',
        auditee: 'Auditee 1',
        auditStatus: 'Completed'
      },
      {
        auditId: 2,
        location: 'Location 2',
        periodicity: 'Monthly',
        auditDate: '2024-03-15',
        auditor: 'Auditor 2',
        auditee: 'Auditee 2',
        auditStatus: 'In Progress'
      }

    ];


    const foundAudit = dynamicData.find(audit => audit.auditId === parseInt(id));
    if (foundAudit) {
      setAuditData(foundAudit);
    }
  }, [id]);

  const handleReasonChange = (event) => {
    setCancellationReason(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Reason:', cancellationReason);
    console.log('Updated Date:', updatedDate);
  };

  return (
    <div>

      <div>Audit ID: {auditData.auditId}</div>
      <div>Location: {auditData.location}</div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="reason">Reason for Cancellation:</label>
        <textarea id="reason" value={cancellationReason} onChange={handleReasonChange} />

        <label htmlFor="updatedDate">Updated Date:</label>
        <input id="updatedDate" type="date" value={updatedDate} onChange={(e) => setUpdatedDate(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditAudit;
