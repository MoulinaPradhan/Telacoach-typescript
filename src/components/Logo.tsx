import React from 'react';
import type { FC } from 'react';

interface LogoProps {
  [key: string]: any;
}

const Logo: FC<LogoProps> = (props) => {
  return (

    <img style={styles.image}
    id="logo"
      alt="Logo"
      src="/static/logo.jpg"
      {...props}
    />
  );
}
const styles = {
  image: {
    height: 50,


  }
}

export default Logo;
