import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import imageTableCoffee from "assets/img/ban-cafe.jpg";
import EditIcon from '@material-ui/icons/Edit';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import styles from "assets/jss/material-dashboard-react/components/tableDinner";

const useStyles = makeStyles(styles);

export default function TitlebarGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <GridList cellHeight={180} className={classes.gridList}>
        {(props.data || []).map((table, idx) => (
          <GridListTile key={`table_${idx}`} cols={0.5} >
            <img src={imageTableCoffee} alt='imgCoffeTable' />
            <GridListTileBar
              title={table.name}
              subtitle={<span>by: Nhân viên 1</span>}
              actionIcon={
                <>
                  <IconButton className={classes.icon}>
                    <EditIcon />
                  </IconButton>
                  <IconButton className={classes.icon}>
                    <MonetizationOnIcon />
                  </IconButton>
                </>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}