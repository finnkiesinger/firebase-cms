import TextInput from '../components/text-input';
import CenterForm from '../components/center-form';
import Button from '../components/button';
import styled from 'styled-components';
import { useState, ChangeEvent } from 'react';

const FormHeading = styled.div`
	padding: 0.25rem;
`;
const FlexEnd = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const defaultConfig = {
	apiKey: '',
	appId: '',
	projectId: '',
	storageBucket: '',
	authDomain: ''
};

function LinkScreen() {
	const [config, setConfig] = useState(defaultConfig);
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setConfig(c => ({...c, [e.target.name]: e.target.value}));
	};
	const link = () => {
		
	};

	return <CenterForm>
		<FormHeading>API Key</FormHeading>
		<TextInput value={config.apiKey} onChange={onChange} name="apiKey" />
		<FormHeading>App ID</FormHeading>
		<TextInput value={config.appId} onChange={onChange} name="appId" />
		<FormHeading>Project ID</FormHeading>
		<TextInput value={config.projectId} onChange={onChange} name="projectId" />
		<FormHeading>Storage Bucket</FormHeading>
		<TextInput value={config.storageBucket} onChange={onChange} name="storageBucket" />
		<FormHeading>Auth Domain</FormHeading>
		<TextInput value={config.authDomain} onChange={onChange} name="authDomain" />
		<FlexEnd>
			<Button onClick={link}>Connect</Button>
		</FlexEnd>
	</CenterForm>
}

export default LinkScreen;
