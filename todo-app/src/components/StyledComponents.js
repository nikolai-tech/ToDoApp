// src/components/StyledComponents.js
import styled from 'styled-components';
// A basic styled container for the whole app
export const AppContainer = styled.div`
font-family: Arial, sans-serif;
padding: 20px;
background-color: #192734;
min-height: 100vh;
color: #ffffff;
display: block;
place-items: center;
`;

// Styled input field for adding new to-dos
export const InputField = styled.input`
padding: 10px;
font-size: 1rem;
width: 250px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 4px;
`;

// Styled button for adding new to-dos
export const AddButton = styled.button`
padding: 10px;
font-size: 1rem;
background-color: #007acc;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover {
background-color: #ff0000;
}
`;

// Styled list item for each to-do
export const TodoItem = styled.div`
background-color: ${(props) => (props.completed ? '#800080' : '#192734')};
padding: 10px;
border: 1px solid #ddd;
margin-bottom: 10px;
border-radius: 4px;
`;

// Button to delete a to-do
export const DeleteButton = styled.button`
background-color: #f44336;
color: #ffffff;
padding: 10px;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover {
background-color: #e53935;
}
`;