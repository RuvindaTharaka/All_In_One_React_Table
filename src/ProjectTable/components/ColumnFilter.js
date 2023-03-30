import React from 'react';

export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;
    return (
      <div style={{padding:'5px'}} >
          Search: { ' ' }
          <input value={filterValue || ''} onChange={e => setFilter(e.target.value)} style={{padding:'5px',margin:'5px',width: '200px',border:'1px solid grey',borderTop:'0',borderLeft:'0',borderRight:'0'}} />
      </div>
    )
}
