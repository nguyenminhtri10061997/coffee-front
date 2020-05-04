import React from "react";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import TableNew from "components/TableNew/TableNew.js";

const dataMenu = [
  {
    _id: '1',
    name: 'name1',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name2',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name3',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name4',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name1',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name2',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name3',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name4',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name1',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name2',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name3',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name4',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name1',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name2',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name3',
    price: 1000,
    state: true
  },
  {
    _id: '1',
    name: 'name4',
    price: 1000,
    state: true
  }
]

const header = [
  {
    name: 'Tên đồ uống',
    col: 'name'
  },
  {
    name: 'Giá',
    col: 'price'
  },
  {
    name: 'Trạng thái',
    col: 'state'
  }
]

export default function TableList() {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <div style={{ height: 620, overflowY: 'auto' }}>
              <TableNew
                data={dataMenu}
                header={header}
              />
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
