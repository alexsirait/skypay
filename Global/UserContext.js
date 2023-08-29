import React from 'react';

const UserContext = React.createContext('');

const UserProvider = ({ children }) => {
	const [token, setToken] = React.useState('');
	const [dataName, setDataName] = React.useState('');
	const [dataPhone, setDataPhone] = React.useState('');
	const [dataImage, setDataImage] = React.useState('');

	const [dataTagihanSaatIni, setDataTagihanSaatIni] = React.useState({});
	const [semuaTagihan, setSemuaTagihan] = React.useState([]);
	const [riwayat, setRiwayat] = React.useState([]);

	return (
		<UserContext.Provider
			value={{
				dataName,
				setDataName,
				dataPhone,
				setDataPhone,
				dataImage,
				setDataImage,
				token,
				setToken,
				dataTagihanSaatIni,
				setDataTagihanSaatIni,
				semuaTagihan,
				setSemuaTagihan,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
