import React, {useState} from 'react';
import { VscSearch } from 'react-icons/vsc';
import { useAsyncDebounce } from 'react-table';

export const GlobalFilter = ({ filter, setFilter }) => {
    const [ value, setValue ] = useState(filter);
    const onChange = useAsyncDebounce(value => {
        setFilter (value || undefined)
    },300)
    return (
      <div style={{padding:'10px'}} >
          Search: { ' ' }
          <input value={value || ''} onChange={e => {setValue(e.target.value); onChange(e.target.value);}} style={{padding:'10px',margin:'10px',width: '200px',border:'1px solid grey',borderTop:'0',borderLeft:'0',borderRight:'0'}} />
          <VscSearch/>
      </div>
    )
}
