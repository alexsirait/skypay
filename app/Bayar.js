import React, { useContext } from 'react';
import {
	Box,
	Text,
	Flex,
	Center,
	Image,
	Heading,
	Badge,
	Divider,
	ScrollView,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { UserContext } from '../Global/UserContext';

export default function Bayar() {
	const { dataTagihanSaatIni } = useContext(UserContext);

	const periodeDate = new Date(dataTagihanSaatIni.invoice_date);
	const priodeFormat = new Intl.DateTimeFormat('en-US', {
		month: 'long',
	}).format(periodeDate);

	const dueDate = new Date(dataTagihanSaatIni.due_date);
	const dueFormat = new Intl.DateTimeFormat('en-US', {
		month: 'long',
	}).format(dueDate);
	return (
		<ScrollView h="80">
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
						<Flex mt="2" direction="row" justifyContent={'space-between'}>
							<Box mx="3">
								<Heading size="sm">Tagihan Anda</Heading>
							</Box>
							<Box mx="3">
								<Badge colorScheme="danger">Belum Dibayar</Badge>
							</Box>
						</Flex>
						<Flex mx="3" mt="5">
							<Box mb={'3'}>Periode Tagihan</Box>
							<Box mx="3">
								<Heading size="sm">
									{priodeFormat + ' ' + periodeDate.getFullYear()}
								</Heading>
							</Box>
						</Flex>
						<Flex mx="3" mt="5">
							<Box mb={'3'}>Batas Waktu Pembayaran</Box>
							<Box mx="3">
								<Heading size="sm">
									{dueDate.getDate() +
										' ' +
										dueFormat +
										' ' +
										dueDate.getFullYear()}
								</Heading>
							</Box>
						</Flex>
						<Flex mx="3" mt="5">
							<Box mb={'3'}>Jumlah yang harus dibayar</Box>
							<Box mx="3">
								<Heading size="sm">
									Rp. {dataTagihanSaatIni.price.toLocaleString()}
								</Heading>
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
						<Flex mx="3">
							<Heading size="xs">Rincian Tagihan</Heading>
						</Flex>
						{dataTagihanSaatIni.items.map((a, i) => (
							<Box key={i}>
								<Flex mt="2" direction="row" justifyContent={'space-between'}>
									<Box mx="3">{a.name}</Box>
									<Box mx="3">
										<Heading size="xs">Rp. {a.price.toLocaleString()}</Heading>
									</Box>
								</Flex>
								<Flex mt="2" direction="row" justifyContent={'space-between'}>
									<Box mx="3">Diskon</Box>
									<Box mx="3">
										<Heading size="xs">
											Rp. {a.discount_val.toLocaleString()}
										</Heading>
									</Box>
								</Flex>
							</Box>
						))}

						<Flex mt="4" direction="row" justifyContent={'space-between'}>
							<Box mx="3">Total</Box>
							<Box mx="3">
								<Heading size="xs">
									Rp. {dataTagihanSaatIni.price.toLocaleString()}
								</Heading>
							</Box>
						</Flex>
						<Center>
							<Divider
								maxWidth={'340'}
								my="4"
								_light={{
									bg: 'muted.300',
								}}
								_dark={{
									bg: 'muted.50',
								}}
							/>
						</Center>
						<Box mx="3">
							<Heading size="sm">Metode Pembayaran</Heading>
						</Box>
						<Flex
							mt="2"
							direction="row"
							justifyContent={'space-between'}
							borderBottomWidth={'1'}
							borderBottomColor={'gray.300'}
							py="2"
						>
							<Flex direction="row">
								<Box mr="5">
									<Image
										size={'4'}
										width={'50'}
										ml="4"
										source={{
											uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/ALFAMART_LOGO_BARU.png/1200px-ALFAMART_LOGO_BARU.png',
										}}
										alt="Alternate Text"
									/>
								</Box>
								<Box direction="row">
									<Heading size="xs">ALFAGROUP</Heading>
								</Box>
							</Flex>
							<Box mx="3">
								<Text>
									<Icon size={20} name="angle-down" />
								</Text>
							</Box>
						</Flex>
						<Flex
							mt="2"
							direction="row"
							justifyContent={'space-between'}
							borderBottomWidth={'1'}
							borderBottomColor={'gray.300'}
							py="2"
						>
							<Flex direction="row">
								<Box mr="5">
									<Image
										size={'4'}
										width={'50'}
										ml="4"
										source={{
											uri: 'https://img2.pngdownload.id/20180810/gsp/kisspng-logo-bank-cimb-niaga-surabaya-global-sentra-solusi-5b6d9aa79c7787.9060909815339096716409.jpg',
										}}
										alt="Alternate Text"
									/>
								</Box>
								<Box direction="row">
									<Heading size="xs">CIMB VA</Heading>
								</Box>
							</Flex>
							<Box mx="3">
								<Text>
									<Icon size={20} name="angle-down" />
								</Text>
							</Box>
						</Flex>
						<Flex
							mt="2"
							direction="row"
							justifyContent={'space-between'}
							borderBottomWidth={'1'}
							borderBottomColor={'gray.300'}
							py="2"
						>
							<Flex direction="row">
								<Box mr="5">
									<Image
										size={'4'}
										width={'50'}
										ml="4"
										source={{
											uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Danamon.svg/2560px-Danamon.svg.png',
										}}
										alt="Alternate Text"
									/>
								</Box>
								<Box direction="row">
									<Heading size="xs">DANAMON ONLINE BANKING</Heading>
								</Box>
							</Flex>
							<Box mx="3">
								<Text>
									<Icon size={20} name="angle-down" />
								</Text>
							</Box>
						</Flex>
					</Box>
				</Box>
			</Center>
		</ScrollView>
	);
}
