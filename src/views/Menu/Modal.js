import React, { forwardRef, useImperativeHandle, useReducer, useCallback } from "react";
// core components
import Dialog from "@material-ui/core/Dialog";
import {
  withStyles
} from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import { Form } from 'antd';

import { reducer } from 'commonFunc/commonFunc'

const TableModal = React.memo(forwardRef((props, ref) => {
  const [form] = Form.useForm();
  const [state, setState] = useReducer(reducer, {
    isOpen: false
  })

  const handleOpen = useCallback(() => {
    setState({
      isOpen: true
    })
  }, [])

  const handleClose = useCallback(() => {
    setState({
      isOpen: false
    })
  }, [])

  useImperativeHandle(ref, () => ({
    handleOpen
  }))

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  const handleSave = () => {
    form.validateFields()
  }

  return (
    <Dialog
      onClose={handleClose}
      open={state.isOpen}
    >
      <MuiDialogTitle disableTypography>
        <Typography variant="h6">Modal title</Typography>
        <IconButton
          style={{
            position: 'absolute',
            right: 0,
            top: 5
          }}
          aria-label="close"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <DialogContent dividers>
        <div style={{ height: 500, width: 576 }}>
          <Form
            form={form}
            style={{
              display: 'flex',
              flexWrap: 'wrap'
            }}
          >
            <Form.Item
              name="note"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextField
                label="Custom CSS"
                required
                variant="outlined"
              />
            </Form.Item>
            <Form.Item
              name="note"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextField
                label="Custom CSS"
                required
                variant="outlined"
              />
            </Form.Item>
            <Form.Item
              name="note"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextField
                label="Custom CSS"
                required
                variant="outlined"
              />
            </Form.Item>
            <Form.Item
              name="note"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextField
                label="Custom CSS"
                required
                variant="outlined"
              />
            </Form.Item>
          </Form>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          Đóng
        </Button>
        <Button onClick={handleSave} color="primary">
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
}))

export default TableModal
