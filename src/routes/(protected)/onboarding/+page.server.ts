import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import prisma from '../../../db.server';

export const actions = {
	default: async ({ locals, request }) => {
		if (!locals.session?.user) {
			throw redirect(302, '/login');
		}

		const { username } = Object.fromEntries(await request.formData()) as Record<string, string>;

		await prisma.user.update({
			where: {
				id: locals.session.user.id,
			},
			data: {
				username,
			},
		});

		await prisma.userSettings.update({
			where: {
				userId: locals.session.user.id,
			},
			data: {
				onboarded: true,
			},
		});
		throw redirect(302, '/home');
	},
} satisfies Actions;
