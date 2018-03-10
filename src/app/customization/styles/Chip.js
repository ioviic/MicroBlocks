
export const ChipStyles = theme => ({
  userChip:{
    padding:'0 20px',
    width: '100%',
    display: 'block',
    position: 'absolute',
    bottom: '20px'
  },
  userInfo:{
    width: 'calc(100% - 40px)',
    float: 'left',
    paddingTop: '3px'
  },
  userName:{
    float: 'left',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left'
  },
  userEmail:{
    float: 'left',
    fontSize: '11px',
    color: 'gray',
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left'
  },
  userAvatar:{
    float: 'right',
    backgroundColor: '#9c27b0',
    boxShadow: '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
    '&:hover': {
      backgroundColor: '#9c27b0',
      boxShadow: '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
    }
  }
});
