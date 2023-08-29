import React, { useContext } from 'react';
import {
	Box,
	Input,
	FormControl,
	Stack,
	WarningOutlineIcon,
	Text,
	Flex,
	Button,
	Link,
	Center,
	Image,
} from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { UserContext } from '../Global/UserContext';

export default function Login() {
	const {
		setDataName,
		setDataPhone,
		setDataImage,
		setToken,
		setDataTagihanSaatIni,
		setSemuaTagihan,
	} = useContext(UserContext);
	const { control, handleSubmit } = useForm({ mode: 'onBlur' });
	const navigation = useNavigation();
	const onSubmit = async (data) => {
		const phone_number = '087714697580';
		const password = '087714697580';

		if (phone_number === undefined || password === undefined) {
			alert('Data anda salah');
			return;
		}
		const post = { phone_number: '087714697580', password: '087714697580' };
		try {
			const token = await axios.post(
				'http://193.168.23.252:8082/api/v2/auth/customer/login',
				post
			);
			const res = await axios.post(
				'http://193.168.23.252:8082/api/v2/customer/me',
				{},
				{
					headers: {
						Authorization: `Bearer ${token.data.data.access_token}`,
						'Content-Type': 'application/json',
					},
				}
			);
			const tagihanSaatIni = await axios.post(
				'http://193.168.23.252:8082/api/v2/customer/invoices',
				{ period: 'this_month' },
				{
					headers: {
						Authorization: `Bearer ${token.data.data.access_token}`,
						'Content-Type': 'application/json',
					},
				}
			);
			const semuaTagihan = await axios.post(
				'http://193.168.23.252:8082/api/v2/customer/invoices',
				{ status: 'all', period: 'all' },
				{
					headers: {
						Authorization: `Bearer ${token.data.data.access_token}`,
						'Content-Type': 'application/json',
					},
				}
			);
			try {
				setDataName(res.data.data.name);
				setDataPhone(res.data.data.phone_number);
				setDataImage(res.data.data.identity_photo);
				setToken(token.data.data.access_token);
				setDataTagihanSaatIni(tagihanSaatIni.data.data.data[0]);
				setSemuaTagihan(semuaTagihan.data.data.data);
				navigation.navigate('Home');
			} catch (error) {
				alert(error);
			}
		} catch (e) {
			alert('Data anda salah!');
		}
	};
	return (
		<Box alignItems="center" justifyContent="center" flex="1">
			<Box w="100%" maxWidth="300px" borderRadius="10">
				<Center mb={'5'}>
					<Image
						source={{
							uri: 'https://skynetwork.id/images/logo.png',
						}}
						alt="Logo_SKYNet"
						size="xl"
						width={'200'}
					/>
				</Center>
				<Box
					maxW="80"
					rounded="lg"
					overflow="hidden"
					borderColor="coolGray.200"
					borderWidth="1"
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
					<Text
						color="#05CED1"
						mx="4"
						fontWeight="medium"
						fontSize="xl"
						bold
						mb="4"
					>
						Masuk SkyPay
					</Text>
					<FormControl isRequired>
						<Stack mx="4">
							<FormControl.Label>Nomor HP</FormControl.Label>
							<Controller
								control={control}
								name="phone_number"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Masukkan no hp anda"
										value={value}
										onChangeText={(value) => onChange(value)}
									/>
								)}
							/>
							<FormControl.ErrorMessage
								leftIcon={<WarningOutlineIcon size="xs" />}
							>
								Atleast 6 characters are required.
							</FormControl.ErrorMessage>
						</Stack>
						<Stack mx="4">
							<FormControl.Label>Kata Sandi</FormControl.Label>
							<Controller
								control={control}
								name="password"
								render={({ field: { onChange, value } }) => (
									<Input
										placeholder="Masukkan kata sandi anda"
										type="password"
										value={value}
										onChangeText={(value) => onChange(value)}
									/>
								)}
							/>
						</Stack>
						<Button
							onPress={handleSubmit(onSubmit)}
							bgColor="#05CED1"
							mt="2"
							mx="4"
							title="Submit"
						>
							Masuk
						</Button>

						<Flex direction="row">
							<Text isTruncated ml="4">
								Belum punya akun?{' '}
							</Text>
							<Link
								_text={{
									_light: {
										color: '#05CED1',
									},
									color: '#05CED1',
								}}
								isUnderlined
								_hover={{
									_text: {
										_light: {
											color: '#05CED1',
										},
										color: 'cyan.400',
									},
								}}
							>
								Daftar di sini
							</Link>
						</Flex>
					</FormControl>
				</Box>
			</Box>
		</Box>
	);
}
