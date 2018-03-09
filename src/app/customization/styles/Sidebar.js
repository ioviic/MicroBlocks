const drawerWidth = 240;

export const SideBarStyles = theme => ({
  drawerPaper: {
    border: 'none',
    top: '0',
    bottom: '0',
    left: '0',
    position: 'fixed',
    height: '100%',
    width: drawerWidth,
    zIndex: 1,
  },
  wrapper:{
    zIndex: 4,
    color:'white',
    height: '100%'
  },
  background: {
    position: 'absolute',
    zIndex: '1',
    height: '100%',
    width: '100%',
    display: 'block',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    '&:after': {
      position: 'absolute',
      zIndex: '3',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      background: '#000',
      opacity: '.8',
    }
  },
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

export const SideBarLinksStyles = theme => ({

  itemLink:{
    padding: '10px 15px',
    display: 'block',
    position: 'relative',
    textDecoration: 'none'
  },

  item:{
    WebkitTransition: 'all 300ms linear',
    MozTransition: 'all 300ms linear',
    OTransition: 'all 300ms linear',
    MsTransition: 'all 300ms linear',
    transition: 'all 300ms linear',
    padding: '10px 15px',
    borderRadius: '3px',
    width:'auto',
    '&:hover': {
      backgroundColor: '#00acc1',
      boxShadow: '0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)',
    }
  },

  itemText: {
    color: '#FFFFFF',
    fontSize: '14px'
  },

  itemIcon: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
});
