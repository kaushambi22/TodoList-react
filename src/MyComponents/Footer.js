import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "30vh",
    width: "100%"
  }
  return (
    <div className="bg-dark text-light" style = {footerStyle}> 
    <p className="text-centeR">
    Copyright &copy; MyTodoList.com
    </p>
    </div>
  )
}

export default Footer
