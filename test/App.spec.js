/* eslint-env mocha */

import { expect } from 'chai';
import React from 'react';
import Search from '../src/Search';
import ShowCard from '../src/ShowCard';
import { shallow, mount } from 'enzyme';
import { shows } from '../public/data';

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
	it('should render as many shows as there are data for', () => {
		const wrapper = shallow(<Search />);
		expect(wrapper.find(ShowCard).length).to.equal(shows.length);
	});
	it('should filter correctly given new state ', () => {
		const wrapper = mount(<Search />);
		const input = wrapper.find('.search-input');
		input.node.value="congress";
		input.simulate('change')
		expect(wrapper.state('searchText')).to.equal("congress");
	})
}); 

