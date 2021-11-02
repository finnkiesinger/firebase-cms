import TextInput from '../components/text-input';
import CenterForm from '../components/center-form';
import Button from '../components/button';
import styled from 'styled-components';

const FormHeading = styled.div`
	padding: 0.25rem;
`;
const FlexEnd = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

function LinkScreen() {
	return <CenterForm>
		<FormHeading>API Key</FormHeading>
		<TextInput />
		<FormHeading>App ID</FormHeading>
		<TextInput />
		<FormHeading>Project ID</FormHeading>
		<TextInput />
		<FormHeading>Storage Bucket</FormHeading>
		<TextInput />
		<FormHeading>Auth Domain</FormHeading>
		<TextInput />
		<FlexEnd>
			<Button>Connect</Button>
		</FlexEnd>
	</CenterForm>
}

export default LinkScreen;
