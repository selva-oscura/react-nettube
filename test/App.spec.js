/* eslint-env mocha */

import { expect } from 'chai';
import React from 'react';
import Search from '../src/Search';
// import ShowCard from '../src/ShowCard';
import { shallow, mount } from 'enzyme';
import {shows} from '../public/data';

// describe('<Search />', () => {
// 	it('should pass ', () => {
// 		expect(1 + 1 ===2).to.be.true;
// 	});
// 	xit('should pass ', () => {
// 		expect(1 * 1 ===3).to.be.true;
// 	});

// 	xit('should pass ', () => {
// 		expect(1 + 1 ===2).to.be.true;
// 	});
// }); 

describe('<Search />', () => {
	it('should render the brand', () => {
		const wrapper = shallow(<Search />);
		console.log(wrapper.debug());
		expect(wrapper.contains(<h2 className='brand'>Bash Videos</h2>)).to.be.true;
	});
}); 



