import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded'
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'

import style from './Footer.module.css'

class PrimaryNav extends Component {
  state = {
    value: 0,
    pathMap: [
      '/My_Portfolio',
      '/resume',
      '/project',
      '/skills',
      '/contact'
    ]
  };
  componentWillReceiveProps(newProps) {
    const {pathname} = newProps.location;
    const {pathMap} = this.state;
    const value = pathMap.indexOf(pathname);
    if (value > -1) {
      this.setState({
        value
      });
    }
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const {value, pathMap} = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={"nav primary" + ' ' + style.Footer}>
        <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} value="home" component={NavLink} to={pathMap[0]} />
        <BottomNavigationAction label="Resume" icon={<AssignmentIndIcon />} value="resume" component={Link} to={pathMap[1]} />
        <BottomNavigationAction label="Projects" icon={<InsertDriveFileRoundedIcon />} value="project" component={Link} to={pathMap[2]} />
        <BottomNavigationAction label="Services" icon={<LocalOfferRoundedIcon />} value="service" component={Link} to={pathMap[3]} />
        <BottomNavigationAction label="Contact" icon={<ContactMailRoundedIcon />} value="contact" component={Link} to={pathMap[4]} />
      </BottomNavigation>
    );
  }
}
export default PrimaryNav