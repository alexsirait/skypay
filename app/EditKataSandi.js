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
import { useToast } from 'native-base';

export default function EditKataSandi() {
	const toast = useToast();
	const { control } = useForm({ mode: 'onBlur' });
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
							<Heading size="md">Ubah Kata Sandi</Heading>
						</Box>
					</Flex>
					<FormControl isRequired>
						<Stack mx="5" mb="2">
							<FormControl.Label>
								Masukkan kata sandi lama anda
							</FormControl.Label>
							<Controller
								control={control}
								name="kata_sandi_lama"
								render={({ field: { onChange, value } }) => (
									<Input
										type="password"
										placeholder="Masukkan kata sandi lama anda"
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
						<Stack mx="5" mb="2">
							<FormControl.Label>
								Masukkan kata sandi baru anda
							</FormControl.Label>
							<Controller
								control={control}
								name="kata_sandi_baru"
								render={({ field: { onChange, value } }) => (
									<Input
										type="password"
										placeholder="Masukkan kata sandi lama anda"
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
						<Stack mx="5" mb="2">
							<FormControl.Label>
								Konfirmasi kata sandi baru anda
							</FormControl.Label>
							<Controller
								control={control}
								name="kata_sandi_baru_2"
								render={({ field: { onChange, value } }) => (
									<Input
										type="password"
										placeholder="Masukkan kata sandi lama anda"
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
							onPress={() =>
								toast.show({
									description: 'Berhasil !',
								})
							}
							bgColor="#05CED1"
							mt="2"
							mx="5"
							title="Submit"
						>
							Simpan Kata Sandi
						</Button>
					</FormControl>
				</Box>
			</Box>
		</Center>
	);
}
