import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import OrderOptionDate from './OrderOptionDate';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const expectedType = 'type';
    const expectedName = 'name';
    const expectedId = 'id';
    const expectedOrderOption = 'setOrderOption';
    const component = shallow(<OrderOption
       type={expectedType} 
       name={expectedName} 
       id={expectedId} 
       setOrderOption={expectedOrderOption}
       />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const requiredName = 'name';
    const component = shallow(<OrderOption name={requiredName} />);
    expect(component.isEmptyRender()).toEqual(true);
  });

  it('should render component with props - "name"', () => {
    const expectedName = 'name';
    const expectedType = 'icons';
    const component = shallow(<OrderOption type={expectedType} name={expectedName} />);
    expect(component.find('.title').text()).toEqual(expectedName);
  });

//   const optionTypes = {
//     dropdown: 'OrderOptionDropdown',
//     icons: 'OrderOptionIcons',
//     checkboxes: 'OrderOptionCheckboxes',
//     number: 'OrderOptionNumber',
//     text: 'OrderOptionText',
//     date: 'OrderOptionDate',
//   };

//   const mockProps = {
//     id: 'abc',
//     name: 'Lorem',
//     values: [
//       {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
//       {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
//     ],
//     required: false,
//     currentValue: 'aaa',
//     price: '50%',
//     limits: {
//       min: 0,
//       max: 6,
//     },
//   };
  
//   const mockPropsForType = {
//     dropdown: {},
//     icons: {},
//     checkboxes: {currentValue: [mockProps.currentValue]},
//     number: {currentValue: 1},
//     text: {},
//     date: {},
//   };
  
//   const testValue = mockProps.values[1].id;
//   const testValueNumber = 3;
  
//   for(let type in optionTypes){
//     describe(`Component OrderOption with type=${type}`, () => {
//       /* test setup */
//       let component;
//       let subcomponent;
//       let renderedSubcomponent;

//       beforeEach(() => {
//         component = shallow(
//           <OrderOption
//             type={type}
//             {...mockProps}
//             {...mockPropsForType[type]}
//           />
//         );
//         subcomponent = component.find(optionTypes[type]);
//         renderedSubcomponent = subcomponent.dive();
//       });

//       /* common tests */
//       it('passes dummy test', () => {
//         expect(1).toBe(1);
//         console.log(component.debug());
//       });
  
//       /* type-specific tests */
//       // eslint-disable-next-line default-case
//       switch (type) {
//         case 'dropdown': {
//           /* tests for dropdown */
//           break;
//         }
//       }
//     });
//   };

});