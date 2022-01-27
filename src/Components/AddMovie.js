import React from 'react';
import { Button,Modal } from "react-bootstrap"
import { useState } from 'react';
function AddMovie({add}){

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [rate, setRate] = useState("");

    const handleAdd=()=>{
    handleClose();
    let newMovie={title,description,posterUrl,rate};
    add(newMovie);

    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    <div>
            <Button variant="primary" onClick={handleShow}>
            ADD Movie
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around" }}>
                <label>Title</label>
                <input type="text" placeholder="enter title here"
                    onChange={(e)=>setTitle(e.target.value)}/>
                <label>description</label>
                <input type="text" placeholder="enter description here" 
                    onChange={(e)=>setDescription(e.target.value)}/>
                <label>posterURL</label>
                <input type="text" placeholder="enter posterURL here" 
                    onChange={(e)=>setPosterUrl(e.target.value)}/>
                <label>rate</label>
                <input type="text" placeholder="enter rate here" 
                    onChange={(e)=>setRate(e.target.value)}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>handleAdd()}>
                ADD
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
    );
}

export default AddMovie;
