import React from 'react';
import DynamicTable from '@atlaskit/dynamic-table';
import { caption, head, rows } from './data/sample-data';


const mWid = {
    width: '1600px',
    marginLeft: '50px'
};

export default class extends React.Component<{}, {}> {
    render() {
        return (
            <div style={mWid}>
                <DynamicTable
                    caption={caption}
                    head={head}
                    rows={rows}
                    rowsPerPage={10}
                    defaultPage={1}
                    isFixedSize
                    defaultSortKey="term"
                    defaultSortOrder="ASC"
                    onSort={() => console.log('onSort')}
                    onSetPage={() => console.log('onSetPage')}
                />
            </div>
        );
    }
}
