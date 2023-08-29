import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, NativeBaseProvider } from 'native-base';
import Home from './app/Home';
import Akun from './app/Akun';
import Riwayat from './app/Riwayat';
import Bantuan from './app/Bantuan';
import Login from './app/Login';
import Bayar from './app/Bayar';
import BerhasilBayar from './app/BerhasilBayar';
import EditNoHP from './app/EditNoHP';
import EditKataSandi from './app/EditKataSandi';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { UserProvider } from './Global/UserContext';

const HomeScreen = () => {
	return <Home />;
};
const AkunScreen = () => {
	return <Akun />;
};
const RiwayatScreen = () => {
	return <Riwayat />;
};
const BantuanScreen = () => {
	return <Bantuan />;
};
const LoginScreen = () => {
	return <Login />;
};
const BayarScreen = () => {
	return <Bayar />;
};
const BerhasilBayarScreen = () => {
	return <BerhasilBayar />;
};
const EditNoHPScreen = () => {
	return <EditNoHP />;
};
const EditKataSandiScreen = () => {
	return <EditKataSandi />;
};
const Drawer = createDrawerNavigator();
function MyDrawer() {
	return (
		<Drawer.Navigator useLegacyImplementation initialRouteName="Login">
			<Drawer.Screen
				name="Home"
				component={HomeScreen}
				options={{
					drawerLabel: 'Home',
					drawerIcon: () => <Icon size={20} color={'gray'} name="home" />,
					headerRight: () => (
						<Image
							alt="Logo-Skynet"
							style={{ width: 120, height: 20, margin: 10 }}
							source={require('./assets/skynet_logo.png')}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Login"
				component={LoginScreen}
				options={{ headerShown: false, drawerItemStyle: { display: 'none' } }}
			/>
			<Drawer.Screen
				name="Akun"
				component={AkunScreen}
				options={{
					drawerLabel: 'Akun',
					headerRight: () => (
						<Image
							alt="Logo-Skynet"
							style={{ width: 120, height: 20, margin: 10 }}
							source={require('./assets/skynet_logo.png')}
						/>
					),
					drawerIcon: () => (
						<Icon size={20} color={'gray'} name="user-circle" />
					),
				}}
			/>
			<Drawer.Screen
				name="Riwayat"
				component={RiwayatScreen}
				options={{
					drawerLabel: 'Riwayat',
					headerRight: () => (
						<Image
							alt="Logo-Skynet"
							style={{ width: 120, height: 20, margin: 10 }}
							source={require('./assets/skynet_logo.png')}
						/>
					),
					drawerIcon: () => <Icon size={20} color={'gray'} name="book" />,
				}}
			/>
			<Drawer.Screen
				name="Bantuan"
				component={BantuanScreen}
				options={{
					drawerLabel: 'Bantuan',
					headerRight: () => (
						<Image
							alt="Logo-Skynet"
							style={{ width: 120, height: 20, margin: 10 }}
							source={require('./assets/skynet_logo.png')}
						/>
					),
					drawerIcon: () => (
						<Icon size={20} color={'gray'} name="question-circle" />
					),
				}}
			/>
		</Drawer.Navigator>
	);
}

const Stack = createStackNavigator();

export default function App() {
	return (
		<UserProvider>
			<NavigationContainer>
				<NativeBaseProvider>
					<Stack.Navigator
						initialRouteName="Tabs"
						screenOptions={{
							headerShown: false,
						}}
					>
						<Stack.Screen
							name="EditNoHP"
							component={EditNoHP}
							options={{
								headerShown: true,
								headerTitle: '',
								headerRight: () => (
									<Image
										alt="Logo-Skynet"
										style={{ width: 120, height: 20, margin: 10 }}
										source={require('./assets/skynet_logo.png')}
									/>
								),
							}}
						/>
						<Stack.Screen
							name="EditKataSandi"
							component={EditKataSandiScreen}
							options={{
								headerShown: true,
								headerTitle: '',
								headerRight: () => (
									<Image
										alt="Logo-Skynet"
										style={{ width: 120, height: 20, margin: 10 }}
										source={require('./assets/skynet_logo.png')}
									/>
								),
							}}
						/>
						<Stack.Screen
							name="Bayar"
							component={BayarScreen}
							options={{
								headerShown: true,
								headerTitle: '',
								headerRight: () => (
									<Image
										alt="Logo-Skynet"
										style={{ width: 120, height: 20, margin: 10 }}
										source={require('./assets/skynet_logo.png')}
									/>
								),
							}}
						/>
						<Stack.Screen
							name="BerhasilBayar"
							component={BerhasilBayarScreen}
							options={{
								headerShown: true,
								headerTitle: '',
								headerRight: () => (
									<Image
										alt="Logo-Skynet"
										style={{ width: 120, height: 20, margin: 10 }}
										source={require('./assets/skynet_logo.png')}
									/>
								),
							}}
						/>
						<Stack.Screen name="Tabs" component={MyDrawer} />
					</Stack.Navigator>
				</NativeBaseProvider>
			</NavigationContainer>
		</UserProvider>
	);
}
