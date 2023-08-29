import React from 'react';
import { Box, Flex, Button, Center, Heading } from 'native-base';

export default function Bantuan() {
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
						<Heading size="md">Bantuan</Heading>
					</Box>
					<Flex ml="3" mt="2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
						adipisci commodi enim incidunt ipsam. Tempore assumenda provident
						quidem quas dolorem, temporibus, aliquam architecto culpa beatae
						eveniet voluptatum maiores quibusdam dolores.
					</Flex>
					<Flex>
						<Button
							onPress={() => navigation.navigate('Bayar')}
							bgColor="#05CED1"
							mt="3"
							mx="4"
							title="Submit"
						>
							Hubungi Admin
						</Button>
					</Flex>
				</Box>
			</Box>
		</Center>
	);
}
