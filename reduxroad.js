const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
};

const reducer = (state = initialWagonState, action) => {
    switch (action.type) {
        case 'gather': {
            return {
                ...state, 
                supplies: state.supplies + 15,
                days: state.days + 1
            }
        }
        case 'travel': {
            if(state.supplies - (action.payload * 20) < 0 ) {
                return state;
            }
            return {
                ...state,
                supplies: state.supplies - (action.payload * 20),
                distance: state.distance + (action.payload * 10),
                days: action.payload + state.days
            }
        }
        case 'tippedWagon': {
            return {
                ...state,
                supplies: state.supplies - 30,
                days: state.days + 1
            }
        }

        default: {
            return state;
        }
    }
};

let wagon = reducer(undefined, {});
console.log(wagon);
wagon = reducer(wagon, {type: 'travel', payload: 1})
console.log(wagon);
wagon = reducer(wagon, {type: 'gather'})
console.log(wagon);
wagon = reducer(wagon, {type: 'tippedWagon'})
console.log(wagon);
wagon = reducer(wagon, {type: 'travel', payload: 3})
console.log(wagon);
wagon = reducer(wagon, {type: 'travel', payload: 1})
console.log(wagon);