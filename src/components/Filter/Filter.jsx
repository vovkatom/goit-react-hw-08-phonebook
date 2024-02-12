import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selector/selectors';
import { filterOnContact } from 'redux/slise/slise';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <TextField
        type="text"
        size="small"
        margin="normal"
        fullWidth={true}
        value={filter}
        onChange={e => dispatch(filterOnContact(e.currentTarget.value))}
        label="Find contacts by name"
        placeholder="start your search"
        variant="outlined"
      />
    </div>
  );
};

export default Filter;
