import React from 'react';
import styles from '../../styles/TypeWriter.module.css'
import Typed from 'typed.js';
import words from './../../shared/words';

  
class Typing extends React.Component {

    componentDidMount() {
      const options = {
        strings: words,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        cursorChar: "",
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  componentWillUnmount() {
      // Please don't forget to cleanup animation layer
      this.typed.destroy();
    }
    
    render() {
      return (
        <div className='flex'>
            <div className='md:pr-1'>
                <span
                    ref={(el) => {
                    this.el = el;
                    }}
                />
                <p className='pl-1'>Front End Developer</p>
            </div>
        </div>
      );
    }
  }
  export default Typing;