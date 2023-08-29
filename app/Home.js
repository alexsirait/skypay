import React, { useContext, useState } from 'react';
import { Box, Flex, Button, Center, Heading, Badge } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image } from 'react-native';
import { UserContext } from '../Global/UserContext';

export default function Home() {
	const navigation = useNavigation();
	const { dataName, dataPhone, dataImage, dataTagihanSaatIni } =
		useContext(UserContext);
	console.log(dataTagihanSaatIni);
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
				</Box>
			</Box>
			{dataTagihanSaatIni === undefined && (
				<>
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
							<Flex direction="row" justifyContent={'space-between'}>
								<Box mx="3">Tagihan bulan ini</Box>
								<Box mx="3">
									<Badge colorScheme="success">Sudah Dibayar</Badge>
								</Box>
							</Flex>
							<Flex mx="3" mt="2" mb="4">
								<Heading size="xl">Rp. -</Heading>
							</Flex>
							<Flex>
								<Button
									onPress={() => navigation.navigate('Riwayat')}
									bgColor="#05CED1"
									mt="2"
									mx="4"
									title="Submit"
								>
									Riwayat
								</Button>
							</Flex>
						</Box>
					</Box>
				</>
			)}
			{dataTagihanSaatIni?.subscription_id !== null &&
				dataTagihanSaatIni?.subscription_payments[0]?.status !== 1 && (
					<>
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
								<Flex direction="row" justifyContent={'space-between'}>
									<Box mx="3">Tagihan bulan ini</Box>
									<Box mx="3">
										<Badge colorScheme="danger">Belum Dibayar</Badge>
									</Box>
								</Flex>
								<Flex mx="3" mt="2">
									<Heading size="xl">
										Rp. {dataTagihanSaatIni?.price.toLocaleString()}
									</Heading>
								</Flex>
								<Flex mt="2" direction="row" justifyContent={'space-between'}>
									<Box mx="3">Bayar Sebelum</Box>
									<Box mx="3">
										{new Date(dataTagihanSaatIni?.due_date).getDate() +
											' ' +
											new Intl.DateTimeFormat('en-US', {
												month: 'long',
											}).format(new Date(dataTagihanSaatIni?.due_date)) +
											' ' +
											new Date(dataTagihanSaatIni?.due_date).getFullYear()}
									</Box>
								</Flex>
								<Flex>
									<Button
										onPress={() => navigation.navigate('Bayar')}
										bgColor="#05CED1"
										mt="2"
										mx="4"
										title="Submit"
									>
										Bayar
									</Button>
								</Flex>
							</Box>
						</Box>
					</>
				)}
			{dataTagihanSaatIni?.subscription_payments[0]?.status === 0 && (
				<>
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
							<Flex direction="row" justifyContent={'space-between'}>
								<Box mx="3">Tagihan bulan ini</Box>
								<Box mx="3">
									<Badge colorScheme="danger">Belum Dibayar</Badge>
								</Box>
							</Flex>
							<Flex mx="3" mt="2">
								<Heading size="xl">
									Rp. {dataTagihanSaatIni?.price.toLocaleString()}
								</Heading>
							</Flex>
							<Flex mt="2" direction="row" justifyContent={'space-between'}>
								<Box mx="3">Bayar Sebelum</Box>
								<Box mx="3">
									{new Date(dataTagihanSaatIni?.due_date).getDate() +
										' ' +
										new Intl.DateTimeFormat('en-US', {
											month: 'long',
										}).format(new Date(dataTagihanSaatIni?.due_date)) +
										' ' +
										new Date(dataTagihanSaatIni?.due_date).getFullYear()}
								</Box>
							</Flex>
							<Flex>
								<Button
									onPress={() => navigation.navigate('Bayar')}
									bgColor="#05CED1"
									mt="2"
									mx="4"
									title="Submit"
								>
									Bayar
								</Button>
							</Flex>
						</Box>
					</Box>
				</>
			)}
			{dataTagihanSaatIni?.subscription_payments[0]?.status == 1 && (
				<>
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
							<Flex direction="row" justifyContent={'space-between'}>
								<Box mx="3">Tagihan bulan ini</Box>
								<Box mx="3">
									<Badge colorScheme="success">Sudah Dibayar</Badge>
								</Box>
							</Flex>
							<Flex mx="3" mt="2" mb="4">
								<Heading size="xl">Rp. -</Heading>
							</Flex>
							<Flex>
								<Button
									onPress={() => navigation.navigate('Riwayat')}
									bgColor="#05CED1"
									mt="2"
									mx="4"
									title="Submit"
								>
									Riwayat
								</Button>
							</Flex>
						</Box>
					</Box>
				</>
			)}
			{dataTagihanSaatIni?.subscription_payments[0]?.status == 2 && (
				<>
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
							<Flex direction="row" justifyContent={'space-between'}>
								<Box mx="3">Tagihan bulan ini</Box>
								<Box mx="3">
									<Badge colorScheme="warning">Kadaluarsa</Badge>
								</Box>
							</Flex>
							<Flex mx="3" mt="2" mb="4">
								<Heading size="xl">Rp. -</Heading>
							</Flex>
							<Flex>
								<Button
									onPress={() => navigation.navigate('Riwayat')}
									bgColor="#05CED1"
									mt="2"
									mx="4"
									title="Submit"
								>
									Riwayat
								</Button>
							</Flex>
						</Box>
					</Box>
				</>
			)}
			{dataTagihanSaatIni?.subscription_payments[0]?.status == 3 && (
				<>
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
							<Flex direction="row" justifyContent={'space-between'}>
								<Box mx="3">Tagihan bulan ini</Box>
								<Box mx="3">
									<Badge colorScheme="info">Dikembalikan</Badge>
								</Box>
							</Flex>
							<Flex mx="3" mt="2" mb="4">
								<Heading size="xl">Rp. -</Heading>
							</Flex>
							<Flex>
								<Button
									onPress={() => navigation.navigate('Riwayat')}
									bgColor="#05CED1"
									mt="2"
									mx="4"
									title="Submit"
								>
									Riwayat
								</Button>
							</Flex>
						</Box>
					</Box>
				</>
			)}
			{dataTagihanSaatIni?.subscription_payments[0]?.status == 4 && (
				<>
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
							<Flex direction="row" justifyContent={'space-between'}>
								<Box mx="3">Tagihan bulan ini</Box>
								<Box mx="3">
									<Badge colorScheme="danger">Gagal</Badge>
								</Box>
							</Flex>
							<Flex mx="3" mt="2" mb="4">
								<Heading size="xl">Rp. -</Heading>
							</Flex>
							<Flex>
								<Button
									onPress={() => navigation.navigate('Riwayat')}
									bgColor="#05CED1"
									mt="2"
									mx="4"
									title="Submit"
								>
									Riwayat
								</Button>
							</Flex>
						</Box>
					</Box>
				</>
			)}
			{dataTagihanSaatIni?.subscription_payments[0]?.status == 5 && (
				<>
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
							<Flex direction="row" justifyContent={'space-between'}>
								<Box mx="3">Tagihan bulan ini</Box>
								<Box mx="3">
									<Badge colorScheme="info">Mennggu Konfirmasi</Badge>
								</Box>
							</Flex>
							<Flex mx="3" mt="2" mb="4">
								<Heading size="xl">Rp. -</Heading>
							</Flex>
							<Flex>
								<Button
									onPress={() => navigation.navigate('Riwayat')}
									bgColor="#05CED1"
									mt="2"
									mx="4"
									title="Submit"
								>
									Riwayat
								</Button>
							</Flex>
						</Box>
					</Box>
				</>
			)}
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
