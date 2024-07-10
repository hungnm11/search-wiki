import React from 'react';

interface ListItemProps {
  id: string;
  label: string;
}

const ListItem: React.FC<ListItemProps> = ({ id, label }) => {
  return (
    <div className='list-item'>
      <div key={id}>
        <a href={id} target='_blank' rel='noreferrer'>
          {label}
        </a>
      </div>
    </div>
  );
};

export default ListItem;
