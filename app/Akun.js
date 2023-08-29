import React, { useContext } from 'react';
import {
	Box,
	Flex,
	Link,
	Center,
	Heading,
	Divider,
	Button,
	Text,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { StyleSheet, Image } from 'react-native';
import { UserContext } from '../Global/UserContext';

export default function Akun() {
	const navigation = useNavigation();
	const {
		dataName,
		setDataName,
		dataPhone,
		setDataPhone,
		dataImage,
		setDataImage,
		token,
		setToken,
	} = useContext(UserContext);
	const [isModalVisible, setModalVisible] = React.useState(false);
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	const RedirectLogout = async () => {
		try {
			await axios.post(
				'http://193.168.23.252:8082/api/v2/auth/customer/logout',
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			try {
				setModalVisible(false);
				navigation.navigate('Login');
			} catch (e) {
				alert(e);
			}
		} catch (error) {
			alert(error);
		}
	};
	return (
		<Center>
			<Box width="360" border="1" borderRadius="md">
				<Box
					rounded="lg"
					overflow="hidden"
					borderColor="coolGray.200"
					borderWidth="1"
					mt="5"
					_dark={{
						borderColor: 'coolGray.600',
						backgroundColor: 'gray.700',
					}}
					_web={{
						shadow: 2,
						borderWidth: 0,
					}}
					_light={{
						backgroundColor: 'gray.50',
					}}
					py={'5'}
				>
					<Flex direction="row">
						<Box>
							<Image
								style={styles.image}
								source={{
									uri: `http://skypay.skynetwork.id/uploads/${dataImage}`,
								}}
							/>
						</Box>
						<Box ml="5" justifyContent={'center'}>
							<Heading size="md">{dataName}</Heading>
							<Box>{dataPhone}</Box>
						</Box>
					</Flex>
					<Center>
						<Divider
							maxWidth={'340'}
							my="5"
							_light={{
								bg: 'muted.300',
							}}
							_dark={{
								bg: 'muted.50',
							}}
						/>
					</Center>
					<Flex ml="4" mb="4">
						<Link onPress={() => navigation.navigate('EditNoHP')}>
							<Heading size="sm" color={'#05CED1'}>
								Ubah No HP
							</Heading>
						</Link>
					</Flex>
					<Flex ml="4">
						<Link onPress={() => navigation.navigate('EditKataSandi')}>
							<Heading size="sm" color={'#05CED1'}>
								Ubah Kata Sandi
							</Heading>
						</Link>
					</Flex>
				</Box>
			</Box>
			<Box width="360" border="1" borderRadius="md" mt="4">
				<Button bgColor={'#05CED1'} onPress={toggleModal}>
					Logout
				</Button>

				<Modal isVisible={isModalVisible}>
					<Box
						style={{ flex: 1 }}
						bgColor={'white'}
						borderWidth={'1'}
						borderRadius={'15'}
						maxHeight={'150'}
						alignItems="center"
						justifyContent="center"
						flex="1"
					>
						<Flex>
							<Center>
								<Text mb="2" fontSize="lg">
									Anda yakin Logout?
								</Text>
								<Flex direction="row">
									<Button mr="2" onPress={RedirectLogout}>
										Logout
									</Button>
									<Button onPress={toggleModal} variant="outline">
										Cancel
									</Button>
								</Flex>
							</Center>
						</Flex>
					</Box>
				</Modal>
			</Box>
		</Center>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 75,
		height: 75,
		marginLeft: 20,
		borderRadius: 1000,
	},
});
