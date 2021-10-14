import React from 'react';
import TableView from '../Table/TableView';
import GridLayout from 'react-grid-layout';
import SideBar from '../SideBar/SideBar';
// Component imports
import './Page1.css'

interface Page1Props {
  jwtToken: string;
}

const layout = [
    {i: 'table1', x: 0, y: 0, w: 1, h: 1, static: true},
    {i: 'table2', x: 1, y: 0, w: 1, h: 1, static: true},
    {i: 'table3', x: 2, y: 0, w: 1, h: 1, static: true},
  ];
  
  
  
  /**
   * Main view for DJGUI App
   */
  export default class Page1 extends React.Component<Page1Props> {
    render() {
      return (
        <div>
          <div className='grid-container'>
            <SideBar />
            <GridLayout className="mygrid" layout={layout} cols={3} rowHeight={400} width={1600}>
              <div key='table1'>
              <TableView token={this.props.jwtToken} route='/query1' tableName='test1'/>
              </div>
              <div key='table2'>
              <TableView token={this.props.jwtToken} route='/query1' tableName='test2'/>
              </div>
              <div key='table3'>
              <TableView token={this.props.jwtToken} route='/query5' tableName='test3'/>
              </div>
            </GridLayout>
          </div>
        </div>
      )
    }
  }