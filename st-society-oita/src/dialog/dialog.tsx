import React from "react";
import { Dialog, DialogContent } from "@mui/material";
import PropTypes from "prop-types";
import SampleImage1 from "../dawnload/image0.jpg";
import SampleImage2 from "../dawnload/gdApple1.png";

const dialog = (props: any) => {
  const compProps = {
    dialog: {
      open: props.open, //ダイアログの表示・非表示プロパティ
      onClose: props.onClose, //ダイアログが閉じられた時の処理
    },
    dialogContent: {
      dividers: true,
    },
    dialogContentText: {
      tabIndex: -1,
    },
    closeButton: {
      onClick: props.onClose, //閉じるボタンが押されたときの処理
      color: "primary",
    },
  };

  return (
    <Dialog {...compProps.dialog}>
      <DialogContent {...compProps.dialogContent}>
        <img
          src={props.bookParam.image}
          alt="aq"
          style={{ maxWidth: props.bookParam.sizePer + "%" }}
        />
      </DialogContent>
    </Dialog>
  );
};

dialog.propTypes = {
  open: PropTypes.bool, //表示フラグ
  onClose: PropTypes.func, //閉じる処理
};

export default dialog;
