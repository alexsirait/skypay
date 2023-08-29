import React from 'react';
import {
	Box,
	Input,
	FormControl,
	Stack,
	WarningOutlineIcon,
	Flex,
	Button,
	Center,
	Heading,
} from 'native-base';
import { Controller, useForm } from 'react-hook-form';

export default function EditNoHP() {
	const { control, handleSubmit } = useForm({ mode: 'onBlur' });
	const onSubmit = (data) => console.log(data);
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
						<Box ml="5" mb="3" justifyContent={'center'}>
							<Heading size="md">Ubah Nomor HP</Heading>
						</Box>
					</Flex>
					<FormControl isRequired>
						<Stack mx="5" mb="2">
							<FormControl.Label>Masukkan Nomor HP Baru Anda</FormControl.Label>
							<Controller
								control={control}
								name="noHp"
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
						<Button
							onPress={handleSubmit(onSubmit)}
							bgColor="#05CED1"
							mt="2"
							mx="5"
							title="Submit"
						>
							Simpan No HP
						</Button>
					</FormControl>
				</Box>
			</Box>
		</Center>
	);
}
