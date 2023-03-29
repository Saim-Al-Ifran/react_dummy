import React from 'react';
import style from './Layout.module.css';

const Layout = (props) => {
    console.log(props);
  return (
    <div className={style.app}>
    <nav className={style.nav}>
        <div className={style.brand}>
             <h3>Brand Name</h3>
        </div>
        <div className={style.menu}>
            <ul>
              <li>Link One</li>
              <li>Link Two</li>
              <li>Link Three</li>
            </ul>
        </div>
    </nav>
    <main className={style.main}>
            {props.children}
    </main>

        <footer>
             <h3>Footer</h3>
             <ul>
                <li>Footer Link One</li>
                <li>Footer Link Two</li>
                <li>Footer Link Three</li>
             </ul>
        </footer>
</div>
  )
}

export default Layout;