import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {SubHeading} from "./sharedStyles";


const Table = ({header = "", columns, rows}) =>
    <div className={"w-full overflow-hidden h-half bg-white rounded-3xl"}>
        <SubHeading className={"text-center dark:text-black"}>
            {header}
        </SubHeading>
        <DataGrid className={"w-full h-full"} rows={rows} columns={columns} pageSize={100}/>
    </div>


export default Table