export const BrandingStyles = theme => ({
  logo: {
    position: 'relative',
    padding: '15px 15px',
    zIndex: '4',
    '&:after':{
      content: '""',
      bottom: '0',
      float: 'left',
      height: '1px',
      width: '100%',
      backgroundColor: 'rgba(180, 180, 180, 0.3)',
    }
  },
  brandText:{
    display: "inline-block"
  },
  text:{},
  subtext:{},
  logoLink: {
    width: '240px',
    textTransform: 'uppercase',
    padding: '5px 0',
    display: 'block',
    fontSize: '18px',
    textAlign: 'left',
    fontWeight: '400',
    lineHeight: '70px',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    '&,&:hover': {
      color: '#FFFFFF',
    }
  },
  logoImage: {
    width: '70px',
    height: '70px',
    display: 'inline-block',
    left: '-10px',
    position: 'relative',
    float: 'left'
  },
  img: {
    width: 'inherit',
    height: 'inherit',
    position: 'absolute',
    verticalAlign: 'middle',
    border: '0',
  }
});
