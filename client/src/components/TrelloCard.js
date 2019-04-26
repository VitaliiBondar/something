import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography";
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";
import Icon from '@material-ui/core/Icon';
import { deleteCard } from "../actions";
import { connect } from "react-redux";
import OpenCard from "./OpenCard";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const CardContainer = styled.div`
margin-bottom: 8px;
word-wrap: break-word;
`;



const TrelloCard = ({text, id, index, listID, dispatch,date}) => {
    const handleDeleteCard = e => {
        dispatch(deleteCard(id, listID));

    };
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom>
                                    {text}
                                </Typography>
                                <Grid container justify="space-between" alignItems="center">
                                <Typography gutterBottom>
                                    {date}
                                </Typography>
                                <OpenCard id={id} text={text} date={date}/>
                                </Grid>
                            </CardContent>
                            <Icon fontSize="small" onMouseDown={handleDeleteCard} component={Link} to="/">delete</Icon>
                        </Card>
                </CardContainer>
            )}

        </Draggable>
    )
};


export default connect()(TrelloCard);