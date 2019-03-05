import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem , Button} from 'reactstrap';
import { CSSTransition , TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            {id: uuid(), name: 'Playstation 4'},
            {id: uuid(), name: 'RDR 2'},
            {id: uuid(), name: 'God Of War'},
            {id: uuid(), name: 'Persona 5'}
        ]
    }

    render() {
        const {items} = this.state;
        return(
            <Container>
                <Button
                    color="dark" 
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if(name){
                            const additionalState = [...this.state.items, {id: uuid(), name}]
                            this.setState({
                                items: additionalState
                            })
                        }
                    }}
                >Add Item</Button>

            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({id,name}) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick = {() => {
                                        var newState = this.state.items.filter((item) => item.id !== id);
                                        this.setState(
                                            {
                                                items: newState
                                            }
                                        )
                                    }}
                                >&times;</Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>

                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
        );
    }
}

export default ShoppingList;
