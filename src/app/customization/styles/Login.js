const styles = theme => ({
  login:{
    padding:'18px'
  },
  card: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    borderRadius: '3px',
    color: 'rgba(0, 0, 0, 0.87)',
    padding: '10px',
    background: '#fff',
  },
  cardHeader: {
    margin: '-20px 15px 0',
    borderRadius: '3px',
    padding: '15px',
    backgroundColor: '#9c27b0'
  },
  cardTitle: {
    color: '#FFF'
  },
  cardSubtitle: {
    color: '#FFF'
  },
  labelClear:{
    position: 'absolute',
    right: '0',
    top: '18px',
    color: '#f44336'
  },
  labelError:{
    fontSize: '11px',
    color: '#f44336',
    float:'left',
    width: '100%'
  },
  button: {
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '3px',
    position: 'relative',
    padding: '12px 30px',
    margin: '10px 1px',
    fontSize: '12px',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '0',
    willChange: 'box-shadow, transform',
    transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',
    cursor: 'pointer',
    backgroundColor: '#9c27b0',
    boxShadow: '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
    '&:hover': {
      backgroundColor: '#9c27b0',
      boxShadow: '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
    }
  },
});

export default styles;
