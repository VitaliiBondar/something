const initialState=[
    {
        title: "Some Text",
        id: 0,
        cards:[
            {
                id:0,
                text:"lorem ipsum"
            },
            {
                id:1,
                text:"lorem ipsum2"
            }
        ]
    },
    {
        title: "Some Text2",
        id: 0,
        cards:[
            {
                id:0,
                text:"lorem ipsum3"
            },
            {
                id:1,
                text:"lorem ipsum4"
            },
            {
                id:2,
                text:"lorem ipsum5"
            }
        ]
    }
];

const listsReducer =(state=initialState,action)=>{
    switch (action.type){
        default:
            return state;
    }
};

export default listsReducer;