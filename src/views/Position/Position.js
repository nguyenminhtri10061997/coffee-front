import React from "react";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import TableDinner from "components/TableDinner/TableDinner.js";

const dataMenu = [
  {
    _id: '1',
    name: 'Bàn 1',
    numberOfPassengers: 1,
    state: true
  },
  {
    _id: '1',
    name: 'Bàn 2',
    numberOfPassengers: 1,
    state: true
  },
  {
    _id: '1',
    name: 'Bàn 3',
    numberOfPassengers: 1,
    state: true
  },
  {
    _id: '1',
    name: 'Bàn 4',
    numberOfPassengers: 1,
    state: true
  },
  {
    _id: '1',
    name: 'Bàn 5',
    numberOfPassengers: 1,
    state: true
  },
  {
    _id: '1',
    name: 'Bàn 6',
    numberOfPassengers: 1,
    state: true
  },
  {
    _id: '1',
    name: 'Bàn 7',
    numberOfPassengers: 1,
    state: true
  },
  {
    _id: '1',
    name: 'Bàn 8',
    numberOfPassengers: 1,
    state: true
  },
  {
    _id: '1',
    name: 'Bàn 9',
    numberOfPassengers: 1,
    state: true
  },
  {
    _id: '1',
    name: 'Bàn 10',
    numberOfPassengers: 1,
    state: true
  },
  {
    _id: '1',
    name: 'Bàn 11',
    numberOfPassengers: 1,
    state: true
  },
  {
    _id: '1',
    name: 'Bàn 12',
    numberOfPassengers: 1,
    state: true
  }
]

export default function TableList() {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <TableDinner
              data={dataMenu}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
