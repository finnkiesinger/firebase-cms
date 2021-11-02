import styled from 'styled-components';

const TextInput = styled.input`
	appearance: none;
	border-radius: 12px;
	border: 2px solid #EEEEEE;
	font-weight: 500;
	font-size: 1.1rem;
	padding: 0.75rem;
	width: 100%;
	transition: 0.1s;
	display: block;
	margin-bottom: 0.5rem;

	&:focus {
		border-color: #ff3721;
		outline: none;
	}
`;

export default TextInput;
