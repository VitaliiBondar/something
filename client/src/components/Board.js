import React, {Component} from 'react';
import TrelloList from "./TrelloList";
import {connect} from "react-redux";
import ActionButton from "./ActionButton";
import {DragDropContext} from "react-beautiful-dnd";
import {sort} from "../actions";
import styled from "styled-components";
import AppHeader from "./AppHeader";

const ListContainer = styled.div`
     margin-top: 10px;
     display: flex;
     flex-direction: row;
`;

class Board extends Component {
    onDragEnd = (result) => {
        const {destination, source, draggableId} = result;
        if (!destination) {
            return;
        }
        this.props.dispatch(
            sort(
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableId
            )
        )

    };

    render() {
        const {lists} = this.props;
        return (<>
                <AppHeader />
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div>
                    <ListContainer>
                        {lists.map(list => (
                            <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards}/>))}
                        <ActionButton list />
                    </ListContainer>
                </div>
            </DragDropContext>
            </>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists
});
export default connect(mapStateToProps)(Board);
