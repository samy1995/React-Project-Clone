import PropTypes from 'prop-types';
import React from 'react'
import Button from './Button';

const Header = ({ title, onAdd, showAdd}) => {
     
return (
     <header className='header'>
          <h1>{title} </h1>
          <Button color = {showAdd ? 'red' : 'green'} text = {showAdd ? 'close' : 'Add'} onClick = {onAdd}/>
     </header>
     )
}

Header.defaultProps = {
     title : 'Task tracker',
   }

 Header.propTypes = {
      title: PropTypes.string.isRequired,
 }
export default Header

// CSS in JS
// const headingStyle = {
//      color : 'black',
//      backgroundColor : 'maroon',
// }