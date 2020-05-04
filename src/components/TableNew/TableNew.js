import React, { useReducer, useCallback } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from '@material-ui/core/TablePagination';
import TableCell from "@material-ui/core/TableCell";
import TableHead from '@material-ui/core/TableHead';
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
// core components
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";
import { reducer } from 'commonFunc/commonFunc'

const useStyles = makeStyles(styles);

export default function Tasks(props) {
  const [state, setState] = useReducer(reducer, {
    page: 0,
    rowsPerPage: 10
  })
  
  const classes = useStyles();
  const { rtlActive } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive
  });

  const handleChangePage = useCallback((event, newPage) => {
    setState({
      page: newPage
    })
  }, [])

  const handleChangeRowsPerPage = useCallback((event) => {
    setState({
      page: 0,
      rowsPerPage: parseInt(event.target.value, 10)
    })
  }, [])
  props.data.slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage).map((value, idx) => props.header.map(header => console.log(value[header.col])))
  
  return (
    <Table className={classes.table}>
      <TableHead>
          <TableRow>
            {(props.header || []).map(header => <TableCell>{header.name}</TableCell>)}
            <TableCell align="right">Thao tác</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
        {props.data.slice(state.page * state.rowsPerPage, state.page * state.rowsPerPage + state.rowsPerPage).map((value, idx) => (
          <TableRow key={`data_${idx}`} className={classes.tableRow}>
            {(props.header || []).map(header => <TableCell className={tableCellClasses}>{value[header.col]}</TableCell>)}
            <TableCell align='right' className={classes.tableActions}>
              <div>
                <Tooltip
                  id="tooltip-top"
                  title="Edit Task"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    aria-label="Edit"
                    className={classes.tableActionButton}
                  >
                    <Edit
                      className={
                        classes.tableActionButtonIcon + " " + classes.edit
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  id="tooltip-top-start"
                  title="Remove"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    aria-label="Close"
                    className={classes.tableActionButton}
                  >
                    <Close
                      className={
                        classes.tableActionButtonIcon + " " + classes.close
                      }
                    />
                  </IconButton>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={props.data.length || 0}
        rowsPerPage={state.rowsPerPage}
        page={state.page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Table>
  );
}

Tasks.propTypes = {
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool,
  checkedIndexes: PropTypes.array
};
