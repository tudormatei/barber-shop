import React from 'react';

import './NavigationDots.css';

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
			{['home', 'about', 'gallery', 'offers'].map((item, index) => (
				<a 
					href={`#${item}`}
					key={item + index}
					className='app__navigation-dot'
					style={active === item ? { backgroundColor: '#ddb361' } : { } }
				/>
			))}
    </div>
  )
}

export default NavigationDots