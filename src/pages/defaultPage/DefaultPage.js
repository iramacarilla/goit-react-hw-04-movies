import React from 'react'
import {Link} from 'react-router-dom'

const DefaultPage = () => {
    return (
        <div class='defaultPage'>
    <img src='https://assets.prestashop2.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln' alt="cat detective" width="320" />
    <p>
      Something went wrong. Here way <Link to="/">Home</Link>.
    </p>
  </div>
);

}

export default DefaultPage
