import React from 'react';
import {ListGroup, ListGroupItem, Button} from 'reactstrap';

const UserList = ({users, onDeleteUser}) => {
    return (
        <ListGroup>
            {users.sort(
                (a,b) => (a.firstName > b.firstName) ? 1 : -1
            ).map(u => (
                <ListGroupItem key={u.id}>
                    <section style={{display: 'flex'}}>
                        <div style={{flexGroup: 1, margin: '0 auto'}}>
                            {u.firstName} {u.lastName}
                        </div>
                        <div>
                            <Button
                                outline
                                color='danger'
                                onClick={() => {
                                    onDeleteUser(u.id)
                                }}
                            >
                                Delete
                            </Button>
                        </div>
                    </section>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default UserList;