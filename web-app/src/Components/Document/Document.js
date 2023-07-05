import React, { useState } from 'react';
import DocumentForm from './DocumentForm';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAction } from "../../Redux/actions";
import "./Document.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Document = () => {
    const [documents, setDocuments] = useState([]);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state) => state?.user);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');
    const[displayTable,setDisplayTable] = useState(false);

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const sortedData = [...documents].sort((a, b) => {
        if (sortColumn) {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];

            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        }

        return 0;
    });

    // Function to save a new or edited document
    const handleSaveDocument = (formData) => {
        if (selectedDocument) {
            // If there's a selectedDocument, update it
            setDocuments(documents.map((doc) => (doc.id === selectedDocument.id ? formData : doc)));
        } else {
            // If there's no selectedDocument, add a new one
            setDocuments([...documents, { ...formData, id: Date.now() }]);
        }
        setSelectedDocument(null);
        setDisplayTable(true)
    };

    // Function to delete a document
    const handleDeleteDocument = (id) => {
        setDocuments(documents.filter((doc) => doc.id !== id));
    };

    // Function to select a document for editing
    const handleEditDocument = (id) => {
        const documentToEdit = documents.find((doc) => doc.id === id);
        setSelectedDocument(documentToEdit);
        setEdit(true)
    };

    const handleClick = () => {
        navigate("/login")
        dispatch(resetAction());
    }
    return (
        <div className='text-center clearfix'>  
            <h1 className='bg-secondary text-white header'>Welcome, {state?.name}</h1>
            <h2 className='m-2'>Documents Module</h2>
            <div>
                <button type="button" className="btn btn-primary  mr-5" onClick={() => setAdd(!add)}>Add Document</button>
            </div>

            <Button variant="primary" type="submit" style={{ marginLeft: "1400px", marginTop: "-260px" }} onClick={() => handleClick()}>
                Logout
            </Button>

            {/* Add/Edit a document */}
            {selectedDocument ? (
                <div>
                    {
                        <DocumentForm onSave={handleSaveDocument} initialData={selectedDocument} text="Edit Document" edit={edit}  />
                    }
                </div>
            ) : (
                <div>
                    {add &&
                        <><DocumentForm onSave={handleSaveDocument} initialData={{ title: '', content: '' }} text="Add Document" /></>
                    }
                </div>
            )}

            {/* List of documents */}
            {(documents.length > 0 ) ? (
                <table className = "tablehead">
                    <thead>
                        <tr>
                            <th onClick={() => handleSort('title')}>
                                Title {sortColumn === 'title' && sortDirection === 'asc' && <span>&uarr;</span>}
                                {sortColumn === 'title' && sortDirection === 'desc' && <span>&darr;</span>}
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((document) => (
                            <tr key={document.id}>
                                <td>{document.title}</td>
                                <td>
                                    <button style={{marginRight: "5px"}} onClick={() => handleEditDocument(document.id)}>Edit</button>
                                    <button onClick={() => handleDeleteDocument(document.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className='text-center mt-3'>No documents found.</p>
            )}
        </div>
    );
};

export default Document;
