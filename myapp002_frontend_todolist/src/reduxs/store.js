import { reducer } from './reducer';
import { legacy_createStore as createStore } from 'redux';

// npm install redux react-redux (redux 사용을 위해 라이브러리 설치)
export const store = createStore(reducer);
