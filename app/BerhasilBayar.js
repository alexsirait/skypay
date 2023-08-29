import React from 'react';
import {
	Box,
	Flex,
	Button,
	Center,
	Heading,
	Divider,
	ScrollView,
} from 'native-base';
import { useRoute } from '@react-navigation/native';

export default function BerhasilBayar() {
	const route = useRoute();
	const { data } = route.params;
	console.log(
		new Intl.DateTimeFormat('en-US', {
			month: 'long',
		}).format(new Date(data.invoice_date)) +
			' ' +
			new Date(data.invoice_date).getFullYear()
	);
	console.log(data);
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
						<Box ml="3" justifyContent={'center'}>
							<Heading size="md">Pembayaran Berhasil</Heading>
							<Box>Invoice #: 093812</Box>
						</Box>

						<Flex mx="3" mt="5">
							<Box mb={'3'}>Periode Tagihan</Box>
							<Box mx="3">
								<Heading size="sm">Agustus 2023</Heading>
							</Box>
						</Flex>
						<Flex mx="3" mt="5">
							<Box mb={'3'}>Dibayar pada</Box>
							<Box mx="3">
								<Heading size="sm">23 Agustus 2023 - 16:04</Heading>
							</Box>
						</Flex>
						<Flex mx="3" mt="5">
							<Box mb={'3'}>Jumlah yang dibayar</Box>
							<Box mx="3">
								<Heading size="sm">Rp. 165.000</Heading>
							</Box>
						</Flex>
						<Flex mx="3" mt="5">
							<Box mb={'3'}>Metode Pembayaran</Box>
							<Box mx="3">
								<Heading size="sm">ALFAGROUP</Heading>
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
						<Flex mt="2" direction="row" justifyContent={'space-between'}>
							<Box mx="3">SkynetHome 10Mb</Box>
							<Box mx="3">
								<Heading size="xs">Rp. 165.000</Heading>
							</Box>
						</Flex>
						<Flex mt="2" direction="row" justifyContent={'space-between'}>
							<Box mx="3">Diskon</Box>
							<Box mx="3">
								<Heading size="xs">Rp.0</Heading>
							</Box>
						</Flex>
						<Flex mt="2" direction="row" justifyContent={'space-between'}>
							<Box mx="3">Total</Box>
							<Box mx="3">
								<Heading size="xs">Rp. 165.000</Heading>
							</Box>
						</Flex>
						<Flex mt="3">
							<Button
								onPress={() => navigation.navigate('Bayar')}
								bgColor="#05CED1"
								mt="2"
								mx="4"
								title="Submit"
							>
								Download Invoice
							</Button>
						</Flex>
					</Box>
				</Box>
			</Center>
		</ScrollView>
	);
}
