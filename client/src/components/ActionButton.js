import React from "react";
import Icon from "@material-ui/core/Icon";
import Textarea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

class ActionButton extends React.Component{
constructor(props){
    super(props);
    this.state={
        formOpen: false,
        text:"",
        date:""
    }
}

    openForm=()=>{
        this.setState({
            formOpen:true
        })
    };
    closeForm = e =>{
        this.setState({
            formOpen:false
        })
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    };
    handleAddList = () =>{
      const { dispatch } =this.props;
      const { text } = this.state;

      if(text){
          this.setState({
              text:""
          });
          dispatch(addList(text))
      }
      return;
    };
    handleAddCard =() =>{
        const { dispatch, listID } =this.props;
        const { text } = this.state;
        let date= new Date();
        console.log(date.toLocaleString());

        if(text){
            this.setState({
                text:"",
                date:""
            });
            dispatch(addCard(listID, text,date.toLocaleString()))
        }
    };

    renderAddButton =()=>{
        const { list } = this.props;
        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1: 0.5;
        const buttonTextColor = list ? "white": "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)": "inherit";
        return(
            <div
                onClick={this.openForm}
                style={{
                ...styles.openForButtonGroup,
                opacity:buttonTextOpacity,
                color:buttonTextColor,
                background:buttonTextBackground
            }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    };

    renderForm =()=>{
        const { list } = this.props;
        const placeholder = list ? "Enter list title..." : "Enter a title for this card...";
        const buttonTitle = list ? "Add List" : "Add Card";
        return <div>
            <Card style={{
                // overflow:"visible",
                minHeight:85,
                minWidth:272,
                padding:"6px 8px 2px"
            }}>
                <Textarea
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                    resize:"none",
                    width:"100%",
                    overflow:"hidden",
                    outline:"none",
                    border:"none"
                    }}
                />
            </Card>
            <div style={styles.formButtonGroup}>
                <Button
                    onMouseDown={list ? this.handleAddList : this.handleAddCard}
                    variant="contained"
                    style={{color:"white", backgroundColor:"#5aac44"}}
                >
                    {buttonTitle}
                </Button>
                <Icon style={{marginLeft:8,cursor:"pointer"}}>close</Icon>
            </div>
        </div>;
    };

    render(){
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles={
    openForButtonGroup:{
        display:"flex",
        alignItems:"center",
        cursor:"pointer",
        borderRadius:3,
        height:36,
        width:272,
        paddingLeft:10
    },
    formButtonGroup:{
        marginTop:8,
        display:"flex",
        alignItems:"center"
    }
};

export default connect()(ActionButton);