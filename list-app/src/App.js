import React from 'react';
import { connect } from 'react-redux';
import { addItems } from './actions/index';
import ItemsList from './components/ItemsList'


const App = ({ quality, dispatch }) => {
    let input, item;



    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.value.trim()) { return }
        item = {
            text: input.value
        }
        dispatch(addItems(item));
        input.value = '';
    };

    return (
        <div className={'wrapper'}>
            <h1>TODOS</h1>
            <form 
            onSubmit={handleSubmit} >
                <div className={'div-wrapper'}>
                    <label>Todo: </label>
                    <input type="text" name="name" ref={node => (input = node)} />
                </div>
                <div className={'div-wrapper'}>
                    <label>&nbsp;</label>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <ItemsList/>
        </div>
    )
}

export default connect()(App)