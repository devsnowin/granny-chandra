import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals, route }) => {
	if (
		locals.session?.user &&
		!locals.session.user.username &&
		route.id !== '/(protected)/onboarding'
	) {
		throw redirect(302, '/onboarding');
	}
	if (
		locals.session?.user &&
		locals.session.user.username &&
		route.id === '/(protected)/onboarding'
	) {
		throw redirect(302, '/');
	}
	return {
		session: locals.session,
	};
}) satisfies LayoutServerLoad;
