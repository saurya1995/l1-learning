import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const UserSearch = ({data, userSelected}) => {
    return (
        <Autocomplete
            options={data}
            getOptionLabel={(option) => option.name}
            className={"w-full p-6"}
            renderInput={(params) => <TextField {...params} label="Select User"  />}
            onChange={(event, user) => userSelected(user)}
        />
    );
}

export default UserSearch

