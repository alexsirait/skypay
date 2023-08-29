import React, { useContext } from 'react';
import { Box, Flex, Link, Center, Heading } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../Global/UserContext';

export default function Riwayat() {
	const navigation = useNavigation();
	const { semuaTagihan } = useContext(UserContext);
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
					<Box ml="3" justifyContent={'center'}>
						<Heading size="md">Riwayat Tagihan Anda</Heading>
					</Box>
					{semuaTagihan.map((a, i) => (
						<Flex
							key={i}
							mx="3"
							mt="5"
							direction="row"
							justifyContent={'space-between'}
							borderBottomWidth={'1'}
							borderBottomColor={'gray.300'}
							pb="3"
						>
							<Link
								onPress={() =>
									navigation.navigate('BerhasilBayar', { data: a })
								}
							>
								<Flex>
									<Box mb={'1'}>
										{new Intl.DateTimeFormat('en-US', {
											month: 'long',
										}).format(new Date(a.invoice_date)) +
											' ' +
											new Date(a.invoice_date).getFullYear()}
									</Box>
									<Heading size="sm">Rp. {a.price.toLocaleString()}</Heading>
								</Flex>
							</Link>
							<Link
								onPress={() =>
									navigation.navigate('BerhasilBayar', { data: a })
								}
								pl="240"
							>
								<Flex justifyContent={'center'}>
									<Icon size={20} name="angle-right" color={'#05CED1'} />
								</Flex>
							</Link>
						</Flex>
					))}
				</Box>
			</Box>
		</Center>
	);
}
