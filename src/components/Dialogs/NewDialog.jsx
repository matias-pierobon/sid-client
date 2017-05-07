import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';;
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingDialog from './FloatingDialog';

const NewDialog = ({ children, title, handleSubmit }) => (
  <FloatingDialog
    title={title}
    btnContent={<ContentAdd/>}
    secondary={true}
    handleSubmit={handleSubmit}
    btnType={FloatingActionButton}
    btnClass={"addButton"}
  >
    { children }
  </FloatingDialog>
);

export default NewDialog;