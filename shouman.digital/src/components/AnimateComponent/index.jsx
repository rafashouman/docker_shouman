import React, { useEffect, useState } from 'react';

export default function AnimateComponent({ children, animation = 'left-right' }) {
  const [animate, setAnimate] = useState('');

  function getAnimation() {
    switch (animation) {
      case 'left-right':
        return setAnimate('to-begin-right');
      case 'opacity-on':
        return setAnimate('opacity-of');
      default:
        return setAnimate('to-begin-right');
    }
  }

  useEffect(() => {
    getAnimation();
  }, [animate, setAnimate]);

  return (
    <div className={`${animation} ${animate}`}>
      {children}
    </div>
  );
}
