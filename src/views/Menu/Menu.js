import React, { useCallback, useRef } from "react";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TableNew from "components/TableNew/TableNew.js";
import Modal from "./Modal";

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

const TableList = React.memo(() => {
  const ModalRef = useRef(null)

  const handleAddClick = useCallback(() => {
    ModalRef.current.handleOpen()
  }, [])
  
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <TableNew
          data={dataMenu}
          header={header}
          onAddClick={handleAddClick}
        />
        <Modal
          ref={ModalRef} 
        />
      </GridItem>
    </GridContainer>
  );
})

export default TableList
