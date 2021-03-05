import React, { useContext } from 'react';
import cx from 'classnames';
import {themeContext} from '../../contexts/contexts';
import styles from './switch-themes.module.scss';

const SwitchTheme = props => {
  console.log(useContext(themeContext));
  const [isLigth, setIsLight] = useContext(themeContext);

  const className = cx({[styles.lightTheme]: isLigth,[styles.darkTheme]: !isLigth})

  const handleClick = () => {
    setIsLight(!isLigth);
  }
  return (
    <div className={className}>
      <h1>Some text</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        molestiae dolores numquam laborum nemo laboriosam corporis? Explicabo
        quisquam accusantium at.
      </p>
      <button onClick={handleClick}>switch theme</button>
    </div>
  )
};
export default SwitchTheme;
