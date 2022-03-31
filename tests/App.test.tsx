import * as TestUtils from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../src/App';

it('App is rendered', () => {
  // Render App in the document
  const appElement: React.ReactInstance = TestUtils.renderIntoDocument(<App />);

  const appNode = ReactDOM.findDOMNode(appElement);

  // Verify text content
  expect(appNode.textContent).toEqual('Hello World!Foo to the barz');
});
