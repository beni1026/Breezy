import { ReactComponent as Menu } from '../../image/menu-icon.svg';
import { ReactComponent as Search } from '../../image/search-icon.svg';
import { ReactComponent as Coffee } from '../../image/coffee-icon.svg';
import { ReactComponent as Logo } from '../../image/logo-icon.svg';
import { ReactComponent as Login } from '../../image/login.svg';
import { ReactComponent as Join } from '../../image/join.svg';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <>
    <div className={classes.top}>
      <Coffee />
      <div className={classes.link}>
        <Link to="" className={classes.login}><Login /></Link>
        <Link to=""><Join /></Link>
      </div>
    </div>
    <header>
      <Menu />
      <div className={classes.logo}><Logo /></div>
      <Search />
    </header>
    </>   
  );
}

export default Header;