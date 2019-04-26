import { CONSTANTS } from "../actions";
let listID=2;
let cardID=5;

const initialState=[
    {
        title: "Backlog",
        id: `list-${0}`,
        cards:[
            {
                id:`card-${0}`,
                text:"As an Admin, I want to have the possibility to Sign In",
                date:"23.04.2019, 23:32:57"
            },
            {
                id:`card-${1}`,
                text:"As a Waiter, I want to have the possibility to view own profile",
                date:"23.04.2019, 23:32:57"
            }
        ]
    },
    {
        title: "In Progress",
        id: `list-${1}`,
        cards:[
            {
                id:`card-${2}`,
                text:"As a Client, I want to have the possibility to cancel reservation of a table",
                date:"23.04.2019, 23:32:57"
            },
            {
                id:`card-${3}`,
                text:"As a Client, I want to have the possibility to leave feedback about restaurant",
                date:"23.04.2019, 23:32:57"
            },
            {
                id:`card-${4}`,
                text:"As a Client, I want to have the possibility to use order template",
                date:"23.04.2019, 23:32:57"
            }
        ]
    }
];

const listsReducer =(state=initialState,action)=>{
    switch (action.type){
        case CONSTANTS.ADD_LIST:
            const newList={
                title:action.payload,
                cards:[],
                id:`list-${listID}`
            };
            listID++;
            return [...state, newList];
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`,
                date: action.payload.date
            };
            cardID++;

            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });
            return newState;
        }

        case CONSTANTS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
            } = action.payload;
            const newState = [...state];
            //in the same list
            if(droppableIdStart===droppableIdEnd){
                const list = state.find(list=>droppableIdStart===list.id);
                const card= list.cards.splice(droppableIndexStart,1);
                list.cards.splice(droppableIndexEnd,0, ...card)
            }
            if(droppableIdStart!==droppableIdEnd){
                //find the list where drag happend
                const listStart = state.find(list=>droppableIdStart===list.id)
                //pull out the card from this list
                const card = listStart.cards.splice(droppableIndexStart,1);
                //find the list where drag ended
                const listEnd = state.find(list=>droppableIdEnd===list.id);
                //put the card in the new list
                listEnd.cards.splice(droppableIndexEnd,0, ...card)

            }
            return newState;
        case CONSTANTS.DELETE_CARD: {
            const { id, listID } = action.payload;
            const newState = state;
            console.log(id[5]);
            console.log(listID[5]);
            console.log(newState[listID[5]]);
            const newCards = newState[listID[5]].cards.filter(card => card.id !== id);
            console.log(newCards);
            newState[listID[5]].cards=newCards;
            return newState;
        }
        case CONSTANTS.EDIT_CARD: {
            const { id, newText } = action.payload;
            const card = state[id];
            card.text = newText;
            return { ...state, [`card-${id}`]: card };
        }
        default:
            return state;
    }
};

export default listsReducer;