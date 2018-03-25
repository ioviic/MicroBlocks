export const StandardCardStyles = theme => ({
  card: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    borderRadius: '3px',
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#fff',
    marginTop:'26px'
  },
  plain: {
    background: 'transparent',
    boxShadow: 'none',
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
});

export const TableStyles = theme => ({
  table:{
    background: 'transparent'
  },
  headerCell:{
    color: '#9c27b0',
    fontSize: '1em'
  },
  tableRow:{},
  tableCell:{}
});
